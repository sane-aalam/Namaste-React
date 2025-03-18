import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      contact: "",
      isLoading: true,
    };
  }

  // Simulate fetching data when the component is mounted
  componentDidMount() {
    this.fetchUserData();
  }

  // Simulate an API call
  fetchUserData() {
    // Simulate an API call with fake data
    setTimeout(() => {
      const userData = {
        name: "Akshay",
        location: "Delhi",
        contact: "+9181818101",
      };

      this.setState({
        name: userData.name,
        location: userData.location,
        contact: userData.contact,
        isLoading: false,
      });
    }, 2000); // Simulate 2 seconds API call delay
  }

  // componentDidUpdate is called every time the state or props change
  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      console.log("User data has been updated");
    }
  }

  // componentWillUnmount is called before the component is removed from the DOM
  componentWillUnmount() {
    console.log("UserClass component will unmount");
    // You can clean up any subscriptions or ongoing API calls here
  }

  render() {
    const { name, location, contact, isLoading } = this.state;

    // Show loading state if data is still being fetched
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="user-class">
        <h1>Name: {name}</h1>
        <p>Location: {location}</p>
        <p>Contact: {contact}</p>
      </div>
    );
  }
}

export default UserClass;
