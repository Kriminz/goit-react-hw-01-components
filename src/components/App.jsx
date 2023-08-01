import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics"
import { FriendList } from './FriendList/FriendList'
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'

// console.log(userData);

export function App() {
  return (
    <div>

      <p>First</p>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />

      <p>Second</p>
      <Statistics title="" stats={data} />

      <p>Third</p>
      <FriendList friends={friends}/>
      
      <p>Fourth</p>
      <TransactionHistory items={transactions} />
    </div>
  );
}
