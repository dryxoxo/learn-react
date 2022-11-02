import { Link, useNavigate } from "react-router-dom";

export let data = [
  {
    id: 1,
    name: "Mika",
    address: "Jakarta",
    hobi: "Menari"
  },
  {
    id: 2,
    name: "Adit",
    address: "Purwokerto",
    hobi: "Memotret"
  },
  {
    id: 3,
    name: "Baim",
    address: "Jakarta",
    hobi: "Membaca"
  },
];

export default function HomePage() {
  const navigation = useNavigate()

  const handleId = (id) => {
    navigation(`/detail/${id}`)
  }

  return (
    <>
      <h1>Ini Home Page</h1>
      <hr />
      {data.map(({ id, name }) => {
        return (
          <div key={id}>
            <h3>No : {id}</h3>
            <h1>Nama : {name}</h1>
            <button onClick={() => handleId(id)}>Detail</button>
            <Link to={"about/student"}>About Student</Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}
