import React, { useState } from "react";

const Temp = () => {
  const [counter, setcounter] = useState(0);
  const increment = ()=>{
    setcounter(counter +1)
  }
  const decrement = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };
  const reset =()=>{
    setcounter(0)
  }

  const isPrime =(n)=>{
    if( n < 2)
        return `${n} is not a prime number`
    
    for(let i = 2 ; i <n; i++){
        if(n % i === 0){
            return `${n} is not a prime number`
        }
        
    }
    return `${n} is prime number`

  }

  console.log(isPrime(4))

  return (
    <div className="w-screen  h-screen flex justify-center items-center">
      <div className="bg-purple-600 h-[400px] w-[800px] p-10">
      <h1 className="text-white text-center underline">product</h1>
       <div className="h-full w-full mt-4 flex justify-center items-center">
       <div className="w-1/2 f-full ">
           
           <img className="w-36 h-28 object-cover" src={"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" />
       </div>
       <div className="w-1/2 ">
      <h1 className="text-center">number : {counter}</h1>
       </div>
       <div className=" w-1/2  ">
          <div className="w-60 h-16 flex justify-between ">
          <button onClick={increment} className="px-10 py-4 bg-gray-500 rounded-xl flex items-center justify-center hover:bg-zinc-400 text-white">
               +
           </button>
           <div className="h-full bg-black p-0.5"></div>
           <button onClick={decrement}  className="px-10 py-4 bg-gray-500 rounded-xl flex items-center justify-center hover:bg-zinc-400 text-white">
               -
           </button>
           <button onClick={reset}  className="px-10 py-4 bg-gray-500 rounded-xl flex items-center justify-center hover:bg-zinc-400 text-white">
               reset
           </button>
          </div>
       </div>
       </div>

      </div>
    </div>
  );
};

export default Temp;
