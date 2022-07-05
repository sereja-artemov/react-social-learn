import './App.css';

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <main className="main-content">
        <Profile />
        <Post />
      </main>
    </div>
  );
}

export default App;
