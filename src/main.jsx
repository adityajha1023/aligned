import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import "./index.css";

/* 🔥 Lazy load pages */
const App = lazy(() => import("./App"));
const NotFound = lazy(() => import("./components/NotFound"));

/* Loading skeleton component for smooth transitions */
function LoadingFallback() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#F7F3CD] to-[#F7F3CD] animate-pulse" />
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);