
import PropTypes  from 'prop-types'
import './Card.css'
const Card = ({card, handleRemoveFromLS}) => {
    return (
        <div>
              <h4>Card: {card.length}</h4>
              <div className="card-container">{
                card.map(bottle => <div key={bottle.id}>
                    <img  src={bottle.img}></img>
                    <button onClick={()=>handleRemoveFromLS(bottle.id)}>Remove</button>
                </div> )
                }
              </div>
                
        </div>
    );
};
Card.propTypes={
    card:PropTypes.array.isRequired,
    handleRemoveFromLS:PropTypes.func.isRequired
}
export default Card;