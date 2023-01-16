import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaulLayout";
import { CommicSelected } from "./pages/CommicSelected";
import { Home } from "./pages/home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/CommicSelected/:id" element={<CommicSelected />} />
      </Route>
    </Routes>
  );
}
