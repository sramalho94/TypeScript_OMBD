# React-Native TypeScript Nativewindcss

## For Team 3 GAxTOP

---

## **_Description_**

#### The OMDB API Project refactored with TypeScript and Nativewindcss

#### This Project incorporates Tailwindcss, TypeScript, and React Navigation

---

## Workflow

---

### This Project was completed using the followng steps

- run `npx react-native@latest init AwesomeProject`
- `cd` into Project
- run `mkdir src`, `mkdir src/screens`, `mkdir src/components`
- run `yarn add nativewind`, `yarn add --dev tailwindcss`
- run `npx tailwindcss init`
- replace the content key with `content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],`
- run `touch app.d.ts` and paste `/// <reference types="nativewind/types" />` into the first line
- add this line after `presets` in your `babel.config.js` file: `plugins: ["nativewind/babel"],`
- restart your VsCode
- run `yarn ios` or `yarn android`

- remove fluff code from App.tsx
- `touch scr/screens/HomeScreen.tsx` and build out skeleton by typing `tsrnf` in the top line and hitting enter
- import HomeScreen into App.tsx
- Build out Banner.tsx and import to HomeScreen
- Build out `searchField.tsx` component skeleton and import in App.tsx under banner
- create onSubmit function in HomeScreen, define types and props in SearchField, pass onSubmit to searchField
- create searchString state in searchField
- create tpye for movieResponse in LandingPage
- confirm API call works
- conditionally render Result
- build out Result component, make sure your props and types are set up correctly

### Forgive my lack of specifity towards the end, the goal is to get you set up properly. After that feel free to implement any of this code in your own unique way using this codebase as a guide ☺️
