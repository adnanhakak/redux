import React from 'react';
import buyCake from '../redux/cakes/cakeActions';
import { connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <div><h2>NO. OF CAKES-{props.cakenumber}</h2>
            <button onClick={props.buyCake}>BUY CAKE</button></div>
    )
}

const mapStateToProps = (state) => {
    return {
        cakenumber: state.numberOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)