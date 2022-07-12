import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Login() {
  return (
    <section id="login-page-container">
      <Header />
      <div>
        <h3>Login with your credentials below.</h3>
        <form>
          <input type="text" placeholder="email/username" name="username" />
          <input type="password" placeholder="password" name="password" />
          <button className="btn btn-secondary">login</button>
        </form>
      </div>
      <Footer />
    </section>
  );
}
