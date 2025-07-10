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
        
        setMessage('Successfully logged in!');
        setTimeout(() => navigate('/'), 1000);
      } else {
        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password
        });
        
        if (error) throw error;
        
        if (data.user) {
          // Create user profile
          const { error: profileError } = await supabase
            .from('users')
            .insert([
              {
                id: data.user.id,
                email: formData.email,
                username: formData.username
              }
            ]);
          
          if (profileError) throw profileError;
        }
        
        setMessage('Account created successfully! Please check your email to verify your account.');
      }
    } catch (error: any) {
      setMessage(error.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <VideoBackground videoSrc="https://images.pexels.com/videos/3045163/free-video-3045163.mp4" />
      
      <motion.div
        className="form-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '420px', margin: '20px' }}
      >
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          )}
          
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>
          
          <button 
            type="submit" 
            className="btn"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : (isLogin ? 'Login' : 'Sign Up')}
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ color: 'white', fontSize: '14px' }}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              style={{
                background: 'none',
                border: 'none',
                color: '#ff6666',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
        
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ 
              textAlign: 'center', 
              marginTop: '20px',
              color: message.includes('error') || message.includes('Error') ? '#ff6666' : '#66ff66',
              fontSize: '14px'
            }}
          >
            {message}
          </motion.p>
        )}
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            type="button"
            onClick={() => navigate('/')}
            style={{
              background: 'none',
              border: '1px solid #ff6666',
              color: '#ff6666',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Back to Home
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;