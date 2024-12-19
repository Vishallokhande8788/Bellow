function Bellow({ value }) {
    return (
      <div className="w-72 grid gap-1">
        {value.map((obj) => {
          return (
            <details
              key={crypto.randomUUID()}
              className="bg-lime-400 rounded p-3 "
            >
              <summary className="cursor-pointer">{obj.title}</summary>
              <p>{obj.description}</p>
            </details>
          );
        })}
      </div>
    );
  }
  
  export default Bellow;