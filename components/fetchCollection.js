export default async function fetchCollection() {
  try {
    const response = await fetch("/collection/collection.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}
