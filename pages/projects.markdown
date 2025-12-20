---
layout: page
title: Projects
permalink: /projects/
background_color: "#f5f5ff"
---

<p class="page-subtitle">Things I've built, tinkered with, or contributed to.</p>

<div class="projects-grid">

  <article class="project-card">
    <div class="project-header">
      <span class="project-year">2024</span>
      <h3 class="project-name">Yukti - AI Linux Assistant</h3>
    </div>
    <p class="project-desc">Intelligent command-line tool in Rust that translates natural language queries into executable shell commands with >90% accuracy. Includes automated debugging assistant.</p>
    <div class="project-tech">
      <span>Rust</span>
      <span>AI/LLM</span>
      <span>CLI</span>
      <span>Docker</span>
    </div>
    <div class="project-links">
      <a href="https://github.com/anujrmohite/">Source</a>
    </div>
  </article>

  <article class="project-card">
    <div class="project-header">
      <span class="project-year">2024</span>
      <h3 class="project-name">AGL Infotainment System</h3>
    </div>
    <p class="project-desc">Custom Linux-based infotainment system for Automotive Grade Linux. Built with custom Yocto layers (Raspberry Pi 4) and a Qt-based UI for multimedia and settings.</p>
    <div class="project-tech">
      <span>Embedded Linux</span>
      <span>Yocto</span>
      <span>Qt</span>
      <span>C++</span>
    </div>
    <div class="project-links">
      <a href="https://github.com/anujrmohite/">Source</a>
    </div>
  </article>

</div>
    </div>
    <p class="project-desc">A brief description of your first project. What problem does it solve?</p>
    <div class="project-tech">
      <span>Tech</span>
      <span>Stack</span>
      <span>Here</span>
    </div>
    <div class="project-links">
      <a href="#">Demo</a>
      <a href="#">Source</a>
    </div>
  </article>

  <article class="project-card">
    <div class="project-header">
      <span class="project-year">2023</span>
      <h3 class="project-name">Project Two</h3>
    </div>
    <p class="project-desc">Another project description. Keep it short and impactful.</p>
    <div class="project-tech">
      <span>Python</span>
      <span>FastAPI</span>
    </div>
    <div class="project-links">
      <a href="#">Docs</a>
      <a href="#">Source</a>
    </div>
  </article>

  <article class="project-card">
    <div class="project-header">
      <span class="project-year">2023</span>
      <h3 class="project-name">Project Three</h3>
    </div>
    <p class="project-desc">Describe your third project here.</p>
    <div class="project-tech">
      <span>Rust</span>
      <span>Redis</span>
    </div>
    <div class="project-links">
      <a href="#">Source</a>
    </div>
  </article>

</div>

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

@media (max-width: 700px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

.project-card {
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-bg-secondary);
  transition: border-color 0.2s ease;
}

.project-card:hover {
  border-color: var(--color-text-muted);
}

.project-header {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.project-year {
  font-family: var(--font-family-mono);
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.project-name {
  font-family: var(--font-family-serif);
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0;
}

.project-desc {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0 0 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
}

.project-tech span {
  font-family: var(--font-family-mono);
  font-size: 0.7rem;
  padding: 2px 8px;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 3px;
  color: var(--color-text-muted);
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-links a {
  font-family: var(--font-family-serif);
  font-style: italic;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.project-links a:hover {
  border-color: var(--color-text);
}
</style>
