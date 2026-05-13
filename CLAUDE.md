# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Staging website for Grace Church of Dover, served via GitHub Pages from the repository's default branch (the `grace-church-dover.github.io` repo name makes this a user/organization Pages site). Live URL: https://grace-church-dover.github.io/.

## Architecture

Plain static site. No build step, no package manager, no test framework, no JavaScript framework. Each page is a standalone `.html` file that links to a shared `styles.css`.

- Pages: `index.html`, `im-new.html`, `about.html`, `ministries.html`, `give.html` — one file per nav tab.
- `styles.css` — shared styles for navbar, hero, and the `.hero .button` class. Linked from every page.
- `images/` — referenced by relative path (e.g. `images/crowd.jpg`, `images/logo.webp`). The `20260426_*.jpg` files are unstaged photo assets not yet wired into any page.

**Duplication, by design.** The `<head>` block and `<div id="navbar">` block are copy-pasted across every page. We considered Jekyll `_includes` and decided the boilerplate wasn't worth it at this size and given possible host portability. When the navbar changes, edit all five files. Migration trigger: if duplication becomes painful or the site grows past ~7 pages, revisit Hugo (portable) or Jekyll (GitHub-native). Don't introduce a generator without that conversation.

Deployment is automatic: pushing to the default branch publishes to GitHub Pages within ~1 minute. There is no preview/staging environment separate from production — the repo name itself describes this *as* the staging site.

## Local preview

Opening `index.html` directly in a browser works for layout checks. For anything path-sensitive (the `images/crowd.jpg` background, `preconnect` behavior), serve from the repo root instead:

```
python -m http.server 8000
```

then visit http://localhost:8000/.
