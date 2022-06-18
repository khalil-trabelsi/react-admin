import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./fakedata";
import { Link } from "react-router-dom";

function DataTable() {
  const actionCol = [
    {
      field: "action",
      headerName: "ACTION",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton">
              <Link
                to={`/users/${params.row.id}`}
                style={{ textDecoration: "none" }}
              >
                {" "}
                View
              </Link>
            </div>{" "}
            <div className="deleteBtn">delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="dataTable">
      <div className="card-heading">
        <h4>Users</h4>
        <Link className="navItem" to="/users/new">
          Add new user
        </Link>
      </div>{" "}
      <div style={{ height: "600px", width: "100%" }}>
        <DataGrid
          className="datagrid"
          rows={userRows}
          columns={userColumns.concat(actionCol)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default DataTable;
