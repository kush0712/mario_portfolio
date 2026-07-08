/* ===================================================
   KJ PORTFOLIO QUEST – game.js
   Super Mario Bros style portfolio game
=================================================== */

'use strict';

// ─── PALETTE ──────────────────────────────────────────────
const C = {
  sky:      '#5c94fc',
  skyBot:   '#3070d8',
  cloud:    '#ffffff',
  ground:   '#c84b11',
  gTop:     '#e89820',
  gLine:    '#a03010',
  block:    '#f8b800',
  blockDk:  '#c87000',
  blockShd: '#8b4513',
  pipe:     '#00a800',
  pipeDk:   '#006400',
  pipeLt:   '#00d800',
  coin:     '#f8d820',
  coinShd:  '#c89000',
  flagPole: '#c0c0c0',
  flag:     '#e84818',
  mario:    '#e8001d',
  marioCap: '#e84818',
  marioSkin:'#f8b090',
  marioBlu: '#0038a8',
  text:     '#ffffff',
  hud:      '#f8d820',
  star:     '#f8f800',
  brick:    '#b04828',
  brickMt:  '#d86838',
  question: '#f8b800',
  shadow:   'rgba(0,0,0,0.3)',
};

// ─── DATA ─────────────────────────────────────────────────
const SECTIONS = [
  {
    id: 'about', label: '1-1', title: 'ABOUT ME',
    color: '#5c94fc', accent: '#f8d820',
    blockColor: '#f8b800',
    pipeColor: '#00a800',
    bgGradient: ['#5c94fc','#3070d8'],
  },
  {
    id: 'education', label: '1-2', title: 'EDUCATION',
    color: '#2860a8', accent: '#88ccff',
    blockColor: '#8888ff',
    pipeColor: '#006400',
    bgGradient: ['#1a3060','#0a1840'],
  },
  {
    id: 'projects', label: '1-3', title: 'PROJECTS',
    color: '#882800', accent: '#f8a000',
    blockColor: '#c87000',
    pipeColor: '#004800',
    bgGradient: ['#582800','#381800'],
  },
  {
    id: 'experience', label: '1-4', title: 'EXPERIENCE',
    color: '#3a60a8', accent: '#f8d820',
    blockColor: '#8888ff',
    pipeColor: '#006400',
    bgGradient: ['#285088','#102040'],
  },
  {
    id: 'skills', label: '1-5', title: 'SKILLS',
    color: '#48a048', accent: '#f8f820',
    blockColor: '#f8b800',
    pipeColor: '#006400',
    bgGradient: ['#285028','#183018'],
  },
  {
    id: 'certs', label: '1-6', title: 'CERTIFICATES',
    color: '#280050', accent: '#cc88ff',
    blockColor: '#8800cc',
    pipeColor: '#003800',
    bgGradient: ['#180040','#0a0028'],
  },
];

const PORTFOLIO = {
  about: {
    title: 'ABOUT ME',
    badge: 'STAGE 1-1',
    lines: [
      'Hey! I\'m Kushagra, an AI/ML Engineer and Full Stack Developer who loves shipping real-world solutions.',
      'I\'m highly project-driven, always building things that solve actual problems. I enjoy tackling difficult engineering challenges and measuring outcomes with hard numbers.',
      'Applying AI to practical problems is my sweet spot: from RAG pipelines to CV models. I\'m comfortable learning any new technology the problem demands.',
    ],
    traits: ['Project-Driven', 'Real-World Solutions', 'AI Enthusiast', 'Engineering Problem Solver', 'Measurable Outcomes', 'Fast Learner'],
    social: [
      { label: 'GitHub', url: 'https://github.com/kush0712' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/kushagra-jaiswal-kj' },
      { label: 'Email', url: 'mailto:kushagra.jaiswal0712@gmail.com' },
    ],
  },
  education: {
    title: 'EDUCATION',
    badge: 'STAGE 1-2',
    schools: [
      {
        name: 'MIT World Peace University',
        location: 'Pune, India',
        degree: 'B.Tech - Computer Science & Engineering',
        period: 'July 2023 - June 2027',
        score: 'CGPA: 7.47 / 10',
        label: 'University',
      },
      {
        name: 'Guru Nanak Public School, Dalhousie',
        degree: 'XII CBSE',
        period: '2021 - 2022',
        score: '85.2%',
        label: 'Higher Secondary',
      },
      {
        name: 'Guru Nanak Public School, Dalhousie',
        degree: 'X CBSE',
        period: '2019 - 2020',
        score: '97%',
        label: 'Secondary',
      },
    ],
  },
  skills: {
    title: 'SKILLS',
    badge: 'STAGE 1-5',
    categories: [
      {
        name: 'Languages',
        items: ['Python', 'Java', 'JavaScript', 'SQL'],
      },
      {
        name: 'AI / ML',
        items: ['Generative AI', 'Agentic AI', 'LLMs', 'NLP', 'RAG Pipelines', 'Vector Database', 'Transformers', 'Deep Learning', 'Prompt Engineering', 'LLM Evaluation', 'Machine Learning'],
      },
      {
        name: 'Backend & APIs',
        items: ['FastAPI', 'REST APIs', 'Node.js', 'Express.js', 'MySQL', 'PostgreSQL'],
      },
      {
        name: 'Libraries & Frameworks',
        items: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'LangChain', 'React.js'],
      },
      {
        name: 'Tools & Cloud',
        items: ['Git', 'GitHub', 'Docker', 'AWS (EC2, S3)', 'Hugging Face', 'Tableau'],
      },
      {
        name: 'CS Fundamentals',
        items: ['DSA', 'OOP', 'DBMS', 'Computer Networks', 'OS', 'Agile'],
      },
    ],
  },
  projects: {
    title: 'PROJECTS',
    badge: 'STAGE 1-3',
    list: [
      {
        name: 'BarPal.ai',
        subtitle: 'Legal RAG LLM Assistant',
        tags: ['Python', 'FastAPI', 'Pinecone', 'Gemma 4 (31B)', 'NVIDIA API'],
        date: 'Nov 2025',
        url: 'https://github.com/kush0712/Gemma-Chatbot-with-RAG-RAGAS-Evaluation',
        demoUrl: 'https://barpal-ai-h123.onrender.com',
        metrics: [
          { val: '90%', label: 'RAM Reduction' },
          { val: '60%+', label: 'Latency Cut' },
          { val: '31B', label: 'Model Params' },
          { val: '3', label: 'RAGAS Metrics' },
        ],
        bullets: [
          'Generative AI legal assistant using semantic RAG with Pinecone Vector DB & Gemma 4 31B for Q&A over PDFs/DOCX.',
          'Slashed RAM by 90% (800MB → <80MB) by switching from PyTorch local embedding to NVIDIA Inference API.',
          'Achieved 60%+ reduction in chunk-embedding latency via parallel-batched asyncio.gather ingestion.',
          'Built RAGAS evaluation pipeline measuring Faithfulness, Answer Relevance & Context Precision.',
        ],
      },
      {
        name: 'NAT Funds',
        subtitle: 'Mutual Fund Analytics Platform',
        tags: ['Node.js', 'Express.js', 'REST APIs', 'Tailwind CSS'],
        date: 'Apr 2026',
        url: 'https://github.com/kush0712/NAT_FUNDS',
        demoUrl: 'https://nat-funds.onrender.com',
        metrics: [
          { val: '9,100+', label: 'Mutual Funds' },
          { val: '15+', label: 'Financial Metrics' },
          { val: '80%', label: 'Cold-boot Latency ↓' },
          { val: '4', label: 'Cron Jobs' },
        ],
        bullets: [
          'Full-stack platform to discover, filter & compare 9,100+ Indian mutual funds via AMFI, NSE/BSE & RBI APIs.',
          'Implemented 15+ metrics: CAGR, Sharpe Ratio, Sortino Ratio, Alpha, Beta, Standard Deviation.',
          'Reduced cold-boot latency 80% via 3-tier disk-backed caching & 4 scheduled cron jobs.',
        ],
      },
      {
        name: 'Deepfake Detector',
        subtitle: 'AI-powered Deepfake Detection',
        tags: ['Python', 'PyTorch', 'EfficientNet-B0', 'MTCNN', 'GRU'],
        date: '2026',
        url: 'https://github.com/kush0712/Deepfake_Detector',
        demoUrl: 'https://huggingface.co/spaces/kush0712/deepfakedetector',
        metrics: [
          { val: '96.39%', label: 'Accuracy' },
          { val: '1200', label: 'Videos' },
          { val: 'Celeb-DF', label: 'Dataset' },
          { val: 'GRU', label: 'RNN Type' },
        ],
        bullets: [
          'Achieved 96.39% accuracy in detecting deepfakes by fine-tuning EfficientNet-B0 using PyTorch.',
          'Utilized MTCNN for robust face detection and GRU instead of LSTM for temporal sequence modeling.',
          'Trained on 1,200 videos from the high-quality Celeb-DF v2 dataset to improve generalization.',
        ],
      },
      {
        name: 'Solar Panel Fault Detection',
        subtitle: 'ML Fault Classifier',
        tags: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Grad-CAM'],
        date: 'Apr 2026',
        url: 'https://github.com/kush0712/Solar_Panel_Fault_Detection',
        metrics: [
          { val: '75%', label: 'Test Accuracy' },
          { val: '90%', label: 'Top-2 Accuracy' },
          { val: '12', label: 'Fault Classes' },
          { val: '20K', label: 'Images' },
        ],
        bullets: [
          'ML model classifying 12 fault categories in solar panels using CNN & Random Forest on 20,000-image RaptorMaps dataset.',
          '75% test accuracy & 90% Top-2 accuracy via 2-phase fine-tuning strategy.',
          'Applied Batch Normalization, L2 regularization & Dropout; integrated Grad-CAM visualizations.',
        ],
      },
      {
        name: 'LocalDrop',
        subtitle: 'LAN File Sharing System',
        tags: ['Java', 'Servlets', 'JSP', 'HikariCP', 'MySQL'],
        date: 'Mar 2026',
        url: 'https://github.com/kush0712/LocalDrop',
        metrics: [
          { val: '500MB', label: 'Max Transfer' },
          { val: '10', label: 'Concurrent Conns' },
          { val: 'SHA-256', label: 'Integrity Check' },
          { val: '8KB', label: 'Buffer Size' },
        ],
        bullets: [
          'Browser-based LAN file-sharing server: upload, download, search & track transfers with no client software.',
          'Handles files up to 500MB via 8KB buffered streaming with SHA-256 integrity verification.',
          'Secured against SQL injection with PreparedStatements; HikariCP pool for 10 concurrent connections.',
        ],
      },
    ],
  },
  experience: {
    title: 'EXPERIENCE',
    badge: 'STAGE 1-4',
    list: [
      {
        role: 'QA Intern',
        org: 'Assertion Inc.',
        period: 'July 2026 - Present',
        domain: 'Enterprise Voice Security',
        bullets: [
          'Achieved 95%+ test coverage across core SIP routing and API orchestration modules.',
          'Successfully simulated and blocked 10+ distinct VoIP attack vectors during system validation.',
          'Verified a low False Positive rate (<1%) for the AI classification models.',
          'Validated system stability under simulated loads of 10,000+ concurrent calls.',
        ],
      },
    ],
  },
  certs: {
    title: 'CERTIFICATES & EXTRACURRICULAR',
    badge: 'STAGE 1-6',
    certs: [
      { name: 'IBM Full Stack Web Development', org: 'IBM' },
      { name: 'Google 5-Day AI Agents', org: 'Google' },
      { name: 'Kaggle Intermediate Machine Learning', org: 'Kaggle' },
      { name: 'JPMorgan Chase Software Engineering', org: 'JPMorganChase' },
    ],
    extra: [
      {
        role: 'Videographer & Video Editor',
        org: 'MIT-WPU Shutterbugs (Media Club)',
        period: '2024 - Present',
        desc: 'Creating visual media and covering events for the university media club.',
      },
      {
        role: 'Media Creator',
        org: 'MIT-WPU SquadUP (Esports Club)',
        period: '2024 - Present',
        desc: 'Created media and covered government-college collaboration events such as Maratha Esports.',
      },
      {
        role: 'Outreach Leader',
        org: 'Innovation Hub',
        period: '2023',
        desc: 'Served as Outreach Leader for RTEP, a national-level research paper conference.',
      },
    ],
  },
};

// ─── CONSTANTS ────────────────────────────────────────────
const TILE       = 40;
const GRAVITY    = 0.55;
const JUMP_VEL   = -13;
const MOVE_SPD   = 4.5;
const SECTION_W  = 720; // px per section
const TOTAL_W    = SECTION_W * SECTIONS.length;

// ─── STATE ────────────────────────────────────────────────
let canvas, ctx, W, H;
let keys = {};
let coins = 0;
let currentSection = 0;
let panelOpen = false;
let animFrame;
let mobileLeft = false, mobileRight = false, mobileJump = false;
let jumpLatch = false;

let cam = { x: 0 };
let mario = {
  x: 100, y: 0,
  vx: 0, vy: 0,
  w: 28, h: 40,
  onGround: false,
  facing: 1,
  frame: 0,
  walkTimer: 0,
  jumpAnim: false,
};

// ─── WORLD OBJECTS ────────────────────────────────────────
let worldCoins   = [];
let worldBlocks  = [];
let worldPipes   = [];
let worldFlags   = [];
let worldClouds  = [];
let worldHills   = [];
let hitBlocks    = new Set();
let collectedCoins = new Set();
let triggeredFlags = new Set();

function buildWorld() {
  worldCoins = []; worldBlocks = []; worldPipes = [];
  worldFlags = []; worldClouds = []; worldHills = [];

  SECTIONS.forEach((sec, si) => {
    const ox = si * SECTION_W;

    // Clouds
    for (let i = 0; i < 5; i++) {
      worldClouds.push({
        x: ox + 100 + i * 330 + Math.sin(si*7+i)*80,
        y: 40 + Math.cos(si*3+i)*30,
        w: 120 + (i%3)*40, type: i%2,
      });
    }

    // Hills / bushes decoration
    for (let i = 0; i < 3; i++) {
      worldHills.push({ x: ox + 200 + i * 560, si });
    }

    // Decorative brick blocks (no fake reward)
    const blockPositions = [
      ox+120, ox+180, ox+240,
      ox+400,
    ];
    blockPositions.forEach((bx, bi) => {
      const by = H - TILE*4 - (bi%2 === 0 ? TILE*2 : TILE);
      worldBlocks.push({ x: bx, y: by, si, type: 'brick', hit: false, id: `${si}-${bi}` });
    });

    // Pipes
    const pipeHeights = [2, 3];
    const pipeXs = [ox+300, ox+460];
    pipeXs.forEach((px, pi) => {
      const ph = Math.floor(pipeHeights[pi%pipeHeights.length] + 0.5);
      worldPipes.push({ x: px, y: H - TILE*(3+ph), w: TILE*2, h: TILE*(ph+1), si, pi, label: '' });
    });

    // Coins — floating above ground in open stretches
    const coinXs = [ox+80, ox+200, ox+540, ox+600, ox+650];
    coinXs.forEach((cx, ci) => {
      worldCoins.push({
        x: cx,
        y: H - TILE*3 - TILE*3.2,   // hover nicely above ground
        id: `c-${si}-${ci}`,
      });
    });

    // Section flag / sign
    worldFlags.push({
      x: ox + SECTION_W - 80,
      y: H - TILE*3 - TILE*6,
      si, id: si,
      label: sec.title,
    });
  });
}

// ─── INIT ─────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  canvas = document.getElementById('gameCanvas');
  ctx    = canvas.getContext('2d');

  document.getElementById('start-btn').addEventListener('click', startGame);
  document.getElementById('close-panel').addEventListener('click', closePanel);

  document.addEventListener('keydown', e => {
    keys[e.code] = true;
    if (['Space','ArrowUp','ArrowLeft','ArrowRight','ArrowDown'].includes(e.code)) {
      e.preventDefault();
    }
  });
  document.addEventListener('keyup', e => { keys[e.code] = false; jumpLatch = false; });

  // Mobile buttons
  const mobLeft  = document.getElementById('mob-left');
  const mobRight = document.getElementById('mob-right');
  const mobJump  = document.getElementById('mob-jump');
  const addTouch = (el, setOn) => {
    el.addEventListener('touchstart', e => { e.preventDefault(); setOn(true); }, {passive:false});
    el.addEventListener('touchend',   e => { e.preventDefault(); setOn(false); }, {passive:false});
  };
  addTouch(mobLeft,  v => mobileLeft=v);
  addTouch(mobRight, v => mobileRight=v);
  addTouch(mobJump,  v => { mobileJump=v; if(!v) jumpLatch=false; });

  window.addEventListener('resize', resize);
  resize();
});

function resize() {
  W = canvas.width  = canvas.offsetWidth;
  H = canvas.height = canvas.offsetHeight;
  mario.y = H - TILE*3 - mario.h;
  buildWorld();
}

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function startGame() {
  initAudio();
  const ts = document.getElementById('title-screen');
  ts.classList.add('fade-out');
  setTimeout(() => {
    ts.style.display = 'none';
    document.getElementById('game-wrapper').classList.remove('hidden');
    resize();
    mario.x = 100; mario.y = H - TILE*3 - mario.h;
    mario.vx = mario.vy = 0;
    cam.x = 0; coins = 0;
    updateHUD();
    loop();
  }, 700);
}

// ─── MAIN LOOP ────────────────────────────────────────────
function loop() {
  if (!panelOpen) update();
  render();
  animFrame = requestAnimationFrame(loop);
}

function update() {
  const left  = keys['ArrowLeft']  || keys['KeyA'] || mobileLeft;
  const right = keys['ArrowRight'] || keys['KeyD'] || mobileRight;
  const jump  = keys['ArrowUp']    || keys['KeyW'] || keys['Space'] || mobileJump;

  // Move
  if (left)  { mario.vx = -MOVE_SPD; mario.facing = -1; }
  else if (right) { mario.vx = MOVE_SPD; mario.facing = 1; }
  else mario.vx *= 0.75;

  // Jump
  if (jump && mario.onGround && !jumpLatch) {
    mario.vy = JUMP_VEL;
    mario.onGround = false;
    jumpLatch = true;
    playSound('jump');
  }
  if (!jump) jumpLatch = false;

  // Gravity
  mario.vy += GRAVITY;
  mario.x  += mario.vx;
  mario.y  += mario.vy;

  // Walk animation
  if (Math.abs(mario.vx) > 0.5) {
    mario.walkTimer++;
    if (mario.walkTimer > 8) { mario.frame = (mario.frame+1)%3; mario.walkTimer = 0; }
  } else { mario.frame = 0; }

  // Ground (TILE*3 = ground thickness from bottom)
  const groundY = H - TILE*3;
  mario.onGround = false;
  if (mario.y + mario.h >= groundY) {
    mario.y = groundY - mario.h;
    mario.vy = 0;
    mario.onGround = true;
  }

  // World bounds
  if (mario.x < 0) mario.x = 0;
  if (mario.x > TOTAL_W - mario.w) mario.x = TOTAL_W - mario.w;

  // Block collision (question / brick)
  worldBlocks.forEach(b => {
    if (b.hit) return;
    const bx=b.x, by=b.y, bw=TILE, bh=TILE;
    if (mario.x+mario.w > bx && mario.x < bx+bw &&
        mario.y+mario.h > by && mario.y < by+bh) {
      // Resolve collision
      const overlapLeft   = (mario.x+mario.w) - bx;
      const overlapRight  = (bx+bw) - mario.x;
      const overlapTop    = (mario.y+mario.h) - by;
      const overlapBottom = (by+bh) - mario.y;
      const minH = Math.min(overlapLeft, overlapRight);
      const minV = Math.min(overlapTop, overlapBottom);
      if (minV < minH) {
        if (mario.vy < 0 && overlapTop < overlapBottom) {
          // Hit block from below
          mario.y = by + bh;
          mario.vy = 0;
          if (!hitBlocks.has(b.id)) {
            hitBlocks.add(b.id);
            b.hit = true;
            b.hitAnim = 8;
            spawnCoinPop(b.x + TILE/2, b.y);
            coins++;
            updateHUD();
            playSound('coin');
          }
        } else {
          mario.y = by - mario.h;
          mario.vy = 0;
          mario.onGround = true;
        }
      } else {
        if (overlapLeft < overlapRight) mario.x = bx - mario.w;
        else mario.x = bx + bw;
        mario.vx = 0;
      }
    }
    if (b.hitAnim > 0) b.hitAnim--;
  });

  // Pipe collision
  worldPipes.forEach(p => {
    if (mario.x+mario.w > p.x && mario.x < p.x+p.w &&
        mario.y+mario.h > p.y && mario.y < p.y+p.h) {
      const overlapLeft  = (mario.x+mario.w) - p.x;
      const overlapRight = (p.x+p.w) - mario.x;
      const overlapTop   = (mario.y+mario.h) - p.y;
      const minH = Math.min(overlapLeft, overlapRight);
      if (overlapTop < minH && mario.vy > 0) {
        mario.y = p.y - mario.h;
        mario.vy = 0; mario.onGround = true;
      } else {
        if (overlapLeft < overlapRight) mario.x = p.x - mario.w;
        else mario.x = p.x + p.w;
        mario.vx = 0;
      }
    }
  });

  // Coin collection
  worldCoins.forEach(coin => {
    if (collectedCoins.has(coin.id)) return;
    const cx=coin.x-TILE*0.3, cy=coin.y-TILE*0.3, cs=TILE*0.6;
    if (mario.x+mario.w > cx && mario.x < cx+cs &&
        mario.y+mario.h > cy && mario.y < cy+cs) {
      collectedCoins.add(coin.id);
      coins++;
      updateHUD();
      spawnCoinPop(coin.x, coin.y);
      playSound('coin');
    }
  });

  // Flag / section triggers — re-triggerable on each entry
  worldFlags.forEach(f => {
    const fx = f.x, fy = f.y;
    const inside = mario.x+mario.w > fx && mario.x < fx+TILE*2 &&
                   mario.y+mario.h > fy && mario.y < fy+TILE*8;
    if (inside) {
      if (!triggeredFlags.has(f.id)) {
        triggeredFlags.add(f.id);
        openPanel(f.si);
      }
    } else {
      // Mario has left the zone — reset so re-entry works
      triggeredFlags.delete(f.id);
    }
  });

  // Camera
  const camTarget = mario.x - W * 0.4;
  cam.x += (camTarget - cam.x) * 0.12;
  cam.x = Math.max(0, Math.min(cam.x, TOTAL_W - W));

  // Section detection
  const sec = Math.floor((mario.x + cam.x*0) / SECTION_W);
  currentSection = Math.max(0, Math.min(sec, SECTIONS.length-1));
  document.getElementById('hud-stage').textContent = SECTIONS[currentSection].label;
}

// ─── RENDER ───────────────────────────────────────────────
function render() {
  ctx.clearRect(0,0,W,H);

  // Sky gradient per section
  const secIdx = Math.floor(cam.x / SECTION_W);
  const secFrac = (cam.x % SECTION_W) / SECTION_W;
  const s0 = SECTIONS[Math.max(0,Math.min(secIdx, SECTIONS.length-1))];
  const s1 = SECTIONS[Math.max(0,Math.min(secIdx+1, SECTIONS.length-1))];
  const g = ctx.createLinearGradient(0,0,0,H);
  const lerp = (a,b,t) => Math.round(a+(b-a)*t);
  const lerpCol = (c1,c2,t) => {
    const r1=parseInt(c1.slice(1,3),16), g1=parseInt(c1.slice(3,5),16), b1=parseInt(c1.slice(5,7),16);
    const r2=parseInt(c2.slice(1,3),16), g2=parseInt(c2.slice(3,5),16), b2=parseInt(c2.slice(5,7),16);
    return `rgb(${lerp(r1,r2,t)},${lerp(g1,g2,t)},${lerp(b1,b2,t)})`;
  };
  g.addColorStop(0, lerpCol(s0.bgGradient[0], s1.bgGradient[0], secFrac));
  g.addColorStop(1, lerpCol(s0.bgGradient[1], s1.bgGradient[1], secFrac));
  ctx.fillStyle = g;
  ctx.fillRect(0,0,W,H);

  ctx.save();
  ctx.translate(-cam.x, 0);

  drawHills();
  drawClouds();
  drawGround();
  drawBlocks();
  drawPipes();
  drawCoins();
  drawFlags();
  drawMario();

  ctx.restore();
}

function drawGround() {
  // Ground layer
  ctx.fillStyle = C.ground;
  ctx.fillRect(0, H-TILE*3, TOTAL_W, TILE*3);
  // Top highlight strip
  ctx.fillStyle = C.gTop;
  ctx.fillRect(0, H-TILE*3, TOTAL_W, TILE*0.45);
  // Section dividers (decorative lines)
  ctx.fillStyle = C.gLine;
  for (let x = 0; x < TOTAL_W; x += TILE) {
    ctx.fillRect(x, H-TILE*3+TILE*0.45, 2, TILE*2.55);
  }
  // Bottom darker strip
  ctx.fillStyle = '#8b2800';
  ctx.fillRect(0, H-TILE*0.5, TOTAL_W, TILE*0.5);
}

function drawHills() {
  worldHills.forEach(h => {
    const x = h.x, y = H-TILE*3;
    // Draw hill
    ctx.fillStyle = '#206820';
    ctx.beginPath();
    ctx.arc(x, y, 60, Math.PI, 0, false);
    ctx.fill();
    ctx.fillStyle = '#389038';
    ctx.beginPath();
    ctx.arc(x, y, 50, Math.PI+0.3, -0.3, false);
    ctx.fill();
    // Dots on hill
    ctx.fillStyle = '#50b050';
    for (let d=0;d<3;d++) {
      ctx.beginPath();
      ctx.arc(x-30+d*30, y-35+Math.abs(d-1)*10, 5, 0, Math.PI*2);
      ctx.fill();
    }
  });
}

function drawClouds() {
  worldClouds.forEach(cl => {
    ctx.fillStyle = 'rgba(255,255,255,0.92)';
    const drawPuff = (cx,cy,r) => {
      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.fill();
    };
    drawPuff(cl.x, cl.y+14, 20);
    drawPuff(cl.x+cl.w*0.3, cl.y+8, 28);
    drawPuff(cl.x+cl.w*0.6, cl.y+10, 24);
    drawPuff(cl.x+cl.w, cl.y+14, 18);
    // Shadow
    ctx.fillStyle = 'rgba(200,220,255,0.6)';
    ctx.fillRect(cl.x, cl.y+30, cl.w, 10);
  });
}

function drawBlocks() {
  worldBlocks.forEach(b => {
    const bx = b.x, by = b.y - (b.hitAnim || 0)*0.5;
    if (b.type === 'question') {
      if (b.hit) {
        // Used block
        ctx.fillStyle = '#888';
        ctx.fillRect(bx, by, TILE, TILE);
        ctx.fillStyle = '#666';
        ctx.fillRect(bx+2, by+2, TILE-4, TILE-4);
        ctx.fillStyle = '#aaa';
        ctx.fillRect(bx, by, TILE, 3);
        ctx.fillRect(bx, by, 3, TILE);
      } else {
        // Question block
        const t = Date.now()/200;
        const flash = Math.sin(t)*0.3+0.7;
        ctx.fillStyle = `rgba(248,184,0,${flash})`;
        ctx.fillRect(bx, by, TILE, TILE);
        ctx.fillStyle = C.blockDk;
        ctx.fillRect(bx, by, TILE, 4);
        ctx.fillRect(bx, by, 4, TILE);
        ctx.fillRect(bx+TILE-4, by, 4, TILE);
        ctx.fillRect(bx, by+TILE-4, TILE, 4);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 18px monospace';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText('?', bx+TILE/2, by+TILE/2);
      }
    } else {
      // Brick block
      ctx.fillStyle = C.brick;
      ctx.fillRect(bx, by, TILE, TILE);
      ctx.fillStyle = C.brickMt;
      const lines = [0.3, 0.7];
      lines.forEach(f => {
        ctx.fillRect(bx, by+TILE*f, TILE, 3);
      });
      [0, 0.5].forEach((f,i) => {
        ctx.fillRect(bx+(i===0?TILE*0.5:0), by, 3, TILE*0.3);
        ctx.fillRect(bx+(i===0?0:TILE*0.5), by+TILE*0.5, 3, TILE*0.5);
      });
      // Shading
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.fillRect(bx+TILE-4, by+4, 4, TILE-4);
      ctx.fillRect(bx+4, by+TILE-4, TILE-4, 4);
    }
  });
}

function drawPipes() {
  worldPipes.forEach(p => {
    const px=p.x, py=p.y, pw=p.w, ph=p.h;
    // Pipe body
    ctx.fillStyle = C.pipeDk;
    ctx.fillRect(px, py, pw, ph);
    ctx.fillStyle = C.pipe;
    ctx.fillRect(px+4, py, pw-8, ph);
    // Pipe highlight
    ctx.fillStyle = C.pipeLt;
    ctx.fillRect(px+8, py, 8, ph);
    // Pipe cap
    ctx.fillStyle = C.pipeDk;
    ctx.fillRect(px-4, py-8, pw+8, 20);
    ctx.fillStyle = C.pipe;
    ctx.fillRect(px, py-8, pw, 20);
    ctx.fillStyle = C.pipeLt;
    ctx.fillRect(px+6, py-8, 8, 20);
    // Dark outline
    ctx.strokeStyle = '#003800';
    ctx.lineWidth = 2;
    ctx.strokeRect(px, py, pw, ph);
    ctx.strokeRect(px-4, py-8, pw+8, 20);
  });
}

function drawCoins() {
  const t = Date.now()/400;
  worldCoins.forEach(coin => {
    if (collectedCoins.has(coin.id)) return;
    const cx = coin.x, cy = coin.y + Math.sin(t + coin.x*0.01)*4;
    const r = TILE*0.3;
    // Coin glow
    const glow = ctx.createRadialGradient(cx,cy,0,cx,cy,r*1.8);
    glow.addColorStop(0,'rgba(255,220,0,0.3)');
    glow.addColorStop(1,'rgba(255,180,0,0)');
    ctx.fillStyle = glow;
    ctx.beginPath(); ctx.arc(cx, cy, r*1.8, 0, Math.PI*2); ctx.fill();
    // Coin body
    ctx.fillStyle = C.coin;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = C.coinShd;
    ctx.beginPath(); ctx.arc(cx, cy, r*0.65, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#f8f000';
    ctx.font = `bold ${r*1.2}px monospace`;
    ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText('$', cx, cy);
  });
}

function drawFlags() {
  worldFlags.forEach(f => {
    const fx=f.x, fy=f.y;
    const poleH = TILE*6;
    // Pole
    ctx.fillStyle = C.flagPole;
    ctx.fillRect(fx+TILE, fy, 5, poleH+TILE*2);
    // Ball on top
    ctx.fillStyle = '#f8d820';
    ctx.beginPath(); ctx.arc(fx+TILE+2.5, fy, 8, 0, Math.PI*2); ctx.fill();
    // Flag
    const t = Date.now()/300;
    ctx.fillStyle = C.flag;
    ctx.beginPath();
    ctx.moveTo(fx+TILE+5, fy+8);
    ctx.lineTo(fx+TILE+50, fy+20+Math.sin(t)*4);
    ctx.lineTo(fx+TILE+5, fy+36);
    ctx.closePath();
    ctx.fill();

    // Sign board
    const boardW = 260;
    const poleCenter = fx + TILE + 2.5;
    const boardX = poleCenter - boardW/2;
    ctx.fillStyle = 'rgba(0,10,30,0.85)';
    ctx.fillRect(boardX, fy+TILE*2-10, boardW, TILE*1.6);
    ctx.strokeStyle = C.hud;
    ctx.lineWidth = 2;
    ctx.strokeRect(boardX, fy+TILE*2-10, boardW, TILE*1.6);
    ctx.fillStyle = C.hud;
    ctx.font = `bold ${TILE*0.35}px "Press Start 2P", monospace`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(f.label, poleCenter, fy+TILE*2.7);

    // Hint
    ctx.fillStyle = '#88ccff';
    ctx.font = `${TILE*0.22}px "Press Start 2P", monospace`;
    ctx.fillText('→ walk in!', poleCenter, fy+TILE*3.35);
  });
}

// ─── MARIO DRAWING ────────────────────────────────────────
function drawMario() {
  const mx = mario.x + mario.w/2, my = mario.y;
  const facing = mario.facing;

  ctx.save();
  ctx.translate(mx, my);
  if (facing < 0) { ctx.scale(-1,1); }

  // Shadow
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.beginPath();
  ctx.ellipse(0, mario.h+2, mario.w*0.6, 6, 0, 0, Math.PI*2);
  ctx.fill();

  const jumping = !mario.onGround;
  const walking = Math.abs(mario.vx) > 0.5 && mario.onGround;

  // Body
  ctx.fillStyle = C.marioBlu;
  ctx.fillRect(-10, 18, 20, 16);
  // Legs
  if (jumping) {
    ctx.fillRect(-12, 30, 10, 8);
    ctx.fillRect(2, 32, 10, 6);
  } else if (walking) {
    const lf = mario.frame;
    const legR = lf===0?0:lf===1?-6:6;
    const legL = lf===0?0:lf===1?6:-6;
    ctx.fillStyle = C.marioBlu;
    ctx.fillRect(-12, 30+legR, 10, 8);
    ctx.fillRect(2, 30+legL, 10, 8);
  } else {
    ctx.fillRect(-12, 30, 10, 10);
    ctx.fillRect(2, 30, 10, 10);
  }
  // Shoes
  ctx.fillStyle = '#2a1800';
  if (jumping) {
    ctx.fillRect(-14, 36, 13, 6);
    ctx.fillRect(2, 37, 13, 6);
  } else {
    ctx.fillRect(-14, 38, 13, 6);
    ctx.fillRect(2, 38, 13, 6);
  }

  // Torso / shirt
  ctx.fillStyle = C.mario;
  ctx.fillRect(-9, 12, 18, 14);
  // Overalls buttons
  ctx.fillStyle = C.coin;
  ctx.beginPath(); ctx.arc(-4, 16, 2.5, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(4, 16, 2.5, 0, Math.PI*2); ctx.fill();

  // Arms
  ctx.fillStyle = C.mario;
  if (jumping) {
    ctx.fillRect(-18, 12, 9, 7);
    ctx.fillRect(9, 12, 9, 7);
  } else {
    ctx.fillRect(-18, 14, 9, 7);
    ctx.fillRect(9, 14, 9, 7);
  }
  // Hands
  ctx.fillStyle = C.marioSkin;
  ctx.fillRect(-20, 19, 7, 5);
  ctx.fillRect(13, 19, 7, 5);

  // Head / skin
  ctx.fillStyle = C.marioSkin;
  ctx.fillRect(-9, 0, 18, 14);
  // Eyes
  ctx.fillStyle = '#1a0800';
  ctx.fillRect(3, 4, 5, 5);
  ctx.fillStyle = '#fff';
  ctx.fillRect(5, 4, 2, 3);
  // Nose
  ctx.fillStyle = C.marioSkin;
  ctx.fillRect(5, 8, 8, 4);
  // Mustache
  ctx.fillStyle = '#4a2800';
  ctx.fillRect(1, 10, 13, 3);

  // Cap
  ctx.fillStyle = C.marioCap;
  ctx.fillRect(-10, -2, 20, 6);
  ctx.fillRect(-12, -8, 24, 7);
  ctx.fillStyle = C.mario;
  ctx.fillRect(-2, -12, 12, 5);
  // Cap brim shadow
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.fillRect(-12, 3, 24, 2);

  ctx.restore();
}

// ─── UI HELPERS ───────────────────────────────────────────
function updateHUD() {
  document.getElementById('hud-coins').textContent = coins;
}

function spawnCoinPop(x, y) {
  const el = document.createElement('div');
  el.className = 'coin-pop';
  el.textContent = '+1 ★';
  el.style.left = (x - cam.x - 20) + 'px';
  el.style.top  = y + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 800);
}

// ─── PANEL ────────────────────────────────────────────────
function openPanel(si) {
  panelOpen = true;
  const panel = document.getElementById('info-panel');
  const content = document.getElementById('info-content');
  const sec = SECTIONS[si];
  const data = PORTFOLIO[sec.id];

  panel.classList.remove('hidden');
  panel.style.borderColor = sec.accent;

  let html = `<div class="panel-zone">`;
  html += `<span class="stage-badge">${data.badge || sec.label}</span>`;
  html += `<h2>${data.title}</h2>`;

  if (sec.id === 'about') {
    html += data.lines.map(l=>`<p>${l}</p>`).join('');
    html += `<div class="tag-row">${data.traits.map(t=>`<span class="tag">${t}</span>`).join('')}</div>`;
    html += `<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px;">`;
    data.social.forEach(s => {
      html += `<a class="gh-link" href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`;
    });
    html += `</div>`;
    html += `<div style="margin-top:20px;padding-top:18px;border-top:1px solid rgba(248,184,0,0.25);">
      <a href="Kushagra_Jaiswal_Resume-4.pdf" download="Kushagra_Jaiswal_Resume.pdf"
         style="display:inline-flex;align-items:center;gap:10px;
                background:linear-gradient(135deg,#f8d820,#f8a000);
                color:#000;font-family:'Press Start 2P',monospace;font-size:10px;
                padding:14px 22px;border-radius:4px;text-decoration:none;
                border-bottom:4px solid #a06000;border-right:4px solid #a06000;
                box-shadow:0 4px 16px rgba(248,184,0,0.35);
                transition:transform 0.1s,box-shadow 0.1s;"
         onmousedown="this.style.transform='translate(2px,2px)';this.style.borderWidth='2px';"
         onmouseup="this.style.transform='';this.style.borderWidth='4px';"
         onmouseleave="this.style.transform='';this.style.borderWidth='4px';">
        ⬇ DOWNLOAD RESUME
      </a>
    </div>`;
  }
  else if (sec.id === 'education') {
    data.schools.forEach(s => {
      html += `<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(136,204,255,0.3);border-radius:6px;padding:16px;margin-bottom:12px;">
        <div style="display:inline-block;font-size:10px;font-family:'Press Start 2P',monospace;color:#88ccff;background:rgba(136,204,255,0.12);border:1px solid rgba(136,204,255,0.3);padding:3px 8px;border-radius:3px;margin-bottom:10px;">${s.label}</div>
        <div style="font-size:16px;font-weight:700;color:#fff;font-family:Inter,sans-serif;">${s.name}</div>
        ${s.location?`<div style="font-size:13px;color:#cbd5e1;font-weight:500;font-family:Inter,sans-serif;margin-top:4px;">${s.location}</div>`:''}
        <div style="font-size:14px;color:#ffffff;font-weight:500;font-family:Inter,sans-serif;margin-top:6px;">${s.degree}</div>
        <div style="display:flex;justify-content:space-between;margin-top:8px;">
          <span style="font-size:13px;color:#cbd5e1;font-weight:500;font-family:Inter,sans-serif;">${s.period}</span>
          <span style="font-size:14px;font-weight:700;color:#f8d820;font-family:Inter,sans-serif;">${s.score}</span>
        </div>
      </div>`;
    });
  }
  else if (sec.id === 'skills') {
    data.categories.forEach(cat => {
      html += `<div class="skill-section"><h3>${cat.name}</h3>`;
      html += `<div class="tag-row">${cat.items.map(i=>`<span class="tag">${i}</span>`).join('')}</div></div>`;
    });
  }
  else if (sec.id === 'projects') {
    data.list.forEach(proj => {
      html += `<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(248,160,0,0.35);border-radius:6px;padding:18px;margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;">
          <div>
            <div style="font-size:17px;font-weight:700;color:#f8a000;font-family:Inter,sans-serif;">${proj.name}</div>
            <div style="font-size:13px;color:#cbd5e1;font-weight:500;font-family:Inter,sans-serif;margin-top:4px;">${proj.subtitle} · ${proj.date}</div>
          </div>
          <div style="display:flex;gap:10px;">
            <a class="gh-link" href="${proj.url}" target="_blank" rel="noopener">GitHub →</a>
            ${proj.demoUrl ? `<a class="gh-link" style="background:#006400;border-bottom-color:#003300;border-right-color:#003300;" href="${proj.demoUrl}" target="_blank" rel="noopener">Live Demo →</a>` : ''}
          </div>
        </div>
        <div class="metric-grid" style="margin:12px 0;">
          ${proj.metrics.map(m=>`<div class="metric-card"><div class="metric-val">${m.val}</div><div class="metric-label">${m.label}</div></div>`).join('')}
        </div>
        <div class="tag-row">${proj.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <ul style="margin-top:12px;">${proj.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
      </div>`;
    });
  }
  else if (sec.id === 'experience') {
    data.list.forEach(exp => {
      html += `<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(136,204,255,0.3);border-radius:6px;padding:18px;margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:8px;">
          <div>
            <div style="font-size:17px;font-weight:700;color:#88ccff;font-family:Inter,sans-serif;">${exp.role}</div>
            <div style="font-size:15px;color:#fff;font-weight:600;font-family:Inter,sans-serif;margin-top:4px;">${exp.org}</div>
            <div style="font-size:13px;color:#cbd5e1;font-weight:500;font-family:Inter,sans-serif;margin-top:2px;">Domain: ${exp.domain}</div>
          </div>
          <div style="font-size:13px;color:#f8d820;font-family:Inter,sans-serif;font-weight:700;">${exp.period}</div>
        </div>
        <div style="margin-top:12px;font-size:11px;font-family:'Press Start 2P',monospace;color:#f8d820;margin-bottom:8px;">OUTCOMES</div>
        <ul style="margin-top:8px;">${exp.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
      </div>`;
    });
  }
  else if (sec.id === 'certs') {
    html += `<div class="cert-grid">`;
    data.certs.forEach(c => {
      html += `<div class="cert-card">
        <div class="cert-org-badge">${c.org}</div>
        <div class="cert-name">${c.name}</div>
      </div>`;
    });
    html += `</div>`;
    html += `<h2 style="margin-top:24px;">EXTRACURRICULAR</h2>`;
    data.extra.forEach(e => {
      html += `<div class="ec-item">
        <div class="ec-role">${e.role}</div>
        <div class="ec-org">${e.org} · ${e.period}</div>
        <div class="ec-desc">${e.desc}</div>
      </div>`;
    });
    
    // Add "Let's Connect" section at the end of the last panel
    html += `<h2 style="margin-top:32px; border-bottom: 2px solid #cc88ff; color: #cc88ff;">LET'S CONNECT</h2>`;
    html += `<p style="font-size:15px; color:#ffffff; line-height:1.6; margin-bottom: 20px;">
      I'm always open to discussing new opportunities, creative projects, or ways to be part of your vision. 
      Feel free to reach out to me!
    </p>`;
    
    html += `<div style="display:flex; flex-direction:column; gap:12px; margin-bottom: 30px;">
      <a href="mailto:kushagra.jaiswal0712@gmail.com" style="color:#88ccff; text-decoration:none; font-family:Inter,sans-serif; font-size:15px; font-weight:600; display:flex; align-items:center; gap:8px;">
        ✉️ kushagra.jaiswal0712@gmail.com
      </a>
      <a href="https://linkedin.com/in/kushagra-jaiswal-kj" target="_blank" rel="noopener" style="color:#88ccff; text-decoration:none; font-family:Inter,sans-serif; font-size:15px; font-weight:600; display:flex; align-items:center; gap:8px;">
        💼 linkedin.com/in/kushagra-jaiswal-kj
      </a>
      <span style="color:#cbd5e1; font-family:Inter,sans-serif; font-size:15px; font-weight:500; display:flex; align-items:center; gap:8px;">
        📱 +91 7498779942
      </span>
    </div>`;

    html += `<div style="margin-top:20px; padding-top:24px; padding-bottom: 24px; border-top:1px solid rgba(204,136,255,0.25);">
      <a href="Kushagra_Jaiswal_Resume-4.pdf" download="Kushagra_Jaiswal_Resume.pdf"
         style="display:inline-flex; align-items:center; gap:10px;
                background:linear-gradient(135deg,#cc88ff,#9933ff);
                color:#fff; font-family:'Press Start 2P',monospace; font-size:10px;
                padding:14px 22px; border-radius:4px; text-decoration:none;
                border-bottom:4px solid #4a0080; border-right:4px solid #4a0080;
                box-shadow:0 4px 16px rgba(204,136,255,0.35);
                transition:transform 0.1s, box-shadow 0.1s;"
         onmousedown="this.style.transform='translate(2px,2px)';this.style.borderWidth='2px';"
         onmouseup="this.style.transform='';this.style.borderWidth='4px';"
         onmouseleave="this.style.transform='';this.style.borderWidth='4px';">
        ⬇ DOWNLOAD RESUME
      </a>
    </div>`;
  }

  html += `</div>`;
  content.innerHTML = html;
  document.getElementById('info-panel').scrollTop = 0;
}

function closePanel() {
  panelOpen = false;
  document.getElementById('info-panel').classList.add('hidden');
  jumpLatch = true; // prevent immediate jump on close
}

// Close panel on Escape
document.addEventListener('keydown', e => {
  if (e.code === 'Escape' && panelOpen) closePanel();
});

// ─── SIMPLE SOUNDS ────────────────────────────────────────
let audioCtx = null;
function playSound(type) {
  if (!audioCtx) return;
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  const t = audioCtx.currentTime;
  
  if (type === 'jump') {
    osc.type = 'square';
    osc.frequency.setValueAtTime(350, t);
    osc.frequency.linearRampToValueAtTime(600, t + 0.1);
    gain.gain.setValueAtTime(0.2, t);
    gain.gain.linearRampToValueAtTime(0.0, t + 0.1);
    osc.start(t);
    osc.stop(t + 0.1);
  } else if (type === 'coin') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(988, t);
    osc.frequency.setValueAtTime(1319, t + 0.05);
    gain.gain.setValueAtTime(0.2, t);
    gain.gain.linearRampToValueAtTime(0.0, t + 0.15);
    osc.start(t);
    osc.stop(t + 0.15);
  }
}
