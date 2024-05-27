import { Component } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import staffs from "./staffs";
export default class StaffList extends Component {
  render() {
    const columns = [
      {
        field: "id",
        headerName: "ID",
        width: 90,
        description: "id of the product",
      },
      {
        field: "staffId",
        headerName: "Staff ID",
        width: 200,
        description: "id of the product",
      },
      {
        field: "fullname",
        headerName: "Full Name",
        width: 200,
        description: "staff full name",
        renderCell: (params) => {
          return (
            <>
              
              <Typography variant="subtitle2" sx={{ mx: 3 }}>
                {`${params.row.firstName || ""} ${params.row.lastName || ""} `}
              </Typography>
            </>
          );
        },
      },
     
      {
        field: "username",
        headerName: "Username",
        width: 200,
        description: "staff login user name",
      },
      
      {
        field: "mobile",
        headerName: "Mobile",
        width: 200,
        description: "Mobile",
      },

      {
        field: "position",
        headerName: "Designation",
        width: 200,
        description: "Designation",
      },
    ];
    const rows = staffs;
    return (
      <Box
        sx={{
          margin: 3,
          bgcolor: "white",
          borderRadius: 2,
          padding: 3,
          height: "100%",
        }}
      >
        <DataGrid
          sx={{
            borderLeft: 0,
            borderRight: 0,
            borderRadius: 0,
          }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[15, 20, 30]}
          rowSelection={false}
        />
        <Box></Box>
      </Box>
    );
  }
}
