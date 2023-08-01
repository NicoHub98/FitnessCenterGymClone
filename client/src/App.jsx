import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import { HeaderV2, Login, Register } from "./componentes";
import HomePrincipal from "./pages/Home/index";
import { UserProvider } from "./store/userContext";
import AdminPage from "./componentes/AdminPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <HeaderV2 />

      <UserProvider>
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            marginTop: 70,
          }}
        >
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home/*" element={<HomePrincipal />} />
            <Route path="/admin/:id" element={<AdminPage />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </UserProvider>
    </>
  );
}

export default App;
