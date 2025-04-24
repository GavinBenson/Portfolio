const topicsContent = {
    "QA Fundamentals": [
        { title: "Understanding the Basics of QA: Principles, Processes, and Roles", link: "/articles/qa-fundamentals-1.html" },
        { title: "Testing Approaches Demystified: Manual, Automated, and Beyond", link: "/articles/qa-fundamentals-2.html" },
        { title: "The QA Mindset: Tools, Skills, and Strategies for Success", link: "/articles/qa-fundamentals-3.html" }
    ],
    "Automation Testing": [
        { title: "Top automation frameworks: Selenium, Playwright", link: "/articles/automation-testing-1.html" },
        { title: "Best practices for writing automated tests", link: "/articles/automation-testing-2.html" },
        { title: "Continuous integration with automated tests", link: "/articles/automation-testing-3.html" }
    ],
    "Test Case Management": [
        { title: "How to write effective test cases", link: "/articles/test-case-management-1.html" },
        { title: "Tools for test management: Jira, TestRail", link: "/articles/test-case-management-2.html" },
        { title: "Organizing and prioritizing test cases", link: "/articles/test-case-management-3.html" }
    ],
    "Debugging and Bug Reporting": [
        { title: "Common debugging techniques", link: "/articles/debugging-1.html" },
        { title: "Creating detailed bug reports", link: "/articles/debugging-2.html" },
        { title: "Tools for debugging and reporting", link: "/articles/debugging-3.html" }
    ]
};
// index.html - loadContent() function:
function loadContent(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("dynamic-content").innerHTML = data;
            setupCodex(); // Call setupCodex again after loading the content
        })
        .catch(error => console.error("Error loading content:", error));
}

// codex.js - setupCodex() function:
function setupCodex() {
    const codexContainer = document.getElementById("codex") || document;

    codexContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("codex__topic")) {
            event.preventDefault();

            const topic = event.target.dataset.topic;
            console.log("Topic Clicked:", topic);

            codexContainer.innerHTML = `<h1 class="codex__title">${topic}</h1><p>Loading articles for ${topic}...</p>`;

            setTimeout(() => {
                const articles = topicsContent[topic]
                    .map(article => `<li class="codex__list"><a href="${article.link}" target="_blank">${article.title}</a></li>`)
                    .join("");

                codexContainer.innerHTML = `
                    <h1 class="codex__title">${topic}</h1>
                    <ul class="codex__ul">${articles}</ul>
                    <button id="back-to-topics">Back to Topics</button>
                `;

                // Move the event listener attachment here
                const backToTopicsButton = document.getElementById("back-to-topics");
                if (backToTopicsButton) {
                    backToTopicsButton.addEventListener("click", () => {
                        codexContainer.innerHTML = `
                            <h1>Welcome to the Codex</h1>
                            <a href="#" class="codex__description codex__topic" data-topic="QA Fundamentals">QA Fundamentals & Methodologies</a>
                            <a href="#" class="codex__description codex__topic" data-topic="Automation Testing">Automation Testing Frameworks</a>
                            <a href="#" class="codex__description codex__topic" data-topic="Test Case Management">Test Case Management</a>
                            <a href="#" class="codex__description codex__topic" data-topic="Debugging and Bug Reporting">Debugging and Bug Reporting</a>
                            <hr class="codex__hr">
                        `;
                    });
                }
            }, 1000);
        }
    });
}

import './codex.css'; 

export default setupCodex;
