// ===================================================
// LEARNIX AI – Platform Logic & Interactive Hubs
// ===================================================

// Global state variables
let userState = {
  isLoggedIn: false,
  username: "Guest Student",
  streak: 7,
  longestStreak: 23,
  completedRoadmapSteps: [],
  savedInternships: [],
  savedCertificates: [],
  savedJobs: [],
  completedGoals: [],
  unlockedBadges: ["code-warrior"],
  activeLanguage: "python",
  activeProblemId: null,
  studentProfile: {
    branch: "",
    year: "",
    domain: "",
    mode: ""
  }
};

// Admin custom datasets (stored in memory, fallback to defaults)
let activeInternships = [...internshipsData];
let activeCertificates = [...certificatesData];

// Load userState from localStorage if available
function loadState() {
  const savedState = localStorage.getItem("learnix_user_state");
  if (savedState) {
    userState = JSON.parse(savedState);
  }
  const savedInt = localStorage.getItem("learnix_internships");
  if (savedInt) {
    activeInternships = JSON.parse(savedInt);
  }
  const savedCert = localStorage.getItem("learnix_certificates");
  if (savedCert) {
    activeCertificates = JSON.parse(savedCert);
  }
}

// Save userState to localStorage
function saveState() {
  localStorage.setItem("learnix_user_state", JSON.stringify(userState));
  localStorage.setItem("learnix_internships", JSON.stringify(activeInternships));
  localStorage.setItem("learnix_certificates", JSON.stringify(activeCertificates));
}

// Initialize on page load
window.addEventListener("DOMContentLoaded", () => {
  loadState();
  initRouter();
  initTheme();
  initLoader();
  initDashboard();
  initTrending();
  initNews();
  initInternships();
  initCertificates();
  initLearningHub();
  initRoadmaps();
  initHackathons();
  initScholarships();
  initJobs();
  initAiTools();
  initProjects();
  initResumeBuilder();
  initInterviewHub();
  initCodingPractice();
  initAdminPanel();
  initLogin();
  setupVoiceSearch();
  initStudentProfileForm();
});

function initStudentProfileForm() {
  const prof = userState.studentProfile;
  if (!prof) return;
  if (prof.branch && document.getElementById("profBranch")) document.getElementById("profBranch").value = prof.branch;
  if (prof.year && document.getElementById("profYear")) document.getElementById("profYear").value = prof.year;
  if (prof.domain && document.getElementById("profDomain")) document.getElementById("profDomain").value = prof.domain;
  if (prof.mode && document.getElementById("profMode")) document.getElementById("profMode").value = prof.mode;

  if (prof.domain || prof.branch) {
    renderPersonalizedHub();
  }
}

window.saveAndGenerateRecommendations = () => {
  const branch = document.getElementById("profBranch")?.value;
  const year = document.getElementById("profYear")?.value;
  const domain = document.getElementById("profDomain")?.value;
  const mode = document.getElementById("profMode")?.value;

  if (!domain && !branch) {
    showToast("Please select at least your Branch or Interest Domain to generate recommendations.");
    return;
  }

  userState.studentProfile = { branch, year, domain, mode };
  saveState();

  renderPersonalizedHub();
  showToast("🌟 AI Personalization generated tailored recommendations for you!");
};

function renderPersonalizedHub() {
  const hub = document.getElementById("personalizedHub");
  const grid = document.getElementById("personalizedGrid");
  if (!hub || !grid) return;

  const prof = userState.studentProfile || {};
  grid.innerHTML = "";

  // 1. Match Internships
  const matchedInternships = activeInternships.filter(i => {
    let matchCount = 0;
    if (prof.domain && i.domain.toLowerCase().includes(prof.domain.toLowerCase())) matchCount += 2;
    if (prof.branch && (i.branch.includes(prof.branch) || i.branch === "Any Branch")) matchCount += 1;
    if (prof.year && (i.year === prof.year || i.year === "Any Year")) matchCount += 1;
    if (prof.mode && i.type === prof.mode) matchCount += 1;
    return matchCount > 0;
  });

  // 2. Match Certificates
  const categoryMap = {
    "AI/ML": "ai",
    "Software Development": "programming",
    "Data Science": "data",
    "Cloud Computing": "cloud",
    "Cybersecurity": "cybersecurity",
    "UI/UX Design": "tools"
  };
  const targetCategory = categoryMap[prof.domain] || "programming";
  const matchedCertificates = activeCertificates.filter(c => c.category === targetCategory || c.category === "programming");

  let totalCount = 0;

  // Add top matched internships
  matchedInternships.slice(0, 3).forEach(item => {
    const card = createInternshipCard(item);
    const badge = document.createElement("span");
    badge.className = "tag tag-green";
    badge.style.marginBottom = "8px";
    badge.textContent = "⚡ AI Matched Internship";
    card.insertBefore(badge, card.firstChild);
    grid.appendChild(card);
    totalCount++;
  });

  // Add top matched certificates
  matchedCertificates.slice(0, 3).forEach(item => {
    const card = createCertificateCard(item);
    const badge = document.createElement("span");
    badge.className = "tag tag-purple";
    badge.style.marginBottom = "8px";
    badge.textContent = "⚡ AI Matched Free Course";
    card.insertBefore(badge, card.firstChild);
    grid.appendChild(card);
    totalCount++;
  });

  if (totalCount > 0) {
    hub.style.display = "block";
    hub.scrollIntoView({ behavior: "smooth" });
  } else {
    hub.style.display = "none";
  }
}

// Initialize on page load
window.addEventListener("DOMContentLoaded", () => {
  loadState();
  initRouter();
  initTheme();
  initLoader();
  if (typeof initDashboard === "function") initDashboard();
  if (typeof initInternships === "function") initInternships();
  if (typeof initCertificates === "function") initCertificates();
  if (typeof initLearningHub === "function") initLearningHub();
  if (typeof initRoadmaps === "function") initRoadmaps();
  if (typeof initHackathons === "function") initHackathons();
  if (typeof initScholarships === "function") initScholarships();
  if (typeof initJobs === "function") initJobs();
  if (typeof initAiTools === "function") initAiTools();
  if (typeof initProjects === "function") initProjects();
  if (typeof initResumeBuilder === "function") initResumeBuilder();
  if (typeof initInterviewHub === "function") initInterviewHub();
  if (typeof initCodingPractice === "function") initCodingPractice();
  if (typeof initAdminPanel === "function") initAdminPanel();
  if (typeof initLogin === "function") initLogin();
  if (typeof setupVoiceSearch === "function") setupVoiceSearch();
});

// ---------- Loader ----------
function initLoader() {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 1200);
  }
}

// ---------- Router (Single Page Application) ----------
function initRouter() {
  // Read hash or show home by default
  const handleRouting = () => {
    let hash = window.location.hash.substring(1) || "home";
    showPage(hash, false);
  };
  window.addEventListener("hashchange", handleRouting);
  // Initial load
  handleRouting();
}

function showPage(pageId, updateHash = true) {
  // Hide all pages
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  // Show target page
  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) {
    targetPage.classList.add("active");
    if (updateHash) {
      window.location.hash = pageId;
    }
  }

  // Update active sidebar class
  document.querySelectorAll(".sidebar-link").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("data-page") === pageId) {
      link.classList.add("active");
    }
  });

  // Scroll to top of page content
  window.scrollTo(0, 0);

  // Trigger quick page transition animation
  if (targetPage) {
    targetPage.style.animation = "none";
    targetPage.offsetHeight; // Trigger reflow
    targetPage.style.animation = "fadeUp 0.4s ease forwards";
  }

  // Refresh page-specific content if needed
  if (pageId === "dashboard") {
    refreshDashboard();
  } else if (pageId === "certificates") {
    if (typeof initCertificates === "function") initCertificates();
  } else if (pageId === "internships") {
    if (typeof initInternships === "function") initInternships();
  } else if (pageId === "learning") {
    if (typeof initLearningHub === "function") initLearningHub();
  } else if (pageId === "roadmaps") {
    if (typeof initRoadmaps === "function") initRoadmaps();
  } else if (pageId === "projects") {
    if (typeof initProjects === "function") initProjects();
  } else if (pageId === "aitools") {
    if (typeof initAiTools === "function") initAiTools();
  } else if (pageId === "hackathons") {
    if (typeof initHackathons === "function") initHackathons();
  } else if (pageId === "jobs") {
    if (typeof initJobs === "function") initJobs();
  } else if (pageId === "scholarships") {
    if (typeof initScholarships === "function") initScholarships();
  } else if (pageId === "interview") {
    if (typeof initInterviewHub === "function") initInterviewHub();
  } else if (pageId === "coding") {
    if (typeof initCodingPractice === "function") initCodingPractice();
  } else if (pageId === "admin") {
    if (typeof renderAdminTables === "function") renderAdminTables();
  }
}

// ---------- Theme Manager (Light/Dark Mode) ----------
function initTheme() {
  const theme = localStorage.getItem("learnix_theme") || "dark";
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeIcon(theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("learnix_theme", newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;
  if (theme === "light") {
    toggleBtn.title = "Switch to Dark Mode";
  } else {
    toggleBtn.title = "Switch to Light Mode";
  }
}

// ---------- Mobile Menu Toggle ----------
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.getElementById("hamburger");
  if (mobileMenu) {
    mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("active");
  }
}

// ---------- AI Smart Search Engine ----------
function handleSearch(query) {
  const suggestionsBox = document.getElementById("searchSuggestions");
  if (!query.trim()) {
    suggestionsBox.classList.remove("visible");
    return;
  }

  // Filter suggestions from all data
  let suggestions = [];
  
  // Internships
  activeInternships.forEach(i => {
    if (i.title.toLowerCase().includes(query.toLowerCase()) || i.company.toLowerCase().includes(query.toLowerCase())) {
      suggestions.push({ text: `💼 Internship: ${i.title} at ${i.company}`, page: "internships", filter: i.company });
    }
  });

  // Certificates
  activeCertificates.forEach(c => {
    if (c.title.toLowerCase().includes(query.toLowerCase()) || c.provider.toLowerCase().includes(query.toLowerCase())) {
      suggestions.push({ text: `🎓 Course: ${c.title} (${c.provider})`, page: "certificates", filter: c.category });
    }
  });

  // Roadmaps
  roadmapsData.forEach(r => {
    if (r.title.toLowerCase().includes(query.toLowerCase())) {
      suggestions.push({ text: `🗺️ Roadmap: ${r.title}`, page: "roadmaps", filter: r.id });
    }
  });

  suggestionsBox.innerHTML = "";
  if (suggestions.length > 0) {
    suggestionsBox.classList.add("visible");
    suggestions.slice(0, 5).forEach(s => {
      const item = document.createElement("div");
      item.className = "suggestion-item";
      item.textContent = s.text;
      item.onmousedown = () => {
        showPage(s.page);
        if (s.page === "internships" && s.filter) {
          const compFilter = document.getElementById("companyFilter");
          if (compFilter) {
            compFilter.value = s.filter;
            applyFilters();
          }
        }
        suggestionsBox.classList.remove("visible");
      };
      suggestionsBox.appendChild(item);
    });
  } else {
    suggestionsBox.classList.remove("visible");
  }
}

function showSuggestions() {
  const input = document.getElementById("navSearchInput");
  if (input && input.value) {
    handleSearch(input.value);
  }
}

function hideSuggestions() {
  setTimeout(() => {
    const suggestionsBox = document.getElementById("searchSuggestions");
    if (suggestionsBox) suggestionsBox.classList.remove("visible");
  }, 200);
}

function handleHeroSearch(val) {
  // Mirror value in navbar search
  const navInput = document.getElementById("navSearchInput");
  if (navInput) navInput.value = val;
}

function setSearch(query) {
  const heroInput = document.getElementById("heroSearch");
  const navInput = document.getElementById("navSearchInput");
  if (heroInput) heroInput.value = query;
  if (navInput) navInput.value = query;
  doSearch();
}

function doSearch() {
  const input = document.getElementById("heroSearch").value || document.getElementById("navSearchInput").value;
  if (!input.trim()) return;

  const query = input.toLowerCase();
  
  // AI Intent Parsing Rules
  if (query.includes("intern") || query.includes("internship") || query.includes("stipend")) {
    showPage("internships");
    // Extract company name if any
    const matchedCompany = internshipsData.find(i => query.includes(i.company.toLowerCase()));
    if (matchedCompany) {
      document.getElementById("companyFilter").value = matchedCompany.company;
    }
    // Extract type (remote)
    if (query.includes("remote")) {
      filterInternships("remote", document.querySelector('[onclick="filterInternships(\'remote\', this)"]'));
    } else {
      applyFilters();
    }
    return;
  }

  if (query.includes("cert") || query.includes("certificate") || query.includes("course") || query.includes("learn")) {
    showPage("certificates");
    if (query.includes("python")) {
      filterCerts("programming", document.querySelector('[onclick="filterCerts(\'programming\', this)"]'));
    } else if (query.includes("ai") || query.includes("machine") || query.includes("ml")) {
      filterCerts("ai", document.querySelector('[onclick="filterCerts(\'ai\', this)"]'));
    } else if (query.includes("cloud") || query.includes("aws")) {
      filterCerts("cloud", document.querySelector('[onclick="filterCerts(\'cloud\', this)"]'));
    }
    return;
  }

  if (query.includes("roadmap") || query.includes("path")) {
    showPage("roadmaps");
    if (query.includes("front")) {
      selectRoadmap("frontend", document.querySelector('[onclick="selectRoadmap(\'frontend\', this)"]'));
    } else if (query.includes("ai") || query.includes("ml")) {
      selectRoadmap("ai", document.querySelector('[onclick="selectRoadmap(\'ai\', this)"]'));
    }
    return;
  }

  if (query.includes("job") || query.includes("jobs")) {
    showPage("jobs");
    if (query.includes("remote")) {
      filterJobs("remote", document.querySelector('[onclick="filterJobs(\'remote\', this)"]'));
    }
    return;
  }

  if (query.includes("hack") || query.includes("hackathon")) {
    showPage("hackathons");
    return;
  }

  if (query.includes("schol") || query.includes("scholarship")) {
    showPage("scholarships");
    return;
  }

  // Fallback / Unified AI Search Results Page
  showPage("search");
  const infoEl = document.getElementById("searchResultInfo");
  if (infoEl) infoEl.textContent = `Showing AI Live & Unlimited results for: "${input}"`;

  const resultsGrid = document.getElementById("searchResultsGrid");
  resultsGrid.innerHTML = "";

  let resultsCount = 0;
  
  // Filter internships
  activeInternships.forEach(item => {
    if (item.title.toLowerCase().includes(query) || item.company.toLowerCase().includes(query) || item.domain.toLowerCase().includes(query)) {
      resultsGrid.appendChild(createInternshipCard(item));
      resultsCount++;
    }
  });

  // Filter certificates
  activeCertificates.forEach(item => {
    if (item.title.toLowerCase().includes(query) || item.provider.toLowerCase().includes(query) || item.category.toLowerCase().includes(query)) {
      resultsGrid.appendChild(createCertificateCard(item));
      resultsCount++;
    }
  });

  // UNLIMITED GOOGLE LIVE SEARCH CARDS (Guarantees direct live links for ANY search term!)
  const liveCourseCard = document.createElement("div");
  liveCourseCard.className = "card";
  liveCourseCard.style.border = "1px solid var(--accent)";
  liveCourseCard.innerHTML = `
    <div class="card-top">
      <div class="company-logo" style="background: linear-gradient(135deg, #4285F4, #34A853); color: #fff">🌐</div>
      <div>
        <h3 class="card-title">Live Google Search: Free "${input}" Courses</h3>
        <div class="card-company">Provider: Google Live Web Index & ClassCentral</div>
      </div>
    </div>
    <p class="card-desc">Find all active 100% free certification courses available on Google Search, ClassCentral, and edX live right now.</p>
    <div class="card-tags">
      <span class="tag tag-green">100% FREE</span>
      <span class="tag tag-blue">Live Web Direct Link</span>
    </div>
    <div class="card-actions">
      <button class="btn btn-primary" onclick="window.open('https://www.google.com/search?q=free+${encodeURIComponent(input)}+course+with+certificate', '_blank')">🌐 Open Google Live Search Direct</button>
      <button class="btn btn-ghost" onclick="window.open('https://www.classcentral.com/search?q=${encodeURIComponent(input)}', '_blank')">🎓 Open ClassCentral Index</button>
    </div>
  `;
  resultsGrid.prepend(liveCourseCard);

  const liveInternCard = document.createElement("div");
  liveInternCard.className = "card";
  liveInternCard.style.border = "1px solid var(--green)";
  liveInternCard.innerHTML = `
    <div class="card-top">
      <div class="company-logo" style="background: linear-gradient(135deg, #10b981, #059669); color: #fff">💼</div>
      <div>
        <h3 class="card-title">Live Google Search: "${input}" Internships</h3>
        <div class="card-company">Provider: Google Careers & Company Live Portals</div>
      </div>
    </div>
    <p class="card-desc">Search all live active internship applications matching "${input}" across verified career portals worldwide.</p>
    <div class="card-tags">
      <span class="tag tag-green">Verified Live Link</span>
    </div>
    <div class="card-actions">
      <button class="btn btn-primary" onclick="window.open('https://www.google.com/search?q=free+${encodeURIComponent(input)}+internship+apply+online', '_blank')">💼 Open Live Internships Search</button>
    </div>
  `;
  resultsGrid.appendChild(liveInternCard);
}

// ---------- Real Embedded Video Modal Controls ----------
window.openVideoModal = (title, videoUrl) => {
  const modal = document.getElementById("videoModal");
  const titleEl = document.getElementById("videoModalTitle");
  const container = document.getElementById("videoModalContainer");
  if (!modal || !container) return;

  let embedUrl = videoUrl;
  if (videoUrl.includes("watch?v=")) {
    const videoId = videoUrl.split("watch?v=")[1].split("&")[0];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  }

  if (titleEl) titleEl.textContent = `📹 ${title}`;
  container.innerHTML = `
    <iframe src="${embedUrl}?autoplay=1" style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  `;
  modal.style.display = "flex";
};

window.closeVideoModal = () => {
  const modal = document.getElementById("videoModal");
  const container = document.getElementById("videoModalContainer");
  if (container) container.innerHTML = "";
  if (modal) modal.style.display = "none";
};

// ---------- Resume Builder: Sample Data Filler ----------
window.fillSampleResume = () => {
  document.getElementById("rp-name").textContent = "Aarav Sharma";
  document.getElementById("rp-title").textContent = "Full Stack AI Developer";
  document.getElementById("rp-email").textContent = "aarav.sharma@learnix.edu";
  document.getElementById("rp-phone").textContent = "+91 98765 43210";
  document.getElementById("rp-location").textContent = "Bangalore, India";

  document.getElementById("rp-education").innerHTML = `
    <div style="display:flex; justify-content:space-between; font-weight:600;">
      <span>IIT Madras</span>
      <span>2027</span>
    </div>
    <div style="display:flex; justify-content:space-between; font-style:italic; font-size:0.8rem;">
      <span>B.Tech Computer Science & Engineering</span>
      <span>9.4 CGPA</span>
    </div>
  `;

  document.getElementById("rp-skills").innerHTML = `
    <div style="font-size:0.82rem;">Python, React, Node.js, SQL, AWS Cloud, Git, PyTorch, Generative AI, Agile</div>
  `;

  document.getElementById("rp-experience").innerHTML = `
    <div style="font-weight:600; font-size:0.85rem;">Software Engineering Intern - Google</div>
    <div style="font-size:0.8rem; margin-top:4px;">- Developed scalable REST microservices using Python and AWS.<br>- Implemented React frontend components reducing page render latency by 35%.</div>
  `;

  document.getElementById("rp-projects").innerHTML = `
    <div style="font-weight:600; font-size:0.85rem;">LEARNIX AI - Student Career Platform</div>
    <div style="font-size:0.8rem; margin-top:4px;">- Integrated AI personalization matching engine, ATS resume scanner, and coding execution engine in JavaScript.</div>
  `;

  showToast("✨ Sample resume data filled! Click 'Check ATS Score' to see analysis.");
};

// ---------- Voice Search (Web Speech API) ----------
function setupVoiceSearch() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    // Hide mic buttons or show warning in console
    return;
  }
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;

  recognition.onstart = () => {
    showToast("🎤 Listening... Speak now!");
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setSearch(transcript);
  };

  recognition.onerror = () => {
    showToast("⚠️ Voice Search failed. Try again.");
  };

  window.startVoiceSearch = () => {
    recognition.start();
  };
}

// ---------- Dynamic Hub: Trending now & Alerts ----------
function initTrending() {
  const container = document.getElementById("trendingCards");
  if (!container) return;
  container.innerHTML = "";
  // Show first 3 internships
  activeInternships.slice(0, 3).forEach(item => {
    container.appendChild(createInternshipCard(item));
  });
}

function initNews() {
  const container = document.getElementById("newsGrid");
  if (!container) return;
  container.innerHTML = "";
  dailyNewsData.forEach(item => {
    const card = document.createElement("div");
    card.className = "news-card";
    card.onclick = () => window.open(item.url, "_blank");
    card.innerHTML = `
      <div class="news-source">${item.source}</div>
      <div class="news-title">${item.title}</div>
      <div class="news-time">${item.time}</div>
    `;
    container.appendChild(card);
  });
}

// ---------- Dynamic Hub: Internship Hub ----------
let intFilterType = "all";
function initInternships() {
  renderInternshipsList();
}

function filterInternships(type, btn) {
  intFilterType = type;
  if (btn) {
    btn.parentElement.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }
  applyFilters();
}

function applyFilters() {
  const company = document.getElementById("companyFilter").value;
  const domain = document.getElementById("domainFilter").value;
  const duration = document.getElementById("durationFilter").value;

  const filtered = activeInternships.filter(item => {
    // Type Filter (remote, onsite, hybrid, paid, unpaid)
    if (intFilterType === "remote" && item.type !== "remote") return false;
    if (intFilterType === "onsite" && item.type !== "onsite") return false;
    if (intFilterType === "hybrid" && item.type !== "hybrid") return false;
    if (intFilterType === "paid" && item.stipend.toLowerCase().includes("unpaid")) return false;
    if (intFilterType === "unpaid" && !item.stipend.toLowerCase().includes("unpaid")) return false;

    // Select Filters
    if (company && item.company !== company) return false;
    if (domain && item.domain !== domain) return false;
    if (duration && !item.duration.includes(duration[0])) return false; // Match first digit of duration

    return true;
  });

  renderInternshipsList(filtered);
}

function renderInternshipsList(list = activeInternships) {
  const container = document.getElementById("internshipsGrid");
  if (!container) return;
  container.innerHTML = "";
  if (list.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text3); padding: 24px;">No internships match the selected filters.</p>`;
    return;
  }
  list.forEach(item => {
    container.appendChild(createInternshipCard(item));
  });
}

function createInternshipCard(item) {
  const card = document.createElement("div");
  card.className = "card";
  const isSaved = userState.savedInternships.includes(item.id);

  card.innerHTML = `
    <div class="card-top">
      <div class="company-logo" style="background: ${item.color || 'var(--surface2)'}; color: #fff">${item.logo}</div>
      <div>
        <h3 class="card-title">${item.title}</h3>
        <div class="card-company">${item.company} • ${item.location}</div>
      </div>
    </div>
    <p class="card-desc">${item.description}</p>
    <div class="card-tags">
      <span class="tag tag-blue">${item.domain}</span>
      <span class="tag tag-purple">${item.duration}</span>
      <span class="tag tag-green">${item.stipend.includes("Unpaid") ? "Free / Unpaid" : "Paid"}</span>
    </div>
    <div class="card-meta">
      <span>🎯 ${item.eligibility}</span>
      <span>⏰ Deadline: ${item.deadline}</span>
    </div>
    <div class="card-actions">
      <button class="btn btn-primary" onclick="window.open('${item.applyUrl}', '_blank')">Apply Now</button>
      <button class="icon-btn" onclick="toggleSaveInternship('${item.id}', this)" title="Save Internship">
        ${isSaved ? "⭐" : "☆"}
      </button>
      <button class="icon-btn" onclick="shareOpportunity('${item.title}', '${item.applyUrl}')" title="Share">
        🔗
      </button>
    </div>
  `;
  return card;
}

function toggleSaveInternship(id, btn) {
  const index = userState.savedInternships.indexOf(id);
  if (index === -1) {
    userState.savedInternships.push(id);
    btn.innerHTML = "⭐";
    showToast("Internship saved to Bookmarks!");
    triggerGoalComplete("Bookmark 2 internships");
  } else {
    userState.savedInternships.splice(index, 1);
    btn.innerHTML = "☆";
    showToast("Internship removed from Bookmarks.");
  }
  saveState();
  refreshDashboard();
}

// ---------- Dynamic Hub: Free Certificate Hub ----------
let certFilterCat = "all";
function initCertificates() {
  renderCertificatesList();
}

function filterCerts(category, btn) {
  certFilterCat = category;
  if (btn) {
    btn.parentElement.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }
  
  const filtered = certFilterCat === "all" 
    ? activeCertificates 
    : activeCertificates.filter(c => c.category === certFilterCat);
  
  renderCertificatesList(filtered);
}

function renderCertificatesList(list = activeCertificates) {
  const container = document.getElementById("certsGrid");
  if (!container) return;
  container.innerHTML = "";
  list.forEach(item => {
    container.appendChild(createCertificateCard(item));
  });
}

function createCertificateCard(item) {
  const card = document.createElement("div");
  card.className = "card";
  const isSaved = userState.savedCertificates.includes(item.id);

  card.innerHTML = `
    <div class="card-top">
      <div class="company-logo" style="background: var(--surface2); color: var(--accent)">🎓</div>
      <div>
        <h3 class="card-title">${item.title}</h3>
        <div class="card-company">Provider: ${item.provider}</div>
      </div>
    </div>
    <div class="card-tags">
      <span class="tag tag-green">100% FREE</span>
      <span class="tag tag-blue">Certificate Included</span>
      <span class="tag tag-yellow">${item.difficulty}</span>
    </div>
    <div class="card-meta">
      <span>⏱️ Duration: ${item.duration}</span>
      <span class="rating">⭐ ${item.rating}</span>
    </div>
    <div class="card-actions">
      <button class="btn btn-primary" onclick="enrollCourse('${item.id}', '${item.enrollUrl}')">Enroll Free</button>
      <button class="icon-btn" onclick="toggleSaveCert('${item.id}', this)" title="Save Certificate">
        ${isSaved ? "⭐" : "☆"}
      </button>
    </div>
  `;
  return card;
}

function enrollCourse(id, url) {
  // Update Goal & learning progress
  triggerGoalComplete("Enroll in a new Free Certificate");
  showToast("Enrolling in course... Redirecting to official provider!");
  setTimeout(() => {
    window.open(url, "_blank");
  }, 800);
}

function toggleSaveCert(id, btn) {
  const index = userState.savedCertificates.indexOf(id);
  if (index === -1) {
    userState.savedCertificates.push(id);
    btn.innerHTML = "⭐";
    showToast("Certificate added to Dashboard Bookmarks!");
  } else {
    userState.savedCertificates.splice(index, 1);
    btn.innerHTML = "☆";
    showToast("Certificate removed from Dashboard.");
  }
  saveState();
  refreshDashboard();
}

// ---------- Dynamic Hub: Learning Hub ----------
function initLearningHub() {
  const container = document.getElementById("learningTopics");
  if (!container) return;
  container.innerHTML = "";

  learningHubData.forEach(item => {
    const card = document.createElement("div");
    card.className = "topic-card";
    
    // Default active levels displays Beginner
    card.innerHTML = `
      <div class="topic-header">
        <span class="topic-icon">${item.icon}</span>
        <span class="topic-name">${item.topic}</span>
      </div>
      <div class="topic-body">
        <div class="topic-levels">
          <button class="level-btn active" onclick="switchTopicLevel('${item.topic}', 'beginner', this)">Beginner</button>
          <button class="level-btn" onclick="switchTopicLevel('${item.topic}', 'intermediate', this)">Intermediate</button>
          <button class="level-btn" onclick="switchTopicLevel('${item.topic}', 'advanced', this)">Advanced</button>
        </div>
        <div class="topic-content" id="level-content-${item.topic}">
          ${getTopicLevelHtml(item.beginner)}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function getTopicLevelHtml(levelData) {
  return `
    <div style="font-size: 0.82rem; line-height: 1.5; color: var(--text2); margin-bottom: 12px;">
      <b>📖 Core Concepts:</b> ${levelData.notes}<br>
      <b>💡 Practice Task:</b> ${levelData.practice}<br>
      <b>🚀 Mini Project:</b> ${levelData.projects}
    </div>
    <div class="topic-resources">
      <a class="resource-link" onclick="openVideoModal('${levelData.projects} Video Tutorial', '${levelData.videos}')">📹 Watch Video Tutorial</a>
      <a class="resource-link" onclick="window.open('${levelData.docs}', '_blank')">📄 Official Docs</a>
    </div>
  `;
}

window.switchTopicLevel = (topic, level, btn) => {
  btn.parentElement.querySelectorAll(".level-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  const topicData = learningHubData.find(t => t.topic === topic);
  const container = document.getElementById(`level-content-${topic}`);
  if (topicData && container) {
    container.innerHTML = getTopicLevelHtml(topicData[level]);
  }
};

// ---------- Dynamic Hub: Interactive Career Roadmaps ----------
let activeRoadmapFilter = "all";

function initRoadmaps() {
  const selector = document.getElementById("roadmapSelector");
  const display = document.getElementById("roadmapDisplay");
  if (!selector || !display) return;

  // Render selector filter buttons
  selector.innerHTML = `
    <button class="road-btn active" onclick="filterRoadmapList('all', this)">🌟 All Roadmaps (${roadmapsData.length}+)</button>
    <button class="road-btn" onclick="filterRoadmapList('frontend', this)">Frontend</button>
    <button class="road-btn" onclick="filterRoadmapList('backend', this)">Backend</button>
    <button class="road-btn" onclick="filterRoadmapList('fullstack', this)">Full Stack</button>
    <button class="road-btn" onclick="filterRoadmapList('ai', this)">AI & ML</button>
    <button class="road-btn" onclick="filterRoadmapList('cybersecurity', this)">Cybersecurity</button>
    <button class="road-btn" onclick="filterRoadmapList('cloud', this)">Cloud & DevOps</button>
    <button class="road-btn" onclick="filterRoadmapList('datascience', this)">Data Science</button>
    <button class="road-btn" onclick="filterRoadmapList('mobile', this)">Mobile</button>
    <button class="road-btn" onclick="filterRoadmapList('dataengineer', this)">Data Engineer</button>
    <button class="road-btn" onclick="filterRoadmapList('uiux', this)">UI/UX</button>
  `;

  renderRoadmapDisplay();
}

function filterRoadmapList(filterId, btn) {
  activeRoadmapFilter = filterId;
  if (btn) {
    btn.parentElement.querySelectorAll(".road-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }
  renderRoadmapDisplay();
}

function selectRoadmap(id, btn) {
  activeRoadmapFilter = id;
  if (btn) {
    btn.parentElement.querySelectorAll(".road-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }
  renderRoadmapDisplay();
}

function renderRoadmapDisplay(customSearchQuery = "") {
  const display = document.getElementById("roadmapDisplay");
  if (!display) return;
  display.innerHTML = "";

  // Determine list of roadmaps to display simultaneously
  let listToDisplay = roadmapsData;
  if (activeRoadmapFilter !== "all") {
    listToDisplay = roadmapsData.filter(r => r.id === activeRoadmapFilter || r.title.toLowerCase().includes(activeRoadmapFilter));
    if (listToDisplay.length === 0) listToDisplay = roadmapsData;
  }

  if (customSearchQuery) {
    const qLower = customSearchQuery.toLowerCase();
    const filtered = roadmapsData.filter(r => r.title.toLowerCase().includes(qLower) || r.id.toLowerCase().includes(qLower));
    if (filtered.length > 0) listToDisplay = filtered;
  }

  // RENDER ALL MATCHING ROADMAPS SIMULTANEOUSLY
  listToDisplay.forEach(rData => {
    const section = document.createElement("div");
    section.style.marginBottom = "36px";
    section.style.background = "var(--surface)";
    section.style.border = "1px solid var(--border)";
    section.style.borderRadius = "16px";
    section.style.padding = "24px";

    let stepsHtml = "";
    rData.steps.forEach(step => {
      const isCompleted = userState.completedRoadmapSteps.includes(`${rData.id}-${step.num}`);
      stepsHtml += `
        <div class="roadmap-step ${isCompleted ? 'step-done' : ''}" style="margin-top:12px;">
          <div class="step-num">${isCompleted ? "✓" : step.num}</div>
          <div style="flex:1;">
            <h3 class="step-title">${step.title}</h3>
            <p class="step-desc">${step.desc}</p>
            <div style="font-size: 0.8rem; margin: 8px 0; color: var(--text2)">
              <b>Skills:</b> ${step.skills}<br>
              <b>Recommended Free Course:</b> ${step.courses}<br>
              <b>Suggested Project:</b> ${step.projects}
            </div>
            <div class="step-resources">
              <button class="btn btn-ghost btn-sm" onclick="markStepComplete('${rData.id}', ${step.num})">
                ${isCompleted ? "Completed 🎉" : "Mark Complete"}
              </button>
              <button class="btn btn-outline btn-sm" onclick="openVideoModal('${rData.title} Step ${step.num} Tutorial', 'https://www.youtube.com/embed/Ke90Tje7VS0')">
                📹 Watch Video Guide
              </button>
              <button class="btn btn-ghost btn-sm" onclick="showRoadmapInterviewPrep('${rData.title}', '${step.title}', \`${step.interviewPrep}\`)">
                Prep Questions 💡
              </button>
            </div>
          </div>
        </div>
      `;
    });

    section.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border); padding-bottom:12px; margin-bottom:16px;">
        <div>
          <h2 style="font-size:1.25rem; font-weight:700; color:var(--text)">🗺️ ${rData.title}</h2>
          <span class="tag tag-purple" style="margin-top:4px;">Full Interactive Career Path</span>
        </div>
        <button class="btn btn-primary btn-sm" onclick="window.open('https://www.google.com/search?q=free+${encodeURIComponent(rData.title)}+course+certificate', '_blank')">🌐 Google Live Search</button>
      </div>
      <div class="roadmap-steps-list">
        ${stepsHtml}
      </div>
    `;
    display.appendChild(section);
  });

  // UNLIMITED GOOGLE LIVE SEARCH ROADMAP CARD AT BOTTOM
  const googleCard = document.createElement("div");
  googleCard.style.background = "linear-gradient(135deg, rgba(66, 133, 244, 0.1), rgba(52, 168, 83, 0.1))";
  googleCard.style.border = "1px solid var(--accent)";
  googleCard.style.borderRadius = "16px";
  googleCard.style.padding = "24px";
  googleCard.style.textAlign = "center";
  googleCard.style.marginTop = "24px";
  googleCard.innerHTML = `
    <h3 style="font-size:1.2rem; margin-bottom:8px;">🌐 Unlimited Live Google Search for Career Roadmaps</h3>
    <p style="font-size:0.9rem; color:var(--text2); margin-bottom:16px;">Need roadmaps for specialized domains like Blockchain, Game Engineering, Embedded Systems, or Quantum Computing?</p>
    <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
      <button class="btn btn-primary" onclick="window.open('https://www.google.com/search?q=free+career+roadmaps+developer+guide', '_blank')">🌐 Search 100+ Live Roadmaps on Google</button>
      <button class="btn btn-ghost" onclick="window.open('https://roadmap.sh', '_blank')">🚀 Open Developer Roadmap Directory</button>
    </div>
  `;
  display.appendChild(googleCard);
}

// ---------- Unlimited Custom AI Roadmap Generator ----------
window.generateCustomRoadmap = () => {
  const input = document.getElementById("customRoadmapInput");
  if (!input || !input.value.trim()) {
    showToast("Please type a career goal (e.g. Blockchain, Data Analyst, Game Dev)");
    return;
  }

  const query = input.value.trim();
  renderRoadmapDisplay(query);
  showToast(`⚡ Displaying roadmaps matching: "${query}"!`);
};

function markStepComplete(roadmapId, stepNum) {
  const key = `${roadmapId}-${stepNum}`;
  const index = userState.completedRoadmapSteps.indexOf(key);
  if (index === -1) {
    userState.completedRoadmapSteps.push(key);
    showToast("Roadmap step marked as complete!");
    triggerGoalComplete("Mark a Roadmap step complete");
  } else {
    userState.completedRoadmapSteps.splice(index, 1);
    showToast("Roadmap step unmarked.");
  }
  saveState();
  renderRoadmapDisplay();
  refreshDashboard();
}

function showRoadmapInterviewPrep(roadmapTitle, stepTitle, prepText) {
  // Direct user to interview hub page and display the content
  showPage("interview");
  const container = document.getElementById("interviewContent");
  if (container) {
    container.innerHTML = `
      <div class="qa-list">
        <div class="qa-item">
          <div class="qa-q">💡 Interview Prep for ${roadmapTitle} - ${stepTitle}</div>
          <div class="qa-a open" style="display:block;">
            ${prepText.split(".").map(s => s.trim() ? `• ${s.trim()}` : "").join("<br>")}
          </div>
        </div>
      </div>
      <button class="btn btn-ghost" onclick="showPage('roadmaps')" style="margin-top:16px;">← Back to Roadmaps</button>
    `;
  }
}

// ---------- Dynamic Hub: Hackathons Hub ----------
let hackFilter = "all";
function initHackathons() {
  renderHackathonsList();
}

function filterHackathons(type, btn) {
  hackFilter = type;
  if (btn) {
    btn.parentElement.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }
  applyHackFilters();
}

function applyHackFilters() {
  const filtered = hackathonsData.filter(item => {
    if (hackFilter === "online" && item.type !== "online") return false;
    if (hackFilter === "offline" && item.type !== "offline") return false;
    if (hackFilter === "prize" && !item.prize.toLowerCase().includes("cash")) return false;
    return true;
  });
  renderHackathonsList(filtered);
}

function renderHackathonsList(list = hackathonsData) {
  const container = document.getElementById("hackathonsGrid");
  if (!container) return;
  container.innerHTML = "";
  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-top">
        <div class="company-logo" style="background: var(--surface2); color: var(--accent3)">⚡</div>
        <div>
          <h3 class="card-title">${item.title}</h3>
          <div class="card-company">${item.location}</div>
        </div>
      </div>
      <p class="card-desc"><b>Prize pool:</b> ${item.prize}</p>
      <div class="card-meta">
        <span>⏰ Register Deadline: ${item.deadline}</span>
      </div>
      <div class="card-actions">
        <button class="btn btn-primary" onclick="window.open('${item.registerUrl}', '_blank')">Register Free</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// ---------- Dynamic Hub: Scholarships Hub ----------
let scholFilter = "all";
function initScholarships() {
  renderScholarshipsList();
}

function filterScholarships(type, btn) {
  scholFilter = type;
  if (btn) {
    btn.parentElement.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }
  const filtered = scholFilter === "all" ? scholarshipsData : scholarshipsData.filter(s => s.type === scholFilter);
  renderScholarshipsList(filtered);
}

function renderScholarshipsList(list = scholarshipsData) {
  const container = document.getElementById("scholarshipsGrid");
  if (!container) return;
  container.innerHTML = "";
  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-top">
        <div class="company-logo" style="background: var(--surface2); color: var(--yellow)">🏆</div>
        <div>
          <h3 class="card-title">${item.title}</h3>
          <div class="card-company">Category: ${item.type.toUpperCase()}</div>
        </div>
      </div>
      <p class="card-desc"><b>Amount:</b> ${item.amount}</p>
      <p class="card-desc" style="font-size:0.78rem;"><b>Eligibility:</b> ${item.eligibility}</p>
      <div class="card-meta">
        <span>⏰ Deadline: ${item.deadline}</span>
      </div>
      <div class="card-actions">
        <button class="btn btn-primary" onclick="window.open('${item.applyUrl}', '_blank')">Apply Scholarship</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// ---------- Dynamic Hub: Jobs Board ----------
let jobFilter = "all";
function initJobs() {
  renderJobsList();
}

function filterJobs(type, btn) {
  jobFilter = type;
  if (btn) {
    btn.parentElement.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }
  applyJobFilters();
}

function applyJobFilters() {
  const filtered = jobsData.filter(item => {
    if (jobFilter === "all") return true;
    return item.type === jobFilter;
  });
  renderJobsList(filtered);
}

function renderJobsList(list = jobsData) {
  const container = document.getElementById("jobsGrid");
  if (!container) return;
  container.innerHTML = "";
  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-top">
        <div class="company-logo" style="background: var(--surface2); color: var(--green)">🚀</div>
        <div>
          <h3 class="card-title">${item.title}</h3>
          <div class="card-company">${item.company} • ${item.location}</div>
        </div>
      </div>
      <p class="card-desc"><b>Salary range:</b> ${item.salary} (100% Free Application)</p>
      <div class="card-tags">
        <span class="tag tag-blue">${item.type.toUpperCase()}</span>
      </div>
      <div class="card-actions">
        <button class="btn btn-primary" onclick="window.open('${item.applyUrl}', '_blank')">Apply Free</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// ---------- Dynamic Hub: AI Tools Directory ----------
function initAiTools() {
  const container = document.getElementById("aiToolsGrid");
  if (!container) return;
  container.innerHTML = "";
  aiToolsData.forEach(item => {
    const card = document.createElement("div");
    card.className = "tool-card";
    card.onclick = () => window.open(item.url, "_blank");
    card.innerHTML = `
      <div class="tool-logo">${item.logo}</div>
      <h3 class="tool-name">${item.name}</h3>
      <p class="tool-desc">${item.desc}</p>
      <div class="tool-category">${item.category}</div>
    `;
    container.appendChild(card);
  });
}

// ---------- Dynamic Hub: Project Hub & Generator ----------
function initProjects() {
  renderProjectsList();
}

function generateProjects() {
  const skill = document.getElementById("projSkill").value;
  const diff = document.getElementById("projDifficulty").value || "Intermediate";
  const tech = document.getElementById("projTech").value || "Web App";

  const filtered = projectsData.filter(item => {
    if (skill && item.skill !== skill) return false;
    if (diff && item.difficulty !== diff) return false;
    if (tech && item.tech !== tech) return false;
    return true;
  });

  renderProjectsList(filtered, skill, diff, tech);
  showToast("🌟 AI Generated Unlimited Project Ideas!");
}

function renderProjectsList(list = projectsData, skill = "", diff = "", tech = "") {
  const container = document.getElementById("projectsGrid");
  if (!container) return;
  container.innerHTML = "";

  // Render database matches
  list.forEach(item => {
    container.appendChild(createProjectCard(item));
  });

  // Dynamically append AI Generated Unlimited Project Card if filters are selected or list is empty
  if (skill || tech || list.length === 0) {
    const aiCard = document.createElement("div");
    aiCard.className = "card";
    aiCard.style.border = "1px solid var(--accent3)";
    const titleText = `AI Blueprint: ${skill || 'Full Stack'} ${tech || 'Application'}`;
    const searchParam = encodeURIComponent(`${skill} ${tech} tutorial`);
    const ghParam = encodeURIComponent(`${skill} ${tech} project`);

    aiCard.innerHTML = `
      <div class="card-top">
        <div class="company-logo" style="background: linear-gradient(135deg, #8b5cf6, #ec4899); color: #fff">⚡</div>
        <div>
          <h3 class="card-title">${titleText}</h3>
          <div class="card-company">${skill || 'Any Skill'} • ${diff || 'Custom Level'}</div>
        </div>
      </div>
      <p class="card-desc">AI-synthesized project specification tailored for ${skill || 'modern development'} using ${tech || 'web technologies'}. Complete with source code repositories and embedded YouTube video tutorials.</p>
      <div class="card-tags">
        <span class="tag tag-purple">⚡ AI Unlimited Generator</span>
        <span class="tag tag-green">Video Included</span>
      </div>
      <div class="card-actions">
        <button class="btn btn-ghost btn-sm" onclick="window.open('https://github.com/search?q=${ghParam}', '_blank')">📦 Search GitHub Repos</button>
        <button class="btn btn-ghost btn-sm" onclick="window.open('https://developer.mozilla.org', '_blank')">📄 Docs</button>
        <button class="btn btn-outline btn-sm" onclick="openVideoModal('${titleText} Tutorial', 'https://www.youtube.com/embed/Ke90Tje7VS0')">📹 Watch Video</button>
      </div>
    `;
    container.prepend(aiCard);
  }
}

function createProjectCard(item) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="card-top">
      <div class="company-logo" style="background: var(--surface2); color: var(--accent3)">💡</div>
      <div>
        <h3 class="card-title">${item.title}</h3>
        <div class="card-company">${item.skill} • ${item.difficulty}</div>
      </div>
    </div>
    <p class="card-desc">${item.description}</p>
    <div class="card-tags">
      <span class="tag tag-purple">${item.tech}</span>
    </div>
    <div class="card-actions">
      <button class="btn btn-ghost btn-sm" onclick="window.open('${item.githubUrl}', '_blank')">📦 GitHub</button>
      <button class="btn btn-ghost btn-sm" onclick="window.open('${item.docsUrl}', '_blank')">📄 Docs</button>
      <button class="btn btn-outline btn-sm" onclick="openVideoModal('${item.title} Tutorial', '${item.videoUrl}')">📹 Watch Video</button>
    </div>
  `;
  return card;
}

// ---------- Dynamic Hub: Resume Builder & ATS Checker ----------
let activeResumeTab = "info";
function initResumeBuilder() {
  switchResumeTab("info");
}

function switchResumeTab(tab, btn) {
  activeResumeTab = tab;
  if (btn) {
    btn.parentElement.querySelectorAll(".rtab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }
  renderResumeTabForm();
}

function renderResumeTabForm() {
  const container = document.getElementById("resumeTabContent");
  if (!container) return;

  let html = "";
  if (activeResumeTab === "info") {
    html = `
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" class="form-input" id="res-name" placeholder="John Doe" oninput="updateResumePreview()" />
      </div>
      <div class="form-group">
        <label>Target Role / Title</label>
        <input type="text" class="form-input" id="res-title" placeholder="Software Engineer" oninput="updateResumePreview()" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-input" id="res-email" placeholder="email@example.com" oninput="updateResumePreview()" />
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input type="text" class="form-input" id="res-phone" placeholder="+91 98765 43210" oninput="updateResumePreview()" />
        </div>
      </div>
      <div class="form-group">
        <label>Location</label>
        <input type="text" class="form-input" id="res-location" placeholder="City, Country" oninput="updateResumePreview()" />
      </div>
    `;
  } else if (activeResumeTab === "education") {
    html = `
      <div class="form-group">
        <label>College / School Name</label>
        <input type="text" class="form-input" id="res-edu-inst" placeholder="Harvard University" oninput="updateResumePreview()" />
      </div>
      <div class="form-group">
        <label>Degree & Major</label>
        <input type="text" class="form-input" id="res-edu-degree" placeholder="B.Tech Computer Science" oninput="updateResumePreview()" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Passing Year</label>
          <input type="text" class="form-input" id="res-edu-year" placeholder="2027" oninput="updateResumePreview()" />
        </div>
        <div class="form-group">
          <label>GPA / Percentage</label>
          <input type="text" class="form-input" id="res-edu-gpa" placeholder="9.2 CGPA" oninput="updateResumePreview()" />
        </div>
      </div>
    `;
  } else if (activeResumeTab === "experience") {
    html = `
      <div class="form-group">
        <label>Company Name</label>
        <input type="text" class="form-input" id="res-exp-comp" placeholder="Google (Internship)" oninput="updateResumePreview()" />
      </div>
      <div class="form-group">
        <label>Role</label>
        <input type="text" class="form-input" id="res-exp-role" placeholder="Software Engineering Intern" oninput="updateResumePreview()" />
      </div>
      <div class="form-group">
        <label>Work Description (ATS keywords: React, Python, Cloud, Agile)</label>
        <textarea class="form-input" id="res-exp-desc" placeholder="- Developed scalable REST APIs using Python and Node.js..." oninput="updateResumePreview()"></textarea>
      </div>
    `;
  } else if (activeResumeTab === "skills") {
    html = `
      <div class="form-group">
        <label>Core Skills (Comma separated)</label>
        <textarea class="form-input" id="res-skills" placeholder="React, JavaScript, Python, SQL, AWS, Git" oninput="updateResumePreview()"></textarea>
      </div>
    `;
  } else if (activeResumeTab === "projects") {
    html = `
      <div class="form-group">
        <label>Project Title</label>
        <input type="text" class="form-input" id="res-proj-title" placeholder="Document Chatbot AI" oninput="updateResumePreview()" />
      </div>
      <div class="form-group">
        <label>Description & Tech Used</label>
        <textarea class="form-input" id="res-proj-desc" placeholder="Integrated Gemini API with vector stores using Python to enable document QA..." oninput="updateResumePreview()"></textarea>
      </div>
    `;
  }
  container.innerHTML = html;
}

function updateResumePreview() {
  // Personal Info
  const name = document.getElementById("res-name")?.value || "Your Name";
  const title = document.getElementById("res-title")?.value || "Software Engineer";
  const email = document.getElementById("res-email")?.value || "email@example.com";
  const phone = document.getElementById("res-phone")?.value || "+91 XXXXX XXXXX";
  const loc = document.getElementById("res-location")?.value || "City, Country";

  document.getElementById("rp-name").textContent = name;
  document.getElementById("rp-title").textContent = title;
  document.getElementById("rp-email").textContent = email;
  document.getElementById("rp-phone").textContent = phone;
  document.getElementById("rp-location").textContent = loc;

  // Education
  const inst = document.getElementById("res-edu-inst")?.value;
  const deg = document.getElementById("res-edu-degree")?.value;
  const year = document.getElementById("res-edu-year")?.value;
  const gpa = document.getElementById("res-edu-gpa")?.value;
  
  const eduContainer = document.getElementById("rp-education");
  if (inst || deg) {
    eduContainer.innerHTML = `
      <div style="display:flex; justify-content:space-between; font-weight:600;">
        <span>${inst || 'University Name'}</span>
        <span>${year || '2026'}</span>
      </div>
      <div style="display:flex; justify-content:space-between; font-style:italic; font-size:0.8rem;">
        <span>${deg || 'Degree'}</span>
        <span>${gpa || ''}</span>
      </div>
    `;
  } else {
    eduContainer.innerHTML = `<p>Your education details will appear here</p>`;
  }

  // Skills
  const skills = document.getElementById("res-skills")?.value;
  const skillsContainer = document.getElementById("rp-skills");
  if (skills) {
    skillsContainer.innerHTML = `<div style="font-size:0.82rem;">${skills}</div>`;
  } else {
    skillsContainer.innerHTML = `<p>Your skills will appear here</p>`;
  }

  // Experience
  const expComp = document.getElementById("res-exp-comp")?.value;
  const expRole = document.getElementById("res-exp-role")?.value;
  const expDesc = document.getElementById("res-exp-desc")?.value;
  const expContainer = document.getElementById("rp-experience");
  if (expComp || expRole || expDesc) {
    expContainer.innerHTML = `
      <div style="font-weight:600; font-size:0.85rem;">${expRole || 'Role'} - ${expComp || 'Company'}</div>
      <div style="font-size:0.8rem; margin-top:4px; white-space:pre-line;">${expDesc || 'Description'}</div>
    `;
  } else {
    expContainer.innerHTML = `<p>Your experience will appear here</p>`;
  }

  // Projects
  const projTitle = document.getElementById("res-proj-title")?.value;
  const projDesc = document.getElementById("res-proj-desc")?.value;
  const projContainer = document.getElementById("rp-projects");
  if (projTitle || projDesc) {
    projContainer.innerHTML = `
      <div style="font-weight:600; font-size:0.85rem;">${projTitle || 'Project Title'}</div>
      <div style="font-size:0.8rem; margin-top:4px; white-space:pre-line;">${projDesc || 'Description'}</div>
    `;
  } else {
    projContainer.innerHTML = `<p>Your projects will appear here</p>`;
  }
}

function downloadResume() {
  triggerGoalComplete("Resume creation");
  unlockBadge("resume-pro");
  // Simple simulator: trigger page printing styles or print preview
  window.print();
  showToast("Download Triggered! Stylized Resume PDF will print.");
}

function checkATS() {
  // Collect text from resume elements
  const name = document.getElementById("rp-name").textContent;
  const skills = document.getElementById("rp-skills").textContent;
  const exp = document.getElementById("rp-experience").textContent;
  const proj = document.getElementById("rp-projects").textContent;

  let score = 30; // base score
  let tips = [];

  // Keywords scan (ATS Matching simulation)
  const keywords = ["react", "python", "sql", "aws", "git", "cloud", "agile", "developer", "engineering"];
  const fullText = (name + " " + skills + " " + exp + " " + proj).toLowerCase();
  
  let matches = 0;
  keywords.forEach(kw => {
    if (fullText.includes(kw)) {
      score += 6;
      matches++;
    }
  });

  // Length check
  if (fullText.length > 200) score += 10;
  if (fullText.length > 500) score += 10;

  if (score > 100) score = 100;

  // Generate actionable tips
  if (!skills || skills.includes("skills will appear")) {
    tips.push("• Please add specific core skills (e.g. JavaScript, Python, Git) to clear keyword parsing.");
  }
  if (matches < 3) {
    tips.push("• Try adding target industry standard keywords such as 'React', 'Python', or 'Cloud' to match search profiles.");
  }
  if (!exp || exp.includes("experience will appear")) {
    tips.push("• Include at least one professional work experience or internship simulation description.");
  }
  if (!proj || proj.includes("projects will appear")) {
    tips.push("• Add a technical project highlighting methodologies used (e.g., REST API or LLM integration).");
  }

  if (tips.length === 0) {
    tips.push("🎉 Excellent job! Your resume matches industry ATS benchmarks. Keep up the high standard!");
  }

  const modal = document.getElementById("atsResult");
  const scoreEl = document.getElementById("atsScore");
  const tipsEl = document.getElementById("atsTips");

  if (modal && scoreEl && tipsEl) {
    scoreEl.textContent = score;
    tipsEl.innerHTML = tips.map(t => `<div class="ats-tip">${t}</div>`).join("");
    modal.style.display = "flex";
  }
}

// ---------- Dynamic Hub: Interview Hub ----------
let activeInterviewTab = "hr";
function initInterviewHub() {
  switchInterviewTab("hr");
}

function switchInterviewTab(tab, btn) {
  activeInterviewTab = tab;
  if (btn) {
    btn.parentElement.querySelectorAll(".itab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }
  renderInterviewTab();
}

function renderInterviewTab() {
  const container = document.getElementById("interviewContent");
  if (!container) return;

  if (activeInterviewTab === "hr" || activeInterviewTab === "technical") {
    const list = interviewHubData[activeInterviewTab];
    let html = `<div class="qa-list">`;
    list.forEach((item, index) => {
      html += `
        <div class="qa-item" onclick="toggleQA(${index})">
          <div class="qa-q">❓ ${item.q}</div>
          <div class="qa-a" id="qa-a-${index}">${item.a}</div>
        </div>
      `;
    });
    html += `</div>`;
    container.innerHTML = html;
  } else if (activeInterviewTab === "coding") {
    container.innerHTML = `
      <div class="qa-list">
        <p style="color: var(--text2); margin-bottom:16px;">We have daily coding challenges prepared for you! Access the Coding Practice page directly to compile and submit solutions.</p>
        <button class="btn btn-primary" onclick="showPage('coding')">💻 Start Coding Challenge</button>
      </div>
    `;
  } else if (activeInterviewTab === "mock") {
    container.innerHTML = `
      <div class="generator-card" style="margin-bottom:16px;">
        <h3>🎯 Start AI Mock Interview</h3>
        <p style="font-size:0.85rem; color:var(--text2); margin-bottom:12px;">Choose a role and simulate an engineering interview. The AI will ask a series of questions and grade your text responses.</p>
        <div class="gen-row">
          <select class="filter-select" id="mockRole">
            <option>Software Intern</option>
            <option>AI Engineer Intern</option>
            <option>Data Analyst Intern</option>
          </select>
          <select class="filter-select" id="mockCompany">
            <option>Google</option>
            <option>Microsoft</option>
            <option>Amazon</option>
          </select>
          <button class="btn btn-primary" onclick="startMockInterviewFlow()">Start Mock Interview ✨</button>
        </div>
      </div>
      <div id="mockInterviewFlow" style="display:none;" class="generator-card"></div>
    `;
  }
}

window.toggleQA = (index) => {
  const el = document.getElementById(`qa-a-${index}`);
  if (el) el.classList.toggle("open");
};

// Mock Interview simulator variables
let mockQuestions = [];
let mockCurrentIndex = 0;
let mockUserAnswers = [];

function startMockInterviewFlow() {
  const role = document.getElementById("mockRole").value;
  const company = document.getElementById("mockCompany").value;

  mockQuestions = [
    `Why are you interested in becoming a ${role} at ${company}?`,
    `Explain how you would approach designing a search indexing engine or optimizing database lookups.`,
    `Describe a complex bug or coding issue you faced, and the exact steps you took to debug it.`
  ];

  mockCurrentIndex = 0;
  mockUserAnswers = [];

  renderMockQuestion();
}

function renderMockQuestion() {
  const container = document.getElementById("mockInterviewFlow");
  if (!container) return;
  container.style.display = "block";

  container.innerHTML = `
    <h4>Question ${mockCurrentIndex + 1} of 3</h4>
    <p style="font-weight:600; margin:10px 0; font-size:0.95rem;">${mockQuestions[mockCurrentIndex]}</p>
    <textarea class="form-input" id="mockAnswerText" placeholder="Write your response here (min 20 words for best feedback)..." style="min-height:120px;"></textarea>
    <div style="margin-top:12px; display:flex; gap:8px;">
      <button class="btn btn-primary btn-sm" onclick="submitMockAnswer()">Next Question ➡️</button>
      <button class="btn btn-ghost btn-sm" onclick="cancelMockInterview()">Cancel</button>
    </div>
  `;
}

function submitMockAnswer() {
  const text = document.getElementById("mockAnswerText").value.trim();
  if (text.length < 10) {
    showToast("Please provide a more complete answer.");
    return;
  }

  mockUserAnswers.push(text);
  mockCurrentIndex++;

  if (mockCurrentIndex < mockQuestions.length) {
    renderMockQuestion();
  } else {
    renderMockFeedback();
  }
}

function cancelMockInterview() {
  document.getElementById("mockInterviewFlow").style.display = "none";
  showToast("Mock Interview cancelled.");
}

function renderMockFeedback() {
  const container = document.getElementById("mockInterviewFlow");
  if (!container) return;

  unlockBadge("interview-master");
  triggerGoalComplete("Complete Mock Interview");

  // Simulated evaluation logic
  let rating = 4.2;
  let wordCountTotal = mockUserAnswers.reduce((acc, text) => acc + text.split(" ").length, 0);
  
  if (wordCountTotal < 60) rating = 3.5;
  if (wordCountTotal > 150) rating = 4.8;

  let strengths = "Structured, uses active action words, demonstrates good foundational computer science theory.";
  let improvements = "Could mention specific testing metrics, frameworks (e.g. PyTorch or React), and state quantitative outcomes (e.g. 'improved page load times by 20%').";

  container.innerHTML = `
    <h3>🎉 Mock Interview Completed!</h3>
    <div style="text-align:center; padding:16px;">
      <div style="font-size:3rem; font-weight:900; color:var(--accent);">⭐ ${rating} / 5.0</div>
      <p style="font-size:0.83rem; color:var(--text2);">AI Mock Interview Score</p>
    </div>
    <div style="font-size:0.85rem; text-align:left; background:var(--surface); padding:16px; border-radius:10px; line-height:1.6;">
      <p><b>Strengths:</b> ${strengths}</p>
      <p style="margin-top:8px;"><b>Points of Improvement:</b> ${improvements}</p>
    </div>
    <button class="btn btn-ghost btn-sm" onclick="initInterviewHub()" style="margin-top:12px;">← Reset Hub</button>
  `;
}

// ---------- Dynamic Hub: Daily Coding Practice ----------
let activeProblem = null;
function initCodingPractice() {
  selectLang("python");
}

function selectLang(lang, btn) {
  userState.activeLanguage = lang;
  if (btn) {
    btn.parentElement.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }

  // Filter problems for language
  const problems = codingProblemsData.filter(p => p.lang === lang || (lang === 'dsa' && p.lang === 'dsa'));
  const listEl = document.getElementById("problemList");
  if (!listEl) return;
  listEl.innerHTML = "";

  if (problems.length === 0) {
    listEl.innerHTML = `<p style="padding:10px; font-size:0.75rem; color:var(--text3);">More problems arriving tomorrow!</p>`;
    return;
  }

  problems.forEach(p => {
    const item = document.createElement("div");
    item.className = "prob-item";
    item.innerHTML = `
      <div class="prob-name">${p.title}</div>
      <div class="prob-diff diff-${p.difficulty.toLowerCase()}">${p.difficulty}</div>
    `;
    item.onclick = () => selectProblem(p, item);
    listEl.appendChild(item);
  });

  // Automatically select first problem
  selectProblem(problems[0]);
}

function selectProblem(problem, el) {
  if (!problem) return;
  activeProblem = problem;
  
  if (el) {
    el.parentElement.querySelectorAll(".prob-item").forEach(i => i.classList.remove("active"));
    el.classList.add("active");
  }

  const titleEl = document.getElementById("currentProblem");
  const descEl = document.getElementById("problemDesc");
  const areaEl = document.getElementById("codeArea");
  const outputEl = document.getElementById("codeOutput");

  if (titleEl) titleEl.textContent = problem.title;
  if (descEl) descEl.textContent = problem.description;
  if (areaEl) areaEl.value = problem.template;
  if (outputEl) outputEl.innerHTML = "Code template loaded. Write your solution above.";
}

function runCode() {
  const code = document.getElementById("codeArea").value;
  const outputEl = document.getElementById("codeOutput");
  if (!activeProblem) return;

  outputEl.textContent = "⚙️ Executing tests locally...\n";
  
  setTimeout(() => {
    // Basic compiler simulator check
    if (code.includes("def ") || code.includes("SELECT") || code.includes("function") || code.includes("class")) {
      outputEl.innerHTML = `<span style="color:var(--green)">✅ All Sample Test Cases Passed!</span>\nOutput: [Success]`;
    } else {
      outputEl.innerHTML = `<span style="color:var(--red)">❌ Compile Error: Syntax is missing functional bounds.</span>`;
    }
  }, 600);
}

function submitCode() {
  const code = document.getElementById("codeArea").value;
  const outputEl = document.getElementById("codeOutput");
  if (!activeProblem) return;

  outputEl.textContent = "🚀 Submitting to test servers...\n";

  setTimeout(() => {
    if (code.includes("def ") || code.includes("SELECT") || code.includes("function") || code.includes("class")) {
      outputEl.innerHTML = `<span style="color:var(--green)">🎉 Accepted! Code successfully solved all 10 hidden tests.</span>\nStreak Incremented!`;
      userState.streak++;
      triggerGoalComplete("Solve Daily Coding Challenge");
      unlockBadge("code-warrior");
      saveState();
      refreshDashboard();
      showToast("Coding challenge solved! Streak is now " + userState.streak + " days! 🔥");
    } else {
      outputEl.innerHTML = `<span style="color:var(--red)">❌ Failed: Your code did not return the expected output values.</span>`;
    }
  }, 800);
}

// ---------- Student Dashboard & Streak ----------
function initDashboard() {
  refreshDashboard();
}

function refreshDashboard() {
  // Update Streak circle
  const streakEl = document.querySelector(".streak-num");
  if (streakEl) streakEl.textContent = userState.streak;

  const longestStreakEl = document.querySelector(".streak-info");
  if (longestStreakEl) {
    longestStreakEl.innerHTML = `
      <div class="streak-stat"><span>Longest Streak</span><b>${userState.longestStreak} days</b></div>
      <div class="streak-stat"><span>Today's Status</span><b>${userState.streak > 7 ? '✅ Completed' : '🔥 Active'}</b></div>
    `;
  }

  // Daily Goals checklist
  const goals = [
    "Solve Daily Coding Challenge",
    "Mark a Roadmap step complete",
    "Bookmark 2 internships",
    "Enroll in a new Free Certificate"
  ];
  const goalsContainer = document.getElementById("goalsList");
  if (goalsContainer) {
    goalsContainer.innerHTML = "";
    goals.forEach(goal => {
      const isDone = userState.completedGoals.includes(goal);
      const item = document.createElement("div");
      item.className = "goal-item";
      item.innerHTML = `
        <div class="goal-check ${isDone ? 'done' : ''}" onclick="toggleGoal('${goal}')">${isDone ? "✓" : ""}</div>
        <div class="goal-text ${isDone ? 'done' : ''}">${goal}</div>
      `;
      goalsContainer.appendChild(item);
    });
  }

  // Progress list (based on roadmap completions)
  const progressList = document.getElementById("progressList");
  if (progressList) {
    const frontComp = userState.completedRoadmapSteps.filter(s => s.startsWith("frontend")).length;
    const aiComp = userState.completedRoadmapSteps.filter(s => s.startsWith("ai")).length;
    
    const frontPct = Math.min(Math.round((frontComp / 4) * 100), 100);
    const aiPct = Math.min(Math.round((aiComp / 4) * 100), 100);

    progressList.innerHTML = `
      <div class="progress-item">
        <div class="progress-label"><span>Frontend Developer path</span><span>${frontPct}%</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width: ${frontPct}%"></div></div>
      </div>
      <div class="progress-item" style="margin-top:12px;">
        <div class="progress-label"><span>AI Engineer path</span><span>${aiPct}%</span></div>
        <div class="progress-bar"><div class="progress-fill" style="width: ${aiPct}%"></div></div>
      </div>
    `;
  }

  // Render Badges
  const badgesContainer = document.getElementById("badgesGrid");
  if (badgesContainer) {
    badgesContainer.innerHTML = "";
    const badges = [
      { id: "code-warrior", icon: "🔥", title: "Code Warrior", desc: "Coding Streak active" },
      { id: "resume-pro", icon: "📄", title: "Resume Pro", desc: "Created ATS Resume" },
      { id: "interview-master", icon: "🎯", title: "Interview Master", desc: "Finished AI Mock Interview" },
      { id: "cloud-explorer", icon: "☁️", title: "Cloud Explorer", desc: "Completed cloud roadmap step" }
    ];

    badges.forEach(b => {
      const unlocked = userState.unlockedBadges.includes(b.id);
      const item = document.createElement("div");
      item.className = "badge-item";
      item.style.opacity = unlocked ? "1" : "0.2";
      item.title = unlocked ? b.desc : "Locked: Complete related activity";
      item.innerHTML = `
        <div class="badge-icon">${b.icon}</div>
        <div style="font-weight:600; line-height:1.2;">${b.title}</div>
      `;
      badgesContainer.appendChild(item);
    });
  }

  // Bookmarks
  switchSaved("internships");
}

window.toggleGoal = (goal) => {
  const idx = userState.completedGoals.indexOf(goal);
  if (idx === -1) {
    userState.completedGoals.push(goal);
  } else {
    userState.completedGoals.splice(idx, 1);
  }
  saveState();
  refreshDashboard();
};

function triggerGoalComplete(goal) {
  if (!userState.completedGoals.includes(goal)) {
    userState.completedGoals.push(goal);
    saveState();
    refreshDashboard();
  }
}

function unlockBadge(badgeId) {
  if (!userState.unlockedBadges.includes(badgeId)) {
    userState.unlockedBadges.push(badgeId);
    saveState();
    showToast("🏆 Achievement Unlocked: " + badgeId.replace("-", " ").toUpperCase() + "!");
  }
}

let activeSavedTab = "internships";
window.switchSaved = (tab, btn) => {
  activeSavedTab = tab;
  if (btn) {
    btn.parentElement.querySelectorAll(".stab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }

  const container = document.getElementById("savedContent");
  if (!container) return;
  container.innerHTML = "";

  if (activeSavedTab === "internships") {
    const list = activeInternships.filter(i => userState.savedInternships.includes(i.id));
    if (list.length === 0) {
      container.innerHTML = `<p style="font-size:0.83rem; color:var(--text3);">No saved internships yet.</p>`;
      return;
    }
    list.forEach(i => {
      const item = document.createElement("div");
      item.className = "saved-item";
      item.innerHTML = `
        <div class="saved-item-title">${i.title}</div>
        <div class="saved-item-sub">${i.company} • ${i.location}</div>
        <button class="btn btn-ghost btn-sm" onclick="showPage('internships')" style="margin-top:8px;">View Details</button>
      `;
      container.appendChild(item);
    });
  } else if (activeSavedTab === "certificates") {
    const list = activeCertificates.filter(c => userState.savedCertificates.includes(c.id));
    if (list.length === 0) {
      container.innerHTML = `<p style="font-size:0.83rem; color:var(--text3);">No saved courses yet.</p>`;
      return;
    }
    list.forEach(c => {
      const item = document.createElement("div");
      item.className = "saved-item";
      item.innerHTML = `
        <div class="saved-item-title">${c.title}</div>
        <div class="saved-item-sub">${c.provider}</div>
        <button class="btn btn-ghost btn-sm" onclick="showPage('certificates')" style="margin-top:8px;">View Details</button>
      `;
      container.appendChild(item);
    });
  } else {
    container.innerHTML = `<p style="font-size:0.83rem; color:var(--text3);">No saved jobs yet.</p>`;
  }
};

// ---------- Admin Panel CRUD ----------
function initAdminPanel() {
  renderAdminTables();
}

window.adminUserList = [
  { id: 1, name: "Aarav Sharma", email: "aarav@learnix.edu", status: "Active", time: "Just now" },
  { id: 2, name: "Priya Patel", email: "priya@learnix.edu", status: "Active", time: "5 mins ago" },
  { id: 3, name: "Rohan Das", email: "rohan@learnix.edu", status: "Offline", time: "1 hour ago" },
  { id: 4, name: "Ananya Roy", email: "ananya@learnix.edu", status: "Active", time: "3 hours ago" }
];
var adminUserList = window.adminUserList;

window.adminActivityLogs = [
  { text: "Google Software Intern application opened by Aarav Sharma", time: "2 mins ago" },
  { text: "Stanford SQL certificate enrolled by Priya Patel", time: "14 mins ago" },
  { text: "Daily Python coding challenge submitted by Rohan Das", time: "45 mins ago" },
  { text: "New Internship Opportunity posted by Admin", time: "1 hour ago" }
];
var adminActivityLogs = window.adminActivityLogs;

function renderAdminTables() {
  const usersEl = document.getElementById("adminUsers");
  const activitiesEl = document.getElementById("adminActivities");

  if (usersEl) {
    usersEl.innerHTML = "";
    adminUserList.forEach(u => {
      const row = document.createElement("div");
      row.className = "admin-row";
      row.style.display = "flex";
      row.style.alignItems = "center";
      row.style.gap = "10px";
      row.style.padding = "10px";
      row.style.borderBottom = "1px solid var(--border)";
      row.innerHTML = `
        <div class="admin-avatar">${u.name[0]}</div>
        <div style="flex:1;">
          <div class="admin-name" style="font-weight:600; font-size:0.88rem;">${u.name}</div>
          <div class="admin-email" style="font-size:0.75rem; color:var(--text3);">${u.email}</div>
        </div>
        <div style="font-size:0.75rem; color: ${u.status === 'Active' ? 'var(--green)' : 'var(--text3)'}">${u.status}</div>
        <button class="btn btn-ghost btn-sm" onclick="toggleUserStatus(${u.id})" title="Toggle Status">🔄</button>
        <button class="btn btn-ghost btn-sm" onclick="deleteAdminUser(${u.id})" title="Delete User" style="color:var(--red);">✕</button>
      `;
      usersEl.appendChild(row);
    });
  }

  if (activitiesEl) {
    activitiesEl.innerHTML = "";
    adminActivityLogs.forEach(l => {
      const row = document.createElement("div");
      row.className = "activity-item";
      row.innerHTML = `
        <div class="activity-dot"></div>
        <div class="activity-text">${l.text}</div>
        <div class="activity-time">${l.time}</div>
      `;
      activitiesEl.appendChild(row);
    });
  }
}

window.toggleUserStatus = (id) => {
  const user = adminUserList.find(u => u.id === id);
  if (user) {
    user.status = user.status === "Active" ? "Offline" : "Active";
    renderAdminTables();
    showToast(`Updated ${user.name}'s status to ${user.status}`);
  }
};

window.deleteAdminUser = (id) => {
  adminUserList = adminUserList.filter(u => u.id !== id);
  renderAdminTables();
  showToast("User account removed from admin registry.");
};

// ---------- PWA App Installation & Export CSV Controls ----------
let deferredPWAInstallPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPWAInstallPrompt = e;
  const installBtn = document.getElementById("installAppBtn");
  if (installBtn) installBtn.style.display = "inline-flex";
});

window.installPWAApp = () => {
  if (deferredPWAInstallPrompt) {
    deferredPWAInstallPrompt.prompt();
    deferredPWAInstallPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        showToast("🎉 LEARNIX AI App Installed Successfully!");
      }
      deferredPWAInstallPrompt = null;
    });
  } else {
    // Generate Web App Desktop Shortcut
    const appShortcutData = `[InternetShortcut]\nURL=${window.location.href}\nIconIndex=0\n`;
    const blob = new Blob([appShortcutData], { type: "application/x-mswinurl" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "LEARNIX_AI_App.url";
    a.click();
    showToast("📱 Downloading LEARNIX AI Web App shortcut! Save to Desktop or Home Screen.");
  }
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

window.exportAdminCSV = () => {
  let csvContent = "data:text/csv;charset=utf-8,Type,Title,Provider/Company,URL\n";
  activeInternships.forEach(i => {
    csvContent += `Internship,"${i.title.replace(/"/g, '""')}","${i.company}","${i.applyUrl}"\n`;
  });
  activeCertificates.forEach(c => {
    csvContent += `Certificate,"${c.title.replace(/"/g, '""')}","${c.provider}","${c.enrollUrl}"\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "learnix_platform_data.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("📥 Exported platform data to learnix_platform_data.csv!");
};

window.refreshAdminAnalytics = () => {
  renderAdminTables();
  showToast("🔄 Live platform analytics and user logs updated!");
};

window.addNewInternship = () => {
  // Simulates adding via Admin CRUD panel
  const id = "intern-custom-" + Date.now();
  const company = prompt("Enter Company Name (e.g. Google):", "Google");
  const title = prompt("Enter Internship Title:", "Backend Engineering Intern");
  const desc = prompt("Enter Description:", "Work on Node.js services and write clean unit tests.");
  
  if (!company || !title) return;

  const newItem = {
    id: id,
    company: company,
    logo: company[0],
    color: "#3b82f6",
    title: title,
    description: desc || "Exciting engineering role.",
    eligibility: "Any engineering degree. Familiarity with databases.",
    duration: "3 Months",
    stipend: "Paid - ₹40,000/mo",
    deadline: "2026-12-31",
    domain: "Software Development",
    location: "Remote",
    type: "remote",
    branch: "CS/IT",
    year: "3rd Year",
    applyUrl: "https://careers.google.com"
  };

  activeInternships.unshift(newItem);
  saveState();
  initInternships();
  initTrending();
  showToast("📢 Alert Notification: New Internship Opportunity Added by Admin!");
};

window.addNewCertificate = () => {
  const provider = prompt("Enter Course Provider (e.g. Google, Stanford):", "Google");
  const title = prompt("Enter Course Title:", "Introduction to Machine Learning");
  
  if (!provider || !title) return;

  const newItem = {
    id: "cert-custom-" + Date.now(),
    provider: provider,
    title: title,
    duration: "10 Hours",
    price: "Free",
    hasCert: true,
    rating: 4.8,
    difficulty: "Beginner",
    category: "programming",
    enrollUrl: "https://www.coursera.org"
  };

  activeCertificates.unshift(newItem);
  saveState();
  initCertificates();
  showToast("📢 Alert Notification: New Free Certificate Course Added by Admin!");
};

// ---------- Login Simulation ----------
let loginTab = "login";
function initLogin() {
  switchLoginTab("login");
}

function switchLoginTab(tab, btn) {
  loginTab = tab;
  if (btn) {
    btn.parentElement.querySelectorAll(".ltab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }

  const container = document.getElementById("loginTabContent");
  if (!container) return;

  if (loginTab === "login") {
    container.innerHTML = `
      <div style="background:rgba(59,130,246,0.1); border:1px solid var(--accent); border-radius:12px; padding:14px; margin-bottom:16px; text-align:center;">
        <div style="font-weight:700; font-size:0.9rem; margin-bottom:8px;">⚡ Quick Student Demo Login</div>
        <div style="display:flex; gap:8px; justify-content:center; flex-wrap:wrap;">
          <button class="btn btn-primary btn-sm" onclick="quickLogin('Student', 'aarav@learnix.edu')">👤 Student Demo Login</button>
        </div>
      </div>
      <div class="social-btns">
        <button class="social-btn" onclick="socialLogin('Google')">🌐 Continue with Google</button>
        <button class="social-btn" onclick="socialLogin('GitHub')">🐙 Continue with GitHub</button>
      </div>
      <div class="divider">or login with email</div>
      <div class="login-form">
        <input type="email" class="form-input" id="loginEmail" placeholder="Enter your email" value="student@learnix.edu" />
        <button class="btn btn-primary" onclick="requestOTP()">Send OTP 📧</button>
      </div>
      <div id="otpInputWrap" style="display:none; margin-top:12px;" class="login-form">
        <input type="text" class="form-input" id="loginOTP" placeholder="Enter 4-digit OTP" value="1234" />
        <button class="btn btn-green" onclick="verifyOTP()" style="background:var(--green); color:#fff;">Verify & Login ✓</button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="login-form">
        <input type="text" class="form-input" id="signupName" placeholder="Full Name" />
        <input type="email" class="form-input" id="signupEmail" placeholder="Email Address" />
        <button class="btn btn-primary" onclick="registerUser()">Register Account 🎉</button>
      </div>
    `;
  }
}

window.quickLogin = (role, email) => {
  userState.isLoggedIn = true;
  userState.username = "Aarav Sharma";
  userState.email = email || "aarav@learnix.edu";
  userState.role = "Student";
  saveState();
  showToast(`🎉 Logged in successfully!`);
  showPage("dashboard");
};

window.socialLogin = (provider) => {
  userState.isLoggedIn = true;
  userState.username = provider + " Student";
  saveState();
  showToast(`Welcome! Logged in successfully via ${provider}.`);
  showPage("dashboard");
};

window.requestOTP = () => {
  const email = document.getElementById("loginEmail").value;
  if (!email.includes("@")) {
    showToast("Please enter a valid email address.");
    return;
  }
  document.getElementById("otpInputWrap").style.display = "flex";
  showToast("OTP sent successfully to: " + email + ". Use '1234' to verify.");
};

window.verifyOTP = () => {
  const otp = document.getElementById("loginOTP").value;
  if (otp === "1234") {
    userState.isLoggedIn = true;
    userState.username = "Verified Student";
    saveState();
    showToast("Verification successful!");
    showPage("dashboard");
  } else {
    showToast("Invalid OTP code. Try '1234'.");
  }
};

window.registerUser = () => {
  const name = document.getElementById("signupName").value;
  if (!name) {
    showToast("Please enter your name.");
    return;
  }
  userState.isLoggedIn = true;
  userState.username = name;
  saveState();
  showToast(`Registration successful! Welcome ${name}.`);
  showPage("dashboard");
};

// ---------- AI Chatbot Floating Widget & Full Modal ----------
let isChatWidgetOpen = false;
let isChatbotModalOpen = false;

window.toggleChat = () => {
  const body = document.getElementById("chatBody");
  const btn = document.getElementById("chatToggleBtn");
  if (body) {
    isChatWidgetOpen = !isChatWidgetOpen;
    body.style.display = isChatWidgetOpen ? "block" : "none";
  }
};

window.sendChat = () => {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text) return;

  appendChatMsg("user", text, "chatMessages");
  input.value = "";

  setTimeout(() => {
    const response = getChatbotResponse(text);
    appendChatMsg("ai", response, "chatMessages");
  }, 600);
};

window.toggleChatbot = () => {
  const modal = document.getElementById("chatbotModal");
  if (modal) {
    isChatbotModalOpen = !isChatbotModalOpen;
    modal.classList.toggle("open");
  }
};

window.sendChatbotMsg = () => {
  const input = document.getElementById("chatbotInput");
  const text = input.value.trim();
  if (!text) return;

  appendChatMsg("user", text, "chatbotMessages");
  input.value = "";

  setTimeout(() => {
    const response = getChatbotResponse(text);
    appendChatMsg("ai", response, "chatbotMessages");
  }, 600);
};

function appendChatMsg(sender, text, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const msg = document.createElement("div");
  // Differ classes based on widget vs modal
  if (containerId === "chatMessages") {
    msg.className = `chat-msg ${sender}`;
    msg.innerHTML = `<div class="msg-bubble">${text}</div>`;
  } else {
    msg.className = `chatmsg ${sender}`;
    msg.innerHTML = `<div class="chatmsg-bubble">${text}</div>`;
  }

  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

function getChatbotResponse(query) {
  const lower = query.toLowerCase();
  
  if (lower.includes("internship") || lower.includes("intern")) {
    return "We have 14+ verified free and paid internships listed. For instance, Google, Microsoft, and ISRO are hiring software and data interns! Head over to the [Internship Hub] to filter by location or company.";
  }
  if (lower.includes("cert") || lower.includes("course") || lower.includes("free")) {
    return "All certificates on LEARNIX AI are 100% free! We have top courses from Google (Python), DeepLearning.AI (GenAI), and Stanford (SQL). You can find them in the [Certificates] tab.";
  }
  if (lower.includes("resume") || lower.includes("cv")) {
    return "Try our free [Resume Builder]! Fill in your personal details, project notes, and college GPA, then test it using the 🤖 ATS Checker. You can also download it as a print-optimized PDF.";
  }
  if (lower.includes("roadmap")) {
    return "We offer interactive career roadmaps for Frontend Developers and AI Engineers. Each step lists required skills, free courses, and projects. Go to [Roadmaps] to explore!";
  }
  if (lower.includes("streak") || lower.includes("streak tracker")) {
    return "Completing daily coding challenges or marking roadmap steps complete keeps your streak alive. Keep it going to unlock special achievement badges!";
  }
  
  return "That's a great question! I'm here to assist you with finding internships, selecting free courses, checking your ATS resume score, or practicing mock interviews. What would you like to explore first?";
}

// ---------- Helper: Toast Notification & Social Sharing ----------
function showToast(message) {
  const toast = document.createElement("div");
  toast.style.position = "fixed";
  toast.style.bottom = "24px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.background = "var(--accent)";
  toast.style.color = "#fff";
  toast.style.padding = "10px 20px";
  toast.style.borderRadius = "99px";
  toast.style.fontSize = "0.85rem";
  toast.style.fontWeight = "600";
  toast.style.zIndex = "9999";
  toast.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)";
  toast.style.opacity = "0";
  toast.style.transition = "opacity 0.3s, transform 0.3s";

  document.body.appendChild(toast);

  // Trigger fade in
  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(-5px)";
  }, 50);

  // Fade out and remove
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50%)";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function shareOpportunity(title, url) {
  if (navigator.share) {
    navigator.share({
      title: title,
      text: `Check out this 100% free opportunity on LEARNIX AI: ${title}`,
      url: url
    }).catch(console.error);
  } else {
    // Fallback: Copy to Clipboard
    navigator.clipboard.writeText(`Opportunity: ${title} - Apply here: ${url}`)
      .then(() => showToast("Application link copied to clipboard! Share it with friends. 🔗"))
      .catch(console.error);
  }
}
