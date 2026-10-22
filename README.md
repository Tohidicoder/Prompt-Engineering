# Promptly — Prompt Engineering Academy

A bilingual (English / Dari) learning website built with React and Vite. It is organized into separate components, sections, and content data files to make the project easier to understand and extend.

## Features
- English / Dari language switch with RTL layout for Dari
- Bright pastel color palette, bold headings, responsive design, and subtle transitions
- 12 lessons from prompt basics to iteration
- Weak vs. strong prompts for web development, graphic design, social media, and research
- Interactive prompt builder with copy-to-clipboard
- Five prompts to test, with an experiment-notes field and downloadable notes
- Embedded video section
- Interactive quiz with score and explanations
- Links to official OpenAI and Google AI prompting resources

## Folder structure

```text
prompt-engineering-academy/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── data/
    │   └── content.js
    ├── components/
    │   ├── Logo.jsx
    │   ├── Navbar.jsx
    │   ├── SectionTitle.jsx
    │   ├── Hero.jsx
    │   └── Footer.jsx
    └── sections/
        ├── CourseSection.jsx
        ├── ExamplesSection.jsx
        ├── BuilderSection.jsx
        ├── ExperimentsSection.jsx
        ├── VideoSection.jsx
        ├── QuizSection.jsx
        └── ReferencesSection.jsx
```

## Run the project

Requirements: Node.js (LTS recommended) and npm.

1. Extract the ZIP.
2. Open the `prompt-engineering-academy` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local address printed in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Important notes for the assignment
- The prompt builder only assembles prompt text in the browser; it does not call ChatGPT or Gemini APIs.
- Run the five example prompts yourself in an AI tool, save the real responses/screenshots, and record your own observations before submitting.
- The video is embedded from YouTube and requires internet access. If it is unavailable, use the linked official learning resources.
- Lesson content is educational starter material. Review it, personalize examples, and be ready to explain the ideas in class in your own words.
