import "./App.css";
import React from "react";
// import CardSlider from "./components/CardSlider";
// // import BannerSlider from "./components/BannerSlider";
// import OptionCard from "./components/OptionCard";
// import ProductCard from "./components/ProductCard";
import Home from "./pages/Home";
import About from "./pages/about";
import Households from "./pages/Households";
import Productdescription from "./pages/productdescription";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import Privacypolicy from "./pages/Privacypolicy";
import Vitamins from "./pages/Vitamins";
import Medical from "./pages/Medicinal";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div style={{ width: "100%", height: "100%" }}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/household" exact component={Households} />
          <Route path="/vitamin" exact component={Vitamins} />
          <Route path="/medical" exact component={Medical} />
          <Route path="/privacy" exact component={Privacypolicy} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
