export function handleApiResponse(response) {
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  return response.json();
}
