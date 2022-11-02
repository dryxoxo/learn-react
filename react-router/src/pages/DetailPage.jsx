import { useParams } from "react-router-dom";
import { data } from "./HomePage";

export default function DetailPage() {
  const { id } = useParams();
  return (
    <>
      {data.filter((el) => el.id === +id).map(({id, name, address, hobi}) => {
        return(
            <div key={id}>
                <h2>{name}</h2>
                <h4>{address}</h4>
                <p>{hobi}</p>
            </div>
        )
      })}
    </>
  );
}
