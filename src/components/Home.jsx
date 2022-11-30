import React from "react";
import { HomeFooter } from "./";
import { NavLink } from "react-router-dom";

const Home = () => {
  const homeImage = [
    "https://media.istockphoto.com/id/1254508881/photo/woman-holding-sale-shopping-bags-consumerism-shopping-lifestyle-concept.jpg?s=612x612&w=0&k=20&c=wuS3z6nPQkMM3_wIoO67qQXP-hfXkxlBc2sedwh-hxc=",
  ];

  const holidayImages = [
    "https://live.staticflickr.com/65535/50656940087_a16e643316_b.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgw7HiIjlQPS1o2a_7-82UbBt7NwQcGhKoTQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKC6K3O6mURri30fKS3LeLYBxnK2s1tSmZAQ&usqp=CAU",
  ];

  return (
    <div id="Home">
      <div id="homeHeader">
        
        Shop for any occasion with Amazon Lite (name still pending)
      </div>

      
      <div id="homeImage">
        <NavLink to="products">
        <img src={homeImage} alt="images" />
      </NavLink>
      </div>
      
      <div id="row">
        <div className="rowText">Buy presents for the holidays!</div>
        

        <NavLink to="products">
        <div id="holidayImages">
          
          {holidayImages.map((image, i) => (
            <img id="holidayImages" key={i} src={image} alt="images" />
          ))}
        </div>
        </NavLink>


      </div>

      <HomeFooter />
    </div>
  );
};

export default Home;
