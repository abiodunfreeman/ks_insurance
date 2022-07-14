import '../components/styles/css/iconrow.css';
export default function IconRow() {
  const handleHiddenInfoClick = name => {
    const container = document.querySelector(`#${name}-info-container`);
    const svg = document.querySelector(`#${name}-svg`);
    svg.classList.toggle('svg-active');
    container.classList.toggle('active');
    console.log(container);
  };
  return (
    <section id="icon-row-container" className="flex-col">
      <h1 className="text-center ">OUR SPECIALTIES</h1>
      <div className="flex flex-wrap justify-evenly items-center gap-10 text-center pt-5 pb-5">
        <div className="spec-container">
          <div className="svgContainer">
            <i
              className="bi bi-house-heart svg"
              id="home-svg"
              onClick={() => handleHiddenInfoClick('home')}
            ></i>
            <h5>HOME</h5>
          </div>
          <div className="hidden-info-container" id="home-info-container">
            <p>
              We offer the lowest rates in North Eastern Ohio for home insurance
              !
            </p>
          </div>
        </div>

        <div className="spec-container">
          <div className="svgContainer">
            <i
              id="business-svg"
              className="bi bi-building  svg"
              onClick={() => handleHiddenInfoClick('business')}
            ></i>
            <h5>BUSINESS</h5>
          </div>
          <div className="hidden-info-container" id="business-info-container">
            Hidden Section
          </div>
        </div>
        <div className="spec-container">
          <div className="svgContainer">
            <i
              id="auto-svg"
              className="fa-solid fa-car svg"
              onClick={() => handleHiddenInfoClick('auto')}
            ></i>
            <h5>AUTO</h5>
          </div>
          <div className="hidden-info-container" id="auto-info-container">
            Hidden Section
          </div>
        </div>
        <div className="spec-container">
          <div className="svgContainer">
            <i
              id="life-svg"
              className="bi bi-suit-heart-fill  svg"
              onClick={() => handleHiddenInfoClick('life')}
            ></i>
            <h5>LIFE</h5>
          </div>
          <div className="hidden-info-container" id="life-info-container">
            Hidden Section
          </div>
        </div>
      </div>
    </section>
  );
}
