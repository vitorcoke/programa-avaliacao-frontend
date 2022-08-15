import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getAll } from "../../service/Company/index";
import { CompanyType } from "../../types/company.type";
export const Company: React.FC = () => {
  const [company, setCompany] = useState<CompanyType[]>([]);
  useEffect(() => {
    getAll().then((company) => setCompany(company));
  }, []);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      description: "ID da empresa",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Empresa",
      description: "Nome da empresa",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "cnpj",
      headerName: "CNPJ",
      type: "number",
      align: "center",
      headerAlign: "center",
      description: "Registro da empresa",
      flex: 1,
    },
    {
      field: "score",
      headerName: "Pontuaçao",
      description: "Pontuação da empresa",
      align: "center",
      headerAlign: "center",
      type: "number",
      flex: 1,
    },
  ];

  const rows = company.map((company) => ({
    id: company._id,
    name: company.name,
    cnpj: company.cnpj,
    score: company.score,
  }));

  return (
    <DataGrid
      style={{ height: 400, width: "100%", marginTop: "100px" }}
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  );
};
