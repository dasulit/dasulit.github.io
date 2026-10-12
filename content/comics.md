---
layout: layout.njk
title: Comics
templateEngineOverride: njk,md
eleventyNavigation:
  key: Comics
  order: 3
---

# Comics

<ul>
{% for comic in collections.comics | sort(false, false, "data.order") %}
  <li>
    <a href="{{ comic.url }}" class="comic-card">
      ⎯ {{ comic.data.title }} ({{ comic.data.year }})
    </a>
  </li>
{% endfor %}
</ul>