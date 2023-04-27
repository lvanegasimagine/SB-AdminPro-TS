import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createDepartamento,
  getDepartamentos,
} from "@/api/ResponseDepartamento";

const optionsQuery = {
  retry: 2,
  retryDelay: 1000,
  cacheTime: 3000,
};
export function useQueryDepartamento() {
  return useQuery(["departamento"], getDepartamentos, optionsQuery);
}

export function useMutateDepartamento() {
  const queryClient = useQueryClient();

  return useMutation(createDepartamento, {
    onSuccess: (data) => {
      queryClient.setQueryData(["departamento"], (prevDepar: any) =>
        prevDepar.concat(data)
      );
      queryClient.invalidateQueries(["departamento"]);
    },
  });
}
