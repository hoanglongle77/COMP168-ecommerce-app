import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { loginUser, logoutUser } from "../api/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Perform any logic to check if user is authenticated
        setUser(null); // For simplicity, let's assume user is not authenticated initially
      } catch (error) {
        console.error("Error checking authentication:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (formData) => {
    try {
      const userData = await loginUser(formData);
      setUser(userData);
      router.push("/dashboard"); // Redirect to dashboard after successful login
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = async () => {};

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
