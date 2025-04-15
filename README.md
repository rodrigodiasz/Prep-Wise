# 🧠 Prepwise – AI-Powered Interview Preparation

Prepwise is a modern web application built with **Next.js**, **Firebase**, and **Vapi AI**, designed to help users prepare for job interviews through interactive AI-driven voice conversations. It offers real-time feedback, sleek UI, and an intuitive experience to simulate real interview scenarios.

---

## ⚙️ Tech Stack

- **Next.js** – Frontend & backend logic with full SSR/CSR capabilities  
- **Firebase** – Authentication (email/password) and cloud data storage  
- **Tailwind CSS** – Utility-first CSS framework for fast and responsive UI  
- **Vapi AI** – Voice AI agents to simulate real interview scenarios  
- **shadcn/ui** – Accessible and customizable UI components  
- **Google Gemini** – Advanced AI capabilities for generating interview questions and feedback  
- **Zod** – Type-safe validation for API and form schemas  

---

## 🔋 Features

### 🔐 Authentication
Sign up and log in using secure email/password authentication via Firebase.

### 🎤 AI-Powered Interviews
Create personalized job interviews using Vapi's voice AI and Google Gemini.

### 🧠 Real-time Feedback
Take voice-based interviews and get instant AI-generated feedback and insights.

### 🖥️ Sleek UI/UX
A clean, accessible, and intuitive user interface built with TailwindCSS and shadcn/ui.

### 📄 Transcripts & Analysis
Detailed transcripts of your interviews with key highlights and performance indicators.

### 📊 Dashboard
Track your past interviews, monitor performance, and manage sessions in one place.

### 📱 Fully Responsive
Designed to work seamlessly on desktops, tablets, and mobile devices.

### 🧱 Modular Code Architecture
Built with reusability and scalability in mind using clean code principles and modern best practices.

---

## 🚀 Getting Started

### 1. Clone the repository:
```bash
git clone https://github.com/rodrigodiasz/prepwise.git
cd prepwise
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Set up environment variables:
Create a `.env.local` file and add your Firebase and Vapi API keys:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_VAPI_API_KEY=your_vapi_key
# Add other necessary env variables here
```

### 4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app in action.

---

