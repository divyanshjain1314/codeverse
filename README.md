# React.js Machine Task - User Management & Auth

A responsive React.js application featuring User Registration (Signup), Authentication (Login), and Protected Routing using Redux Toolkit for state management and Redux Persist for data recovery.

## 🚀 Features

* **User Authentication**: Secure Login and Signup flow.
* **State Management**: Centralized store using Redux Toolkit.
* **Persistent Storage**: User data and auth sessions persist on page refresh via Redux Persist.
* **Protected Routes**: sensitive pages (Home) are only accessible to authenticated users.
* **Form Validation**: Basic validation for login and signup credentials.
* **Styling**: Styled with Tailwind CSS for a modern, clean UI.

## 🛠️ Tech Stack

* **Frontend**: React.js (Vite)
* **Routing**: React Router DOM v6
* **State Management**: Redux Toolkit (RTK)
* **Persistence**: Redux Persist
* **Styling**: Tailwind CSS

## 📋 Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone [YOUR_GITHUB_LINK_HERE]
    cd [PROJECT_FOLDER_NAME]
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

## 🏗️ Project Structure

```text
src/
├── components/        # Reusable components (AuthForm, ProtectedRoute)
├── pages/             # Page components (Home, Login, Signup)
├── redux/             # Redux Store, Slices, and Persist config
│   ├── slices/        # Auth and User slices
│   └── store.js       # Store configuration
├── App.jsx            # Routing and Main App logic
└── main.jsx           # Entry point with Provider & PersistGate