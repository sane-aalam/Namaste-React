const Contact = () => {
  return (
    <div className="container">
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
      />
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
      />
      <textarea
        id="subject"
        name="subject"
        placeholder="Write something.."
      ></textarea>
      <input type="submit" value="Submit" />
    </div>
  );
};

export default Contact;
