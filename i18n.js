/**
 * i18n.js — Translation strings for Sofien Ghorbel Portfolio
 * Supported languages: English (en), French (fr), Arabic (ar)
 */

const T = {
  en: {
    /* Navigation */
    "nav.home":      "Home",
    "nav.about":     "About",
    "nav.skills":    "Skills",
    "nav.community": "Community",
    "nav.projects":  "Projects",
    "nav.contact":   "Contact",

    /* Hero */
    "hero.label":   "Data Scientist & Software Developer",
    "hero.title":   "Turning raw data into <em>meaningful insights</em>",
    "hero.desc":    "Final-year computer science student with a passion for machine learning, data analytics, and building intelligent systems that create real-world impact.",
    "hero.btn1":    "View Projects",
    "hero.btn2":    "Get In Touch",
    "hero.stat1":   "Projects",
    "hero.stat113": "On LinkedIn",
    "hero.stat2":   "Years IEEE",
    "hero.stat3":   "Languages",

    /* About */
    "about.label": "About me",
    "about.title": "Data-driven by nature, curious by choice",
    "about.p1":    "I'm a final-year <strong>Computer Science student</strong> with a focus on data science and machine learning. I'm passionate about extracting knowledge from complex datasets, building predictive models, and transforming raw numbers into actionable intelligence.",
    "about.p2":    "My technical toolkit spans the full data pipeline — from <strong>data wrangling and preprocessing</strong> with Python and SQL, to building and evaluating <strong>machine learning models</strong> with scikit-learn, to communicating results through interactive <strong>dashboards in Power BI</strong>. I also have strong software development skills that let me deploy models into real applications.",
    "about.p3":    "Beyond the code, I'm driven by a curiosity about how data shapes decisions — in agriculture, education, business, and beyond. I believe the best data scientists are not just analysts but storytellers who make numbers speak.",
    "about.quote": "\"Curious, creative and committed to turning data into decisions that matter.\"",

    /* Skills */
    "skills.label":    "Technical skills",
    "skills.title":    "Tools of the trade",
    "skills.s1.title": "Machine Learning",
    "skills.s1.desc":  "scikit-learn · NumPy · Pandas · model training · classification · regression · data preprocessing",
    "skills.s2.title": "Data & Analytics",
    "skills.s2.desc":  "SQL · Power BI · Excel · SSMS · SSIS · Talend · ETL pipelines · data warehousing",
    "skills.s3.title": "Programming",
    "skills.s3.desc":  "Python · Java · JavaScript · PHP · C · problem solving",
    "skills.s4.title": "Web & Mobile",
    "skills.s4.desc":  "React · HTML · CSS · Laravel · Flutter · Supabase · REST APIs",
    "skills.s5.title": "Big Data & Tools",
    "skills.s5.desc":  "Hadoop · Git · version control · collaborative development",
    "skills.s6.title": "Design",
    "skills.s6.desc":  "Adobe Illustrator · data visualization · dashboard design",

    /* Community */
    "assoc.label": "Community",
    "assoc.title": "Associative life",
    "assoc.i1":    "Member – IEEE ISIMS Student Branch (October 2023 – Present)",
    "assoc.i2":    "Webmaster – IEEE WIE ISIMS Affinity Group (April 2024 – October 2024)",
    "assoc.i3":    "Ambassador – WIE ACT 3.0 (2024) · IEEEXtreme 18.0 (2024)",
    "assoc.i4":    "Participant – IEEEXtreme 17.0 (2023) · 18.0 (2024) · 19.0 (2025)",
    "assoc.i5":    "Participant – IEEE TSYP 11 (2023)",
    "assoc.i6":    "Participant – IEEE PESTGM 5.0 · TSYP 12 (2024)",
    "assoc.i7":    "Participant – IEEE CSTAM 2.0 · IEEE IASTAM 5.0 (2025)",

    /* Projects */
    "projects.label":    "Work",
    "projects.title":    "Selected projects",
    "projects.p1.title": "Crop Recommendation System",
    "projects.p1.desc":  "Machine learning API that recommends optimal crops based on environmental data. Built a full pipeline: data preprocessing, normalization, and a trained classification model using NumPy and scikit-learn.",
    "projects.p2.title": "JavaScript Quiz Game",
    "projects.p2.desc":  "Interactive quiz game with dynamic scoring, real-time UI updates, and an engaging user interface — built entirely in vanilla JavaScript.",
    "projects.p3.title": "E-learning Platform",
    "projects.p3.desc":  "Full-featured mobile e-learning application developed with Flutter and Supabase during a mobile developer internship, supporting course management and user progress tracking.",
    "projects.p4.title": "Personal Portfolio",
    "projects.p4.desc":  "This very site — designed and built from scratch to showcase projects, skills, and professional achievements, with EmailJS integration for contact.",
    "projects.view":     "→ View project",

    /* Contact */
    "contact.label":   "Contact",
    "contact.title":   "Let's work together",
    "contact.desc":    "I'm open to data science internships, collaborative projects, and research opportunities. Whether you have a dataset to make sense of or an idea to build — let's talk.",
    "contact.name":    "Your name",
    "contact.email":   "Your email",
    "contact.message": "Your message",
    "contact.send":    "Send Message",

    /* Footer */
    "footer": "© 2025 Sofien Ghorbel. All rights reserved.",
  },

  fr: {
    /* Navigation */
    "nav.home":      "Accueil",
    "nav.about":     "À propos",
    "nav.skills":    "Compétences",
    "nav.community": "Communauté",
    "nav.projects":  "Projets",
    "nav.contact":   "Contact",

    /* Hero */
    "hero.label":   "Data Scientist & Développeur Logiciel",
    "hero.title":   "Transformer les données brutes en <em>insights pertinents</em>",
    "hero.desc":    "Étudiant en dernière année d'informatique, passionné par le machine learning, l'analyse de données et la création de systèmes intelligents à impact réel.",
    "hero.btn1":    "Voir les projets",
    "hero.btn2":    "Me contacter",
    "hero.stat1":   "Projets",
    "hero.stat113": "Sur LinkedIn",
    "hero.stat2":   "Ans IEEE",
    "hero.stat3":   "Langages",

    /* About */
    "about.label": "À propos de moi",
    "about.title": "Guidé par les données, animé par la curiosité",
    "about.p1":    "Je suis étudiant en dernière année d'<strong>Informatique</strong>, spécialisé en data science et machine learning. Je suis passionné par l'extraction de connaissances à partir de jeux de données complexes et par la transformation de chiffres bruts en intelligence actionnable.",
    "about.p2":    "Mon arsenal technique couvre tout le pipeline de données — du <strong>nettoyage et prétraitement</strong> avec Python et SQL, à la construction et l'évaluation de <strong>modèles de machine learning</strong> avec scikit-learn, jusqu'à la communication des résultats via des <strong>tableaux de bord Power BI</strong> interactifs.",
    "about.p3":    "Au-delà du code, je suis animé par la curiosité de comprendre comment les données façonnent les décisions — en agriculture, éducation, business et au-delà. Je crois que les meilleurs data scientists sont des narrateurs qui font parler les chiffres.",
    "about.quote": "\"Curieux, créatif et déterminé à transformer les données en décisions qui comptent.\"",

    /* Skills */
    "skills.label":    "Compétences techniques",
    "skills.title":    "Outils & technologies",
    "skills.s1.title": "Machine Learning",
    "skills.s1.desc":  "scikit-learn · NumPy · Pandas · entraînement · classification · régression · prétraitement",
    "skills.s2.title": "Données & Analytique",
    "skills.s2.desc":  "SQL · Power BI · Excel · SSMS · SSIS · Talend · pipelines ETL · entrepôt de données",
    "skills.s3.title": "Programmation",
    "skills.s3.desc":  "Python · Java · JavaScript · PHP · C · résolution de problèmes",
    "skills.s4.title": "Web & Mobile",
    "skills.s4.desc":  "React · HTML · CSS · Laravel · Flutter · Supabase · REST APIs",
    "skills.s5.title": "Big Data & Outils",
    "skills.s5.desc":  "Hadoop · Git · contrôle de version · développement collaboratif",
    "skills.s6.title": "Design",
    "skills.s6.desc":  "Adobe Illustrator · visualisation de données · conception de tableaux de bord",

    /* Community */
    "assoc.label": "Communauté",
    "assoc.title": "Vie associative",
    "assoc.i1":    "Membre – IEEE ISIMS Student Branch (octobre 2023 – présent)",
    "assoc.i2":    "Webmaster – IEEE WIE ISIMS Affinity Group (avril 2024 – octobre 2024)",
    "assoc.i3":    "Ambassadeur – WIE ACT 3.0 (2024) · IEEEXtreme 18.0 (2024)",
    "assoc.i4":    "Participant – IEEEXtreme 17.0 (2023) · 18.0 (2024) · 19.0 (2025)",
    "assoc.i5":    "Participant – IEEE TSYP 11 (2023)",
    "assoc.i6":    "Participant – IEEE PESTGM 5.0 · TSYP 12 (2024)",
    "assoc.i7":    "Participant – IEEE CSTAM 2.0 · IEEE IASTAM 5.0 (2025)",

    /* Projects */
    "projects.label":    "Travaux",
    "projects.title":    "Projets sélectionnés",
    "projects.p1.title": "Système de recommandation de cultures",
    "projects.p1.desc":  "API de machine learning recommandant les cultures optimales selon les données environnementales. Pipeline complet : prétraitement, normalisation et modèle de classification avec NumPy et scikit-learn.",
    "projects.p2.title": "Jeu de Quiz JavaScript",
    "projects.p2.desc":  "Jeu de quiz interactif avec scoring dynamique, mises à jour en temps réel et interface engageante — entièrement développé en JavaScript vanilla.",
    "projects.p3.title": "Plateforme E-learning",
    "projects.p3.desc":  "Application mobile complète développée avec Flutter et Supabase lors d'un stage, supportant la gestion des cours et le suivi de la progression des utilisateurs.",
    "projects.p4.title": "Portfolio Personnel",
    "projects.p4.desc":  "Ce site — conçu et développé de zéro pour présenter mes projets, compétences et réalisations, avec intégration EmailJS.",
    "projects.view":     "→ Voir le projet",

    /* Contact */
    "contact.label":   "Contact",
    "contact.title":   "Travaillons ensemble",
    "contact.desc":    "Je suis ouvert aux stages en data science, aux projets collaboratifs et aux opportunités de recherche. Que vous ayez un jeu de données à analyser ou une idée à concrétiser — parlons-en.",
    "contact.name":    "Votre nom",
    "contact.email":   "Votre e-mail",
    "contact.message": "Votre message",
    "contact.send":    "Envoyer",

    /* Footer */
    "footer": "© 2025 Sofien Ghorbel. Tous droits réservés.",
  },

  ar: {
    /* Navigation */
    "nav.home":      "الرئيسية",
    "nav.about":     "عني",
    "nav.skills":    "المهارات",
    "nav.community": "المجتمع",
    "nav.projects":  "المشاريع",
    "nav.contact":   "التواصل",

    /* Hero */
    "hero.label":   "عالم بيانات ومطور برمجيات",
    "hero.title":   "تحويل البيانات الخام إلى <em>رؤى ذات معنى</em>",
    "hero.desc":    "طالب في السنة الأخيرة من الدراسات الحاسوبية، شغوف بالتعلم الآلي وتحليل البيانات وبناء أنظمة ذكية ذات تأثير حقيقي.",
    "hero.btn1":    "عرض المشاريع",
    "hero.btn2":    "تواصل معي",
    "hero.stat1":   "مشاريع",
    "hero.stat113": "على LinkedIn",
    "hero.stat2":   "سنوات IEEE",
    "hero.stat3":   "لغات",

    /* About */
    "about.label": "عني",
    "about.title": "مدفوع بالبيانات، فضولي بطبعي",
    "about.p1":    "أنا طالب في السنة الأخيرة من <strong>علوم الحاسوب</strong> متخصص في علم البيانات والتعلم الآلي. أسعى إلى استخراج المعرفة من مجموعات البيانات المعقدة وبناء نماذج تنبؤية تحوّل الأرقام إلى ذكاء قابل للتنفيذ.",
    "about.p2":    "تغطي أدواتي التقنية خط أنابيب البيانات الكامل — من <strong>المعالجة المسبقة للبيانات</strong> باستخدام Python وSQL، إلى بناء وتقييم <strong>نماذج التعلم الآلي</strong> مع scikit-learn، وصولاً إلى إيصال النتائج عبر <strong>لوحات معلومات Power BI</strong> التفاعلية.",
    "about.p3":    "أتجاوز الكود لأفهم كيف تشكّل البيانات القرارات — في الزراعة والتعليم والأعمال وما هو أبعد. أؤمن أن أفضل علماء البيانات رواةٌ يجعلون الأرقام تتحدث.",
    "about.quote": "\"فضولي، مبدع، وملتزم بتحويل البيانات إلى قرارات تصنع الفارق.\"",

    /* Skills */
    "skills.label":    "المهارات التقنية",
    "skills.title":    "أدوات العمل",
    "skills.s1.title": "التعلم الآلي",
    "skills.s1.desc":  "scikit-learn · NumPy · Pandas · تدريب النماذج · تصنيف · انحدار · معالجة البيانات",
    "skills.s2.title": "البيانات والتحليلات",
    "skills.s2.desc":  "SQL · Power BI · Excel · SSMS · SSIS · Talend · خطوط ETL · مستودعات البيانات",
    "skills.s3.title": "البرمجة",
    "skills.s3.desc":  "Python · Java · JavaScript · PHP · C · حل المشكلات",
    "skills.s4.title": "ويب وموبايل",
    "skills.s4.desc":  "React · HTML · CSS · Laravel · Flutter · Supabase · REST APIs",
    "skills.s5.title": "البيانات الضخمة والأدوات",
    "skills.s5.desc":  "Hadoop · Git · التحكم في الإصدار · التطوير التعاوني",
    "skills.s6.title": "التصميم",
    "skills.s6.desc":  "Adobe Illustrator · تصور البيانات · تصميم لوحات المعلومات",

    /* Community */
    "assoc.label": "المجتمع",
    "assoc.title": "الحياة الجمعوية",
    "assoc.i1":    "عضو – فرع IEEE ISIMS الطلابي (أكتوبر 2023 – حاضر)",
    "assoc.i2":    "مسؤول الويب – مجموعة IEEE WIE ISIMS (أبريل 2024 – أكتوبر 2024)",
    "assoc.i3":    "سفير – WIE ACT 3.0 (2024) · IEEEXtreme 18.0 (2024)",
    "assoc.i4":    "مشارك – IEEEXtreme 17.0 (2023) · 18.0 (2024) · 19.0 (2025)",
    "assoc.i5":    "مشارك – IEEE TSYP 11 (2023)",
    "assoc.i6":    "مشارك – IEEE PESTGM 5.0 · TSYP 12 (2024)",
    "assoc.i7":    "مشارك – IEEE CSTAM 2.0 · IEEE IASTAM 5.0 (2025)",

    /* Projects */
    "projects.label":    "الأعمال",
    "projects.title":    "مشاريع مختارة",
    "projects.p1.title": "نظام توصية المحاصيل",
    "projects.p1.desc":  "واجهة برمجية للتعلم الآلي توصي بالمحاصيل الأمثل بناءً على بيانات بيئية. خط أنابيب كامل: معالجة البيانات، التطبيع، ونموذج تصنيف مدرَّب باستخدام NumPy وscikit-learn.",
    "projects.p2.title": "لعبة اختبار JavaScript",
    "projects.p2.desc":  "لعبة اختبار تفاعلية بتقييم ديناميكي وتحديثات فورية وواجهة جذابة — مبنية بالكامل بـ JavaScript.",
    "projects.p3.title": "منصة التعلم الإلكتروني",
    "projects.p3.desc":  "تطبيق جوال متكامل للتعلم الإلكتروني طُوِّر بـ Flutter وSupabase خلال تدريب، يدعم إدارة الدورات وتتبع تقدم المستخدمين.",
    "projects.p4.title": "الموقع الشخصي",
    "projects.p4.desc":  "هذا الموقع — صُمِّم وبُنِي من الصفر لعرض المشاريع والمهارات والإنجازات، مع تكامل EmailJS للتواصل.",
    "projects.view":     "← عرض المشروع",

    /* Contact */
    "contact.label":   "التواصل",
    "contact.title":   "لنعمل معاً",
    "contact.desc":    "أنا منفتح على التدريبات في علم البيانات والمشاريع التعاونية وفرص البحث. سواء كان لديك مجموعة بيانات لتحليلها أو فكرة لبنائها — دعنا نتحدث.",
    "contact.name":    "اسمك",
    "contact.email":   "بريدك الإلكتروني",
    "contact.message": "رسالتك",
    "contact.send":    "إرسال",

    /* Footer */
    "footer": "© 2025 سفيان غربال. جميع الحقوق محفوظة.",
  },
};
