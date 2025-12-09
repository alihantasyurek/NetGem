import Body from "./components/Body.jsx";
import Login from "./components/Login.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

//TODO workspaces - alt tab

export default App;
