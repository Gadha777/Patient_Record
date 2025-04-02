import React from 'react'

export const workstation = () => {
  return (
    <div>
    <div className="mt-6 bg-gray-200 p-4 rounded-lg text-black">
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>S.No</TableHeaderCell>
          <TableHeaderCell>Edit</TableHeaderCell>
          <TableHeaderCell>Workstation Name</TableHeaderCell>
          <TableHeaderCell>IP Address</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {workstations.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} className="text-center text-red-500">
              No Record Found
            </TableCell>
          </TableRow>
        ) : (
          workstations.map((ws, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>{ws.name}</TableCell>
              <TableCell>{ws.ip}</TableCell>
              <TableCell>{ws.status}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
    <div className="text-right mt-2">
      <a href="#" className="text-blue-500">Export to Excel</a>
    </div>
  </div>
  </div>
  )
}
