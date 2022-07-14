import React, { useContext } from 'react'
import { LeadsStore } from './leads/leads.store'

class RootStore {
    public readonly leads: LeadsStore

    constructor() {
        this.leads = new LeadsStore()
    }
}

export default RootStore

export const RootStoreContext = React.createContext<RootStore | undefined>(
    undefined
)

export const useRootStore = () => useContext(RootStoreContext)!

export const useStore = <T extends keyof RootStore>(name: T): RootStore[T] =>
    useRootStore()[name]
