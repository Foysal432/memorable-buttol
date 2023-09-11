const getStoredCard =()=>{
    const storedCardString =localStorage.getItem('card')
    if (storedCardString) {
        return JSON.parse(storedCardString)
    }
    return []
}
const saveCardToLS =card=>{
    const cardStringifiid = JSON.stringify(card);
    localStorage.setItem('card',cardStringifiid);
}
const addToLS =id=>{
    const card =getStoredCard();
    card.push(id);
    saveCardToLS(card)
}
const removeFromLS = id =>{
    const cart = getStoredCard()
    // removing every id
    const remaining =cart.filter(idx=> idx !==id);
    saveCardToLS(remaining)
}
export{addToLS,getStoredCard,removeFromLS}