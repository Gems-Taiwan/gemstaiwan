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
    wenhua: {
      year: "2024–2025 Outreach",
      title: "Wenhua Elementary School",
      text: "Elementary outreach session introducing students to synthetic biology through simple, accessible examples connected to everyday life and agriculture.",
      tags: [
        "Elementary students",
        "Intro to synthetic biology",
        "Hands-on education"
      ]
    },
  
    jianguo: {
      year: "2024–2025 Outreach",
      title: "Jianguo High School",
      text: "High-school outreach focused on connecting synthetic biology concepts to real-world problem solving and iGEM-style project design.",
      tags: [
        "High school",
        "Project design",
        "Synbio applications"
      ]
    },
  
    visual: {
      year: "2024–2025 Outreach",
      title: "Taipei School for the Visually Impaired",
      text: "Inclusive outreach location where materials can be adapted to make synthetic biology more accessible for different learning needs.",
      tags: [
        "Accessibility",
        "Inclusive education",
        "Adapted materials"
      ]
    },
  
    yangmei: {
      year: "2024–2025 Outreach",
      title: "Yangmei / Tong Fu Outreach",
      text: "Community-facing education stop connecting crop stress, agriculture, and biological solutions to students outside central Taipei.",
      tags: [
        "Community outreach",
        "Agriculture",
        "Crop stress"
      ]
    },
  
    hongdao: {
      year: "2024–2025 Outreach",
      title: "Hongdao High School",
      text: "Student workshop designed to make synthetic biology feel approachable through discussion, examples, and education activities.",
      tags: [
        "Workshop",
        "Student discussion",
        "Science communication"
      ]
    },
  
    fongkong: {
      year: "2024–2025 Outreach",
      title: "Fong Kong Outreach",
      text: "Southern Taiwan outreach stop expanding the team’s education impact beyond Taipei and connecting biology to local communities.",
      tags: [
        "Southern Taiwan",
        "Local communities",
        "Education impact"
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
  
  document.addEventListener("DOMContentLoaded", initOutreachMap);