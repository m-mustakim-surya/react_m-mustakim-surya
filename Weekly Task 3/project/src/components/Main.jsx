import Navbar from './Navbar';
import Welcome from './Welcome';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Main() {
  return (
    <div className="bg-dark">
      <Navbar />
      <Welcome />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Main;