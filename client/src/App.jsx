import "./App.css";
import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

const Header = lazy(() => import('./components/header'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen flex flex-col bg-custom-bg bg-cover bg-left-center lg:bg-center bg-fixed bg-no-repeat bg-cover">
        <Header />
        <main className="flex-grow flex items-center">
          <Outlet />
        </main>
      </div>
    </Suspense>
  );
}

export default App;
