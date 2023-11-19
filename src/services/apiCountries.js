export async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  if (!res.ok) throw new Error("Unabled to fetch countries");
  return data;
}
