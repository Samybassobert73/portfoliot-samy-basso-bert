import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
import './index.css'
import { ThemeProvider } from './context/themeContext';
import { setupFirebase } from "./utils/firebase";
import App from './components/root/App';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider initialTheme={undefined} >
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
