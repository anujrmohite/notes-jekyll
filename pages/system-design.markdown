---
layout: page
title: System Design
permalink: /system-design/
---

<section class="section-list">
    <p style="margin-bottom: 2rem;">Concepts, patterns, and trade-offs in designing scalable and reliable systems.</p>
    <ul class="posts">
        {% for post in site.posts %}
            {% if post.categories contains 'system-design' %}
            <li>
                <span class="date">{{ post.date | date: "%d %b %Y" }}</span>
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </li>
            {% endif %}
        {% endfor %}
    </ul>
</section>
