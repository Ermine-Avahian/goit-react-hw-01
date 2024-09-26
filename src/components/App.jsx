import Profile from "./Profile";
import userData from "./userData";

import FriendList from "./FriendList";
import friends from "./friends";

import transactions from "./transactions";
import TransactionHistory from "./TransactionHistory";

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
      <TransactionHistory item={transactions} />
    </>
  );
};

export default App;
