import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import buyCake from '../redux/cakes/cakeActions';
import buyIcecream from '../redux/icecream/icecreamActions';

function HooksCakeContainer() {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const numberOfIcecreams = useSelector(state => state.icecream.numberOfIcecreams)
    const dispatch = useDispatch()
    return (
        <div>

            <h2>Cakes Available-{numberOfCakes}</h2>
            <button oClick={() => dispatch(buyCake())}>BUy Cake</button>

            <h2>IceCreams AVAILABLE-{numberOfIcecreams}</h2>
            <button onClick={() => dispatch(buyIcecream())}>Buy ice-cream</button>

        </div>
    )
}

export default HooksCakeContainer;