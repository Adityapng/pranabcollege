import Header from "./components/header";
import Section from "./pages/temp1";
import Footer from "./components/Footer";
import ImageCarausal from "./components/imageCarausal";
import Quote from "./components/Quote";
import CTA from "./components/CTA";
import Motto from "./components/Motto";
import Notification from "./components/Notification";
// import { Feedback } from "./components/form";

export default function App() {
  return (
    <>
      <Header />
      <ImageCarausal />
      <Quote />
      <CTA />
      <Motto />
      <Notification />
      <Feedback />
      <Footer />
    </>
  );
}
