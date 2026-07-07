# 🍄 KJ Portfolio Quest — Super Mario Bros Style Portfolio

> **An interactive, game-based developer portfolio built entirely with vanilla HTML, CSS & JavaScript — no frameworks, no build tools, no dependencies.**

🎮 **[Play it Live → kush0712.github.io/mario_portfolio](https://kush0712.github.io/mario_portfolio/)**

---

## 📸 Preview

Walk Mario through a side-scrolling world where every flagpole is a resume section. Jump, collect coins, and walk into signs to read about my projects, experience, and skills — all in a pixel-perfect Super Mario Bros aesthetic.

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────┐
│                  index.html                     │
│  ┌────────────┐  ┌──────────┐  ┌─────────────┐  │
│  │Title Screen│  │ Game HUD │  │ Info Panel  │  │
│  │  (overlay) │  │(canvas UI│  │ (DOM popup) │  │
│  └────────────┘  └──────────┘  └─────────────┘  │
│         │                            │           │
│         ▼                            ▼           │
│   ┌──────────────────────────────────────────┐   │
│   │          <canvas> Game Engine            │   │
│   │  ┌──────────┐  ┌──────────┐             │   │
│   │  │  game.js │  │ style.css│             │   │
│   │  │  (1100+  │  │  (380+  │             │   │
│   │  │   lines) │  │  lines) │             │   │
│   │  └──────────┘  └──────────┘             │   │
│   └──────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
```

### Data Flow

```
SECTIONS[] config  ──►  buildWorld()  ──►  worldFlags / worldPipes / worldBlocks / worldCoins
                                                      │
                              requestAnimationFrame loop
                                 ├── update()  (physics, collision, input)
                                 └── render()  (canvas draw calls)
                                                      │
                                          Mario walks into flag
                                                      │
                                          openPanel(si)  ──►  PORTFOLIO[sec.id]  ──►  DOM innerHTML
```

---

## 🛠️ Tech Stack

| Layer | Technology | Why |
|---|---|---|
| **Structure** | HTML5 | Single `index.html`, semantic markup |
| **Rendering** | Canvas 2D API | Hardware-accelerated pixel art drawing at 60fps via `requestAnimationFrame` |
| **Styling** | Vanilla CSS3 | CSS custom properties, `@keyframes`, `@media` queries, glassmorphism |
| **Logic** | Vanilla JavaScript (ES6+) | Zero dependencies — pure `class`-free functional JS |
| **Audio** | Web Audio API | Procedurally synthesized Mario-style jump & coin sounds (no audio files) |
| **Fonts** | Google Fonts | `Press Start 2P` (pixel aesthetic) + `Inter` (readable body text) |
| **Hosting** | GitHub Pages | Static CDN — instant global load, no cold starts, forever free |

---

## ⚙️ Engine Deep Dive

### Game Loop
```js
// Fixed-timestep game loop via requestAnimationFrame
function loop() {
  update();   // physics, input, collision detection
  render();   // canvas draw calls
  animFrame = requestAnimationFrame(loop);
}
```

### Physics Engine (AABB Collision)
- Custom **AABB** (Axis-Aligned Bounding Box) collision detection
- `GRAVITY = 0.55` applied each frame to `mario.vy`
- `JUMP_VEL = -13` on spacebar/ArrowUp when `onGround = true`
- Ground, brick blocks, and pipes all act as solid surfaces

### World Generation
```js
// Procedural world built from SECTIONS[] config array
SECTIONS.forEach((sec, si) => {
  const ox = si * SECTION_W;   // section offset (720px each)
  // Spawn: clouds, hills, bricks, pipes, coins, flag sign
});
```

### Rendering Pipeline
```
clearRect() →  sky gradient (lerped between sections)
           →  drawHills()    (decorative background)
           →  drawClouds()   (animated floating clouds)
           →  drawGround()   (tiled ground with highlights)
           →  drawBlocks()   (brick blocks)
           →  drawPipes()    (green pixel pipes)
           →  drawCoins()    (floating bobbing coins)
           →  drawFlags()    (section signs + flagpoles)
           →  drawMario()    (pixel art character)
```

### Procedural Audio (Web Audio API)
No audio files — sounds are synthesized in real-time:
```js
// Jump sound: square wave, frequency sweep 350Hz → 600Hz
// Coin sound: sine wave, two-tone 988Hz → 1319Hz
// AudioContext lazy-initialized on first user gesture (browser policy)
```

### Sky Gradient System
Each section has its own `bgGradient` color pair. As Mario walks between sections, the sky color **linearly interpolates** (lerps) between the two palettes — no hard cuts.

---

## 📁 File Structure

```
kj portfolio/
├── index.html          # Shell: title screen, HUD, canvas, info panel, mobile controls
├── style.css           # All visual styling (~380 lines)
│   ├── :root vars      # Design tokens (colors, panel bg)
│   ├── Title screen    # Starfield, pixel logo, start button
│   ├── HUD             # Top bar (player, stage, coins, world)
│   ├── Info panel      # Popup card styling + animations
│   ├── Panel content   # Cards for projects, education, experience, certs
│   └── Mobile          # Touch controls, iOS fixes, responsive layout
└── game.js             # Everything else (~1100 lines)
    ├── C{}             # Pixel-art color palette
    ├── SECTIONS[]      # Level config (id, colors, sky gradients per stage)
    ├── PORTFOLIO{}     # All resume content (about, education, projects...)
    ├── buildWorld()    # Procedural world generation
    ├── update()        # Game loop: input, physics, AABB collision
    ├── render()        # All canvas draw functions
    ├── openPanel()     # Dynamic HTML injection for info panels
    └── playSound()     # Web Audio API synthesizer
```

---

## 🗺️ Level Map

| Stage | Section | Theme |
|---|---|---|
| 1-1 | About Me | Classic blue Mario sky |
| 1-2 | Education | Deep midnight blue |
| 1-3 | Projects | Dark ember / orange |
| 1-4 | Experience | Navy blue |
| 1-5 | Skills | Forest green |
| 1-6 | Certificates & EC | Deep purple |

---

## 🎮 Controls

| Input | Action |
|---|---|
| `←` / `→` or `A` / `D` | Move Mario |
| `Space` / `↑` / `W` | Jump |
| Walk into a flagpole sign | Open section panel |
| `Escape` | Close panel |
| **Mobile** | On-screen ◀ ▲ ▶ buttons |

---

## 📱 Mobile Support

- **Responsive** — Canvas scales to any screen size via `canvas.offsetWidth`
- **iOS Safari** — `apple-mobile-web-app-capable`, no pinch-zoom, no rubber-band scroll
- **Android Chrome** — `theme-color`, `touch-action: manipulation` on buttons
- **Touch controls** — 72×72px thumb-friendly D-pad appears on all touch devices

---

## 🚀 Run Locally

No build step needed — just open the file:

```bash
git clone https://github.com/kush0712/mario_portfolio.git
cd mario_portfolio
open index.html   # macOS
# or
start index.html  # Windows
```

---

## 🧠 Design Decisions

- **Zero dependencies** — No React, no Webpack, no npm. The entire portfolio loads in a single HTTP request cycle.
- **Data-driven architecture** — All resume content lives in the `PORTFOLIO{}` object. Updating the portfolio means editing one JS object, nothing else.
- **Canvas for the game, DOM for the content** — The game world is drawn on canvas for performance. The info panels are injected DOM HTML so text is selectable, links are clickable, and content is accessible.
- **Procedural audio** — Web Audio API generates sounds algorithmically, eliminating the need for any audio file downloads.
- **GitHub Pages** — Pure static hosting with global CDN, zero cold starts, zero cost — perfect for a portfolio that needs to load instantly when a recruiter clicks the link.

---

## 👨‍💻 About Me

**Kushagra Jaiswal** — AI/ML Engineer & Full Stack Developer

- 🌐 [Portfolio](https://kush0712.github.io/mario_portfolio/)
- 💼 [LinkedIn](https://linkedin.com/in/kushagra-jaiswal-kj)
- 🐱 [GitHub](https://github.com/kush0712)
- 📧 kushagra.jaiswal0712@gmail.com
