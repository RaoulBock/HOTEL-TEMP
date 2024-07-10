import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AppProvider from "./context/AppProvider";
import { ROUTERS } from "./context/RouterList";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div>
          <Routes>
            {ROUTERS.map((e, i) => {
              return <Route key={i} path={e.path} element={e.element} />;
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
