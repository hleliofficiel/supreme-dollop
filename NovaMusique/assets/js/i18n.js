/* Nova Musique Documentation Portal i18n & Translation System */

const translations = {
  en: {
    brand_title: "Nova Musique documentation",
    doc_portal: "DOCS PORTAL",
    search_placeholder: "Search documentation...",
    theme_toggle: "Theme",
    lang_toggle: "Language",
    nav_getting_started: "Getting Started",
    nav_overview: "Overview & Features",
    nav_requirements: "Prerequisites & Requirements",
    nav_restoration: "Android Studio Restoration",
    nav_assembly: "App Assembly & Rebranding",
    nav_configuration: "App Configuration & Secrets",
    nav_customization: "Colors, Icons & UI Themes",
    nav_legal: "Legal Pages (Privacy & TOS)",
    nav_monetization: "Monetization & Ads",
    nav_monetization_sub: "AdMob & Multi-Platform Ads",
    nav_architecture: "Architecture & Modules",
    nav_media_player: "Media3 ExoPlayer & Engine",
    nav_room_db: "Room Local Database",
    nav_dsp_equalizer: "Pro 3D DSP & Equalizer",
    nav_lyrics_engine: "LrcLib Synced Lyrics",
    nav_duplicate_finder: "Duplicate Finder Engine",
    nav_insights: "Listening Insights Engine",
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
    card_requirements_title: "System & Software Requirements",
    card_requirements_desc: "Prerequisites including JDK 17, Android Studio Ladybug/Jellyfish, Android SDK 36, Git, and Gradle 8.5+.",
    card_restoration_title: "Android Studio Restoration",
    card_restoration_desc: "Step-by-step guide for beginners to import, setup JDK 17, sync Gradle, and fix compilation errors.",
    card_assembly_title: "App Assembly & Rebranding Guide",
    card_assembly_desc: "How to compile debug/release APKs, rename packages, build custom releases like Peaky Baby or Nova Musique.",
    card_config_title: "App Secrets & Package Config",
    card_config_desc: "How to change the package name (applicationId), app title, launcher icon, and set up .env environment secrets.",
    card_customization_title: "Colors, Icons & UI Themes",
    card_customization_desc: "Customize Material 3 color palettes in Color.kt, launcher vector icons, vector album covers, and dark/light themes.",
    card_legal_title: "Legal Pages (Privacy Policy & TOS)",
    card_legal_desc: "How to edit, update, or localize the Privacy Policy and Terms of Service screens in LegalPagesScreen.kt.",
    card_ads_title: "AdMob & Ads Configuration",
    card_ads_desc: "Configure banner, interstitial, native, and rewarded ad units with test IDs or live publisher keys.",
    card_features_title: "Complete Feature Modification Guide",
    card_features_desc: "Deep dive into 3D DSP Equalizer, Synced LrcLib lyrics, Room database schema, and Duplicate audio finder.",
    card_download_title: "Production APK Download & Testing",
    card_download_desc: "Direct download link for NovaMusique.apk and step-by-step assembly guide using Android Studio or Gradle CLI.",
    copy_code: "Copy Code",
    copied_toast: "Copied to clipboard!",
    footer_rights: "© 2026 Nova Musique Audio Suite. All rights reserved to the team PayFopus."
  },
  ar: {
    brand_title: "توثيق نوفا ميوزيك",
    doc_portal: "بوابة التوثيق",
    search_placeholder: "ابحث في التوثيق...",
    theme_toggle: "المظهر",
    lang_toggle: "اللغة",
    nav_getting_started: "البداية والإعداد",
    nav_overview: "نظرة عامة والمميزات",
    nav_requirements: "المتطلبات الأساسية والنظام",
    nav_restoration: "استعادة المشروع في أندرويد ستوديو",
    nav_assembly: "تجميع التطبيق وإعادة التسمية",
    nav_configuration: "تهيئة التطبيق والمفاتيح",
    nav_customization: "الألوان، الأيقونات والمظاهر",
    nav_legal: "السياسات والسياسة والخدمة",
    nav_monetization: "الريادة والإعلانات",
    nav_monetization_sub: "إعلانات أد موب والشبكات",
    nav_architecture: "المعمارية والمكونات",
    nav_media_player: "مشغل الميديا ExoPlayer",
    nav_room_db: "قاعدة بيانات Room المحلية",
    nav_dsp_equalizer: "معالج الصوت 3D و EQ",
    nav_lyrics_engine: "محرك الكلمات المتزامنة LrcLib",
    nav_duplicate_finder: "مكتشف الملفات المكررة",
    nav_insights: "إحصائيات واستصارات الاستماع",
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
    card_requirements_title: "متطلبات النظام والبرامج",
    card_requirements_desc: "البرامج المطلوبة مثل JDK 17، أندرويد ستوديو، أندرويد SDK 36، جيت وأدوات جادل 8.5+.",
    card_restoration_title: "استعادة أندرويد ستوديو",
    card_restoration_desc: "دليل للمبتدئين لاستيراد المشروع، ضبط JDK 17، مزامنة جادل وتصحيح أخطاء التجميع.",
    card_assembly_title: "تجميع التطبيق وتغيير العلامة",
    card_assembly_desc: "كيفية بناء ملفات APK، تغيير اسم المعرف، وبناء إصدارات مخصصة مثل Peaky Baby أو Nova Musique.",
    card_config_title: "تهيئة التطبيق والمفاتيح",
    card_config_desc: "كيفية تغيير المعرف (Package Name)، اسم التطبيق، الأيقونة، وإعداد ملف السرية .env.",
    card_customization_title: "الألوان، الأيقونات والمظاهر",
    card_customization_desc: "تخصيص لوحة ألوان Material 3 في Color.kt، أيقونات المتجه، أغلفة الألبومات والمظاهر.",
    card_legal_title: "صفحات الخصوصية وشروط الخدمة",
    card_legal_desc: "طريقة تعديل وتحديث وترجمة صفحة سياسة الخصوصية وشروط الاستخدام في LegalPagesScreen.kt.",
    card_ads_title: "تهيئة إعلانات AdMob",
    card_ads_desc: "إعداد وحدات الإعلان (البانر، البيني، والمكافآت) باستخدام المعرفات الاختيارية والحقيقية.",
    card_features_title: "دليل تعديل ميزات التطبيق الكاملة",
    card_features_desc: "شرح مفصل لمعادل الصوت 3D DSP، محرك الكلمات LrcLib، قاعدة البيانات ومكتشف التكرار.",
    card_download_title: "تنزيل APK النسخة النهائية وتجربتها",
    card_download_desc: "رابط مباشر لتنزيل NovaMusique.apk ودليل التجميع المباشر عبر أندرويد ستوديو أو الأوامر.",
    copy_code: "نسخ الكود",
    copied_toast: "تم النسخ إلى الحافظة!",
    footer_rights: "© 2026 تطبيق نوفا ميوزيك للصوتيات. جميع الحقوق محفوظة لفريق PayFopus."
  },
  fr: {
    brand_title: "Nova Musique documentation",
    doc_portal: "PORTAIL DOCS",
    search_placeholder: "Rechercher dans la doc...",
    theme_toggle: "Thème",
    lang_toggle: "Langue",
    nav_getting_started: "Commencer",
    nav_overview: "Aperçu & Fonctions",
    nav_requirements: "Prérequis & Exigences",
    nav_restoration: "Restauration Android Studio",
    nav_assembly: "Assemblage & Rebranding",
    nav_configuration: "Configuration & Secrets",
    nav_customization: "Couleurs, Icônes & Thèmes",
    nav_legal: "Pages Légales (Confidentialité)",
    nav_monetization: "Monétisation & Publicités",
    nav_monetization_sub: "AdMob & Réseaux Pubs",
    nav_architecture: "Architecture & Modules",
    nav_media_player: "Media3 ExoPlayer",
    nav_room_db: "Base de données Room",
    nav_dsp_equalizer: "Égaliseur 3D DSP",
    nav_lyrics_engine: "Paroles Synchro LrcLib",
    nav_duplicate_finder: "Détecteur de Doublons",
    nav_insights: "Statistiques d'Écoute",
    nav_support: "Support & Déploiement",
    nav_troubleshooting: "Dépannage & FAQ",
    nav_download: "Télécharger APK Production",
    hero_title: "Documentation Développeur Nova Musique",
    hero_subtitle: "Guide technique complet et accessible aux débutants pour construire, personnaliser, configurer, monétiser et déployer Nova Musique avec Android Studio.",
    hero_badge_tech: "Kotlin + Jetpack Compose",
    hero_badge_arch: "MVVM Clean + Room DB",
    hero_badge_media: "AndroidX Media3 ExoPlayer",
    hero_badge_ads: "Monétisation AdMob Prête",
    quick_start_title: "Sections Rapides",
    card_requirements_title: "Exigences Système & Logiciels",
    card_requirements_desc: "Logiciels requis : JDK 17, Android Studio Ladybug/Jellyfish, Android SDK 36, Git et Gradle 8.5+.",
    card_restoration_title: "Restauration Android Studio",
    card_restoration_desc: "Guide pas à pas pour débutants : importer le projet, configurer JDK 17, synchroniser Gradle et résoudre les erreurs.",
    card_assembly_title: "Assemblage & Guide de Rebranding",
    card_assembly_desc: "Comment compiler les APK debug/release, renommer le package et construire des versions comme Peaky Baby ou Nova Musique.",
    card_config_title: "Secrets & Configuration du Package",
    card_config_desc: "Changer le nom de package (applicationId), le titre de l'application, l'icône et configurer le fichier .env.",
    card_customization_title: "Couleurs, Icônes & Thèmes UI",
    card_customization_desc: "Personnaliser la palette de couleurs Material 3 dans Color.kt, l'icône de lancement vectorielle et les thèmes.",
    card_legal_title: "Pages Légales (Confidentialité & CGU)",
    card_legal_desc: "Comment modifier, mettre à jour et traduire les écrans de politique de confidentialité et conditions d'utilisation dans LegalPagesScreen.kt.",
    card_ads_title: "Configuration AdMob & Publicités",
    card_ads_desc: "Configurer les bannières, interstitiels et publicités vidéo avec identifiants de test ou clés réelles.",
    card_features_title: "Guide Complet de Modification des Fonctions",
    card_features_desc: "Exploration approfondie de l'égaliseur 3D, paroles LrcLib, schéma Room DB et nettoyeur de doublons.",
    card_download_title: "Télécharger APK Production & Tests",
    card_download_desc: "Lien de téléchargement direct pour NovaMusique.apk et guide d'assemblage pas à pas avec Android Studio.",
    copy_code: "Copier le code",
    copied_toast: "Copié dans le presse-papier!",
    footer_rights: "© 2026 Nova Musique Audio Suite. Tous droits réservés à l'équipe PayFopus."
  },
  es: {
    brand_title: "Nova Musique documentación",
    doc_portal: "PORTAL DOCS",
    search_placeholder: "Buscar en la documentación...",
    theme_toggle: "Tema",
    lang_toggle: "Idioma",
    nav_getting_started: "Empezando",
    nav_overview: "Resumen y Funciones",
    nav_requirements: "Requisitos y Prerrequisitos",
    nav_restoration: "Restauración Android Studio",
    nav_assembly: "Ensamblado y Rebranding",
    nav_configuration: "Configuración y Secretos",
    nav_customization: "Colores, Iconos y Temas",
    nav_legal: "Páginas Legales (Privacidad y TOS)",
    nav_monetization: "Monetización y Anuncios",
    nav_monetization_sub: "AdMob y Redes de Anuncios",
    nav_architecture: "Arquitectura y Módulos",
    nav_media_player: "Media3 ExoPlayer",
    nav_room_db: "Base de Datos Room",
    nav_dsp_equalizer: "Ecualizador 3D DSP",
    nav_lyrics_engine: "Letras Sincronizadas LrcLib",
    nav_duplicate_finder: "Buscador de Duplicados",
    nav_insights: "Estadísticas de Escucha",
    nav_support: "Soporte y Despliegue",
    nav_troubleshooting: "Solución de Problemas y FAQ",
    nav_download: "Descargar APK de Producción",
    hero_title: "Documentación para Desarrolladores Nova Musique",
    hero_subtitle: "Guía técnica completa para principiantes para construir, personalizar, configurar, monetizar y desplegar Nova Musique con Android Studio.",
    hero_badge_tech: "Kotlin + Jetpack Compose",
    hero_badge_arch: "Clean MVVM + Room DB",
    hero_badge_media: "AndroidX Media3 ExoPlayer",
    hero_badge_ads: "Monetización AdMob Lista",
    quick_start_title: "Secciones Rápidas",
    card_requirements_title: "Requisitos del Sistema y Software",
    card_requirements_desc: "Requisitos previos: JDK 17, Android Studio Ladybug/Jellyfish, Android SDK 36, Git y Gradle 8.5+.",
    card_restoration_title: "Restauración Android Studio",
    card_restoration_desc: "Guía paso a paso para principiantes: importar proyecto, configurar JDK 17, sincronizar Gradle y reparar errores.",
    card_assembly_title: "Ensamblado y Guía de Rebranding",
    card_assembly_desc: "Cómo compilar APKs de depuración/lanzamiento, renombrar paquetes y construir versiones como Peaky Baby o Nova Musique.",
    card_config_title: "Secretos y Configuración de Paquete",
    card_config_desc: "Cómo cambiar el nombre de paquete (applicationId), el título, el icono de lanzamiento y el archivo .env.",
    card_customization_title: "Colores, Iconos y Temas de UI",
    card_customization_desc: "Personalizar la paleta de colores Material 3 en Color.kt, el icono vectorial de lanzamiento y los temas.",
    card_legal_title: "Páginas Legales (Privacidad y Términos)",
    card_legal_desc: "Cómo editar, actualizar y traducir las pantallas de política de privacidad y términos de servicio en LegalPagesScreen.kt.",
    card_ads_title: "Configuración de AdMob y Anuncios",
    card_ads_desc: "Configurar banners, intersticiales y recompensados con IDs de prueba o claves reales.",
    card_features_title: "Guía Completa de Modificación de Funciones",
    card_features_desc: "Análisis profundo del ecualizador 3D, letras LrcLib, esquema de base de datos Room y limpiador de duplicados.",
    card_download_title: "Descargar APK de Producción y Pruebas",
    card_download_desc: "Enlace directo para descargar NovaMusique.apk y guía de ensamblado paso a paso con Android Studio.",
    copy_code: "Copier código",
    copied_toast: "¡Copiado al portapapeles!",
    footer_rights: "© 2026 Nova Musique Audio Suite. Todos los derechos reservados al equipo PayFopus."
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
