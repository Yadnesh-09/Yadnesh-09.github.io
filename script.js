/* =========================================================
   PROJECT DATA
   Update liveUrl and repositoryUrl after each project is ready.
   ========================================================= */

const projects = [
  {
    title: "AWS Kids Storytelling App",
    description:
      "Uploads text stories to Amazon S3 and generates narrated MP3 audio with Amazon Polly, while DynamoDB stores processing history.",
    services: ["S3", "Lambda", "API Gateway", "Polly", "DynamoDB"],
    categories: ["featured", "serverless", "ai"],
    status: "Live",
    icon: "♫",
    type: "Serverless AI Application",
    featured: true,
    liveUrl: "https://yadnesh-09.github.io/aws-kids-storytelling-app/",
    repositoryUrl: "https://github.com/Yadnesh-09/aws-kids-storytelling-app",
    accent: "#53d5ff"
  },
  {
    title: "Road & Rain Complaint Management",
    description:
      "A citizen and admin platform for submitting road complaints, uploading evidence, generating tracking IDs and updating resolution status.",
    services: ["CloudFront", "S3", "API Gateway", "Lambda", "RDS"],
    categories: ["featured", "serverless"],
    status: "Completed",
    icon: "⌖",
    type: "Civic Technology Platform",
    featured: true,
    liveUrl: "",
    repositoryUrl: "",
    accent: "#7cf7c7"
  },
  {
    title: "Scalable Bus Booking Platform",
    description:
      "A planned multi-tier booking application with seat selection, ALB-based traffic distribution, Auto Scaling, RDS and automated deployment.",
    services: ["EC2", "ALB", "Auto Scaling", "RDS", "CodePipeline"],
    categories: ["featured", "devops", "infrastructure"],
    status: "In Progress",
    icon: "▰",
    type: "Scalable Multi-tier Application",
    featured: true,
    liveUrl: "",
    repositoryUrl: "",
    accent: "#ffcc6b"
  },
  {
    title: "Automated AWS Cost Optimizer",
    description:
      "A FinOps dashboard designed to detect idle resources, estimate avoidable spending and surface safe optimization recommendations.",
    services: ["Lambda", "EventBridge", "CloudWatch", "EC2", "SNS"],
    categories: ["featured", "serverless", "infrastructure"],
    status: "In Progress",
    icon: "↘",
    type: "Cloud FinOps Automation",
    featured: true,
    liveUrl: "",
    repositoryUrl: "",
    accent: "#b18cff"
  },
  {
    title: "AI Celebrity Detector",
    description:
      "Processes uploaded images with Amazon Rekognition, displays detected celebrity names and confidence, and stores detection history.",
    services: ["Rekognition", "Lambda", "S3", "API Gateway", "DynamoDB"],
    categories: ["serverless", "ai"],
    status: "Completed",
    icon: "◎",
    type: "Computer Vision Application",
    featured: false,
    liveUrl: "",
    repositoryUrl: "",
    accent: "#ff8eb8"
  },
  {
    title: "Object Detection Web App",
    description:
      "A mobile-friendly image and camera workflow that sends objects to Amazon Rekognition and returns detected labels through an API.",
    services: ["Rekognition", "S3", "Lambda", "API Gateway", "CloudFront"],
    categories: ["serverless", "ai"],
    status: "Completed",
    icon: "◉",
    type: "AI Object Recognition",
    featured: false,
    liveUrl: "",
    repositoryUrl: "",
    accent: "#8be0ff"
  },
  {
    title: "Student Mood Detection",
    description:
      "An event-driven face-emotion pipeline using S3, SQS, Lambda, Rekognition and DynamoDB for asynchronous processing.",
    services: ["S3", "SQS", "Lambda", "Rekognition", "DynamoDB"],
    categories: ["serverless", "ai"],
    status: "Completed",
    icon: "◡",
    type: "Event-driven AI Pipeline",
    featured: false,
    liveUrl: "",
    repositoryUrl: "",
    accent: "#ffb56b"
  },
  {
    title: "Airport Security Detection",
    description:
      "Scans uploaded airport images, stores detected labels and sends an SNS alert when a potentially dangerous object is identified.",
    services: ["S3", "Lambda", "Rekognition", "DynamoDB", "SNS"],
    categories: ["serverless", "ai"],
    status: "Completed",
    icon: "✈",
    type: "Security Event Pipeline",
    featured: false,
    liveUrl: "",
    repositoryUrl: "",
    accent: "#75b9ff"
  },
  {
    title: "Wildlife Animal Detection",
    description:
      "Uses an S3 event trigger and Amazon Rekognition to identify animals in uploaded wildlife images and store results.",
    services: ["S3", "Lambda", "Rekognition", "DynamoDB"],
    categories: ["serverless", "ai"],
    status: "Completed",
    icon: "◇",
    type: "Wildlife Recognition",
    featured: false,
    liveUrl: "",
    repositoryUrl: "",
    accent: "#7de59b"
  },
  {
    title: "Website Visitor Logging System",
    description:
      "Records visitor IP address, timestamp and user-agent data through API Gateway and Lambda, with DynamoDB-backed history.",
    services: ["API Gateway", "Lambda", "DynamoDB", "CloudWatch"],
    categories: ["serverless"],
    status: "Completed",
    icon: "↗",
    type: "Serverless Analytics",
    featured: false,
    liveUrl: "",
    repositoryUrl: "",
    accent: "#55d6be"
  },
  {
    title: "Containerized Flask App on ECS",
    description:
      "A Dockerized Flask application deployed on ECS Fargate with ECR images, an Application Load Balancer and health checks.",
    services: ["Docker", "ECR", "ECS Fargate", "ALB", "CloudWatch"],
    categories: ["devops", "infrastructure"],
    status: "Completed",
    icon: "⬡",
    type: "Container Deployment",
    featured: false,
    liveUrl: "",
    repositoryUrl: "",
    accent: "#6ba8ff"
  },
  {
    title: "Python CI/CD Deployment Demo",
    description:
      "Runs automated Python tests and deploys application updates to EC2 whenever code is pushed to the main GitHub branch.",
    services: ["EC2", "GitHub Actions", "IAM", "CloudWatch"],
    categories: ["devops", "infrastructure"],
    status: "Completed",
    icon: "⇄",
    type: "Automated Deployment",
    featured: false,
    liveUrl: "",
    repositoryUrl: "https://github.com/Yadnesh-09/aws-python-deployment-demo",
    accent: "#9ba7ff"
  },
  {
    title: "Python & Java Compiler Pipeline",
    description:
      "A browser-based compiler deployment project using GitHub, an AWS pipeline and EC2-based application hosting.",
    services: ["EC2", "S3", "CodePipeline", "CodeBuild", "GitHub"],
    categories: ["devops", "infrastructure"],
    status: "Completed",
    icon: "</>",
    type: "CI/CD Application",
    featured: false,
    liveUrl: "",
    repositoryUrl: "",
    accent: "#f69d7b"
  },
  {
    title: "Serverless Image Resizer",
    description:
      "Automatically creates optimized image versions after upload using an S3 event trigger and AWS Lambda processing.",
    services: ["S3", "Lambda", "API Gateway", "CloudWatch"],
    categories: ["serverless"],
    status: "Completed",
    icon: "▧",
    type: "Event-driven Processing",
    featured: false,
    liveUrl: "",
    repositoryUrl: "",
    accent: "#80e1df"
  },
  {
    title: "Cloud Expense Tracker",
    description:
      "A responsive expense dashboard backed by API Gateway, Lambda and DynamoDB, including totals and expense analytics.",
    services: ["API Gateway", "Lambda", "DynamoDB", "S3"],
    categories: ["serverless"],
    status: "Completed",
    icon: "₹",
    type: "Serverless Finance App",
    featured: false,
    liveUrl: "",
    repositoryUrl: "",
    accent: "#65e6a7"
  },
  {
    title: "OTT Platform on EC2",
    description:
      "A streaming-style frontend hosted on Amazon EC2 with media assets delivered from an Amazon S3 bucket.",
    services: ["EC2", "S3", "IAM", "Security Groups"],
    categories: ["infrastructure"],
    status: "Completed",
    icon: "▶",
    type: "Cloud Web Hosting",
    featured: false,
    liveUrl: "",
    repositoryUrl: "",
    accent: "#ff7186"
  },
  {
    title: "AWS Resume Website",
    description:
      "A cloud-hosted personal resume website using EC2 for the application and S3 for profile and document assets.",
    services: ["EC2", "S3", "IAM", "Security Groups"],
    categories: ["infrastructure"],
    status: "Completed",
    icon: "▤",
    type: "Personal Cloud Website",
    featured: false,
    liveUrl: "",
    repositoryUrl: "",
    accent: "#d8b572"
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
  link.innerHTML = `${label} <span aria-hidden="true">↗</span>`;
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
  actions.append(
    createProjectLink(project.liveUrl, "Live demo", "primary"),
    createProjectLink(project.repositoryUrl, "View code", "secondary")
  );

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
  themeIcon.textContent = theme === "light" ? "☀" : "☾";
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
