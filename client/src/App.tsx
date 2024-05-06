import {FC} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/routes/AppRouter.tsx";

const App: FC = () => {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
};

export default App;