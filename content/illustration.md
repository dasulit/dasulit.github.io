---
layout: layout.njk
title: Illustration
templateEngineOverride: njk,md
eleventyNavigation:
  key: Illustration
  order: 2
images:
  - src: illustration/illustration-001.png
    caption: ""
  - pair:
    - src: illustration/illustration-002.png
      caption: ""
    - src: illustration/illustration-003.png
      caption: ""
  - pair:
    - src: illustration/illustration-004.png
      caption: ""
    - src: illustration/illustration-005.png
      caption: ""
---

# Illustration

{% for item in images %}
  {% if item.pair %}
    <div class="illustration-pair">
      {% for image in item.pair %}
        <figure class="illustration-figure">
          <img src="/img/{{ image.src }}" alt="{{ image.caption }}" width="1600">
          {% if image.caption %}<figcaption>{{ image.caption }}</figcaption>{% endif %}
        </figure>
      {% endfor %}
    </div>
  {% else %}
    <figure class="illustration-figure">
      <img src="/img/{{ item.src }}" alt="{{ item.caption }}" width="1600">
      {% if item.caption %}<figcaption>{{ item.caption }}</figcaption>{% endif %}
    </figure>
  {% endif %}
{% endfor %}
