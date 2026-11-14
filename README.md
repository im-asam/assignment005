# Dev Stack Builder

A responsive React app for exploring technologies and building a personal tech stack. Browse a library of technologies, add the ones you want to your stack, and manage it from one place.

## Live Demo

[View Live Project](https://assignment005-drab.vercel.app/)

## Features

- **Technology Library** — Browse all available technologies loaded from `public/data.json`.
- **Build Your Stack** — Add technologies to your own stack with one click.
- **Duplicate Prevention** — Adding a technology that is already in your stack shows a warning instead of a duplicate.
- **Remove & Clear** — Remove a single technology from your stack, or clear the whole stack at once.
- **Toast Notifications** — Feedback when adding, removing, or clearing technologies.
- **Loading & Error States** — Loading feedback while data is fetched, and a clear error message if it fails.
- **Responsive Design** — Works on desktop, tablet, and mobile.

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- react-icons
- react-toastify

## Project Structure

```text
src/
├── components/
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── MainLayout.tsx
│   └── Navbar.tsx
├── App.tsx
├── main.tsx
├── types.ts
├── index.css
└── styles.css
public/
└── data.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/im-asam/assignment005.git
```

### 2. Open the project

```bash
cd assignment005
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Then open http://localhost:5173

## Build for Production

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Assignment

This project was created for **Programming Hero — Assignment 5: Dev Stack Builder**.

## Author

**Asam Uddin**

Built as part of the Programming Hero Full Stack Web Development course.

## License

This project was created for educational purposes.
