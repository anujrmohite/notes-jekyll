# Jekyll Blog Template

Minimal Jekyll blog with category-based organization and dark mode.

## Quick Start

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000`

## Configuration

Edit `_config.yml`:

```yaml
title: Your Site Title
author: Your Name
description: Your site description
```

## Adding Posts

Create `_posts/YYYY-MM-DD-title.markdown`:

```yaml
---
layout: post
title: "Your Post Title"
date: 2024-01-01
categories: [programming]
---
Your content here...
```

Categories: `programming`, `opinions`, `photography`, `movies`

## Structure

```
_posts/      Blog posts
_layouts/    Page templates
_includes/   Reusable components
_sass/       SCSS styles
pages/       Static pages
```

## License

MIT
