---
title: VeilRyders
slug: veilryders
tech: [Unreal Engine, C++, Blueprints, Physics-Based Movement]
featured: true

role: Team

tags:
  - Gameplay Programming
  - Physics
  - Unreal Engine
  - Movement Systems
  - C++

short: >
  A snowboarding game developed in Unreal Engine, focusing on physics-based movement,
  player control, and gameplay feel, evolving from Blueprint prototyping into C++ systems.

itchUrl: https://neilg230.itch.io/veilryder


highlights:
  - Physics-based snowboarding movement system
  - Transition from Blueprint prototyping to C++ implementation
  - Focus on player control, responsiveness, and gameplay feel

gallery:
  - src: Projects/VeilRyders/final-level.png
    alt: Final Level Layout
    caption: Final downhill gameplay environment used for movement and traversal testing.
  - src: Projects/VeilRyders/mockup.jpeg
    alt: UI Mockup
    caption: Early gameplay mockup used during movement system prototyping.
  - src: Projects/VeilRyders/mock-realised.jpg
    alt: UI Realised 
    caption: In-Engine Gameplay Implementation
  - src: Projects/VeilRyders/bp-player-movement.png
    alt: Blueprint-based movement logic controlling downhill traversal and steering behaviour.
    caption: Movement System
  - src: Projects/VeilRyders/bp-turning.png
    alt: Player Turning Blueprint
    caption: Turning system used to influence board direction and player handling responsiveness.
  - src: Projects/VeilRyders/bp-floor-influence.png
    alt: Floor Influence
    caption: Slope Influence Calculation
  - src: Projects/VeilRyders/bp-slope-speed-up.png
    alt: Slope Speed Up Blueprint
    caption: Slope-Based Acceleration
  - src: Projects/VeilRyders/bp-board-trace.png
    alt: Board Trace Blueprint
    caption: Terrain tracing system used for slope detection and board alignment.
  - src: Projects/VeilRyders/bp-board-alignment.png
    alt: Board alignment logic adapting player orientation to terrain gradients.
    caption: Board Alignment Blueprint
  - src: Projects/VeilRyders/cpp-slope-speed-up.png
    alt: C++ Integration of Slope Speed Up
    caption: C++ implementation of slope-influenced acceleration and momentum handling.

layout: ../../../layouts/veilryders.astro
---

<section class="project-page">

<section class="project-hero">
  <h1>VeilRyders – Snowboarding Physics Prototype</h1>

  <p class="project-summary">
    A downhill snowboarding prototype developed in Unreal Engine, focusing on physics-based movement, slope interaction, and momentum-driven traversal to create a responsive and fluid gameplay experience.
  </p>

  <div class="project-meta">
    <span>Unreal Engine</span>
    <span>C++</span>
    <span>Blueprints</span>
    <span>Physics Systems</span>
    <span>Team Project</span>
  </div>
</section>

<!-- Overview -->
<section class="project-section">
  <h2>Overview</h2>
  <p>
    VeilRyders is a snowboarding game developed in Unreal Engine as part of a team project.
    The project focuses on creating a responsive and engaging movement system for navigating downhill environments.
  </p>
  <p>
    Development began using Blueprint-based prototyping before transitioning key systems into C++ for improved control and scalability.
  </p>
  </section>

<!-- Goals -->
<section class="project-section">
  <h2>Goals</h2>
  <p>
    The primary goal was to design a movement system that captures the feel of snowboarding,
    balancing speed, control, and responsiveness.
  </p>
  <p>
    The project also aimed to explore the transition from rapid Blueprint prototyping
    to more structured C++ implementation.
  </p>
  </section>

<!-- Contribution -->
<section class="project-section">
  <h2>My Contribution</h2>
  <ul class="project-list">
    <li>Developed and refined the player movement system</li>
    <li>Implemented slope-influenced movement behaviour and momentum-driven acceleration</li>
    <li>Contributed to transitioning gameplay systems from Blueprint to C++</li>
    <li>Worked on improving player control and responsiveness</li>
  </ul>
  </section>

<!-- System Architecture -->
<section class="project-section">
  <h2>System Architecture</h2>

  <div class="info-grid">
    <div class="info-card card-base">
      <h3>Movement System</h3>
      <p>
        The player movement system is driven by physics-based interactions, incorporating slope direction, velocity, and player input.
      </p>
    </div>

  <div class="info-card card-base">
      <h3>Physics Interaction</h3>
      <p>
        Movement is influenced by terrain gradients and momentum, creating a more natural downhill flow.
      </p>
    </div>

  <div class="info-card card-base">
      <h3>Input Handling</h3>
      <p>
        Player input is mapped to directional control and speed modulation, balancing responsiveness with physical plausibility.
      </p>
    </div>

  <div class="info-card card-base">
      <h3>Blueprint to C++ Transition</h3>
      <p>
        Initial systems were prototyped in Blueprints before being reimplemented in C++ to allow more structured gameplay logic, improved maintainability, and finer control over movement behaviour.
      </p>
    </div>
  </div>
  </section>

<!-- Tech Dive-->
<section class="project-section">
  <h2>Technical Deep Dive</h2>
<div class="deep-dive-list">
  <div class="deep-dive-block card-base">
    <h3>Physics-Based Movement</h3>
    <p>
      Movement behaviour is influenced by terrain slope, gravity, and player input, allowing downhill acceleration and momentum to emerge dynamically from terrain interaction.
    </p>
  </div>

  <div class="deep-dive-block card-base">
    <h3>Momentum and Control Balancing</h3>
    <p>
      A key challenge was balancing momentum preservation with responsive player control. Movement tuning focused on maintaining downhill speed while still allowing directional correction and readable handling behaviour.
    </p>
  </div>

  <div class="deep-dive-block card-base">
    <h3>Blueprint to C++ Migration</h3>
    <p>
      Systems initially built in Blueprints were migrated to C++ to allow more
      precise control over behaviour and improve long-term scalability.
    </p>
  </div>
</div>

</section>

<!-- Challenges -->
<section class="project-section">
  <h2>Challenges and Solutions</h2>
<div class="challenge-list">
  <div class="challenge-block card-base">
    <h3>Achieving Responsive Movement</h3>
    <p>
      Creating a movement system that feels responsive while still respecting physics constraints proved challenging.
    </p>
    <p>
      This was addressed through iterative tuning of movement parameters and input responsiveness.
    </p>
  </div>

  <div class="challenge-block card-base">
    <h3>Balancing Realism and Playability</h3>
    <p>
      Strict physics simulation often reduced player responsiveness and made directional control less predictable during high-speed traversal.
    </p>
    <p>
      The system was adjusted to prioritise player control while retaining a sense of physical behaviour.
    </p>
  </div>

  <div class="challenge-block card-base">
    <h3>Transitioning from Blueprint to C++</h3>
    <p>
      Migrating systems required restructuring logic and ensuring feature parity.
    </p>
    <p>
      This improved maintainability and allowed more precise control over gameplay systems.
    </p>
  </div>
  </div>
</section>

<!-- Results -->
<section class="project-section">
  <h2>Results</h2>
  <p>
    The final system delivers a responsive snowboarding experience with smooth
    downhill movement and controllable momentum.
  </p>
  <p>
    The project demonstrates an understanding of gameplay system design,
    physics-based movement, and iterative refinement of player experience.
  </p>
  </section>

<!-- Future Improvements -->
<section class="project-section">
  <h2>Future Improvements</h2>
  <ul class="project-list">
    <li>Advanced trick system and aerial control</li>
    <li>Improved camera behaviour for high-speed movement</li>
    <li>More refined physics tuning and terrain interaction</li>
    <li>Expanded level design and progression systems</li>
  </ul>
  </section>

</section>