import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

import { User } from '../../../types/user';
import { requestBackend } from '../../../util/requests';
import { SpringPage } from '../../../types/vendor/spring';

const Users = () => {
  const [page, setPage] = useState<SpringPage<User> | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const params: AxiosRequestConfig = {
        url: '/users',
        withCredentials: true,
        params: {
          page: 1,
          size: 12,
        },
      };

      try {
        const response = await requestBackend(params);
        setPage(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {page?.content.map((item) => (
        <p key={item.id}>{item.email}</p>
      ))}
    </div>
  );
};

export default Users;
