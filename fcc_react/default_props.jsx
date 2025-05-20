// link de propTypes typos de datos
// https://legacy.reactjs.org/docs/typechecking-with-proptypes.html#proptypes

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

Items.PropTypes = {
  quantity: PropTypes.string.isRequired,
}