/* =========================================================
   PROJECT DATA
   Add a new project only after it is working, tested and public.
   ========================================================= */

const projects = [
  {
    title: "PixelFlow — Serverless Image Resizer",
    description:
      "An event-driven image-processing platform that resizes, converts and optimizes JPEG, PNG and WebP images using AWS Lambda and Pillow.",
    services: [
      "Amazon S3",
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "Amazon ECR",
      "Docker"
    ],
    categories: [
      "featured",
      "serverless",
      "devops"
    ],
    status: "Completed",
    icon: "▣",
    type: "Serverless Image Processing",
    featured: true,
    liveUrl: "",
    repositoryUrl: "https://github.com/Yadnesh-09/aws-pixelflow-serverless-image-resizer",
    accent: "#f472b6"
  },
  {
    title: "CloudNotes AI",
    description:
      "A secure serverless notes platform with Cognito authentication, DynamoDB note storage, private S3 attachments and HTTPS delivery through CloudFront.",
    services: [
      "Amazon CloudFront",
      "Amazon S3",
      "Amazon Cognito",
      "API Gateway",
      "AWS Lambda",
      "DynamoDB"
    ],
    categories: ["featured", "serverless", "ai"],
    status: "Live",
    icon: "✦",
    type: "Secure Serverless Application",
    featured: true,
    liveUrl: "https://d3babvjhe08a5r.cloudfront.net",
    repositoryUrl: "https://github.com/Yadnesh-09/aws-cloudnotes-ai",
    accent: "#a78bfa"
  },
  {
    title: "Road & Rain Complaint System",
    description:
      "A citizen complaint portal for reporting potholes, garbage, traffic and streetlight problems with tracking, administration and image evidence.",
    services: [
      "Amazon CloudFront",
      "Amazon S3",
      "API Gateway",
      "AWS Lambda",
      "Amazon RDS",
      "EventBridge"
    ],
    categories: ["featured", "serverless", "infrastructure"],
    status: "Live",
    icon: "☂",
    type: "Civic Management Platform",
    featured: true,
    liveUrl: "https://dvyatn4xrtspb.cloudfront.net/",
    repositoryUrl: "https://github.com/Yadnesh-09/aws-road-rain-complaint-system",
    accent: "#34d399"
  },
  {
    title: "CloudTask ECS Fargate",
    description:
      "A containerized task-management application deployed using Docker, Amazon ECR, ECS Fargate and an Application Load Balancer.",
    services: [
      "Amazon ECS",
      "AWS Fargate",
      "Amazon ECR",
      "Docker",
      "Application Load Balancer",
      "DynamoDB"
    ],
    categories: ["featured", "devops", "infrastructure"],
    status: "Live",
    icon: "☁",
    type: "Containerized DevOps Application",
    featured: true,
    liveUrl: "http://cloudtask-alb-1160152713.ap-south-1.elb.amazonaws.com",
    repositoryUrl: "https://github.com/Yadnesh-09/aws-cloudtask-ecs-fargate",
    accent: "#fb923c"
  },
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
    icon: "♫",
    type: "Serverless AI Application",
    featured: true,
    liveUrl: "https://yadnesh-09.github.io/aws-kids-storytelling-app/",
    repositoryUrl: "https://github.com/Yadnesh-09/aws-kids-storytelling-app",
    accent: "#53d5ff"
  }
];

/* =========================================================
   PAGE ELEMENTS
   ========================================================= */

const projectGrid =
  document.getElementById("projectGrid");

const emptyFilter =
  document.getElementById("emptyFilter");

const filterButtons = [
  ...document.querySelectorAll(".filter-button")
];

const themeToggle =
  document.getElementById("themeToggle");

const themeIcon =
  document.getElementById("themeIcon");

const navToggle =
  document.getElementById("navToggle");

const navLinks =
  document.getElementById("navLinks");

const copyEmailButton =
  document.getElementById("copyEmailButton");

const toast =
  document.getElementById("toast");

let currentFilter = "all";
let toastTimer;

/* =========================================================
   PROJECT HELPERS
   ========================================================= */

function getStatusClass(status) {
  const normalized =
    String(status || "").toLowerCase();

  if (normalized === "live") {
    return "live";
  }

  if (normalized === "completed") {
    return "completed";
  }

  return "progress";
}

function colorToRgba(hex, alpha) {
  const clean =
    String(hex || "#53d5ff").replace("#", "");

  const number =
    Number.parseInt(clean, 16);

  const red =
    (number >> 16) & 255;

  const green =
    (number >> 8) & 255;

  const blue =
    number & 255;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

/* =========================================================
   PROJECT BUTTONS
   ========================================================= */

function createProjectLink(
  url,
  label,
  style
) {
  if (!url) {
    const disabled =
      document.createElement("span");

    disabled.className =
      "project-link disabled";

    disabled.textContent =
      "Link unavailable";

    return disabled;
  }

  const link =
    document.createElement("a");

  link.className =
    `project-link ${style}`;

  link.href = url;
  link.target = "_blank";

  link.rel =
    "noopener noreferrer";

  /*
    Plain text is used here.

    This removes the broken arrow symbols
    such as â†’ or â†— from the buttons.
  */
  link.textContent = label;

  return link;
}

/* =========================================================
   CREATE PROJECT CARD
   ========================================================= */

function createProjectCard(
  project,
  index
) {
  const article =
    document.createElement("article");

  article.className =
    project.featured
      ? "project-card featured-card"
      : "project-card";

  article.style.setProperty(
    "--project-accent-soft",
    colorToRgba(
      project.accent,
      0.15
    )
  );

  article.style.setProperty(
    "--project-accent-border",
    colorToRgba(
      project.accent,
      0.28
    )
  );

  article.dataset.categories =
    project.categories.join(" ");

  /* Project visual section */

  const visual =
    document.createElement("div");

  visual.className =
    "project-visual";

  const status =
    document.createElement("span");

  status.className =
    `project-status ${getStatusClass(project.status)}`;

  status.textContent =
    project.status;

  const number =
    document.createElement("span");

  number.className =
    "project-number";

  number.textContent =
    String(index + 1).padStart(2, "0");

  const visualContent =
    document.createElement("div");

  visualContent.className =
    "project-visual-content";

  const icon =
    document.createElement("div");

  icon.className =
    "project-icon";

  icon.textContent =
    project.icon;

  const type =
    document.createElement("div");

  type.className =
    "project-type";

  type.textContent =
    project.type;

  visualContent.append(
    icon,
    type
  );

  visual.append(
    status,
    number,
    visualContent
  );

  /* Project information section */

  const body =
    document.createElement("div");

  body.className =
    "project-body";

  const title =
    document.createElement("h3");

  title.textContent =
    project.title;

  const description =
    document.createElement("p");

  description.className =
    "project-description";

  description.textContent =
    project.description;

  /* AWS service tags */

  const tags =
    document.createElement("div");

  tags.className =
    "service-tags";

  project.services.forEach(
    service => {
      const tag =
        document.createElement("span");

      tag.className =
        "service-tag";

      tag.textContent =
        service;

      tags.appendChild(tag);
    }
  );

  /* Project buttons */

  const actions =
    document.createElement("div");

  actions.className =
    "project-actions";

  const projectLinks = [];

  projectLinks.push(
    createProjectLink(
      project.liveUrl,
      project.liveLabel || "Live demo",
      "primary"
    )
  );

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

  actions.append(
    ...projectLinks
  );

  body.append(
    title,
    description,
    tags,
    actions
  );

  article.append(
    visual,
    body
  );

  return article;
}

/* =========================================================
   RENDER PROJECTS
   ========================================================= */

function renderProjects() {
  if (!projectGrid) {
    return;
  }

  projectGrid.replaceChildren();

  const visibleProjects =
    projects.filter(project => {
      if (currentFilter === "all") {
        return true;
      }

      return project.categories.includes(
        currentFilter
      );
    });

  visibleProjects.forEach(
    project => {
      const originalIndex =
        projects.indexOf(project);

      projectGrid.appendChild(
        createProjectCard(
          project,
          originalIndex
        )
      );
    }
  );

  if (emptyFilter) {
    emptyFilter.hidden =
      visibleProjects.length !== 0;
  }
}

/* =========================================================
   PROJECT FILTERS
   ========================================================= */

filterButtons.forEach(
  button => {
    button.addEventListener(
      "click",
      () => {
        currentFilter =
          button.dataset.filter || "all";

        filterButtons.forEach(
          item => {
            item.classList.toggle(
              "active",
              item === button
            );
          }
        );

        renderProjects();
      }
    );
  }
);

/* =========================================================
   PORTFOLIO METRICS
   ========================================================= */

function updateMetrics() {
  const serviceSet =
    new Set(
      projects.flatMap(
        project => project.services
      )
    );

  const projectMetric =
    document.getElementById(
      "projectMetric"
    );

  const serviceMetric =
    document.getElementById(
      "serviceMetric"
    );

  const liveMetric =
    document.getElementById(
      "liveMetric"
    );

  if (projectMetric) {
    projectMetric.textContent =
      projects.length;
  }

  if (serviceMetric) {
    serviceMetric.textContent =
      serviceSet.size;
  }

  if (liveMetric) {
    liveMetric.textContent =
      projects.filter(
        project => project.liveUrl
      ).length;
  }
}

/* =========================================================
   LIGHT AND DARK THEME
   ========================================================= */

function applyTheme(theme) {
  document.documentElement.dataset.theme =
    theme;

  if (themeIcon) {
    themeIcon.textContent =
      theme === "light"
        ? "\u2600"
        : "\u263E";
  }

  localStorage.setItem(
    "portfolio-theme",
    theme
  );
}

if (themeToggle) {
  themeToggle.addEventListener(
    "click",
    () => {
      const current =
        document.documentElement.dataset.theme ||
        "dark";

      applyTheme(
        current === "dark"
          ? "light"
          : "dark"
      );
    }
  );
}

const savedTheme =
  localStorage.getItem(
    "portfolio-theme"
  );

const systemPrefersLight =
  window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

applyTheme(
  savedTheme ||
  (
    systemPrefersLight
      ? "light"
      : "dark"
  )
);

/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

if (navToggle && navLinks) {
  navToggle.addEventListener(
    "click",
    () => {
      const isOpen =
        navLinks.classList.toggle(
          "open"
        );

      navToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      document.body.classList.toggle(
        "menu-open",
        isOpen
      );
    }
  );

  navLinks
    .querySelectorAll("a")
    .forEach(link => {
      link.addEventListener(
        "click",
        () => {
          navLinks.classList.remove(
            "open"
          );

          navToggle.setAttribute(
            "aria-expanded",
            "false"
          );

          document.body.classList.remove(
            "menu-open"
          );
        }
      );
    });
}

/* =========================================================
   TOAST MESSAGE
   ========================================================= */

function showToast(message) {
  if (!toast) {
    return;
  }

  window.clearTimeout(
    toastTimer
  );

  toast.textContent =
    message;

  toast.classList.add(
    "show"
  );

  toastTimer =
    window.setTimeout(
      () => {
        toast.classList.remove(
          "show"
        );
      },
      2200
    );
}

/* =========================================================
   COPY EMAIL BUTTON
   ========================================================= */

if (copyEmailButton) {
  copyEmailButton.addEventListener(
    "click",
    async () => {
      const email =
        copyEmailButton.dataset.email;

      if (!email) {
        showToast(
          "Email address is unavailable."
        );

        return;
      }

      try {
        await navigator.clipboard.writeText(
          email
        );

        showToast(
          "Email address copied."
        );
      } catch {
        showToast(
          `Email: ${email}`
        );
      }
    }
  );
}

/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */

window.addEventListener(
  "scroll",
  () => {
    const siteHeader =
      document.querySelector(
        ".site-header"
      );

    if (siteHeader) {
      siteHeader.classList.toggle(
        "scrolled",
        window.scrollY > 10
      );
    }
  }
);

/* =========================================================
   CURRENT YEAR
   ========================================================= */

const currentYear =
  document.getElementById(
    "currentYear"
  );

if (currentYear) {
  currentYear.textContent =
    String(
      new Date().getFullYear()
    );
}

/* =========================================================
   START APPLICATION
   ========================================================= */

renderProjects();
updateMetrics();