---
layout: default
title: Exhibitions - Peter Mitten
description: Peter Mitten's exhibition history including upcoming shows, solo exhibitions, and group shows across the United States.
permalink: /exhibitions/
---

{% assign upcoming = site.exhibitions | where_exp: "ex", "ex.past != true" | sort: "date" %}
{% assign solo = site.exhibitions | where: "past", true | where: "category", "solo" | sort: "year" | reverse %}
{% assign selected = site.exhibitions | where: "past", true | where: "category", "selected" | sort: "year" | reverse %}

{% if upcoming.size > 0 %}
## Upcoming

{% for ex in upcoming %}
<div class="exhibition-upcoming">

<h3>{{ ex.title }}</h3>

<p class="exhibition-meta">{{ ex.date | date: "%A, %B %-d, %Y" }}{% if ex.venue %} &mdash; {{ ex.venue }}{% if ex.location %}, {{ ex.location }}{% endif %}{% endif %}</p>

{{ ex.content }}

{% if ex.link %}<a class="exhibition-link" href="{{ ex.link }}" target="_blank" rel="noopener">More information →</a>{% endif %}

</div>
{% unless forloop.last %}<hr>{% endunless %}
{% endfor %}

---
{% endif %}

## One Person Exhibitions

{% for ex in solo %}
- {% if ex.link and ex.link != "" %}<a href="{{ ex.link }}" target="_blank" rel="noopener">{{ ex.title }}</a>{% else %}{{ ex.title }}{% endif %}{% if ex.venue and ex.venue != ex.title %}, {{ ex.venue }}{% endif %}{% if ex.location %}, {{ ex.location }}{% endif %}{% if ex.year %} — {{ ex.year }}{% endif %}
{% endfor %}

## Selected Exhibitions

{% for ex in selected %}
- {% if ex.link and ex.link != "" %}<a href="{{ ex.link }}" target="_blank" rel="noopener">{{ ex.title }}</a>{% else %}{{ ex.title }}{% endif %}{% if ex.location %}, {{ ex.location }}{% endif %}{% if ex.year %} — {{ ex.year }}{% endif %}
{% endfor %}
