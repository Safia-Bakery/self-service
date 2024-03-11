import { useQuery } from "@tanstack/react-query";
import apiClient from "@/main";
import { useAppSelector } from "@/store/rootConfig";
import { tokenSelector } from "@/store/reducers/auth";
import { OrderTypes } from "@/utils/types";

export const useOrders = ({ enabled = true }: { enabled?: boolean }) => {
  const token = useAppSelector(tokenSelector);

  return useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      apiClient
        .get({
          url: "/api/orders",
          params: { key: token },
        })
        .then(({ data: response }) => response as OrderTypes[]),
    enabled: enabled && !!token,
    refetchOnMount: true,
    retry: 2,
    refetchInterval: 10000,
    refetchOnWindowFocus: true,
  });
};
export default useOrders;
