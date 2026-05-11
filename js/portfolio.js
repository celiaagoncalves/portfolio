/* ============================================================
   Translations
   ============================================================ */
const T = {
  en: {
    'nav.about':      'About',
    'nav.skills':     'Skills',
    'nav.experience': 'Experience',
    'nav.education':  'Education',
    'nav.languages':  'Languages',
    'nav.contact':    'Contact',
    'nav.blog':       'Blog',

    'hero.eyebrow': 'Portfolio',
    'hero.tag1':    'Mission-Critical Systems',
    'hero.tag2':    'Defense',
    'hero.tag3':    'Software Quality',
    'hero.cta':     'Learn more',
    'hero.scroll':  'scroll',

    'about.heading':    'About',
    'about.subheading': 'Mission Assurance · Software Quality · Agile Delivery',
    'about.bio1': 'ISTQB® Certified professional with 7+ years of experience in mission-critical and regulated defense environments. Specialised in software quality, reliability, and compliance across the full product delivery lifecycle.',
    'about.bio2': 'At Critical Software, I serve as Technical Manager and Product Owner for Defence Sector projects — leading cross-functional testing teams, defining QA strategies, and ensuring product compliance with demanding sector standards.',
    'about.bio3': 'I work at the intersection of product ownership and quality assurance, translating stakeholder needs into reliable, compliant software for high-stakes environments.',
    'about.badge1': 'ISTQB® CTFL',
    'about.badge2': 'Defense &amp; Mission Assurance',
    'about.badge3': 'Agile Delivery',

    'skills.heading': 'Skills',
    'skills.group1':  'Product &amp; Delivery',
    'skills.group2':  'Quality &amp; Compliance',
    'skills.group3':  'Technical',
    's.po':    'Product Ownership / Agile',
    's.stk':   'Stakeholder Management',
    's.bklog': 'Backlog &amp; Roadmap',
    's.cd':    'Customer Discovery',
    's.tl':    'Test Leadership &amp; QA',
    's.ma':    'Mission Assurance',
    's.sst':   'Secure Software Testing',
    's.gov':   'Governance &amp; Strategy',
    's.html':  'HTML5 / CSS3',
    's.js':    'JavaScript / REST APIs',
    's.sql':   'SQL',
    's.git':   'Git / Linux',

    'exp.heading':  'Experience',
    'exp1.date':    'Jul 2023 – Present',
    'exp1.tag':     'Full-time',
    'exp1.title':   'Senior Engineer',
    'exp1.co':      'Critical Software',
    'exp1.desc':    'Technical Manager and Product Owner for Defence Sector Projects, overseeing product strategy and project execution. Led testing teams and defined quality assurance strategies to meet demanding defence sector standards. Provided hands-on testing expertise to ensure product compliance and reliability.',
    'exp1.t1': 'Product Ownership',
    'exp1.t2': 'Test Leadership',
    'exp1.t3': 'Defense',
    'exp1.t4': 'Agile / Scrum',

    'exp2.date':  'Jan 2019 – Jun 2023',
    'exp2.tag':   'Full-time',
    'exp2.title': 'Engineer I → Professional Engineer II',
    'exp2.co':    'Critical Software',
    'exp2.desc':  'Progressed from Intern to Professional Engineer II, consistently taking on greater responsibilities in Product Ownership, Testing, and Quality Assurance across Defence and Government Projects. Key contributions included leading test efforts and ensuring compliance with demanding process standards.',
    'exp2.t1': 'QA &amp; Testing',
    'exp2.t2': 'Government Projects',
    'exp2.t3': 'Process Compliance',

    'exp3.date':  'Nov 2025 – Present',
    'exp3.tag':   'Volunteer',
    'exp3.title': 'Parish Assembly Member',
    'exp3.co':    'Junta de Freguesia de Anobra',
    'exp3.desc':  'Elected member of the Anobra Parish Assembly, contributing to local governance and community decisions.',
    'exp3.t1': 'Local Governance',
    'exp3.t2': 'Community',

    'exp4.date':  'Apr 2011 – Present',
    'exp4.tag':   'Volunteer',
    'exp4.title': 'Football Referee',
    'exp4.co':    'Associação de Futebol de Coimbra',
    'exp4.desc':  'Officiating matches across various divisions. Maintained composure and impartiality under pressure, reinforcing leadership, decision-making, and effective communication skills.',
    'exp4.t1': 'Leadership',
    'exp4.t2': 'Decision-making',
    'exp4.t3': 'Teamwork',

    'exp5.date':  'Sep 2014 – Jan 2015',
    'exp5.tag':   'Internship',
    'exp5.title': 'Web Development Intern',
    'exp5.co':    'Streamline',
    'exp5.desc':  'Contributed to web systems development with HTML, CSS, JavaScript, and PHP. Gained hands-on experience in Linux environment management, server configuration, and security practices.',
    'exp5.t1': 'HTML / CSS / JS',
    'exp5.t2': 'PHP',
    'exp5.t3': 'Linux',

    'edu.heading': 'Education &amp; Certifications',
    'edu1.year':   'Certification',
    'edu1.title':  'ISTQB® CTFL',
    'edu1.org':    'International Software Testing Qualifications Board',
    'edu1.desc':   'Certified Tester Foundation Level — test fundamentals, design techniques, test management and supporting tools.',
    'edu2.year':   'Certification',
    'edu2.title':  'CSSLP Cert Prep: Secure Software Testing',
    'edu2.org':    'LinkedIn Learning',
    'edu2.desc':   'Preparation for the CSSLP certification covering secure software testing practices within the SDLC.',
    'edu3.year':   'Certification',
    'edu3.title':  'AI Accountability: Build Responsible Systems',
    'edu3.org':    'LinkedIn Learning',
    'edu3.desc':   'Frameworks and practices for building transparent, responsible, and accountable AI systems.',
    'edu4.year':   '2015 – 2021 · Paused',
    'edu4.title':  'Licentiate Degree in Computer Engineering',
    'edu4.org':    'Instituto Superior de Engenharia de Coimbra',
    'edu4.desc':   'Information Systems branch — software development, databases, and networks. Studies paused in 2021.',
    'edu5.year':   '2013 – 2014',
    'edu5.title':  'Technological Specialisation in Information Systems',
    'edu5.org':    'Instituto Superior de Engenharia de Coimbra',
    'edu5.desc':   'Completed with a final grade of 15/20, including a curricular internship at Streamline.',

    'langs.heading': 'Languages',
    'lang1.name':    'Portuguese',
    'lang1.level':   'Native / Bilingual',
    'lang2.name':    'English',
    'lang2.level':   'Professional Working',
    'lang3.name':    'French',
    'lang3.level':   'Limited Working',
    'lang4.name':    'Spanish',
    'lang4.level':   'Elementary',

    'contact.heading': 'Contact',
    'contact.intro':   'Open to discussions on defense systems, mission assurance, software quality, and agile delivery.',

    'footer.copy': 'Célia Gonçalves · 2025',

    'blog.heading': 'Blog',
    'blog.loading': 'Loading posts…',
    'blog.read':    'Read more →',
    'blog.empty':   'No posts yet. Check back soon.',
  },

  pt: {
    'nav.about':      'Sobre mim',
    'nav.skills':     'Skills',
    'nav.experience': 'Experiência',
    'nav.education':  'Educação',
    'nav.languages':  'Idiomas',
    'nav.contact':    'Contacto',
    'nav.blog':       'Blog',

    'hero.eyebrow': 'Portfolio',
    'hero.tag1':    'Sistemas Críticos',
    'hero.tag2':    'Defesa',
    'hero.tag3':    'Qualidade de Software',
    'hero.cta':     'Ver mais',
    'hero.scroll':  'scroll',

    'about.heading':    'Sobre mim',
    'about.subheading': 'Mission Assurance · Qualidade de Software · Entrega Ágil',
    'about.bio1': 'Profissional certificada pelo ISTQB® com mais de 7 anos de experiência em ambientes críticos e regulados no sector da Defesa. Especializada em qualidade, fiabilidade e conformidade do software ao longo de todo o ciclo de entrega do produto.',
    'about.bio2': 'Na Critical Software, actuo como Gestora Técnica e Product Owner em projectos do sector da Defesa — liderando equipas de testes multifuncionais, definindo estratégias de QA e garantindo a conformidade do produto com padrões exigentes do sector.',
    'about.bio3': 'A minha abordagem centra-se na intersecção entre gestão de produto e garantia de qualidade, com foco na concretização de requisitos em software fiável e conforme para ambientes de elevada exigência.',
    'about.badge1': 'ISTQB® CTFL',
    'about.badge2': 'Defesa &amp; Mission Assurance',
    'about.badge3': 'Entrega Ágil',

    'skills.heading': 'Skills',
    'skills.group1':  'Produto &amp; Delivery',
    'skills.group2':  'Qualidade &amp; Conformidade',
    'skills.group3':  'Técnico',
    's.po':    'Product Ownership / Agile',
    's.stk':   'Stakeholder Management',
    's.bklog': 'Backlog &amp; Roadmap',
    's.cd':    'Customer Discovery',
    's.tl':    'Test Leadership &amp; QA',
    's.ma':    'Mission Assurance',
    's.sst':   'Secure Software Testing',
    's.gov':   'Governança &amp; Estratégia',
    's.html':  'HTML5 / CSS3',
    's.js':    'JavaScript / REST APIs',
    's.sql':   'SQL',
    's.git':   'Git / Linux',

    'exp.heading':  'Experiência',
    'exp1.date':    'Jul 2023 – Presente',
    'exp1.tag':     'Full-time',
    'exp1.title':   'Senior Engineer',
    'exp1.co':      'Critical Software',
    'exp1.desc':    'Gestora Técnica e Product Owner em Projectos do Sector da Defesa, responsável pela estratégia de produto e execução de projectos. Liderança de equipas de testes e definição de estratégias de garantia de qualidade para responder a padrões exigentes do sector. Experiência prática em testes para garantir conformidade e fiabilidade do produto.',
    'exp1.t1': 'Product Ownership',
    'exp1.t2': 'Liderança de Testes',
    'exp1.t3': 'Defesa',
    'exp1.t4': 'Agile / Scrum',

    'exp2.date':  'Jan 2019 – Jun 2023',
    'exp2.tag':   'Full-time',
    'exp2.title': 'Engenheira I → Engenheira Profissional II',
    'exp2.co':    'Critical Software',
    'exp2.desc':  'Progressão de Estagiária a Engenheira Profissional II, com responsabilidades crescentes em Product Ownership, Testes e Garantia de Qualidade em Projectos de Defesa e Governo. Participação em projectos com padrões de processo rigorosos, incluindo contribuição em auditorias de processo.',
    'exp2.t1': 'QA &amp; Testes',
    'exp2.t2': 'Projectos Governamentais',
    'exp2.t3': 'Conformidade de Processos',

    'exp3.date':  'Nov 2025 – Presente',
    'exp3.tag':   'Voluntária',
    'exp3.title': 'Membro da Assembleia de Freguesia',
    'exp3.co':    'Junta de Freguesia de Anobra',
    'exp3.desc':  'Membro eleita da Assembleia de Freguesia de Anobra, com participação activa na governação local e nas decisões comunitárias.',
    'exp3.t1': 'Governação Local',
    'exp3.t2': 'Comunidade',

    'exp4.date':  'Abr 2011 – Presente',
    'exp4.tag':   'Voluntária',
    'exp4.title': 'Árbitra de Futebol',
    'exp4.co':    'Associação de Futebol de Coimbra',
    'exp4.desc':  'Arbitragem de jogos em várias divisões, com foco na imparcialidade, rigor na aplicação das regras e gestão eficaz de intervenientes em contexto de pressão. Experiência que reforçou competências de liderança, decisão e comunicação.',
    'exp4.t1': 'Liderança',
    'exp4.t2': 'Decisão sob pressão',
    'exp4.t3': 'Trabalho de equipa',

    'exp5.date':  'Set 2014 – Jan 2015',
    'exp5.tag':   'Estágio',
    'exp5.title': 'Estagiária — Desenvolvimento Web',
    'exp5.co':    'Streamline',
    'exp5.desc':  'Desenvolvimento de sistemas web com HTML, CSS, JavaScript e PHP. Experiência em gestão de ambiente Linux, configuração de servidores e práticas de segurança.',
    'exp5.t1': 'HTML / CSS / JS',
    'exp5.t2': 'PHP',
    'exp5.t3': 'Linux',

    'edu.heading': 'Educação &amp; Certificações',
    'edu1.year':   'Certificação',
    'edu1.title':  'ISTQB® CTFL',
    'edu1.org':    'International Software Testing Qualifications Board',
    'edu1.desc':   'Certified Tester Foundation Level — fundamentos de testes, técnicas de design, gestão de testes e ferramentas de suporte.',
    'edu2.year':   'Certificação',
    'edu2.title':  'CSSLP Cert Prep: Secure Software Testing',
    'edu2.org':    'LinkedIn Learning',
    'edu2.desc':   'Preparação para a certificação CSSLP, cobrindo práticas de testes de software seguro no ciclo de desenvolvimento.',
    'edu3.year':   'Certificação',
    'edu3.title':  'AI Accountability: Sistemas Responsáveis',
    'edu3.org':    'LinkedIn Learning',
    'edu3.desc':   'Frameworks e práticas para construção de sistemas de IA transparentes e responsáveis.',
    'edu4.year':   '2015 – 2021 · Pausado',
    'edu4.title':  'Licenciatura em Engenharia Informática',
    'edu4.org':    'Instituto Superior de Engenharia de Coimbra',
    'edu4.desc':   'Ramo de Sistemas de Informação — desenvolvimento de software, bases de dados e redes. Estudos pausados em 2021.',
    'edu5.year':   '2013 – 2014',
    'edu5.title':  'CET em Tecnologias e Programação de Sistemas de Informação',
    'edu5.org':    'Instituto Superior de Engenharia de Coimbra',
    'edu5.desc':   'Concluído com média de 15 valores, incluindo estágio curricular na Streamline.',

    'langs.heading': 'Idiomas',
    'lang1.name':    'Português',
    'lang1.level':   'Nativo / Bilingue',
    'lang2.name':    'Inglês',
    'lang2.level':   'Profissional',
    'lang3.name':    'Francês',
    'lang3.level':   'Básico',
    'lang4.name':    'Espanhol',
    'lang4.level':   'Elementar',

    'contact.heading': 'Contacto',
    'contact.intro':   'Disponível para discussões sobre sistemas de defesa, mission assurance, qualidade de software e entrega ágil.',

    'footer.copy': 'Célia Gonçalves · 2025',

    'blog.heading': 'Blog',
    'blog.loading': 'A carregar posts…',
    'blog.read':    'Ler mais →',
    'blog.empty':   'Ainda sem posts. Volta em breve.',
  }
};

/* ============================================================
   Language toggle
   ============================================================ */
let lang = localStorage.getItem('lang') || 'en';

function applyLang(l) {
  lang = l;
  document.documentElement.lang = l;
  localStorage.setItem('lang', l);

  // Update dropdown label and active state
  document.getElementById('langLabel').textContent = l.toUpperCase();
  document.querySelectorAll('.lang__option').forEach(opt => {
    const active = opt.dataset.lang === l;
    opt.classList.toggle('lang__option--active', active);
    opt.setAttribute('aria-selected', active);
  });

  // Apply translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[l][key] !== undefined) el.innerHTML = T[l][key];
  });

  // Re-render blog cards (dates localise, read-more text changes)
  if (window.__posts) renderBlogGrid(document.getElementById('blogGrid'));
}

// Dropdown open/close
const langDropdown = document.getElementById('langDropdown');
const langBtn      = document.getElementById('langBtn');
const langMenu     = document.getElementById('langMenu');

langBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  langDropdown.classList.toggle('open');
});

langMenu.querySelectorAll('.lang__option').forEach(opt => {
  opt.addEventListener('click', () => {
    applyLang(opt.dataset.lang);
    langDropdown.classList.remove('open');
  });
});

document.addEventListener('click', () => langDropdown.classList.remove('open'));

/* ============================================================
   Nav scroll behaviour
   ============================================================ */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ============================================================
   Mobile menu
   ============================================================ */
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

/* ============================================================
   Skill bars — animate on scroll
   ============================================================ */
const fills = document.querySelectorAll('.skills__fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
fills.forEach(f => skillObserver.observe(f));

/* ============================================================
   Blog — GitHub API + marked.js
   ============================================================ */
const REPO_API = 'https://api.github.com/repos/celiaagoncalves/celiaagoncalves.github.io/contents/posts';

function parsePost(text, filename) {
  const slug = filename.replace(/\.md$/, '');
  const fm = {};
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  let body = text;
  if (match) {
    match[1].split('\n').forEach(line => {
      if (/^\s*-\s/.test(line)) return;
      const i = line.indexOf(':');
      if (i === -1) return;
      fm[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^['"]|['"]$/g, '');
    });
    body = match[2];
  }
  return { slug, title: fm.title || slug, date: fm.date || '', summary: fm.summary || '', body };
}

function formatPostDate(dateStr) {
  if (!dateStr) return '';
  try {
    return new Date(dateStr + 'T12:00:00').toLocaleDateString(
      lang === 'pt' ? 'pt-PT' : 'en-GB',
      { day: 'numeric', month: 'long', year: 'numeric' }
    );
  } catch { return dateStr; }
}

function renderBlogGrid(grid) {
  if (!window.__posts || !window.__posts.length) return;
  grid.innerHTML = window.__posts.map(p => `
    <article class="blog__card" data-slug="${p.slug}" role="button" tabindex="0" aria-label="${p.title}">
      <time class="blog__date">${formatPostDate(p.date)}</time>
      <h3 class="blog__title">${p.title}</h3>
      <p class="blog__summary">${p.summary}</p>
      <span class="blog__read" aria-hidden="true">${T[lang]['blog.read']}</span>
    </article>`).join('');

  grid.querySelectorAll('.blog__card').forEach(card => {
    card.addEventListener('click', () => openPost(card.dataset.slug));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPost(card.dataset.slug); }
    });
  });
}

async function openPost(slug) {
  const post = (window.__posts || []).find(p => p.slug === slug);
  if (!post) return;
  document.getElementById('postTitle').textContent = post.title;
  document.getElementById('postDate').textContent = formatPostDate(post.date);
  if (!window.marked) await loadScript('https://cdn.jsdelivr.net/npm/marked/marked.min.js');
  document.getElementById('postBody').innerHTML = window.marked.parse(post.body);
  document.getElementById('blogOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src; s.onload = resolve; s.onerror = reject;
    document.head.appendChild(s);
  });
}

function closePost() {
  document.getElementById('blogOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('blogOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closePost();
});
document.getElementById('postClose').addEventListener('click', closePost);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePost(); });

async function loadBlogPosts() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  try {
    const res = await fetch(REPO_API, { headers: { Accept: 'application/vnd.github.v3+json' } });
    if (!res.ok) { grid.innerHTML = ''; return; }
    const files = await res.json();
    const mdFiles = files
      .filter(f => f.name.endsWith('.md'))
      .sort((a, b) => b.name.localeCompare(a.name))
      .slice(0, 3);
    if (!mdFiles.length) {
      grid.innerHTML = `<p class="blog__empty">${T[lang]['blog.empty']}</p>`;
      return;
    }
    window.__posts = await Promise.all(
      mdFiles.map(f => fetch(f.download_url).then(r => r.text()).then(t => parsePost(t, f.name)))
    );
    renderBlogGrid(grid);
  } catch {
    const g = document.getElementById('blogGrid');
    if (g) g.innerHTML = '';
  }
}

/* ============================================================
   Init
   ============================================================ */
applyLang(lang);
loadBlogPosts();