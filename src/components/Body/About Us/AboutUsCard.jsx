import React from "react";

const AboutUsCard = ({ name, image, socialmedia, onClick }) => {
  return (
    <div className="w-max h-max">

        <img src={image} className="w-48 h-48" alt={"name"} />
        </div>
  );
};

export default AboutUsCard;
