// Neural Network Background
function initNeuralNetwork() {
    const canvas = document.getElementById('neural-bg');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Node {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.radius = Math.random() * 1.5 + 0.5;
        }

        update(width, height) {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(34, 211, 238, 0.5)';
            ctx.fill();
        }
    }

    const nodes = [];
    const nodeCount = 50;
    const maxDist = 120;

    for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node(Math.random() * canvas.width, Math.random() * canvas.height));
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw connections
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDist) {
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - dist / maxDist) * 0.15})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        // Update and draw nodes
        nodes.forEach(node => {
            node.update(canvas.width, canvas.height);
            node.draw(ctx);
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// Token Streaming Effect
function initTokenStream() {
    const streamEl = document.getElementById('token-stream');
    const countEl = document.getElementById('token-count');
    if (!streamEl) return;

    const text = "I build intelligent systems that bridge the gap between cutting-edge AI research and real-world applications. Specializing in LLMs, GenAI, and autonomous agents — I turn complex ML problems into production-ready solutions.";
    const tokens = text.split(' ');
    let idx = 0;

    function stream() {
        if (idx < tokens.length) {
            const cursor = streamEl.querySelector('.cursor-blink');
            const span = document.createElement('span');
            span.className = 'token';
            span.textContent = tokens[idx] + ' ';
            streamEl.insertBefore(span, cursor);
            idx++;
            if (countEl) countEl.textContent = idx * 3;
            setTimeout(stream, 40 + Math.random() * 40);
        }
    }

    setTimeout(stream, 800);
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initNeuralNetwork();
    initTokenStream();
    initSmoothScroll();
});
