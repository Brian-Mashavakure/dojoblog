import {useState, useEffect} from 'react';

//custom hooks help to make code reusable for example when fetching data fromm a server
//hooks should always start with use
const useFetch = (url) => {//url will be the endpoint
    //useState is used when we have values that might change at any point in the code 

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

      const abortCont = new AbortController();
        fetch(url, {signal: abortCont.signal})
          .then(res => {
            if(!res.ok){
              throw Error("Could Not Fetch Data For Given Resource");
            }
            return res.json();
          }
          )
          .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
          })
          .catch(err => {
            if(err.name === 'AbortError'){
              console.log('Fetch aborted');
            }else{
              setIsPending(false);
              setError(err.message);//only works when the request fails to reach the server and not when the server is reached but returns an error
            }
            
          })  
        return () => abortCont.abort();  
        
      }, [url]);
      //an empty dependency array makes sure the useffect hook function only runs during the first render
    
    
    return {data, isPending, error};

};

export default useFetch;