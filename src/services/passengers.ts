import api from "./api";

export interface passengerFilterI {
    name?: string;
    document?: string;
    documentType?: string;
    flight_class?: string;
    tripId?: string;   
}

export const getPassengers = async (rows: number, page: number, filters?: passengerFilterI) => {
    try {
        const params: any = { rows, page };
        if (filters?.name) params.name = filters.name;
        if (filters?.document) params.document = filters.document;
        if (filters?.documentType) params.documentType = filters.documentType;
        if (filters?.flight_class) params.flight_class = filters.flight_class;
        if (filters?.tripId) params.tripId = filters.tripId;

        const response = await api.get(`/trips/passengers`, { params });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getUser = async (id?: string):Promise<any> => {
    try {
        const response = await api.get(`/user/byId`, {
            params: {
                userId: id
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const createPassenger = async (body: any) =>{
    try {
        const response = await api.post(`/trips/passenger`, body)
        return response.data;
    } catch (error) {
        throw error;
    }
}
