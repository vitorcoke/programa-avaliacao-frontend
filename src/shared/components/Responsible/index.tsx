import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getAll } from "../../service/Responsible/index";
import { responsibleType } from "../../types/responsible.type";

export function Responsible() {
  const [responsible, setResponsible] = useState<responsibleType[]>([]);
  useEffect(() => {
    getAll().then((response) => setResponsible(response));
  }, []);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      description: "ID do responsavel",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Nome",
      description: "Nome do responsavel",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "cpf",
      headerName: "CPF",
      description: "CPF do responsavel",
      type: "number",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
  ];

  const row = responsible.map((responsible) => ({
    id: responsible._id,
    name: responsible.name,
    cpf: responsible.cpf,
  }));

  return (
    <DataGrid
      style={{ height: 400, width: "100%", marginTop: "100px" }}
      columns={columns}
      rows={row}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  );
}
