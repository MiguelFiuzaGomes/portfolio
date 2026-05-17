---
title: DirectX 11 Real-Time Rendering Pipeline
slug: dx11-render-pipeline
tech: [C++, DirectX 11, HLSL, Real-Time Rendering]
featured: true

role: Solo

tags:
  - Graphics Programming
  - Rendering Pipeline
  - DirectX 11
  - HLSL
  - Post-Processing

short: >
  A real-time rendering pipeline built from scratch in C++ using DirectX 11,
  implementing shader-based lighting, multi-pass rendering, and post-processing effects.

repoUrl: https://github.com/MiguelFiuzaGomes/DirectX11-Render-Pipeline

highlights:
  - Custom DirectX 11 rendering pipeline with explicit GPU resource management
  - HLSL shaders for lighting and screen-space effects
  - Multi-pass rendering including post-processing (glow/bloom)

gallery:
  - src: Projects/DX11/hero.png
    alt: Terrain Rendering Overview
    caption: Terrain rendering pass with dynamic directional lighting.

  - src: Projects/DX11/debug.png
    alt: Debug & Lighting Controls 
    caption: Runtime debug interface for manipulating lighting and rendering parameters.
  - src: Projects/DX11/terrain-lighting.png
    alt: Point light terrain interaction
    caption: Real-time point light interaction with terrain geometry and shadowing.

  - src: Projects/DX11/vertex-displaced-water.png
    alt: Vertex Displacement on Water Surface
    caption: Vertex-displaced water surface animated through HLSL shaders.

  - src: Projects/DX11/alt-light.png
    alt: Alternative terrain lighting configuration.
    caption: Alternative lighting configuration demonstrating runtime scene control.

layout: ../../../layouts/dx11-rendering-pipeline.astro
---

<section class="project-page">

  <section class="project-hero">
    <h1>DirectX 11 Real-Time Rendering Pipeline</h1>

  <p class="project-summary">
      A custom rendering pipeline built in DirectX 11, implementing real-time lighting,
      shadow mapping, and HLSL shaders to explore low-level graphics programming
      and GPU-driven rendering techniques.
    </p>

  <div class="project-meta">
      <span>C++</span>
      <span>DirectX 11</span>
      <span>HLSL</span>
      <span>Graphics Programming</span>
      <span>Solo</span>
    </div>
  </section>

  <!-- Overview -->
  <section class="project-section">
    <h2>Overview</h2>
    <p>
      Developed as part of MSc graphics programming coursework, this project focuses on building a custom real-time rendering pipeline in DirectX 11, exploring low-level GPU programming, shader authoring, and multi-pass frame rendering without relying on commercial game engines.
    </p>
    <p>
      The renderer implements terrain rendering, dynamic lighting, shadow mapping, animated water shaders, and post-processing systems while exposing runtime debugging controls for live rendering configuration.
    </p>
  </section>

  <!-- Goals -->
  <section class="project-section">
    <h2>Goals</h2>
    <p>
      The primary goal was to design and implement a functional real-time renderer capable of handling
      geometry processing, lighting, and post-processing without relying on high-level engines.
    </p>
    <p>
      The project aimed to develop a deeper understanding of the graphics pipeline,
      particularly how data is transferred, transformed, and rendered on the GPU.
    </p>
  </section>

  <!-- Contribution -->
  <section class="project-section">
    <h2>My Contribution</h2>
    <ul class="project-list">
      <li>Implemented the full DirectX 11 rendering setup, including device and swap chain</li>
      <li>Developed HLSL shaders for lighting and screen-space effects</li>
      <li>Built a multi-pass rendering pipeline with intermediate render targets</li>
      <li>Implemented post-processing effects such as glow/bloom</li>
      <li>Managed GPU resources including buffers, textures, and render targets</li>
    </ul>
  </section>

  <!-- System Architecture -->
  <section class="project-section">
  <h2>System Architecture</h2>

  <div class="info-grid">
    <div class="info-card card-base">
      <h3>Rendering Pipeline</h3>
      <p>
        The renderer follows a forward rendering approach, processing geometry,
        applying lighting in shaders, and outputting results through multiple passes.
      </p>
    </div>

  <div class="info-card card-base">
      <h3>Shader System</h3>
      <p>
        HLSL shaders are used for vertex and pixel processing, handling transformations,
        lighting calculations, and post-processing effects.
      </p>
    </div>

  <div class="info-card card-base">
      <h3>Render Targets</h3>
      <p>
        Intermediate render targets are used to store frame data between passes,
        enabling screen-space processing such as glow effects.
      </p>
    </div>

  <div class="info-card card-base">
      <h3>Frame Composition</h3>
      <p>
        The final frame is constructed through multiple rendering stages,
        combining base rendering with post-processing outputs.
      </p>
    </div>
  </div>
  </section>

  <!-- Render Features -->
  <section class="project-section">
  <h2>Rendering Features</h2>

  <div class="info-grid">

  <div class="info-card card-base">
      <h3>Forward Rendering</h3>
      <p>
        The renderer uses a forward rendering pipeline with per-pixel lighting
        calculated directly within HLSL shaders.
      </p>
    </div>

  <div class="info-card card-base">
      <h3>Shadow Mapping</h3>
      <p>
        Dynamic shadows are generated using a depth-based shadow map pass,
        sampled during the lighting stage for real-time shadow projection.
      </p>
    </div>

  <div class="info-card card-base">
      <h3>Animated Water Rendering</h3>
      <p>
        Water rendering uses a vertex displacement shader to animate a textured
        surface in real time using procedural wave motion.
      </p>
    </div>

  <div class="info-card card-base">
      <h3>Runtime Debug Controls</h3>
      <p>
        Runtime UI controls expose lighting parameters and rendering states,
        enabling rapid iteration and visual debugging during execution.
      </p>
    </div>

  </div>
</section>

<!-- Tech Dive -->
<section class="project-section">
  <h2>Technical Deep Dive</h2>
<div class="deep-dive-list">
  <div class="deep-dive-block card-base">
    <h3>DirectX 11 Pipeline Setup</h3>
    <p>
      The renderer is built directly on DirectX 11, requiring explicit setup of the device,
      swap chain, render targets, and pipeline state. This includes configuring input layouts,
      vertex buffers, and draw calls for rendering geometry.
    </p>
  </div>

  <div class="deep-dive-block card-base">
    <h3>Dynamic Lighting and Shading</h3>
    <p>
      Lighting calculations are performed per-pixel in HLSL shaders,
      supporting both directional and point light sources. Surface normals, light attenuation, and shadow sampling are combined during fragment shading to produce dynamic scene lighting.
    </p>
  </div>

  <div class="deep-dive-block card-base">
    <h3>Multi-Pass Rendering</h3>
    <p>
      The rendering process is split into multiple passes, where intermediate results
      are written to textures and reused in subsequent stages. This enables more advanced
      effects that depend on full-frame data.
    </p>
  </div>

  <div class="deep-dive-block card-base">
    <h3>Post-Processing (Glow/Bloom)</h3>
    <p>
      Bloom is implemented as a screen-space post-processing effect using intermediate render textures. Bright regions are extracted, filtered, and recombined with the final frame to simulate light bleeding.
    </p>
  </div>

  <div class="deep-dive-block card-base">
    <h3>Shadow Mapping Pipeline</h3>
    <p>
      Shadows are generated through a dedicated depth rendering pass,
      where scene geometry is rendered from the light's perspective into
      a shadow map texture. This texture is then sampled during lighting
      calculations to determine shadowed fragments in the final scene.
    </p>
  </div>
</div>
</section>

<!-- Debugging -->
<section class="project-section">
  <h2>Renderer Debugging</h2>

  <p>
    Runtime debugging tools were used extensively throughout development
    to inspect lighting behaviour, rendering passes, and shader output.
    Exposing adjustable lighting parameters during execution made it
    easier to validate shadow behaviour, attenuation, and scene composition.
  </p>

  <p>
    The project also highlighted the importance of pipeline state
    management when combining multiple rendering passes and rasterization modes.
  </p>
</section>

<!-- Challenges -->
<section class="project-section">
  <h2>Challenges and Solutions</h2>
<div class="challenge-list">
  <div class="challenge-block card-base">
    <h3>Managing GPU Resources Explicitly</h3>
    <p>
      Unlike engine-based workflows, DirectX requires manual handling of buffers,
      textures, and pipeline states. This introduced complexity in ensuring resources
      were correctly created, bound, and released.
    </p>
  </div>

  <div class="challenge-block card-base">
    <h3>Understanding Pipeline State and Flow</h3>
    <p>
      Building the renderer required understanding how each stage of the pipeline
      interacts, from vertex processing to pixel shading and final output.
    </p>
  </div>

  <div class="challenge-block card-base">
    <h3>Implementing Multi-Pass Effects</h3>
    <p>
      Post-processing required managing multiple render targets and correctly sequencing
      rendering passes, which increased complexity in frame composition.
    </p>
  </div>

  <div class="challenge-block card-base">
    <h3>Wireframe Rendering Conflicts</h3>
    <p>
      A rendering issue appeared when combining wireframe rasterization
      with the shadow rendering pass, producing incorrect visual output
      due to pipeline state interactions between render targets and depth
      processing. Investigating these interactions improved understanding
      of DirectX pipeline state management.
    </p>
  </div>
</div>
</section>

<!-- Performance -->
<section class="project-section">
  <h2>Performance and Optimisation</h2>
  <p>
    The renderer minimises unnecessary GPU state changes and reuses resources where possible.
    Rendering passes are organised to reduce redundant workload while maintaining flexibility for additional rendering features.
  </p>
  <p>
    Offloading lighting and post-processing to shaders ensures that computational work is handled efficiently on the GPU.
  </p>
</section>

<!-- Results -->
<section class="project-section">
  <h2>Results</h2>
  <p>
    The final system successfully renders real-time scenes with dynamic lighting and post-processing effects, demonstrating a working understanding of the DirectX 11 graphics pipeline and shader-based rendering techniques.
  </p>
</section>

<!-- Future Work -->
<section class="project-section">
  <h2>Future Improvements</h2>
  <ul class="project-list">
    <li>Deferred rendering architecture</li>
    <li>Physically based rendering (PBR)</li>
    <li>Cascaded shadow mapping</li>
    <li>More advanced post-processing effects</li>
    <li>Screen-space ambient occlusion</li>
    <li>GPU profiling and performance tuning</li>
  </ul>
</section>

</section>