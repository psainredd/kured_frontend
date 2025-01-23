import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { DataGridActionTypes, GenericRenderCell, RenderActions, renderHeader, RenderPatientInfo} from '@/widgets/DataGridUtils';
import { DocInvoiceData } from '@/test/data';

function RenderInvoiceDashboardActions(params) {
    const url = `/dashboard#${params.row.patientId}`;
    const view = DataGridActionTypes.view(url, true);
    const print = DataGridActionTypes.print(url, true);
    return (
        <RenderActions {...{view, print}}/>
    )
}

const invoiceCols = [
    {   
        field: 'invId', 
        width: 150,
        filterable: true,
        sortable: false,
        headerAlign: 'center',
        renderCell: GenericRenderCell,
        renderHeader: (params)=> {return renderHeader('Invoice No');}
    },
    { 
        field: 'patientName', 
        width: 450, 
        sortable: false,
        headerAlign: 'center',
        renderCell: RenderPatientInfo,
        renderHeader: (params)=> {return renderHeader('Patient Name');}
    },
    { 
        field: 'amount', 
        width: 125, 
        sortable: false,
        filterable: false,
        headerAlign: 'center',
        disableColumnMenu: true,
        renderHeader: (params)=> {return renderHeader('Amount');},
        renderCell: GenericRenderCell
    },
    { 
        field: 'paymentDate', 
        width: 150,
        headerAlign: 'center',
        renderHeader: (params)=> {return renderHeader('Paid On');},
        renderCell: GenericRenderCell
    },
    {
        field: 'actions', 
        headerName: '', 
        width: 200, 
        headerAlign: 'center',
        sortable: false,
        disableColumnMenu: true,
        filterable: false,
        renderCell: RenderInvoiceDashboardActions
    },
];

const data = DocInvoiceData;

export function PaymentsTest() {
  return (
    <Box sx={{height: '90vh', width: 1, maxWidth: 1,display: 'flex', backgroundColor:'#F8F8F8', px:2}}>
        <DataGrid autoPageSize disableColumnSelector disableSelectionOnClick rowHeight={75} sx={{border:'none'}}
            rows={data} columns={invoiceCols}/>
    </Box>
  );
}

export default function Payments() {
    return( 
    <Box>
        <PaymentsTest/>
    </Box>)
}