import CardOfCourses from "../CardOfCourses/CardOfCourses";
import cources from "../../data/data";

function Card() {
  return (
    <div>
      <CardOfCourses cources={cources}></CardOfCourses>
    </div>
  );
}

export default Card;
