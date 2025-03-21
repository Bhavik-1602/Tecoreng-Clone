import React from "react";
import Navbar from "./Components/Navbar";
import VideoPlayer from "./Components/VideoPlayer"
import Innovation from "./Components/Innovation";
import SpecializationSection from "./Components/SpecializationSection";
import Succes from "./Components/Succes";
import Industries from "./Components/Industries";
import AppreciationSection from "./Components/AppreciationSection";
import Insights from "./Components/Insights";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
import ServicesSection from "./Components/ServicesSection";
import DevelopmentProcessSection from "./Components/DevelopmentProcessSection";
import WhyTecoreng from "./Components/WhyTecoreng";
import EngagementModels from "./Components/EngagementModels";




function App() {
  return (


    <div className="w-screen  overflow-x-hidden"
      style={{ margin: 0, padding: 0 }}>
      <Navbar />
     

      <VideoPlayer />
      <Innovation />
      <ServicesSection />
      <WhyTecoreng />
      <SpecializationSection />
      <EngagementModels/>
      <DevelopmentProcessSection/>
      <Succes />
      <Industries />
      <AppreciationSection />
      <Insights />

      <ContactForm />
      <Footer />


    </div>


  );
}

export default App;
