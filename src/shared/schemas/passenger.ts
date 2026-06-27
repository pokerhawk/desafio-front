import * as yup from "yup";

export const createPassengerSchema = yup.object({
  id: yup.string(),
  name: yup.string().required("Nome necessário"),
  document: yup.string().required("Documento necessário"),
  documentType: yup.string(),
  seat_number: yup.string().required("Numero do assento necessário"),
  flight_class: yup.string(),
});

export type CreatePassengerSchema = yup.InferType<typeof createPassengerSchema>;
