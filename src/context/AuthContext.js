import { createContext, useContext, useState, useEffect } from 'react';
import { getUserProfile } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setUser = async () => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        try {
          const userProfile = await getUserProfile();
          if (storedUser.user_id === userProfile.user_id) {
            setCurrentUser(storedUser);
          } else {
            localStorage.removeItem('user');
          }
        } catch (error) {
          console.error('Failed to fetch user profile:', error);
          localStorage.removeItem('user');
        }
      }
      setLoading(false);
    };

    setUser();
  }, []);

  const login = async () => {
    const user = await getUserProfile();
    setCurrentUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    currentUser,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
