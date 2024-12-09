import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import './styles.css';
import Users from './Users';
import Products from './Products';

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>
          <Route path="products/*" element={<Products />} />
          <Route path="categories" element={<h1>Crud Categories</h1>} />
          <Route path="users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
