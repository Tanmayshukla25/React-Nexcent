import "./App.css";
import Header from "./Header";

import IntroComponent from "./IntroComponent";
import ManageComponent from "./manageComponent";
import OurClients from "./OurClients";
import Pixelgrade from "./Pixelgrade";
import pixelimg from "./Images/Pixelimg.svg";
import FooterImg from "./Images/PropsImg.svg";
import Customer from "./Customer";
import BlogSection from "./BlogSection";
import Demo from "./Demo";
import Footer from "./Footer";
import Busniess from "./Busniess";

function App() {
  return (
    <>
      <Header />
      <IntroComponent />
      <div className="border mb-2">
        <OurClients />
        <ManageComponent />
      </div>
      <Pixelgrade
        img={pixelimg}
        heading="The unseen of spending three years at Pixelgrade"
        para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
        btn="Learn More"
      />

   <Busniess/>
      <Pixelgrade
        img={FooterImg}
        heading="How to design your site footer like we did"
        para="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
        btn="Learn More"
      />
      <Customer />
      <BlogSection />
      <Demo />
      <Footer />
    </>
  );
}

export default App;
