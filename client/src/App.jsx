import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppWrapper } from "./context/store";
import Home from "./pages/Home";
import Room from "./pages/Room";

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/room/:roomId" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
