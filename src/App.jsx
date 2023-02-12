import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer";
import PageFooter from "./components/InnerFooter/index";
import Roters from "./Routes/route";
const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="site-main">
        <Roters />
      </main>
      <PageFooter />
      <Footer />
    </>
  );
};

export default App;
