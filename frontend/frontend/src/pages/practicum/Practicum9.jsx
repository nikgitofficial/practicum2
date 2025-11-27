import React,{useState,useEffect} from "react";

const Practicum9 = () => {
  const [data,setData] = useState([]);
  const [search, setSearch] = useState("");

  const getdata = async () =>{
         try{
          const res = await fetch("https://jsonplaceholder.typicode.com/users");
          const json = await res.json();
          setData(json);
         }catch(err){
          console.error("failed to laod data",err);

         }
  }
 
  useEffect(()=>{
    getdata();
  },[])

  const totaluser = data.reduce(acc => acc + 1,0)

  const totalUsers = data.length;

  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

 




     

  return (
    <>
    
    <p>Total Users using reduce:{totaluser}</p>
     <p>Total Users using length:{totalUsers}</p>
     
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    <ol>{filteredData.map((user)=>(
      <li key={user.id}>{user.name}</li>

    ))}</ol>
    
    </>
  );
};

export default Practicum9;
