# Deployed at :
- https://saurabh200301.github.io/Multi-Theme-Switcher-App/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Functionality 
-  Theme should persist across page reload (used localStorage)
-  Used Context API for theme managment
-  Responsive design using CSS Modules, Tailwind
-  Add subtle animation while switching themes
-  Used React Router and demonstrated the theme across multiple pages (Home, About, Contact)
-  Used TypeScript
-  Compatible with all devices

# Folder Structure 
```
multi-theme-changer/
│
├── public/
│
├── src/
│   ├── components/
│   │   └── layouts/
│   │       ├── ColorfulCardLayout.tsx
│   │       ├── DarkSidebarLayout.tsx
│   │       ├── MinimalistLayout.tsx
│   │       ├── Header.tsx
│   │       └── LayoutWrapper.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Home.tsx
│   ├── services/
│   │   └── api.ts
│   ├── types/
│   │   └── theme.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── .gitignore
├── package-lock.json
└── README.md
```


## Minimalist theme screenshot
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/c3f4284a-b7c4-45e8-9735-1ba7470e04d8" />


## Dark Sidebar
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/d59e0035-ca04-43f7-b230-a7df5ca71f19" />


## Colorful card
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/f4cadff2-fd65-4c13-8208-116c08e115fd" />




  ## Dependencies

- `@types/node`: ^24.1.0
- `@types/react`: ^19.1.9
- `@types/react-dom`: ^19.1.7
- `axios`: ^1.8.4
- `cra-template`: 1.2.0
- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `react-router-dom`: ^7.5.1
- `react-scripts`: 5.0.1
- `typescript`: ^4.9.5

## DevDependencies

- `@craco/craco`: ^7.1.0
- `@eslint/js`: 9.23.0
- `autoprefixer`: ^10.4.20
- `eslint`: 9.23.0
- `eslint-plugin-import`: 2.31.0
- `eslint-plugin-jsx-a11y`: 6.10.2
- `eslint-plugin-react`: 7.37.4
- `globals`: 15.15.0
- `postcss`: ^8.4.49
- `tailwindcss`: ^3.4.17

