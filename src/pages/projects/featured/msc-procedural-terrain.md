---
title: Procedural Terrain & Biome Generation System
slug: msc-procedural-terrain
tech: [C#, Unity3D, Procedural Terrain Generation, Shader Graph]
featured: true

role: Solo

tags:
- Procedural Generation
- Biomes
- Domain-Warped Noise
- Infinite Terrain
- Performance

short: >
  A modular procedural terrain system developed as my MSc dissertation,
  combining biome evaluation, domain-warped noise, shader-based biome blending, and infinite chunk streaming to generate large-scale landscapes at runtime.

repoUrl: https://github.com/MiguelFiuzaGomes/Master-s-Project

highlights:
- Rule-based biome evaluation using layered noise fields
- Infinite terrain with chunk streaming and seam-aware generation
- GPU-based biome blending and runtime optimisation strategies

#Gallery
gallery:
#1
  - src: /Projects/MSc/flowchart.png
    alt: Terrain generation workflow diagram
    caption: Overview of the procedural terrain generation pipeline and biome evaluation workflow.
#2
  - src: /Projects/MSc/domain-warped-noise.png
    alt: Domain Warped Noise
    caption: Domain-warped noise used to reduce visible terrain repetition and improve large-scale variation.
#3
  - src: /Projects/MSc/generated-heightmap.png
    alt: Generated Heightmap
    caption: Procedurally generated heightmap produced from layered fractal noise sampling.
#4
  - src: /Projects/MSc/temperature-map.png
    alt: Temperature Map
    caption: Temperature distribution map used during biome classification and environmental evaluation.
#5
  - src: /Projects/MSc/humidity-map.png
    alt: Humidity Map
    caption: Humidity parameter map contributing to rule-based biome placement.
#6
  - src: /Projects/MSc/initial-biome-classification.png
    alt: Initial Biome Classification
    caption: Initial biome classification generated from layered environmental rule evaluation.

#10
  - src: /Projects/MSc/biome-coloured-heightmap.png
    alt: Biome-Coloured Heightmap
    caption: Terrain heightmap visualised with biome-based colour assignment.
#11
  - src: /Projects/MSc/biome-blending-shader.png
    alt: Biome Blending Shader
    caption: GPU-based biome blending implemented using Unity Shader Graph.
#12
  - src: /Projects/MSc/shadergraph-blending-comparison.png
    alt: ShaderGraph Blending Comparison
    caption: Comparison between hard biome borders and shader-driven biome blending.
#13
  - src: /Projects/MSc/heightmap-variation.png
    alt: Heightmap Variation
    caption: Variation in terrain structure produced through procedural parameter adjustments.
#14
  - src: /Projects/MSc/generated-terrain-meshes.png 
    alt: Generated Terrain Meshes
    caption: Runtime-generated terrain meshes constructed from procedural height data.
#15
  - src: /Projects/MSc/biome-post-processing-comparison.png
    alt: Biome Post-Processing Comparison
    caption: Visual comparison of terrain rendering before and after biome post-processing.
 #16
  - src: /Projects/MSc/endless-terrain-streaming.png
    alt: Endless Terrain Streaming
    caption: Runtime chunk streaming system supporting continuous terrain traversal.
#18
  - src: /Projects/MSc/known-chunk-seam-limitation.png
    alt: Known Chunk Seam Limitation
    caption: Example of visible seam artefacts between independently generated terrain chunks.  

layout: ../../../layouts/msc-procedural-terrain.astro
---

<section class="project-page">


<!-- Hero -->
<section class="project-hero">
  <h1>Procedural Terrain & Biome Generation System</h1>
  <p class="project-summary">
    A modular procedural terrain system developed as my MSc dissertation,
    combining biome evaluation, domain-warped noise, shader-based biome
    blending, and infinite chunk streaming to generate large-scale landscapes at runtime.
  </p>

  <div class="project-meta">
    <span>Unity</span>
    <span>C#</span>
    <span>Procedural Generation</span>
    <span>Solo</span>
  </div>
</section>

<!-- Overview -->
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
  <div class="info-card card-base">
    <h3>Terrain Generation</h3>
    <p>
      The terrain surface is generated from layered noise functions, with
      domain warping applied to reduce visible repetition and introduce
      more organic large-scale variation.
    </p>
  </div>

<div class="info-card card-base">
  <h3>Biome Evaluation</h3>
  <p>
    Biome assignment is performed through a rule-based evaluation process
    combining environmental parameters and noise sampling.
  </p>
</div>

<div class="info-card card-base">
  <h3>Rendering and Blending</h3>
  <p>
    Biome transitions are handled visually on the GPU using Shader Graph,
    enabling smoother blending between biome regions.
  </p>
</div>

<div class="info-card card-base">
  <h3>Chunk Streaming</h3>
  <p>
    The terrain is divided into runtime-generated chunks that are loaded and unloaded dynamically according to player traversal.
  </p>
</div>

</div>
</section>

<section class="project-section">
  <h2>Technical Deep Dive</h2>

<div class="deep-dive-list">

<div class="deep-dive-block card-base">
  <h3>Rule-Based Biome Evaluation</h3>
  <p>
    Biomes are assigned through a layered rule-based evaluation process combining height, temperature, humidity, and noise-derived parameters rather than relying exclusively on random placement or height thresholds. This allows biome placement to respond more consistently to environmental conditions.
  </p>
</div>

<div class="deep-dive-block card-base">
    <h3>Domain-Warped Noise</h3>
    <p>
      Base terrain height is generated using layered fractal noise, with domain warping applied to distort sampling coordinates before evaluation. This reduces visible directional repetition and produces more organic large-scale terrain variation.
    </p>
  </div>

<div class="deep-dive-block card-base">
    <h3>Seam Handling Between Chunks</h3>
    <p>
      Because terrain is generated in discrete chunks, maintaining continuity between neighbouring chunk borders becomes critical. The system uses shared coordinate sampling and seam-aware generation strategies to reduce visible discontinuities between independently generated terrain regions.
    </p>
  </div>

<div class="deep-dive-block card-base">
    <h3>GPU-Based Biome Blending</h3>
    <p>
      Biome colour and surface transitions are blended on the GPU using Unity Shader Graph, allowing smoother visual transitions between biome regions without relying on hard boundaries.
    </p>
  </div>

</div>

</section>

<section class="project-section">
  <h2>Challenges and Solutions</h2>
<div class="challenge-list">
  <div class="challenge card-base">
    <h3>Maintaining Continuity Across Chunk Borders</h3>
    <p>
      A major challenge was maintaining continuity between independently generated terrain chunks. Differences in sampling and normalisation across chunk borders could introduce visible seams, particularly when combining domain-warped noise with runtime streaming.
    </p>
  </div>

  <div class="challenge card-base">
    <h3>Avoiding Repetitive Terrain Patterns</h3>
    <p>
      Layered procedural noise can introduce visible repetition and directional artefacts across large terrain regions, reducing the perceived natural variation of generated landscapes.
    </p>
  </div>

  <div class="challenge card-base">
    <h3>Preserving Runtime Performance</h3>
    <p>
      Runtime terrain generation introduces performance challenges when expensive mesh and biome calculations are performed synchronously. Chunk generation and streaming workflows were structured to minimise visible interruptions during traversal.
    </p>
  </div>
</div>
</section>

<section class="project-section">
  <h2>Results</h2>
  <p>
    The final system successfully generates continuous biome-driven terrain at runtime, combining procedural height generation, rule-based biome classification, GPU-driven biome blending, and chunk streaming into a modular terrain pipeline.
  </p>
</section>

<section class="project-section">
  <h2>Future Improvements</h2>
  <ul class="project-list">
    <li>Global seam correction across independently generated chunks</li>
    <li>River carving across terrain and biome boundaries</li>
    <li>Biome-specific asset placement such as vegetation and props</li>
    <li>JSON export and import for parameter presets</li>
    <li>Extension toward volumetric terrain generation in future iterations</li>
  </ul>
</section>

</section>