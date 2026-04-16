# Builtin Homes — Website Requirements Plan
> **Company:** Builtin Homes  
> **Location:** No:2/271, Srinivasa St, Sathya Sai Nagar, Nanmangalam, Kovilambakkam, Chennai, Tamil Nadu 600129  
> **Specialty:** Residential & Commercial Construction, Interior Design, Turnkey Projects  
> **Tagline Suggestion:** *"Building Dreams, Delivering Excellence"*

---

## Priority 1 — Global Design System & Branding (Foundation — Must be done FIRST)

Before any page is built, the global design foundation must be established. Everything depends on this.

### 1.1 Color Palette
| Token | Color | Usage |
|---|---|---|
| `--primary` | Deep Navy `#1A2B4A` | Headers, CTA buttons |
| `--accent` | Warm Gold `#C8972A` | Highlights, icons, borders |
| `--bg-light` | Off-White `#F8F5F0` | Page background |
| `--text-dark` | Charcoal `#2C2C2C` | Body text |
| `--text-muted` | Slate Gray `#6B7280` | Subtitles, meta text |
| `--surface` | White `#FFFFFF` | Cards, modals |

### 1.2 Typography
- **Primary Font:** `Playfair Display` (Google Fonts) — for headings (premium feel)
- **Body Font:** `Inter` (Google Fonts) — for all body text (clean, readable)
- **Font Scale:** 12px, 14px, 16px, 20px, 24px, 32px, 48px, 64px

### 1.3 Layout & Grid
- Max content width: `1280px`
- Responsive breakpoints: `480px`, `768px`, `1024px`, `1280px`
- Base spacing unit: `8px` (use multiples: 8, 16, 24, 32, 48, 64)

### 1.4 Global Components (Reused Across All Pages)
- **Navigation Bar:** Logo left, nav links right, CTA button ("Get a Quote"), sticky on scroll, mobile hamburger menu
- **Footer:** Company logo, quick links, services list, address, phone, email, social media icons (Instagram), copyright notice
- **Scroll-to-top button**
- **WhatsApp floating chat button** (essential for Indian construction businesses)

### 1.5 Micro-animations & Interactions
- Smooth scroll behavior
- Fade-in on scroll (Intersection Observer)
- Hover lift effects on cards
- Button press feedback
- Navigation underline slide effect

---

## Priority 2 — Page 1: Home Page (`index.html`)

The most critical page. First impression. Must communicate who they are, what they do, and why to choose them instantly.

### 2.1 Hero Section
- **Full-screen hero** with a high-quality construction/building background image
- Overlay with company name: **"Builtin Homes"**
- Tagline: *"Professional Construction Solutions in Chennai"*
- Two CTA buttons: `"View Our Services"` → `/services.html` | `"Get a Free Quote"` → `/contact.html`
- Animated text reveal effect on load

### 2.2 Stats/Achievement Bar
- **4 key metrics** displayed prominently:
  - `100+` Projects Completed
  - `10+` Years of Experience
  - `500+` Happy Clients
  - `3` Expert Departments (Engineering, Architecture, Management)
- Counter animation (numbers count up on scroll)

### 2.3 Services Snapshot (3-card grid)
- **Individual House Construction** — icon + short description
- **Commercial Building Solutions** — icon + short description
- **Interior Design & Renovations** — icon + short description
- Each card links to the Services page section
- Hover animation: card lifts with gold border accent

### 2.4 Why Choose Us Section
- 4–6 feature highlights with icons:
  - ✅ Turnkey Project Delivery
  - ✅ In-House Design Team
  - ✅ Structural Engineering Expertise
  - ✅ Customized Building Solutions
  - ✅ Transparent Pricing
  - ✅ On-Time Delivery
- Two-column layout (text left, image right)

### 2.5 Featured Projects Preview
- Grid of 3 featured project cards (image + title + category)
- "View All Projects" button linking to `/projects.html`
- Hover overlay effect on project images

### 2.6 Testimonials Section
- 3–4 client testimonials
- Star ratings, client name, location (Chennai area)
- Card-based carousel or grid layout

### 2.7 Call-to-Action Banner
- Full-width banner with dark background
- Text: *"Ready to Build Your Dream Home?"*
- Button: `"Contact Us Today"` → `/contact.html`

---

## Priority 3 — Page 2: Services Page (`services.html`)

Describes all offerings in detail. Key for converting visitors to leads.

### 3.1 Page Hero
- Section title: **"Our Services"**
- Subtitle: *"Comprehensive construction and design solutions tailored to your vision"*
- Breadcrumb navigation: `Home > Services`

### 3.2 Service Cards (Detailed)
Each service gets a full section with:
- Large icon/illustration
- Service name (H2)
- Detailed description (150–200 words)
- Key features list (bullets)
- "Get a Quote" CTA

**Required Services:**

#### 3.2.1 Individual House Construction
- Description: End-to-end residential construction
- Features: Floor plan design, structural engineering, quality materials, project supervision

#### 3.2.2 Commercial Building Solutions
- Description: Office buildings, retail spaces, multi-storey commercial structures
- Features: Compliance with local regulations, commercial-grade materials, fast delivery

#### 3.2.3 Interior Design
- Description: Modern and traditional interior design for homes and offices
- Features: 3D visualization, space planning, material selection, custom furniture

#### 3.2.4 Renovations & Remodelling
- Description: Upgrade existing structures
- Features: Kitchen, bathroom, full house renovation, structural repairs

#### 3.2.5 Turnkey Projects
- Description: Complete project from land to handover
- Features: Single point of contact, design to delivery, no subcontracting delays

### 3.3 Process Section
Step-by-step numbered process (horizontal timeline):
1. **Consultation** — Initial meeting and site visit
2. **Planning & Design** — Architectural drawings and approvals
3. **Construction** — Execution by expert team
4. **Quality Check** — Inspection and finishing
5. **Handover** — Final walkthrough and handover

---

## Priority 4 — Page 3: Projects / Portfolio Page (`projects.html`)

Builds trust. Showcases real work. Visual impact is critical here.

### 4.1 Page Hero
- Title: **"Our Projects"**
- Subtitle: *"A showcase of quality craftsmanship across Chennai"*

### 4.2 Filter Tabs
- Filterable categories: `All` | `Residential` | `Commercial` | `Interior Design` | `Renovations`
- Smooth filter animation (items fade in/out)

### 4.3 Project Grid
- Masonry or uniform grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Each project card contains:
  - Project image (high quality)
  - Project name
  - Category badge (color-coded)
  - Location (e.g., "Kovilambakkam, Chennai")
  - Hover overlay with "View Details" button

### 4.4 Project Detail Modal / Lightbox
- Click on project → opens modal with:
  - Multiple project images (carousel)
  - Project description
  - Key details: Area (sq.ft), Year, Type, Location
  - CTA: *"Want a Similar Project? Contact Us"*

### 4.5 CTA Banner at bottom
- *"Have a project in mind? Let's build it together."*
- `"Start a Project"` button → `/contact.html`

---

## Priority 5 — Page 4: About Us Page (`about.html`)

Builds trust and humanizes the brand. Tells the company's story.

### 5.1 Page Hero
- Title: **"About Builtin Homes"**
- Subtitle: *"Built on trust, delivered with excellence"*

### 5.2 Company Story Section
- Brief history and founding story
- Mission statement
- Vision statement
- Two-column layout (story left, image right)

### 5.3 Our Team Section
- Title: **"Meet Our Experts"**
- Team grid with:
  - Engineers
  - Architects
  - Project Managers
- Each card: avatar/photo, name, role, short bio
- Hover card flip or info reveal effect

### 5.4 Our Values Section
- 4 core values with icons:
  - 🏗️ **Quality First** — No compromise on materials or workmanship
  - 🤝 **Client-Centric** — Your vision, our mission
  - ⏱️ **On-Time Delivery** — Committed to deadlines
  - 💡 **Innovation** — Modern solutions for every challenge

### 5.5 Certifications & Associations
- Any relevant certifications, RERA registration, or professional body memberships

### 5.6 Operating Hours Info
- Monday–Sunday: 9:00 AM – 12:00 AM (midnight)

---

## Priority 6 — Page 5: Contact Us Page (`contact.html`)

The conversion page. Must be simple, clear, and functional.

### 6.1 Page Hero
- Title: **"Contact Us"**
- Subtitle: *"Let's start building your dream together"*

### 6.2 Contact Form
Required fields:
- Full Name `*`
- Phone Number `*` (Indian format validation)
- Email Address
- Project Type (dropdown): `Residential` | `Commercial` | `Interior Design` | `Renovation` | `Turnkey` | `Other`
- Budget Range (optional dropdown): `< ₹20L` | `₹20–50L` | `₹50L–1Cr` | `1Cr+`
- Message / Project Details (textarea) `*`
- Submit Button: **"Send Enquiry"**
- Success state: Thank you message shown after submit

### 6.3 Contact Information Block
- 📍 **Address:** No:2/271, Srinivasa St, Sathya Sai Nagar, Nanmangalam, Kovilambakkam, Chennai, Tamil Nadu 600129
- 📞 **Phone:** _(to be filled)_
- 📧 **Email:** _(to be filled)_
- 🕘 **Hours:** Mon–Sun, 9:00 AM – 12:00 AM
- 📸 **Instagram:** @builtinhomes (https://www.instagram.com/builtinhomes/)

### 6.4 Embedded Google Maps
- Interactive Google Maps embed showing the office location (Kovilambakkam, Chennai)
- "Get Directions" button linking to Google Maps

### 6.5 WhatsApp Quick Contact
- Prominent WhatsApp button: *"Chat on WhatsApp"*
- Pre-filled message: *"Hi, I'm interested in your construction services."*

---

## Priority 7 — SEO Requirements (Applied Across All Pages)

| Requirement | Detail |
|---|---|
| `<title>` tag | Unique per page, includes "Builtin Homes" + keywords |
| Meta description | Unique per page, 150–160 characters |
| Open Graph tags | For social sharing previews |
| H1 tag | Exactly one per page |
| Image alt texts | All images must have descriptive alt text |
| Canonical URL | Add canonical tag on each page |
| Sitemap hint | Structure navigation consistent with sitemap |
| Local SEO keywords | "Construction company in Chennai", "House construction Kovilambakkam", "Builders in South Chennai" |
| Schema Markup | LocalBusiness schema JSON-LD on contact/home page |

---

## Priority 8 — Performance & Technical Requirements

- **HTML/CSS/Vanilla JS only** (no heavy frameworks)
- Google Fonts loaded via `<link>` with `display=swap`
- Images: WebP format, compressed, lazy-loaded (`loading="lazy"`)
- CSS: Single external `style.css` file, CSS custom properties for design tokens
- Smooth scroll: `scroll-behavior: smooth` in CSS
- Mobile-first CSS approach
- Minimum Lighthouse score targets: Performance 85+, Accessibility 90+, SEO 90+
- No broken links
- All pages cross-linked in nav and footer

---

## Priority 9 — Accessibility Requirements

- Sufficient color contrast ratios (WCAG AA compliant)
- All interactive elements keyboard-navigable
- ARIA labels on icons and non-descriptive links
- Focus visible states on all inputs and buttons
- Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)

---

## Implementation Order Summary

| Order | Task |
|---|---|
| 1 | Global CSS design system (`style.css`) |
| 2 | Navigation bar & footer components |
| 3 | Home page (`index.html`) |
| 4 | Services page (`services.html`) |
| 5 | Projects/Portfolio page (`projects.html`) |
| 6 | About Us page (`about.html`) |
| 7 | Contact Us page (`contact.html`) |
| 8 | SEO meta tags across all pages |
| 9 | Performance optimizations & accessibility pass |
| 10 | Final cross-browser & mobile testing |

---

## File Structure

```
builtin-homes-website/
├── index.html           # Home Page
├── services.html        # Services Page
├── projects.html        # Portfolio/Projects Page
├── about.html           # About Us Page
├── contact.html         # Contact Page
├── style.css            # Global Stylesheet
├── script.js            # Global JavaScript
└── assets/
    ├── images/          # All site images (WebP preferred)
    ├── icons/           # SVG icons
    └── fonts/           # (if self-hosted)
```

---

*Document created for Builtin Homes website project — April 2026*
