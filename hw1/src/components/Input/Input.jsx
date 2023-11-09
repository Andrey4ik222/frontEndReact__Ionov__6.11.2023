/* eslint-disable react/prop-types */
function Input(props) {
  return (
    <input
      className={props.className}
      placeholder={props.placeholder}
      type={props.typeInput}
    />
  );
}

export default Input;
