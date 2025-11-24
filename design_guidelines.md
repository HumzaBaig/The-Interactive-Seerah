# Design Guidelines: Seerah Interactive Timeline

## Design Approach

**Hybrid Approach**: Drawing from educational timeline interfaces (Timeline JS, Khan Academy) for interaction patterns, combined with Islamic architectural and manuscript design principles for visual treatment. This creates a reverent, scholarly experience while maintaining modern web usability.

**Core Principle**: Visual richness through geometry, typography, and pattern—never through figurative representation.

## Typography System

**Primary Font**: Amiri (Arabic serif) or Scheherazade New for body text via Google Fonts
**Display Font**: Raleway or Montserrat for headings and UI elements
**Accent Font**: Arabic calligraphic style for chapter markers (Aref Ruqaa or similar)

**Hierarchy**:
- Timeline event titles: text-xl md:text-2xl font-semibold
- Event descriptions: text-base leading-relaxed
- Dates/locations: text-sm uppercase tracking-wide
- Period headers: text-3xl md:text-5xl font-bold
- Body content in cards: text-base md:text-lg leading-loose

## Layout System

**Spacing Primitives**: Use Tailwind units of 3, 4, 6, 8, 12, 16 for consistent rhythm
- Micro-spacing (icons, inline elements): 2-3
- Component padding: 4-6
- Section spacing: 8-12
- Major divisions: 16-20

**Container Strategy**:
- Hero/Timeline: Full-width with inner max-w-screen-2xl
- Content panels: max-w-4xl
- Reading content: max-w-prose

## Page Structure

### Hero Section
**Height**: 70vh minimum, establishing context
**Layout**: Centered content with generous whitespace
- Site title with Arabic and English
- Tagline: "An Interactive Journey Through the Life of Prophet Muhammad ﷺ"
- Quick navigation to timeline periods
- Decorative Islamic geometric border frame

### Main Timeline Interface (60% of viewport height)
**Horizontal scrolling timeline** with:
- Timeline axis spanning full width
- Event nodes at chronological positions
- Period markers (Pre-Prophethood, Makkah, Madinah)
- Zoom controls (±) and pan navigation
- Current position indicator
- Mini-map overview at bottom

**Event Nodes**: Circular or octagonal markers on timeline
- Size variations indicate event significance
- Hoverable with subtle scale effect
- Connected by continuous line

### Content Panel Area (expandable below timeline)
**Three-column responsive grid** for event details:
- Left: Date, location, context metadata
- Center: Main narrative description (largest column, 50% width)
- Right: Related events, references to Sealed Nectar chapters

**Mobile**: Stacks to single column

### Filtering & Navigation Sidebar (collapsible, 280px)
**Categories**:
- Revelations & Spiritual Events
- Battles & Expeditions
- Treaties & Diplomacy
- Migrations
- Social Reforms
- Companions' Stories

Each with icon (geometric symbols: star, shield, scroll, arrow, etc.)

### Footer
**Four-column grid**:
- About the project
- Sources & methodology
- Islamic resources links
- Technical credits & GitHub

## Component Library

### Timeline Components
**Period Dividers**: Vertical lines with geometric pattern fills, labeled headers
**Event Cards**: Rounded corners (rounded-xl), raised elevation, expandable on click
**Zoom Controls**: Circular buttons with + and - symbols, fixed position top-right
**Search Bar**: Prominent at top of timeline, with autocomplete dropdown
**Filter Chips**: Rounded pills with category icons, toggleable states

### Navigation
**Top Navigation Bar**: Sticky header with:
- Logo/title (left)
- Period quick-jump links (center)
- Search and settings (right)
- Progress indicator showing scroll position

### Data Display
**Event Detail Cards**:
- Header with date range and location pin icon
- Geometric divider line
- Multi-paragraph narrative text
- Reference citations to Sealed Nectar pages
- Related events section (horizontal scroll of smaller cards)

**Stats Display**: For battle/event statistics
- Grid layout (2x2 or 3x2)
- Large numbers with descriptive labels
- Minimal dividers

### Overlays
**Modal for Detailed Content**: When clicking event nodes
- Centered, max-w-3xl
- Backdrop blur effect
- Close button (X) top-right
- Scrollable content area

**Info Tooltips**: Small popovers for additional context, arrow indicators

## Islamic Design Elements

**Geometric Patterns**: 
- Corner decorations on cards using SVG geometric stars (8-point, 12-point)
- Border treatments with repeating tessellations
- Section dividers with arabesque-inspired patterns
- Never as busy backgrounds, always as accents

**Pattern Placement**:
- Hero section corners and borders
- Timeline period dividers
- Card header/footer decorations
- Section transitions

**Calligraphic Elements**:
- "Bismillah" at page start (decorative, not as image)
- "ﷺ" (PBUH) symbol after Prophet's name (Unicode character)
- Period names in both Arabic and English

## Images

**Hero Background**: Subtle texture of aged paper or parchment (very light, non-distracting)
**Location Maps**: Stylized, illustrated maps of Arabian Peninsula showing Makkah, Madinah, trade routes—geographic only, no people
**Symbolic Icons**: 
- Kaaba (geometric representation)
- Mosque silhouettes (architectural outlines)
- Book/scroll icons for revelations
- Directional arrows for migrations

**Image Treatment**: All images have subtle sepia or warm tone overlay, never sharp/modern photography aesthetic

**No Images Needed For**: Individual events can use geometric symbols and typography—overuse of imagery would detract from scholarly feel

## Animations

**Minimal, purposeful only**:
- Smooth scroll snapping on timeline navigation
- Fade-in for event card content when opened
- Gentle hover scale (1.02) on timeline nodes
- Progress indicator fill animation

**Avoid**: Parallax, auto-playing animations, continuous movements

## Accessibility & Cultural Sensitivity

- Right-to-left (RTL) support ready for Arabic content toggle
- "ﷺ" (PBUH) and "SWT" automatically appended via CSS content where appropriate
- Respectful terminology throughout
- Keyboard navigation for timeline (arrow keys)
- Screen reader labels for all interactive elements
- High contrast between text and backgrounds for readability

## Responsive Breakpoints

- Mobile (base): Single column, vertical timeline alternative
- Tablet (md): Two-column content, horizontal timeline maintained
- Desktop (lg): Full three-column layout, expanded timeline controls
- Large screens (xl): Maximum content width with generous margins

---

**Design Philosophy**: This timeline merges the precision of modern interface design with the contemplative beauty of Islamic manuscript tradition. Every element serves the educational mission while honoring the sacred subject matter through restraint, geometry, and thoughtful typography.