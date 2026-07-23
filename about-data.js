// ============================================
// EDIT YOUR ABOUT INFO HERE — this is the only file you need to touch
// to update your bio, education, or skills.
//
// To make a word/phrase red & bold, wrap it like this:
//   "I'm a <span class=\"highlight\">final-year</span> student..."
// ============================================

const aboutData = {
  photo: "assets/header_navy (1).png",

  heading: "Hi, I'm Nazah",

  // Short intro line under the photo. Wrap key words in
  // <span class="highlight">...</span> to make them red & bold.
  intro: "I'm currently looking for opportunities in <span class=\"highlight\">Dubai/UAE</span> and <span class=\"highlight\">Singapore/Malaysia</span>, and taking on freelance projects on <span class=\"highlight\">Upwork</span>.",

  // Each string becomes its own paragraph in the About Me section.
  // Add/remove lines freely. Wrap key words the same way as above.
  paragraphs: [
    "I'm a final-year <span class=\"highlight\">Mechanical Engineering</span> student at NIT Tiruchirappalli, graduating <span class=\"highlight\">August 2026</span>. Somewhere along the way I got pulled into data engineering, machine learning, and now front-end development — all self-taught.",
    "My strongest area is <span class=\"highlight\">data engineering</span>: building ETL pipelines, working with Airflow and Kafka, and writing SQL that actually answers business questions. I'm now expanding into front-end and full-stack work to build complete products, not just pipelines."
  ],

  // Add/remove entries freely. Each becomes one row.
  education: [
    { title: "B.Tech, Mechanical Engineering", place: "NIT Tiruchirappalli", year: "2022 - 2026 (Expected)" }
  ],

  // Add/remove skills freely.
  skills: [
    "Python", "SQL", "Apache Airflow", "Apache Kafka", "PySpark", "Azure Databricks", "Delta Lake", "Power BI", "HTML/CSS", "JavaScript"
  ]
};

// Renders everything — do not edit below this line.
function renderAbout() {
  const container = document.getElementById("about-container");
  if (!container) return;

  const paragraphsHtml = aboutData.paragraphs.map(p => `<p>${p}</p>`).join("");

  const educationHtml = aboutData.education.map(e => `
    <div class="about__edu-item">
      <h4>${e.title}</h4>
      <p>${e.place} · ${e.year}</p>
    </div>
  `).join("");

  const skillsHtml = aboutData.skills.map(s => `<span>${s}</span>`).join("");

  container.innerHTML = `
    <div class="about__top">
      <div class="about__image">
        <img src="${aboutData.photo}" alt="Nazah" />
      </div>
      <div class="about__intro">
        <h2>${aboutData.heading}</h2>
        <p>${aboutData.intro}</p>
      </div>
    </div>

    <div class="about__sections">
      <div class="about__section">
        <h3>About Me</h3>
        ${paragraphsHtml}
      </div>

      <div class="about__section">
        <h3>Skills</h3>
        <div class="about__tags">${skillsHtml}</div>
      </div>

      <div class="about__section">
        <h3>Education</h3>
        ${educationHtml}
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", renderAbout);
