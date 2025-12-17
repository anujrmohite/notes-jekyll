---
layout: page
title: AI
permalink: /ai/
---

<section class="section-list">
    <ul class="posts">
        {% for post in site.posts %}
            {% if post.categories contains 'ai' %}
            <li>
                <span class="date">{{ post.date | date: "%d %b %Y" }}</span>
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </li>
            {% endif %}
        {% endfor %}
    </ul>
</section>
