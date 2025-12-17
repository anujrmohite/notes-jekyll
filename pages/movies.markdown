---
layout: page
title: Movies
permalink: /movies/
background_color: "#fff5f5"
---

<p class="page-subtitle">Films I've watched, loved, or found thought-provoking.</p>

<section class="section-list">
    <ul class="posts">
        {% assign post_count = 0 %}
        {% for post in site.posts %}
            {% if post.categories contains 'movies' %}
                {% if post_count < 10 %}
                <li>
                    <span class="date">{{ post.date | date: "%d %b %Y" }}</span>
                    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                </li>
                {% assign post_count = post_count | plus: 1 %}
                {% endif %}
            {% endif %}
        {% endfor %}
    </ul>

    <div style="margin-top: 1.5rem; text-align: center;">
        <a href="{{ '/archives/' | relative_url }}" style="font-family: var(--font-family-serif); font-style: italic; color: var(--color-text-muted);">View all in Archives →</a>
    </div>

</section>
