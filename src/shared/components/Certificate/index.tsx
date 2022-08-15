import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getAll } from "../../service/Certificate/index";
import { CertificateType } from "../../types/certificate.type";

export function Certificate() {
  const [certificate, setCertificate] = useState<CertificateType[]>([]);

  useEffect(() => {
    getAll().then((response) => setCertificate(response));
  }, []);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      description: "ID do certificado",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Nome",
      description: "Nome do certificado",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
  ];

  const row = certificate.map((certificate) => ({
    id: certificate._id,
    name: certificate.name,
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
