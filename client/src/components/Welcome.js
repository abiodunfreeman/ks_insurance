import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../components/styles/css/welcome.css';
export default function Welcome() {
  return (
    <section id="welcome-container" className="min-h-screen pb-10">
      <h1 className="text-center my-8 font-serif font-extrabold">
        Welcome to <span className="text-red-500">Stewart Insurance</span>.
        <br />
        Here’s what we do for you.
      </h1>

      <div className="welcome-info-container">
        <div className="info-container-icon">
          <i className="fa-solid fa-lightbulb svg"></i>
          <h2>Our Philosophy</h2>
        </div>
        <div className="info-container-text text-right">
          <h2>Insurance isn't simple, but our purpose is.</h2>
          <p>
            When you are properly insured, you feel it. You know what to expect
            when life happens. We all deserve this confidence, so our purpose is
            guiding you through building a proper insurance plan.
          </p>
          <p>
            We help you navigate among the many different coverages available to
            you. As an insurance broker, we work with you and a selection of
            insurance company partners to provide the proper coverage for your
            needs.
          </p>
        </div>
      </div>
      <div className="welcome-info-container " id="p">
        <div className="info-container-icon" id="f">
          <i class="fa-solid fa-magnifying-glass svg"></i>
          <h2>The Focus</h2>
        </div>
        <div className="info-container-text text-left" id="left-cont">
          <h2>
            We focus within real estate to bring insurance expertise to you.
          </h2>
          <p>
            If you are a title agent, attorney, or real estate broker, your
            business insurance plan can include Professional Liability (E&O),
            Cyber Liability, Crime Policy and other business related coverage,
            and it is extremely important to your overall operation.
          </p>
          <p>
            As a home owner, it’s important to evaluate your personal insurance
            plan to protect your home and other property. We are your resource
            for home, auto and other specific coverage needs.
          </p>
        </div>
      </div>
      <div className="welcome-info-container">
        <div className="info-container-icon">
          <i class="fa-solid fa-envelope-open svg"></i>
          <h2>Your Invitation</h2>
        </div>
        <div className="info-container-text right-cont text-right">
          <h2>When you decide to be a client of KS Insurance…</h2>
          <p>
            Expect to be the only focus, to be empowered, and to make confident
            insurance decisions.
          </p>
          <p>
            After we build your proper insurance plan together, our team of
            advisors continue to support you. We will connect periodically to
            evaluate your coverage, and when you need to put your coverage to
            use, we are your advocate during claim time.
          </p>
          <p>We invite you to join the properly insured community.</p>
          <Link to="/quote" className="no-underline m-10">
            <Button variant="contained"> Get Your Quote</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
