// Section Navigation
function showSection(sectionId) {
    // Update buttons
    document.querySelectorAll('.nav-cmd').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`[data-section="${sectionId}"]`);
    if (activeBtn) activeBtn.classList.add('active');

    // Update sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionId);
    if (activeSection) activeSection.classList.add('active');
}

// Command Input Handler
function handleInput(e) {
    if (e.key === 'Enter') {
        const input = e.target.value.toLowerCase().trim();
        processCommand(input);
        e.target.value = '';
    }
}

function processCommand(cmd) {
    const commands = {
        'about': () => showSection('about'),
        './about': () => showSection('about'),
        'projects': () => showSection('projects'),
        'ls projects': () => showSection('projects'),
        'ls': () => showSection('projects'),
        'skills': () => showSection('skills'),
        'cat skills': () => showSection('skills'),
        'cat skills.json': () => showSection('skills'),
        'contact': () => showSection('contact'),
        './contact': () => showSection('contact'),
        'blog': () => showSection('blog'),
        'ls blog': () => showSection('blog'),
        'github': () => window.open('https://github.com/mnlscn', '_blank'),
        'gh': () => window.open('https://github.com/mnlscn', '_blank'),
        'linkedin': () => window.open('https://www.linkedin.com/in/manuelscionti/', '_blank'),
        'li': () => window.open('https://www.linkedin.com/in/manuelscionti/', '_blank'),
        'email': () => window.open('mailto:your.email@example.com', '_blank'),
        'clear': () => location.reload(),
        'help': () => showHelp(),
        'whoami': () => alert('visitor@portfolio'),
        'pwd': () => alert('/home/manuel/portfolio'),
        'date': () => alert(new Date().toString()),
        'sudo': () => alert('Nice try! 😄'),
        'rm -rf': () => alert('Nope! 🚫'),
    };

    // Check exact match first
    if (commands[cmd]) {
        commands[cmd]();
        return;
    }

    // Check partial matches
    for (const [key, action] of Object.entries(commands)) {
        if (cmd.includes(key) || key.includes(cmd)) {
            action();
            return;
        }
    }

    // Unknown command
    alert(`Command not found: ${cmd}\nType 'help' for available commands`);
}

function showHelp() {
    alert(`Available commands:

Navigation:
  about      - Show about section
  projects   - List projects  
  skills     - Show skills
  blog       - View blog posts
  contact    - Contact info

Links:
  github     - Open GitHub profile
  linkedin   - Open LinkedIn profile
  email      - Send email

Other:
  help       - Show this help
  clear      - Refresh page

Or just click the buttons! 😉`);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT') return;

    switch(e.key) {
        case '1': showSection('about'); break;
        case '2': showSection('projects'); break;
        case '3': showSection('skills'); break;
        case '4': showSection('blog'); break;
        case '5': showSection('contact'); break;
        case '/':
            e.preventDefault();
            const input = document.getElementById('terminalInput');
            if (input) input.focus();
            break;
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('terminalInput');
    if (input) {
        // Focus input on click anywhere in window body
        document.querySelector('.window-body')?.addEventListener('click', (e) => {
            if (e.target.tagName !== 'A' && e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT') {
                input.focus();
            }
        });
    }
});
