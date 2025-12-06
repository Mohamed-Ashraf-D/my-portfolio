'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
// قاموس الترجمة
const translations = {
  en: {
    "hero-title": "Back-End Developer from Egypt",
    "logo": "Mohamed Ashraf",
    "hero-name": "Mohamed Ashraf",
    "hero-job": "Back-End Developer from Egypt",
    "hero-desc": "Professional Background: BackEnd Developer specializing in Laravel and PHP...",
    "btn-quote": "Get a Quote",
    "nav-home": "Home",
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contact",
    "years-success": "Years of Success",
    "projects-done": "Projects Completed",
    "hero-text": `
      <b>Professional Background:</b> BackEnd Developer specializing in Laravel and PHP, with experience in REST API, MVC, OOP, and web technologies like JQuery, JavaScript, BootStrap, CSS, and HTML5.
      <br><br>
      <b>Project Experience:</b> Developed various projects including an Educational Platform for chemistry teachers, an E-Commerce website, an Automated Examination System, and a Sales of Point system to address stock management issues.
      <br><br>
      <b>Education & Training:</b> Holds a Bachelor’s degree in Computers & Informations with a project grade of Excellent, and completed a comprehensive PHP FS Web Development Training covering back end, front end, database, and server-side technologies.
      <br><br>
      <b>Interpersonal Skills:</b> A self-learner and team player who is interactive, efficient under pressure, and possesses strong time and stress management skills, along with effective communication and presentation abilities.
    `  ,
    "elem-text": "Years of Success",
    "Projects Completed": "Projects Completed",
    "About Me": "About Me",
    "I'm a Developer": "I'm a Developer",
    "I Develop Application that Help People": "I Develop Application that Help People",
    "about-text": "Responsible for full stack web development for all client projects. Increased customer satisfaction by 35% and customer retention by 40%. Implemented Agile/Lean development process across six different development teams. Raised employee buy-in for Agile by 65%. Decreased lead times by 30% and reduced data storage inventory by 28%.",
    "Some of my work": "Some of my work",
    "btn-view-portfolio": "View Portfolio",
    "subtitle-portfolio": "Portfolio",
    "title-portfolio": "My Amazing Works",
    "cat-webapp": "Web Application", // قمت بتعديلها لتبدو أكثر احترافية من web app
    "project-construction": "Web Application for Building and Constructions",
    "btn-view-project": "View Project",
    "cat-landing": "Landing Page",
    "project-shipping": "Parcel Shipping & Logistics Web App",
    "project-customs": "Customs Broker Landing Page",
    "cat-webapp": "Web Application",
    "project-reservation": "Online Reservation Web Application",
    "subtitle-skills": "My Skills",
    "title-skills": "Continuous Learning & Development",
    "skills-desc": "I am dedicated to continuously refining my technical expertise and staying updated with the latest industry trends.",
    "subtitle-contact": "Feel Free to Say Hello",
    "contact-title": "Drop Me a Line",
    "ph-name": "Name",
    "ph-email": "Email",
    "ph-message": "Message",
    "btn-submit": "Submit Message",
    "contact-addr-title": "Address",
    "contact-address": "Ad Dirwatayn, Nabaroh, Dakahlia Governorate, Egypt",
    "contact-email-title": "Email",
    "contact-phone-title": "Phone",
    "text-thankyou": "Thank you for your time"
  },
  ar: {
    "hero-title": "مطور واجهات خلفية (Back End) من مصر",
    "elem-text": "أعوام من النجاح",
    "logo": "محمد أشرف",
    "hero-name": "محمد أشرف",
    "hero-job": "مطور واجهات خلفية (Back End) من مصر",
    "hero-desc": "الخلفية المهنية: مطور متخصص في Laravel و PHP، أعمل على بناء أنظمة قوية وقابلة للتطوير باستخدام أحدث تقنيات الويب.",
    "btn-quote": "اطلب عرض سعر",
    "nav-home": "الرئيسية",
    "nav-about": "من أنا",
    "nav-skills": "مهاراتي",
    "nav-portfolio": "أعمالي",
    "nav-contact": "تواصل معي",
    "years-success": "سنوات من الخبرة والنجاح",
    "projects-done": "مشروع ناجح تم تسليمه",
    "hero-text": `
      <b>الخلفية المهنية:</b> مطور واجهات خلفية (Back-End) متخصص في بيئات عمل Laravel و PHP. أمتلك خبرة تقنية قوية في بناء واجهات برمجة التطبيقات (REST APIs)، وتطبيق مبادئ البرمجة الكائنية (OOP) ونمط (MVC)، إلى جانب إتقان تقنيات الويب مثل JQuery و JavaScript.
      <br><br>
      <b>الخبرات والمشاريع:</b> قمت بتطوير وإطلاق حلول برمجية متنوعة، تضمنت منصة تعليمية متخصصة، متجراً إلكترونياً متكاملاً، نظام اختبارات مؤتمت، ونظام نقاط البيع (POS) لإدارة المخزون.
      <br><br>
      <b>التعليم والتدريب:</b> حاصل على درجة البكالوريوس في الحاسبات والمعلومات (مشروع تخرج بتقدير امتياز)، وأتممت تدريباً شاملاً في تطوير الويب (Full Stack PHP) يغطي كافة تقنيات السيرفر وقواعد البيانات.
      <br><br>
      <b>المهارات الشخصية:</b> شغوف بالتعلم الذاتي ومتميز في العمل ضمن فريق. أتمتع بالفاعلية والدقة تحت الضغط، وأمتلك مهارات تنظيمية عالية في إدارة الوقت، مدعومة بقدرات متميزة في التواصل.
    `
    ,
    "Projects Completed": "مشروع ناجح تم تسليمه",
    "About Me": "نبذة عني",
    "I'm a Developer": "أنا مطور برمجيات",
    "I Develop Application that Help People": "أقوم بتطوير تطبيقات تساعد الناس",
    "about-text": "توليت مسؤولية التطوير الشامل (Full Stack) لكافة مشاريع العملاء، مما أثمر عن زيادة رضا العملاء بنسبة 35% ورفع معدل الحفاظ عليهم بنسبة 40%. قدت مبادرة لتطبيق منهجيات Agile و Lean عبر ستة فرق تطوير، ونجحت في تعزيز تبني الفريق لهذه المنهجيات بنسبة 65%. كما ساهمت في تقليص وقت التسليم بنسبة 30% وخفض استهلاك موارد البيانات بنسبة 28%.",
    "Some of my work": "بعض من أعمالي",
    "btn-view-portfolio": "تصفح أعمالي",
    "subtitle-portfolio": "معرض الأعمال",
    "title-portfolio": "أبرز المشاريع التي نفذتها",
    "cat-webapp": "تطبيق ويب",
    "project-construction": "تطبيق ويب لقطاع البناء والتشييد",
    "btn-view-project": "معاينة المشروع",
    "cat-landing": "صفحة هبوط",
    "project-shipping": "تطبيق ويب لشركة شحن وطرود بريدية",
    "project-customs": "صفحة هبوط لمخلص جمركي",
    "cat-webapp": "تطبيق ويب",
    "project-reservation": "تطبيق ويب للحجز الإلكتروني",
    "subtitle-skills": "مهاراتي",
    "title-skills": "التعلم المستمر وتطوير المهارات",
    "skills-desc": "أسعى دائماً لصقل مهاراتي التقنية ومواكبة أحدث التطورات في مجال البرمجة لتقديم أفضل الحلول.",
    "subtitle-contact": "لا تتردد في التواصل معي",
    "contact-title": "تواصل معي",
    "ph-name": "الاسم",
    "ph-email": "البريد الإلكتروني",
    "ph-message": "نص الرسالة",
    "btn-submit": "إرسال الرسالة",
    "contact-addr-title": "العنوان",
    "contact-address": "الدروتين، نبروه، محافظة الدقهلية، مصر",
    "contact-email-title": "البريد الإلكتروني",
    "contact-phone-title": "رقم الهاتف",
    "text-thankyou": "أشكرك على وقتك واهتمامك"

  }
};

const langToggleBtn = document.getElementById('lang-toggle');
const htmlTag = document.documentElement; // <html> tag

// دالة لتغيير اللغة
function setLanguage(lang) {
  // 1. تغيير الاتجاه
  if (lang === 'ar') {
    htmlTag.setAttribute('dir', 'rtl');
    htmlTag.setAttribute('lang', 'ar');
    langToggleBtn.textContent = 'English';
  } else {
    htmlTag.removeAttribute('dir');
    htmlTag.setAttribute('lang', 'en');
    langToggleBtn.textContent = 'عربي';
  }

  // 2. تحديث النصوص
  // 2. تحديث النصوص (محدث ليدعم placeholders)
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      // إذا كان العنصر حقل إدخال، نغير الـ placeholder
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.setAttribute('placeholder', translations[lang][key]);
      } else {
        // للعناصر العادية نغير النص
        element.innerHTML = translations[lang][key];
      }
    }
  });
  // 3. حفظ اللغة في الذاكرة
  localStorage.setItem('preferredLang', lang);
}

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'en';
  setLanguage(savedLang);
});

// عند الضغط على الزر
langToggleBtn.addEventListener('click', () => {
  const currentLang = htmlTag.getAttribute('lang') === 'ar' ? 'ar' : 'en';
  const newLang = currentLang === 'en' ? 'ar' : 'en';
  setLanguage(newLang);
});

// كود التعامل مع نموذج الاتصال (Formspree AJAX)
const contactForm = document.getElementById("my-contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);

  fetch(event.target.action, {
    method: contactForm.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "شكراً لك! تم إرسال رسالتك بنجاح.";
      status.style.color = "green";
      contactForm.reset(); // تفريغ الحقول بعد الإرسال
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
        } else {
          status.innerHTML = "عذراً، حدثت مشكلة أثناء الإرسال.";
        }
        status.style.color = "red";
      })
    }
  }).catch(error => {
    status.innerHTML = "عذراً، حدثت مشكلة في الاتصال.";
    status.style.color = "red";
  });
}

if(contactForm) {
  contactForm.addEventListener("submit", handleSubmit);
}