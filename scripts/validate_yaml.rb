
require "yaml"

errors = []

Dir.glob("**/*.{yml,yaml}", File::FNM_DOTMATCH).each do |file|
  next if file.start_with?("_site/", "vendor/", ".git/")

  begin
    YAML.parse_file(file)
    puts "OK: #{file}"
  rescue Psych::SyntaxError => e
    errors << "#{file}: #{e.message}"
  end
end

if errors.any?
  errors.each { |error| warn "::error::#{error}" }
  exit 1
end

puts "YAML validation passed."
