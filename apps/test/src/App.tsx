import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import MainPage from "./pages/main";

const CoreApp = React.lazy(() => import("@admin/core"));

function DefaultFallback({ children }: { children: React.ReactNode }) {
  return (
    <React.Suspense fallback={<div>loading</div>}>{children}</React.Suspense>
  );
}

//v6에서는 exact -> *
function App() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <DefaultFallback>
            <CoreApp />
          </DefaultFallback>
        }
      />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/" element={<MainPage />} />
      <Route path="/*" element={<h2>404</h2>} />
    </Routes>
  );
}

export default App;
