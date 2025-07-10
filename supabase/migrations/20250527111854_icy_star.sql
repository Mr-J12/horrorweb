/*
  # Initial Schema Setup

  1. New Tables
    - users
      - id (uuid, primary key) 
      - email (text, unique)
      - username (text)
      - created_at (timestamp)
    
    - stories
      - id (uuid, primary key)
      - title (text)
      - content (text) 
      - image_url (text)
      - user_id (uuid, foreign key)
      - created_at (timestamp)
    
    - feedback
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - content (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  username text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data" 
  ON users
  FOR SELECT 
  TO authenticated
  USING (auth.uid() = id);

-- Stories table
CREATE TABLE IF NOT EXISTS stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  image_url text,
  user_id uuid REFERENCES users(id),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE stories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read stories"
  ON stories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Users can create stories"
  ON stories
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Feedback table
CREATE TABLE IF NOT EXISTS feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can create feedback"
  ON feedback
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);