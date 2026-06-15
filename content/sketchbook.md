---
layout: layout.njk
title: Sketchbook
templateEngineOverride: njk,md
eleventyNavigation:
  key: Sketchbook
  order: 3
images:
  - src: sketchbook/sketchbook-007.png
    caption: "Shrimp tacos in LA"
  - src: sketchbook/sketchbook-015.png
    caption: "Nicely arranged produce"
  - src: sketchbook/sketchbook-004.png
    caption: "Schuylkill River Park, spring felt like summer"
  - src: sketchbook/sketchbook-013.png
    caption: "Mind wandering at a web dev conference in Paris"
  - src: sketchbook/sketchbook-001.png
    caption: "Berlin vignettes"
  - src: sketchbook/sketchbook-008.png
    caption: "Café Bosco, home in Montreal"
  - src: sketchbook/sketchbook-011.png
    caption: "Scenes waiting for Desfile de Alebrijes Monumentales"
  - src: sketchbook/sketchbook-002.png
    caption: "Day drinking with Alexander in a food market in Rome"
  - src: sketchbook/sketchbook-018.png
    caption: "Traffic in Manila"
  - src: sketchbook/sketchbook-014.png
    caption: "People-watching in Paris for hours"
  - src: sketchbook/sketchbook-010.png
    caption: "CDMX"
  - src: sketchbook/sketchbook-009.png
    caption: "ACE Outpost in Philly"
  - src: sketchbook/sketchbook-012.jpeg
    caption: "Drinking coffee in CDMX"
  - src: sketchbook/sketchbook-016.png
    caption: "Drawing to capture the feeling of my first time along the Seine"
  - src: sketchbook/sketchbook-005.png
    caption: "Sitting at the bar at Solar Myth in Philly"
  - src: sketchbook/sketchbook-006.png
    caption: "Sitting at the bar at Solar Myth in Philly"
  - src: sketchbook/sketchbook-017.png
    caption: "Family visit to Manila, all 5 of us sharing a room"
---

# Sketchbook

Drawing what's around me, mostly while traveling

<div class="sketchbook">
  {% for image in images %}
    <figure>
      <img src="/img/{{ image.src }}" alt="{{ image.caption }}" width="1200">
      <figcaption>{{ image.caption }}</figcaption>
    </figure>
  {% endfor %}
</div>
