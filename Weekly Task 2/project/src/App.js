import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App bg-dark">
      <Navbar />
      <Welcome />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;