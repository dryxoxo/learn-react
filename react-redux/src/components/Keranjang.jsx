import React from "react";
import { useSelector } from "react-redux";

export default function Keranjang(){
    const state = useSelector(state => state)
    return(
        <>
        <div>
            <span>Keranjang</span>
            <span>{state.totalKeranjang}</span>
        </div>
        </>
    )
}