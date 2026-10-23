
require "yaml"
require "date"

REQUIRED_FIELDS = {
  "title" => String,
  "year" => Integer,
  "category" => String,
  "images" => Array
}.freeze

OPTIONAL_FIELDS = {
  "location" => String,
  "materials" => String,
  "description" => String
}.freeze

errors = []
files = Dir.glob("_works/**/*.{md,markdown}")

files.each do |file|
  content = File.read(file)

  # check for leading and trailing "---" around front matter
  match = content.match(/\A---\s*\r?\n(.*?)\r?\n---\s*(?:\r?\n|\z)/m)

  unless match
    errors << "#{file}: missing YAML front matter"
    next
  end

  begin
    data = YAML.safe_load(
      match[1],
      permitted_classes: [Date, Time],
      filename: file
    )

    unless data.is_a?(Hash)
      errors << "#{file}: front matter must be a mapping"
      next
    end

    REQUIRED_FIELDS.each do |field, type|
      value = data[field]

      unless value.is_a?(type) &&
             !(value.respond_to?(:empty?) && value.empty?)
        errors << "#{file}: #{field} must be a nonempty #{type}"
      end
    end

    OPTIONAL_FIELDS.each do |field, type|
      next unless data.key?(field)

      unless data[field].is_a?(type)
        errors << "#{file}: #{field} must be a #{type}"
      end
    end

    if data["images"].is_a?(Array)
      data["images"].each_with_index do |image, index|
        unless image.is_a?(String) && !image.strip.empty?
          errors << "#{file}: images[#{index}] must be a path string (e.g., /assets/images/works/example/example.png)"
          next
        end

        path = image.delete_prefix("/")

        unless File.file?(path)
          errors << "#{file}: image not found: #{image}"
        end
      end
    end

  rescue Psych::Exception => e
    errors << "#{file}: invalid YAML: #{e.message}"
  end
end

if errors.any?
  errors.each { |error| warn "::error::#{error}" }
  exit 1
end

puts "Validated #{files.length} sculptures successfully."
