<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->


React with API project steps
-----------------------------
1.create react project using vite 
2.remove unwanted code from app.css 


set up/url for component in react:use package react-router-dom

-install npm i react-router-dom
-steps to set up path/url for component
install any styling library to project
-create a pages for 
    1-render the entire react app inside 'BrowserRouter' component of react-router-dom   library, provide this stop inside main.jsx file
    2- Inorder to setup path for component , make sure component must be inside component if react-router-dom library, provide the step inside App. jsx file.
    3- to set path for component , use 'Route' component of react-router-dom library.Route Component has attributes like 'path'and element inorder setup route for component . All route component must be inside Routes component

Highter order Components = are component whose props argument will give another component ,ex:route component
