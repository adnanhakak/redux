import React from 'react';
import buyCake from '../redux/cakes/cakeActions';
import { connect } from 'react-redux'
import { useState } from 'react';

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div><h2>NO. OF CAKES-{props.cakenumber}</h2>
            <input value={number} onChange={(e) => setNumber(e.target.value)}></input>
            <button onClick={() => props.buyCake(number)}>BUY {number} CAKE</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cakenumber: state.numberOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)