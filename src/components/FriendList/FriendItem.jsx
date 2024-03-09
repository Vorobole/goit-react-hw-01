import css from "../FriendList/FriendList.module.css";

const FriendItem = ({ name, avatar, isOnline }) => {
  return (
    <div>
      <img className={css.friendAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      {isOnline ? (
        <p className={css.friendOnline}>Online</p>
      ) : (
        <p className={css.friendOffline}>Offline</p>
      )}
    </div>
  );
};
export default FriendItem;
