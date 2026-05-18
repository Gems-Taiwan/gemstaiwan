// script.js

const isChinesePage = window.location.pathname.includes("/zh/");
const assetPrefix = isChinesePage ? "../" : "";

function getAssetPath(path) {
  return `${assetPrefix}${path}`;
}

function showSection(sectionId) {
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    section.classList.remove("active");
  });

  const selectedSection = document.getElementById(sectionId);

  if (selectedSection) {
    selectedSection.classList.add("active");
    window.scrollTo(0, 0);
  }
}

/* ══════════════════════════════════════
   INTERACTIVE OUTREACH MAP
══════════════════════════════════════ */

const outreachMapData = {
  luzhou: {
    title: isChinesePage ? "蘆洲國小" : "Luzhou Elementary School",
    image: getAssetPath("images/outreach/luzhou.jpg"),
    alt: "Luzhou Elementary School outreach"
  },

  yucheng: {
    title: isChinesePage ? "臺北市立育成高中" : "Taipei Municipal Yucheng Senior High School",
    image: getAssetPath("images/outreach/yucheng.jpg"),
    alt: "Taipei Municipal Yucheng Senior High School outreach"
  },

  xingya: {
    title: isChinesePage ? "興雅國小" : "Xing Ya Elementary School",
    image: getAssetPath("images/outreach/xingya.jpg"),
    alt: "Xing Ya Elementary School outreach"
  },

  fude: {
    title: isChinesePage ? "福德國小" : "Fude Elementary School",
    image: getAssetPath("images/outreach/fude.jpg"),
    alt: "Fude Elementary School outreach"
  },

  evergreen: {
    title: isChinesePage ? "長青幼兒園" : "Evergreen Kindergarten",
    image: getAssetPath("images/outreach/evergreen.jpg"),
    alt: "Evergreen Kindergarten outreach"
  },

  yonghe: {
    title: isChinesePage ? "新北市立永和國中" : "New Taipei Municipal Yonghe Junior High School",
    image: getAssetPath("images/outreach/yonghe.jpg"),
    alt: "New Taipei Municipal Yonghe Junior High School outreach"
  },

  yifang: {
    title: isChinesePage ? "義方國小" : "Yifang Elementary School",
    image: getAssetPath("images/outreach/yifang.jpg"),
    alt: "Yifang Elementary School outreach"
  },

  huaxing: {
    title: isChinesePage ? "華興育幼院" : "Huaxing Children’s Home",
    image: getAssetPath("images/outreach/huaxing.jpg"),
    alt: "Huaxing Children’s Home outreach"
  },

  daan: {
    title: isChinesePage ? "大安國小" : "Da’an Elementary School",
    image: getAssetPath("images/outreach/daan.jpg"),
    alt: "Da’an Elementary School outreach"
  },

  visual: {
    title: isChinesePage ? "臺北市立啟明學校" : "Taipei School for the Visually Impaired",
    image: getAssetPath("images/outreach/visual.jpg"),
    alt: "Taipei School for the Visually Impaired outreach"
  },

  xisong: {
    title: isChinesePage ? "西松高中" : "Xisong High School",
    image: getAssetPath("images/outreach/xisong.jpg"),
    alt: "Xisong High School outreach"
  }
};

function updateOutreachMap(pointId) {
  const data = outreachMapData[pointId];

  if (!data) {
    return;
  }

  const titleEl = document.getElementById("map-info-title");
  const imageEl = document.getElementById("map-info-image");

  if (!titleEl || !imageEl) {
    return;
  }

  titleEl.textContent = data.title;
  imageEl.src = data.image;
  imageEl.alt = data.alt;

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

  const activePoint =
    document.querySelector(".map-point.active, .map-point-button.active") ||
    mapPoints[0];

  if (activePoint && activePoint.dataset.mapPoint) {
    updateOutreachMap(activePoint.dataset.mapPoint);
  }
}

/* ══════════════════════════════════════
   PAST PROJECTS TIMELINE
   Click a timeline dot to show that year only
══════════════════════════════════════ */

function initPastProjectsTimeline() {
  const projectTabs = document.querySelectorAll("[data-project-tab]");
  const projectPanels = document.querySelectorAll("[data-project-year]");

  if (!projectTabs.length || !projectPanels.length) {
    return;
  }

  function showProjectYear(year) {
    projectTabs.forEach(tab => {
      const isActive = tab.dataset.projectTab === year;
      tab.classList.toggle("active", isActive);

      const dot = tab.querySelector(".tl-dot");
      if (dot) {
        dot.classList.toggle("active", isActive);
      }
    });

    projectPanels.forEach(panel => {
      const isActive = panel.dataset.projectYear === year;
      panel.classList.toggle("active", isActive);
    });
  }

  projectTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      showProjectYear(tab.dataset.projectTab);
    });
  });

  const activeTab =
    document.querySelector("[data-project-tab].active") ||
    projectTabs[0];

  if (activeTab && activeTab.dataset.projectTab) {
    showProjectYear(activeTab.dataset.projectTab);
  }
}

/* ══════════════════════════════════════
   INITIALIZE PAGE FEATURES
══════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  initOutreachMap();
  initPastProjectsTimeline();
});