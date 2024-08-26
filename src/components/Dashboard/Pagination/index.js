import React, { useState } from "react";
import "./styles.css";

import Pagination from "@mui/material/Pagination";

export default function PaginationComponent({page, handlePageChange}) {

  return (
    <div className="pagination-div">
      <Pagination
        sx={{
          color: "var(--white)",
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--grey)",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important", 
          },
          "& .Mui-selected  ": {
            backgroundColor: "var(--blue) !important",
            borderColor: "var(--blue) !important",
            color : "#fff !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
        }}
        count={10}
        page={page}
        onChange={(event, value) => handlePageChange(event, value)}
      />
    </div>
  );
}