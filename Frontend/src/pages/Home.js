import React from "react";

import Header from "../Components/Header/Header";
import Lobby from "../Components/Lobby/index";
import Ofrecemos from "../Components/queofrecemos/index";
import EspacioIdeal from "../Components/EspacioIdeal";
import AboutUs from "../Components/SobreNosotros";
import Footer from "../Components/Footer";

//import objects (pages)
import { homeObjOne } from "../Components/queofrecemos/data";
import { homeObjTwo } from "../Components/EspacioIdeal/data";
import { homeObj3 } from "../Components/SobreNosotros/data";

function Home() {
  return (
    <>
      <Header />
      <Lobby />
      <Ofrecemos {...homeObjOne} />
      <EspacioIdeal {...homeObjTwo} />
      <AboutUs {...homeObj3} />
      <Footer />
    </>
  );
}

export default Home;
