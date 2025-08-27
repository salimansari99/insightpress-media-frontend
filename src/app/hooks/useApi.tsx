import { useAuth } from "@/app/contexts/AuthContext";

export function useApi() {
  const { token } = useAuth();

  const apiFetch = async (url: string, options: RequestInit = {}) => {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    if (!response.ok) throw new Error("API Error");
    return response.json();
  };

  return { apiFetch };
}