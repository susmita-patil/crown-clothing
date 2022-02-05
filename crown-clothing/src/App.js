import "./App.css";
import HomePage from "./pages/homepage/homepage.components";
import ShopPage from "./pages/shop/shop.component";

import { Route, Routes } from "react-router-dom";

// const HatsPage = () => (
//   <div>
//     <h1>hats page</h1>
//   </div>
// );

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
