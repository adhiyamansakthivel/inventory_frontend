import React, { Component } from "react";
import StaffList from "./StaffList";
import { Box } from "@mui/material";
export default class Staff extends Component {
  render() {
    return (
      <Box sx={{ m: 0, p: 3, width: "100%" }}>
        <StaffList />
      </Box>
    );
  }
}
