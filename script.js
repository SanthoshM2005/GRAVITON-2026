/* ==========================================================================
   GRAVITON 2026 - Interactive Script
   Jaya Sakthi Engineering College (CSE & Cyber Security Dept.)
   ========================================================================== */

// Detailed Data Store for Symposium Events
const EVENTS_DATA = {
    "ppt": {
        title: "PPT Presentation",
        category: "Technical",
        teamSize: "1 - 3 Members",
        duration: " 10 Mins Presentation + 10 Mins Q&A",
        desc: "Showcase your cutting-edge technical research, innovative engineering concepts, or project slides before an esteemed panel of judges.",
        rules: [
            "Topics must pertain to Computer Science, Cyber Security, AI/ML, Cloud, or Emerging Technologies.",
            "Maximum 12 slides per presentation.",
            "Abstract must be submitted in PDF format prior to the event start.",
            "Decision of the judging panel will be final and binding."
        ]
    },
    "tech-quiz": {
        title: "Tech Quiz",
        category: "Technical",
        teamSize: "1 - 2 Members",
        duration: "3 Rounds (Preliminary + Semi + Final Grid)",
        desc: "A rapid-fire technical trivia showdown testing your command over computer science concepts, cyber security lore, tech giants, and tech history.",
        rules: [
            "Round 1: MCQ paper-based preliminary round (20 Mins).",
            "Round 2: Rapid fire buzzer round for top 8 qualifying teams.",
            "No electronic gadgets or internet access permitted during quiz rounds.",
            "Negative marking applies for wrong answers in the buzzer round."
        ]
    },
    "ai-prompt": {
        title: "AI Prompt Battle",
        category: "Technical",
        teamSize: "Individual (1 Member)",
        duration: "30 Mins Arena",
        desc: "Battle in prompt engineering! Given a target output image or complex code blueprint, craft the precise prompt to generate matching results.",
        rules: [
            "Participants will be provided access to standard Generative AI sandboxes.",
            "Evaluation based on structural similarity, visual fidelity, and prompt efficiency.",
            "Direct editing or manual photo manipulation is strictly prohibited."
        ]
    },
    "reverse-coding": {
        title: "Reverse Coding",
        category: "Technical",
        teamSize: "Individual (1 Member)",
        duration: "45 Mins",
        desc: "An algorithmic challenge where source code is hidden! Analyze black-box inputs and outputs to deduce the underlying algorithm and code it.",
        rules: [
            "Languages allowed: C, C++, Java, or Python 3.",
            "Multiple testcases (including edge cases) must pass.",
            "Plagiarism or unauthorized external code assistance leads to immediate disqualification."
        ]
    },
    "ctf": {
        title: "CTF (Capture The Flag)",
        category: "Technical",
        teamSize: "1 - 3 Members",
        duration: "90 Mins Jeopardy Format",
        desc: "A hands-on cybersecurity competition involving Web Exploitation, Reverse Engineering, Cryptography, Steganography, and Forensics flags.",
        rules: [
            "Jeopardy style scoreboard system with dynamic flag point values.",
            "Brute forcing or attacking the CTF infrastructure is strictly forbidden.",
            "First team to submit valid hash flags wins bonus speed points."
        ]
    },
    "web-creation": {
        title: "Website Creation Without Using AI",
        category: "Technical",
        teamSize: "Individual (1 Member)",
        duration: "60 Mins",
        desc: "Unleash your raw web development craft! Build a responsive, aesthetic webpage on a given theme using pure HTML5, CSS3, and JavaScript.",
        rules: [
            "Strictly NO AI assistants (ChatGPT, Copilot, Gemini) allowed.",
            "Only standard local code editors (VS Code / Notepad++) will be provided.",
            "Judged on UI aesthetics, responsiveness, semantic HTML, and CSS creativity."
        ]
    },
    "data-grid": {
        title: "Data Grid",
        category: "Technical",
        teamSize: "Individual (1 Member)",
        duration: "45 Mins",
        desc: "Dive into data analytics and SQL query crafting. Clean messy datasets, formulate complex JOIN queries, and extract key insights under time constraints.",
        rules: [
            "Database engine provided: MySQL / PostgreSQL sandbox.",
            "Evaluation based on query execution time, correctness, and output format.",
            "Dataset schema will be revealed at the beginning of the round."
        ]
    },
    "meme-marketing": {
        title: "Meme Marketing",
        category: "Non-Technical",
        teamSize: "1 - 2 Members",
        duration: "40 Mins",
        desc: "Channel your internet culture mastery! Create humorous, viral tech memes to promote a given fictional brand or product line.",
        rules: [
            "Memes must be original and created during the event timeframe.",
            "No offensive, derogatory, or inappropriate content permitted.",
            "Judged on humor, viral appeal, brand alignment, and creativity."
        ]
    },
    "number-logic": {
        title: "Number Logic Battle",
        category: "Non-Technical",
        teamSize: "Individual (1 Member)",
        duration: "30 Mins",
        desc: "High-octane numerical face-off testing speed mental arithmetic, number sequence decoding, and quantitative logic grids.",
        rules: [
            "Calculators and mobile devices are strictly disallowed.",
            "Speed round format with elimination after preliminary grid.",
            "Highest score in shortest time wins."
        ]
    },
    "esports": {
        title: "E Sports Battle",
        category: "Non-Technical",
        teamSize: "Squad (4 Members)",
        duration: "Tournament Matches",
        desc: "Competitive multiplayer gaming tournament featuring custom rooms, tactical squad gameplay, and knockout final battles.",
        rules: [
            "Game titles & match settings announced prior to room creation.",
            "Emulators strictly prohibited; mobile devices only.",
            "Unsportsmanlike conduct or hacking results in immediate team ban."
        ]
    },
    "squid-game": {
        title: "Squid Game",
        category: "Non-Technical",
        teamSize: "Individual (1 Member)",
        duration: "4 Survival Rounds",
        desc: "Thrilling physical & mental agility survival challenges inspired by high-stakes games (Red Light Green Light, Memory Grid, Tug of Strategy).",
        rules: [
            "Players failing a round challenge are immediately eliminated.",
            "Strict adherence to event referee signals is mandatory.",
            "Final surviving player wins the GRAVITON Squid Champion title!"
        ]
    },
    "treasure-hunt": {
        title: "Treasure Hunt",
        category: "Non-Technical",
        teamSize: "2 - 3 Members",
        duration: "60 Mins Campus Hunt",
        desc: "Decode cryptic technical puzzles and riddles hidden across the Jaya Sakthi campus to locate the final physical treasure chest.",
        rules: [
            "Teams must solve each clue sequentially to receive the next location coordinate.",
            "Damaging college property or altering hidden clue cards leads to instant disqualification.",
            "First team to retrieve the final treasure chest wins."
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initParticleCanvas();
    initCountdownTimer();
    initMobileNav();
    initEventFilters();
    initModalHandlers();
    initRegistrationForm();
    initAdminPortal();
});

/* --------------------------------------------------------------------------
   1. Atmospheric Background Particles (Red Glow Cosmic Dust)
   -------------------------------------------------------------------------- */
function initParticleCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.floor((width * height) / 18000);

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.radius = Math.random() * 2 + 0.5;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4 - 0.2; // Slight upward drift
            this.alpha = Math.random() * 0.7 + 0.2;
            this.color = Math.random() > 0.3 ? '#ff1e42' : '#ffffff';
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
                this.reset();
            }
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
            if (this.color === '#ff1e42') {
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#ff1e42';
            }
            ctx.restore();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

/* --------------------------------------------------------------------------
   2. Countdown Timer
   -------------------------------------------------------------------------- */
function initCountdownTimer() {
    // Set target event date (5 days from current date)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);
    targetDate.setHours(targetDate.getHours() + 14);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!daysEl) return;

    function updateTimer() {
        const now = new Date().getTime();
        const diff = targetDate.getTime() - now;

        if (diff <= 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.textContent = String(d).padStart(2, '0');
        hoursEl.textContent = String(h).padStart(2, '0');
        minutesEl.textContent = String(m).padStart(2, '0');
        secondsEl.textContent = String(s).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

/* --------------------------------------------------------------------------
   3. Mobile Navigation Menu Toggle
   -------------------------------------------------------------------------- */
function initMobileNav() {
    const toggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
        });

        // Close nav when clicking links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-active');
            });
        });
    }
}

/* --------------------------------------------------------------------------
   4. Event Filter Tabs & Live Search
   -------------------------------------------------------------------------- */
function initEventFilters() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const searchInput = document.getElementById('event-search');
    const eventCards = document.querySelectorAll('.event-card');

    let currentCategory = 'all';
    let searchQuery = '';

    function filterEvents() {
        eventCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const searchData = card.getAttribute('data-title') || '';
            const matchesCategory = (currentCategory === 'all' || category === currentCategory);
            const matchesSearch = searchData.toLowerCase().includes(searchQuery.toLowerCase());

            if (matchesCategory && matchesSearch) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-filter');
            filterEvents();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            filterEvents();
        });
    }

    // Quick add event buttons on cards
    document.querySelectorAll('.btn-quick-add').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const eventName = e.currentTarget.getAttribute('data-event-name');
            const checkbox = document.querySelector(`input[name="selected_events"][value="${eventName}"]`);
            if (checkbox) {
                checkbox.checked = true;
                // Highlight checkbox parent
                checkbox.closest('.custom-checkbox').style.color = '#ff1e42';
                // Scroll smoothly to register section
                const regSection = document.getElementById('register');
                if (regSection) regSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/* --------------------------------------------------------------------------
   5. Event Modal Handler
   -------------------------------------------------------------------------- */
function initModalHandlers() {
    const modal = document.getElementById('event-modal');
    const closeBtn = document.getElementById('modal-close');
    const modalCloseBtn = document.getElementById('m-close-btn');
    const modalRegBtn = document.getElementById('m-register-btn');

    const mTitle = document.getElementById('m-title');
    const mCategory = document.getElementById('m-category');
    const mDesc = document.getElementById('m-desc');
    const mTeamSize = document.getElementById('m-teamsize');
    const mDuration = document.getElementById('m-duration');
    const mRules = document.getElementById('m-rules');

    let currentEventTitle = '';

    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', () => {
            const eventId = btn.getAttribute('data-id');
            const eventData = EVENTS_DATA[eventId];

            if (eventData) {
                currentEventTitle = eventData.title;
                mTitle.textContent = eventData.title;
                mCategory.textContent = eventData.category;
                mCategory.className = `modal-badge ${eventData.category === 'Technical' ? 'text-blue' : 'text-amber'}`;
                mDesc.textContent = eventData.desc;
                mTeamSize.textContent = eventData.teamSize;
                mDuration.textContent = eventData.duration;

                mRules.innerHTML = eventData.rules.map(rule => `<li><i class="fa-solid fa-chevron-right text-crimson"></i> ${rule}</li>`).join('');

                modal.classList.add('active');
                modal.setAttribute('aria-hidden', 'false');
            }
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

    if (modalRegBtn) {
        modalRegBtn.addEventListener('click', () => {
            closeModal();
            const checkbox = document.querySelector(`input[name="selected_events"][value="${currentEventTitle}"]`);
            if (checkbox) checkbox.checked = true;
            const regSection = document.getElementById('register');
            if (regSection) regSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Close modal when clicking backdrop
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
        const ticketModal = document.getElementById('ticket-modal');
        if (e.target === ticketModal) ticketModal.classList.remove('active');
    });
}

/* --------------------------------------------------------------------------
   6. Registration Form & Digital Ticket Generator
   -------------------------------------------------------------------------- */
function initRegistrationForm() {
    const form = document.getElementById('registration-form');
    const ticketModal = document.getElementById('ticket-modal');
    const ticketClose = document.getElementById('ticket-close');
    const ticketDoneBtn = document.getElementById('ticket-done-btn');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Gather checked events
        const checkedEvents = Array.from(document.querySelectorAll('input[name="selected_events"]:checked'))
            .map(cb => cb.value);

        if (checkedEvents.length === 0) {
            alert('Please select at least one event (Technical or Non-Technical) to register!');
            return;
        }

        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const college = document.getElementById('college').value.trim();
        const dept = document.getElementById('dept').value;
        const year = document.getElementById('year').value;

        // Generate unique registration ID
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const regId = `GRAV-2026-${randomNum}`;

        // Fill Ticket Details
        document.getElementById('t-regid').textContent = regId;
        document.getElementById('t-name').textContent = fullname;
        document.getElementById('t-college-name').textContent = college;
        document.getElementById('t-dept-year').textContent = `${dept} - ${year}`;

        const tEventsContainer = document.getElementById('t-events');
        tEventsContainer.innerHTML = checkedEvents
            .map(ev => `<span class="t-event-badge">${ev}</span>`)
            .join('');

        // Generate SVG QR Code
        renderSVGQRCode('qr-container', `${regId}|${fullname}|${college}`);

        // Save registration to localStorage
        const registrationRecord = {
            regId,
            fullname,
            email,
            phone,
            college,
            dept,
            year,
            events: checkedEvents,
            timestamp: new Date().toISOString()
        };

        const existingRegistrations = JSON.parse(localStorage.getItem('graviton_registrations') || '[]');
        existingRegistrations.push(registrationRecord);
        localStorage.setItem('graviton_registrations', JSON.stringify(existingRegistrations));

        // Display Ticket Modal
        ticketModal.classList.add('active');
        form.reset();
    });

    if (ticketClose) {
        ticketClose.addEventListener('click', () => ticketModal.classList.remove('active'));
    }
    if (ticketDoneBtn) {
        ticketDoneBtn.addEventListener('click', () => ticketModal.classList.remove('active'));
    }
}

/* Helper to render lightweight SVG QR Code */
function renderSVGQRCode(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Simple deterministic pattern generator for QR visual
    let grid = '';
    const size = 15;
    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            // Create fixed alignment pattern corners
            const isCorner1 = (r < 4 && c < 4);
            const isCorner2 = (r < 4 && c > size - 5);
            const isCorner3 = (r > size - 5 && c < 4);

            const isFill = isCorner1 || isCorner2 || isCorner3 || ((r * c + r + c + data.length) % 3 === 0);
            if (isFill) {
                grid += `<rect x="${c * 4}" y="${r * 4}" width="3.5" height="3.5" fill="#000"/>`;
            }
        }
    }

    container.innerHTML = `
        <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <rect width="60" height="60" fill="#ffffff"/>
            ${grid}
        </svg>
    `;
}

/* --------------------------------------------------------------------------
   7. Admin / Organizer Portal PIN Security & CSV Excel Export Handler
   -------------------------------------------------------------------------- */
const ORGANIZER_PIN = "2026"; // Default Security PIN for Organizers
let isOrganizerAuthenticated = false;

window.openAdminDashboard = function() {
    if (isOrganizerAuthenticated) {
        showAdminModal();
    } else {
        showPinModal();
    }
};

function showPinModal() {
    const pinModal = document.getElementById('pin-modal');
    const pinInput = document.getElementById('pin-input');
    const pinError = document.getElementById('pin-error');
    if (pinModal) {
        if (pinInput) pinInput.value = '';
        if (pinError) pinError.style.display = 'none';
        pinModal.classList.add('active');
        pinModal.setAttribute('aria-hidden', 'false');
        if (pinInput) pinInput.focus();
    }
}

function closePinModal() {
    const pinModal = document.getElementById('pin-modal');
    if (pinModal) {
        pinModal.classList.remove('active');
        pinModal.setAttribute('aria-hidden', 'true');
    }
}

function showAdminModal() {
    const adminModal = document.getElementById('admin-modal');
    if (adminModal) {
        renderAdminData();
        adminModal.classList.add('active');
        adminModal.setAttribute('aria-hidden', 'false');
    }
}

window.closeAdminDashboard = function() {
    const adminModal = document.getElementById('admin-modal');
    if (adminModal) {
        adminModal.classList.remove('active');
        adminModal.setAttribute('aria-hidden', 'true');
    }
};

function renderAdminData() {
    const records = JSON.parse(localStorage.getItem('graviton_registrations') || '[]');
    const statTotal = document.getElementById('stat-total');
    const statEventsCount = document.getElementById('stat-events-count');
    const searchInput = document.getElementById('admin-search');
    const tableBody = document.getElementById('admin-table-body');
    
    let totalSeats = 0;
    records.forEach(r => totalSeats += (r.events ? r.events.length : 0));

    if (statTotal) statTotal.textContent = records.length;
    if (statEventsCount) statEventsCount.textContent = totalSeats;

    const query = (searchInput ? searchInput.value.toLowerCase() : '');
    const filtered = records.filter(r => 
        r.fullname.toLowerCase().includes(query) ||
        r.email.toLowerCase().includes(query) ||
        r.college.toLowerCase().includes(query) ||
        r.regId.toLowerCase().includes(query)
    );

    if (tableBody) {
        if (filtered.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:30px; color:var(--text-muted);">No registration records found.</td></tr>`;
        } else {
            tableBody.innerHTML = filtered.map(r => `
                <tr>
                    <td><strong class="text-crimson">${r.regId}</strong></td>
                    <td><strong>${escapeHTML(r.fullname)}</strong></td>
                    <td>${escapeHTML(r.email)}<br><small style="color:var(--text-muted);">${escapeHTML(r.phone)}</small></td>
                    <td>${escapeHTML(r.college)}<br><small style="color:var(--text-muted);">${escapeHTML(r.dept)} (${escapeHTML(r.year)})</small></td>
                    <td>${r.events ? r.events.map(ev => `<span class="t-event-badge">${escapeHTML(ev)}</span>`).join(' ') : ''}</td>
                    <td><small>${new Date(r.timestamp).toLocaleDateString()}</small></td>
                </tr>
            `).join('');
        }
    }
}

function initAdminPortal() {
    const openAdminBtns = document.querySelectorAll('#open-admin-btn, .btn-open-admin');
    const adminModal = document.getElementById('admin-modal');
    const adminClose = document.getElementById('admin-close');
    const adminDoneBtn = document.getElementById('admin-done-btn');
    const searchInput = document.getElementById('admin-search');
    const btnExportCSV = document.getElementById('btn-export-csv');
    const btnClearAll = document.getElementById('btn-clear-all');

    // PIN Form elements
    const pinForm = document.getElementById('pin-form');
    const pinClose = document.getElementById('pin-close');
    const pinCancelBtn = document.getElementById('pin-cancel-btn');
    const pinInput = document.getElementById('pin-input');
    const pinError = document.getElementById('pin-error');

    openAdminBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.openAdminDashboard();
        });
    });

    if (pinClose) pinClose.addEventListener('click', closePinModal);
    if (pinCancelBtn) pinCancelBtn.addEventListener('click', closePinModal);

    if (pinForm) {
        pinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const enteredPin = pinInput ? pinInput.value.trim() : '';

            if (enteredPin === ORGANIZER_PIN || enteredPin === "9003252177" || enteredPin === "9043639975") {
                isOrganizerAuthenticated = true;
                closePinModal();
                showAdminModal();
            } else {
                if (pinError) pinError.style.display = 'block';
                if (pinInput) {
                    pinInput.value = '';
                    pinInput.focus();
                }
            }
        });
    }

    if (adminClose) adminClose.addEventListener('click', window.closeAdminDashboard);
    if (adminDoneBtn) adminDoneBtn.addEventListener('click', window.closeAdminDashboard);

    if (searchInput) {
        searchInput.addEventListener('input', renderAdminData);
    }

    if (btnExportCSV) {
        btnExportCSV.addEventListener('click', () => {
            const records = JSON.parse(localStorage.getItem('graviton_registrations') || '[]');
            if (records.length === 0) {
                alert('No registrations available to export!');
                return;
            }

            let csvContent = '\uFEFF'; // UTF-8 BOM for Excel formatting
            csvContent += 'Registration ID,Full Name,Email Address,Mobile Number,College Name,Department,Year of Study,Registered Events,Total Events,Registration Timestamp\n';

            records.forEach(r => {
                const eventsList = (r.events || []).join('; ');
                const totalEvCount = (r.events || []).length;
                const row = `"${r.regId}","${escapeCSV(r.fullname)}","${escapeCSV(r.email)}","${escapeCSV(r.phone)}","${escapeCSV(r.college)}","${escapeCSV(r.dept)}","${escapeCSV(r.year)}","${escapeCSV(eventsList)}","${totalEvCount}","${r.timestamp}"`;
                csvContent += row + '\n';
            });

            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.setAttribute('href', url);
            link.setAttribute('download', `GRAVITON_2026_Delegates_Excel_${new Date().toISOString().slice(0,10)}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    if (btnClearAll) {
        btnClearAll.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all participant records from local storage?')) {
                localStorage.removeItem('graviton_registrations');
                renderAdminData();
            }
        });
    }
}

function escapeCSV(str) {
    return String(str || '').replace(/"/g, '""');
}

function escapeHTML(str) {
    return String(str || '').replace(/[&<>"']/g, match => {
        const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
        return map[match];
    });
}


