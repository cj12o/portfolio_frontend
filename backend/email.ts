export async function checkServerStatus() {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/health", {
    method: "GET",
  });
  return res.json();
}
