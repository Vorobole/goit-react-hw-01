const Profile = (props) => {
  return (
    <div>
      {" "}
      <div>
        {" "}
        <img src={props.image} alt="User avatar" /> <p>{props.name}</p>{" "}
        <p>{props.tag}</p> <p>{props.location}</p>{" "}
      </div>{" "}
      <ul>
        {" "}
        <li>
          <span>Followers</span> <span>{props.stats.followers}</span>{" "}
        </li>{" "}
        <li>
          <span>Views</span> <span>{props.stats.following}</span>{" "}
        </li>{" "}
        <li>
          <span>Likes</span> <span>{props.stats.posts}</span>{" "}
        </li>{" "}
      </ul>
    </div>
  );
};
export default Profile;
