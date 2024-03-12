import { useQuery } from "@tanstack/react-query";
import apiClient from "@/main";
import { tokenSelector } from "@/store/reducers/auth";
import { useAppSelector } from "@/store/rootConfig";
import { OrderTypes } from "@/utils/types";

export const useOrder = ({
  id,
  enabled,
}: {
  id: string;
  enabled?: boolean;
}) => {
  const token = useAppSelector(tokenSelector);

  return useQuery({
    queryKey: ["order", id],
    queryFn: () =>
      apiClient
        .get({
          url: `/api/kitchenorders/${id}`,
          params: { key: token },
        })
        .then(({ data: response }) => response as OrderTypes),
    enabled: enabled && !!token,
    refetchOnMount: true,
    retry: 2,
  });
};
export default useOrder;
