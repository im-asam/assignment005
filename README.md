# Dev Stack Builder

Dev Stack Builder is a responsive website for exploring development technologies and creating a personal stack from the tools you want to use.

> Replace both example URLs with your actual links before submitting.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS v4
- React Toastify
- React Icons
- JSON data fetching

## Features

- Browse 14 technologies loaded from `public/data.json`.
- Build a personalised stack with duplicate prevention, individual removal, and Remove All.
- Get toast notifications for stack actions and use responsive desktop, tablet, and mobile layouts.

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## React Questions

### What is JSX, and why is it used in React?

JSX is syntax that lets us describe UI with HTML-like elements inside JavaScript or TypeScript. React uses it to make component structure easier to read and compose.

### What is the difference between props and state?

Props are values passed from a parent component to a child component. State is data managed inside a component that can change over time and trigger a re-render.

### What does the useState hook do, and where did you use it in this project?

`useState` stores changing values in a function component. This project uses it for technology data, the selected stack, loading, and fetch errors.

### What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after rendering. It loads `data.json` once when the App component mounts, then updates the technology state.

### Why does every item in a map list need a unique key prop?

A unique key helps React identify the same list item between renders, so it can update the UI efficiently and correctly.

### What is conditional rendering?

Conditional rendering shows different UI based on a condition. For example, this site shows a loading message while data is fetched, an empty message when no stack items exist, and a disabled button when a technology was added.

### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

The parent passes data and callback functions through props. A child calls a callback prop, such as `handleAddToStack`, to request that the parent update its state.
