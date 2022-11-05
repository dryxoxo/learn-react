import React from "react";
import { useSelector } from "react-redux";

export default function SummaryPembelian(){
    const {totalKeranjang}= useSelector(state => state)

    return(
        <>
        <div>
            <h2>Summary Pembelian</h2>
            <h3>Jumlah Barang Yang dibeli:<span>{totalKeranjang}</span></h3>
        </div>
        </>
    )
}