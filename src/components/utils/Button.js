function Button({ children, onClick }) {
  return (
    <button className="button-styling" onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
