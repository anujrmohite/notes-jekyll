---
layout: page
title: AI
permalink: /ai/
background_color: "#f0fdf4"
---

<div class="category-page">

  <div class="category-header">
    <div class="category-icon">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A1.5 1.5 0 0 0 6 14.5 1.5 1.5 0 0 0 7.5 16 1.5 1.5 0 0 0 9 14.5 1.5 1.5 0 0 0 7.5 13m9 0a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5z"></path>
      </svg>
    </div>
    <p class="category-intro">Explorations in artificial intelligence, machine learning, and LLMs.</p>
  </div>

  <ul class="category-posts">
    {% for post in site.posts %}
      {% if post.categories contains 'ai' %}
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
