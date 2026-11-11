# Project: Engineering Portfolio Website

## Goal
Personal engineering portfolio site for a UPenn mechanical engineering
undergrad, to showcase projects to engineering/consulting firms.

## Hosting
- GitHub Pages, free, LIVE at https://rudrapatel88.github.io (deploys from
  `main` / root on every push)
- Repo is named `<username>.github.io` (exact match required for
  GitHub to auto-serve it)
- No custom domain for now

## Tech stack
- Plain HTML/CSS/JS - no framework, no build step
- Chosen over a static site generator because the site is small and I want
  full control over a custom, non-templated design

## Design direction
- Permanent dark mode: black background (#0a0a0b), off-white text,
  warm orange accent (#e2793f) - no light theme
- Monospace accents for nav/labels/tags ("// section" motif), sans-serif
  for body copy
- Deliberate and custom, not a generic portfolio template

## Rules to keep
- NO em dashes anywhere on the site (user removed them all); use hyphens
- Contact email/phone are obfuscated (base64 in `data-email`/`data-phone`,
  decoded by js/main.js) so scrapers can't read them - never write them as
  plain text in HTML
- Do NOT use the Charge Robotics team photo, and do NOT link or publish the
  technical binders/PDFs (only cropped CAD images from them are used)
- Do NOT regenerate a Three.js render from the nozzle STL (user rejected it
  2026-09-15); nozzle images are the user's own SolidWorks/Ansys exports
- Only state facts the user gave; no invented numbers or results
- Reuse existing CSS classes (`project-card`, `tag-list`, `figure-grid`,
  `project-hero-image`, `project-body-image`, `image-caption`)

## Pages
- Home: headline "Interested in aerospace, propulsion, robotics, and
  integrated systems"; "Recent work" shows 4 featured cards (plane, PID,
  capstone, nozzle)
- Projects (index of all cards; SAE Micro Class Plane is deliberately FIRST)
- About (merged with the old Resume page on 2026-11-11: Background,
  Education, Skills & tools, Outside the lab; skills/languages/interests
  follow the user's resume; NO graduation date in page text;
  Experience/Leadership intentionally omitted). There is no separate Resume
  page and NO resume download button/nav link - keep it that way
- Contact

## Projects (projects/*.html, images in assets/images/)
- micro-class-plane (PennAiR, SAE Aero Design Micro Class, SolidWorks)
- pid-controllers (Charge Robotics FRC Team 2722; "Subsystems" gallery of 9
  CAD renders cropped from the 2024/2025/2026 binders; text says PID tuned
  "five end effectors")
- residential-light-usage-tracker (capstone; images/results from the poster
  and slideshow)
- nozzle-design-challenge (Penn Jet Propulsion, tags incl. PJP; FEA + CFD
  with Ansys Fluent images; title is "Penn Jet Propulsion Nozzle Design")
- piston-cad-model, laser-cut-lighthouse, fidget-spinner (MEAM 1010)
- project-template.html is a blank starter for new projects

## Content notes
- Resume PDF at assets/resume/resume.pdf still exists in the repo (and is
  reachable by direct URL) but is no longer linked from the site; it shows
  "May 2030"
- Contact email used site-wide: rudrap@engineering.upenn.edu

## To-do (next session)
- Add PennAiR XFLR5 aero analysis project (user deferred it; resume says:
  co-designed a monoplane in XFLR5 for Micro Class, 5+ design iterations,
  static stability improved 2.6x, battery/motor thrust simulation). Ask the
  user for screenshots/plots and details first
- Charge Robotics: unused material the user supplied - `Coral Scoring
  360.webm` video, elevator/wrist/elevator-wrist drawing PDFs (E:\Laptop
  Backup), and 2025 binder PID text (elevator/wrist setpoints, tuning kP
  with the "plug and chug" method). Ask before using any of it
- Resolve discrepancy: resume says "4+ end effectors", site says "five"
- Penn Jet Propulsion flap thrust vectoring work (on resume) is not on the
  site yet
- Plane page has one image and no results; piston/lighthouse/spinner pages
  have only an overview and CAD image (dimensions/tolerances/etc. optional)
- Lighthouse photos have a cluttered background (clear acrylic can't be cut
  out); a cleaner photo or CAD render would look better
- If the user exports a resume PDF without the grad date, replace
  assets/resume/resume.pdf

## Workflow
- User asks me to commit/push directly. `git` is not on PATH; use GitHub
  Desktop's bundled git: C:\Users\rudra\AppData\Local\GitHubDesktop\
  app-3.6.5\resources\app\git\cmd\git.exe (path may change if Desktop
  updates). Push works without prompts now
- No Python/Node on this machine, so local preview uses
  .claude/static-server.ps1 via .claude/launch.json (preview_start name
  "static-site", http://localhost:8000)
- PDFs can't be read as images by the Read tool here; Windows' built-in
  PDF renderer (Windows.Data.Pdf via PowerShell) works for converting pages
- When editing HTML via PowerShell, read/write as UTF-8 explicitly to avoid
  mojibake
