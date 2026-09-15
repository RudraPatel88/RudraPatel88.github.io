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
- About
- Resume
- Contact

## Content
- Resume PDF at /assets/resume/resume.pdf (uploaded; contact info and
  resume.html content are sourced from it — update both if the resume
  changes)
- Contact email: rudrap@engineering.upenn.edu (used site-wide, not the
  personal gmail)
- 3 real projects: "Charge Robotics FRC Team 2722 - Positional and
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
