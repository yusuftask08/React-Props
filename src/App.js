import './App.css';
// import Header from './components/Header';
import User from './components/User'

function App() {
  return (
    <div>
      <User name="yusuf" surname="taskiran" isLoggedIn={false} />
    </div>
  );
}

export default App;
