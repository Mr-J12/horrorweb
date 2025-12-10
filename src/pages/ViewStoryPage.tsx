import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import VideoBackground from '../components/VideoBackground';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabase';

interface Story {
id: string;
title: string;
content: string;
image_url: string | null;
user_id: string;
created_at: string;
}

const ViewStoryPage: React.FC = () => {
const navigate = useNavigate();
const [stories, setStories] = useState<Story[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');

React.useEffect(() => {
    window.scrollTo(0, 0);

    const fetchStories = async () => {
    setLoading(true);
    setError('');
    try {
        const { data, error: supabaseError } = await supabase
        .from('stories')
        .select('*')
        .order('created_at', { ascending: false });

        if (supabaseError) {
        console.error('Supabase error:', supabaseError);
        setError(`Database error: ${supabaseError.message}`);
        return;
        }

        if (!data || data.length === 0) {
        console.warn('No stories found in database');
        setStories([]);
        return;
        }

        console.log('Stories fetched:', data);
        setStories(data as Story[]);
    } catch (error: any) {
        console.error('Failed to fetch stories:', error);
        setError('Failed to load stories. Please try again later.');
    } finally {
    setLoading(false);
}
};

    fetchStories();
}, []);

return (
    <div>
    <header className="header">
        <Navigation />

    <motion.section
        className="h-text"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
    >
        <h1>Explore the Shadows</h1>
        <button className="scroll-button" onClick={() => document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })}>
            Click To Explore
        </button>
        </motion.section>
    </header>

    <div>
        <VideoBackground videoSrc="hrr.mp4" />
        <div id="content" className="content-section">
        {loading ? (
            <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
            <p>Loading stories...</p>
            </motion.div>
        ) : error ? (
            <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
            <p className="text-red-500">{error}</p>
            </motion.div>
        ) : stories.length > 0 ? (
            <div className="space-y-6">
            {stories.map((story) => (
                <motion.div
                key={story.id}
                className="card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                >
                <h2 className="text-2xl font-bold mb-4">{story.title}</h2>
                {story.image_url && (
                    <img
                    src={story.image_url}
                    alt={story.title}
                    className="content-image mb-4 w-full object-cover rounded"
                    />
                )}
                <p className="text-lg mb-4">{story.content}</p>
                <p className="text-sm text-gray-400">
                    {new Date(story.created_at).toLocaleDateString()}
                </p>
                </motion.div>
            ))}
            </div>
        ) : (
            <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
            <p>No stories found.</p>
            </motion.div>
        )}
        </div>
        <Footer />
    </div>
    </div>
);
};

export default ViewStoryPage;