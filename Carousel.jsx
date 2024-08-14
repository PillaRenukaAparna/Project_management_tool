import React from 'react';
import image1 from "../images/pexels-cottonbro-6804077.jpg";
import image2 from "../images/pexels-fauxels-3183153.jpg";
import image3 from "../images/pexels-fauxels-3183150.jpg";

const carouselStyles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '500px', // Adjust height as needed
    overflow: 'hidden', // Prevents overflow of content
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // Ensures the full image is visible within the container
    display: 'block',
  },
  caption: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    right: '20px',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    borderRadius: '5px',
    padding: '10px',
  },
  controls: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background for icons
    borderRadius: '50%',
    padding: '10px',
  },
};

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      style={carouselStyles.container}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block" alt="Slide 1" style={carouselStyles.image} />
          <div className="carousel-caption d-none d-md-block" style={carouselStyles.caption}>
            <h5>Task Management Board</h5>
            <p>Visualize your tasks effectively using a task board.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block" alt="Slide 2" style={carouselStyles.image} />
          <div className="carousel-caption d-none d-md-block" style={carouselStyles.caption}>
            <h5>Data Analysis</h5>
            <p>Analyze your data with modern tools and techniques.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block" alt="Slide 3" style={carouselStyles.image} />
          <div className="carousel-caption d-none d-md-block" style={carouselStyles.caption}>
            <h5>Team Collaboration</h5>
            <p>Work together to achieve your project goals efficiently.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        style={carouselStyles.controls}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        style={carouselStyles.controls}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
