import PropTypes from "prop-types";
import itemStyles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={itemStyles.card}>
      <img src={avatar} alt="Avatar" width="48" className={itemStyles.avatar} />
      <p className={itemStyles.name}>{name}</p>
      <p className={isOnline ? itemStyles.online : itemStyles.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
