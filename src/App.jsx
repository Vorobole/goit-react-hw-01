import "./App.css";
import Profile from "./components/profile/profile";
import userData from "./data/userData.json";
import FriendList from "./components/FriendList/FriendList";

// import FriendItem from "./components/FriendList/FriendItem";
import friends from "./data/friends.json";
function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
