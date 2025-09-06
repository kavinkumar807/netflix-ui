import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";

const App = () => {
  var videoId = "5f58f95c-c641-4a6a-8192-35e780603902";
  
  return <Watch src={`http://localhost:8080/api/v1/videos/${videoId}/master.m3u8`} />;
};

export default App;