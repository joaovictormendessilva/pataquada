import { api } from "src/axios/config";
import { ENDPOINTS } from "./user.endpoints";
import { IDigParams, IDigResponseDto } from "./user.types";

export const userService = () => {
  const dig = async (params: IDigParams): Promise<IDigResponseDto> => {
    const response = await api.patch(ENDPOINTS.dig, {}, { params });

    return response.data;
  };

  return {
    dig,
  };
};
