import React from 'react'
import { Modal, Typography } from '@mui/material'
import { Lead } from './Lead'
import { Box } from '@mui/system'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    boxShadow: 24,
    p: 4
}

interface LeadModalProps {
    lead?: Lead
    onClose(): void
}
export const LeadModal = (props: LeadModalProps) => {
    return (
        <Modal
            open={props.lead !== undefined}
            onClose={props.onClose}
            aria-labelledby="lead-modal-title"
            aria-describedby="lead-modal-description"
        >
            <Box sx={style}>
                <Typography id="lead-modal-title" variant="h4" component="h2">
                    Lead {props.lead?.name}
                </Typography>
                <Typography id="lead-modal-craeted-at">
                    Name: {props.lead?.name}
                </Typography>
                <Typography id="lead-modal-craeted-at">
                    Asingee: {props.lead?.asingee}
                </Typography>
            </Box>
        </Modal>
    )
}
