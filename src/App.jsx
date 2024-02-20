import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import store from "./store/store";
import Home from "./components/Home";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
