import React from 'react';
import './card.css';

const Card = ({small_image, title, authorname, posted_on, description}) => {
    return ( <article>
        <div><img src={small_image} alt="machinelearning" className="img" /></div>
        <div className="textwrapper"><p className="title">{title.match(/[\D|\w]{0,40}/) + "..."}</p>
          <div className="author"><span>{authorname}</span></div><span className="date">| {posted_on.match(/\d*-\d*-\d*(?=T)/)}</span>
          <p className="texts">{description.match(/[\D|\w]{0,400}/) + "..."}</p>
        </div>
      </article> );
}
 
export default Card;