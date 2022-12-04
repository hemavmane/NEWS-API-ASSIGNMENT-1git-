import React from "react";
import ReactDOM from "react-dom/client";
import {Search} from './Search/Seach'
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChangeModeProvider } from "./Component/JS-File/ChangeMode";
import { NewsApiProvider } from "./Component/JS-File/NewsApi";
import { FooterProvider } from "./Component/JS-File/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Search/> */}
    <BrowserRouter>
     
        <ChangeModeProvider>
          <NewsApiProvider>
            <App />
          </NewsApiProvider>
        </ChangeModeProvider>
        <FooterProvider>
        </FooterProvider>
    // </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
