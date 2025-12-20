---
layout: page
title: About
permalink: /ai/
background_color: "#f0fdf4"
---

<div class="about-page">

<div class="about-hero">
  <h1 class="hero-name">Hi, I'm Your Name</h1>
  <p class="hero-role">Your Role</p>
  <p class="hero-tagline">Your tagline goes here. Make it memorable.</p>
</div>

<div class="about-intro">
  <p>Write a short introduction about yourself here. What do you do? What are you passionate about? What brings you to write this blog?</p>
</div>

<section class="about-grid">
  <div class="about-card">
    <h3>Currently</h3>
    <p><strong>Your Current Role</strong> at Company Name, working on interesting projects.</p>
  </div>
  
  <div class="about-card">
    <h3>Previously</h3>
    <p><strong>Previous Role</strong> at Previous Company<br>
    <strong>Another Role</strong> at Another Place</p>
  </div>
  
  <div class="about-card">
    <h3>Education</h3>
    <p><strong>Your Degree</strong><br>
    University Name, Year</p>
  </div>
  
  <div class="about-card">
    <h3>Tools</h3>
    <p>Your Tech Stack<br>
    Languages · Frameworks · Tools</p>
  </div>
</section>

<div class="about-connect">
  <p class="connect-text">Want to chat? Find me on:</p>
  <div class="connect-links">
    <a href="https://github.com/yourusername">GitHub</a>
    <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
    <a href="mailto:your@email.com">Email</a>
  </div>
</div>

</div>

<style>
.about-page {
  max-width: 800px;
  margin: 0 auto;
}

.about-hero {
  text-align: center;
  padding: 3rem 0 2rem;
  margin-bottom: 2rem;
}

.hero-name {
  font-family: var(--font-family-serif);
  font-size: 3.5rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  margin: 0 0 0.25rem;
  line-height: 1;
}

.hero-role {
  font-family: var(--font-family-serif);
  font-size: 1.25rem;
  font-style: italic;
  color: var(--color-text-muted);
  margin: 0 0 1rem;
}

.hero-tagline {
  font-size: 1rem;
  color: var(--color-text-muted);
  margin: 0;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.6;
}

.about-intro {
  font-family: var(--font-family-serif);
  font-size: 1.15rem;
  line-height: 1.8;
  text-align: center;
  padding: 1.5rem 2rem;
  margin-bottom: 2.5rem;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.about-intro p {
  margin: 0;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2.5rem;
}

@media (max-width: 600px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-name {
    font-size: 2.5rem;
  }
}

.about-card {
  padding: 1.25rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
}

.about-card h3 {
  font-family: var(--font-family-serif);
  font-size: 0.9rem;
  font-style: italic;
  color: var(--color-text-muted);
  margin: 0 0 0.75rem;
  text-transform: lowercase;
}

.about-card p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
}

.about-card strong {
  font-weight: 600;
}

.about-connect {
  text-align: center;
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
}

.connect-text {
  font-family: var(--font-family-serif);
  font-style: italic;
  color: var(--color-text-muted);
  margin: 0 0 1rem;
}

.connect-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.connect-links a {
  font-family: var(--font-family-serif);
  font-size: 1rem;
  color: var(--color-text);
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 1px solid var(--color-border);
  transition: border-color 0.2s ease;
}

.connect-links a:hover {
  border-color: var(--color-text);
}
</style>
