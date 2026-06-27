export function formatTextInLowerCaseAndRemoveSpaces(text: string) {
  const removeSpaces = text.replace(" ", "");
  const transformLower = removeSpaces.toLowerCase();

  return transformLower;
};

export const documentTypeFormat = (document: string) => {
  return document === "cpf"? document = "CPF": "Passaporte";
}

export const flightClassFormat = (flight_class: string) => {
  return flight_class === "executive"? flight_class = "Executiva": flight_class === "first_class"? flight_class = "Primeira Classe": "Econômica";
}

export const onlyNumbers = (string: string|undefined): string => {
  if(!string)return '';
  return string.replace(/\D+/g, '');
}

export const formatDocument = (string: string|undefined) => {
  if(!string)return '';
  return string.replace(/[^a-zA-Z0-9]/g, '');
}
