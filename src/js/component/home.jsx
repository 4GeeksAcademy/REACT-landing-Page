import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import BootstrapCard from "./BootstrapCard.jsx";
import Footer from "./Footer.jsx";


const Home = () => {
    return (
      <div>
        <Navbar/>
        <Jumbotron/>
        <div className="row gap-3 mb-3 m-3">
          <BootstrapCard
              title="Card Title"
              imageUrl={"https://fakeimg.pl/500x350"}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonLabel="Click Me"
    />, 
          <BootstrapCard
              title="Card Title"
              imageUrl={"https://fakeimg.pl/500x350"}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonLabel="Click Me"
    />, 
          <BootstrapCard
              title="Card Title"
              imageUrl={"https://fakeimg.pl/500x350"}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonLabel="Click Me"
    />, 
          <BootstrapCard
              title="Card Title"
              imageUrl={"https://fakeimg.pl/500x350"}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonLabel="Click Me"
    />, 
        </div>
        <Footer/>
      </div>
      
      );
    };
    
    

export default Home
