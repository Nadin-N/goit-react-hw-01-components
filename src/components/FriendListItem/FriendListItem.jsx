import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export function FriendListItem({ avatar, name, isOnline }) {
  function statusUserColor() {
    if (isOnline) {
      return 'green';
    } else {
      return 'red';
    }
  }

  return (
    <FriendItem className="item">
      <FriendStatus
        className="status"
        style={{ backgroundColor: statusUserColor() }}
      ></FriendStatus>
      <FriendAvatar className="avatar" src={avatar} alt={name} width="80" />
      <FriendName className="name">{name}</FriendName>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
