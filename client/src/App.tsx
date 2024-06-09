import {FC} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/routes/AppRouter.tsx";
import {Provider} from "react-redux";
import {setupStore} from "./store/store.ts";

const store = setupStore()

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </Provider>
  );
};

export default App;