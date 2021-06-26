import {useEffect, useState} from "react"

export default function useFetch(databaseUrlToFetch){

    const [array, setArray] = useState([])
    useEffect(() => { 
        fetch(databaseUrlToFetch).then(resp => resp.json()).then(setArray)
    },[setArray])

    return  [array, setArray]
}