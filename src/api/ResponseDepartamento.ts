import { httpClient } from "@/axios/httpClient";

interface IDepartamento {
  name: string;
  description: string;
}
export const getDepartamentos = async () => {
  const { data } = await httpClient.get("/departamento");
  return data;
};

export const getDepartamento = async ({ queryKey }: any) => {
  const [_key, { id }] = queryKey;

  const { data } = await httpClient.get(`/departamento/withEmployee/${id}`);

  return data;
};

export const createDepartamento = async (departamento: IDepartamento) => {
  try {
    const { data } = await httpClient.post(`/departamento`, departamento);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteDepartamento = async (id: string) => {
  await httpClient.delete(`/departamento/${id}`);
  return true;
}