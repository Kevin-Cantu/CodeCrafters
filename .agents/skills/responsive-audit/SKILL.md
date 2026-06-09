---
name: responsive-audit
description: >
  Audits a running web application for layout and responsiveness issues across
  multiple device breakpoints (mobile, tablet, desktop, large desktop).
  Uses browser automation to capture screenshots, detect overflow/clipping,
  and produce a structured report with recommendations.
---

# Responsive Audit Skill

## Purpose
Run a comprehensive responsive design audit of the current running application
and return a structured report with screenshots and identified issues.

## When to Use
- After making UI/layout changes to verify nothing is broken at other breakpoints
- When the user reports something "looks cut off" or "broken" on mobile/tablet
- Proactively when adding new sections or modifying existing ones

## Breakpoints to Test

| Name           | Width  | Height | Device simulation       |
|----------------|--------|--------|-------------------------|
| mobile-sm      | 375px  | 812px  | iPhone SE / X           |
| mobile-lg      | 430px  | 932px  | iPhone 14 Pro Max       |
| tablet         | 768px  | 1024px | iPad portrait           |
| tablet-land    | 1024px | 768px  | iPad landscape          |
| desktop        | 1280px | 800px  | Standard laptop         |
| desktop-xl     | 1920px | 1080px | Full HD monitor         |

## Audit Steps

1. **Start the dev server** (if not already running):
   ```bash
   cd <project-root> && npm run dev
   ```
   Note the port (usually 3000 or 5173).

2. **For each breakpoint**, use the browser subagent to:
   - Navigate to the target URL (e.g., `http://localhost:3000`)
   - Resize the viewport to the breakpoint dimensions
   - Scroll from top to bottom capturing screenshots of each major section
   - Look for these specific issues:
     - **Horizontal overflow**: any element wider than the viewport (causes side scroll)
     - **Text clipping**: letters cut off at edges (`overflow-hidden` without enough padding)
     - **Overlapping elements**: z-index conflicts, absolute-positioned elements bleeding
     - **Broken flex/grid**: items not wrapping correctly, uneven gaps
     - **Font size issues**: text too small (<12px) or too large (overflows container)
     - **Button/CTA visibility**: buttons should be easily tappable (min 44×44px)
     - **Navbar issues**: hamburger menu, backdrop blur, section links
     - **Animation jank**: `animate=` on mount causing layout shifts vs `whileInView=`

3. **Report format** — return a structured markdown report:

```markdown
## Responsive Audit Report — [Date]

### Summary
- Breakpoints tested: X
- Issues found: Y (Z critical, W warnings)

### Issues

#### [CRITICAL] Horizontal overflow on mobile-sm
- **Section**: Hero
- **Element**: `.container-custom h1`
- **Description**: The h1 text at 16vw overflows at 375px width
- **Fix**: Reduce to `text-[13vw]` or add `px-4` to parent

#### [WARNING] Button too small on tablet
...

### Screenshots
- mobile-sm: [attached]
- tablet: [attached]
...

### Recommendations
1. Add `overflow-x-hidden` to the root `<html>` element
2. ...
```

## Usage Example

When the user asks to audit responsiveness, invoke the browser subagent with:

```
Task: Perform a responsive audit of the web app running at http://localhost:3000.

For each breakpoint (375px, 430px, 768px, 1280px):
1. Resize the browser window to that exact width
2. Scroll through the full page
3. Take screenshots of: navbar, hero, each section, footer/CTA
4. Note any: horizontal scroll, text clipping, overlapping elements, broken layouts

Return: A structured list of issues found at each breakpoint with the
section name, element description, and suggested fix.
```

## Quick Checks (CSS patterns to search for)

Run these `grep` commands to find common responsive issues before opening the browser:

```bash
# Find overflow-hidden without padding (potential text clipping)
grep -r "overflow-hidden" src/ --include="*.tsx" -l

# Find fixed pixel widths that might break on mobile
grep -rE "w-\[([0-9]+)px\]" src/ --include="*.tsx"

# Find animate= that should be whileInView= (causes layout shifts)
grep -rE 'animate=\{' src/ --include="*.tsx" | grep -v "whileHover\|whileTap\|whileDrag"

# Find text sizes larger than 10vw (might overflow on small phones)
grep -rE "text-\[1[0-9]vw\]" src/ --include="*.tsx"

# Find elements without responsive prefixes (might be desktop-only)
grep -rE "w-96|w-80|w-72" src/ --include="*.tsx"
```

## Notes
- Always test with actual device or accurate viewport simulation (DevTools device mode)
- Pay special attention to `overflow-hidden` on text containers — add `px-1 py-1` buffers
- Framer Motion: prefer `whileInView` over `animate` for scroll-triggered elements
- Tailwind: use `xs:`, `sm:`, `md:`, `lg:` prefixes progressively
- Safe areas: add `env(safe-area-inset-*)` for iOS notch/home bar support
