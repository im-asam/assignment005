# Dev Stack Builder

Dev Stack Builder is a responsive website for exploring development
technologies and creating a personal stack from the tools you want to
use.

## 🚀 Live Demo

[View Live Project](https://assignment005-drab.vercel.app)

## 📦 GitHub Repository

[View Source Code](https://github.com/im-asam/assignment005)

## 🛠️ Technologies Used

-   React
-   TypeScript
-   Vite
-   Tailwind CSS v4
-   React Toastify
-   React Icons
-   JSON data fetching

## ✨ Features

-   Browse 14 technologies loaded from `public/data.json`.
-   Build a personalised stack with duplicate prevention.
-   Remove individual technologies from the selected stack.
-   Remove all selected technologies at once.
-   Get toast notifications for stack actions.
-   Responsive layout for desktop, tablet, and mobile devices.

## 📦 Dependencies

The project uses the following main dependencies and development tools:

-   React
-   React DOM
-   TypeScript
-   Vite
-   Tailwind CSS
-   React Toastify
-   React Icons

## 📁 Project Structure

``` text
assignment005/
├── public/
│   └── data.json
│
├── src/
│   ├── assets/
│   │   ├── banner-stack.png
│   │   └── logo-text.png
│   │
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── MainLayout.tsx
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── TechCard.tsx
│   │   └── TechList.tsx
│   │
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── styles.css
│   └── types.ts
│
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── eslint.config.js
├── .gitignore
└── README.md
```

## ⚙️ Run Locally

### 1. Clone the repository

``` bash
git clone https://github.com/im-asam/assignment005.git
```

### 2. Open the project

``` bash
cd assignment005
```

### 3. Install dependencies

``` bash
npm install
```

### 4. Start the development server

``` bash
npm run dev
```

## 🏗️ Production Build

``` bash
npm run build
```

## ⚛️ React Questions

### What is JSX, and why is it used in React?

JSX is syntax that lets us describe UI with HTML-like elements inside
JavaScript or TypeScript. React uses it to make component structure
easier to read and compose.

### What is the difference between props and state?

Props are values passed from a parent component to a child component.
State is data managed inside a component that can change over time and
trigger a re-render.

### What does the useState hook do, and where did you use it in this project?

`useState` stores changing values in a function component. This project
uses it for technology data, the selected stack, loading, and fetch
errors.

### What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after rendering. It loads `data.json` once
when the App component mounts, then updates the technology state.

### Why does every item in a map list need a unique key prop?

A unique key helps React identify the same list item between renders, so
it can update the UI efficiently and correctly.

### What is conditional rendering?

Conditional rendering shows different UI based on a condition. For
example, this site shows a loading message while data is fetched, an
empty message when no stack items exist, and a disabled button when a
technology was added.

### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

The parent passes data and callback functions through props. A child
calls a callback prop, such as `handleAddToStack`, to request that the
parent update its state.

## 👨‍💻 Author

**Asam Uddin**

Built as part of the Programming Hero Full Stack Web Development course.

## 📜 License

This project was created for educational purposes.
