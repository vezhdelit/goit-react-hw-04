const ErrorMessage = ({ errorMessage }) => {
  return (
    <div>
      <h1>
        {errorMessage
          ? errorMessage
          : "An error occurred. Please try again later."}
      </h1>
    </div>
  );
};

export default ErrorMessage;
