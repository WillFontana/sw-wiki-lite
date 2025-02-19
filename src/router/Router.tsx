import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import Loader from "../components/Frames/Loader";
import MainLayout from "../layout/MainLayout";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const CharacterDetails = lazy(() => import("../pages/CharacterDetails"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRouter: React.FC = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="movies/:id" element={<MovieDetails />} />
            <Route path="characters/:id" element={<CharacterDetails />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="*"
          element={
            <NotFound title="Sorry! This page doesn't exist!" type="page" />
          }
        />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRouter;
