---
layout: page
title: Movies
permalink: /movies/
background_color: "#fff5f5"
---

<div class="category-page">

  <div class="category-header">
    <h1 class="category-title">Movies</h1>
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
.category-header {
  background: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.65)),
    url('/notes-by/assets/images/movies-bg.png') !important;
  background-size: cover !important;
  background-position: center !important;
}
body.dark-mode .category-header {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.75)),
    url('/notes-by/assets/images/movies-bg.png') !important;
  background-size: cover !important;
  background-position: center !important;
}
</style>
