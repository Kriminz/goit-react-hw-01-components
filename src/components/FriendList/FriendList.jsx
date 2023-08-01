import css from './FriendList.module.css'
import { FriendListItem } from './FriendListItem'

export function FriendList({friends}) {
  return (
      <>
        <ul className={css.friend_list}>
          {friends.map(({avatar, name, isOnline, id}) => (
            <FriendListItem 
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id} />
          ))}
        </ul>
      </>
  )
}