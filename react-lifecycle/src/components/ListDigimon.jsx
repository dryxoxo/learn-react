import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";
import Spinners from "./Spinners";

export default function ListDigimon(){
    const [listDigimon, setListDigimon] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        axios('https://digimon-api.herokuapp.com/api/digimon')
        .then(res =>{ setListDigimon(res.data)
        setLoading(false)
        }
        )
    }, []);


    return(
        <>
        {loading? <Spinners/>:listDigimon.map(({name, img, level},key) => <Card key={key} name={name} img={img} level={level}/>)}
        </>
    )
}