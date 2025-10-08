import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


createRoot(document.getElementById('root')).render(
  <Auth0Provider
      domain="dev-ou2jc0df2dlaepsd.us.auth0.com"
      clientId="yz2evMTLLaIhcZv51n8KDPYvE7pRyYl4"
      authorizationParams={{
        audience: "https://dev-ou2jc0df2dlaepsd.us.auth0.com/api/v2/",
        redirect_uri: window.location.origin
      }}
    >
    <App />
  </Auth0Provider>,
)
