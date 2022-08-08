import React, { useState, useEffect } from 'react'
import { CTable } from '@coreui/react'

const DataTable = () => {
  const [tableData, setTableData] = useState([])
  const columns = [
    {
      key: 'userId',
      label: '#',
      _props: { className: 'w-25', scope: 'col' },
    },
    {
      key: 'id',
      _props: { className: 'w-25', scope: 'col' },
    },
    {
      key: 'title',
      label: 'Title',
      _props: { className: 'w-25', scope: 'col' },
      width: 300,
    },
    {
      key: 'completed',
      _props: { scope: 'col' },
    },
  ]

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((data) => data.json())
      .then((data) => setTableData(data))
  }, [])

  console.log(tableData)

  return <CTable color="dark" responsive="sm" columns={columns} items={tableData}></CTable>
}

export default DataTable
