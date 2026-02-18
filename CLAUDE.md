# CLAUDE.md - Awesome Claude Skills Repository Guide

This file provides context for AI assistants working in this repository. It covers the codebase structure, skill conventions, development workflows, and contribution standards.

## Repository Overview

**Awesome Claude Skills** is a curated collection of Claude Skills — modular, self-contained packages that extend Claude's capabilities with specialized workflows, tool integrations, and domain knowledge. Skills work across Claude.ai, Claude Code, and the Claude API.

The repository is maintained by ComposioHQ and published to a marketplace registry at `.claude-plugin/marketplace.json`.

---

## Repository Structure

```
awesome-claude-skills/
├── .claude-plugin/
│   └── marketplace.json          # Marketplace registry for all skills
├── CONTRIBUTING.md               # Contribution guidelines and PR process
├── README.md                     # Main index of all skills with descriptions
├── template-skill/               # Minimal starter template
│   └── SKILL.md
│
├── <skill-name>/                 # Each skill is its own top-level directory
│   ├── SKILL.md                  # Required: skill metadata + instructions
│   ├── scripts/                  # Optional: executable Python/Bash scripts
│   ├── references/ or reference/ # Optional: documentation loaded into context
│   ├── assets/                   # Optional: output files (fonts, templates, images)
│   └── examples/                 # Optional: example usage scripts
│
└── document-skills/              # Nested skill group (exception to flat structure)
    ├── pdf/
    ├── docx/
    ├── pptx/
    └── xlsx/
```

### Notable Directories

| Directory | Purpose |
|-----------|---------|
| `skill-creator/` | Meta-skill for building new skills; contains `scripts/init_skill.py` and `scripts/package_skill.py` |
| `mcp-builder/` | Guides MCP server creation; has `reference/` docs for Python and TypeScript SDKs |
| `webapp-testing/` | Playwright-based web testing; has `scripts/with_server.py` helper |
| `canvas-design/` | Visual art creation; includes `canvas-fonts/` with bundled TTF files |
| `artifacts-builder/` | Builds multi-component React+Tailwind Claude.ai artifacts; has init/bundle scripts |
| `document-skills/` | PDF, DOCX, PPTX, XLSX manipulation — nested sub-skill structure |

---

## Skill Anatomy

Every skill is a directory containing a required `SKILL.md` file and optional bundled resources.

### SKILL.md Structure

```markdown
---
name: skill-name          # Required: lowercase, hyphens only
description: One sentence explaining what the skill does and when to use it.
license: Complete terms in LICENSE.txt   # Optional
---

# Skill Title

[Markdown instructions for Claude on how to execute the skill]
```

**YAML Frontmatter Rules:**
- `name` and `description` are **required** — they determine when Claude activates the skill
- Write `description` in third person: "This skill should be used when..." not "Use this skill when..."
- `name` must be lowercase with hyphens, matching the directory name
- Keep `description` to one sentence; it is always loaded into context (~100 words budget)

**Body Writing Style:**
- Use **imperative/infinitive form** throughout: "To accomplish X, do Y" — not "You should do X"
- Write instructions for Claude, not for end users
- Keep SKILL.md under ~5,000 words; move detailed reference material to `references/` files
- Avoid duplication: if information is in a references file, do not repeat it in SKILL.md

### Progressive Disclosure Loading

Skills use a three-level system to manage context efficiently:

1. **Metadata** (`name` + `description`) — always in context (~100 words)
2. **SKILL.md body** — loaded when the skill is triggered (target: <5k words)
3. **Bundled resources** (`scripts/`, `references/`, `assets/`) — loaded by Claude as needed

### Optional Bundled Resources

| Directory | When to Include | Examples |
|-----------|----------------|---------|
| `scripts/` | Deterministic, repeatedly-run code | `rotate_pdf.py`, `init_skill.py`, `with_server.py` |
| `references/` or `reference/` | Documentation Claude reads while working | API docs, schemas, style guides, policy docs |
| `assets/` | Files used in output, not read into context | Font TTFs, PPTX templates, HTML boilerplate |
| `examples/` | Illustrative usage scripts | Playwright automation patterns |

**Note:** `references/` (plural) and `reference/` (singular) are both used across skills — be consistent within a skill but either is acceptable.

---

## Marketplace Registry

`.claude-plugin/marketplace.json` is the authoritative registry. Every skill in the repository must have an entry here.

```json
{
  "$schema": "https://anthropic.com/claude-code/marketplace.schema.json",
  "name": "awesome-claude-skills",
  "version": "1.0.0",
  "plugins": [
    {
      "name": "skill-name",
      "description": "One-sentence description matching SKILL.md frontmatter.",
      "source": "./skill-name",
      "category": "development"
    }
  ]
}
```

**Valid categories:**
- `business-marketing`
- `communication-writing`
- `creative-media`
- `development`
- `productivity-organization`

When adding a skill, update both `README.md` and `.claude-plugin/marketplace.json`.

---

## Development Workflows

### Creating a New Skill

The recommended workflow uses the `skill-creator` meta-skill and its scripts:

**1. Initialize the skill directory:**
```bash
python skill-creator/scripts/init_skill.py <skill-name> --path ./
```
This generates a templated directory with `SKILL.md`, and example `scripts/`, `references/`, and `assets/` subdirectories.

**2. Edit `SKILL.md`** — fill in frontmatter and write Claude instructions.

**3. Add bundled resources** as needed (scripts, references, assets). Delete example files that are not needed.

**4. Validate and package:**
```bash
python skill-creator/scripts/package_skill.py <path/to/skill-folder>
```
This validates YAML frontmatter, naming, structure, and description quality, then creates a distributable `.zip`.

**5. Update `README.md`** — add the skill to the appropriate category section in alphabetical order:
```markdown
- [Skill Name](./skill-name/) - One-sentence description.
```
No emojis. Consistent punctuation. Follow existing formatting exactly.

**6. Update `.claude-plugin/marketplace.json`** — add a registry entry.

### Skill Quality Checklist

- [ ] Solves a real, tested use case (not hypothetical)
- [ ] `SKILL.md` frontmatter has `name` and `description`
- [ ] `description` is third-person and one sentence
- [ ] Body uses imperative/infinitive form
- [ ] Includes concrete examples
- [ ] Confirms before destructive operations
- [ ] Works across Claude.ai, Claude Code, and/or API
- [ ] README.md updated in alphabetical order within category
- [ ] `.claude-plugin/marketplace.json` entry added

---

## Contributing (Pull Requests)

**Branch naming:** `add-<skill-name>` (e.g., `add-changelog-generator`)

**PR title format:** `"Add [Skill Name] skill"`

**PR description must include:**
- What problem it solves
- Who uses this workflow
- Attribution/inspiration source if applicable
- Example of how it's used

**Process:**
1. Fork the repository
2. Create branch: `git checkout -b add-skill-name`
3. Add skill directory with `SKILL.md`
4. Update `README.md` and `.claude-plugin/marketplace.json`
5. Commit: `git commit -m "Add [Skill Name] skill"`
6. Push and open a Pull Request

---

## README.md Conventions

The README uses a specific format for skill listings:
- Format: `- [Skill Name](./path/) - One-sentence description.`
- No emojis in skill list entries
- Alphabetical order within each category
- External skills link to their GitHub URLs; in-repo skills link with relative paths (`./skill-name/`)
- Community-contributed skills include attribution: `*By [@username](https://github.com/username)*`

**README categories (in order):**
1. Document Processing
2. Development & Code Tools
3. Data & Analysis
4. Business & Marketing
5. Communication & Writing
6. Creative & Media
7. Productivity & Organization
8. Collaboration & Project Management
9. Security & Systems

---

## Key Skills Reference

### skill-creator
Guides the full lifecycle of skill creation. Contains:
- `scripts/init_skill.py` — generates skill directory scaffolding
- `scripts/package_skill.py` — validates and packages skill as `.zip`
- `scripts/quick_validate.py` — quick validation check

### mcp-builder
Four-phase guide for building MCP (Model Context Protocol) servers. Contains:
- `reference/mcp_best_practices.md` — universal naming, response formats, pagination guidelines
- `reference/python_mcp_server.md` — Python/FastMCP guide with Pydantic models
- `reference/node_mcp_server.md` — TypeScript guide with Zod schemas
- `reference/evaluation.md` — how to write 10-question evaluation harnesses

### webapp-testing
Playwright-based web app testing. Use `scripts/with_server.py` to manage server lifecycles:
```bash
python scripts/with_server.py --server "npm run dev" --port 5173 -- python your_test.py
```
Always run scripts with `--help` first. Do not read large script files into context unless absolutely necessary.

### artifacts-builder
Builds single-file HTML artifacts using React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui:
```bash
bash scripts/init-artifact.sh <project-name>   # Initialize
bash scripts/bundle-artifact.sh                # Bundle to bundle.html
```
Avoid excessive centered layouts, purple gradients, uniform rounded corners, and Inter font (markers of "AI slop").

### canvas-design
Two-step visual art creation: (1) write a design philosophy `.md` file, then (2) express it as a `.png` or `.pdf`. Uses bundled fonts in `canvas-fonts/` directory. Output must look meticulously crafted, not AI-generated.

### document-skills
Sub-skills for office document formats:
- `document-skills/pdf/` — pypdf, pdfplumber, reportlab, CLI tools (qpdf, pdftotext)
- `document-skills/docx/` — python-docx for Word documents
- `document-skills/pptx/` — python-pptx for PowerPoint
- `document-skills/xlsx/` — openpyxl for Excel

---

## Licensing

- Repository: Apache License 2.0
- Individual skills may carry different licenses — check each skill's `LICENSE.txt`
- Do not copy artists' work in canvas-design; always create original art

---

## Git Conventions

- Main branch: `master`
- Feature branches: `add-<skill-name>`
- Commit message format: `"Add [Skill Name] skill"` for new skills
- For README-only updates: `"Update README.md"`

---

## Common Pitfalls

- **Do not** run MCP servers directly (`python server.py`) — they block indefinitely on stdio. Use tmux or the evaluation harness.
- **Do not** read large script files into context unless customization is needed — invoke them as black boxes via CLI.
- **Do not** duplicate information between `SKILL.md` and `references/` files — pick one location.
- **Do not** add emojis to README skill listings.
- **Do not** write SKILL.md instructions in second person ("you should...") — use imperative form ("To do X...").
- When referencing `references/` files in `SKILL.md`, include the relative path so Claude knows where to load them (e.g., `[View Guide](./reference/python_mcp_server.md)`).
