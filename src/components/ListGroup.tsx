import axios from 'axios';
import { MouseEvent, useState } from 'react';

interface Proper{
      items:string[];
      heading:string;
}
export function ListGroup({items,heading}:Proper){
   
    const [index,setIndex] = useState(-1);
    
        const checker = items[9]?items[9]:items[0];

        //event handler
        const handleClick = (event:MouseEvent) => {
            alert("clicked by event handler "+event+" "+checker);
            setIndex(9); 
        }
    return(
        <>
        <h1>{heading}</h1>
        {/* {items.length === 0 && <p>No items found</p>} */}
        {/* the above code returns the second parameter if the first is true 
        and nothing if it is false */}
        {items.length === 0 ? <p>No items found</p>:
        <div className="list-group">
  <a href="#" className={index === 0?"list-group-item active":" list-group-item list-group-item-action"} 
        onClick={()=>{setIndex(0);}}>{items[0]}</a>

  <a href="#" className={index === 1?"list-group-item active":" list-group-item list-group-item-action list-group-item-primary"}
        onClick={()=>{setIndex(1);}}>{items[1]}</a>
  <a href="#" className={index === 2?"list-group-item active":" list-group-item list-group-item-action list-group-item-secondary"}
        onClick={()=>{setIndex(2);}}>{items[2]}</a>
  <a href="#" className={index === 3?"list-group-item active":" list-group-item list-group-item-action list-group-item-success"}
        onClick={()=>{setIndex(3); }}>{items[3]}</a>
  <a href="#" className={index === 4?"list-group-item active":" list-group-item list-group-item-action list-group-item-danger"}
        onClick={()=>{setIndex(4); }}>{items[4]}</a>
  <a href="#" className={index === 5?"list-group-item active":" list-group-item list-group-item-action list-group-item-warning"}
        onClick={()=>{setIndex(5); }}>{items[5]}</a>
  <a href="#" className={index === 6?"list-group-item active":" list-group-item list-group-item-action list-group-item-info "}
        onClick={()=>{setIndex(6); }}>{items[6]}</a>
  <a href="#" className={index === 7?"list-group-item active":" list-group-item list-group-item-action list-group-item-light"}
        onClick={()=>{setIndex(7); }}>{items[7]}</a>
  <a href="#" className={index === 8?"list-group-item active":" list-group-item list-group-item-action list-group-item-dark"}
        onClick={()=>{setIndex(8); alert("clicked "+items[8])}}>{items[8]}</a>
  <a href="#" className={index === 9?"list-group-item active":" list-group-item list-group-item-action list-group-item-dark"}
        onClick={handleClick}>{checker}</a> 
</div>}
        </>
    )
}
