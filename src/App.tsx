import './assets/styles/custom.scss';
import './App.css';
import Routess from './Routess';
import { useState } from 'react';
import { AuthContext, AuthContextData } from './AuthContext';

const App = () => {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Routess />
    </AuthContext.Provider>
  );
};

export default App;
