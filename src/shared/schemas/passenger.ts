import * as yup from "yup";

export const createPassengerSchema = yup.object({
  trip_id: yup.string().matches(/^TRIP_\d{4}$/, "Formato inválido. Ex: TRIP_0001"),
  name: yup.string().required("Nome necessário"),
  document: yup.string().required("Documento necessário"),
  documentType: yup.string().required("Tipo de documento necessário"),
  seat_number: yup.string().required("Numero do assento necessário").matches(/^\d+$/, "Somente números").max(3, "Máximo de 3 números"),
  flight_class: yup.string(),
});

export type CreatePassengerSchema = yup.InferType<typeof createPassengerSchema>;
