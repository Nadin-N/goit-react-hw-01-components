import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendItem className="item">
      {isOnline ? (
        <FriendStatus
          className="status"
          style={{ backgroundColor: 'green' }}
        ></FriendStatus>
      ) : (
        <FriendStatus
          className="status"
          style={{ backgroundColor: 'red' }}
        ></FriendStatus>
      )}
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
