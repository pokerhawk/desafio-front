import api from "./api";

export const getTrips = async (rows: number, page: number, filters?: {
    trip_id?: string;
    status?: string;
    departure_date?: string;
}) => {
    try {
        const params: any = { rows, page };
        if (filters?.trip_id) params.trip_id = filters.trip_id;
        if (filters?.status) params.status = filters.status;
        if (filters?.departure_date) params.departure_date = filters.departure_date;

        const response = await api.get(`/trips`, { params });
        return response.data;
    } catch (error) {
        throw error;
    }
}


