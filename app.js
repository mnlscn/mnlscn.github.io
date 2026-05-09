/* =================================================================
   PORTFOLIO APP
   1. Content data        — single source of truth for all sections
   2. Render functions    — pure functions that turn data into DOM
   3. Interactivity       — navigation, terminal commands, keyboard
   4. Initialization      — wire everything together on DOMContentLoaded

   To add/edit projects, skills, contacts: edit section 1 only.
   ================================================================= */


/* ===== 1. CONTENT DATA =========================================== */

const content = {
    nav: [
        { id: 'about',    prefix: './',  command: 'about' },
        { id: 'projects', prefix: 'ls',  command: 'projects/' },
        { id: 'skills',   prefix: 'cat', command: 'skills.json' },
        { id: 'contact',  prefix: './',  command: 'contact' },
    ],

    about: {
        commandLine: { command: './about', flag: '--verbose' },
        fields: [
            { key: 'name',       value: '"Manuel Scionti"' },
            { key: 'role',       value: '"AI Engineer"' },
            { key: 'company',    value: '"ADP"' },
            { key: 'location',   value: '"Barcelona, Spain"' },
            { key: 'origin',     value: '"Italy 🇮🇹"' },
            { key: 'experience', value: '~3 years', highlight: true },
        ],
        education: [
            { key: 'education',  value: '"MSc Data Science"' },
            { key: 'university', value: '"University of Catania"' },
        ],
        educationNote: '# One of the first Data Science programs in Italy',
        focus: [
            '"Large Language Models"',
            '"Generative AI"',
            '"RAG Architectures"',
            '"Autonomous Agents"',
        ],
        bio: 'I build intelligent systems that bridge the gap between cutting-edge AI research and real-world applications. Currently designing GenAI solutions at enterprise scale. Open source contributor to IBM Agentics.',
    },

    projects: [
        {
            url: 'https://github.com/IBM/Agentics',
            permissions: 'drwxr-xr-x',
            name: 'IBM/Agentics',
            badge: { label: 'contributor' },
            desc: 'Python framework for structured, scalable, and semantically grounded agentic computation. Building the future of autonomous AI.',
            tech: ['Python', 'AI Agents', 'Multi-Agent', 'Open Source'],
        },
        {
            url: 'https://github.com/mnlscn/pydantic-citation-validator',
            permissions: '-rwxr-xr-x',
            name: 'pydantic-citation-validator',
            desc: 'Validation system to add citations to LLM outputs and prevent hallucinations by ensuring every statement is source-backed.',
            tech: ['Python', 'Pydantic', 'LLM Validation'],
        },
        {
            url: 'https://github.com/mnlscn/receipt-extractor',
            permissions: '-rwxr-xr-x',
            name: 'receipt-extractor',
            desc: 'Document processing system for extracting structured data from receipts using computer vision and NLP.',
            tech: ['Python', 'OCR', 'Document AI'],
        },
        {
            url: 'https://github.com/mnlscn/unict-master-thesis',
            permissions: '-rw-r--r--',
            name: 'master-thesis',
            badge: { label: 'research', type: 'research' },
            desc: 'Research on unsupervised learning and clustering with ETL pipelines on AWS for large-scale data processing.',
            tech: ['AWS', 'Clustering', 'ETL'],
        },
    ],

    skills: [
        {
            icon: '🧠',
            name: 'LLM Development',
            desc: 'Fine-tuning, RAG, prompt engineering, deployment at scale',
            tags: ['GPT', 'Claude', 'Llama', 'Mistral'],
        },
        {
            icon: '🤖',
            name: 'AI Agents',
            desc: 'Multi-agent systems, tool integration, autonomous decision-making',
            tags: ['LangChain', 'Agentics', 'Tool Use'],
        },
        {
            icon: '⚡',
            name: 'ML Engineering',
            desc: 'End-to-end pipelines, MLOps, production deployment',
            tags: ['PyTorch', 'HuggingFace', 'MLflow'],
        },
        {
            icon: '☁️',
            name: 'Cloud & Infra',
            desc: 'Scalable AI infrastructure, containerization',
            tags: ['AWS', 'Docker', 'K8s'],
        },
        {
            icon: '🐍',
            name: 'Python',
            desc: 'Expert-level development, modern tooling',
            tags: ['Pydantic', 'FastAPI', 'Poetry'],
        },
        {
            icon: '📊',
            name: 'Data Engineering',
            desc: 'ETL pipelines, data processing, analytics',
            tags: ['Pandas', 'SQL', 'Spark'],
        },
    ],

    contacts: [
        {
            url: 'https://www.linkedin.com/in/manuelscionti/',
            icon: '💼',
            label: 'LinkedIn',
            value: '/in/manuelscionti',
        },
        {
            url: 'https://github.com/mnlscn',
            icon: '🐙',
            label: 'GitHub',
            value: '@mnlscn',
        },
        {
            url: 'mailto:scionti.manuel@hotmail.it',
            icon: '📧',
            label: 'Email',
            value: 'scionti.manuel@hotmail.it',
        },
        {
            // no url => rendered as a static (non-clickable) row
            icon: '📍',
            label: 'Location',
            value: 'Barcelona, Spain · Open to remote',
        },
    ],
};


/* ===== 2. RENDER FUNCTIONS ======================================= */

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function renderNav() {
    const html = content.nav.map(item => `
        <button class="nav-cmd" data-section="${escapeHtml(item.id)}">
            <span class="cmd-prefix">${escapeHtml(item.prefix)}</span>${escapeHtml(item.command)}
        </button>
    `).join('');
    document.getElementById('nav-bar').innerHTML = html;
    // Mark first nav as active to match initially-active section
    const firstId = content.nav[0]?.id;
    if (firstId) document.querySelector(`[data-section="${firstId}"]`)?.classList.add('active');
}

function renderAbout() {
    const a = content.about;

    const fieldLine = (f, extraClass = '') => `
        <div class="output-line ${extraClass}">
            <span class="key">${escapeHtml(f.key)}:</span>
            <span class="${f.highlight ? 'highlight' : 'string'}">${escapeHtml(f.value)}</span>
        </div>
    `;

    const educationLines = a.education
        .map((f, i) => fieldLine(f, i === 0 ? 'about-block' : ''))
        .join('');

    const focusItems = a.focus
        .map((item, i) => {
            const trailing = i < a.focus.length - 1 ? ',' : '';
            return `<div class="output-line about-list-item"><span class="string">${escapeHtml(item)}</span>${trailing}</div>`;
        })
        .join('');

    document.getElementById('about').innerHTML = `
        <div class="line">
            <span class="prompt">$</span>
            <span class="command"> ${escapeHtml(a.commandLine.command)}</span>
            <span class="flag"> ${escapeHtml(a.commandLine.flag)}</span>
        </div>
        <div class="output">
            ${a.fields.map(f => fieldLine(f)).join('')}
            ${educationLines}
            <div class="output-line about-block">
                <span class="comment">${escapeHtml(a.educationNote)}</span>
            </div>
            <div class="output-line about-section-gap"><span class="key">focus:</span> [</div>
            ${focusItems}
            <div class="output-line">]</div>
            <div class="output-line about-section-gap"><span class="key">bio:</span></div>
            <div class="output-line bio-text">${escapeHtml(a.bio)}</div>
        </div>
    `;
}

function renderProjects() {
    const projectItem = (p) => {
        const badgeHtml = p.badge
            ? `<span class="badge${p.badge.type === 'research' ? ' research' : ''}">${escapeHtml(p.badge.label)}</span>`
            : '';
        const techHtml = p.tech.map(t => `<span class="tech">${escapeHtml(t)}</span>`).join('');
        return `
            <a href="${escapeHtml(p.url)}" target="_blank" rel="noopener" class="project-item">
                <div class="project-name">
                    ${escapeHtml(p.permissions)}  ${escapeHtml(p.name)}
                    ${badgeHtml}
                </div>
                <div class="project-desc">${escapeHtml(p.desc)}</div>
                <div class="project-tech">${techHtml}</div>
            </a>
        `;
    };

    document.getElementById('projects').innerHTML = `
        <div class="line">
            <span class="prompt">$</span>
            <span class="command"> ls</span>
            <span class="flag"> -la</span>
            <span class="arg"> projects/</span>
        </div>
        <div class="output">
            <div class="output-line projects-intro">
                <span class="comment"># Click any project to view on GitHub</span>
            </div>
            ${content.projects.map(projectItem).join('')}
        </div>
    `;
}

function renderSkills() {
    const skillItem = (s) => `
        <div class="skill-item">
            <div class="skill-name">${escapeHtml(s.icon)} ${escapeHtml(s.name)}</div>
            <div class="skill-desc">${escapeHtml(s.desc)}</div>
            <div class="skill-tags">
                ${s.tags.map(t => `<span class="skill-tag">${escapeHtml(t)}</span>`).join('')}
            </div>
        </div>
    `;

    document.getElementById('skills').innerHTML = `
        <div class="line">
            <span class="prompt">$</span>
            <span class="command"> cat</span>
            <span class="arg"> skills.json</span>
            <span class="flag"> | jq</span>
        </div>
        <div class="output">
            <div class="skills-output">
                ${content.skills.map(skillItem).join('')}
            </div>
        </div>
    `;
}

function renderContacts() {
    const contactItem = (c) => {
        const isStatic = !c.url;
        const inner = `
            <span class="contact-icon">${escapeHtml(c.icon)}</span>
            <div>
                <div class="contact-label">${escapeHtml(c.label)}</div>
                <div class="contact-value">${escapeHtml(c.value)}</div>
            </div>
        `;
        return isStatic
            ? `<div class="contact-item contact-item--static">${inner}</div>`
            : `<a href="${escapeHtml(c.url)}" target="_blank" rel="noopener" class="contact-item">${inner}</a>`;
    };

    document.getElementById('contact').innerHTML = `
        <div class="line">
            <span class="prompt">$</span>
            <span class="command"> ./contact</span>
            <span class="flag"> --list</span>
        </div>
        <div class="output">
            <div class="output-line contacts-intro">
                <span class="comment"># Let's connect! Click any link below</span>
            </div>
            ${content.contacts.map(contactItem).join('')}
        </div>
    `;
}


/* ===== 3. INTERACTIVITY ========================================== */

function showSection(sectionId) {
    document.querySelectorAll('.nav-cmd').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-section="${sectionId}"]`)?.classList.add('active');

    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId)?.classList.add('active');
}

const COMMANDS = {
    'about':           () => showSection('about'),
    './about':         () => showSection('about'),
    'projects':        () => showSection('projects'),
    'ls projects':     () => showSection('projects'),
    'ls':              () => showSection('projects'),
    'skills':          () => showSection('skills'),
    'cat skills':      () => showSection('skills'),
    'cat skills.json': () => showSection('skills'),
    'contact':         () => showSection('contact'),
    './contact':       () => showSection('contact'),
    'github':          () => window.open('https://github.com/mnlscn', '_blank'),
    'gh':              () => window.open('https://github.com/mnlscn', '_blank'),
    'linkedin':        () => window.open('https://www.linkedin.com/in/manuelscionti/', '_blank'),
    'li':              () => window.open('https://www.linkedin.com/in/manuelscionti/', '_blank'),
    'email':           () => window.open('mailto:scionti.manuel@hotmail.it', '_blank'),
    'clear':           () => location.reload(),
    'help':            () => showHelp(),
    'whoami':          () => alert('visitor@portfolio'),
    'pwd':             () => alert('/home/manuel/portfolio'),
    'date':            () => alert(new Date().toString()),
    'echo hello':      () => alert('hello'),
    'sudo':            () => alert('Nice try! 😄'),
    'rm -rf':          () => alert('Nope! 🚫'),
};

function processCommand(rawCmd) {
    const cmd = rawCmd.toLowerCase().trim();
    if (!cmd) return;

    if (COMMANDS[cmd]) {
        COMMANDS[cmd]();
        return;
    }

    // Fallback: partial match
    for (const [key, action] of Object.entries(COMMANDS)) {
        if (cmd.includes(key) || key.includes(cmd)) {
            action();
            return;
        }
    }

    alert(`Command not found: ${rawCmd}\nType 'help' for available commands`);
}

function showHelp() {
    alert(`Available commands:

Navigation:
  about      - Show about section
  projects   - List projects
  skills     - Show skills
  contact    - Contact info

Links:
  github     - Open GitHub profile
  linkedin   - Open LinkedIn profile
  email      - Send email

Other:
  help       - Show this help
  clear      - Refresh page

Or just click the buttons above! 😉`);
}


/* ===== 4. INITIALIZATION ========================================= */

function setupEventListeners() {
    // Nav clicks (event delegation)
    document.getElementById('nav-bar').addEventListener('click', (e) => {
        const btn = e.target.closest('.nav-cmd');
        if (btn) showSection(btn.dataset.section);
    });

    // Terminal input
    const input = document.getElementById('terminalInput');
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            processCommand(e.target.value);
            e.target.value = '';
        }
    });

    // Keyboard shortcuts: 1-4 jump to sections, '/' focuses input
    const shortcuts = { '1': 'about', '2': 'projects', '3': 'skills', '4': 'contact' };
    document.addEventListener('keydown', (e) => {
        if (document.activeElement.tagName === 'INPUT') return;

        if (shortcuts[e.key]) {
            showSection(shortcuts[e.key]);
        } else if (e.key === '/') {
            e.preventDefault();
            input.focus();
        }
    });

    // Click anywhere in the window body focuses the input (unless on a link/button)
    document.querySelector('.window-body').addEventListener('click', (e) => {
        const tag = e.target.tagName;
        if (tag !== 'A' && tag !== 'BUTTON' && tag !== 'INPUT') {
            input.focus();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    renderAbout();
    renderProjects();
    renderSkills();
    renderContacts();
    setupEventListeners();
});