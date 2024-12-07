import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import './styles.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>
          <Route path="products" element={<h1>Crud Produtos</h1>} />
          <Route path="categories" element={<h1>Crud Categories</h1>} />
          <Route path="users" element={<h1>Crud Users</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
