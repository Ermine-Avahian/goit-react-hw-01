import Profile from "./profile/Profile";
import userData from "./data/userData";

import FriendList from "./FrendList/FriendList";
import friends from "./data/friends.json";

import transactions from "./data/transactions";
import TransactionHistory from "./transactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
