import NavBarAbout from "../NavbarAbout/NavbarAbout";
import "./AboutAuthor.css";

const AboutAuthor = () => {
  return (
    <div className="aboutAuthor">
      <NavBarAbout />
      <h2 className="titleAboutAuthor">About the Author</h2>
      <p className="contentAboutAuthor">This app was developed by someone, a self-taught web developer and technical writer.</p>
    </div>
  );
};
export default AboutAuthor;