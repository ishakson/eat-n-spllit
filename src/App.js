const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={initialFriends} />
      </div>
    </div>
  );
}

function FriendsList({ friends }) {
  return (
    <>
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
    <FormAddFriend/>
      </>
  );
}

function Friend({ friend }) {
  return (
   
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>Selecet</Button>
    </li>
      
  );
}

function Button({children}){
  return <button className="button">{children}</button>
}

function FormAddFriend({onSubmit}){
  return (
    <form className="for-add-friend" onSubmit={onSubmit}>
      <label>Frined's Name</label>
      <input type="text" placeholder="Name" />
      <label>Friend's Image Url</label>
      <input type="text" placeholder="Image" />
      <Button>Add</Button>
    </form>
  );
}