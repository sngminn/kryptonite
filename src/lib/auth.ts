import { ApiError } from "./fetchClient";

const CLIENT_ID = process.env.BLIZZARD_CLIENT_ID;
const CLIENT_SECRET = process.env.BLIZZARD_CLIENT_SECRET;
let cachedToken: string | null = null;
let tokenExpiryTime = 0;

export async function getAccessToken() {
  const now = Date.now();
  if (cachedToken && now < tokenExpiryTime) return cachedToken;

  const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

  const response = await fetch("https://oauth.battle.net/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));

    throw new ApiError(
      response.status,
      response.statusText,
      errorBody.error_description || errorBody.error || "토큰 발급 실패",
      errorBody,
    );
  }

  const data = await response.json();
  cachedToken = data.access_token;

  tokenExpiryTime = now + data.expires_in * 1000 - 60 * 1000;
  return data.access_token;
}
