import PropTypes  from 'prop-types'
import'./bottle.css'

const Bottle = ({bottle,handlePurchase}) => {
   const{name,img,price}=bottle
    return (
        <div className='bottle'>
            <h4>Name:{name}</h4>
            <img src={img} alt="" />
            <h4>Price:${price}</h4>
            <button onClick={()=>handlePurchase(bottle)}>Purchase</button>
        </div>
    );
};
Bottle.propTypes ={
    bottle:PropTypes.object.isRequired,
    handlePurchase:PropTypes.func.isRequired
}
export default Bottle;