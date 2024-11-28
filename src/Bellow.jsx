function Bellow({ value }) {
    return (
      <div>
        {value.map((obj) => {
          return (
            <details>
              <summary>{obj.title}</summary>
              <p>{obj.description}</p>
            </details>
          );
        })}
      </div>
    );
  }
  
  export default Bellow;