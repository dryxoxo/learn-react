import React from "react";
import { useSelector } from "react-redux";

export default function CardTodo(){
    const {data} = useSelector(state => state)
    return(
        <>
        <div>
            <ul>
                {data.map((dataTodo ,indeks) => (
                    <li key={indeks}>{dataTodo}</li>
                ))}
            </ul>
        </div>
        </>
    )
}