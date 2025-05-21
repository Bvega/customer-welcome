
---

## 📚 `TUTORIAL.md` — Step-by-Step Walkthrough

Create `TUTORIAL.md` in your root for a full beginner-friendly guide.

```markdown
# 🎓 Full Beginner-Friendly Tutorial: Customer Welcome App

This tutorial walks through the complete process of building and understanding this TypeScript project.

## 🧱 Step 1: Project Setup

```bash
mkdir customer-welcome
cd customer-welcome
npm init -y
npm install typescript --save-dev
npx tsc --init

Edit tsconfig.json:

json
Copy
Edit
{
  "target": "ES6",
  "module": "commonjs",
  "rootDir": "./src",
  "outDir": "./dist",
  "strict": true
}
📁 Step 2: Folder Structure
Create:

src/index.ts
src/index.html
src/styles.css

🧠 Step 3: Code the Logic in TypeScript
Use interface and type alias, then add DOM manipulation.

(Include full commented code from index.ts here)

🎨 Step 4: Add HTML and CSS
Link the form and show the message.

(Include index.html and styles.css with comments)

🧪 Step 5: Compile and Test

npx tsc
Then open src/index.html in your browser.

🗂 Step 6: Track with Git

git init
git remote add origin https://github.com/your-username/customer-welcome.git
git add .
git commit -m "Initial setup and logic"
git push -u origin main
Repeat git add . && git commit -m "..." && git push for each major step.

🧠 Concepts Learned
Interfaces & Type Aliases

Event handling in TypeScript

Type conversion (number | string)

DOM interaction

CSS styling

Git/GitHub basics

