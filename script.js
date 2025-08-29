// --- Translations Object ---
const translations = {
    es: {
        // Header
        fullName: "Erlantz Oniga Ouro",
        jobTitle: "DevOps Backend Engineer",
        location: "Bilbao, España",
        // Summary
        summaryTitle: "Resumen Profesional",
        summaryContent: "Ingeniero DevOps y Desarrollador Backend con más de 10 años de experiencia en el diseño, desarrollo y despliegue de soluciones de software escalables y de alto rendimiento. Experto en la automatización de infraestructuras en la nube (Azure), orquestación de contenedores (Kubernetes, AKS) y prácticas de CI/CD. Sólida trayectoria en el ecosistema de Big Data (Spark, Kafka) y en la creación de microservicios robustos con C# (.NET) y Java (Spring Boot).",
        // Experience
        experienceTitle: "Experiencia Laboral",
        job1Title: "DevOps Engineer",
        job1Date: "Enero 2021 - Actualidad | Bilbao, España",
        job1Desc: "Responsable del diseño de arquitecturas cloud en Azure, automatizando el despliegue de infraestructura como código con Terraform y gestionando pipelines de CI/CD en Azure DevOps. Desarrollo de microservicios y APIs REST con C#, e implementación de soluciones IoT. Especializado en la orquestación de contenedores con Kubernetes (AKS/Openshift) y el despliegue de aplicaciones mediante Helm.",
        job2Title: "Big Data / Backend Developer",
        job2Date: "Enero 2015 - Enero 2021 | Bilbao, España",
        job2Desc: "Creación de un pipeline de procesamiento de datos a gran escala utilizando Apache Spark, Kafka y Storm para el procesamiento en tiempo real. Desarrollo de APIs contenerizadas de alto rendimiento con Java (Spring Boot) y .NET Core, y construcción de un ERP a medida. Automatización del aprovisionamiento y despliegue de software con herramientas como Puppet y Gradle.",
        job3Title: "Software Developer",
        job3Date: "Septiembre 2012 - Enero 2015 | Bilbao, España",
        job3Desc: "Desarrollo de soluciones de gestión a medida, tanto para aplicaciones de escritorio como para plataformas web, utilizando principalmente el stack tecnológico de Microsoft (C#, ASP.NET, IIS, SQL Server) para satisfacer las necesidades de diversos clientes.",
        // Projects
        projectsTitle: "Proyectos Destacados en GitHub",
        projectsLoading: "Cargando proyectos desde GitHub...",
        projectsError: "No se pudieron cargar los proyectos de GitHub en este momento.",
        noProjects: "No se encontraron proyectos públicos en GitHub.",
        // Education
        educationTitle: "Educación y Formación",
        edu1Title: "Bachelor of Science (Honours) in Computing",
        edu1School: "University of Wales, Cardiff, Reino Unido",
        edu2Title: "Técnico Superior en Desarrollo de Aplicaciones Informáticas",
        edu2School: "C.F. Somorrostro, Muskiz, España",
        // Skills
        skillsTitle: "Idiomas y Otros Datos",
        languagesTitle: "Idiomas",
        motherTongues: "<strong>Lenguas maternas:</strong> Español, Euskera",
        englishLevel: "<strong>Inglés:</strong> Usuario Independiente / Avanzado",
        listening: "Escucha: B2",
        reading: "Lectura: C1",
        writing: "Escritura: B2",
        speaking: "Producción Oral: B2",
        licenseTitle: "Permiso de Conducir",
        licenseType: "Permiso de tipo B",
        // Assistant
        assistantTitle: "Asistente de Carta de Presentación",
        assistantLabel: "Pega aquí la descripción de una oferta de trabajo",
        assistantPlaceholder: "Ej: Buscamos un DevOps Engineer con experiencia en Azure, Kubernetes y Terraform...",
        assistantButton: "✨ Generar Carta de Presentación",
        // Footer
        footerText: 'Página generada con HTML y <a href="https://bulma.io">Bulma</a>.',
        // Modal
        modalTitle: "Resultado Generado",
        modalCopyButton: "Copiar al portapapeles",
        modalCopied: "¡Copiado!",
        modalGeneratingSummary: "Generando Resumen Profesional...",
        modalGeneratingLetter: "Generando Carta de Presentación...",
        modalSummaryTitle: "Resumen Profesional Sugerido",
        modalLetterTitle: "Carta de Presentación Sugerida",
        // Alerts
        alertJobDesc: "Por favor, pega una descripción de la oferta de trabajo.",
        alertCopyError: "No se pudo copiar el texto. Por favor, cópialo manualmente.",
        // Gemini Prompts
        geminiLetterPrompt: (cv, job) => `Eres un asistente de carrera profesional. Basándote en el siguiente CV y la descripción de la oferta de trabajo, escribe una carta de presentación convincente y personalizada. La carta debe destacar las habilidades y experiencias más relevantes del CV que coincidan con los requisitos del puesto. El tono debe ser profesional y entusiasta. El nombre del candidato es Erlantz Oniga Ouro. No incluyas información de contacto (dirección, teléfono, email) en la carta, céntrate en el cuerpo del texto.\n\n--- CV ---\n${cv}\n\n--- Descripción de la oferta ---\n${job}`
    },
    en: {
        // Header
        fullName: "Erlantz Oniga Ouro",
        jobTitle: "DevOps Backend Engineer",
        location: "Bilbao, Spain",
        // Summary
        summaryTitle: "Professional Summary",
        summaryContent: "DevOps Engineer and Backend Developer with over 10 years of experience in designing, developing, and deploying scalable, high-performance software solutions. Expert in cloud infrastructure automation (Azure), container orchestration (Kubernetes, AKS), and CI/CD practices. Strong track record in the Big Data ecosystem (Spark, Kafka) and in creating robust microservices with C# (.NET) and Java (Spring Boot).",
        // Experience
        experienceTitle: "Work Experience",
        job1Title: "DevOps Engineer",
        job1Date: "January 2021 - Present | Bilbao, Spain",
        job1Desc: "Responsible for designing cloud architectures in Azure, automating infrastructure as code deployment with Terraform, and managing CI/CD pipelines in Azure DevOps. Developing microservices and REST APIs with C#, and implementing IoT solutions. Specialized in container orchestration with Kubernetes (AKS/Openshift) and application deployment using Helm.",
        job2Title: "Big Data / Backend Developer",
        job2Date: "January 2015 - January 2021 | Bilbao, Spain",
        job2Desc: "Created a large-scale data processing pipeline using Apache Spark, Kafka, and Storm for real-time processing. Developed high-performance containerized APIs with Java (Spring Boot) and .NET Core, and built a custom ERP. Automated software provisioning and deployment with tools like Puppet and Gradle.",
        job3Title: "Software Developer",
        job3Date: "September 2012 - January 2015 | Bilbao, Spain",
        job3Desc: "Developed custom management solutions for both desktop and web platforms, primarily using the Microsoft tech stack (C#, ASP.NET, IIS, SQL Server) to meet the needs of various clients.",
        // Projects
        projectsTitle: "Featured GitHub Projects",
        projectsLoading: "Loading projects from GitHub...",
        projectsError: "Could not load GitHub projects at this time.",
        noProjects: "No public GitHub projects found.",
        // Education
        educationTitle: "Education & Training",
        edu1Title: "Bachelor of Science (Honours) in Computing",
        edu1School: "University of Wales, Cardiff, United Kingdom",
        edu2Title: "Higher National Diploma in Computer Application Development",
        edu2School: "C.F. Somorrostro, Muskiz, Spain",
        // Skills
        skillsTitle: "Languages & Other Info",
        languagesTitle: "Languages",
        motherTongues: "<strong>Mother tongues:</strong> Spanish, Basque",
        englishLevel: "<strong>English:</strong> Independent / Advanced User",
        listening: "Listening: B2",
        reading: "Reading: C1",
        writing: "Writing: B2",
        speaking: "Spoken Production: B2",
        licenseTitle: "Driving License",
        licenseType: "Type B License",
        // Assistant
        assistantTitle: "Cover Letter Assistant",
        assistantLabel: "Paste a job description here",
        assistantPlaceholder: "E.g., We are looking for a DevOps Engineer with experience in Azure, Kubernetes, and Terraform...",
        assistantButton: "✨ Generate Cover Letter",
        // Footer
        footerText: 'Page generated with HTML and <a href="https://bulma.io">Bulma</a>.',
        // Modal
        modalTitle: "Generated Result",
        modalCopyButton: "Copy to clipboard",
        modalCopied: "Copied!",
        modalGeneratingSummary: "Generating Professional Summary...",
        modalGeneratingLetter: "Generating Cover Letter...",
        modalSummaryTitle: "Suggested Professional Summary",
        modalLetterTitle: "Suggested Cover Letter",
        // Alerts
        alertJobDesc: "Please paste a job description.",
        alertCopyError: "Could not copy the text. Please copy it manually.",
        // Gemini Prompts
        geminiLetterPrompt: (cv, job) => `You are a professional career assistant. Based on the following resume and job description, write a compelling and personalized cover letter. The letter should highlight the most relevant skills and experiences from the resume that match the job requirements. The tone should be professional and enthusiastic. The candidate's name is Erlantz Oniga Ouro. Do not include contact information (address, phone, email) in the letter; focus on the body of the text.\n\n--- RESUME ---\n${cv}\n\n--- JOB DESCRIPTION ---\n${job}`
    }
};

let currentLang = 'es';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update active state on buttons
    document.getElementById('lang-es').classList.toggle('is-active', lang === 'es');
    document.getElementById('lang-en').classList.toggle('is-active', lang === 'en');

    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (el.tagName === 'TEXTAREA' && el.hasAttribute('placeholder')) {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
}

// --- GitHub Projects Fetcher ---
async function fetchGitHubProjects() {
    const username = 'erly';
    const container = document.getElementById('github-projects-container');
    // Use the search API to get repos sorted by stars directly. This is more efficient.
    const GITHUB_API_URL = `https://api.github.com/search/repositories?q=user:${username}&sort=stars&order=desc&per_page=3`;

    try {
        const response = await fetch(GITHUB_API_URL);
        if (!response.ok) {
            throw new Error(`Error fetching from GitHub API: ${response.status}`);
        }
        const reposData = await response.json();
        const repos = reposData.items; // The search API returns repos in an 'items' array

        container.innerHTML = ''; // Clear loading message

        if (!repos || repos.length === 0) {
            container.innerHTML = `<div class="column is-full"><p>${translations[currentLang].noProjects}</p></div>`;
            return;
        }

        repos.forEach(repo => {
            const projectColumn = document.createElement('div');
            projectColumn.className = 'column is-one-third-desktop is-half-tablet';

            const language = repo.language ? `<span class="tag is-info">${repo.language}</span>` : '';
            const description = repo.description || (currentLang === 'es' ? 'Sin descripción.' : 'No description.');

            projectColumn.innerHTML = `
                        <div class="card project-card">
                            <div class="card-content">
                                <p class="title is-5"><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a></p>
                                <p class="subtitle is-6 has-text-grey">${description}</p>
                            </div>
                            <footer class="card-footer">
                                <span class="card-footer-item project-stats">
                                    <i class="fas fa-star" aria-hidden="true"></i>
                                    <span>${repo.stargazers_count}</span>
                                </span>
                                <span class="card-footer-item">
                                    ${language}
                                </span>
                            </footer>
                        </div>
                    `;
            container.appendChild(projectColumn);
        });

    } catch (error) {
        console.error(error);
        container.innerHTML = `<div class="column is-full"><p class="has-text-danger">${translations[currentLang].projectsError}</p></div>`;
    }
}

// --- Gemini API Call Logic ---
const API_KEY = ""; // Leave empty, it will be handled by the environment

async function callGeminiAPI(prompt, retries = 3, delay = 1000) {
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
    const payload = { contents: [{ parts: [{ text: prompt }] }] };

    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const result = await response.json();
            if (result.candidates?.[0].content.parts[0].text) {
                return result.candidates[0].content.parts[0].text;
            } else {
                throw new Error("Invalid response structure from API");
            }
        } catch (error) {
            console.error(`Attempt ${i + 1} failed:`, error);
            if (i < retries - 1) {
                await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
            } else {
                return "Sorry, an error occurred while contacting the AI. Please try again later.";
            }
        }
    }
}

// --- Modal Handling ---
const modal = document.getElementById('gemini-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const copyButton = document.getElementById('copy-button');

function showModal(titleKey, content) {
    modalTitle.textContent = translations[currentLang][titleKey];
    modalContent.innerHTML = content;
    modal.classList.add('is-active');
}

function closeModal() {
    modal.classList.remove('is-active');
}

modal.querySelector('.modal-background').addEventListener('click', closeModal);
modal.querySelector('.delete').addEventListener('click', closeModal);

// --- Feature: Cover Letter Generator ---
const generateLetterButton = document.getElementById('generate-letter-button');
const jobDescriptionTextarea = document.getElementById('job-description');

generateLetterButton.addEventListener('click', async () => {
    const jobDescription = jobDescriptionTextarea.value;
    if (!jobDescription.trim()) {
        alert(translations[currentLang].alertJobDesc);
        return;
    }

    generateLetterButton.classList.add('is-loading');
    showModal('modalGeneratingLetter', '<div class="loader is-loading" style="margin: auto;"></div>');

    const cvContent = document.getElementById('cv-content').innerText;
    const prompt = translations[currentLang].geminiLetterPrompt(cvContent, jobDescription);

    const coverLetter = await callGeminiAPI(prompt);
    modalTitle.textContent = translations[currentLang].modalLetterTitle;
    modalContent.textContent = coverLetter;
    generateLetterButton.classList.remove('is-loading');
});

// --- Copy to Clipboard ---
copyButton.addEventListener('click', async () => {
    const textToCopy = modalContent.textContent;

    try {
        await navigator.clipboard.writeText(textToCopy).then(() => {
            copyButton.querySelector('span:last-child').textContent = translations[currentLang].modalCopied;
            setTimeout(() => {
                copyButton.querySelector('span:last-child').textContent = translations[currentLang].modalCopyButton;
            }, 2000);
        });
    } catch (err) {
        console.error('Error copying text: ', err);
        alert(translations[currentLang].alertCopyError);
    }
});

// --- Theme Management ---
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
});

// --- Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    // Language setup
    document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    setLanguage('es'); // Set default language

    // Theme setup
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme(systemPrefersDark ? 'dark' : 'light');
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (!localStorage.getItem('theme')) { // Only apply if user hasn't set a preference
            applyTheme(event.matches ? 'dark' : 'light');
        }
    });

    // Fetch GitHub projects
    fetchGitHubProjects();
});
