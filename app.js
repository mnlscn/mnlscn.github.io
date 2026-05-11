const portfolio = {
    nav: [
        { id: 'about', prefix: './', label: 'about' },
        { id: 'projects', prefix: 'ls', label: 'projects/' },
        { id: 'experience', prefix: 'tail', label: 'career.log' },
        { id: 'contact', prefix: './', label: 'contact' },
    ],

    highlights: [
        { number: '1000+', label: 'daily users · production LLM platform (ADP)' },
        { number: '20%', label: 'retrieval quality lift via reranking + prompting' },
        { number: '75%', label: 'fewer table errors vs OSS · beats Azure DI' },
        { number: '50%', label: 'faster integration time for new LLM pipelines' },
        { number: '36%', label: 'faster CI/CD (Jenkins 25 → 16 min)' },
        { number: 'Top 10%', label: 'IBM × Datapizza Hackathon · 600+ applicants' },
    ],

    facts: [
        {
            text: 'Open-source contributor to IBM/Agentics — 3 PRs: PydanticTransducerVLLM bug fix (merged), Getting Started docs fix, and atype.py import cleanup',
            links: [{ label: 'view PRs', url: 'https://github.com/IBM/Agentics/pulls?q=is%3Apr+author%3Amnlscn' }],
        },
        {
            text: 'Organized and tech-led 2 editions of Hackatania GenAI hackathons at the University of Catania',
            links: [
                { label: 'edition 1', url: 'https://neodata-hackatania.devpost.com/' },
                { label: 'edition 2', url: 'https://hackatania-2.devpost.com/' },
            ],
        },
        {
            text: 'Top 10% of 600+ applicants at IBM × Datapizza Hackathon in Milan — built a Graph RAG project',
            links: [{ label: 'watch the demo', url: 'https://www.youtube.com/watch?v=DAV-Cjjh-BA' }],
        },
        {
            text: 'Speaker at university workshops, and an internal ADP workshop on AI coding agents (20 attendees)',
        },
    ],

    projects: [
        {
            name: 'IBM/Agentics',
            kind: 'open source contribution',
            url: 'https://github.com/IBM/Agentics',
            featured: true,
            badge: 'contributor',
            desc: 'Python framework for structured, scalable, semantically grounded agentic computation. 3 contributor PRs: PydanticTransducerVLLM bug fix (merged into main, Jan 2026), Getting Started docs fix, and atype.py import cleanup.',
            tags: ['Python', 'Agents', 'OSS', 'Multi-agent'],
        },
        {
            name: 'ADP FAQ generation platform',
            kind: 'enterprise LLM platform',
            desc: 'Production AI platform for automated FAQ generation across business units. Took 4 of 15+ units from pilot to production, serving 1000+ daily users across US and EMEA. Built 10+ evals + golden dataset, lifted retrieval quality 20%.',
            tags: ['RAG', 'Databricks', 'AWS', 'Azure', 'Evals'],
        },
        {
            name: 'Enterprise document extraction',
            kind: 'document AI / RAG',
            desc: 'Internal framework for extracting structured info from tables, spreadsheets, and enterprise documents. Cut table extraction errors by 75% vs pdfplumber/PyMuPDF and outperformed Azure Document Intelligence on structured specification tables.',
            tags: ['Document AI', 'RAG', 'NLP', 'Tables'],
        },
        {
            name: 'Neovid',
            kind: 'multimodal retrieval',
            desc: 'Retrieval system over image, video, and document collections using NLP, computer vision, face recognition, TTS and STT. Processed 1000+ videos for Italy\'s largest broadcaster.',
            tags: ['Multimodal', 'NLP', 'CV', 'Video'],
        },
        {
            name: 'pydantic-citation-validator',
            kind: 'RAG validation',
            url: 'https://github.com/mnlscn/pydantic-citation-validator',
            desc: 'Validation layer that forces LLM outputs to ground generated claims in source spans before they reach downstream consumers.',
            tags: ['Pydantic', 'RAG', 'Hallucination mitigation'],
        },
        {
            name: 'master-thesis',
            kind: 'academic research / data systems',
            url: 'https://github.com/mnlscn/unict-master-thesis',
            desc: 'Research on unsupervised learning and clustering with AWS-based ETL pipelines for large-scale data processing.',
            tags: ['AWS', 'Clustering', 'ETL', 'Research'],
        },
        {
            name: 'receipt-extractor',
            kind: 'document AI',
            url: 'https://github.com/mnlscn/receipt-extractor',
            desc: 'Computer vision and NLP pipeline for extracting reliable structured data from receipt images.',
            tags: ['Python', 'OCR', 'Document AI'],
        },
    ],

    jobs: [
        {
            dates: 'Mar 2025 -> present',
            role: 'AI Engineer',
            company: 'ADP (via Capitole)',
            location: 'Barcelona',
            desc: 'Team of 5 designing and maintaining an internal AI platform for automated FAQ generation. Took 4 of 15+ business units from pilot to production, serving 1000+ daily users across US/EMEA. Core contributor to the LLM orchestration framework — cut new-pipeline integration time by 50%. Built a 10+ eval suite + golden dataset that lifted retrieval quality 20% via reranking and prompting. Refactored Jenkins CI/CD into modular parallel steps (25 → 16 min, 36% faster). Led an internal workshop on AI coding agents (20 attendees).',
        },
        {
            dates: 'Nov 2023 -> Mar 2025',
            role: 'AI Engineer',
            company: 'Neodata Group',
            location: 'Catania',
            desc: 'Feasibility studies for 20+ enterprise clients (€5M+ revenue). Led Neovid — multimodal retrieval (NLP, CV, face recognition, TTS, STT) processing 1000+ videos for Italy\'s largest broadcaster. Main developer on NeoKnowledge, deployed across 5+ museums. Built a doc-extraction framework that cut table errors 75% vs OSS and beat Azure Document Intelligence. Led a team of 2 juniors and shipped 4 production projects.',
        },
        {
            dates: 'Feb 2023 -> Nov 2023',
            role: 'ML Engineer',
            company: 'Koexai',
            location: 'Catania',
            desc: 'AWS pipelines (S3, Glue, Athena) for Catania\'s largest coworking space (€1M revenue). Customer segmentation across 500+ customers (K-Means, Hierarchical Clustering, DBSCAN). Automated recurring data entry, cut operational time 80% and freed 2 employees for higher-value work.',
        },
    ],

    education: [
        {
            dates: '2021 -> 2023',
            role: 'M.Sc. Data Science',
            company: 'University of Catania',
            desc: 'Graduated 110/110 summa cum laude · GPA 4.0. Includes Erasmus+ semester in AI at Goethe University Frankfurt.',
        },
        {
            dates: '2016 -> 2020',
            role: 'B.Sc. Business Management',
            company: 'University of Catania',
            desc: 'Graduated 100/110 · GPA 3.3. Business foundation before pivoting into data science and applied AI.',
        },
    ],

    certifications: [
        'Introduction to LangGraph — LangChain (2024)',
        'LangChain in Action: Develop LLM-Powered Applications (2024)',
        'Intermediate SQL (2023)',
        'Pre-Security Certificate — TryHackMe (2025)',
    ],

    stack: [
        'Python', 'SQL', 'FastAPI', 'Pydantic',
        'RAG', 'Graph RAG', 'OpenSearch', 'Vector search', 'LLM-as-judge', 'Multi-agent', 'LangGraph',
        'Hydra Compose', 'Databricks', 'AWS', 'Lambda', 'API Gateway', 'SageMaker', 'Bedrock', 'Azure',
        'Jenkins', 'Bitbucket', 'CI/CD', 'MLOps', 'Observability',
        'NLP', 'Computer Vision', 'TTS/STT',
    ],
};

const routes = {
    about: renderAbout,
    projects: renderProjects,
    experience: renderExperience,
    contact: renderContact,
};

const aliases = {
    'about': 'about',
    './about': 'about',
    'whoami': 'about',
    'proof': 'about',
    'cat proof': 'about',
    'cat proof.txt': 'about',
    'projects': 'projects',
    'project': 'projects',
    'ls': 'projects',
    'ls projects': 'projects',
    'ls projects/': 'projects',
    'articles': 'projects',
    'posts': 'projects',
    'writing': 'projects',
    'ls posts': 'projects',
    'ls articles': 'projects',
    'ls articles/': 'projects',
    'stack': 'experience',
    'skills': 'experience',
    'cat stack': 'experience',
    'cat stack.json': 'experience',
    'cat skills': 'experience',
    'cat skills.json': 'experience',
    'experience': 'experience',
    'career': 'experience',
    'tail career.log': 'experience',
    'cat career.log': 'experience',
    'contact': 'contact',
    './contact': 'contact',
};

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function tagsHtml(tags) {
    return tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
}

function commandLine(command, arg = '') {
    return `
        <div class="command-line">
            <span class="prompt">$</span>
            <span class="command">${escapeHtml(command)}</span>
            ${arg ? `<span class="arg">${escapeHtml(arg)}</span>` : ''}
        </div>
    `;
}

function renderShell(title, summary, body, command = './portfolio') {
    return `
        <div class="section-output">
            ${commandLine(command)}
            <div class="output-header">
                <h2 class="output-title">${escapeHtml(title)}</h2>
                <p class="output-summary">${escapeHtml(summary)}</p>
            </div>
            ${body}
        </div>
    `;
}

function renderAbout() {
    const fields = [
        ['name', '"Manuel Scionti"'],
        ['role', '"AI Engineer"'],
        ['company', '"ADP via Capitole"'],
        ['location', '"Barcelona, Spain"'],
        ['focus', '"RAG · agents · evals · infra"'],
        ['experience', '"3+ years"'],
        ['education', '"M.Sc. Data Science · 110/110 cum laude"'],
        ['languages', '"IT native · EN/ES pro"'],
    ];

    return renderShell(
        'about',
        'AI Engineer focused on the part of AI that starts after the prototype: retrieval, agent orchestration, evaluation, and reliable infrastructure. 3+ years across Fortune 500 enterprise (ADP) and AI startups.',
        `
            <div class="about-layout">
                <div class="terminal-card profile-card">
                    <h3><span class="key">profile.json</span></h3>
                    <div class="field-grid">
                        ${fields.map(([key, value]) => `
                            <div class="field">
                                <span class="comment">${escapeHtml(key)}</span>
                                <span class="string">${escapeHtml(value)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="terminal-card">
                    <h3><span class="key">highlights</span> <span class="comment">// numbers from production</span></h3>
                    <div class="metric-grid">
                        ${portfolio.highlights.map(h => `
                            <div class="metric-card">
                                <div class="metric-number">${escapeHtml(h.number)}</div>
                                <div class="metric-label">${escapeHtml(h.label)}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="terminal-card">
                    <h3><span class="key">community</span> <span class="comment">// open source · speaking · hackathons</span></h3>
                    <ul class="stack-list">
                        ${portfolio.facts.map(fact => {
                            const links = fact.links
                                ? `<span class="fact-links">${fact.links.map(link =>
                                    `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener" class="fact-link">${escapeHtml(link.label)} ↗</a>`
                                ).join('')}</span>`
                                : '';
                            return `<li>${escapeHtml(fact.text)}${links}</li>`;
                        }).join('')}
                    </ul>
                </div>
            </div>
        `,
        '/about'
    );
}

function renderProjects() {
    const featuredProjects = portfolio.projects.slice(0, 4);
    const projectInner = project => `
            <div class="project-meta">
                <span>${escapeHtml(project.kind)}</span>
                ${project.badge ? `<span class="contributor-badge">* ${escapeHtml(project.badge)}</span>` : project.url ? '<span class="project-link">open -&gt;</span>' : '<span class="comment">case-study</span>'}
            </div>
            <h3>${escapeHtml(project.name)}</h3>
            <p>${escapeHtml(project.desc)}</p>
            <div class="tag-row">${tagsHtml(project.tags)}</div>
    `;

    const projects = featuredProjects.map(project => project.url
        ? `<a class="project-card${project.featured ? ' project-card-featured' : ''}" href="${escapeHtml(project.url)}" target="_blank" rel="noopener">${projectInner(project)}</a>`
        : `<article class="project-card">${projectInner(project)}</article>`
    ).join('');

    return renderShell(
        'projects',
        'Top picks: strongest OSS signal first, then production systems with measurable impact.',
        `
            <div class="project-grid">${projects}</div>
            <div class="terminal-card compact-section">
                <h3><span class="key">writing</span></h3>
                <p>Published technical articles on Retrieval-Augmented Generation and prompt engineering for Neodata Group's blog. <a href="https://neodatagroup.ai/it/author/manuel-scionti/" target="_blank" rel="noopener" class="project-link">read on neodata -&gt;</a></p>
            </div>
        `,
        '/projects'
    );
}

function renderExperience() {
    const jobItems = portfolio.jobs.map(item => `
        <article class="job-card">
            <div class="job-topline">
                <span>${escapeHtml(item.dates)}</span>
                <span>${escapeHtml(item.company)}${item.location ? ` · ${escapeHtml(item.location)}` : ''}</span>
            </div>
            <h3>${escapeHtml(item.role)}</h3>
            <p>${escapeHtml(item.desc)}</p>
        </article>
    `).join('');

    const educationItems = portfolio.education.map(item => `
        <article class="job-card">
            <div class="job-topline">
                <span>${escapeHtml(item.dates)}</span>
                <span>${escapeHtml(item.company)}</span>
            </div>
            <h3>${escapeHtml(item.role)}</h3>
            <p>${escapeHtml(item.desc)}</p>
        </article>
    `).join('');

    const certList = portfolio.certifications.map(c => `<li>${escapeHtml(c)}</li>`).join('');
    const stackChips = portfolio.stack.map(s => `<span class="tag">${escapeHtml(s)}</span>`).join('');

    return renderShell(
        'career',
        'Work history, education, and the stack I use day to day.',
        `
            <div class="terminal-card">
                <h3><span class="key">work.log</span></h3>
                <div class="timeline">${jobItems}</div>
            </div>

            <div class="stack-columns compact-section">
                <div class="terminal-card">
                    <h3><span class="key">education</span></h3>
                    <div class="timeline">${educationItems}</div>
                </div>
                <div class="terminal-card">
                    <h3><span class="key">certifications</span></h3>
                    <ul class="stack-list">${certList}</ul>
                </div>
            </div>

            <div class="terminal-card compact-section">
                <h3><span class="key">stack</span></h3>
                <div class="chip-row">${stackChips}</div>
            </div>
        `,
        '/career'
    );
}

function renderContact() {
    return renderShell(
        'contact',
        'Feel free to reach out for opportunities, collaborations, or just to say hi!',
        `
            <div class="contact-grid">
                <a class="contact-card" href="mailto:scionti.manuel@hotmail.it?subject=AI%20Engineer%20opportunity%20-%20Manuel%20Scionti">
                    <h3>📧 email</h3>
                    <p>scionti.manuel@hotmail.it</p>
                </a>
                <a class="contact-card" href="https://www.linkedin.com/in/manuelscionti/" target="_blank" rel="noopener">
                    <h3>💼 linkedin</h3>
                    <p>/in/manuelscionti</p>
                </a>
                <a class="contact-card" href="https://github.com/mnlscn" target="_blank" rel="noopener">
                    <h3>🐙 github</h3>
                    <p>@mnlscn</p>
                </a>
                <div class="contact-card">
                    <h3>📍 location</h3>
                    <p>Barcelona / Remote EU</p>
                </div>
            </div>
        `,
        './contact --list'
    );
}

function renderHelp() {
    const slashList = SLASH_COMMANDS.map(item => `
        <li><span class="slash-cmd">${escapeHtml(item.cmd)}</span> <span class="comment">— ${escapeHtml(item.desc)}</span></li>
    `).join('');

    return renderShell(
        'help',
        'Slash commands and shell-style aliases. Type / to autocomplete.',
        `
            <div class="terminal-card">
                <h3><span class="key">/slash commands</span></h3>
                <ul class="stack-list">${slashList}</ul>
            </div>
            <div class="terminal-card">
                <h3><span class="key">aliases</span></h3>
                <ul class="stack-list">
                    <li>about / whoami / cat proof.txt</li>
                    <li>projects / ls projects/ / articles</li>
                    <li>career / skills / tail career.log</li>
                    <li>contact / ./contact</li>
                </ul>
            </div>
        `,
        '/help'
    );
}

let contextPercent = 4;

function bumpContext() {
    contextPercent = Math.min(82, contextPercent + Math.floor(Math.random() * 4) + 3);
    const el = document.getElementById('status-context-pct');
    if (!el) return;
    el.textContent = `${contextPercent}%`;
    el.classList.add('bumping');
    setTimeout(() => el.classList.remove('bumping'), 220);
}

const NAV_PROMPTS = {
    'about': '/about',
    'projects': '/projects',
    'experience': '/career',
    'contact': '/contact',
};

const THINKING_LABELS = [
    'Thinking',
    'Pondering',
    'Cogitating',
    'Reading CLAUDE.md',
    'Reticulating splines',
    'Vibe coding',
    'Loading context',
    'Untangling spaghetti',
    'Consulting the oracle',
];

function pickThinkingLabel() {
    return THINKING_LABELS[Math.floor(Math.random() * THINKING_LABELS.length)];
}

function showEmptyState() {
    const output = document.getElementById('output-panel');
    output.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">●</div>
            <p class="empty-title">manuel@portfolio:~ ready</p>
            <p class="empty-hint">Type <span class="slash-hint">/</span> or click a tab above to start.</p>
        </div>
    `;
}

function clearChat() {
    contextPercent = 4;
    const ctxEl = document.getElementById('status-context-pct');
    if (ctxEl) ctxEl.textContent = '4%';
    document.querySelectorAll('.nav-command').forEach(button => button.classList.remove('active'));
    showEmptyState();
}

function applyStagger(container) {
    const sectionOutput = container.querySelector('.section-output');
    if (!sectionOutput) return;

    let cumulativeDelay = 0;
    Array.from(sectionOutput.children).forEach(el => {
        el.classList.add('stream-in');
        el.style.animationDelay = `${cumulativeDelay}ms`;
        cumulativeDelay += 80;

        if (el.matches('.project-grid, .timeline, .contact-grid')) {
            const cards = Array.from(el.children);
            cards.forEach((card, i) => {
                card.classList.add('stream-in');
                card.style.animationDelay = `${cumulativeDelay + i * 50}ms`;
            });
            cumulativeDelay += cards.length * 50;
        }
    });
}

function appendTurn(promptText, renderFn, routeToHighlight = null) {
    const output = document.getElementById('output-panel');

    output.innerHTML = `
        <div class="chat-turn">
            <div class="user-bubble">
                <span class="user-bubble-prompt">&gt;</span>
                <span class="user-bubble-text">${escapeHtml(promptText)}</span>
            </div>
            <div class="assistant-response">
                <div class="thinking">
                    <span class="thinking-icon">✶</span>
                    <span>${escapeHtml(pickThinkingLabel())}<span class="thinking-dots"></span></span>
                </div>
            </div>
        </div>
    `;
    bumpContext();

    const delay = 500 + Math.floor(Math.random() * 350);
    setTimeout(() => {
        const response = output.querySelector('.assistant-response');
        if (!response) return;
        response.innerHTML = renderFn();
        applyStagger(response);
        if (routeToHighlight) {
            document.querySelectorAll('.nav-command').forEach(button => {
                button.classList.toggle('active', button.dataset.route === routeToHighlight);
            });
        }
    }, delay);
}

function showRoute(route) {
    const renderer = routes[route] || renderAbout;
    appendTurn(NAV_PROMPTS[route] || `/${route}`, renderer, route);
}

function renderInit() {
    return renderShell(
        'init',
        'Loaded ./CLAUDE.md · indexed 7 projects · evaluated 4 facts · 0 hallucinations.',
        `
            <div class="terminal-card">
                <ul class="stack-list">
                    <li>portfolio context loaded</li>
                    <li>recruiter mode: enabled</li>
                    <li>open_to_roles: true</li>
                    <li>auto-accept compliments: on</li>
                </ul>
            </div>
        `,
        '/init'
    );
}

function renderExit() {
    return renderShell(
        'exit',
        'Thanks for stopping by. The terminal will linger; you have been warmly logged out.',
        `
            <div class="terminal-card">
                <ul class="stack-list">
                    <li>$ logout</li>
                    <li>exit 0</li>
                    <li>[process completed]</li>
                    <li>[press any key to undo this melancholy]</li>
                </ul>
            </div>
        `,
        '/exit'
    );
}

function renderCvResponse() {
    return renderShell(
        'cv',
        'Saving Manuel-Scionti-CV.pdf to your downloads folder.',
        `<div class="terminal-card"><p class="comment">If nothing happened, the CV file may not be present yet — try the contact section to reach me directly.</p></div>`,
        '/cv'
    );
}

function renderModelResponse() {
    return renderShell(
        'model',
        'Opened the model picker — pick your favorite Claude variant in the status bar.',
        '<div class="terminal-card"><p class="comment">The picker appears above the status bar at the bottom of the window.</p></div>',
        '/model'
    );
}

const SLASH_INTENTS = {
    '/about': { render: renderAbout, route: 'about' },
    '/projects': { render: renderProjects, route: 'projects' },
    '/career': { render: renderExperience, route: 'experience' },
    '/skills': { render: renderExperience, route: 'experience' },
    '/contact': { render: renderContact, route: 'contact' },
    '/help': { render: renderHelp },
    '/init': { render: renderInit },
    '/exit': { render: renderExit },
    '/cv': { render: () => {
        const link = document.querySelector('a[download]');
        if (link) link.click();
        return renderCvResponse();
    }},
    '/model': { render: () => {
        setTimeout(() => {
            const toggle = document.getElementById('status-model-toggle');
            if (toggle) toggle.click();
        }, 100);
        return renderModelResponse();
    }},
};

function processCommand(rawValue) {
    const command = rawValue.trim().toLowerCase();
    if (!command) return;

    if (command === '/clear' || command === 'clear') {
        clearChat();
        return;
    }

    const display = rawValue.trim();

    if (SLASH_INTENTS[command]) {
        const intent = SLASH_INTENTS[command];
        appendTurn(display, intent.render, intent.route);
        return;
    }

    if (command === 'help') {
        appendTurn(display, renderHelp);
        return;
    }

    const route = aliases[command];
    if (route) {
        appendTurn(display, routes[route], route);
        return;
    }

    appendTurn(display, () => renderShell(
        'command not found',
        `"${display}" is not mapped. Try /help or one of: /about, /projects, /career, /contact.`,
        '',
        display
    ));
}

function renderNav() {
    const nav = document.getElementById('command-nav');
    nav.innerHTML = portfolio.nav.map(item => `
        <button class="nav-command" type="button" data-route="${escapeHtml(item.id)}">
            <span class="nav-prefix">${escapeHtml(item.prefix)}</span>
            <span>${escapeHtml(item.label)}</span>
        </button>
    `).join('');

    nav.addEventListener('click', event => {
        const button = event.target.closest('.nav-command');
        if (!button) return;
        showRoute(button.dataset.route);
    });
}

const SLASH_COMMANDS = [
    { cmd: '/about', desc: 'about Manuel' },
    { cmd: '/projects', desc: 'open source & production work' },
    { cmd: '/career', desc: 'work history & timeline' },
    { cmd: '/skills', desc: 'stack & focus areas' },
    { cmd: '/contact', desc: 'how to reach me' },
    { cmd: '/cv', desc: 'download CV (PDF)' },
    { cmd: '/model', desc: 'change Claude model' },
    { cmd: '/clear', desc: 'reset terminal' },
    { cmd: '/help', desc: 'show all commands' },
    { cmd: '/init', desc: 'initialize portfolio context' },
    { cmd: '/exit', desc: 'leave the terminal (sad)' },
];

const slashState = { items: [], index: 0, open: false };

function renderSlashPicker() {
    const list = document.getElementById('slash-picker-list');
    if (!list) return;
    list.innerHTML = slashState.items.map((item, i) => `
        <li>
            <button type="button" role="option" data-cmd="${escapeHtml(item.cmd)}" aria-current="${i === slashState.index ? 'true' : 'false'}">
                <span class="slash-cmd">${escapeHtml(item.cmd)}</span>
                <span class="slash-desc">${escapeHtml(item.desc)}</span>
            </button>
        </li>
    `).join('');
}

function openSlashPicker(value) {
    const picker = document.getElementById('slash-picker');
    const v = value.toLowerCase();
    slashState.items = SLASH_COMMANDS.filter(item => item.cmd.startsWith(v));
    if (slashState.items.length === 0) {
        closeSlashPicker();
        return;
    }
    slashState.index = 0;
    slashState.open = true;
    renderSlashPicker();
    picker.hidden = false;
}

function closeSlashPicker() {
    const picker = document.getElementById('slash-picker');
    if (picker) picker.hidden = true;
    slashState.open = false;
}

function setupInput() {
    const input = document.getElementById('terminal-input');
    const picker = document.getElementById('slash-picker');
    const list = document.getElementById('slash-picker-list');

    input.addEventListener('input', () => {
        if (input.value.startsWith('/')) {
            openSlashPicker(input.value);
        } else {
            closeSlashPicker();
        }
    });

    input.addEventListener('keydown', event => {
        if (slashState.open && slashState.items.length) {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                slashState.index = (slashState.index + 1) % slashState.items.length;
                renderSlashPicker();
                return;
            }
            if (event.key === 'ArrowUp') {
                event.preventDefault();
                slashState.index = (slashState.index - 1 + slashState.items.length) % slashState.items.length;
                renderSlashPicker();
                return;
            }
            if (event.key === 'Tab') {
                event.preventDefault();
                input.value = slashState.items[slashState.index].cmd;
                closeSlashPicker();
                return;
            }
            if (event.key === 'Escape') {
                event.preventDefault();
                closeSlashPicker();
                return;
            }
            if (event.key === 'Enter') {
                event.preventDefault();
                const cmd = slashState.items[slashState.index].cmd;
                processCommand(cmd);
                input.value = '';
                closeSlashPicker();
                return;
            }
        }

        if (event.key === 'Enter') {
            processCommand(input.value);
            input.value = '';
            closeSlashPicker();
        }
    });

    list.addEventListener('click', event => {
        const button = event.target.closest('button[data-cmd]');
        if (!button) return;
        processCommand(button.dataset.cmd);
        input.value = '';
        closeSlashPicker();
    });

    document.addEventListener('click', event => {
        if (!slashState.open) return;
        if (!picker.contains(event.target) && event.target !== input) closeSlashPicker();
    });

    document.querySelector('.terminal-body').addEventListener('click', event => {
        const tag = event.target.tagName;
        if (!['A', 'BUTTON', 'INPUT', 'SUMMARY'].includes(tag)) {
            input.focus();
        }
    });
}

function setupTheme() {
    const root = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const storageKey = 'terminal-portfolio-theme';

    let saved = 'dark';
    try {
        saved = localStorage.getItem(storageKey) || 'dark';
    } catch (error) {
        saved = 'dark';
    }

    if (saved === 'light') {
        root.setAttribute('data-theme', 'light');
    }

    const sync = () => {
        const isLight = root.getAttribute('data-theme') === 'light';
        toggle.textContent = isLight ? 'dark' : 'light';
        toggle.setAttribute('aria-label', `Switch to ${isLight ? 'dark' : 'light'} theme`);
    };

    toggle.addEventListener('click', () => {
        const isLight = root.getAttribute('data-theme') === 'light';
        if (isLight) {
            root.removeAttribute('data-theme');
            try { localStorage.setItem(storageKey, 'dark'); } catch (error) {}
        } else {
            root.setAttribute('data-theme', 'light');
            try { localStorage.setItem(storageKey, 'light'); } catch (error) {}
        }
        sync();
    });

    sync();
}

const MODELS = [
    { id: 'claude-sonnet-4-5', tag: 'default' },
    { id: 'claude-haiku-4-5', tag: 'fast' },
    { id: 'claude-opus-4-7', tag: 'big brain' },
    { id: 'claude-espresso-9', tag: 'overcaffeinated' },
    { id: 'claude-cannolo-4', tag: 'sicilian fork' },
    { id: 'claude-prosecco-3', tag: 'bubbly' },
    { id: 'claude-deadline-driven-2', tag: 'last minute' },
    { id: 'claude-monday-morning-1', tag: 'still loading' },
];

function setupModelPicker() {
    const toggle = document.getElementById('status-model-toggle');
    const picker = document.getElementById('model-picker');
    const list = document.getElementById('model-picker-list');
    if (!toggle || !picker || !list) return;

    let currentId = MODELS[0].id;

    list.innerHTML = MODELS.map(model => `
        <li>
            <button type="button" role="option" data-model="${escapeHtml(model.id)}">
                <span>${escapeHtml(model.id)}</span>
                <span class="model-tag">${escapeHtml(model.tag)}</span>
            </button>
        </li>
    `).join('');

    function setActive(id) {
        currentId = id;
        toggle.textContent = id;
        list.querySelectorAll('button').forEach(button => {
            button.setAttribute('aria-current', button.dataset.model === id ? 'true' : 'false');
        });
    }
    setActive(currentId);

    function open() {
        picker.hidden = false;
        toggle.setAttribute('aria-expanded', 'true');
    }

    function close() {
        picker.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', event => {
        event.stopPropagation();
        if (picker.hidden) open(); else close();
    });

    list.addEventListener('click', event => {
        const button = event.target.closest('button[data-model]');
        if (!button) return;
        setActive(button.dataset.model);
        close();
    });

    document.addEventListener('click', event => {
        if (picker.hidden) return;
        if (!picker.contains(event.target) && event.target !== toggle) close();
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !picker.hidden) close();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    showEmptyState();
    setupInput();
    setupTheme();
    setupModelPicker();
});
