---
layout: page
title: About
permalink: /about/
background_color: "#fafaf9"
---

<div class="about-page">

<div class="about-hero">
  <img src="{{ '/assets/images/anuj.jpeg' | relative_url }}" alt="Anuj" class="profile-img">
  <h1 class="hero-name">Anuj</h1>
  <p class="hero-role">Software Engineer</p>

  <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-top: 0.5rem;">Pune, IN • anujmohite001@gmail.com</p>
  <div class="connect-links" style="margin-top: 1rem;">
    <a href="https://linkedin.com/in/anujrmohite">LinkedIn</a>
    <a href="https://github.com/anujrmohite/">GitHub</a>
  </div>
</div>

<div class="about-intro">
  <p>Software Engineer with experience in backend systems. Passionate about building unique tools I actually use.</p>
</div>

<section class="about-grid">
  <div class="about-card">
    <h3>Technical Skills</h3>
    <p>
      <strong>Languages:</strong> Python, C/C++, Go, JavaScript, Rust<br>
      <strong>Backend:</strong> FastAPI, Node.js, Express.js<br>
      <strong>Infrastucture:</strong> Docker, K8s, AWS, Linux, Terraform<br>
      <strong>Databases:</strong> PostgreSQL, MongoDB, Redis, Elasticsearch
    </p>
  </div>
  
  <div class="about-card">
    <h3>Education</h3>
    <p><strong>B.Tech in Computer Engineering</strong><br>
    COEP Technological University<br>
    <span style="font-size: 0.85em; color: var(--color-text-muted);">2021 - 2024</span></p>
  </div>
</section>

<section class="experience-section">
  <h2 style="text-align: center; margin-bottom: 2rem;">Experience</h2>

  <div class="exp-item">
    <div class="exp-header">
      <h3>Natwest Group</h3>
      <span class="exp-date">May 2025 - Present</span>
    </div>
    <p class="exp-role">Software Engineer - Natwest Markets</p>
    <ul class="exp-list">
      <li>Developing enterprise-grade Python microservices for the Corporate & Institutional banking division.</li>
      <li>Implemented a feature flagging system improving release safety and reducing deployment risks by 60%.</li>
      <li>Maintained >80% code coverage across platform services using Pytest and Unittest.</li>
    </ul>
  </div>

  <div class="exp-item">
    <div class="exp-header">
      <h3>Google Summer of Code | GCC</h3>
      <span class="exp-date">May 2024 - Sep 2025</span>
    </div>
    <p class="exp-role">Open Source Contributor</p>
    <ul class="exp-list">
      <li>Enhanced gfortran compiler by optimizing memory access, improving numerical computation speed by 15-20%.</li>
      <li>Implemented parallel reduction operations for DO CONCURRENT loops, achieving 3-5x speedup.</li>
      <li>Contributed 1,500+ lines of C code with 100% test coverage.</li>
    </ul>
  </div>

  <div class="exp-item">
    <div class="exp-header">
      <h3>Syrma SGS Technology Limited</h3>
      <span class="exp-date">Jan 2024 - June 2025</span>
    </div>
    <p class="exp-role">Generalist Engineering Intern</p>
    <ul class="exp-list">
      <li>Developed system services for Automotive Grade Linux (AGL) using D-Bus, GStreamer, and Qt.</li>
      <li>Wrote unit tests for embedded Linux services maintaining >85% code coverage.</li>
    </ul>
  </div>
</section>

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

.profile-img {
  width: 200px;
  height: 200px;
  border-radius: 12px;
  object-fit: cover;
  margin: 0 auto 1.5rem;
  display: block;
  border: 2px solid var(--color-border);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.hero-name {
  font-family: var(--font-family-serif);
  font-size: 3rem;
  font-weight: 600;
  margin: 0 0 0.25rem;
  line-height: 1;
}

.hero-role {
  font-family: var(--font-family-serif);
  font-size: 1.25rem;
  font-style: italic;
  color: var(--color-text-muted);
  margin: 0 0 0.5rem;
}

.fun-tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.fun-tags span {
  font-family: var(--font-family-mono);
  font-size: 0.75rem;
  padding: 2px 8px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  color: var(--color-text-secondary);
}

.hero-tagline {
   font-family: var(--font-family-serif);
  font-size: 1.5rem;
  color: var(--color-text-muted);
  margin: 0;
}

.about-intro {
   font-family: var(--font-family-serif);
  font-size: 1.5rem;
  line-height: 1.6;
  text-align: center;
  padding: 1.5rem 2rem;
  margin-bottom: 3rem;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.about-card {
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-bg-secondary);
}

.about-card h3 {
  font-family: var(--font-family-serif);
  font-size: 1rem;
  color: var(--color-text-muted);
  margin: 0 0 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}


.exp-item {
  margin-bottom: 2.5rem;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.25rem;
}

.exp-header h3 {
  font-size: 1.2rem;
  margin: 0;
}

.exp-date {
  font-family: var(--font-family-mono);
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.exp-role {
  font-family: var(--font-family-serif);
  font-style: italic;
  color: var(--color-text-secondary);
  margin-bottom: 0.75rem;
}

.exp-list {
  padding-left: 1.2rem;
  font-size: 0.95rem;
  color: var(--color-text-secondary);
}

.exp-list li {
  margin-bottom: 0.5rem;
}

.connect-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.connect-links a {
  font-family: var(--font-family-serif);
  color: var(--color-text);
  text-decoration: none;
  border-bottom: 1px solid var(--color-border);
}

@media (max-width: 600px) {
  .about-grid { grid-template-columns: 1fr; }
  .exp-header { flex-direction: column; }
}
</style>
