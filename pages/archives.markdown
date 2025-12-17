---
layout: page
title: Archives
permalink: /archives/
background_color: "#f8f8f8"
---

<div class="archive-filters" style="margin-bottom: 2rem; text-align: center;">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="programming">Programming</button>
    <button class="filter-btn" data-filter="system-design">System Design</button>
    <button class="filter-btn" data-filter="ai">AI</button>
    <button class="filter-btn" data-filter="opinions">Opinions</button>
    <button class="filter-btn" data-filter="photography">Photography</button>
    <button class="filter-btn" data-filter="movies">Movies</button>
</div>

<section class="section-list">
    <ul class="posts" id="archives-list">
        {% for post in site.posts %}
            <li class="post-item" data-categories="{{ post.categories | join: ' ' }}">
                <span class="date">{{ post.date | date: "%d %b %Y" }}</span>
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                <span class="post-cats">
                    {% for cat in post.categories %}
                    <span class="cat-tag">{{ cat }}</span>
                    {% endfor %}
                </span>
            </li>
        {% endfor %}
    </ul>
</section>

<style>
.archive-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
}

.filter-btn {
    background-color: transparent;
    border: 1px solid var(--color-border);
    color: var(--color-text-muted);
    padding: 0.4rem 1rem;
    font-size: 0.85rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: var(--font-family-serif);
    font-style: italic;
}

.filter-btn:hover {
    border-color: var(--color-text);
    color: var(--color-text);
}

.filter-btn.active {
    background-color: var(--color-text);
    color: var(--color-bg);
    border-color: var(--color-text);
}

.post-cats {
    display: inline-flex;
    gap: 0.25rem;
    margin-left: 0.5rem;
}

.cat-tag {
    font-size: 0.7rem;
    padding: 2px 6px;
    background: var(--color-bg-secondary);
    border-radius: 3px;
    color: var(--color-text-muted);
    font-family: var(--font-family-mono);
}

.post-item.hidden {
    display: none !important;
}

@media (max-width: 768px) {
    .post-cats {
        display: none;
    }
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const posts = document.querySelectorAll('.post-item');
    
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            posts.forEach(function(post) {
                const cats = post.getAttribute('data-categories');
                if (filter === 'all' || cats.includes(filter)) {
                    post.classList.remove('hidden');
                } else {
                    post.classList.add('hidden');
                }
            });
        });
    });
});
</script>
