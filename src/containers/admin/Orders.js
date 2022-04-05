import * as React from 'react'
import { Grid } from '@mui/material'
import { useRecoilState } from 'recoil'
import { ordersAtom } from '../../atoms/atoms'
import { changeDate } from '../../helpers'
import TableActionsOrders from '../../components/dashboard/TableActionsOrders'
import Table from '../../components/dashboard/Table'

const Orders = () => {
  const [orders, setOrders] = useRecoilState(ordersAtom)

  React.useEffect(() => {
    // fetch all orders
    handleFetchOrders()
  }, [])

  const handleFetchOrders = () => {
    fetch('/api/orders').then((response) => {
      if (response.ok) {
        response.json().then((orders) => {
          const newOrders = orders.map((order) => {
            const newObj = {
              ...order,
              created_at: changeDate(order.created_at),
            }
            return newObj
          })
          setOrders(newOrders)
        })
      } else {
        response.json().then((err) => console.log(err))
      }
    })
  }

  const columns = [
    { field: 'invoice', headerName: 'Order #', width: 150 },
    { field: 'created_at', headerName: 'Order Placed At', width: 150 },
    { field: 'amount', headerName: 'Amount', width: 125 },
    { field: 'status', headerName: 'Status', width: 125 },
    { field: 'name', headerName: 'Name', width: 175 },

    {
      field: 'actions',
      headerName: 'Action',
      width: 300,
      renderCell: (params) => <TableActionsOrders order={params.row} />,
    },
  ]

  return (
    <Grid item container flexDirection='column' wrap='nowrap' spacing={3}>
      <Table rows={orders} columns={columns} />
    </Grid>
  )
}

export default Orders
