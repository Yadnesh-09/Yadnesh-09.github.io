/* =========================================================
   PROJECT DATA
   Update liveUrl and repositoryUrl after each project is ready.
   ========================================================= */

const projects = [
  {
    title: "AWS Kids Storytelling App",
    description:
      "Uploads text stories to Amazon S3 and generates narrated MP3 audio with Amazon Polly, while DynamoDB stores processing history.",
    services: [
      "Amazon S3",
      "AWS Lambda",
      "API Gateway",
      "Amazon Polly",
      "DynamoDB"
    ],
    categories: ["featured", "serverless", "ai"],
    status: "Live",
    icon: "S",
    type: "Serverless AI Application",
    featured: true,
    liveLabel: "Live demo",
    liveUrl:
      "https://yadnesh-09.github.io/aws-kids-storytelling-app/",
    repositoryUrl:
      "https://github.com/Yadnesh-09/aws-kids-storytelling-app",
    accent: "#53d5ff"
  },
  {
    title: "AWS Road and Rain Complaint Management System",
    description:
      "A citizen and admin portal for submitting, tracking and managing road complaints with image uploads, status updates and department assignment.",
    services: [
      "AWS Lambda",
      "API Gateway",
      "Amazon RDS",
      "Amazon S3",
      "CloudFront",
      "EventBridge"
    ],
    categories: ["featured", "serverless"],
    status: "Live",
    icon: "R",
    type: "Full-Stack AWS Application",
    featured: true,
    liveLabel: "Citizen site",
    liveUrl:
      "https://dvyatn4xrtspb.cloudfront.net/",
    adminUrl:
      "https://dvyatn4xrtspb.cloudfront.net/admin.html",
    repositoryUrl:
      "https://github.com/Yadnesh-09/aws-road-rain-complaint-system",
    accent: "#f59e0b"
  }
];

/* =========================================================
   APPLICATION
   ========================================================= */

const projectGrid = document.getElementById("projectGrid");
const emptyFilter = document.getElementById("emptyFilter");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const copyEmailButton = document.getElementById("copyEmailButton");
const toast = document.getElementById("toast");

let currentFilter = "all";
let toastTimer;

function getStatusClass(status) {
  const normalized = status.toLowerCase();

  if (normalized === "live") {
    return "live";
  }

  if (normalized === "completed") {
    return "completed";
  }

  return "progress";
}

function colorToRgba(hex, alpha) {
  const clean = hex.replace("#", "");
  const number = Number.parseInt(clean, 16);
  const red = (number >> 16) & 255;
  const green = (number >> 8) & 255;
  const blue = number & 255;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function createProjectLink(url, label, style) {
  if (!url) {
    const disabled = document.createElement("span");
    disabled.className = "project-link disabled";
    disabled.textContent =
      label === "Live demo" ? "Demo after restore" : "Repository coming soon";
    return disabled;
  }

  const link = document.createElement("a");
  link.className = `project-link ${style}`;
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.innerHTML = `${label} <span aria-hidden="true">â†—</span>`;
  return link;
}

function createProjectCard(project, index) {
  const article = document.createElement("article");

  article.className = project.featured
    ? "project-card featured-card"
    : "project-card";

  article.style.setProperty(
    "--project-accent-soft",
    colorToRgba(project.accent, 0.15)
  );

  article.style.setProperty(
    "--project-accent-border",
    colorToRgba(project.accent, 0.28)
  );

  article.dataset.categories = project.categories.join(" ");

  const visual = document.createElement("div");
  visual.className = "project-visual";

  const status = document.createElement("span");
  status.className = `project-status ${getStatusClass(project.status)}`;
  status.textContent = project.status;

  const number = document.createElement("span");
  number.className = "project-number";
  number.textContent = String(index + 1).padStart(2, "0");

  const visualContent = document.createElement("div");
  visualContent.className = "project-visual-content";

  const icon = document.createElement("div");
  icon.className = "project-icon";
  icon.textContent = project.icon;

  const type = document.createElement("div");
  type.className = "project-type";
  type.textContent = project.type;

  visualContent.append(icon, type);
  visual.append(status, number, visualContent);

  const body = document.createElement("div");
  body.className = "project-body";

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.className = "project-description";
  description.textContent = project.description;

  const tags = document.createElement("div");
  tags.className = "service-tags";

  project.services.forEach(service => {
    const tag = document.createElement("span");
    tag.className = "service-tag";
    tag.textContent = service;
    tags.appendChild(tag);
  });

  const actions = document.createElement("div");
  actions.className = "project-actions";
  const projectLinks = [
    createProjectLink(
      project.liveUrl,
      project.liveLabel || "Live demo",
      "primary"
    )
  ];

  if (project.adminUrl) {
    projectLinks.push(
      createProjectLink(
        project.adminUrl,
        "Admin portal",
        "secondary"
      )
    );
  }

  projectLinks.push(
    createProjectLink(
      project.repositoryUrl,
      "View code",
      "secondary"
    )
  );

  actions.append(...projectLinks);

  body.append(title, description, tags, actions);
  article.append(visual, body);

  return article;
}

function renderProjects() {
  projectGrid.replaceChildren();

  const visibleProjects = projects.filter(project => {
    if (currentFilter === "all") {
      return true;
    }

    return project.categories.includes(currentFilter);
  });

  visibleProjects.forEach(project => {
    const originalIndex = projects.indexOf(project);
    projectGrid.appendChild(createProjectCard(project, originalIndex));
  });

  emptyFilter.hidden = visibleProjects.length !== 0;
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;

    filterButtons.forEach(item => {
      item.classList.toggle("active", item === button);
    });

    renderProjects();
  });
});

function updateMetrics() {
  const serviceSet = new Set(
    projects.flatMap(project => project.services)
  );

  document.getElementById("projectMetric").textContent = projects.length;
  document.getElementById("serviceMetric").textContent = serviceSet.size;
  document.getElementById("liveMetric").textContent =
    projects.filter(project => project.liveUrl).length;
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeIcon.textContent = theme === "light" ? "â˜€" : "â˜¾";
  localStorage.setItem("portfolio-theme", theme);
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme || "dark";
  applyTheme(current === "dark" ? "light" : "dark");
});

const savedTheme = localStorage.getItem("portfolio-theme");
const systemPrefersLight =
  window.matchMedia("(prefers-color-scheme: light)").matches;

applyTheme(savedTheme || (systemPrefersLight ? "light" : "dark"));

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

copyEmailButton.addEventListener("click", async () => {
  const email = copyEmailButton.dataset.email;

  try {
    await navigator.clipboard.writeText(email);
    showToast("Email address copied.");
  } catch {
    showToast(`Email: ${email}`);
  }
});

window.addEventListener("scroll", () => {
  document
    .querySelector(".site-header")
    .classList.toggle("scrolled", window.scrollY > 10);
});

document.getElementById("currentYear").textContent =
  String(new Date().getFullYear());

renderProjects();
updateMetrics();


