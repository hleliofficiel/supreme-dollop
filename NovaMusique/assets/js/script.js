/* Nova Music Documentation Portal Core Script */

document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle Logic
  const themeBtn = document.getElementById("themeToggleBtn");
  let currentTheme = localStorage.getItem("doc_theme") || "dark";

  function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem("doc_theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    if (themeBtn) {
      themeBtn.innerHTML = theme === "dark" ? '<span>Dark</span>' : '<span>Light</span>';
    }
  }

  applyTheme(currentTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      applyTheme(currentTheme === "dark" ? "light" : "dark");
    });
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const sidebar = document.querySelector(".sidebar");

  if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("mobile-open");
    });

    document.addEventListener("click", (e) => {
      if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target) && sidebar.classList.contains("mobile-open")) {
        sidebar.classList.remove("mobile-open");
      }
    });
  }

  // Active Nav Link Highlighting
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href && (currentPath.endsWith(href) || (href === "index.html" && currentPath.endsWith("/")))) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Copy Code Snippet Functionality
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const codeBlock = btn.closest(".code-box").querySelector("code");
      if (codeBlock) {
        navigator.clipboard.writeText(codeBlock.innerText).then(() => {
          showToast(window.translations && window.translations[currentLang] ? window.translations[currentLang].copied_toast : "Copied to clipboard!");
        }).catch(err => {
          console.error("Failed to copy code: ", err);
        });
      }
    });
  });

  // Toast System
  function showToast(message) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  // Live Documentation Search Filter
  const searchInput = document.getElementById("docSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      const searchableElements = document.querySelectorAll(".doc-card, .section-block, .step-item");

      if (query === "") {
        searchableElements.forEach(el => el.style.display = "");
        return;
      }

      searchableElements.forEach(el => {
        const text = el.innerText.toLowerCase();
        if (text.includes(query)) {
          el.style.display = "";
        } else {
          el.style.display = "none";
        }
      });
    });
  }
});
