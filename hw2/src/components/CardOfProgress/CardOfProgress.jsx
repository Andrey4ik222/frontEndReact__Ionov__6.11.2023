/* eslint-disable react/prop-types */

function CardOfProgress({ totalModules, finishedModules }) {
  return (
    <div className="card__info">
      <p>{totalModules || 0} / 10 Modules</p>
      <p>{((totalModules || 0) / 10) * 100} %</p>
      <p>{finishedModules || 0} Finished moduls</p>
    </div>
  );
}

export default CardOfProgress;
