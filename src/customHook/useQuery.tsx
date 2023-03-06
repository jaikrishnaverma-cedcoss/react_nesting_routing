const useQuery = () => {
    // this function can return the value of rquired key with help of another key
      const getKeyObject=(arr:any,key:any,val:any)=>{
        let index=-1
        let user={}
        console.log('fusnderhook',arr,key,val)
          arr&&arr.forEach((item:any, i:number) => {
                  if ( item[key] == val) {
                    user={...item}
                    index=i
                  }
                });
              return {index,user}
      }
    return getKeyObject
  }
  export default useQuery