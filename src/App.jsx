import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import WhyChooseUs from "./Components/WhyChooseUs";
import Process from "./Components/Process";
import Industries from "./Components/Footer";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";
import Loader from "./Components/Loader";
function App() {
  
    useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  const [loading,setLoading]=useState(true);

useEffect(()=>{

    const timer=setTimeout(()=>{

        setLoading(false);

    },1200);

    return ()=>clearTimeout(timer);

},[]);
if(loading){

    return <Loader/>

}
  return (
<>
    <Navbar/>
    <Hero/>
    <Services/>
    <WhyChooseUs/>
    <Process/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    <BackToTop/>
</>
  );
}

export default App;