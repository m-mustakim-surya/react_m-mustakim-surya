import { Provider } from "react-redux";
import store from "./store/store";
import Routers from "./routers/Routers";

function App() {
  return (
    <Provider store={store}>
        <Routers />
    </Provider>
  );
}

export default App;