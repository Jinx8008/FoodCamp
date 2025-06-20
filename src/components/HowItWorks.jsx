import React from "react";
import { HamburgerIcon, PizzaIcon, ShoppingBag, Bike } from "lucide-react";

const details = [
  {
    title: " Fresh and Nutritious",
    description: "Offers fresh foods and calculate calories , portion size",
    icon: <HamburgerIcon size={40} />,
  },
  {
    title: "Pick Meals",
    description: "Offers fresh foods and calculate calories , portion size",
    icon: <PizzaIcon size={40} />,
  },
  {
    title: "Place An Order",
    description: "Offers fresh foods and calculate calories , portion size",
    icon: <ShoppingBag size={40} />,
  },
  {
    title: "Fast Delivery",
    description: "Offers fresh foods and calculate calories , portion size",
    icon: <Bike size={40} />,
  },
];

const HowItWorks = () => {
  return (
    <>
      <h1 className="text-center playfair text-5xl mt-8 !font-bold">
        How it Works
      </h1>
      <p className="text-center mt-2 font-medium playfair">
        This lesson provides a basic framework for conducting a recipe
        demonstration
      </p>

{/* Making the boxes responsive  */}
<div className="grid grid-cols-4"></div>

      <div className="grid grid-cols-1 gap-4 place-items-center  md:grid-cols-2 lg:grid-cols-4 my-16 mx-8">
        {/* Div boxes  */}
        {details.map((item) => {
          return (
            <div className="bg-orange-300 justify-center p-8 rounded-2xl w-full  lg:w-[300px] hover:shadow-xl cursor-pointer hover:translate-y-[-20px] transition-shadow ease-in-out transition-transform transition-[2s]">
              {/* <HamburgerIcon /> */}
              {item.icon}
              <h1 className="!font-bold text-3xl playfair my-4">
                {item.title}
              </h1>
              <span>{item.description}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HowItWorks;
