import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const deleteData = async (id: number): AxiosPromise<any> => {
    const response = axios.delete(API_URL + `/cardapio/${id}`);
    return response;
}

export function useFoodDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: deleteData,
        retry: 2,
        onSuccess: ()=>{
            queryClient.invalidateQueries(['food-data'])
        }
    })

    return mutate;
}