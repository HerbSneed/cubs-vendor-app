import "./App.css";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-custom-bg bg-cover bg-fixed">
      <Header />
      <main className="flex-grow py-5">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
