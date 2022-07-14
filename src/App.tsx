import React from 'react'
import './App.css'
import { AppHeader } from './app-header'
import RootStore, { RootStoreContext } from './root.store'
import { LeadsView } from './leads/leads-view'

const rootStore = new RootStore()
function App() {
    return (
        <div className="App">
            <RootStoreContext.Provider value={rootStore}>
                <AppHeader />

                <LeadsView />
            </RootStoreContext.Provider>
        </div>
    )
}

export default App
