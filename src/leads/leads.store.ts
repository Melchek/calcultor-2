import { action, observable } from 'mobx'
import { Lead } from './Lead'

export class LeadsStore {
    @observable
    public leads: Lead[] = [
        {
            id: '1',
            name: 'Jhon',
            createdAt: 1657802406825,
            asingee: 'Ella'
        },
        {
            id: '2',
            name: 'Mika',
            createdAt: 1657801406825,
            asingee: 'Ella'
        }
    ]

    @action
    public addLead = (lead: Lead) => {
        this.leads.push(lead)
    }
}
