import './App.css';

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <main className="main-content">
        <Profile />
        <Posts />
      </main>
    </div>
  );
}

export default App;
