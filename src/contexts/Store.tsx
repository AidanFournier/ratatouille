import { useState, useEffect } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import axios from 'axios'

const defaultCoords = {
    lat: "",
    long: ""
};

// function Store() {
//     const [ location, setLocation ] = useState("");
//     const [ coords, setCoords ] = useState(defaultCoords);
//     const [ restaurants, setRestaurants ] = useState({});

//   useEffect(() => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/users')
//       .then((res) => {
//         setUsers(res.data)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }, [])

//   return <ApiContext.Provider value={[location, setLocation]} />
//     {/* </ApiContext.Provider> */}
  
// }

// export default Store