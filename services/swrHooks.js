import useSWR from "swr";

function useAPOD() {
  const { data, error } = useSWR("/api/nasa/apod");

  return {
    apod: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export { useAPOD };
