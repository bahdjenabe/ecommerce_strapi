import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import NewLetter from "./components/Footer/NewsLetter/NewsLetter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppContext from "./utils/context";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/produit/:id" element={<SingleProduct />} />
          </Routes>
          <NewLetter />
          <Footer />
        </AppContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
