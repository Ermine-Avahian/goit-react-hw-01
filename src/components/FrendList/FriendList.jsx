import FriendListItem from "./FriendListItem";
import friendStyles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={friendStyles.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className={friendStyles.item}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
