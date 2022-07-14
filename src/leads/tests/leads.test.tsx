import { LeadsStore } from '../leads.store'

describe('Leads store', () => {
    it('creates leads store', () => {
        const store = new LeadsStore()

        expect(Array.isArray(store.leads)).toBeTruthy()
        expect(store.leads.length).toBe(2)
    })

    it('adds new lead', () => {
        const store = new LeadsStore()
        store.addLead({
            id: '4',
            name: 'Mosh',
            asingee: 'Joe',
            createdAt: Date.now()
        })
        expect(store.leads.length).toBe(3)
        expect(store.leads[2].name).toBe('Mosh')
        expect(store.leads[2].asingee).toBe('asingee')
    })
})
