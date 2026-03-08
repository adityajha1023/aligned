import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import "./index.css";

/* 🔥 Lazy load pages */
const App = lazy(() => import("./App"));
const Project1 = lazy(() => import("./project1"));
const NotFound = lazy(() => import("./components/NotFound"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<App />} />

        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);