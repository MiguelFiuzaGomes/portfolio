---
title: Procedural Terrain & Biome Generation System
slug: msc-procedural-terrain
tech: [C#, Unity3D, Procedural Terrain Generation, Shader Graph]
featured: true

role: solo

tags:
- Procedural Generation
- Biomes
- Domain-Warped Noise
- Infinite Terrain
- Performance

short: >
  A modular procedural terrain system developed as my MSc dissertation,
  combining biome evaluation, domain-warped noise, shader-based biome blending, and infinite chunk streaming to generate large-scale landscapes at runtime.

#repoUrl: https://github.com/MiguelFiuzaGomes/Master-s-Project
#videoUrl:
#liveUrl:
#coverImage: /images/projects/msc-procedural-terrain/cover.webp

highlights:
- Rule-based biome evaluation using layered noise fields
- Infinite terrain with chunk streaming and seam-aware generation
- GPU-based biome blending and runtime optimisation strategies

layout: ../../layouts/msc-procedural-terrain.astro

---
<section class="project-page">

<section class="project-section">
  <h2>Overview</h2>
  <p>
    This project was developed as my MSc dissertation and focuses on the design
    of a modular procedural terrain generation pipeline for biome-driven landscape creation.
  </p>
  <p>
    The system was built to support large-scale terrain generation at runtime while
    maintaining designer control, extensibility, and stable performance.
  </p>
</section>

<section class="project-section">
  <h2>Goals</h2>
  <p>
    The main objective was to create a terrain system capable of generating diverse,
    continuous landscapes in real time, while supporting biome-specific variation and
    infinite traversal.
  </p>
</section>

<section class="project-section">
  <h2>My Contribution</h2>
  <ul class="project-list">
    <li>Designed and implemented the full procedural generation pipeline</li>
    <li>Built the biome evaluation system using layered environmental rules</li>
    <li>Developed terrain generation using domain-warped noise</li>
    <li>Implemented infinite chunk streaming with seam mitigation strategies</li>
    <li>Integrated GPU-based biome blending using Shader Graph</li>
  </ul>
</section>

<section class="project-section">
  <h2>System Architecture</h2>

<div class="info-grid">
  <div class="info-card">
    <h3>Terrain Generation</h3>
    <p>
      The terrain surface is generated from layered noise functions, with
      domain warping applied to reduce visible repetition and introduce
      more organic large-scale variation.
    </p>
  </div>

<div class="info-card">
  <h3>Biome Evaluation</h3>
  <p>
    Biome assignment is performed through a rule-based evaluation process
    combining environmental parameters and noise sampling.
  </p>
</div>

<div class="info-card">
  <h3>Rendering and Blending</h3>
  <p>
    Biome transitions are handled visually on the GPU using Shader Graph,
    enabling smoother blending between biome regions.
  </p>
</div>

<div class="info-card">
  <h3>Chunk Streaming</h3>
  <p>
    The terrain is divided into chunks that are generated and loaded at runtime
    according to player position.
  </p>
</div>

</div>
</section>

<section class="project-section">
  <h2>Technical Deep Dive</h2>

<div class="deep-dive-block">
  <h3></h3>
  <p>
   
  </p>
</div>

<div class="deep-dive-block">
    <h3></h3>
    <p>
    
    </p>
  </div>

<div class="deep-dive-block">
    <h3></h3>
    <p>
      
    </p>
  </div>

<div class="deep-dive-block">
    <h3></h3>
    <p>
      
    </p>
  </div>
</section>

<section class="project-section">
  <h2></h2>

<div class="challenge-block">
    <h3></h3>
    <p>
      
    </p>
  </div>

<div class="challenge-block">
    <h3></h3>
    <p>
      
    </p>
</div>

<div class="challenge-block">
    <h3></h3>
    <p>
      
    </p>
</div>
</section>

<section class="project-section">
  <h2>Results</h2>
  <p>
    
  </p>
</section>

<section class="project-section">
  <h2>Future Improvements</h2>
  <ul class="project-list">
    <li></li>
    <li></li>
    
  </ul>
</section>

</section>