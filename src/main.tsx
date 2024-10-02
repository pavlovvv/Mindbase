import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "typeface-roboto";
import "./globals.scss"
import 'swiper/css';
import 'swiper/css/navigation';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
  ,
)
