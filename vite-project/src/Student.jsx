import propTypes from 'prop-types'


function Student(props) {
  return (
    <div className={props.className}>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student:{props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
    name: propTypes.string,
    age : propTypes.age,
    isStudent: propTypes.bool,
}

Student.defaultProps ={
    name: "Guest",
    age: 0,
    isStudent:"No"
}
export default Student;


