// import css from "../FriendListItem/FriendListItem.module.css";

const FriendItem = (props) => {
  const { name, avatar, isOnline } = props;
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
};
export default FriendItem;
