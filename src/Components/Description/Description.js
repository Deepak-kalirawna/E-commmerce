import React from "react";
import "./Description.css";
const Description = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviws (234)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Our e-commerce website offers a seamless shopping experience for
          clothing enthusiasts, featuring a diverse range of high-quality
          apparel at competitive prices. With user-friendly navigation, secure
          payment options, and fast shipping, finding your perfect outfit has
          never been easier. Discover the latest trends in fashion, from stylish
          casual wear to elegant formal attire, all from the comfort of your
          home. Our dedicated customer service team is available 24/7 to assist
          you, and we offer easy returns and exchanges to ensure your
          satisfaction. Additionally, personalized recommendations and exclusive
          deals help you stay fashionable while enjoying great savings.
        </p>
        <p>
          E-commerce websites typically display products or services detailed
          descriptions, images, prices and any available variety (eg. sizes,
          colors).Each product usually has its own description and relevant
          information.
        </p>
      </div>
    </div>
  );
};

export default Description;
