function Bellow({ value }) {
    return (
      <div>
        {value.map((obj) => {
          return (
            <details key={crypto.randomUUID()}>
              <summary>{obj.title}</summary>
              <p>{obj.description}</p>
            </details>
          );
        })}
      </div>
    );
  }
  
  export default Bellow;