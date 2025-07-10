import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import VideoBackground from '../components/VideoBackground';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabase';

const ShareStoryPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: ''
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
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setMessage('Please sign in to share your story.');
        setIsSubmitting(false);
        return;
      }

      const { error } = await supabase
        .from('stories')
        .insert([
          {
            title: formData.title,
            content: formData.content,
            image_url: formData.imageUrl || 'https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg',
            user_id: user.id
          }
        ]);

      if (error) throw error;

      setMessage('Your story has been shared successfully!');
      setFormData({ title: '', content: '', imageUrl: '' });
      
      setTimeout(() => {
        navigate('/stories');
      }, 2000);
    } catch (error) {
      console.error('Error sharing story:', error);
      setMessage('Error sharing story. Please try again.');
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
          <h1>Share Your Story</h1>
        </motion.section>
      </header>

      <div className="content-section">
        <motion.div
          className="form-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Share Your Paranormal Experience</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                name="title"
                placeholder="Story Title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="input-box">
              <input
                type="url"
                name="imageUrl"
                placeholder="Image URL (optional)"
                value={formData.imageUrl}
                onChange={handleChange}
              />
            </div>
            
            <div className="input-box">
              <textarea
                name="content"
                placeholder="Tell us your story..."
                value={formData.content}
                onChange={handleChange}
                rows={10}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sharing...' : 'Share Story'}
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

export default ShareStoryPage;