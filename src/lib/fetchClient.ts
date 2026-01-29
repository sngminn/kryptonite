import { getAccessToken } from "./auth";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://kr.api.blizzard.com/hearthstone";

export class ApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    message: string,
    public body?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function fetchClient<T>(
  url: string,
  options: RequestInit = {},
): Promise<T> {
  const fullUrl = `${BASE_URL}${url}`;
  const token = await getAccessToken();
  const defaultHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(fullUrl, {
    ...options,
    headers: { ...defaultHeaders, ...options.headers },
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));

    throw new ApiError(
      response.status,
      response.statusText,
      errorBody.message || "API 요청 실패",
      errorBody,
    );
  }

  return response.json();
}
