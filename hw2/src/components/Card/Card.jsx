import cources from "../../data/data";

function Card() {
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
              <p
                className={
                  elem.isMyCource
                    ? "user__isMyCourses green"
                    : "user__isMyCourses red"
                }
              >
                {elem.isMyCource ? "Is my Courses" : "Is NOT my courses "}
              </p>
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
        </div>
      ))}
    </>
  );
}

export default Card;
