import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../services/apiCountries";

export function useCountries() {
  const {
    data: countries,
    isPending,
    error,
  } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  return { countries, isPending, error };
}
