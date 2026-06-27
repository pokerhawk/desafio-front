import { PageWrapper } from "../../styles/Global";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../../utils/format/date";
import DataTable, { TableColumn } from "react-data-table-component";
import * as D from "../../styles/DataTable";
import { Card } from "../../components/Card";
import { PageContent } from "../../components/PageContent";
import { PaginationBar, PaginationInfo } from "../Dashboard/styles";
import PaginationTable from "../../components/PaginationTable";
import { getPassengers } from "../../services/passengers";
import Header from "../../components/Header";
import { documentTypeFormat, flightClassFormat } from "../../utils/text-formats";

const TripInfo = () => {
  const { id } = useParams<{ id: string }>();
  const rowsPerPage = 5;
  const [passengers, setPassengers] = useState({
    data: [],
    count: 0,
    currentPage: 1,
    nextPage: 2,
    prevPage: 0,
    lastPage: 1,
  });

  const columns: TableColumn<any>[] = [
    {
      name: "Nome",
      selector: (row) => row.name,
      cell: (row) => (
        <span
          style={{
            fontWeight:
              row.flight_class === "first_class"? "bold": "normal",
            color:
              row.flight_class === "first_class"? "#d4af37": "inherit",
          }}
        >
          {row.name}
        </span>
      )
    },
    {
      name: "Documento",
      selector: (row) => row.document,
      format: (row) => row.document,
    },
    {
      name: "Tipo",
      selector: (row) => row.documentType,
      format: (row) => `${documentTypeFormat(row.documentType)}`,
    },
    {
      name: "Nº Assento",
      selector: (row) => row.seat_number,
      format: (row) => row.seat_number,
    },
    {
      name: "Classe",
      selector: (row) => row.flight_class,
      cell: (row) => (
        <span
          style={{
            fontWeight:
              row.flight_class === "first_class"? "bold": "normal",
            color:
              row.flight_class === "first_class"? "#d4af37": "inherit",
          }}
        >
          {flightClassFormat(row.flight_class)}
        </span>
      )
    },
    {
      name: "Criado em",
      selector: (row) => row.createdAt,
      format: (row) => `${formatDate(row.createdAt)}`,
    },
  ];

  const loadPassenger = async (page: number = 1) => {
    try {
      const response = await getPassengers(rowsPerPage, page, { tripId: id });
      if(!response){
        throw new Error("Invalid passenger response");
      }
      setPassengers(response);
    } catch (error) {
      throw error;
    }
  };

  const handlePagination = async (page: number, totalCount: number) => {
    await loadPassenger(page);
  };

  useEffect(()=>{
    getPassengers(5, 1, {tripId: id}).then(res=>{
      setPassengers(res);
    })
  }, [])
  
  return (
    <PageWrapper>
      <Header/>
      <PageContent>
        <Card>
          <Card.Header title="Lista de Passageiros nesta viagem" />
          <Card.Body>
            <D.Wrapper>
              <DataTable
                columns={columns}
                data={passengers.data}
                fixedHeader
                noDataComponent={<p>Nenhum registro encontrado</p>}
              />
            </D.Wrapper>

            <PaginationBar>
              <PaginationInfo>
                {passengers.count === 0
                  ? "Nenhum registro"
                  : `Mostrando ${(passengers.currentPage - 1) * rowsPerPage + 1}-${Math.min(passengers.currentPage * rowsPerPage, passengers.count)} de ${passengers.count}`}
              </PaginationInfo>
              <PaginationTable
                onChangePage={handlePagination}
                currentPage={passengers.currentPage}
                totalCount={passengers.count}
                rowsPerPage={rowsPerPage}
                rowCount={passengers.count}
                disabled={passengers.count === 0}
              />
            </PaginationBar>
          </Card.Body>
        </Card>
      </PageContent>
    </PageWrapper>
  );
};

export default TripInfo;
