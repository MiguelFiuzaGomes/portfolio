---

title: Unity Netcode FPS Prototype (Client-Server Architecture)
slug: unity-netcode-fps
tech: [C#, Unity, Netcode for GameObjects, Multiplayer Systems]
featured: true

role: Solo

tags:
  - Networking
  - Multiplayer
  - Client-Server Architecture
  - Real-Time Systems
  - FPS

short: >
  A real-time multiplayer FPS prototype built using Unity Netcode for GameObjects,
  implementing a semi-authoritative client-server model with server validation
  and latency-aware gameplay systems.

repoUrl: https://github.com/MiguelFiuzaGomes/unity-netcode-fps-prototype

highlights:
  - Semi-authoritative client-server architecture with server validation
  - Real-time player movement and shooting synchronisation
  - Latency-aware design balancing responsiveness and authority

gallery:
  - src: Projects/Netcode/semi-authorative-architecture.png
    alt: Semi-Authoritative Architecture
    caption: Semi-Authoritative Architecture

  - src: Projects/Netcode/client-prediction-reconciliation.png 
    alt: Client Prediction Reconciliation
    caption: Client Prediction Reconciliation
    
  - src: Projects/Netcode/rollback-replay-buffers.png
    alt: Rollback Replay Buffers
    caption: Rollback Replay Buffers
 
layout: ../../../layouts/netcode-fps.astro
---



<section class="project-page">

<section class="project-hero">
  <h1>Unity Netcode FPS Prototype</h1>

  <p class="project-summary">
    A multiplayer FPS prototype built using Unity Netcode for GameObjects,
    implementing a semi-authoritative client-server architecture with
    client-side movement and server-side validation to handle latency and desync.
  </p>

  <div class="project-meta">
    <span>Unity</span>
    <span>C#</span>
    <span>Netcode for GameObjects</span>
    <span>Multiplayer Systems</span>
    <span>Solo</span>
  </div>
</section>
<!-- Overview -->
<section class="project-section">
  <h2>Overview</h2>
  <p>
    This project is a real-time multiplayer FPS prototype developed in Unity using
    Netcode for GameObjects. It focuses on implementing a client-server networking
    model capable of handling player movement, shooting, and state synchronisation.
  </p>
  <p>
    The system explores the trade-offs between responsiveness and authority,
    using a semi-authoritative approach where clients control immediate movement
    while the server validates and corrects discrepancies.
  </p>
</section>

<!-- Goals -->
<section class="project-section">
  <h2>Goals</h2>
  <p>
    The primary goal was to design a multiplayer system that feels responsive
    to the player while maintaining server authority to ensure consistency
    and prevent invalid state changes.
  </p>
  <p>
    The project aimed to explore how real-time gameplay systems behave under
    network constraints, particularly in fast-paced FPS interactions.
  </p>
</section>

<!-- Contribution -->
<section class="project-section">
  <h2>My Contribution</h2>
  <ul class="project-list">
    <li>Designed and implemented the client-server networking model</li>
    <li>Developed player movement synchronisation with client authority and server validation</li>
    <li>Implemented shooting mechanics and state replication</li>
    <li>Managed network communication using Unity Netcode for GameObjects</li>
    <li>Evaluated latency and consistency trade-offs in real-time gameplay</li>
  </ul>
</section>

<!-- System Architecture -->
<section class="project-section">
  <h2>System Architecture</h2>

  <div class="info-grid">
    <div class="info-card card-base">
      <h3>Client-Side Control</h3>
      <p>
        Clients handle immediate player input and movement locally to ensure
        responsive gameplay.
      </p>
    </div>

  <div class="info-card card-base">
      <h3>Server Validation</h3>
      <p>
        The server verifies client-reported state and corrects discrepancies
        beyond acceptable thresholds.
      </p>
    </div>

  <div class="info-card card-base">
      <h3>State Synchronisation</h3>
      <p>
        Player state, including position and actions, is synchronised across
        clients through network updates.
      </p>
    </div>

  <div class="info-card card-base">
      <h3>Network Messaging</h3>
      <p>
        Communication between client and server is handled through RPCs
        and network variables provided by Netcode for GameObjects.
      </p>
    </div>
  </div>
</section>

<!-- Tech Dive -->
<section class="project-section">
  <h2>Technical Deep Dive</h2>
<div class="deep-dive-list">
  <div class="deep-dive-block card-base">
    <h3>Semi-Authoritative Movement</h3>
    <p>
      Player movement is handled locally on the client to ensure responsiveness. The server receives movement updates and validates them against expected constraints, correcting positions if deviations exceed a defined threshold.
    </p>
  </div>

  <div class="deep-dive-block card-base">
    <h3>State Synchronisation</h3>
    <p>
      Player state is synchronised across the network using Netcode components, keeping remote clients updated with relevant movement and gameplay state. The implementation focuses on transmitting necessary state changes without treating every local update as equally important.
    </p>
  </div>

  <div class="deep-dive-block card-base">
    <h3>RPC-Based Communication</h3>
    <p>
      Remote Procedure Calls are used to transmit gameplay actions such as shooting and movement updates between client and server. This separates immediate local feedback from validated networked state changes.
    </p>
  </div>

  <div class="deep-dive-block card-base">
    <h3>Latency Considerations</h3>
    <p>
      The system balances responsiveness and consistency by allowing immediate local feedback while relying on server validation to correct invalid or excessive deviations caused by latency or desynchronisation.
    </p>
  </div>
</div>
</section>

<!-- Challenges -->
<section class="project-section">
  <h2>Challenges and Solutions</h2>
<div class="challenge-list">
  <div class="challenge-block card-base">
    <h3>Balancing Responsiveness and Authority</h3>
    <p>
      Fully server-authoritative movement introduced noticeable input delay,
      while fully client-authoritative movement risked inconsistencies.
    </p>
    <p>
      A semi-authoritative approach was adopted, allowing responsive local control
      with server-side validation.
    </p>
  </div>

  <div class="challenge-block card-base">
    <h3>Synchronising Fast-Paced Gameplay</h3>
    <p>
      FPS gameplay requires accurate and timely updates for player actions.
    </p>
    <p>
      This was addressed through efficient state updates and prioritising critical
      gameplay events such as shooting.
    </p>
  </div>

  <div class="challenge-block card-base">
    <h3>Handling Network Discrepancies</h3>
    <p>
      Differences between client and server state can occur due to latency.
    </p>
    <p>
      The system corrects these discrepancies when they exceed acceptable thresholds,
      maintaining overall consistency.
    </p>
  </div>
</div>
</section>

<!-- Performance -->
<section class="project-section">
  <h2>Performance and Optimisation</h2>
  <p>
    Network traffic is minimised by only synchronising necessary state changes
    and using efficient messaging patterns.
  </p>
  <p>
    The system prioritises responsiveness for local player actions while maintaining
    acceptable consistency across clients.
  </p>
</section>

<!-- Results -->
<section class="project-section">
  <h2>Results</h2>
  <p>
    The prototype successfully demonstrates a functional real-time multiplayer FPS
    with responsive controls and consistent state synchronisation across clients.
  </p>
  <p>
    It highlights the trade-offs involved in networking fast-paced gameplay systems
    and provides a foundation for further development of multiplayer features.
  </p>
</section>

<!-- Improvements -->
<section class="project-section">
  <h2>Future Improvements</h2>
  <ul class="project-list">
    <li>Client-side prediction and server reconciliation</li>
    <li>Lag compensation for shooting mechanics</li>
    <li>Interpolation and smoothing for remote players</li>
    <li>More robust anti-cheat validation</li>
    <li>Scalability improvements for larger player counts</li>
  </ul>
</section>

<!-- Gallery -->
<section class="project-section technical-gallery">
  <h2>Technical Gallery</h2>

  <figure class="technical-diagram">
    <img src="/portfolio/Projects/Netcode/semi-authorative-architecture.png" alt="semi-authorative-architecture">
    <figcaption>
      Semi-authoritative client-server model balancing local responsiveness with server validation.
    </figcaption>
  </figure>

  <figure class="technical-diagram">
    <img src="/portfolio/Projects/Netcode/client-prediction-reconciliation.png" alt="client-prediciton-reconciliation">
    <figcaption>
      Planned prediction and reconciliation flow for improving movement correction.
    </figcaption>
  </figure>

  <figure class="technical-diagram">
    <img src="/portfolio/Projects/Netcode/rollback-replay-buffers.png" alt="rollback-replay-buffers">
    <figcaption>
      Rollback and replay buffer concept for storing movement inputs across network ticks.
    </figcaption>
  </figure>

</section>

</section>