
    "use server"
export const getUser = async() =>{
    const res = await fetch("https://bloodlink-serverside.vercel.app/users", {
        cache: "no-store",
    });
    const data = await res.json();
    return data;
}

export const getUserById = async(Id) =>{
    const res = await fetch(`https://bloodlink-serverside.vercel.app/users/${Id}`);
    const data = await res.json();
    return data;
}

export const allUser = async() =>{
    const res = await fetch(`https://bloodlink-serverside.vercel.app/allusers`);
    const data = await res.json();
    return data;

}


export const deleteUser = async(Id) =>{

    const res = await fetch(`https://bloodlink-serverside.vercel.app/users/${Id}`,{
        method: 'DELETE'
    }
    );
    const data = await res.json();
   console.log(data)
    return data;
}
