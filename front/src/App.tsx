import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import SignUp from "./pages/auth/SignUp";
import Header from "./components/header/Header";
import PrivateAuthRoute from './routes/PrivateUnauthRoutes';
import PrivateProfileRoute from './routes/PrivateAuthRoutes';
import SignIn from "./pages/auth/SignIn";
import Profile from "./pages/profile/Profile";
import MainPage from "./pages/mainPage/MainPage";

const App: FC = () => {
  return (
    <>
      <Header /><Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={
          (
            <PrivateAuthRoute>
              <SignIn />
            </PrivateAuthRoute>
          )
        }
        />
        <Route path="/signUp" element={
          (
            <PrivateAuthRoute>
              <SignUp />
            </PrivateAuthRoute>
          )
        }
        />
        <Route path="/profile"
          element={
            (
              <PrivateProfileRoute>
                <Profile />
              </PrivateProfileRoute>
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
