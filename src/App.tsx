import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/custom.scss';
import './App.css';
import Routess from './Routess';
import { useState } from 'react';
import { AuthContext, AuthContextData } from './AuthContext';
import { ToastContainer } from 'react-toastify';
const App = () => {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Routess />
      <ToastContainer />
    </AuthContext.Provider>
  );
};

export default App;
