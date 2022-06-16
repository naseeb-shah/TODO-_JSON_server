
import "./App.css"
export default function Showdetain({ item, id, remove}) {
    
    return (
      <>
        <h3>
         <div className="task">{item}</div> 

          <button className="button-33" onClick={()=>remove(id)}>Remove </button>
        </h3>
      </>
    );
  }
  