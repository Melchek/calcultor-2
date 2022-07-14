import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { useStore } from '../root.store'
import {
    DataGrid,
    GridColDef,
    GridRowParams,
} from '@mui/x-data-grid'
import { Lead } from './Lead'
import { LeadModal } from './lead-modal'

const COLOUMS: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 120 },
    {
        field: 'createdAt',
        headerName: 'Craeted At',
        width: 200,
        valueGetter: (param) => new Date(param.value).toLocaleString()
    },
    { field: 'asingee', headerName: 'Asingee', width: 120 }
]

export const LeadsView = observer(() => {
    const store = useStore('leads')

    const [selectedLead, setSelectedLead] = useState<Lead | undefined>()

    const onRowClicked = (params: GridRowParams) => {
        setSelectedLead(params.row)
    }

    return (
        <div style={{ height: '90vh', width: '100%' }}>
            <DataGrid
                rows={store.leads.slice()}
                columns={COLOUMS}
                onRowClick={onRowClicked}
            />

            <LeadModal
                lead={selectedLead}
                onClose={() => setSelectedLead(undefined)}
            />
        </div>
    )
})
