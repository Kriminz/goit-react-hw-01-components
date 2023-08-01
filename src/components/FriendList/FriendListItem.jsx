import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export function FriendListItem({avatar, name, isOnline, id}) {
  return(
    <>
      <li className={css.item} key={id}>
        <span className={`${css.status} ${css[isOnline]}`}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    </>
  )
}
  
FriendListItem.propTypes = {
  name: PropTypes.string,
  isOnline: PropTypes.bool,
}