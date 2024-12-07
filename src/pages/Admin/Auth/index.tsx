import { Route, Routes } from 'react-router-dom';
import authImage from '../../../assets/images/main-img.svg';
const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Divulgue seus produtos no DS Catalog</h1>
        <p>
          Faça parte de nosso catálogo de divulgação e aumente a venda dos seus
          produtos
        </p>
        <img src={authImage} alt="Imagem Auth" />
      </div>
      <div className="auth-form-container">
        <Routes>
          <Route path="login" element={<h1>Card de Login</h1>} />
          <Route path="signup" element={<h1>Card de Signup</h1>} />
          <Route path="recover" element={<h1>Card de Recover</h1>} />
        </Routes>
      </div>
    </div>
  );
};
export default Auth;
