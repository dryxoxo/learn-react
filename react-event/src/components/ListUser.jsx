import { useState } from "react";
import Card from "./Card";
import Button from './Button'
export default function ListUser() {
  const [users, setUser] = useState([
    {
      name: "Alpha",
      age: 12,
      kata: "Jangan main main dengan pesona sanguine ku"
    },
    {
      name: "Beta",
      age: 13,
      kata: "Semanis coklat, selembut sutra"
    },
    {
      name: "Charli",
      age: 14,
      kata: "Seperti bunga matahri, menebarkan harapan dan semangat"
    },
    {
      name: "Delta",
      age: 15,
      kata: "aku ingin melukis perjalanan indah bersama kalian"
    }
  ]);
  const [indeks, setIndeks] = useState(0)
  const next = () =>{
    indeks === (users.length - 1) ? setIndeks(0):setIndeks(indeks+1)
    console.log(indeks)
  }
  const {name, age, kata} = users[indeks]
  return(
    <div>
      <Card name={name} age={age} kata={kata}/>
      <Button teks="Lanjut" action={next}/>
      {/* {users.map(({name, age, kata}, index) =>
      <Card key={index} name={name}
      age={age} kata={kata}/>)} */}
    </div>
  )
}
