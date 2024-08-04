export default async function fetchCollection() {
  try {
    const response = await fetch(
      "https://app-07b991a0-e1c2-444c-930e-6b13cf0600d2.cleverapps.io/api/gallery/"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}
