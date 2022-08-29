import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  const userInfoHandler = (userInfo) => {
    // Available in App.js
    console.log(userInfo);
  };

  return (
    <div className="App">
      {/* Prop som hämtar userInfo till App.js */}
      <LoginForm sendToApp={userInfoHandler} />
    </div>
  );
}

export default App;
