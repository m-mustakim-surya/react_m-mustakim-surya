import NavBarAbout from "../NavbarAbout/NavbarAbout";
import "./AboutApp.css";

const AboutApp = () => {
  return (
    <div className="aboutApp">
      <NavBarAbout />
      <h2 className="titleAboutApp">About the App</h2>
      <p className="contentAboutApp">In this app, you can add, delete, submit, and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.</p>
    </div>
  );
};
export default AboutApp;