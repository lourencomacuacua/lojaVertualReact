import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import Admin from './pages/Admin';
import ProductDetails from './pages/ProductDetails';
import Auth from './pages/Admin/Auth';

type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: Number;
  scope: string;
  userFirstName: string;
  userId: number;
};

const Routess = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Catalog />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route
          path="admin/auth"
          element={<Navigate to="/admin/auth/login" />}
        />
        <Route path="/admin/auth/*" element={<Auth />} />
        <Route path="admin" element={<Navigate to="/admin/products" />} />
        <Route path="admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routess;
