import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import VideoBackground from '../components/VideoBackground';
import { supabase } from '../lib/supabase';

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password
        });
        
        if (error) throw error;
        
        // Ensure user profile exists in users table
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          // Check if user profile exists
          const { data: existingUser } = await supabase
            .from('users')
            .select('user_id')
            .eq('user_id', user.id)
            .single();

          // If no profile exists, create one
          if (!existingUser) {
            const { error: profileError } = await supabase
              .from('users')
              .insert([
                {
                  user_id: user.id,
                  email: user.email || formData.email,
                  username: user?.email ? user.email.split('@')[0] : 'user'

                }
              ]);
            
            if (profileError) {
              throw profileError;
            }
          }
        }
        
        setMessage('Successfully logged in!');
        setTimeout(() => navigate('/'), 1000);
      } else {
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              username: formData.username
            }
          }
        });
        
        if (error) throw error;
        
        setMessage('Account created successfully! Please check your email to verify your account.');
      }
    } catch (error: any) {
      setMessage(error.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative'
    }}>
      <VideoBackground videoSrc="https://images.pexels.com/videos/3045163/free-video-3045163.mp4" />
      
      {/* Dark overlay for better readability */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1
      }} />
      
      <motion.div
        className="form-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{ 
          maxWidth: '420px', 
          margin: '20px',
          position: 'relative',
          zIndex: 2,
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '2px solid #ff0000',
          boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)'
        }}
      >
        <motion.h1
          style={{ 
            textAlign: 'center',
            color: '#ff0000',
            fontSize: '2.5rem',
            marginBottom: '30px',
            textShadow: '0 0 10px rgba(255, 0, 0, 0.5)',
            fontFamily: 'Courier New, Courier, monospace'
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {isLogin ? 'Enter the Darkness' : 'Join the Shadows'}
        </motion.h1>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <motion.div 
              className="input-box"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                style={{
                  background: 'rgba(0, 0, 0, 0.8)',
                  border: '2px solid rgba(255, 0, 0, 0.3)',
                  color: '#fff',
                  fontSize: '16px',
                  padding: '15px',
                  borderRadius: '8px',
                  width: '100%',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#ff0000'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 0, 0, 0.3)'}
              />
            </motion.div>
          )}
          
          <motion.div 
            className="input-box"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                background: 'rgba(0, 0, 0, 0.8)',
                border: '2px solid rgba(255, 0, 0, 0.3)',
                color: '#fff',
                fontSize: '16px',
                padding: '15px',
                borderRadius: '8px',
                width: '100%',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#ff0000'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 0, 0, 0.3)'}
            />
          </motion.div>
          
          <motion.div 
            className="input-box"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              style={{
                background: 'rgba(0, 0, 0, 0.8)',
                border: '2px solid rgba(255, 0, 0, 0.3)',
                color: '#fff',
                fontSize: '16px',
                padding: '15px',
                borderRadius: '8px',
                width: '100%',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#ff0000'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 0, 0, 0.3)'}
            />
          </motion.div>
          
          <motion.button 
            type="submit"
            disabled={isLoading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              width: '100%',
              padding: '15px',
              background: isLoading ? '#666' : '#ff0000',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              fontFamily: 'Courier New, Courier, monospace',
              marginTop: '20px'
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.background = '#cc0000';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.5)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.currentTarget.style.background = '#ff0000';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          >
            {isLoading ? 'Loading...' : (isLogin ? 'Login' : 'Sign Up')}
          </motion.button>
        </form>
        
        <motion.div 
          style={{ textAlign: 'center', marginTop: '30px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p style={{ color: 'white', fontSize: '14px' }}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              style={{
                background: 'none',
                border: 'none',
                color: '#ff0000',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: '14px',
                fontFamily: 'Courier New, Courier, monospace',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ff6666'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#ff0000'}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </motion.div>
        
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ 
              textAlign: 'center', 
              marginTop: '20px',
              color: message.includes('error') || message.includes('Error') ? '#ff6666' : '#00ff00',
              fontSize: '14px',
              fontFamily: 'Courier New, Courier, monospace',
              textShadow: message.includes('error') || message.includes('Error') 
                ? '0 0 5px rgba(255, 102, 102, 0.5)' 
                : '0 0 5px rgba(0, 255, 0, 0.5)'
            }}
          >
            {message}
          </motion.p>
        )}
        
        <motion.div 
          style={{ textAlign: 'center', marginTop: '30px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button
            type="button"
            onClick={() => navigate('/')}
            style={{
              background: 'none',
              border: '2px solid #ff0000',
              color: '#ff0000',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontFamily: 'Courier New, Courier, monospace',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ff0000';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'none';
              e.currentTarget.style.color = '#ff0000';
            }}
          >
            Back to Home
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthPage;