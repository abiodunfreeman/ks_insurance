import { Link } from 'react-router-dom';
import Header from '../components/Header';
export default function Mom() {
  return (
    <div className="min-h-screen bg-slate-300">
      <Header />
      <div className="padtop10"></div>
      <h1 className="text-center my-5"> Hi Mom</h1>
      <div className="flex flex-wrap p-12 ">
        <h2 className="p-8 wtext-center">
          This is a fullstack web application with the main purpose being a way
          to funnel leads and track basic information about them like their
          name, email, what type of insurance they're interested in, etc. Along
          with whether or not they have been contacted yet or not.
        </h2>
        <h2>
          The page you're on now is a personal page that isn't linked anywhere
          else. Don't judge this page or the /leads page to harshly. I just
          threw them together as I don't expect anyone to see or use them. The
          rest of the site I put some effort in as I'm going to use it for my
          portfolio.
          <br />
          <br />
          The <Link to="/">Home</Link> link obviously takes you to the homepage.{' '}
          <br />
          <br />
          The <Link to="/quote">Create a Lead</Link> takes you to a page to fill
          out a form that will add whoever fills it out to a database. I also
          have it set up where it automatically emails a dummy email address
          whenever someone fills it out. <br />
          <br />
          And finally, to view the 'leads' click the{' '}
          <Link to="/leads">Leads</Link> link. The server that is fetching the
          data from the database is hosted for free so it will most likely take
          30 seconds - 1 minute for them to populate as the server goes to
          'sleep' after not being used for 30 minutes.
        </h2>
      </div>

      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/quote">Create A lead</Link>
        <Link to="/leads">Leads</Link>
      </div>
    </div>
  );
}
