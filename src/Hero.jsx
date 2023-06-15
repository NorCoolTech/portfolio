import React from "react";
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas beatae
            consequatur iure earum quod ea sint, totam aliquam reiciendis
            consequuntur perferendis alias possimus recusandae! Distinctio,
            natus! Voluptatem suscipit, quisquam minima totam dolore temporibus
            ea sit!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="women and browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
