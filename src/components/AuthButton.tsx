import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

const AuthButton: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setLoading(false);
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (loading) {
    return (
      <div style={{ 
        color: '#ff0000', 
        fontSize: '14px',
        fontFamily: 'Courier New, Courier, monospace'
      }}>
        Loading...
      </div>
    );
  }

  if (user) {
    return (
      <motion.div
        style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span style={{ 
          color: '#ff6666', 
          fontSize: '14px',
          fontFamily: 'Courier New, Courier, monospace'
        }}>
          Welcome back!
        </span>
        <button
          onClick={handleLogout}
          style={{
            background: 'transparent',
            border: '2px solid #ff0000',
            color: '#ff0000',
            padding: '8px 16px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px',
            fontFamily: 'Courier New, Courier, monospace',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#ff0000';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.textShadow = '0 0 8px red, 0 0 12px #ff0000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#ff0000';
            e.currentTarget.style.textShadow = 'none';
          }}
        >
          Logout
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to="/auth"
        style={{
          background: 'transparent',
          border: '2px solid #ff0000',
          color: '#ff0000',
          padding: '8px 16px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontSize: '14px',
          fontFamily: 'Courier New, Courier, monospace',
          transition: 'all 0.3s ease',
          display: 'inline-block'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#ff0000';
          e.currentTarget.style.color = 'white';
          e.currentTarget.style.textShadow = '0 0 8px red, 0 0 12px #ff0000';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = '#ff0000';
          e.currentTarget.style.textShadow = 'none';
        }}
      >
        Login
      </Link>
    </motion.div>
  );
};

export default AuthButton;