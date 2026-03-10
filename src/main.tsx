import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// @ts-ignore
import Oneko from 'react-cursor-cat-codedmind';
import ReactGA from 'react-ga4';
   
ReactGA.initialize('G-DY8YW4V94J');

createRoot(document.getElementById('root')!).render(
    <>
    <Oneko style={{ bg: 'red' }} />
    <App />
    </>
    
)
