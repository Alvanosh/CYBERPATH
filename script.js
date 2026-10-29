const roadmapData = {
  pentest: {
    title: "Penetration Testing",
    level: "Intermediate",
    stages: [
      {
        step: "Stage 1",
        title: "Computer Fundamentals",
        items: [
          "Operating system basics",
          "Linux and Windows fundamentals",
          "Filesystems, permissions, processes, and services",
        ],
      },
      {
        step: "Stage 2",
        title: "Networking",
        items: [
          "OSI and TCP/IP models",
          "IP addressing and subnetting",
          "TCP, UDP, DNS, DHCP, HTTP and HTTPS",
        ],
      },
      {
        step: "Stage 3",
        title: "Linux and Command Line",
        items: [
          "Filesystem navigation",
          "Users, groups, permissions",
          "Bash fundamentals and log review",
        ],
      },
      {
        step: "Stage 4",
        title: "Programming and Scripting",
        items: [
          "Python fundamentals",
          "Bash scripting",
          "Basic JavaScript and SQL",
        ],
      },
      {
        step: "Stage 5",
        title: "Web Technologies",
        items: [
          "HTTP requests and responses",
          "Cookies, sessions, and authentication",
          "APIs, databases, and browser developer tools",
        ],
      },
      {
        step: "Stage 6",
        title: "Security Fundamentals",
        items: [
          "CIA triad",
          "Authentication and authorization",
          "Cryptography basics and vulnerability analysis",
        ],
      },
    ],
  },
  soc: {
    title: "SOC Analyst / Blue Team",
    level: "Intermediate",
    stages: [
      {
        step: "Stage 1",
        title: "Security Foundations",
        items: [
          "Threats, risks, and security controls",
          "CIA triad and incident concepts",
          "Baselining and data handling",
        ],
      },
      {
        step: "Stage 2",
        title: "Network and Endpoint Visibility",
        items: [
          "Logs, packets, and endpoint telemetry",
          "Windows and Linux system events",
          "Networking and common attack paths",
        ],
      },
      {
        step: "Stage 3",
        title: "Threat Detection",
        items: [
          "SIEM fundamentals",
          "Correlation rules and alert triage",
          "Detection engineering basics",
        ],
      },
      {
        step: "Stage 4",
        title: "Incident Response",
        items: [
          "Containment and eradication",
          "Evidence handling and documentation",
          "Escalation procedures",
        ],
      },
      {
        step: "Stage 5",
        title: "Threat Hunting",
        items: [
          "Hypothesis development",
          "Behavioral analytics",
          "Adversary tradecraft and indicators",
        ],
      },
      {
        step: "Stage 6",
        title: "Operational Readiness",
        items: [
          "Playbooks and runbooks",
          "Reporting and communications",
          "Career readiness and analyst workflows",
        ],
      },
    ],
  },
  cloud: {
    title: "Cloud Security",
    level: "Intermediate",
    stages: [
      {
        step: "Stage 1",
        title: "Cloud Fundamentals",
        items: [
          "Core cloud concepts",
          "Shared responsibility model",
          "Virtualization and resource models",
        ],
      },
      {
        step: "Stage 2",
        title: "Identity and Access",
        items: [
          "IAM, roles, and policies",
          "Least privilege and federation",
          "Secrets and token management",
        ],
      },
      {
        step: "Stage 3",
        title: "Network Security",
        items: [
          "VPC, subnets, and routing",
          "Security groups and firewalls",
          "Private connectivity and DNS",
        ],
      },
      {
        step: "Stage 4",
        title: "Workload Protection",
        items: [
          "Containers and Kubernetes basics",
          "Image scanning and integrity checks",
          "Runtime visibility and patching",
        ],
      },
      {
        step: "Stage 5",
        title: "Monitoring and Compliance",
        items: [
          "Logging, alerting, and tracing",
          "Posture management and drift detection",
          "Security baselines and policy review",
        ],
      },
      {
        step: "Stage 6",
        title: "Resilience and Automation",
        items: [
          "Infrastructure as code",
          "Secure automation pipelines",
          "Disaster recovery and incident playbooks",
        ],
      },
    ],
  },
};

const roadmapTitle = document.getElementById("roadmapTitle");
const roadmapLevel = document.getElementById("roadmapLevel");
const timeline = document.getElementById("timeline");
const roadmapButtons = Array.from(document.querySelectorAll(".role-btn"));

function renderRoadmap(key) {
  const data = roadmapData[key];
  if (!data) return;

  roadmapTitle.textContent = data.title;
  roadmapLevel.textContent = data.level;

  timeline.innerHTML = data.stages
    .map(
      (stage, index) => `
        <div class="stage-item ${index === 0 ? "current" : ""}">
          <span class="stage-step">${stage.step}</span>
          <div class="stage-body">
            <h4>${stage.title}</h4>
            <ul>
              ${stage.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </div>
      `
    )
    .join("");
}

roadmapButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.roadmap;

    roadmapButtons.forEach((btn) => btn.classList.toggle("is-active", btn === button));
    renderRoadmap(key);
  });
});

const pathCards = document.querySelectorAll(".path-card .card-button");
pathCards.forEach((button) => {
  button.addEventListener("click", () => {
    const role = button.closest(".path-card")?.dataset.role;
    const mapKey = {
      pentest: "pentest",
      soc: "soc",
      cloud: "cloud",
      network: "pentest",
      fundamentals: "pentest",
      websec: "pentest",
      forensics: "pentest",
      grc: "pentest",
      "security-engineering": "pentest",
      malware: "pentest",
    }[role] || "pentest";

    const targetButton = document.querySelector(`.role-btn[data-roadmap="${mapKey}"]`);
    if (targetButton) {
      roadmapButtons.forEach((btn) => btn.classList.toggle("is-active", btn === targetButton));
      renderRoadmap(mapKey);
      document.getElementById("beginner").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

renderRoadmap("pentest");













































































































