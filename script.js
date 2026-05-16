// script.js

function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    section.classList.remove("active");
  });

  // Show selected section
  const selectedSection = document.getElementById(sectionId);

  if (selectedSection) {
    selectedSection.classList.add("active");
    window.scrollTo(0, 0);
  }
}

// Interactive outreach map data
const outreachMapData = {
  luzhou: {
    year: "2024–2025 Outreach",
    title: "Luzhou elementary school",
    text: "Elementary outreach session introducing students to synthetic biology through simple, accessible examples connected to everyday life and agriculture.",
    tags: [
      "Elementary students",
      "Intro to synthetic biology",
      "Hands-on education"
    ]
  },

  yucheng: {
    year: "2024–2025 Outreach",
    title: "Taipei Municipal Yucheng Senior High School",
    text: "High-school outreach focused on connecting synthetic biology concepts to real-world problem solving and iGEM-style project design.",
    tags: [
      "High school",
      "Project design",
      "Synbio applications"
    ]
  },

  xingya: {
    year: "2024–2025 Outreach",
    title: "Xing Ya Elementary School",
    text: "Inclusive outreach location where materials can be adapted to make synthetic biology more accessible for different learning needs.",
    tags: [
      "Accessibility",
      "Inclusive education",
      "Adapted materials"
    ]
  },

  fude: {
    year: "2024–2025 Outreach",
    title: "Fude Elementary School",
    text: "Student workshop designed to make synthetic biology feel approachable through discussion, examples, and education activities.",
    tags: [
      "Workshop",
      "Student discussion",
      "Science communication"
    ]
  },

  evergreen: {
    year: "2024–2025 Outreach",
    title: "Evergreen Kindergarten",
    text: "Southern Taiwan outreach stop expanding the team’s education impact beyond Taipei and connecting biology to local communities.",
    tags: [
      "Southern Taiwan",
      "Local communities",
      "Education impact"
    ]
  },
  yonghe: {
    year: "2024–2025 Outreach",
    title: "New Taipei Municipal Yonghe Junior High School",
    text: "Southern Taiwan outreach stop expanding the team’s education impact beyond Taipei and connecting biology to local communities.",
    tags: [
      "Southern Taiwan",
      "Local communities",
      "Education impact"
    ]
  },
  visual: {
    year: "2024–2025 Outreach",
    title: "Taipei School for the Visually Impaired",
    text: "Southern Taiwan outreach stop expanding the team’s education impact beyond Taipei and connecting biology to local communities.",
    tags: [
      "Southern Taiwan",
      "Local communities",
      "Education impact"
    ]
  },

  xinsong: {
    year: "2024–2025 Outreach",
    title: "Xisong High School",
    text: "Community-facing education stop connecting crop stress, agriculture, and biological solutions to students outside central Taipei.",
    tags: [
      "Community outreach",
      "Agriculture",
      "Crop stress"
    ]
  }
};

function updateOutreachMap(pointId) {
  const data = outreachMapData[pointId];

  if (!data) {
    return;
  }

  const yearEl = document.getElementById("map-info-year");
  const titleEl = document.getElementById("map-info-title");
  const textEl = document.getElementById("map-info-text");
  const tagsEl = document.getElementById("map-info-tags");

  if (!yearEl || !titleEl || !textEl || !tagsEl) {
    return;
  }

  yearEl.textContent = data.year;
  titleEl.textContent = data.title;
  textEl.textContent = data.text;

  tagsEl.innerHTML = data.tags
    .map(tag => `<li>${tag}</li>`)
    .join("");

  document.querySelectorAll(".map-point, .map-point-button").forEach(point => {
    point.classList.toggle("active", point.dataset.mapPoint === pointId);
  });
}

function initOutreachMap() {
  const mapPoints = document.querySelectorAll(".map-point, .map-point-button");

  if (!mapPoints.length) {
    return;
  }

  mapPoints.forEach(point => {
    point.addEventListener("click", () => {
      updateOutreachMap(point.dataset.mapPoint);
    });

    point.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        updateOutreachMap(point.dataset.mapPoint);
      }
    });
  });
}
/* ══════════════════════════════════════
 PAST PROJECTS TIMELINE
 Click a timeline dot to show that year only
══════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  const projectTabs = document.querySelectorAll("[data-project-tab]");
  const projectPanels = document.querySelectorAll("[data-project-year]");

  if (!projectTabs.length || !projectPanels.length) return;

  function showProjectYear(year) {
    projectTabs.forEach((tab) => {
      const isActive = tab.dataset.projectTab === year;
      tab.classList.toggle("active", isActive);

      const dot = tab.querySelector(".tl-dot");
      if (dot) {
        dot.classList.toggle("active", isActive);
      }
    });

    projectPanels.forEach((panel) => {
      const isActive = panel.dataset.projectYear === year;
      panel.classList.toggle("active", isActive);
    });
  }

  projectTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      showProjectYear(tab.dataset.projectTab);
    });
  });

  showProjectYear("2023");
});

document.addEventListener("DOMContentLoaded", initOutreachMap);