import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getAll } from "../../service/Meetings/index";
import { MeetingsType } from "../../types/meetings.type";

export function Meetings() {
  const [meetings, setMeetings] = useState<MeetingsType[]>([]);

  useEffect(() => {
    getAll().then((response) => setMeetings(response));
  }, []);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      description: "ID das reuniões",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Nome",
      description: "Nome das reuniões",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
  ];

  const rows = meetings.map((meetings) => ({
    id: meetings._id,
    name: meetings.name,
  }));

  return (
    <DataGrid
      style={{ height: 400, width: "100%", marginTop: "100px" }}
      columns={columns}
      rows={rows}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  );
}
