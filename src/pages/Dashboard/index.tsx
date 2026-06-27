import * as D from "../../styles/DataTable";
import DataTable, { TableColumn } from "react-data-table-component";
import ButtonV2 from "../../components/Button/ButtonV2";
import { Card } from "../../components/Card";
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import { PageWrapper } from "../../styles/Global";
import { useEffect, useState } from "react";
import PaginationTable from "../../components/PaginationTable";
import { formatDate } from "../../utils/format/date";
import { Search } from "lucide-react";
import { PageContent } from "../../components/PageContent";
import * as S from "./styles";
import { createPassenger, getPassengers } from "../../services/passengers";
import { documentTypeFormat, flightClassFormat, formatDocument } from "../../utils/text-formats";
import { getTrips } from "../../services/trips";
import { Controller, useForm } from "react-hook-form";
import Toastify from '../../components/Toastify/Toastify';
import { yupResolver } from "@hookform/resolvers/yup";
import { CreatePassengerSchema, createPassengerSchema } from "../../shared/schemas/passenger";
import { notify } from "../../utils/Toast/notify";
import { getCache, setCache } from "../../utils/cache";
import { Select } from "../../components/Select";
import EyeIcon from "../../assets/icons/EyeIcon";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const buildPassengerKey = (page: number, filters: any, rows: number) => {
    return `passengers:${page}:${rows}:${JSON.stringify(filters)}`;
  };
  const buildTripKey = (page: number, rows: number) => {
    return `trips:${page}-${rows}`;
  };
  const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm<CreatePassengerSchema>({
    resolver: yupResolver(createPassengerSchema),
    defaultValues: {
      id: '',
      name: '',
      document: '',
      documentType: '',
      seat_number: '',
      flight_class: ''
    }
  });

  const onSubmit = (data: CreatePassengerSchema) => {
    setIsLoading(true);
    const submitData: any = {
      id: data.id,
      name: data.name,
      document: formatDocument(data.document),
      documentType: data.documentType,
      seat_number: data.seat_number,
      flight_class: data.flight_class
    };

    createPassenger(submitData).then(res=>{
      if(res.statusCode === 201){
        notify('success', res.message);
        localStorage.clear();
      } else {
        notify('error', res.message);
      }
      return;
    }).catch(err=>{
      notify('error', err.response.data.message);
    }).finally(() => {
      loadPassenger(1);
      setIsLoading(false);
    });
  }

  const rowsPerPage = 5;
  const [passengers, setPassengers] = useState({
    data: [],
    count: 0,
    currentPage: 1,
    nextPage: 2,
    prevPage: 0,
    lastPage: 1,
  });
  const [filters, setFilters] = useState({
    name: "",
    document: "",
    documentType: "",
  });

  const [trips, setTrips] = useState({
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
      name: "ID da viagem",
      selector: (row) => row.tripId,
      format: (row) => row.tripId,
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

  const columnsTrip: TableColumn<any>[] = [
    {
      name: "ID da Viagem",
      selector: (row) => row.id,
      format: (row) => row.id,
    },
    {
      name: "Rota da Viagem",
      selector: (row) => row.route,
      format: (row) => row.route,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      format: (row) => row.status,
    },
    {
      name: "Destino",
      selector: (row) => row.destination,
      format: (row) => row.destination,
    },
    {
      name: "Data de partida",
      selector: (row) => row.departure_date,
      format: (row) => `${formatDate(row.departure_date)}`,
    },
    {
      name: "Criado em",
      selector: (row) => row.createdAt,
      format: (row) => `${formatDate(row.createdAt)}`,
    },
    {
      name: 'Detalhes',
      selector: (row) => row.status,
      format: (row) => (
        <D.DetailActionLink to={`/trip/${row.id}`} aria-label="Ver detalhes">
          <EyeIcon />
        </D.DetailActionLink>
      )
    }

  ];

  const loadPassenger = async (page: number = 1) => {
    const key = buildPassengerKey(page, filters, rowsPerPage);
    try {
      const cached = getCache(key);
      if(cached){
        setPassengers(cached);
        return;
      }
      const response = await getPassengers(rowsPerPage, page, filters);
      if(!response){
        throw new Error("Invalid passenger response");
      }
      setCache(key, response);
      setPassengers(response);
    } catch (error) {
      throw error;
    }
  };

  const loadTrips = async (page: number = 1) => {
    const key = buildTripKey(page, rowsPerPage);
    try {
      const cached = getCache(key);
      if(cached){
        setTrips(cached);
        return;
      }

      const response = await getTrips(rowsPerPage, page);
      if(!response || !Array.isArray(response.data)){
        throw new Error("Invalid trips response");
      }

      setCache(key, response);
      setTrips(response);
    } catch (error) {
      throw error;
    }
  };

  const handlePagination = async (page: number, totalCount: number) => {
    await loadPassenger(page);
  };

  const handleTripPagination = async (page: number, totalCount: number) => {
    await loadTrips(page);
  };

  const clearFilters = () => {
    setFilters({
      name: "",
      document: "",
      documentType: "",
    });
  };

  const hasActiveFilters = filters.name || filters.document || filters.documentType;

  useEffect(() => {
    loadPassenger(1);
  }, [filters, rowsPerPage]);


  useEffect(() => {
    loadTrips(1);
  }, [rowsPerPage]);

  return (
    <>
      <Header />
      <PageContent padding="md">
        <S.CreateLinkWrapper>
          <Card variant="default" padding="lg">
            <Card.Body>
              <S.FormV2 id="passengerData" onSubmit={handleSubmit(onSubmit)}>
                <S.StepContainer>
                  <S.SectionTitle>Criar Passageiro</S.SectionTitle>
                  <S.SectionSubtitle>Preencha as informações do passageiro</S.SectionSubtitle>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <S.FieldWrapper>
                        <Input
                          inputMode="text"
                          label="Nome do passageiro"
                          placeholder="Fulano"
                          value={value}
                          error={errors?.name?.message}
                          {...register("name")}
                        />
                      </S.FieldWrapper>
                    )}
                  />
                  <Controller
                    name="id"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <S.FieldWrapper>
                        <Input
                          inputMode="text"
                          label="ID da viagem"
                          placeholder="TRIP_0000"
                          value={value}
                          error={errors?.id?.message}
                          {...register("id")}
                        />
                      </S.FieldWrapper>
                    )}
                  />
                  <Controller
                    name="document"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <S.FieldWrapper>
                        <Input
                          inputMode="numeric"
                          label="Documento"
                          placeholder="123.456.789-00"
                          value={value}
                          error={errors?.document?.message}
                          {...register("document")}
                        />
                      </S.FieldWrapper>
                    )}
                  />
                  <Controller
                    name="documentType"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <S.FieldWrapper>
                        <Select
                          inputMode="text"
                          label='Tipo do documento'
                          placeholder="Selecione..."
                          options={[{value: "cpf", label: "cpf"}, {value: "passport", label: "passaporte"}]}
                          value={value}
                          error={errors?.documentType?.message}
                          {...register("documentType")}
                        />
                      </S.FieldWrapper>
                    )}
                  />
                  <Controller
                    name="seat_number"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <S.FieldWrapper>
                        <Input
                          inputMode="text"
                          label="Numero do assento"
                          placeholder="10"
                          value={value}
                          error={errors?.seat_number?.message}
                          {...register("seat_number")}
                        />
                      </S.FieldWrapper>
                    )}
                  />
                  <Controller
                    name="flight_class"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <S.FieldWrapper>
                        <Select
                          inputMode="text"
                          label='Classe'
                          placeholder="Selecione..."
                          options={[
                            {value: "economic", label: "Econômica"},
                            {value: "first_class", label: "Primeira Classe"},
                            {value: "executive", label: "Executiva"}
                          ]}
                          value={value}
                          error={errors?.flight_class?.message}
                          {...register("flight_class")}
                        />
                      </S.FieldWrapper>
                    )}
                  />
            </S.StepContainer>
              </S.FormV2>
            </Card.Body>
            <Card.Footer align="center">
              <ButtonV2
                type="submit"
                form="passengerData"
              >
                Criar Passageiro
              </ButtonV2>
            </Card.Footer>
          </Card>
        </S.CreateLinkWrapper>
      </PageContent>


    {/*////////////////////////////////////////////////////////////////////////////////*/}

      <PageWrapper>
        <PageContent padding="md">
          <Card variant="default" padding="lg">
            <Card.Header title="Lista de Passageiros" />
            <Card.Body>
              <S.FiltersRow>
                <S.FilterInputWrapper>
                  <Input
                    label="Nome"
                    placeholder="Digite o nome..."
                    value={filters.name}
                    onChange={(e) =>
                      setFilters((prev) => ({ ...prev, name: e.target.value }))
                    }
                    leftIcon={<Search size={16} />}
                    size="sm"
                  />
                </S.FilterInputWrapper>
                <S.FilterInputWrapper>
                  <Input
                    label="Documento"
                    placeholder="Digite o documento..."
                    value={filters.document}
                    onChange={(e) =>
                      setFilters((prev) => ({ ...prev, document: e.target.value }))
                    }
                    leftIcon={<Search size={16} />}
                    size="sm"
                  />
                </S.FilterInputWrapper>
                <S.FilterInputWrapper>
                  <Input
                    label="Tipo de documento"
                    placeholder="Digite tipo de documento..."
                    value={filters.documentType}
                    onChange={(e) =>
                      setFilters((prev) => ({ ...prev, documentType: e.target.value }))
                    }
                    leftIcon={<Search size={16} />}
                    size="sm"
                  />
                </S.FilterInputWrapper>
                {hasActiveFilters && (
                  <ButtonV2 onClick={clearFilters}>
                    Limpar Filtros
                  </ButtonV2>
                )}
              </S.FiltersRow>
              <D.Wrapper>
                <DataTable
                  columns={columns}
                  data={passengers.data}
                  fixedHeader
                  noDataComponent={<p>Nenhum registro encontrado</p>}
                />
              </D.Wrapper>

              <S.PaginationBar>
                <S.PaginationInfo>
                  {passengers.count === 0
                    ? "Nenhum registro"
                    : `Mostrando ${(passengers.currentPage - 1) * rowsPerPage + 1}-${Math.min(passengers.currentPage * rowsPerPage, passengers.count)} de ${passengers.count}`}
                </S.PaginationInfo>
                <PaginationTable
                  onChangePage={handlePagination}
                  currentPage={passengers.currentPage}
                  totalCount={passengers.count}
                  rowsPerPage={rowsPerPage}
                  rowCount={passengers.count}
                  disabled={passengers.count === 0}
                />
              </S.PaginationBar>
            </Card.Body>

            {/*////////////////////////////////////////////////////////////////////////////////*/}

            <Card.Header title="Lista de Viagens" />
            <Card.Body>
              <D.Wrapper>
                <DataTable
                  columns={columnsTrip}
                  data={trips.data}
                  fixedHeader
                  noDataComponent={<p>Nenhum registro encontrado</p>}
                />
              </D.Wrapper>

              <S.PaginationBar>
                <S.PaginationInfo>
                  {trips.count === 0
                    ? "Nenhum registro"
                    : `Mostrando ${(trips.currentPage - 1) * rowsPerPage + 1}-${Math.min(trips.currentPage * rowsPerPage, trips.count)} de ${trips.count}`}
                </S.PaginationInfo>
                <PaginationTable
                  onChangePage={handleTripPagination}
                  currentPage={trips.currentPage}
                  totalCount={trips.count}
                  rowsPerPage={rowsPerPage}
                  rowCount={trips.count}
                  disabled={trips.count === 0}
                />
              </S.PaginationBar>
            </Card.Body>
          </Card>
        </PageContent>
      </PageWrapper>
      <Toastify position="top-right" theme="light" displayTime={3000} />
    </>
  );
};

export default Dashboard;
