/**
 * VIRAS VISA - Interactive Multilingual & Motion Engine
 * Standalone Vanilla JavaScript - Zero build step required
 */

/* ==================== 1. MULTILINGUAL DICTIONARY ==================== */
const i18nData = {
  en: {
    dir: 'ltr',
    name: 'English',
    brandFirst: 'VIRAS',
    brandSecond: 'VISA',
    brandFull: 'VIRAS VISA',
    tagline: 'U.S. & CANADA IMMIGRATION',
    badgeTitle: 'Premier Immigration Advisory',
    heroSubtitle: 'Migrate Your Dreams. Guided by licensed U.S. and Canadian legal counsel every step of the journey.',
    btnBegin: 'Choose Your Destination',
    instructionPrompt: 'Select destination country to begin your journey',
    specUsa: 'U.S. EB & Non-Immigrant Categories',
    specCanada: 'Express Entry & Start-Up Visa',
    selectLanguage: 'Select Language',
    gatewaySelection: 'PORTAL DISCOVERY',
    chooseDestination: 'Choose Your Destination',
    destinationSubtitle: 'Select North America\'s premier jurisdictional corridors to explore accredited legal & residency programs.',
    usaTitle: 'UNITED STATES',
    usaDesc: 'EB-1 Extraordinary Ability, EB-2 NIW, Investor Visas (EB-5), Corporate L-1, and specialized tech & business immigration.',
    canadaTitle: 'CANADA',
    canadaDesc: 'Express Entry (FSW/CEC), Provincial Nominee Programs (PNP), Start-Up Visa, Intra-Company Transferees (ICT), and Study Permits.',
    explore: 'EXPLORE',
    back: 'Back',
    backToDestinations: 'Back to Destinations',
    statusOnline: 'LICENSED • ACCREDITED ADVISORY',
    torontoWashington: 'TORONTO • WASHINGTON D.C.',
    downloadZipBtn: 'Download ZIP',
    downloadZipTooltip: 'GitHub Pages Ready ZIP (No Build Step)',
    
    // USA Scene
    usaHeaderBadge: 'U.S. JURISDICTION • 50 STATES',
    usaHeaderTitle: 'United States Elite Immigration Gateway',
    usaHeaderDesc: 'Direct legal pathways to permanent residency (Green Card) and business visas managed by accredited AILA attorneys.',
    tabEb1: 'EB-1 (Extraordinary Ability)',
    tabNiw: 'EB-2 NIW (National Interest Waiver)',
    tabEb5: 'EB-5 (Immigrant Investor)',
    tabNonImmigrant: 'O-1 & L-1 (Talent & Corporate)',
    
    // Canada Scene
    canadaHeaderBadge: 'CANADIAN JURISDICTION • 10 PROVINCES',
    canadaHeaderTitle: 'Canada Federal & Provincial Gateway',
    canadaHeaderDesc: 'Federal Permanent Residency, Express Entry, and Provincial Nominee pathways under accredited CICC legal representation.',
    tabExpressEntry: 'Express Entry (FSW / CEC)',
    tabPnp: 'Provincial Nominees (PNP)',
    tabSuv: 'Start-Up Visa (SUV)',
    tabIct: 'Corporate Transfer (ICT & C11)',
    
    // Assessment & Action
    startAssessment: 'Instant Case Assessment',
    bookConsultation: 'Request Attorney Review',
    calcTitle: 'Eligibility Score Estimator',
    submitAssessment: 'Calculate Eligibility',
    consultSuccess: 'Your request has been received. A senior immigration counsel will contact you within 24 hours.'
  },
  fa: {
    dir: 'rtl',
    name: 'فارسی',
    brandFirst: 'ویراس',
    brandSecond: 'ویزا',
    brandFull: 'ویراس ویزا',
    tagline: 'مهاجرت تخصصی به آمریکا و کانادا',
    badgeTitle: 'مرکز تخصصی مهاجرت نخبگان و سرمایه‌گذاران',
    heroSubtitle: 'رویاهایت را مهاجرت کن؛ با تیمی از وکلای رسمی دادگستری آمریکا و کانادا در کنار شما هستیم.',
    btnBegin: 'انتخاب کشور مقصد',
    instructionPrompt: 'جهت شروع مسیر، کشور مقصد خود را برگزینید',
    specUsa: 'ویزاهای نخبگان و تجاری آمریکا (EB & O-1)',
    specCanada: 'اکسپرس اینتری و استارتاپ کانادا',
    selectLanguage: 'انتخاب زبان',
    gatewaySelection: 'درگاه اختصاصی مهاجرت',
    chooseDestination: 'کشور مقصد خود را انتخاب کنید',
    destinationSubtitle: 'یکی از دو حوزه قضایی اصلی آمریکای شمالی را جهت بررسی پرونده‌های مهاجرت تخصصی و اقامت برگزینید.',
    usaTitle: 'ایالات متحده آمریکا',
    usaDesc: 'ویزای نخبگان EB-1، پرونده‌های منافع ملی EB-2 NIW، سرمایه‌گذاری رسمی EB-5 و ویزاهای انتقال شرکتی L-1 و O-1.',
    canadaTitle: 'کانادا',
    canadaDesc: 'سیستم جامع اکسپرس اینتری (FSW/CEC)، برنامه‌های نامزدی استانی (PNP)، ویزای استارتاپ فدرال و ویزاهای تخصصی کار.',
    explore: 'ورود به پورتال',
    back: 'بازگشت',
    backToDestinations: 'بازگشت به انتخاب کشور',
    statusOnline: 'مشاوره رسمی و دارای پروانه حقوقی بین‌المللی',
    torontoWashington: 'تورنتو • واشنگتن دی‌سی',
    downloadZipBtn: 'دانلود فایل ZIP',
    downloadZipTooltip: 'آماده انتشار در گیت‌هاب پیجز (بدون نیاز به بیلد)',
    
    // USA Scene
    usaHeaderBadge: 'حوزه قضایی ایالات متحده آمریکا • ۵۰ ایالت',
    usaHeaderTitle: 'پورتال تخصصی مهاجرت به ایالات متحده آمریکا',
    usaHeaderDesc: 'مسیرهای قانونی اخذ گرین‌کارت دائم و ویزاهای شغلی نخبگان و تجار تحت نظارت مستقیم وکلای عضو کانون AILA.',
    tabEb1: 'EB-1 (نخبگان و مدیران بین‌المللی)',
    tabNiw: 'EB-2 NIW (منافع ملی نخبگان)',
    tabEb5: 'EB-5 (سرمایه‌گذاری در آمریکا)',
    tabNonImmigrant: 'O-1 & L-1 (ویزاهای کاری و کارآفرینی)',
    
    // Canada Scene
    canadaHeaderBadge: 'حوزه قضایی کانادا • ۱۰ استان و ۳ قلمرو',
    canadaHeaderTitle: 'پورتال تخصصی مهاجرت و اقامت کانادا',
    canadaHeaderDesc: 'برنامه‌های جامع اقامت دائم (PR)، جذب استعدادهای مهارتی و نوآورانه تحت نظارت وکلای رسمی کالج CICC.',
    tabExpressEntry: 'اکسپرس اینتری (Express Entry)',
    tabPnp: 'برنامه‌های استانی (PNP)',
    tabSuv: 'ویزای استارتاپ (Start-Up Visa)',
    tabIct: 'انتقال درون‌شرکتی (ICT & C11)',
    
    // Assessment & Action
    startAssessment: 'ارزیابی آنلاین شانس پرونده',
    bookConsultation: 'درخواست بررسی پرونده توسط وکیل',
    calcTitle: 'محاسبه‌گر شانس مهاجرت',
    submitAssessment: 'مشاهده نتیجه ارزیابی',
    consultSuccess: 'درخواست شما با موفقیت ثبت شد. مشاور ارشد در کمتر از ۲۴ ساعت با شما تماس خواهد گرفت.'
  },
  ar: {
    dir: 'rtl',
    name: 'العربية',
    brandFirst: 'فيراس',
    brandSecond: 'فيزا',
    brandFull: 'فيراس فيزا',
    tagline: 'هجرة الولايات المتحدة وكندا',
    badgeTitle: 'استشارات الهجرة الدولية الراقية',
    heroSubtitle: 'هاجر نحو أحلامك مع محامين معتمدين ومتخصصين في الهجرة القانونية لأمريكا الشمالية.',
    btnBegin: 'اختر الوجهة',
    instructionPrompt: 'حدد وجهتك لبدء مسار الهجرة',
    specUsa: 'تأشيرات الكفاءات والاستثمار الأمريكية',
    specCanada: 'برامج الدخول السريع والاستثمار الكندية',
    selectLanguage: 'اختر اللغة',
    gatewaySelection: 'بوابة الاكتشاف',
    chooseDestination: 'اختر وجهتك المفضلة',
    destinationSubtitle: 'حدد أحد أهم مسارات الهجرة في أمريكا الشمالية لاستكشاف البرامج المعتمدة قانونياً.',
    usaTitle: 'الولايات المتحدة',
    usaDesc: 'تأشيرات الكفاءات الاستثنائية EB-1، والمصلحة الوطنية NIW، وتأشيرة المستثمر EB-5 وتأشيرات الشركات.',
    canadaTitle: 'كندا',
    canadaDesc: 'برامج الدخول السريع Express Entry، والترشيح الإقليمي PNP، وتأشيرة الشركات الناشئة والدراسة.',
    explore: 'استكشاف',
    back: 'رجوع',
    backToDestinations: 'العودة لاختيار الوجهة',
    statusOnline: 'استشارات قانونية معتمدة ومرخصة',
    torontoWashington: 'تورونتو • واشنطن العاصمة',
    downloadZipBtn: 'تحميل ملف ZIP',
    downloadZipTooltip: 'جاهز للنشر على جيت هاب',
    
    usaHeaderBadge: 'الولاية القضائية الأمريكية • 50 ولاية',
    usaHeaderTitle: 'بوابة الهجرة الخاصة للولايات المتحدة',
    usaHeaderDesc: 'المسارات القانونية المباشرة للحصول على البطاقة الخضراء بإشراف محامي الهجرة المعتمدين لدى AILA.',
    tabEb1: 'EB-1 (الكفاءات الاستثنائية)',
    tabNiw: 'EB-2 NIW (المصلحة الوطنية)',
    tabEb5: 'EB-5 (المستثمر المهاجر)',
    tabNonImmigrant: 'O-1 & L-1 (تأشيرات الأعمال)',
    
    canadaHeaderBadge: 'الولاية القضائية الكندية • 10 مقاطعات',
    canadaHeaderTitle: 'بوابة الهجرة والإقامة الكندية',
    canadaHeaderDesc: 'برامج الإقامة الدائمة، والدخول السريع Express Entry بإشراف المستشارين المرخصين CICC.',
    tabExpressEntry: 'الدخول السريع (Express Entry)',
    tabPnp: 'برامج الترشيح الإقليمي (PNP)',
    tabSuv: 'تأشيرة الشركات الناشئة (SUV)',
    tabIct: 'نقل الموظفين (ICT & C11)',
    
    startAssessment: 'تقييم الأهلية الفوري',
    bookConsultation: 'طلب استشارة قانونية',
    calcTitle: 'حاسبة نقاط الهجرة',
    submitAssessment: 'عرض نتيجة التقييم',
    consultSuccess: 'تم استلام طلبكم بنجاح. سيتواصل معكم مستشار قانوني خلال 24 ساعة.'
  },
  fr: {
    dir: 'ltr',
    name: 'Français',
    brandFirst: 'VIRAS',
    brandSecond: 'VISA',
    brandFull: 'VIRAS VISA',
    tagline: 'IMMIGRATION ÉTATS-UNIS & CANADA',
    badgeTitle: 'Conseil Supérieur en Immigration',
    heroSubtitle: 'Migrez vos rêves avec l\'appui d\'avocats accrédités aux barreaux des États-Unis et du Canada.',
    btnBegin: 'Choisir la Destination',
    instructionPrompt: 'Sélectionnez votre pays de destination pour débuter',
    specUsa: 'Programmes EB & Visas d\'Affaires USA',
    specCanada: 'Entrée Express & Volets Provinciaux',
    selectLanguage: 'Sélectionner la Langue',
    gatewaySelection: 'DÉCOUVERTE DU PORTAIL',
    chooseDestination: 'Choisissez Votre Destination',
    destinationSubtitle: 'Sélectionnez les corridors d\'immigration prestigieux d\'Amérique du Nord.',
    usaTitle: 'ÉTATS-UNIS',
    usaDesc: 'Aptitudes Exceptionnelles EB-1, Dispense d\'Intérêt National NIW, Investisseurs EB-5 et mobilité L-1.',
    canadaTitle: 'CANADA',
    canadaDesc: 'Entrée Express (FSW/CEC), Candidats des Provinces (PNP), Visa Démarrage d\'Entreprise et Permis d\'Études.',
    explore: 'EXPLORER',
    back: 'Retour',
    backToDestinations: 'Retour aux Destinations',
    statusOnline: 'CABINET ACCRÉDITÉ ET AGRÉÉ',
    torontoWashington: 'TORONTO • WASHINGTON D.C.',
    downloadZipBtn: 'Télécharger ZIP',
    downloadZipTooltip: 'Prêt pour GitHub Pages',
    
    usaHeaderBadge: 'JURIDICTION USA • 50 ÉTATS',
    usaHeaderTitle: 'Portail d\'Excellence pour l\'Immigration aux USA',
    usaHeaderDesc: 'Voies légales d\'obtention de la Green Card et visas d\'affaires encadrés par les avocats membres de l\'AILA.',
    tabEb1: 'EB-1 (Talents Exceptionnels)',
    tabNiw: 'EB-2 NIW (Intérêt National)',
    tabEb5: 'EB-5 (Investisseurs Immigrants)',
    tabNonImmigrant: 'O-1 & L-1 (Affaires & Transfert)',
    
    canadaHeaderBadge: 'JURIDICTION CANADA • 10 PROVINCES',
    canadaHeaderTitle: 'Portail d\'Immigration et Résidence Permanente au Canada',
    canadaHeaderDesc: 'Programmes Entrée Express, volets des provinces et visas de démarrage accrédités CICC.',
    tabExpressEntry: 'Entrée Express (FSW / CEC)',
    tabPnp: 'Candidats des Provinces (PNP)',
    tabSuv: 'Visa Démarrage (SUV)',
    tabIct: 'Transferts d\'Entreprise (ICT)',
    
    startAssessment: 'Évaluation d\'Éligibilité Immédiate',
    bookConsultation: 'Demander une Consultation Juridique',
    calcTitle: 'Calculateur de Score d\'Immigration',
    submitAssessment: 'Calculer mon Éligibilité',
    consultSuccess: 'Votre demande a été reçue. Un avocat spécialisé prendra contact avec vous sous 24h.'
  },
  de: {
    dir: 'ltr',
    name: 'Deutsch',
    brandFirst: 'VIRAS',
    brandSecond: 'VISA',
    brandFull: 'VIRAS VISA',
    tagline: 'USA & KANADA EINWANDERUNG',
    badgeTitle: 'Exklusive Einwanderungsberatung',
    heroSubtitle: 'Verwirklichen Sie Ihre Träume mit lizenzierten Anwälten für US- und kanadisches Recht.',
    btnBegin: 'Zielgebiet Wählen',
    instructionPrompt: 'Wählen Sie Ihr Zielland um zu beginnen',
    specUsa: 'US EB-Programme & Investorenvisen',
    specCanada: 'Express Entry & PNP Programme',
    selectLanguage: 'Sprache Wählen',
    gatewaySelection: 'PORTAL-AUSWAHL',
    chooseDestination: 'Wählen Sie Ihr Ziel',
    destinationSubtitle: 'Wählen Sie Ihren nordamerikanischen Einwanderungskorridor für akkreditierte Rechtsberatung.',
    usaTitle: 'VEREINIGTE STAATEN',
    usaDesc: 'EB-1 Außergewöhnliche Fähigkeiten, EB-2 NIW National Interest, EB-5 Investoren und L-1 Firmentransfers.',
    canadaTitle: 'KANADA',
    canadaDesc: 'Express Entry (FSW/CEC), Provinznominierungen (PNP), Start-Up Visa und Studienaufenthalte.',
    explore: 'ERKUNDEN',
    back: 'Zurück',
    backToDestinations: 'Zurück zur Zielauswahl',
    statusOnline: 'LIZENZIERTE & AKKREDITIERTE KANZLEI',
    torontoWashington: 'TORONTO • WASHINGTON D.C.',
    downloadZipBtn: 'ZIP Herunterladen',
    downloadZipTooltip: 'Bereit für GitHub Pages',
    
    usaHeaderBadge: 'US-JURISDIKTION • 50 STAATEN',
    usaHeaderTitle: 'Exklusives Einwanderungsportal USA',
    usaHeaderDesc: 'Rechtlich gesicherte Wege zur Greencard und geschäftlichen Visa durch AILA-akkreditierte Anwälte.',
    tabEb1: 'EB-1 (Besondere Fähigkeiten)',
    tabNiw: 'EB-2 NIW (Nationales Interesse)',
    tabEb5: 'EB-5 (Investorenvisum)',
    tabNonImmigrant: 'O-1 & L-1 (Talent & Unternehmen)',
    
    canadaHeaderBadge: 'KANADISCHE JURISDIKTION • 10 PROVINZEN',
    canadaHeaderTitle: 'Kanadisches Einwanderungsportal',
    canadaHeaderDesc: 'Permanente Aufenthaltsgenehmigung, Express Entry und Provinznominierungen CICC-zertifiziert.',
    tabExpressEntry: 'Express Entry (FSW / CEC)',
    tabPnp: 'Provinznominierungen (PNP)',
    tabSuv: 'Start-Up Visum (SUV)',
    tabIct: 'Unternehmensentsendung (ICT)',
    
    startAssessment: 'Direkte Profilbewertung',
    bookConsultation: 'Anwaltliche Prüfung anfordern',
    calcTitle: 'Punkte- und Eignungsrechner',
    submitAssessment: 'Eignung Berechnen',
    consultSuccess: 'Ihre Anfrage wurde erfolgreich übermittelt. Ein Rechtsberater meldet sich innerhalb von 24 Stunden.'
  }
};

let currentLanguage = 'en'; // Default to English as requested by user

/* ==================== 2. SCENE TRANSITION CONTROLLER ==================== */
const scenes = {
  hero: document.getElementById('hero-scene'),
  destination: document.getElementById('destination-scene'),
  usa: document.getElementById('usa-scene'),
  canada: document.getElementById('canada-scene')
};

let activeScene = 'hero';
let sceneHistory = ['hero'];

function showScene(targetSceneName) {
  if (!scenes[targetSceneName]) return;
  
  if (sceneHistory[sceneHistory.length - 1] !== targetSceneName) {
    sceneHistory.push(targetSceneName);
  }
  
  Object.keys(scenes).forEach(key => {
    const el = scenes[key];
    if (el) {
      el.classList.remove('scene-visible');
      el.classList.add('scene-hidden');
    }
  });

  const targetEl = scenes[targetSceneName];
  targetEl.classList.remove('scene-hidden');
  targetEl.classList.add('scene-visible');
  activeScene = targetSceneName;

  const navBackBtn = document.getElementById('nav-back-button');
  if (navBackBtn) {
    if (targetSceneName === 'hero') {
      navBackBtn.classList.add('hidden');
      navBackBtn.classList.remove('inline-flex');
    } else {
      navBackBtn.classList.remove('hidden');
      navBackBtn.classList.add('inline-flex');
    }
  }

  const bgDeep = document.getElementById('bg-layer-deep');
  if (bgDeep) {
    if (targetSceneName === 'hero') {
      bgDeep.style.transform = 'scale(1)';
      bgDeep.style.filter = 'grayscale(100%) contrast(160%) brightness(24%)';
    } else if (targetSceneName === 'destination') {
      bgDeep.style.transform = 'scale(1.1)';
      bgDeep.style.filter = 'grayscale(100%) contrast(170%) brightness(20%)';
    } else if (targetSceneName === 'usa') {
      bgDeep.style.transform = 'scale(1.15) translate(-15px, 0)';
      bgDeep.style.filter = 'grayscale(60%) contrast(150%) brightness(22%)';
    } else if (targetSceneName === 'canada') {
      bgDeep.style.transform = 'scale(1.15) translate(15px, 0)';
      bgDeep.style.filter = 'grayscale(60%) contrast(150%) brightness(22%)';
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (targetSceneName === 'hero') {
    renderHeroTitleLetters(currentLanguage);
  }
}

function goBack() {
  if (sceneHistory.length > 1) {
    sceneHistory.pop();
    const previousScene = sceneHistory[sceneHistory.length - 1];
    showScene(previousScene);
  } else {
    showScene('hero');
  }
}

/* ==================== 3. HERO TYPOGRAPHY & LETTER REVEAL ==================== */
function renderHeroTitleLetters(langKey) {
  const heroTitleEl = document.getElementById('hero-title');
  if (!heroTitleEl) return;
  const data = i18nData[langKey] || i18nData.en;
  const isRtl = data.dir === 'rtl';

  const word1 = data.brandFirst || 'VIRAS';
  const word2 = data.brandSecond || 'VISA';

  if (isRtl) {
    const word1Html = `<span class="inline-flex items-center mx-2 sm:mx-3"><span class="reveal-word viras-word-first font-bold" style="animation-delay: 0.05s;">${word1}</span></span>`;
    const word2Html = `<span class="inline-flex items-center mx-2 sm:mx-3"><span class="reveal-word viras-word-gold font-normal" style="animation-delay: 0.35s;">${word2}</span></span>`;
    heroTitleEl.innerHTML = word1Html + word2Html;
    return;
  }

  let delay = 0;
  const step = 0.075;

  let word1Html = `<span class="inline-flex items-center tracking-tight mr-3 sm:mr-5">`;
  for (let i = 0; i < word1.length; i++) {
    const char = word1[i];
    word1Html += `<span class="reveal-char viras-char-first font-extrabold" style="animation-delay: ${(delay * step).toFixed(3)}s;">${char}</span>`;
    delay++;
  }
  word1Html += `</span>`;

  delay += 0.5;

  let word2Html = `<span class="inline-flex items-center tracking-tight">`;
  for (let j = 0; j < word2.length; j++) {
    const char = word2[j];
    word2Html += `<span class="reveal-char viras-char-gold font-light" style="animation-delay: ${(delay * step).toFixed(3)}s;">${char}</span>`;
    delay++;
  }
  word2Html += `</span>`;

  heroTitleEl.innerHTML = word1Html + word2Html;
}

/* ==================== 4. LANGUAGE SWITCHER LOGIC ==================== */
function setLanguage(langKey) {
  if (!i18nData[langKey]) return;
  currentLanguage = langKey;
  const data = i18nData[langKey];

  // Set HTML direction and lang attribute
  document.documentElement.setAttribute('lang', langKey);
  document.documentElement.setAttribute('dir', data.dir);

  // Update Language dropdown current label
  const curLangLabel = document.getElementById('current-lang-label');
  if (curLangLabel) curLangLabel.innerText = data.name;

  // Header Brand Name
  const headerBrandName = document.getElementById('header-brand-name');
  if (headerBrandName) {
    headerBrandName.innerHTML = `${data.brandFirst} <span class="${data.dir === 'rtl' ? 'font-normal' : 'font-light'}" style="background: linear-gradient(rgb(243, 229, 171) 0%, rgb(212, 175, 55) 60%, rgb(170, 119, 28) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${data.brandSecond}</span>`;
  }

  // Footer Copyright
  const footerCopyright = document.getElementById('footer-copyright');
  if (footerCopyright) {
    footerCopyright.innerText = `© 2025 ${data.brandFull}`;
  }

  // Render Hero letters
  renderHeroTitleLetters(langKey);

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (data[key]) {
      el.innerHTML = data[key];
    }
  });

  // Update Active checkmark in dropdown
  document.querySelectorAll('.lang-option').forEach(btn => {
    const check = btn.querySelector('.active-check');
    if (btn.getAttribute('data-lang') === langKey) {
      btn.classList.add('text-white', 'bg-white/10');
      if (check) check.classList.remove('hidden');
    } else {
      btn.classList.remove('text-white', 'bg-white/10');
      if (check) check.classList.add('hidden');
    }
  });

  closeLangDropdown();
}

// Language Dropdown open/close
const langBtn = document.getElementById('lang-trigger-btn');
const langDropdown = document.getElementById('lang-dropdown');
const langArrow = document.getElementById('lang-arrow');

function toggleLangDropdown() {
  const isOpen = langDropdown && langDropdown.classList.contains('opacity-100');
  if (isOpen) {
    closeLangDropdown();
  } else {
    openLangDropdown();
  }
}

function openLangDropdown() {
  if (!langDropdown) return;
  langDropdown.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
  langDropdown.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
  if (langArrow) langArrow.classList.add('rotate-180');
  if (langBtn) langBtn.setAttribute('aria-expanded', 'true');
}

function closeLangDropdown() {
  if (!langDropdown) return;
  langDropdown.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
  langDropdown.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
  if (langArrow) langArrow.classList.remove('rotate-180');
  if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
}

if (langBtn) {
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleLangDropdown();
  });
}

document.addEventListener('click', (e) => {
  const wrapper = document.getElementById('lang-menu-wrapper');
  if (wrapper && !wrapper.contains(e.target)) {
    closeLangDropdown();
  }
});

/* ==================== 5. USA PROGRAM TABS & CALCULATOR ==================== */
function switchUsaTab(tabId) {
  document.querySelectorAll('.usa-tab-btn').forEach(btn => {
    btn.classList.remove('bg-blue-600/30', 'border-blue-400', 'text-white', 'shadow-[0_0_15px_rgba(59,130,246,0.3)]');
    btn.classList.add('bg-zinc-900/60', 'border-zinc-800', 'text-zinc-400');
  });
  const activeBtn = document.getElementById(`tab-btn-${tabId}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-zinc-900/60', 'border-zinc-800', 'text-zinc-400');
    activeBtn.classList.add('bg-blue-600/30', 'border-blue-400', 'text-white', 'shadow-[0_0_15px_rgba(59,130,246,0.3)]');
  }

  document.querySelectorAll('.usa-tab-content').forEach(content => {
    content.classList.add('hidden');
  });
  const targetContent = document.getElementById(`usa-content-${tabId}`);
  if (targetContent) {
    targetContent.classList.remove('hidden');
  }
}

function calculateUsaEligibility(e) {
  if (e) e.preventDefault();
  const degree = document.getElementById('usa-calc-degree').value;
  const citations = parseInt(document.getElementById('usa-calc-citations').value) || 0;
  const experience = parseInt(document.getElementById('usa-calc-experience').value) || 0;
  const investment = document.getElementById('usa-calc-investment').value;

  let score = 0;
  let recommended = [];

  if (degree === 'phd') score += 35;
  else if (degree === 'master') score += 25;
  else if (degree === 'bachelor') score += 15;

  if (citations >= 100) {
    score += 40;
    recommended.push('EB-1A (Extraordinary Ability)');
    recommended.push('EB-2 NIW (National Interest Waiver)');
  } else if (citations >= 20) {
    score += 25;
    recommended.push('EB-2 NIW (National Interest Waiver)');
  } else if (experience >= 5) {
    score += 20;
    recommended.push('O-1A / L-1A Executive');
  }

  if (investment === 'yes') {
    recommended.push('EB-5 Immigrant Investor ($800,000 TEA)');
    score = Math.max(score, 90);
  }

  const resultBox = document.getElementById('usa-calc-result');
  const resultText = document.getElementById('usa-calc-text');
  const resultPrograms = document.getElementById('usa-calc-programs');

  if (resultBox && resultText && resultPrograms) {
    resultBox.classList.remove('hidden');
    resultText.innerHTML = currentLanguage === 'fa' 
      ? `امتیاز تخمینی صلاحیت پرونده شما: <strong class="text-blue-400 text-lg">${score} از ۱۰۰</strong>`
      : `Estimated Case Viability Score: <strong class="text-blue-400 text-lg">${score} / 100</strong>`;

    resultPrograms.innerHTML = recommended.length > 0 
      ? recommended.map(p => `<span class="px-2.5 py-1 rounded-full bg-blue-950/80 border border-blue-400/40 text-blue-200 text-xs">${p}</span>`).join(' ')
      : `<span class="text-zinc-400 text-xs">${currentLanguage === 'fa' ? 'پیشنهاد می‌شود برای بررسی دقیق‌تر، فرم مشاوره تخصصی را تکمیل فرمایید.' : 'We recommend requesting a direct review with legal counsel.'}</span>`;
  }
}

/* ==================== 6. CANADA PROGRAM TABS & CALCULATOR ==================== */
function switchCanadaTab(tabId) {
  document.querySelectorAll('.canada-tab-btn').forEach(btn => {
    btn.classList.remove('bg-rose-600/30', 'border-rose-400', 'text-white', 'shadow-[0_0_15px_rgba(225,29,72,0.3)]');
    btn.classList.add('bg-zinc-900/60', 'border-zinc-800', 'text-zinc-400');
  });
  const activeBtn = document.getElementById(`canada-tab-btn-${tabId}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-zinc-900/60', 'border-zinc-800', 'text-zinc-400');
    activeBtn.classList.add('bg-rose-600/30', 'border-rose-400', 'text-white', 'shadow-[0_0_15px_rgba(225,29,72,0.3)]');
  }

  document.querySelectorAll('.canada-tab-content').forEach(content => {
    content.classList.add('hidden');
  });
  const targetContent = document.getElementById(`canada-content-${tabId}`);
  if (targetContent) {
    targetContent.classList.remove('hidden');
  }
}

function calculateCanadaScore(e) {
  if (e) e.preventDefault();
  const age = parseInt(document.getElementById('can-calc-age').value) || 30;
  const education = document.getElementById('can-calc-education').value;
  const languageClb = parseInt(document.getElementById('can-calc-clb').value) || 7;
  const experienceYears = parseInt(document.getElementById('can-calc-exp').value) || 2;
  const hasFrench = document.getElementById('can-calc-french').value === 'yes';

  let crs = 300;

  if (age >= 20 && age <= 29) crs += 110;
  else if (age <= 35) crs += 95 - (age - 29) * 5;
  else if (age <= 44) crs += 65 - (age - 35) * 7;
  else crs += 10;

  if (education === 'master' || education === 'phd') crs += 135;
  else if (education === 'bachelor_two') crs += 128;
  else if (education === 'bachelor') crs += 120;
  else crs += 90;

  crs += (languageClb * 12);
  crs += Math.min(experienceYears * 15, 60);

  if (hasFrench) {
    crs += 50;
  }

  const resultBox = document.getElementById('can-calc-result');
  const resultText = document.getElementById('can-calc-text');
  const resultVerdict = document.getElementById('can-calc-verdict');

  if (resultBox && resultText && resultVerdict) {
    resultBox.classList.remove('hidden');
    resultText.innerHTML = currentLanguage === 'fa' 
      ? `امتیاز تخمینی CRS پرونده شما: <strong class="text-rose-400 text-lg">${crs} امتیاز</strong>`
      : `Estimated CRS Score: <strong class="text-rose-400 text-lg">${crs} Points</strong>`;

    let verdictText = '';
    if (crs >= 490 || hasFrench) {
      verdictText = currentLanguage === 'fa' 
        ? 'وضعیت: بسیار عالی! واجد شرایط قرعه‌کشی‌های عمومی و تخصصی فدرال با شانس دریافت دعوت‌نامه (ITA) بالا.'
        : 'Status: Excellent! Highly competitive for Federal Express Entry general and category-based draws.';
    } else if (crs >= 420) {
      verdictText = currentLanguage === 'fa'
        ? 'وضعیت: مناسب برای برنامه‌های نامزدی استانی (PNP مانند انتاریو و بریتیش کلمبیا) جهت کسب ۶۰۰ امتیاز اضافی.'
        : 'Status: Strong candidate for Provincial Nominee Programs (PNP) for an additional 600 points.';
    } else {
      verdictText = currentLanguage === 'fa'
        ? 'وضعیت: پیشنهاد ما برنامه‌های ویزای استارتاپ (SUV) و ثبت شعبه شرکت (ICT) بدون نیاز به امتیاز CRS است.'
        : 'Status: We recommend the Start-Up Visa (SUV) or Intra-Company Transfer (ICT) pathways.';
    }
    resultVerdict.innerHTML = verdictText;
  }
}

/* ==================== 7. CONSULTATION BOOKING MODAL & SUBMIT ==================== */
function openConsultationModal(destinationKey) {
  const modal = document.getElementById('consultation-modal');
  const destSelect = document.getElementById('modal-destination-select');
  if (destSelect && destinationKey) {
    destSelect.value = destinationKey;
  }
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeConsultationModal() {
  const modal = document.getElementById('consultation-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function handleConsultationSubmit(e) {
  e.preventDefault();
  const toast = document.getElementById('routing-toast');
  const toastText = document.getElementById('routing-toast-text');
  
  if (toast && toastText) {
    const successMsg = i18nData[currentLanguage].consultSuccess;
    toastText.innerText = successMsg;
    toast.classList.remove('opacity-0', 'translate-y-3');
    toast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-3');
      toast.classList.remove('opacity-100', 'translate-y-0');
    }, 4500);
  }

  closeConsultationModal();
  e.target.reset();
}

/* ==================== 8. DOWNLOAD PROJECT ZIP ==================== */
function triggerDownloadZip() {
  const link = document.createElement('a');
  link.href = './viras-visa-github-pages.zip';
  link.download = 'viras-visa-github-pages.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  const toast = document.getElementById('routing-toast');
  const toastText = document.getElementById('routing-toast-text');
  if (toast && toastText) {
    toastText.innerText = currentLanguage === 'fa' 
      ? 'فایل ZIP پروژه در حال دانلود است...' 
      : 'Downloading GitHub Pages ZIP archive...';
    toast.classList.remove('opacity-0', 'translate-y-3');
    toast.classList.add('opacity-100', 'translate-y-0');
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-3');
      toast.classList.remove('opacity-100', 'translate-y-0');
    }, 3500);
  }
}

/* ==================== 9. PROCEDURAL ATMOSPHERIC PARTICLES ==================== */
const canvas = document.getElementById('particles-canvas');
let ctx = null;
let particlesArray = [];

if (canvas) {
  ctx = canvas.getContext('2d');
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.8 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.28;
      this.speedY = -Math.random() * 0.38 - 0.08;
      this.opacity = Math.random() * 0.45 + 0.12;
      const palette = [
        'rgba(212, 175, 55,',
        'rgba(243, 229, 171,',
        'rgba(229, 193, 88,',
        'rgba(248, 250, 252,'
      ];
      this.color = palette[Math.floor(Math.random() * palette.length)];
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.y < 0 || this.x < 0 || this.x > canvas.width) {
        this.reset();
        this.y = canvas.height + 10;
      }
    }
    draw() {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `${this.color} ${this.opacity})`;
      ctx.fill();
    }
  }

  function initParticles() {
    particlesArray = [];
    const count = Math.floor(window.innerWidth / 20);
    for (let i = 0; i < count; i++) {
      particlesArray.push(new Particle());
    }
  }
  initParticles();
  window.addEventListener('resize', initParticles);

  function animateParticles() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
    }
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
}

/* ==================== 10. PARALLAX & HERO 3D INTERACTION ==================== */
const heroFrame = document.getElementById('interactive-hero-frame');
const frameSpotlight = document.getElementById('frame-spotlight');
const bgDeep = document.getElementById('bg-layer-deep');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let curX = mouseX;
let curY = mouseY;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  const cursorDot = document.getElementById('cursor-dot');
  const cursorOutline = document.getElementById('cursor-outline');
  const cursorLabel = document.getElementById('cursor-label');

  if (cursorDot) {
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  }
  if (cursorOutline) {
    cursorOutline.style.left = `${mouseX}px`;
    cursorOutline.style.top = `${mouseY}px`;
  }
  if (cursorLabel) {
    cursorLabel.style.left = `${mouseX}px`;
    cursorLabel.style.top = `${mouseY}px`;
  }

  if (heroFrame) {
    const rect = heroFrame.getBoundingClientRect();
    const frameX = ((e.clientX - rect.left) / rect.width) * 100;
    const frameY = ((e.clientY - rect.top) / rect.height) * 100;
    if (frameSpotlight) {
      frameSpotlight.style.background = `radial-gradient(circle at ${frameX}% ${frameY}%, rgba(212, 175, 55, 0.22) 0%, rgba(197, 160, 89, 0.06) 40%, transparent 68%)`;
    }
  }
});

function renderParallax() {
  curX += (mouseX - curX) * 0.05;
  curY += (mouseY - curY) * 0.05;

  const normX = (curX / window.innerWidth) - 0.5;
  const normY = (curY / window.innerHeight) - 0.5;

  if (heroFrame && activeScene === 'hero') {
    const tiltX = -normY * 4.5;
    const tiltY = normX * 6;
    heroFrame.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  }

  if (bgDeep) {
    bgDeep.style.transform = `translate(${normX * -14}px, ${normY * -10}px)`;
  }

  requestAnimationFrame(renderParallax);
}
renderParallax();

/* ==================== 11. MAGNETIC CURSOR HOVER STATES ==================== */
function setupCursorHovers() {
  const cursorOutline = document.getElementById('cursor-outline');
  const cursorDot = document.getElementById('cursor-dot');
  const cursorLabel = document.getElementById('cursor-label');

  if (!cursorOutline || !cursorDot) return;

  document.querySelectorAll('button, a, .lang-option, input, select').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorOutline.style.width = '48px';
      cursorOutline.style.height = '48px';
      cursorOutline.style.borderColor = 'rgba(212, 175, 55, 0.8)';
      cursorOutline.style.backgroundColor = 'rgba(212, 175, 55, 0.08)';
    });
    el.addEventListener('mouseleave', () => {
      cursorOutline.style.width = '36px';
      cursorOutline.style.height = '36px';
      cursorOutline.style.borderColor = 'rgba(212, 175, 55, 0.4)';
      cursorOutline.style.backgroundColor = 'transparent';
    });
  });

  document.querySelectorAll('.portal-card, #begin-journey-btn, .action-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      const customLabel = el.getAttribute('data-hover-label') || (i18nData[currentLanguage].explore);
      if (cursorLabel) {
        cursorLabel.innerText = customLabel;
        cursorLabel.style.opacity = '1';
      }
      cursorOutline.style.width = '84px';
      cursorOutline.style.height = '84px';
      cursorOutline.style.borderColor = 'rgba(212, 175, 55, 0.9)';
      cursorOutline.style.backgroundColor = 'rgba(10, 12, 14, 0.85)';
      cursorDot.style.opacity = '0';
    });
    el.addEventListener('mouseleave', () => {
      if (cursorLabel) cursorLabel.style.opacity = '0';
      cursorOutline.style.width = '36px';
      cursorOutline.style.height = '36px';
      cursorOutline.style.borderColor = 'rgba(212, 175, 55, 0.4)';
      cursorOutline.style.backgroundColor = 'transparent';
      cursorDot.style.opacity = '1';
    });
  });
}

// Global functions
window.showScene = showScene;
window.goBack = goBack;
window.setLanguage = setLanguage;
window.toggleLangDropdown = toggleLangDropdown;
window.switchUsaTab = switchUsaTab;
window.switchCanadaTab = switchCanadaTab;
window.calculateUsaEligibility = calculateUsaEligibility;
window.calculateCanadaScore = calculateCanadaScore;
window.openConsultationModal = openConsultationModal;
window.closeConsultationModal = closeConsultationModal;
window.handleConsultationSubmit = handleConsultationSubmit;
window.triggerDownloadZip = triggerDownloadZip;

// Initialize on DOM load: Starts in ENGLISH as requested
document.addEventListener('DOMContentLoaded', () => {
  setLanguage('en');
  showScene('hero');
  setupCursorHovers();
});
