const CounterAction = ({ increaseNumber, decreaseNumber, reset }) => {
  return (
    <div>
      <button
        onClick={increaseNumber}
        className="btn btn-success me-4 mb-5 py-3 px-4 fs-3"
      >
        Increase Counter
      </button>
      <button
        onClick={decreaseNumber}
        className="btn btn-danger mb-5 py-3 px-4 fs-3"
      >
        Decrease Counter
      </button>
      <button
        onClick={reset}
        className="btn btn-primary d-block py-3 px-5 m-auto mt-3 fs-3"
      >
        Reset
      </button>
    </div>
  );
};

export default CounterAction;
