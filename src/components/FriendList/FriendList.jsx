import FriendItem from "./FriendItem";
// import friends from "./data/friends.json";

const FriendList = ({ friends }) => {
  return (
    <ul>
      <FriendItem
        avatar={friends.avatar}
        name={friends.name}
        isOnline={friends.isOnline}
        key={friends.id}
      />
    </ul>
  );
};
export default FriendList;
