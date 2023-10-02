import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
const HomePage = React.lazy(() => import("../pages/HomePage"));
const ListPage = React.lazy(() => import("../pages/ListPage"));
const EditPage = React.lazy(() => import("../pages/EditPage"));
const AddPage = React.lazy(() => import("../pages/AddPage"));

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/employees" exact element={<ListPage />} />
      <Route path="/create" exact element={<AddPage />} />
      <Route path="/edit" exact element={<EditPage />} />
    </Routes>
  );
};
export default ProjectRoutes;
