import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { SocialNetworksType } from "../../types/socialNetwork.type";
import { getAll } from "../../service/SocialNetworks/index";

export function SocialNetworks() {
  const [socialNetworks, setSocialNetworks] = useState<SocialNetworksType[]>(
    []
  );

  useEffect(() => {
    getAll().then((response) => setSocialNetworks(response));
  }, []);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      description: "ID da Rede Social",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Nome",
      description: "Nome da Rede Social",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "numberoffollowers",
      headerName: "Numero de inscritos",
      description: "Numero de inscrito da Rede Social",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
  ];

  const rows = socialNetworks.map((socialNetworks) => ({
    id: socialNetworks._id,
    name: socialNetworks.name,
    numberoffollowers: socialNetworks.numberoffollowers,
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
