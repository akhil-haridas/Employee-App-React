import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";

import Calender from "./pages/CalenderPage";
const ListPage = React.lazy(() => import("./pages/ListPage"));
const AddPage = React.lazy(() => import("./pages/AddPage"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<ListPage />} />
          <Route path="/addpage" element={<AddPage />} />
          <Route path="/list" element={<Calender />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
