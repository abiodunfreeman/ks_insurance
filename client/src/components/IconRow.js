import '../components/styles/css/iconrow.css';
export default function IconRow() {
  return (
    <section id="icon-row-container" className="flex-col">
      <h1 className="text-center ">OUR SPECIALTIES</h1>
      <div className="flex flex-wrap justify-evenly items-center gap-10 text-center pt-5 pb-5">
        <div className="svgContainer">
          <i className="bi bi-house-heart svg"></i>
          <h5>HOME</h5>
        </div>
        <div className="svgContainer">
          <i className="bi bi-building  svg"></i>
          <h5>BUSINESS</h5>
        </div>
        <div className="svgContainer">
          <i class="fa-solid fa-car svg"></i>
          <h5>AUTO</h5>
        </div>
        <div className="svgContainer">
          <i className="bi bi-suit-heart-fill  svg"></i>
          <h5>LIFE</h5>
        </div>
      </div>
    </section>
  );
}
