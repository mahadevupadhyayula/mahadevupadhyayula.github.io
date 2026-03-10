---
layout: page
title: Blogs
permalink: /blogs/
---

{% assign blog_pages = site.pages | where_exp: "item", "item.url contains '/blog/'" | sort: "date" | reverse %}

<div class="blog-list" aria-label="All blogs">
  {% for blog in blog_pages %}
    <article class="blog-list-item">
      <a class="blog-list-image-link" href="{{ blog.url | relative_url }}" aria-label="Read {{ blog.title }}">
        <img class="blog-list-image" src="{{ blog.image | relative_url }}" alt="{{ blog.title }}" loading="lazy">
      </a>
      <div class="blog-list-content">
        <h2><a href="{{ blog.url | relative_url }}">{{ blog.title }}</a></h2>
        {% if blog.subtitle %}
          <p class="blog-list-subtitle">{{ blog.subtitle }}</p>
        {% endif %}
      </div>
    </article>
  {% endfor %}
</div>
