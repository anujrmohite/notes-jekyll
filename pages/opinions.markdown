---
layout: page
title: Opinions
permalink: /opinions/
background_color: "#fffef5"
---

<div class="category-page">

  <div class="category-header">
    <div class="category-icon">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </div>
    <p class="category-intro">Thoughts, reflections, and random tangents.</p>
  </div>

  <ul class="category-posts">
    {% assign post_count = 0 %}
    {% for post in site.posts %}
      {% if post.categories contains 'opinions' %}
        {% if post_count < 10 %}
        <li class="category-post-item">
          <div class="post-date-card">
            <span class="date-day">{{ post.date | date: "%d" }}</span>
            <span class="date-month">{{ post.date | date: "%b" }}</span>
          </div>
          <div class="post-details">
            <a href="{{ post.url | relative_url }}" class="post-title">{{ post.title }}</a>
          </div>
          <svg class="post-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </li>
        {% assign post_count = post_count | plus: 1 %}
        {% endif %}
      {% endif %}
    {% endfor %}
  </ul>

  <div class="category-footer">
    <a href="{{ '/archives/' | relative_url }}" class="archives-link">
      <span>View all in Archives</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </a>
  </div>

</div>

<style>
{% include category-page-styles.html %}
</style>
