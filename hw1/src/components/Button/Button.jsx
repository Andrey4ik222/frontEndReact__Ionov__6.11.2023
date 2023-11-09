/* eslint-disable react/prop-types */
function Button(props) {
  return (
    <button className={props.className} type={props.typeButton}>
      {props.textButton}
    </button>
  );
}

export default Button;
