function Button({ children, variant = 'primary', onClick, type = 'button', disabled = false }) {
  const getButtonClass = () => {
    switch (variant) {
      case 'primary':
        return 'btn-primary-orange';
      case 'outline':
        return 'btn-outline-green';
      case 'text':
        return 'btn-text-only';
      default:
        return 'btn-primary-orange';
    }
  };

  return (
    <button
      type={type}
      className={`ui-button ${getButtonClass()}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;