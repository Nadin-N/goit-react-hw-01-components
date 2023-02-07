import PropTypes from 'prop-types';
import {
  ProfileBox,
  ProfileDescription,
  Portrait,
  AboutInfoBox,
  Name,
  Stats,
  StatsItem,
  StatsQuantity,
} from './Profile.styled';

export function Profile({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileBox className="profile">
      <ProfileDescription className="description">
        <Portrait src={avatar} alt={username} className="avatar" />
        <AboutInfoBox>
          <Name className="name">{username}</Name>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </AboutInfoBox>
      </ProfileDescription>
      <Stats className="stats">
        <StatsItem>
          <span className="label">Followers</span>
          <StatsQuantity className="quantity">{followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <StatsQuantity className="quantity">{views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <StatsQuantity className="quantity">{likes}</StatsQuantity>
        </StatsItem>
      </Stats>
    </ProfileBox>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
