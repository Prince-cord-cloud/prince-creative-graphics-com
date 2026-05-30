// Lumi AI - Premium Neural Interface with Glass Morphism
// Advanced Portfolio Intelligence System

(function() {
    // ========== COMPLETE PORTFOLIO KNOWLEDGE BASE ==========
    const PORTFOLIO = {
        owner: {
            name: "Prince",
            fullName: "Prince Creative Graphics",
            title: "Full Stack Developer & UI/UX Designer",
            bio: "Crafting complete digital ecosystems from intuitive user interfaces to robust backend architectures. Specializing in transforming complex requirements into scalable, high-performance web applications that deliver exceptional user experiences and measurable business value.",
            location: "Port Harcourt, Rivers State, Nigeria",
            email: "princecreativegraphics@gmail.com",
            phone: ["+234 706 994 3790", "+234 907 563 4424"],
            availability: "Available for immediate projects",
            responseTime: "Within 24 hours"
        },
        
        skills: {
            frontend: [{ name: "React.js", level: 95 }, { name: "JavaScript/ES6+", level: 92 }, { name: "TypeScript", level: 90 }, { name: "HTML5/CSS3", level: 98 }],
            backend: [{ name: "Node.js", level: 85 }, { name: "Python", level: 80 }, { name: "MongoDB", level: 85 }],
            design: [{ name: "UI/UX Design", level: 95 }, { name: "Graphic Design", level: 92 }, { name: "Figma", level: 90 }]
        },
        
        experience: [
            { role: "Full Stack Developer", company: "Port Harcourt", period: "2022 - Present", achievements: ["Leading full-stack development", "Creating responsive web applications", "Developing scalable backend APIs"] },
            { role: "Data Analyst / Typist", company: "Port Harcourt", period: "2021 - 2022", achievements: ["Data entry services", "Information systems organization", "Data analysis"] },
            { role: "UI/UX Designer", company: "Lagos", period: "2020 - 2021", achievements: ["Intuitive UI design", "User research", "Engaging experiences"] }
        ],
        
        education: [
            { degree: "UI/UX & Frontend", institution: "Code Camp Academy", period: "2021-2022" },
            { degree: "WASSCE", institution: "Community Senior Sec. School", period: "2020-2023" },
            { degree: "JSCE", institution: "Community Junior Sec. School", period: "2017-2020" }
        ],
        
        projects: [
            { name: "Tech Startup Dashboard", category: "UI/UX", description: "Modern dashboard with advanced data visualization", demoUrl: "#", sectionId: "works" },
            { name: "Fintech Banking App", category: "Mobile", description: "Secure banking with biometric authentication", demoUrl: "https://github.com/Prince-cord-cloud", sectionId: "works" },
            { name: "SaaS Web Application", category: "Frontend", description: "Responsive interface with real-time updates", demoUrl: "https://connecthub-app.vercel.app/", sectionId: "works" },
            { name: "AI Companion App", category: "AI", description: "Intelligent AI with natural language processing", demoUrl: "https://prince-cord-cloud.github.io/AI-Companion/", sectionId: "works" },
            { name: "CV Builder App", category: "Web", description: "Professional CV builder with templates", demoUrl: "https://cv-builder-app-black.vercel.app/", sectionId: "works" }
        ],
        
        services: [
            { name: "UI/UX Design", description: "User-centered design, wireframing, prototyping", sectionId: "services" },
            { name: "Frontend Development", description: "Responsive design, JavaScript frameworks", sectionId: "services" },
            { name: "Backend Development", description: "RESTful APIs, database design, cloud deployment", sectionId: "services" },
            { name: "Graphic Design", description: "Logo design, brand identity, print design", sectionId: "services" }
        ],
        
        sections: { home: "home", services: "services", works: "works", resume: "resume", skills: "skills", testimonials: "testimonials", blog: "blog", contact: "contact" },
        social: { whatsapp: "https://wa.me/2347069943790", github: "https://github.com/Prince-cord-cloud", facebook: "https://www.facebook.com/taylorswiftr", email: "mailto:princecreativegraphics@gmail.com" },
        stats: { yearsExperience: 4, projectsCompleted: 50, clientSatisfaction: 100 }
    };
    
    // Suggested Questions for Input Bar
    const SUGGESTIONS = [
        { text: "View All Projects", icon: "grid", action: "Show me projects" },
        { text: "Technical Skills", icon: "code", action: "What skills?" },
        { text: "Work Experience", icon: "briefcase", action: "Work experience" },
        { text: "Services Offered", icon: "sparkles", action: "What services?" },
        { text: "Contact & Hire", icon: "message", action: "Contact info" },
        { text: "Navigate Portfolio", icon: "compass", action: "Go to Portfolio" },
        { text: "Pricing & Budget", icon: "dollar", action: "Pricing" },
        { text: "Achievements", icon: "stats", action: "Stats" }
    ];
    
    // Navigation System
    function navigateToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) { 
            element.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
            return true;
        }
        return false;
    }
    
    function openExternalLink(url) { if (url && url !== '#') window.open(url, '_blank'); }
    
    // ========== IMPROVED AI RESPONSE ENGINE (MUCH SMARTER) ==========
    function getAIResponse(userMessage) {
        const msg = userMessage.toLowerCase().trim();
        
        // ===== IDENTITY & SELF-AWARENESS =====
        if (msg.match(/^who are you$|what are you|your identity|tell me about yourself|introduce yourself/i)) {
            return `◆ WHO IS LUMI AI?\n\nI am Lumi AI, an intelligent portfolio assistant created by Prince to help you navigate and explore his work.\n\n◉ My purpose: Answer questions about Prince's skills, experience, and projects\n◉ My ability: Navigate through portfolio sections\n◉ My knowledge: Prince's complete professional profile\n\nHow can I assist you today?`;
        }
        
        if (msg.match(/what is lumi|lumi ai|who made you|who created you|your creator|your master/i)) {
            return `◆ ABOUT LUMI AI\n\nI was created by Prince, a Full Stack Developer and UI/UX Designer based in Port Harcourt, Nigeria.\n\nI am designed to be his digital ambassador - helping visitors understand his work, skills, and services.\n\nWant to know more about Prince? Ask me "Tell me about Prince" or "What does Prince do?"`;
        }
        
        if (msg.match(/are you ai|are you real|are you robot|are you human|what type of ai/i)) {
            return `◆ LUMI AI IDENTITY\n\nYes, I am an artificial intelligence assistant! Specifically:\n\n◉ Type: Portfolio Intelligence Agent\n◉ Function: Navigation + Information + Support\n◉ Technology: Neural Response System\n◉ Creator: Prince\n\nI'm here to make exploring Prince's portfolio faster and easier for you.`;
        }
        
        // ===== ABOUT PRINCE (THE OWNER) =====
        if (msg.match(/who is prince|tell me about prince|about prince|prince who|prince creative|portfolio owner/i)) {
            return `◆ ABOUT PRINCE\n\nPrince is a ${PORTFOLIO.owner.title} based in ${PORTFOLIO.owner.location}.\n\n◉ ${PORTFOLIO.owner.bio}\n\n◉ ${PORTFOLIO.stats.yearsExperience}+ years of experience\n◉ ${PORTFOLIO.stats.projectsCompleted}+ projects delivered\n◉ ${PORTFOLIO.stats.clientSatisfaction}% client satisfaction\n\nWant specific details? Ask about his skills, experience, or projects!`;
        }
        
        if (msg.match(/what does prince do|what is prince's job|prince profession|prince work|prince specialize/i)) {
            return `◆ PRINCE'S PROFESSION\n\nPrince specializes in:\n\n◉ Full Stack Development\n◉ UI/UX Design\n◉ Frontend Development\n◉ Backend Development\n◉ Graphic Design\n\nHe builds complete digital ecosystems from intuitive interfaces to robust backend architectures.\n\nAsk "What skills?" for the complete technical list!`;
        }
        
        // ===== GREETINGS & CONVERSATION STARTERS =====
        if (msg.match(/^hello$|^hi$|^hey$|^good morning|^good afternoon|^good evening|^greetings|^sup$/i)) {
            return `◆ HELLO! 👋\n\nI'm Lumi AI, your portfolio assistant. I can help you explore Prince's work, skills, and services.\n\n◉ Try: "Who is Prince?"\n◉ Try: "What skills does Prince have?"\n◉ Try: "Show me projects"\n◉ Try: "Go to Portfolio"\n\nWhat would you like to know?`;
        }
        
        if (msg.match(/how are you|how do you do|how's it going|what's up|how are things/i)) {
            return `◆ STATUS REPORT\n\nI'm fully operational and ready to assist! My neural networks are running at optimal capacity.\n\nAll portfolio data is loaded and I'm ready to answer your questions about Prince's work.\n\nWhat can I help you with today?`;
        }
        
        if (msg.match(/thank|thanks|appreciate|grateful|good job|well done/i)) {
            return `◆ YOU'RE WELCOME! 🎯\n\nI'm glad I could help! It's my pleasure to assist you in exploring Prince's portfolio.\n\nIf you have any more questions about his work, skills, or services, just ask.\n\nWould you like to:\n◉ Learn about his skills?\n◉ See his projects?\n◉ Get contact information?`;
        }
        
        if (msg.match(/bye|goodbye|see you|farewell|exit|quit|cya/i)) {
            return `◆ GOODBYE! 👋\n\nThank you for exploring Prince's portfolio with Lumi AI.\n\nFeel free to return anytime you have questions. The contact section is available if you'd like to discuss a project.\n\nHave a great day!`;
        }
        
        // ===== NAVIGATION COMMANDS =====
        if (msg.match(/go to|navigate to|take me to|show me|scroll to|bring me to/i)) {
            const target = msg.replace(/go to|navigate to|take me to|show me|scroll to|bring me to/i, '').trim();
            
            if (target.match(/home|hero|top|main|landing|start/i)) {
                navigateToSection(PORTFOLIO.sections.home);
                return `◆ NAVIGATING TO HOME\n\nReturning to the main landing section.`;
            }
            if (target.match(/service|offer|solution|what i offer/i)) {
                navigateToSection(PORTFOLIO.sections.services);
                return `◆ NAVIGATING TO SERVICES\n\nExploring professional offerings and solutions. Ask "What services?" for details.`;
            }
            if (target.match(/work|project|portfolio|showcase|creation|my work/i)) {
                navigateToSection(PORTFOLIO.sections.works);
                return `◆ NAVIGATING TO PORTFOLIO\n\nBrowsing latest projects and case studies. Ask "List projects" to see everything.`;
            }
            if (target.match(/resume|cv|experience|career|job history|background/i)) {
                navigateToSection(PORTFOLIO.sections.resume);
                return `◆ NAVIGATING TO RESUME\n\nViewing professional journey and qualifications. Ask "Work experience" for details.`;
            }
            if (target.match(/skill|expertise|tech stack|technologies|abilities/i)) {
                navigateToSection(PORTFOLIO.sections.skills);
                return `◆ NAVIGATING TO SKILLS\n\nExploring technical expertise and proficiencies. Ask "What skills?" for the full list.`;
            }
            if (target.match(/testimonial|review|feedback|client say|recommendation/i)) {
                navigateToSection(PORTFOLIO.sections.testimonials);
                return `◆ NAVIGATING TO TESTIMONIALS\n\nReading client success stories and feedback.`;
            }
            if (target.match(/blog|article|insight|post/i)) {
                navigateToSection(PORTFOLIO.sections.blog);
                return `◆ NAVIGATING TO BLOG\n\nDiscovering insights, tutorials, and industry thoughts.`;
            }
            if (target.match(/contact|reach|hire|get in touch|connect|message/i)) {
                navigateToSection(PORTFOLIO.sections.contact);
                return `◆ NAVIGATING TO CONTACT\n\nReady to start a conversation. Use the contact form or WhatsApp for quick replies.`;
            }
            return `◆ NAVIGATION ERROR\n\nI couldn't find a section matching "${target}".\n\nAvailable sections: Home, Services, Portfolio, Resume, Skills, Testimonials, Blog, Contact.\n\nExample: "Go to Portfolio" or "Take me to Services"`;
        }
        
        // ===== PROJECTS =====
        if (msg.match(/show|view|open|project about|tell me about|display|details of|more about/i)) {
            for (const p of PORTFOLIO.projects) {
                if (msg.includes(p.name.toLowerCase())) {
                    if (p.demoUrl && p.demoUrl !== '#') { 
                        openExternalLink(p.demoUrl); 
                        return `◆ OPENING PROJECT\n\n${p.name} — ${p.category}\n${p.description}\n\nLaunching project in new tab.`;
                    }
                    navigateToSection(p.sectionId);
                    return `◆ PROJECT FOUND\n\n${p.name} — ${p.category}\n${p.description}\n\nLocated in Portfolio section.`;
                }
            }
            return `◆ PROJECT INDEX\n\nPrince has ${PORTFOLIO.projects.length} projects:\n\n${PORTFOLIO.projects.map((p,i)=>`${i+1}. ${p.name} — ${p.category}`).join('\n')}\n\nTry "Show me AI Companion App" or "Tell me about Tech Startup Dashboard"`;
        }
        
        if (msg.match(/list projects|all projects|show projects|projects you|portfolio items|all work/i)) {
            return `◆ COMPLETE PROJECT LIST\n\n${PORTFOLIO.projects.map((p,i)=>`${i+1}. ${p.name}\n   ${p.category} — ${p.description}`).join('\n\n')}\n\nWant to see any of these? Say "Show me [project name]" to open it!`;
        }
        
        // ===== SKILLS =====
        if (msg.match(/what skills|technologies|tech stack|proficient in|languages known|can do|what can prince do|technical skills/i)) {
            return `◆ TECHNICAL SKILLS MATRIX\n\n◉ FRONTEND\n   ${PORTFOLIO.skills.frontend.map(s=>s.name).join(' • ')}\n\n◉ BACKEND\n   ${PORTFOLIO.skills.backend.map(s=>s.name).join(' • ')}\n\n◉ DESIGN\n   ${PORTFOLIO.skills.design.map(s=>s.name).join(' • ')}\n\nWant to know proficiency levels? Ask "How good is Prince at React?"`;
        }
        
        if (msg.match(/how good|proficiency|level|rate at|skill level|expertise in|good at|strong in/i)) {
            const skillMatch = msg.match(/at (.+)|in (.+)|with (.+)/i);
            if (skillMatch) {
                const searchTerm = (skillMatch[1] || skillMatch[2] || skillMatch[3]).toLowerCase();
                const allSkills = [...PORTFOLIO.skills.frontend, ...PORTFOLIO.skills.backend, ...PORTFOLIO.skills.design];
                const skill = allSkills.find(s => s.name.toLowerCase().includes(searchTerm));
                if (skill) {
                    const levelText = skill.level >= 90 ? 'EXPERT ⚡' : skill.level >= 80 ? 'ADVANCED 📈' : 'INTERMEDIATE 📚';
                    return `◆ SKILL ANALYSIS\n\n${skill.name}\n◉ Proficiency: ${skill.level}%\n◉ Status: ${levelText}\n◉ Continuously improving and learning new technologies.`;
                }
            }
            return `◆ SKILL INDEX\n\nAvailable skill checks:\n◉ React.js (95%)\n◉ JavaScript (92%)\n◉ TypeScript (90%)\n◉ UI/UX Design (95%)\n◉ Node.js (85%)\n◉ MongoDB (85%)\n◉ HTML/CSS (98%)\n\nExample: "How good is Prince at React?"`;
        }
        
        // ===== EXPERIENCE =====
        if (msg.match(/work experience|professional background|job history|where.*work|companies worked|career history|past jobs/i)) {
            return `◆ WORK EXPERIENCE\n\n${PORTFOLIO.experience.map(e => `◉ ${e.role}\n   Location: ${e.company}\n   Period: ${e.period}\n   Achievements:\n   → ${e.achievements.slice(0,2).join('\n   → ')}`).join('\n\n')}\n\nAsk about education for academic background.`;
        }
        
        // ===== EDUCATION =====
        if (msg.match(/education|studied|qualifications|degrees|certificates|academic|learning|school|college|academy/i)) {
            return `◆ EDUCATION HISTORY\n\n${PORTFOLIO.education.map(e => `◉ ${e.degree}\n   Institution: ${e.institution}\n   Period: ${e.period}`).join('\n\n')}\n\nPrince is a continuous learner who stays updated with the latest technologies.`;
        }
        
        // ===== SERVICES =====
        if (msg.match(/what services|offer|provide|do you do|help with|solutions|what can you do for me|services offered/i)) {
            return `◆ SERVICE CATALOG\n\n${PORTFOLIO.services.map(s => `◉ ${s.name}\n   ${s.description}`).join('\n\n')}\n\nEach service is tailored to client needs with premium quality delivery. Want details on any service? Just ask!`;
        }
        
        // ===== CONTACT =====
        if (msg.match(/contact|email|phone|reach|get in touch|message|how to reach|call|text|whatsapp|connect with prince/i)) {
            return `◆ CONTACT INFORMATION\n\n◉ Email: ${PORTFOLIO.owner.email}\n◉ Phone: ${PORTFOLIO.owner.phone[0]}\n◉ Location: ${PORTFOLIO.owner.location}\n◉ Response Time: ${PORTFOLIO.owner.responseTime}\n◉ Availability: ${PORTFOLIO.owner.availability}\n\nUse the contact form on this page or WhatsApp for the fastest response. Say "Go to Contact" to navigate there now!`;
        }
        
        // ===== PRICING =====
        if (msg.match(/price|cost|rate|budget|how much|pricing|fee|quote|estimate|charges|payment/i)) {
            return `◆ PRICING STRUCTURE\n\n◉ Small Projects: $500 - $2,000\n◉ Medium Projects: $2,000 - $5,000\n◉ Large Projects: $5,000 - $10,000+\n◉ Enterprise Solutions: Custom quote\n\nPrices vary based on:\n• Project complexity\n• Timeline requirements\n• Specific features needed\n\nContact for a free consultation and custom quote!`;
        }
        
        // ===== STATISTICS =====
        if (msg.match(/stats|statistics|numbers|achievements|milestones|metrics|performance|data|facts/i)) {
            return `◆ PERFORMANCE METRICS\n\n◉ ${PORTFOLIO.stats.yearsExperience}+ Years Experience\n◉ ${PORTFOLIO.stats.projectsCompleted}+ Projects Completed\n◉ ${PORTFOLIO.stats.clientSatisfaction}% Client Satisfaction\n◉ 24/7 Available Support\n◉ On-time Delivery: 98%\n◉ Client Retention: 95%\n\nImpressive numbers from consistent quality work!`;
        }
        
        // ===== AVAILABILITY =====
        if (msg.match(/available|when free|start date|timeline|hire|when can start|book|schedule/i)) {
            return `◆ AVAILABILITY STATUS\n\n◉ ${PORTFOLIO.owner.availability}\n◉ Response Time: ${PORTFOLIO.owner.responseTime}\n◉ Project Capacity: Currently accepting new clients\n◉ Preferred Communication: Email or WhatsApp\n\nReady to discuss your project! Say "Contact" to get in touch or "Go to Contact" to navigate.`;
        }
        
        // ===== SOCIAL MEDIA =====
        if (msg.match(/social|github|whatsapp|facebook|follow|connect|social media|profiles/i)) {
            return `◆ SOCIAL CONNECTIONS\n\n◉ GitHub: ${PORTFOLIO.social.github}\n◉ WhatsApp: ${PORTFOLIO.social.whatsapp}\n◉ Facebook: ${PORTFOLIO.social.facebook}\n◉ Email: ${PORTFOLIO.social.email}\n\nFollow or connect for updates, collaboration opportunities, and to see Prince's latest work!`;
        }
        
        // ===== HELP =====
        if (msg.match(/help|commands|what can i ask|how to use|guide|options|menu|what do you do|capabilities/i)) {
            return `◆ LUMI AI COMMAND GUIDE\n\n◉ NAVIGATION\n   "Go to Portfolio" — Navigate to any section\n   "Take me to Services" — Jump to services\n\n◉ ABOUT PRINCE\n   "Who is Prince?" — Biography\n   "What does Prince do?" — Profession\n\n◉ SKILLS\n   "What skills?" — Full technical list\n   "How good at React?" — Proficiency levels\n\n◉ PROJECTS\n   "List projects" — All portfolio items\n   "Show me AI Companion App" — Open project\n\n◉ INFORMATION\n   "Work experience" — Career history\n   "Contact info" — How to reach Prince\n   "Pricing" — Budget information\n   "Stats" — Key achievements\n\n◉ CONVERSATION\n   "Hello" — Start a conversation\n   "Thank you" — Appreciation\n   "Who are you?" — About Lumi AI\n\nType any of these commands or ask naturally!`;
        }
        
        // ===== FALLBACK (when AI doesn't understand) =====
        return `◆ I DIDN'T QUITE UNDERSTAND THAT\n\nI'm Lumi AI, your portfolio assistant. Here's what I CAN help with:\n\n◉ "Who is Prince?" — Learn about the portfolio owner\n◉ "Go to Portfolio" — Navigate sections\n◉ "What skills?" — Technical expertise\n◉ "Show me projects" — See portfolio work\n◉ "Contact info" — How to reach Prince\n◉ "Who are you?" — About Lumi AI\n◉ "Help" — Full command list\n\nTry rephrasing your question or use one of the suggested queries below!`;
    }
    
// ========== PREMIUM SOLID DARK THEME STYLES (No Glass Morphism) ==========
    const styles = `
        :root {
            --lumi-primary: #6366f1;
            --lumi-primary-dark: #4f46e5;
            --lumi-secondary: #8b5cf6;
            --lumi-accent: #a855f7;
            --lumi-success: #10b981;
            --lumi-glow: rgba(99, 102, 241, 0.4);
            --lumi-bg: #0f0f1a;
            --lumi-card: #1a1a2e;
            --lumi-card-light: #252540;
            --lumi-border: #2a2a4a;
            --lumi-text: #e0e0e0;
            --lumi-text-dim: #a0a0b0;
        }
        
        /* Floating Button */
        .lumi-btn {
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 68px;
            height: 68px;
            border-radius: 50%;
            background: linear-gradient(145deg, var(--lumi-primary), var(--lumi-secondary));
            border: none;
            cursor: pointer;
            z-index: 99998;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(99, 102, 241, 0.3);
            transition: all 0.4s cubic-bezier(0.34, 1.2, 0.64, 1);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .lumi-btn::before {
            content: '';
            position: absolute;
            inset: -3px;
            border-radius: 50%;
            background: linear-gradient(145deg, var(--lumi-primary), var(--lumi-accent));
            opacity: 0;
            transition: opacity 0.4s ease;
            z-index: -1;
        }
        
        .lumi-btn:hover::before { opacity: 1; filter: blur(8px); }
        .lumi-btn:hover { transform: scale(1.08) rotate(5deg); box-shadow: 0 12px 32px rgba(99, 102, 241, 0.4); }
        
        /* Tooltip */
        .lumi-btn::after {
            content: 'Ask Lumi AI anything';
            position: absolute;
            bottom: 80px;
            right: 0;
            background: var(--lumi-card);
            color: white;
            font-size: 12px;
            padding: 8px 16px;
            border-radius: 20px;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            font-weight: 500;
            letter-spacing: 0.3px;
            border: 1px solid var(--lumi-primary);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            pointer-events: none;
        }
        
        .lumi-btn:hover::after {
            opacity: 1;
            visibility: visible;
            transform: translateY(-5px);
        }
        
        .lumi-btn svg {
            width: 34px;
            height: 34px;
            stroke: white;
            stroke-width: 1.8;
            fill: none;
        }
        
        /* Chat Window - Solid Dark Theme */
        .lumi-chat {
            position: fixed;
            bottom: 100px;
            right: 24px;
            width: 500px;
            height: 680px;
            background: var(--lumi-bg);
            border-radius: 28px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            z-index: 99999;
            display: none;
            flex-direction: column;
            overflow: hidden;
            animation: slideUp 0.4s cubic-bezier(0.34, 1.2, 0.64, 1);
            border: 1px solid var(--lumi-border);
        }
        
        .lumi-chat.open { display: flex; }
        
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px) scale(0.96); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        /* Header */
        .lumi-header {
            background: linear-gradient(135deg, var(--lumi-card), var(--lumi-bg));
            padding: 20px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid var(--lumi-border);
        }
        
        .lumi-header-left { display: flex; align-items: center; gap: 16px; }
        
        .lumi-avatar {
            width: 52px;
            height: 52px;
            background: linear-gradient(145deg, var(--lumi-primary), var(--lumi-secondary));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }
        
        .lumi-avatar svg { width: 28px; height: 28px; stroke: white; fill: none; }
        
        .lumi-avatar::after {
            content: '';
            position: absolute;
            bottom: 3px;
            right: 3px;
            width: 12px;
            height: 12px;
            background: var(--lumi-success);
            border-radius: 50%;
            border: 2px solid var(--lumi-card);
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.15); }
        }
        
        .lumi-title { 
            font-weight: 800; 
            font-size: 20px; 
            background: linear-gradient(135deg, #fff, var(--lumi-primary)); 
            -webkit-background-clip: text; 
            -webkit-text-fill-color: transparent; 
            letter-spacing: -0.3px;
        }
        
        .lumi-status { font-size: 12px; color: var(--lumi-text-dim); display: flex; align-items: center; gap: 8px; margin-top: 4px; }
        
        .lumi-close {
            background: var(--lumi-card-light);
            border: 1px solid var(--lumi-border);
            width: 38px;
            height: 38px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        
        .lumi-close:hover { background: var(--lumi-primary); transform: rotate(90deg); border-color: var(--lumi-primary); }
        .lumi-close svg { width: 18px; height: 18px; stroke: white; }
        
        /* Messages Area */
        .lumi-messages {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 12px;
            background: var(--lumi-bg);
        }
        
        .lumi-messages::-webkit-scrollbar { width: 5px; }
        .lumi-messages::-webkit-scrollbar-track { background: var(--lumi-card); border-radius: 10px; }
        .lumi-messages::-webkit-scrollbar-thumb { background: linear-gradient(135deg, var(--lumi-primary), var(--lumi-secondary)); border-radius: 10px; }
        
        /* Message Bubbles */
        .lumi-msg {
            max-width: 85%;
            padding: 14px 18px;
            border-radius: 20px;
            font-size: 14px;
            line-height: 1.5;
            white-space: pre-line;
            animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        
        .lumi-msg.user {
            background: linear-gradient(135deg, var(--lumi-primary), var(--lumi-secondary));
            color: white;
            align-self: flex-end;
            border-bottom-right-radius: 5px;
        }
        
        .lumi-msg.bot {
            background: var(--lumi-card);
            color: var(--lumi-text);
            align-self: flex-start;
            border-bottom-left-radius: 5px;
            border: 1px solid var(--lumi-border);
        }
        
        /* Typing Indicator */
        .lumi-typing {
            display: flex;
            gap: 6px;
            padding: 14px 20px;
            background: var(--lumi-card);
            border-radius: 20px;
            align-self: flex-start;
            border-bottom-left-radius: 5px;
            border: 1px solid var(--lumi-border);
        }
        
        .lumi-typing span {
            width: 8px;
            height: 8px;
            background: var(--lumi-primary);
            border-radius: 50%;
            animation: typingAnim 1.4s infinite;
        }
        
        .lumi-typing span:nth-child(2) { animation-delay: 0.2s; }
        .lumi-typing span:nth-child(3) { animation-delay: 0.4s; }
        
        @keyframes typingAnim {
            0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
            30% { transform: translateY(-8px); opacity: 1; }
        }
        
        /* Collapsible Suggestions Header */
        .lumi-suggestions {
            padding: 14px 20px;
            background: var(--lumi-card);
            border-top: 1px solid var(--lumi-border);
            border-bottom: 1px solid var(--lumi-border);
        }
        
        .lumi-suggestions-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            padding: 4px 0;
            margin-bottom: 12px;
            user-select: none;
        }
        
        .lumi-suggestions-title {
            font-size: 11px;
            color: var(--lumi-text-dim);
            text-transform: uppercase;
            letter-spacing: 1.5px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .lumi-suggestions-title svg { 
            width: 12px; 
            height: 12px; 
            stroke: var(--lumi-text-dim);
            fill: none;
        }
        
        .lumi-toggle-icon {
            background: var(--lumi-card-light);
            border: 1px solid var(--lumi-border);
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .lumi-toggle-icon svg {
            width: 14px;
            height: 14px;
            stroke: var(--lumi-text-dim);
            transition: transform 0.3s ease;
            fill: none;
        }
        
        .lumi-toggle-icon:hover {
            background: var(--lumi-primary);
            border-color: var(--lumi-primary);
        }
        
        .lumi-toggle-icon:hover svg {
            stroke: white;
        }
        
        .lumi-toggle-icon.rotated svg {
            transform: rotate(180deg);
        }
        
        /* Collapsible Content */
        .lumi-suggestions-content {
            max-height: 200px;
            overflow: hidden;
            transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .lumi-suggestions-content.collapsed {
            max-height: 0;
        }
        
        .lumi-suggestions-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 4px;
        }
        
        .lumi-chip {
            background: var(--lumi-card-light);
            border: 1px solid var(--lumi-border);
            border-radius: 40px;
            padding: 8px 16px;
            font-size: 12px;
            color: var(--lumi-text);
            cursor: pointer;
            transition: all 0.25s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 500;
        }
        
        .lumi-chip svg { 
            width: 14px; 
            height: 14px; 
            stroke: var(--lumi-primary);
            fill: none;
        }
        
        .lumi-chip:hover { 
            background: var(--lumi-primary); 
            border-color: var(--lumi-primary); 
            transform: translateY(-2px); 
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
            color: white;
        }
        
        .lumi-chip:hover svg {
            stroke: white;
        }
        
        /* Input Area */
        .lumi-input-area {
            padding: 16px 20px;
            background: var(--lumi-card);
            display: flex;
            gap: 12px;
            align-items: center;
        }
        
        .lumi-input-wrapper { flex: 1; }
        
        .lumi-input {
            width: 100%;
            background: var(--lumi-bg);
            border: 1px solid var(--lumi-border);
            padding: 14px 18px;
            border-radius: 40px;
            color: white;
            font-size: 14px;
            outline: none;
            transition: all 0.3s ease;
        }
        
        .lumi-input:focus { 
            border-color: var(--lumi-primary); 
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }
        
        .lumi-input::placeholder { color: var(--lumi-text-dim); }
        
        .lumi-send {
            background: linear-gradient(135deg, var(--lumi-primary), var(--lumi-secondary));
            border: none;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        
        .lumi-send:hover { transform: scale(1.05); box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4); }
        .lumi-send svg { width: 22px; height: 22px; stroke: white; fill: none; }
        
        /* Mobile Responsive */
        @media (max-width: 560px) {
            .lumi-chat { width: calc(100vw - 40px); right: 20px; left: 20px; bottom: 85px; height: 580px; }
            .lumi-btn { bottom: 20px; right: 20px; width: 58px; height: 58px; }
            .lumi-btn svg { width: 30px; height: 30px; }
            .lumi-chip { padding: 6px 12px; font-size: 10px; }
            .lumi-suggestions-grid { gap: 8px; }
        }
    `;
    
    // Inject styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    
    // Create UI Elements
    const button = document.createElement('div');
    button.className = 'lumi-btn';
    button.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10"/><path d="M12 2a10 10 0 0 0-10 10c0 5.5 4.5 10 10 10"/><path d="M12 6v6l4 2"/><circle cx="8.5" cy="11.5" r="1.5" fill="white" stroke="none"/><circle cx="15.5" cy="11.5" r="1.5" fill="white" stroke="none"/></svg>`;
    
    const chat = document.createElement('div');
    chat.className = 'lumi-chat';
    chat.innerHTML = `
        <div class="lumi-header">
            <div class="lumi-header-left">
                <div class="lumi-avatar">
                    <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10"/><circle cx="8.5" cy="10.5" r="1.5" fill="white" stroke="none"/><circle cx="15.5" cy="10.5" r="1.5" fill="white" stroke="none"/><path d="M9 15h6" stroke-width="1.5"/></svg>
                </div>
                <div>
                    <div class="lumi-title">LUMI AI</div>
                    <div class="lumi-status"><span style="width:8px;height:8px;background:#10b981;border-radius:50%;display:inline-block;"></span> Neural Interface • Online</div>
                </div>
            </div>
            <button class="lumi-close"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
        </div>
        <div class="lumi-messages">
            <div class="lumi-msg bot">
                <strong>◆ LUMI AI ONLINE</strong><br><br>
                Neural interface active. I can navigate projects, analyze skills, and connect you with Prince's work.<br><br>
                <strong>◆ QUICK COMMANDS</strong><br>
                ◉ "Go to Portfolio" — Navigate sections<br>
                ◉ "Show me AI Companion App" — Open projects<br>
                ◉ "What skills?" — Technical expertise<br>
                ◉ "Contact info" — Get in touch<br><br>
                Type <strong>"Help"</strong> or select a suggestion below.
            </div>
        </div>
<div class="lumi-suggestions">
    <div class="lumi-suggestions-header" id="suggestionsToggle">
        <div class="lumi-suggestions-title">
            <svg viewBox="0 0 24 24" width="12" height="12">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4l3 3"/>
            </svg>
            SUGGESTED QUERIES
        </div>
        <div class="lumi-toggle-icon" id="toggleIcon">
            <svg viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9"/>
            </svg>
        </div>
    </div>
    <div class="lumi-suggestions-content" id="suggestionsContent">
        <div class="lumi-suggestions-grid" id="suggestionsGrid"></div>
    </div>
</div>
        <div class="lumi-input-area">
            <div class="lumi-input-wrapper"><input class="lumi-input" type="text" placeholder="Ask Lumi AI anything..." id="lumiInput" autocomplete="off"></div>
            <button class="lumi-send" id="lumiSend"><svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>
        </div>
    `;

    
    
    document.body.appendChild(button);
    document.body.appendChild(chat);

    
    
    // DOM Elements
    const messages = chat.querySelector('.lumi-messages');
    const input = chat.querySelector('#lumiInput');
    const sendBtn = chat.querySelector('#lumiSend');
    const closeBtn = chat.querySelector('.lumi-close');
    const suggestionsGrid = chat.querySelector('#suggestionsGrid');
    
    // Render suggestion chips
    function renderSuggestions() {
        suggestionsGrid.innerHTML = SUGGESTIONS.map(s => `
            <div class="lumi-chip" data-action="${s.action}">
                <svg viewBox="0 0 24 24">
                    ${s.icon === 'grid' ? '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>' : 
                      s.icon === 'code' ? '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>' : 
                      s.icon === 'briefcase' ? '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>' : 
                      s.icon === 'sparkles' ? '<path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z"/><path d="M12 18l-1 3-1-3-3-1 3-1 1-3 1 3 3 1z"/>' : 
                      s.icon === 'message' ? '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>' : 
                      s.icon === 'compass' ? '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14 12 10 14 12 10 16.24 7.76"/>' :
                      s.icon === 'dollar' ? '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>' :
                      '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'}
                </svg>
                ${s.text}
            </div>
        `).join('');
        
        document.querySelectorAll('.lumi-chip').forEach(chip => {
            chip.addEventListener('click', () => { input.value = chip.dataset.action; handleSend(); });
        });
    }
    
    function openChat() { chat.classList.add('open'); renderSuggestions(); input.focus(); }
    function closeChat() { chat.classList.remove('open'); }
    
    function addMessage(text, isUser) {
        const div = document.createElement('div');
        div.className = `lumi-msg ${isUser ? 'user' : 'bot'}`;
        div.innerHTML = text.replace(/\n/g, '<br>');
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }
    
    function showTyping() {
        const typing = document.createElement('div');
        typing.className = 'lumi-typing';
        typing.id = 'lumiTyping';
        typing.innerHTML = '<span></span><span></span><span></span>';
        messages.appendChild(typing);
        messages.scrollTop = messages.scrollHeight;
    }
    
    function hideTyping() { const t = document.getElementById('lumiTyping'); if (t) t.remove(); }
    
    function handleSend() {
        const message = input.value.trim();
        if (!message) return;
        
        addMessage(message, true);
        input.value = '';
        showTyping();
        
        setTimeout(() => {
            hideTyping();
            addMessage(getAIResponse(message), false);
            renderSuggestions();
        }, 500);
    }

    // Collapsible Suggestions Functionality
let isSuggestionsCollapsed = false;

function toggleSuggestions() {
    const content = document.getElementById('suggestionsContent');
    const icon = document.getElementById('toggleIcon');
    
    isSuggestionsCollapsed = !isSuggestionsCollapsed;
    
    if (isSuggestionsCollapsed) {
        content.classList.add('collapsed');
        icon.classList.add('rotated');
    } else {
        content.classList.remove('collapsed');
        icon.classList.remove('rotated');
    }
}

// Add click listener for toggle
document.addEventListener('click', function(e) {
    const toggleBtn = document.getElementById('toggleIcon');
    const header = document.getElementById('suggestionsToggle');
    
    if (toggleBtn && toggleBtn.contains(e.target)) {
        toggleSuggestions();
    } else if (header && header.contains(e.target) && !toggleBtn.contains(e.target)) {
        toggleSuggestions();
    }
});
    
    // Event Listeners
    button.addEventListener('click', openChat);
    closeBtn.addEventListener('click', closeChat);
    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSend(); });
    
    // Close on outside click
    document.addEventListener('click', (e) => {
        if (chat.classList.contains('open') && !chat.contains(e.target) && !button.contains(e.target)) closeChat();
    });
})();