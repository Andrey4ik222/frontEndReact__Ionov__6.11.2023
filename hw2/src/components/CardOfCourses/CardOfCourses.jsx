/* eslint-disable react/prop-types */
import CardOfProgress from "../CardOfProgress/CardOfProgress";

function CardOfCourses({ cources }) {
  return (
    <>
      {cources.map((elem) => (
        <div className="card" key={elem.id}>
          <div className="image__container">
            <img src={elem.image} alt="photo" />
            <div className="level">{elem.level}</div>
          </div>
          <h3 className="card__title">{elem.title}</h3>

          <div className="card__info">
            <div className="user">
              <img src={elem.user.avatar} alt={elem.user.name} />
              <p>{elem.user.name}</p>
            </div>
            <div className="rating">
              <p>{elem.rating}</p>
            </div>
          </div>

          <div className="card__info">
            <div>{elem.students} Student</div>
            <div>{elem.modules} Modules</div>
            <div>{elem.duration / 3600}h</div>
          </div>
          <div>
            {elem.isMyCource ? (
              <CardOfProgress
                totalModules={elem.modules}
                finishedModules={elem.finishedModules}
              ></CardOfProgress>
            ) : null}
          </div>
        </div>
      ))}
    </>
  );
}

export default CardOfCourses;
