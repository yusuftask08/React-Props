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
      <User name="yusuf" surname="taskiran" isLoggedIn={false} friends={friends} />
    </div>
  );
}

export default App;
