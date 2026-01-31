import { QueryClient, QueryFunction } from "@tanstack/react-query";

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  console.log(`Mock API Request: ${method} ${url}`, data);
  return new Response(JSON.stringify({ message: "Success (Static Mode)" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        console.log(`Mock Query: ${queryKey}`);
        return null;
      },
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
