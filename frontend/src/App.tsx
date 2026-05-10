import { QueryClient } from "@tanstack/react-query";
import { Outlet } from "react-router";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 0,
    },
  },
});

export function App() {
  return <Outlet />;
}
