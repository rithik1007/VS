// ================================
// VALENTINE'S DAY WEBSITE SCRIPT
// ================================

// 🔥 CONFIGURATION
const YOUR_EMAIL = 'rithikrajdhariwal@gmail.com';
const WEB3FORMS_ACCESS_KEY = '1e3d21f1-cd72-4ca0-9057-1230e770d9b1';

// Store user choices
const dateChoices = {
    when: '',
    time: '',
    type: ''
};

// Track "No" button clicks for escalating humor
let noClickCount = 0;
const funnyMessages = [
    "Are you sure? 🥺",
    "Really? Give it another thought! 💭",
    "The button is running away! 🏃",
    "You can't catch me! 😄",
    "Still no? My heart! 💔",
    "One more try? Pretty please? 🙏",
    "I'm getting smaller! Help! 😱",
    "Okay, I'll just disappear... 👻"
];

// ================================
// INITIALIZATION
// ================================

console.log('🚀 Script loaded successfully!');

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ DOM Content Loaded');
    console.log('📧 Email:', YOUR_EMAIL);
    console.log('🔑 API Key:', WEB3FORMS_ACCESS_KEY ? 'Set' : 'Missing');
    
    initializeFloatingHearts();
    initializeScreen1();
    initializeScreen2();
    initializeScreen3();
    initializeScreen4();
    
    console.log('✅ All screens initialized');
});

// ================================
// FLOATING HEARTS BACKGROUND
// ================================

function initializeFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const particles = ['💖', '💝', '💗', '💓', '💕', '💘', '❤️', '💞', '✨', '⭐', '🌟', '💫'];
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'floating-heart';
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 5 + 6) + 's';
        particle.style.fontSize = (Math.random() * 14 + 16) + 'px';
        particle.style.opacity = Math.random() * 0.6 + 0.2;
        
        // Add random color tint
        const hue = Math.random() * 60 + 280; // Purple to pink range
        particle.style.filter = `hue-rotate(${hue}deg) brightness(1.2)`;
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 11000);
    }, 300);
}

// ================================
// SCREEN 1: INITIAL QUESTION
// ================================

function initializeScreen1() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const hint = document.getElementById('hint');
    const buttonContainer = document.querySelector('.button-container');
    
    // Yes button - trigger confetti and move to next screen
    yesBtn.addEventListener('click', () => {
        launchConfetti();
        setTimeout(() => {
            switchScreen('screen1', 'screen2');
        }, 1000);
    });
    
    // No button - make it escape!
    let isFirstHover = true;
    
    noBtn.addEventListener('mouseenter', (e) => {
        e.preventDefault();
        
        // On first hover, make button absolute and start escape mode
        if (isFirstHover) {
            noBtn.classList.add('escaping');
            buttonContainer.classList.add('escape-mode');
            hint.textContent = "Wait... where did it go? 😄";
            isFirstHover = false;
        }
        
        noClickCount++;
        
        // Cycle through funny messages
        const messageIndex = noClickCount % funnyMessages.length;
        hint.textContent = funnyMessages[messageIndex];
        
        moveNoButton(noBtn);
    });
    
    // Prevent clicking
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (!isFirstHover) {
            noClickCount++;
            moveNoButton(noBtn);
            hint.textContent = "Nice try! But I'm too quick! 😆";
        } else {
            // First click also triggers escape
            noBtn.classList.add('escaping');
            buttonContainer.classList.add('escape-mode');
            hint.textContent = "Nope! Can't click that! 😄";
            isFirstHover = false;
            setTimeout(() => moveNoButton(noBtn), 100);
        }
    });
    
    // Mobile: also move on touchstart
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        
        if (isFirstHover) {
            noBtn.classList.add('escaping');
            buttonContainer.classList.add('escape-mode');
            hint.textContent = "Nice try! 😄";
            isFirstHover = false;
        }
        
        noClickCount++;
        moveNoButton(noBtn);
        
        const messageIndex = noClickCount % funnyMessages.length;
        hint.textContent = funnyMessages[messageIndex];
    });
}

function moveNoButton(button) {
    const container = button.parentElement;
    const containerRect = container.getBoundingClientRect();
    
    // Get current button position
    const buttonRect = button.getBoundingClientRect();
    const currentX = buttonRect.left + buttonRect.width / 2 - containerRect.left;
    const currentY = buttonRect.top + buttonRect.height / 2 - containerRect.top;
    
    // Calculate safe movement range
    const maxMoveX = containerRect.width / 2 - 100;
    const maxMoveY = containerRect.height / 2 - 80;
    
    // Generate random new position (ensure it moves far enough)
    let newX, newY;
    do {
        newX = (Math.random() - 0.5) * maxMoveX * 1.8;
        newY = (Math.random() - 0.5) * maxMoveY * 1.6;
    } while (Math.abs(newX) < 50 && Math.abs(newY) < 50); // Ensure minimum movement
    
    // Calculate scale (button gets smaller with each attempt)
    const scale = Math.max(0.4, 1 - (noClickCount * 0.1));
    
    // Random rotation for extra playfulness
    const rotation = (Math.random() - 0.5) * 30;
    
    // Apply smooth transform with bounce effect
    button.style.transition = 'all 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    button.style.left = `calc(50% + ${newX}px)`;
    button.style.top = `calc(50% + ${newY}px)`;
    button.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`;
}

// ================================
// SCREEN 2: CHOOSE DATE
// ================================

function initializeScreen2() {
    const dateOptions = document.querySelectorAll('#screen2 .option-btn');
    
    dateOptions.forEach(btn => {
        btn.addEventListener('click', () => {
            dateChoices.when = btn.getAttribute('data-date');
            addClickAnimation(btn);
            setTimeout(() => {
                switchScreen('screen2', 'screen3');
            }, 500);
        });
    });
}

// ================================
// SCREEN 3: CHOOSE TIME
// ================================

function initializeScreen3() {
    const timeOptions = document.querySelectorAll('#screen3 .option-btn');
    
    timeOptions.forEach(btn => {
        btn.addEventListener('click', () => {
            dateChoices.time = btn.getAttribute('data-time');
            addClickAnimation(btn);
            setTimeout(() => {
                switchScreen('screen3', 'screen4');
            }, 500);
        });
    });
}

// ================================
// SCREEN 4: CHOOSE DATE TYPE
// ================================

function initializeScreen4() {
    const typeOptions = document.querySelectorAll('#screen4 .option-btn');
    
    typeOptions.forEach(btn => {
        btn.addEventListener('click', () => {
            dateChoices.type = btn.getAttribute('data-type');
            addClickAnimation(btn);
            setTimeout(() => {
                showFinalScreen();
            }, 500);
        });
    });
}

// ================================
// SCREEN 5: FINAL SCREEN
// ================================

function showFinalScreen() {
    // Update summary with user choices
    document.getElementById('finalDate').textContent = dateChoices.when;
    document.getElementById('finalTime').textContent = dateChoices.time;
    document.getElementById('finalType').textContent = dateChoices.type;
    
    // Launch massive confetti
    launchConfetti();
    setTimeout(() => launchConfetti(), 300);
    setTimeout(() => launchConfetti(), 600);
    
    // Switch to final screen
    switchScreen('screen4', 'screen5');
    
    // Silently send you the details (she won't notice)
    setTimeout(() => {
        sendNotification();
    }, 1500);
}

// ================================
// NOTIFICATION SYSTEM (SILENT)
// ================================

function sendNotification() {
    const details = {
        when: dateChoices.when,
        time: dateChoices.time,
        type: dateChoices.type,
        timestamp: new Date().toLocaleString()
    };
    
    // Method 1: Web3Forms (Instant delivery)
    sendViaWeb3Forms(details);
    
    // Method 2: Save to browser console as backup
    console.log('🎉 DATE DETAILS:', details);
    
    // Method 3: Store locally
    localStorage.setItem('valentineResponse', JSON.stringify(details));
}

// Send via Web3Forms (instant email)
async function sendViaWeb3Forms(details) {
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: WEB3FORMS_ACCESS_KEY,
                subject: '💕 She Said YES! - Date Details',
                from_name: 'Valentine Website',
                email: YOUR_EMAIL,
                message: `🎉 SHE SAID YES!\n\n📅 When: ${details.when}\n⏰ Time: ${details.time}\n💫 Type: ${details.type}\n🕐 Responded: ${details.timestamp}`
            })
        });
        
        const result = await response.json();
        if (result.success) {
            console.log('✅ Email sent successfully!');
        } else {
            console.log('⚠️ Using localStorage backup');
        }
    } catch (error) {
        console.log('⚠️ Network issue - data saved locally');
    }
}

// Optional: WhatsApp backup button (if you want manual option)
function sendToWhatsApp() {
    const message = `🎉 SHE SAID YES! 💕\n\n` +
                   `Date Details:\n` +
                   `📅 When: ${dateChoices.when}\n` +
                   `⏰ Time: ${dateChoices.time}\n` +
                   `💫 Type: ${dateChoices.type}\n\n` +
                   `She's excited for the date! 💖`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// ================================
// UTILITY FUNCTIONS
// ================================

function switchScreen(fromId, toId) {
    const fromScreen = document.getElementById(fromId);
    const toScreen = document.getElementById(toId);
    
    fromScreen.classList.remove('active');
    setTimeout(() => {
        toScreen.classList.add('active');
    }, 100);
}

function addClickAnimation(element) {
    element.style.transform = 'scale(0.95)';
    setTimeout(() => {
        element.style.transform = '';
    }, 150);
}

// ================================
// CONFETTI ANIMATION
// ================================

function launchConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const confettiCount = 200;
    const colors = [
        '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4', 
        '#a78bfa', '#f472b6', '#fbbf24', '#34d399', '#22d3ee'
    ];
    
    // Create confetti pieces
    for (let i = 0; i < confettiCount; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            width: Math.random() * 14 + 8,
            height: Math.random() * 14 + 8,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 15 - 7.5,
            velocityX: Math.random() * 6 - 3,
            velocityY: Math.random() * 7 + 3,
            opacity: 1,
            shape: Math.random() > 0.6 ? 'circle' : Math.random() > 0.5 ? 'square' : 'triangle',
            glow: Math.random() > 0.5
        });
    }
    
    // Animate confetti
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let activePieces = 0;
        
        confettiPieces.forEach(piece => {
            if (piece.y < canvas.height + 100 && piece.opacity > 0) {
                activePieces++;
                
                ctx.save();
                ctx.translate(piece.x, piece.y);
                ctx.rotate((piece.rotation * Math.PI) / 180);
                ctx.globalAlpha = piece.opacity;
                
                // Add glow effect
                if (piece.glow) {
                    ctx.shadowBlur = 20;
                    ctx.shadowColor = piece.color;
                }
                
                ctx.fillStyle = piece.color;
                
                if (piece.shape === 'circle') {
                    ctx.beginPath();
                    ctx.arc(0, 0, piece.width / 2, 0, Math.PI * 2);
                    ctx.fill();
                } else if (piece.shape === 'triangle') {
                    ctx.beginPath();
                    ctx.moveTo(0, -piece.height / 2);
                    ctx.lineTo(piece.width / 2, piece.height / 2);
                    ctx.lineTo(-piece.width / 2, piece.height / 2);
                    ctx.closePath();
                    ctx.fill();
                } else {
                    ctx.fillRect(-piece.width / 2, -piece.height / 2, piece.width, piece.height);
                }
                
                ctx.restore();
                
                // Update position with wind effect
                piece.x += piece.velocityX + Math.sin(piece.y * 0.02) * 0.8;
                piece.y += piece.velocityY;
                piece.rotation += piece.rotationSpeed;
                piece.velocityY += 0.18; // Gravity
                piece.velocityX *= 0.99; // Air resistance
                
                // Fade out as it falls
                if (piece.y > canvas.height - 300) {
                    piece.opacity -= 0.01;
                }
            }
        });
        
        if (activePieces > 0) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    
    animate();
}

// Handle window resize for canvas
window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
