import Header from '../components/Header';
import Footer from '../components/Footer';
import img1 from '../components/images/people_at_table.jpg';
import '../components/styles/css/about.css';
export default function About() {
  return (
    <section id="about-page-container">
      <Header />
      <div id="about-main-content">
        <div id="about-main-left">
          <div className="about-blurb-container">
            <h2 className="about-blurb-title">About Us</h2>
            <p id="about-blurb-desc">
              Based in Cincinnati, Ohio, UNISURE® is a Specialty insurance
              brokerage providing an array of insurance services to individuals,
              small to mid-sized businesses, manufacturers, professionals,
              non-profit organizations, and public entities, since 2001. We have
              over 25 years of combined experience offering personal insurance
              and business insurance services to clients in the lower 48 states;
              except Florida. Our specialties include, General Liability
              Insurance, Cyber Liability Insurance, Lawyer Liability Insurance,
              Hotel Insurance, Tech Firm Insurance, Restaurant Insurance, Home
              Insurance, Auto Insurance and Flood Insurance throughout the
              United States.
            </p>
          </div>
          <div className="about-blurb-container">
            <h2 className="about-blurb-title">An Independent Advantage</h2>
            <p id="about-blurb-desc">
              We are Independent Agents in Cincinnati, Ohio, free to choose the
              best carrier for your insurance needs. We do not work for an
              insurance company; we work for you. We work on your side when you
              have a loss and follow through to see that you get fair, prompt
              payment and service. UNISURE® represents a carefully selected
              group of financially strong, reputable insurance companies.
              Therefore, we are able to offer you the best coverage at the most
              competitive price. What is an Independent Insurance Agent? When
              you decide to buy a car, you wouldn't purchase the first one you
              see. What if one day the automobile industry decided to make only
              one type of car, one make and one model. You wouldn't have a
              choice! The same situation holds true for insurance. You need
              insurance to drive a car, to purchase a house, to protect your
              family's financial future and to run a small business. But if
              there was only one insurance company that offered only one type of
              insurance, you wouldn't have a choice. The only solution would be
              going to that one company. With an independent insurance agent,
              you have choices. Independent agents are not tied to any one
              insurance company. One of the advantages of using an independent
              agent is that he or she works to satisfy your needs. You are using
              an expert for an important financial decision. An independent
              agent has several companies that he or she can approach to get you
              the best coverage at the best price. And your independent agent
              will know the companies with the most efficient claims departments
              to recover your losses as quickly as possible. When you buy
              insurance, you want an advocate who will properly assess the risks
              you face and give you an objective analysis of the marketplace,
              because it's up to you to make the final choice.
            </p>
          </div>
        </div>
        <div id="about-main-right">
          <div>
            <h3>Need Coverage?</h3>
            <button className="btn btn-primary">GET A QUOTE</button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
