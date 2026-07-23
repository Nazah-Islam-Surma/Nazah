// ============================================
// EDIT YOUR PROJECTS HERE — this is the only file you need to touch
// to add, remove, or update a project.
//
// To add a new project: copy one { ... } block below and edit the values.
// To remove a project: delete its whole { ... } block.
// status can be "completed" or "upcoming" — controls the badge text.
// ============================================

const projects = [
  {
    title: "Advanced SQL Sales Analytics",
    description: "Deep-dive sales analytics using advanced SQL — window functions, CTEs, and query optimization on raw transaction data.",
    tags: ["SQL", "Analytics"],
    link: "#",
    status: "completed"
  },
  {
    title: "ETL Pipeline with Airflow & Bash",
    description: "Automated ETL pipeline orchestrated with Apache Airflow, using Bash scripting for extraction and transformation stages.",
    tags: ["Python", "Airflow", "Bash"],
    link: "#",
    status: "completed"
  },
  {
    title: "Real-Time E-commerce ETL",
    description: "Real-time streaming pipeline built with Apache Kafka and Airflow, processing live e-commerce transaction data end-to-end.",
    tags: ["Kafka", "Airflow", "Streaming"],
    link: "#",
    status: "completed"
  },
  {
    title: "Flight Delay Data Visualization",
    description: "Multi-source data visualization project analyzing flight delay patterns from several APIs into a unified dashboard.",
    tags: ["Python", "Data Viz"],
    link: "#",
    status: "completed"
  },
  {
    title: "Portfolio Website Chatbot",
    description: "Planned: a small LangGraph + FastAPI powered assistant embedded in the portfolio site to answer visitor questions about my projects.",
    tags: ["LangGraph", "FastAPI", "RAG"],
    link: "#",
    status: "upcoming"
  }
];

// Renders the cards into #projects-container — do not edit below this line.
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projects.map(p => {
    const badge = p.status === "upcoming" ? "Upcoming" : "Completed";

    const tagsHtml = p.tags.map(tag => `<span>${tag}</span>`).join("");

    return `
      <div class="project__card">
        <h3>${p.title}</h3>
        <p class="project__status">${badge}</p>
        <p>${p.description}</p>
        <div class="project__tags">${tagsHtml}</div>
        <a href="${p.link}" class="btn">View Project</a>
      </div>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);
