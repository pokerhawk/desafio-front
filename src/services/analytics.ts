import api from "./api";

export const importExcel = async (file: File) =>{
  try {
    const formData = new FormData();
    formData.append('file', file)
    const response = await api.post(`/analytics`, formData)
    return response.data;
  } catch (error) {
    throw error;
  }
}
