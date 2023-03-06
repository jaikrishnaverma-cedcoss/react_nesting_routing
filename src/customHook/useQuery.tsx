const useQuery = () => {
    // this function can return the object & index of rquired key value match on array of objects
      const getKeyObject=(arr:any,key:string,val:string|number|undefined)=>{
        let index=-1
        let user={}
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