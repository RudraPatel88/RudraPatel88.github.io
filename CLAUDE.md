# Project: Engineering Portfolio Website

## Goal
Personal engineering portfolio site for a UPenn mechanical engineering
undergrad, to showcase projects to engineering/consulting firms.

## Hosting
- GitHub Pages, free, no domain fees
- Repo is named `<username>.github.io` (exact match required for
  GitHub to auto-serve it)
- No custom domain for now

## Tech stack
- Plain HTML/CSS/JS — no framework, no build step
- Chosen over a static site generator (Astro/Next.js) because the
  site is small (~5-10 project pages) and I want full control over
  a custom, non-templated design rather than framework defaults

## Design direction
- Permanent dark mode: black background (#0a0a0b), off-white text,
  warm orange accent (#e2793f) — no light theme
- Monospace accents for nav/labels/tags ("// section" motif), sans-serif
  for body copy
- Deliberate and custom, not a generic portfolio template

## Pages needed
- Home
- Projects (individual project write-ups)
- About (removed then restored 2026-11-04; its intro paragraph was
  deleted at the user's request - keep it without that paragraph)
- Resume (page content follows the user's current resume but with the
  "May 2030" grad date removed; assets/resume/resume.pdf was replaced
  with the user's current resume, which still shows "May 2030" - the user
  chose to publish it that way)
- Contact

## Content
- Resume PDF at /assets/resume/resume.pdf (uploaded; contact info and
  resume.html content are sourced from it — update both if the resume
  changes)
- Contact email: rudrap@engineering.upenn.edu (used site-wide, not the
  personal gmail)
- Added 2026-11-04: Laser Cut Lighthouse (projects/laser-cut-lighthouse.html,
  assets/images/lighthouse-collage.jpg) and Fidget Spinner (projects/
  fidget-spinner.html, assets/images/fidget-spinner.jpg; spinner was
  cut out of the desk photo and placed on a studio gradient), both MEAM
  1010. Nozzle project renamed "Penn Jet Propulsion Nozzle Design" and
  now includes CFD (Ansys Fluent) images/results. Lighthouse and spinner
  pages now have a "CAD Model" section (assets/images/*-cad.png). Piston
  CAD Model (projects/piston-cad-model.html, MEAM 1010, tolerancing the
  fit of the pistons) added too. Only PennAiR XFLR5 aero analysis is
  still missing from the user's list (aero optimization deferred by user).
  Charge Robotics PID page has a "Subsystems" gallery (9 CAD renders
  cropped from the 2024/2025/2026 technical binders via Windows' built-in
  PDF renderer; assets/images/robot-*.jpg). User said NOT to use the team
  photo and NOT to link the technical binders - keep it that way. Process
  text says PID tuned "five end effectors".
- Projects are being expanded (2026-11-04): SAE Aero Design Micro Class
  Plane (projects/micro-class-plane.html, image assets/images/
  micro-class-plane.webp, tagged PennAiR) is deliberately listed FIRST in
  the Projects grid and on the homepage. Still to add: MEAM 1010 piston
  CAD, MEAM 1010 laser cut lighthouse, PennAiR XFLR5 aero analysis, and
  CFD added to the nozzle page (user will send descriptions/images)
- 3 earlier real projects: "Charge Robotics FRC Team 2722 - Positional and
  Velocity PID Controllers" (projects/pid-controllers.html) and
  Residential Light Usage Tracker
  (projects/residential-light-usage-tracker.html), both from the resume;
  plus Penn Jet Propulsion Nozzle Design Challenge
  (projects/nozzle-design-challenge.html), added directly (not on resume)
- Photos/renders/CAD screenshots still needed for the other 2 projects —
  drop in /assets/images and reference from the relevant project page
  (placeholders marked "image placeholder" / commented-out <img>
  examples in each file)
- Nozzle Design Challenge project has real images: assets/images/
  nozzle-collage.png (SolidWorks-exported render + FEA stress plot, side
  by side — used as the card thumbnail everywhere and the project page
  hero image) and nozzle-render.png (the standalone render, used in the
  Process section). Both are the user's own SolidWorks-exported images,
  not a generated render — a Three.js render from the raw STL was tried
  once (2026-09-15) but the user didn't like the look and asked for it
  to be reverted, so don't regenerate that approach without asking first

## Workflow
- Using GitHub Desktop for git (commit/push) — Claude Code should
  focus on file edits; I'll handle git through the GUI unless I ask
  you to run git commands directly
- No Python/Node installed on this machine, so local preview uses
  .claude/static-server.ps1 (a small HttpListener-based static file
  server) via .claude/launch.json — swap for `python -m http.server`
  if Python/Node get installed later

## Current status
Site structure and dark-mode design in place; real content filled in
for about/resume/contact/projects from the uploaded resume. Still
placeholder: project photos/renders/CAD screenshots (images), and the
2nd/Nth project beyond the two from the resume if more get added.
