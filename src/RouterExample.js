import { BrowserRouter, Routes, Route } from "react-router-dom";
import A from "./Components/A";
import B from "./Components/B";
import C from "./Components/C";

export default function RouterExample() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={A} />
        <Route path="/b" Component={B} />
        <Route path="/c" Component={C} />
      </Routes>
    </BrowserRouter>
  );
}
