import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function useTest(value) {
  const [list, setList] = useState([]);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    ( async()=>{
      try {
        await axios
          .get("https://api-ipm-fake.onrender.com/products")
          .then((res) => {
            setList(res.data);
            setLoading(false)
            console.log("data", res.data);
          })
          .catch((error) => {
            console.log("Error fetching data:", error);
          });
      } catch (error) {
        console.log(error);
      }
    })()
    // axios.get("https://api-ipm-fake.onrender.com/categories").then((res) => {
    //   setCategory(res.data);
    //   console.log(res.data);
    // });
  }, [value]);
  return {list,loading};
}

export default useTest;