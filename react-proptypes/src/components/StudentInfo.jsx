import PropTypyes from "prop-types";

export default function StudentInfo({ name, age }) {
  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
    </>
  );
}

StudentInfo.propTypes = {
  name: PropTypyes.any.isRequired,
  age: PropTypyes.number,
};
