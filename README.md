# Syncrate Website

A modern, high-performance website built with Next.js 16, Tailwind CSS, and Supabase. Designed with a focus on "calm technology," featuring smooth animations, a dark mode aesthetic, and integrated AI assistant capabilities.

## 🚀 Features

-   **Modern Tech Stack**: Built on Next.js 16 (App Router) and React 19.
-   **Authentication**: Secure user management with Supabase Auth.
-   **Database**: PostgreSQL via Supabase for contact form submissions and user data.
-   **AI Integration**: "SynBot," an AI assistant (configured for Groq/Grok).
-   **Booking System**: Integrated Calendly modal for scheduling appointments.
-   **Responsive Design**: Mobile-first approach with a custom design system using Tailwind CSS v4.
-   **Theming**: Built-in Dark/Light mode support (defaulting to a premium dark theme).
-   **Animations**: Smooth page transitions and micro-interactions.

## 🛠️ Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Backend / Auth**: [Supabase](https://supabase.com/)

## 📦 Getting Started

### Prerequisites

-   Node.js 18+ installed on your machine.
-   A Supabase account and project.
-   An API Key for the AI service (Groq/Grok).

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/bhavikbafna02/syncrate-website.git
    cd syncrate-website
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**

    Create a `.env.local` file in the root directory and add the following keys:

    ```bash
    # Supabase Configuration
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    
    # AI Configuration (SynBot)
    GROK_API_KEY=your_grok_api_key
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🗄️ Database Setup

This project uses Supabase for its backend.

1.  Create a new project on [Supabase](https://supabase.com/).
2.  Go to the SQL Editor in your Supabase dashboard.
3.  Run the contents of the `SUPABASE_SETUP.sql` file provided in this repository. This will:
    -   Create the `contact_messages` table.
    -   Enable Row Level Security (RLS).
    -   Set up policies for inserting and viewing messages.

## 📂 Project Structure

-   `app/`: Main application routes (Next.js App Router).
-   `components/`: Reusable UI components (Navbar, Footer, Modals, etc.).
-   `utils/`: Utility functions and Supabase client configuration.
-   `public/`: Static assets (images, SVGs).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

Proprietary / All Rights Reserved.
