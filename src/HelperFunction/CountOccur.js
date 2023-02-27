 const findOcc=(arr, key)=>{
    let arr2 = [];
    arr.forEach((x)=>{
       if(arr2.some((val)=>{ return val[key] === x[key] })){
         arr2.forEach((k)=>{
           if(k[key] === x[key]){ 
             k["occurrence"]++
           }
        })  
       }else{
         let a = {}
         a[key] = x[key]
         a["occurrence"] = 1
         arr2.push(a);
       }
    })
      
    return arr2
  }
  export default findOcc