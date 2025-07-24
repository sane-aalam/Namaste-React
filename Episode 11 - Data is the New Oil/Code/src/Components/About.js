import UserFunction from "./UserFunction";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <div className="aboutSection">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>
      <div id="ClassBaseComp" style={{ marginLeft: "10px" }}>
        <br />
        <UserFunction />
        <br />
        <UserClass />
      </div>
    </div>
  );
};

export default About;
