import './App.css';
// import Header from './components/Header';
import User from './components/User'
const friends = [
  {
    id: 1,
    name: "hasan"
  },
  {
    id: 2,
    name: "mehmet"
  },
  {
    id: 3,
    name: "fatih"
  }
]
function App() {
  return (
    <div>
      <User
        name="Yusuf"
        surname="taskiran"
        isLoggedIn={true}
        friends={friends}
        adress={{
          title: 'Üsküdar / İstanbul',
          zip: 34000
        }}
      />
    </div>
  );
}

export default App;
