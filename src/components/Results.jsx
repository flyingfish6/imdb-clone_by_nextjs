// "use client";

const Results = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <p key={result.id}>{result.original_title}</p>
      ))}
    </div>
  );
};

export default Results;
