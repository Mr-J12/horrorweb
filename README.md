# 👻 Void Whispers - Horror Stories Platform

A dark and immersive horror web application where users can explore and share spine-chilling stories, real-life paranormal incidents, and demonology content. Built with React, TypeScript, and Supabase.

![Void Whispers](https://img.shields.io/badge/version-1.0.0-red)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Supabase](https://img.shields.io/badge/Supabase-2.51.0-green)

## ✨ Features

- 📖 **Story Showcase**: Browse through a collection of horror stories with rich content and images
- ✍️ **Story Submission**: Share your own terrifying tales with the community
- 👹 **Demonology Section**: Explore detailed information about various demons and entities
- 🌙 **Real-Life Incidents**: Read documented paranormal experiences
- 🎬 **Immersive UI**: Video backgrounds and smooth animations using Framer Motion
- 🔐 **User Authentication**: Secure login and registration with Supabase
- 💬 **Feedback System**: Submit feedback and suggestions
- 📱 **Responsive Design**: Fully responsive across all devices

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0 with TypeScript
- **Build Tool**: Vite 7.0.4
- **Routing**: React Router DOM 7.6.3
- **Styling**: Tailwind CSS 4.1.11
- **Animations**: Framer Motion 12.23.3
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Icons**: React Icons 5.5.0

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn
- A Supabase account and project

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Mr-J12/horrorweb.git
cd horrorweb
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory and add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

To get these credentials:
1. Go to [Supabase](https://supabase.com)
2. Navigate to your project settings
3. Find your API credentials under "Project Settings" → "API"

### 4. Database Setup

Run the SQL migration file to set up your database schema:

```sql
-- Execute the migration file located at:
-- supabase/migrations/20250527111854_icy_star.sql
```

This will create the necessary tables:
- `users` - User information
- `stories` - Horror story submissions
- `feedback` - User feedback

### 5. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5174`

## 📁 Project Structure

```
horrorweb/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── VideoBackground.tsx
│   │   └── AuthButton.tsx
│   ├── pages/           # Page components
│   │   ├── HomePage.tsx
│   │   ├── ViewStoryPage.tsx
│   │   ├── ShareStoryPage.tsx
│   │   ├── DemonologyPage.tsx
│   │   ├── RealLifePage.tsx
│   │   ├── AuthPage.tsx
│   │   └── FeedbackPage.tsx
│   ├── lib/             # Utilities and configurations
│   │   └── supabase.ts  # Supabase client setup
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── supabase/
│   └── migrations/      # Database migrations
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎯 Available Scripts

- `npm run dev` - Start development server on port 5174
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Features Breakdown

### Story Management
- View all submitted stories with pagination
- Rich text content with image support
- Timestamps for each story
- Smooth animations on load

### Authentication
- Email/password authentication
- Protected routes
- Session management with Supabase

### User Interface
- Dark horror-themed design
- Video backgrounds for immersive experience
- Smooth scroll animations
- Responsive navigation
- Interactive cards and buttons

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and optimized builds. Configuration can be found in `vite.config.js`.

### Tailwind CSS
Tailwind is configured for custom styling. See `tailwind.config.js` for customization options.

### ESLint
Code quality is maintained using ESLint with React-specific rules. Configuration in `eslint.config.js`.

## 🗄️ Database Schema

### Stories Table
```typescript
interface Story {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  user_id: string;
  created_at: string;
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Yashwant**
- GitHub: [@Mr-J12](https://github.com/Mr-J12)

## 🙏 Acknowledgments

- Horror community for inspiration
- Supabase for backend infrastructure
- Framer Motion for amazing animations
- The open-source community

---

**⚠️ Warning**: This website contains horror content that may not be suitable for all audiences. Viewer discretion is advised.

*Conjured in the Dark by Yashwant © 2025. The Nightmares are Real.*
