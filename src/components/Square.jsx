export default function Square({ value, onSquareClick }) {
    return (
      <button className="btn btn-light border square fs-3" onClick={onSquareClick}>
        {value}
      </button>
    );
  }