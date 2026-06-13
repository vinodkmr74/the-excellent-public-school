import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Router } from 'react-router-dom'
import Routers from './routers.jsx'
import './css/home.css'
import './css/footer.css'
import './css/componate.css'
import './css/blogs.css'



createRoot(document.getElementById('root')).render(
<Routers />
)
