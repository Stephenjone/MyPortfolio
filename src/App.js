import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Illustrations from "./Components/Illustrations";
import Branding from "./Components/BrandDesign/Branding";
import Brouchers from "./Components/Broucher/Brouchers.js";
import Marketing from "./Components/Marketing.js";
import JonesFoods from "./Components/BrandDesign/JonesFoods";
import Caffy from "./Components/BrandDesign/Caffy";
import ForwardFocused from "./Components/Broucher/ForwardFocused";
import UIDesign from "./Components/UI/UIDesign";
import PickNPay from "./Components/UI/PickNPay";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/illustrations" element={<Illustrations />} />
      <Route path="/branding" element={<Branding />} />
      <Route path="/brouchers" element={<Brouchers />} />
      <Route path="/uidesign" element={<UIDesign />} />
      <Route path="/marketing" element={<Marketing />} />

      <Route path="/branding/jones-foods" element={<JonesFoods />} />
      <Route path="/branding/caffy" element={<Caffy />} />
      <Route path="/broucher/forwardfocused" element={<ForwardFocused />} />

      <Route path="/picknpay" element={<PickNPay />} />

      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
