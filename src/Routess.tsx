import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import Admin from './pages/Admin';
import ProductDetails from './pages/ProductDetails';
import Auth from './pages/Admin/Auth';
import { setNavigate } from './util/navigateHelper';
import { useEffect } from 'react';
const Routess = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);
  return (
    <>
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
    </>
  );
};

export default Routess;
