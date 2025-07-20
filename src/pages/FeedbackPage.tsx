import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import VideoBackground from '../components/VideoBackground';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabase';

const FeedbackPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    feedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Check if we're in demo mode
      if (import.meta.env.VITE_SUPABASE_URL === 'your-supabase-url-here') {
        // Demo mode - simulate successful submission
        setMessage('Demo mode: Your feedback would be submitted successfully in a real environment!');
        setFormData({ username: '', email: '', feedback: '' });
        setIsSubmitting(false);
        setTimeout(() => {
          navigate('/');
        }, 2000);
        return;
      }

      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setMessage('Please sign in to submit feedback. In demo mode, authentication is simulated.');
        setIsSubmitting(false);
        return;
      }

      const { error } = await supabase
        .from('feedback')
        .insert([
          {
            user_id: user.id,
            content: `Username: ${formData.username}\nEmail: ${formData.email}\nFeedback: ${formData.feedback}`
          }
        ]);

      if (error) throw error;

      setMessage('Thank you for your feedback!');
      setFormData({ username: '', email: '', feedback: '' });
      
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error: any) {
      console.error('Error submitting feedback:', error);
      if (error.message?.includes('Invalid API key') || error.message?.includes('supabase')) {
        setMessage('Demo mode: Database connection not available. Your feedback would be saved in a real environment!');
      } else {
        setMessage(`Error submitting feedback: ${error.message || 'Please try again.'}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <VideoBackground videoSrc="https://images.pexels.com/videos/3045163/free-video-3045163.mp4" />
      
      <header className="header">
        <Navigation />
        
        <motion.section 
          className="h-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Feedback</h1>
        </motion.section>
      </header>

      <div className="content-section">
        <motion.div
          className="form-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Feedback Form</h1>
          <form onSubmit={handleSubmit}>
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
              <textarea
                name="feedback"
                placeholder="Your feedback..."
                value={formData.feedback}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
          
          {message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ 
                textAlign: 'center', 
                marginTop: '20px',
                color: message.includes('Error') ? '#ff6666' : '#66ff66'
              }}
            >
              {message}
            </motion.p>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default FeedbackPage;