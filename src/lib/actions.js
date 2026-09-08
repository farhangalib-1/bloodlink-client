export const getUser = async() =>{
    const res = await fetch("https://bloodlink-serverside.vercel.app/users", {
        cache: "no-store",
    });
    const data = await res.json();
    return data;
}