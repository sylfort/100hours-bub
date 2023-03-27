import React from "react";
// import axios from "axios";

const Profile = () => {
  //   const [user, setUser] = useState({});
  //   const [createdEvents, setCreatedEvents] = useState([]);
  //   const [joinedEvents, setJoinedEvents] = useState([]);

  //   useEffect(() => {
  //     // Fetch user information
  //     const fetchUserInfo = async () => {
  //       // Replace with your API endpoint for fetching user information
  //       const response = await axios.get('/api/user-info');
  //       setUser(response.data);
  //     };

  //     // Fetch events created by the user
  //     const fetchCreatedEvents = async () => {
  //       // Replace with your API endpoint for fetching created events
  //       const response = await axios.get('/api/created-events');
  //       setCreatedEvents(response.data);
  //     };

  //     // Fetch events joined by the user
  //     const fetchJoinedEvents = async () => {
  //       // Replace with your API endpoint for fetching joined events
  //       const response = await axios.get('/api/joined-events');
  //       setJoinedEvents(response.data);
  //     };

  //     fetchUserInfo();
  //     fetchCreatedEvents();
  //     fetchJoinedEvents();
  //   }, []);

  // Update user information
  const updateUserInformation = updatedInfo => {
    // Replace with your API call to update user information
  };

  return (
    <div>
      <h2>User Information</h2>
      {/* Display user information and provide options to update information */}
      {/* ... */}
      <button onClick={updateUserInformation}>Update Information</button>

      {/* <h2>Events Created by You</h2>
      <ul>
        {createdEvents.map((event) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>

      <h2>Events Joined by You</h2>
      <ul>
        {joinedEvents.map((event) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Profile;
