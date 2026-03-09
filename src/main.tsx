import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// @ts-ignore
import Oneko from 'react-cursor-cat-codedmind';

createRoot(document.getElementById('root')!).render(
    <>
    <Oneko style={{ bg: 'red' }} />
    <App />
    </>
    
)
