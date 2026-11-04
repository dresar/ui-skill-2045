# The Tells: a dated registry of generated-page defaults

Use this list during the final review. A tell is not banned forever; it is banned as a
*default*. If the brief explicitly asks for it, keep it and say so.

## Typography

| Tell | Why it reads as generated | Replace with |
|---|---|---|
| Inter for every project | The default of defaults | A family chosen for the subject, or system UI set well |
| One word in italic/colored in the headline | Cheap emphasis | Words that carry the emphasis |
| Uppercase tracked eyebrow labels | Template chrome | Information in the heading, or nothing |
| Monospace for labels and metadata | Costume “technical” | The text face; tabular figures for numbers |
| Display size on every section | No hierarchy | One display moment |
| Four-line headline | Not written for the width | Shorter words, wider measure |
| Gradient text | Decorative, often low contrast | Flat color with contrast |

## Color

| Tell | Replace with |
|---|---|
| Cream `#F4F1EA` + terracotta `#D97757` | A palette derived from the subject |
| Near-black + acid green | A palette with a stated reason |
| Violet-to-blue gradient | Flat accent |
| Purple SaaS glow | Tone step or real image |
| Low-contrast gray body text | ≥ 4.5:1 ink |
| Rainbow chart series | 2–3 series max, labeled directly |

## Layout

| Tell | Replace with |
|---|---|
| Three identical feature cards | A composition that fits the content |
| Icon tile above every card heading | Plain heading, or a real image |
| Cards nested in cards | One surface, space instead of borders |
| Hairline rules everywhere | Space, tone step, or scale change |
| Numbered `01 / 02 / 03` without a sequence | Order by position or size |
| Hero with a big number, a small label, and stats | The actual subject |
| Empty half-screen | Close the void with content |
| Centered everything | Left alignment with one deliberate center |

## Chrome

| Tell | Replace with |
|---|---|
| Floating pill navigation | A plain bar: wordmark, links, one action |
| Glass panels by default | A surface with a tone step |
| Rounded-square icon in a tinted square | A real icon, or no icon |
| “New ·” pill above the headline | Put it in the sentence or drop it |
| `→` appended to every link | Plain link text |
| Meta strings with middle dots | One clear sentence |

## Motion

| Tell | Replace with |
|---|---|
| Fade-and-slide-up on every section | One orchestrated entrance |
| Hover scale on every card | Feedback only where it means something |
| Scroll-jacking | Normal scrolling |
| Infinite marquee of logos | Static proof, or none |
| Animation that hides content until scroll | Content visible by default |

## Content

| Tell | Replace with |
|---|---|
| “Lorem ipsum” shipped | Real content or clearly marked samples |
| Fake customer logos | Nothing, or the user’s real proof |
| Invented statistics | A real source, or no number |
| “Empower your workflow” | A concrete claim |
| “Oops! Something went wrong.” | What failed + what to do |
| Placeholder copy left in production | Reviewed copy |

## How to use this list

1. Screenshot the page at 390, 768, and 1440.
2. Mark every tell you see.
3. For each mark, write either “brief requires it” or a replacement.
4. Fix all unmarked replacements.
5. Re-screenshot and compare.

Source basis: the tell list is a condensed, rewritten synthesis of `Leonxlnx/taste-skill`
(MIT), `pbakaus/impeccable` (Apache-2.0), and `anthropics/skills` `frontend-design`
(Apache-2.0). No upstream file is copied verbatim.
