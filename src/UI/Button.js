const Button = ({ children, type, ...rest }) => {
  return (
    <button type={type === 'submit' ? 'submit' : 'button'} {...rest}>
      {children}
    </button>
  );
};

export default Button;
