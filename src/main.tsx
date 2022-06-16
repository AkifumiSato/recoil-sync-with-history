import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { RecoilURLSyncJSON } from 'recoil-sync'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilURLSyncJSON location={ { part: 'queryParams' } }>
        <App />
      </RecoilURLSyncJSON>
    </RecoilRoot>
  </React.StrictMode>
)
