"use server"
const URL = "https://bloodlink-serverside.vercel.app/"
export async function payment(data) {
    const response = await fetch(`${URL}/payment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const userData = await response.json();
  return userData
}