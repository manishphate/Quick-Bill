import React from 'react'
import TotalAmount from './totalCard/TotalAmount'

const UserHome = () => {
    return (
        <>
            <TotalAmount
                title="Total Receivables"
                unpaid="Total Unpaid Invoices $14.00"
                current="$00.00"
                overdue="$14.00"
            />

            <TotalAmount
                title="Total Payables"
                unpaid="Total Unpaid Bills $00.00"
                current="$00.00"
                overdue="$00.00"
            />
        </>
    )
}

export default UserHome