import { useEffect } from "react";
import { useState } from "react";
import './Bottles.css'
import Bottle from "../Bottle/Bottle";
import { addToLS, getStoredCard, removeFromLS } from "../../Utilies/localStorage";
import Card from "../../card/Card";


const Bottles= () => {
    const [bottles,setBottles]= useState([])
    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))

    },[])
    // load card from local storage
    useEffect(()=>{
        console.log('call',bottles.length)
       if(bottles.length>0){
        const storeCard = getStoredCard();
        console.log(storeCard)
        const saveCard =[]
        for (const id of storeCard) {
            const bottle = bottles.find(bottle => bottle.id === id);
            if(bottle){
                saveCard.push(bottle)
            }
        }
        console.log('save card', saveCard)
        setPurchase(saveCard)
       }
        
    },[bottles])
    // for purchase

const [purchase,setPurchase]=useState([])
const handlePurchase = bottle => {
  
const newCard =[...purchase,bottle]
setPurchase(newCard)
addToLS(bottle.id)
}

const handleRemoveFromLS = id =>{
    const remainingCard =purchase.filter(bottle=> bottle.id !==id)
    setPurchase(remainingCard)
removeFromLS(id)
}

    return (
        <div>
           <h4>Bottle Available:{bottles.length}</h4>
         <Card card={purchase} handleRemoveFromLS={handleRemoveFromLS}></Card>
           <div className='bottles'>
            {
                bottles.map(bottle=><Bottle key={bottle.id} bottle={bottle} 
                handlePurchase={handlePurchase} ></Bottle>)
            }
            </div> 
        </div>
    );
};

export default Bottles;