---
layout: layout.njk
title: Illustration
templateEngineOverride: njk,md
eleventyNavigation:
  key: Illustration
  order: 2
images:
  - src: illustration/illustration-001.png
    caption: "Biker in the Philippines, pen/marker -> scanned -> riso-printed"
  - src: illustration/illustration-011.png
    caption: "Page from an ongoing comic about traveling with my family in Boracay, Philippines"
  - src: illustration/illustration-010.png
    caption: "Vows to Alexander"
  - src: illustration/illustration-006.png
    caption: "Childhood visit to the Philippines, pen/marker"
  - src: illustration/illustration-009.png
    caption: "View from Lasita in LA"
  - src: illustration/illustration-012.png
    caption: "Olivia Rodrigo in Stupid Song"
  - pair:
    - src: illustration/illustration-004.png
      caption: "Sneakers on a summer day, colored pencil"
    - src: illustration/illustration-007.png
      caption: "Diving into a pool, colored pencil"
  - pair:
    - src: illustration/illustration-002.png
      caption: "DC Rowhomes, colored pencil"
    - src: illustration/illustration-003.png
      caption: "Alexander in Montreal, colored pencil"
  - pair:
    - src: illustration/illustration-005.png
      caption: "Martini with a twist, colored pencil"

---

# Illustration

{% for item in images %}
  {% if item.pair %}
    <div class="illustration-pair">
      {% for image in item.pair %}
        <figure class="illustration-figure">
          <img src="/img/{{ image.src }}" alt="{{ image.caption }}" width="1600">
        </figure>
      {% endfor %}
    </div>
  {% else %}
    <figure class="illustration-figure">
      <img src="/img/{{ item.src }}" alt="{{ item.caption }}" width="1600">
    </figure>
  {% endif %}
{% endfor %}
