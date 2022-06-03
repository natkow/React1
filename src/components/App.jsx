import "./App.css";
import Profile from "./components/social-profile/Profile";
// import Statistics from "./components/Statistics/Statistics";
// import FriendList from "./components/FriendList/FriendList";
// import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./components/social-profile/user.json";
// import data from "./components/Statistics/data.json";
// import friends from "./components/FriendList/friends.json";
// import transactions from "./components/TransactionHistory/transactions.json";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
