import './styles/css/bio.css';
const Bio = () => {
  return (
    <div id="main-bio" className="bg-light-blue-50">
      <h1>Insurance Ohio</h1>
      <h5>
        Headquartered in Cleveland, Ohio, we help local businesses and families
        to best manage risks in their lives. Our brokerage specializes in
        property & casualty insurance. We shop numerous companies for every
        client and customize our solutions to address your individual needs and
        concerns. <br />
        <br /> Our brokers have a pulse on industry trends and emerging risks,
        staying at the forefront of new products & carriers— to give you the
        best advice and coverage available. <br /> <br />
        Give us a call or click the button below to get a quote today!
      </h5>
      <a href="/quote" className="btn btn-primary">
        Get a Quote
      </a>
    </div>
  );
};
export default Bio;
