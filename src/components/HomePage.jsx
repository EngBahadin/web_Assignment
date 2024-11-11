import React from "react";
import { useState } from "react";

function HomePage() {
  const images = ["/kunafa.png", "/mahalabia.png", "/waffles.png","/pancake.png"];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to set the current image directly from the dot
  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Centered carousel content */}
      <div className="carousel-container">
        {/* Carousel Images */}

        <div className="carousel-item active">
          <img
            className="image-carousel"
            src={images[currentIndex]}
            alt="images"
          />
        </div>

        {/* Carousel Controls */}
        <div className="carousel-controls">
          <button className="carousel-control-prev" onClick={prevImage}>
            <span aria-hidden="true">{"<"}</span>{" "}
          </button>

          <button className="carousel-control-next" onClick={nextImage}>
            <span aria-hidden="true">{">"}</span>
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToImage(index)}
            />
          ))}
        </div>
      </div>

      {/* Button section linking to various pages */}
      <div className="buttons">
        <div className="button-box custom-button">
          <a href="/Blog.html">Blogs</a>
        </div>
        <div className="button-box custom-button">
          <a href="/Schedule.html">Seminar Schedule</a>
        </div>
        <div className="button-box custom-button">
          <a href="/Signup.html">Signup</a>
        </div>
        <div className="button-box custom-button">
          <a href="/Login.html">Signin</a>
        </div>
      </div>

      {/* Main content section with recent articles */}
      <main id="main-web-Page">
        <h4 className="recent-article-header">Recent Articles</h4>
        <div id="information-struct">
          {/* Article topics with floating images */}

          <div className="" id="topic">
            <div>
              {" "}
              <h3>Topic 1 Lorem ipsum dolor sit amet</h3>
              <span>
                By{" "}
                <a href="#" id="name-of-title">
                  Himdad Hasan
                </a>
                Wednesday, October 16, 2024, 2:30 PM
              </span>
              <img
                src="waffles.png"
                alt=""
                className="float1"
                id="image-information-1"
              />
              <div className="" id="text-information">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam dicta culpa maxime animi explicabo eos necessitatibus
                  dolor harum vel laudantium pariatur dignissimos fugiat, sint
                  voluptatum sapiente porro recusandae a ducimus, error quam
                  quaerat minima sequi quas! A aut aperiam necessitatibus animi,
                  illo error veritatis quis dolorum deserunt velit nobis
                  adipisci fugit sint earum. Modi itaque provident maxime quas.
                  Odio, sequi deleniti voluptatem quaerat fugiat officia
                  repellendus cumque eum esse id, aperiam dolores atque
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Earum, nulla! Nisi pariatur cumque voluptatum. Blanditiis
                  fugit ad quo? Illo, porro. Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Eveniet cumque tempora
                  voluptatibus corrupti aperiam possimus. Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Tempora, quos?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  accusamus atque, hic nisi libero blanditiis dolorum laborum
                  totam eaque aspernatur. Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. In, natus.
                </p>
              </div>
            </div>
          </div>

          {/* Repeatable structure for other topics */}
          <div className="" id="topic">
            <div>
              {" "}
              <h3>Topic 1 Lorem ipsum dolor sit amet</h3>
              <span>
                By{" "}
                <a href="#" id="name-of-title">
                  Himdad Hasan
                </a>{" "}
                Wednesday, October 16, 2024, 2:30 PM
              </span>
              <img
                src="/kunafa.png"
                alt=""
                className="float2"
                id="image-information-1"
              />
              <div className="" id="text-information">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam dicta culpa maxime animi explicabo eos necessitatibus
                  dolor harum vel laudantium pariatur dignissimos fugiat, sint
                  voluptatum sapiente porro recusandae a ducimus, error quam
                  quaerat minima sequi quas! A aut aperiam necessitatibus animi,
                  illo error veritatis quis dolorum deserunt velit nobis
                  adipisci fugit sint earum. Modi itaque provident maxime quas.
                  Odio, sequi deleniti voluptatem quaerat fugiat officia
                  repellendus cumque eum esse id, aperiam dolores atque
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Earum, nulla! Nisi pariatur cumque voluptatum. Blanditiis
                  fugit ad quo? Illo, porro. Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Eveniet cumque tempora
                  voluptatibus corrupti aperiam possimus. Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Tempora, quos?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  accusamus atque, hic nisi libero blanditiis dolorum laborum
                  totam eaque aspernatur. Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. In, natus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer section with site links, terms, and contact info */}
   
    </>
  );
}

export default HomePage;
