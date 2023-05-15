import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export function FriendList({friends}) {
  return (
      <>
        {friends.map(({avatar, name, isOnline, id}) => (
          <li className="item" key={id}>
            <span className={`${css.status} ${css[isOnline]}`}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        ))}
      </>
  )
}

FriendList.propTypes = {
  name: PropTypes.string,
  isOnline: PropTypes.bool,
}