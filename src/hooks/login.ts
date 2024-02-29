import { useQuery } from "@tanstack/react-query";
import apiClient from "@/main";
import { useAppDispatch } from "@/store/rootConfig";
import { loginHandler } from "@/store/reducers/auth";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  return useQuery({
    queryKey: ["login"],
    queryFn: () =>
      apiClient
        .get({
          url: "/api/login/13550",
        })
        .then(({ data: response }) => dispatch(loginHandler(response))),
    enabled: false,
    refetchOnMount: true,
  });
};
export default useLogin;
