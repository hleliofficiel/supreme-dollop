/* Nova Musique Documentation Portal i18n & Translation System */

const translations = {
  en: {
    brand_title: "Nova Musique documentation",
    doc_portal: "DOCS PORTAL",
    search_placeholder: "Search documentation...",
    nav_getting_started: "Getting Started",
    nav_overview: "Overview & Features",
    nav_requirements: "Prerequisites & Requirements",
    nav_restoration: "Android Studio Restoration",
    nav_assembly: "App Assembly & Rebranding",
    nav_configuration: "App Configuration & Secrets",
    nav_customization: "Colors, Icons & UI Themes",
    nav_legal: "Legal Pages (Privacy & TOS)",
    nav_monetization_sub: "AdMob & Multi-Platform Ads",
    nav_architecture: "Architecture & Modules",
    nav_support: "Support & Deployment",
    nav_troubleshooting: "Troubleshooting & FAQ",
    nav_download: "Download & Production APK",
    hero_title: "Nova Musique Developer Documentation",
    hero_subtitle: "Complete, beginner-friendly technical guide for building, customizing, configuring, monetizing, and deploying Nova Musique with Android Studio.",
    hero_badge_tech: "Kotlin + Jetpack Compose",
    hero_badge_arch: "Clean MVVM + Room DB",
    hero_badge_media: "AndroidX Media3 ExoPlayer",
    hero_badge_ads: "AdMob Monetization Ready",
    quick_start_title: "Quick Documentation Sections",
    copied_toast: "Copied to clipboard!",
    footer_rights: "© 2026 Nova Musique Audio Suite. All rights reserved to the team PayFopus."
  },
  ar: {
    brand_title: "توثيق نوفا ميوزيك",
    doc_portal: "بوابة التوثيق",
    search_placeholder: "ابحث في التوثيق...",
    nav_getting_started: "البداية والإعداد",
    nav_overview: "نظرة عامة والمميزات",
    nav_requirements: "المتطلبات الأساسية والنظام",
    nav_restoration: "استعادة المشروع في أندرويد ستوديو",
    nav_assembly: "تجميع التطبيق وإعادة التسمية",
    nav_configuration: "تهيئة التطبيق والمفاتيح",
    nav_customization: "الألوان، الأيقونات والمظاهر",
    nav_legal: "السياسات والسياسة والخدمة",
    nav_monetization_sub: "إعلانات أد موب والشبكات",
    nav_architecture: "المعمارية والمكونات",
    nav_support: "الدعم والتشغيل",
    nav_troubleshooting: "استكشاف الأخطاء وحلها",
    nav_download: "تنزيل التطبيق وتجميعه",
    hero_title: "دليل التوثيق المطور لتطبيق نوفا ميوزيك",
    hero_subtitle: "مرجع تقني شامل ومبسط للمبتدئين لبناء، تخصيص، إعداد، تحقيق الدخل، ونشر التطبيق باستخدام أندرويد ستوديو.",
    hero_badge_tech: "كوتلن + جيت باك كومبوز",
    hero_badge_arch: "معمارية MVVM + قاعدة Room",
    hero_badge_media: "Media3 ExoPlayer الحديث",
    hero_badge_ads: "جاهز للربح عبر AdMob",
    quick_start_title: "أقسام التوثيق السريعة",
    copied_toast: "تم النسخ إلى الحافظة!",
    footer_rights: "© 2026 تطبيق نوفا ميوزيك للصوتيات. جميع الحقوق محفوظة لفريق PayFopus."
  }
};

let currentLang = localStorage.getItem("doc_lang") || "en";

function applyLanguage(lang) {
  if (!translations[lang]) lang = "en";
  currentLang = lang;
  localStorage.setItem("doc_lang", lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  const dict = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.value = lang;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);

  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      applyLanguage(e.target.value);
    });
  }
});
