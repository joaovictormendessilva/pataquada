import { useMutation } from "@tanstack/react-query";
import { userService } from "../user.service";

export const useDig = () => {
  return useMutation({
    mutationFn: userService().dig,
  });
};
