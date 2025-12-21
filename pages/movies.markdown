---
layout: page
title: Movies
permalink: /movies/
background_color: "#fff5f5"
---

<div class="category-page">

  <div class="category-header">
    <div class="category-icon">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
        <line x1="7" y1="2" x2="7" y2="22"></line>
        <line x1="17" y1="2" x2="17" y2="22"></line>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <line x1="2" y1="7" x2="7" y2="7"></line>
        <line x1="2" y1="17" x2="7" y2="17"></line>
        <line x1="17" y1="17" x2="22" y2="17"></line>
        <line x1="17" y1="7" x2="22" y2="7"></line>
      </svg>
    </div>
    <p class="category-intro">Films I've watched, loved, or found thought-provoking.</p>
  </div>

  <ul class="category-posts">
    {% assign post_count = 0 %}
    {% for post in site.posts %}
      {% if post.categories contains 'movies' %}
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
