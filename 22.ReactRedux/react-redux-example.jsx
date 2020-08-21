// REACT COMPONENT
// Generally you would spilt this up into logical components
// and pass props around correctly etc but we are keeping it as simply as possible
class ProductsPane extends React.Component{
    constructor(props){
        super(props);
    }
      // EVENT HANDLERS
  // They are responsible for calling `dispatch` which will send events to redux
  addProduct =()=>{
      var action ={
          type:"ADD_PRODUCT"
      };
      this.props.dispatch(action);
  }
  removeProduct =(productId) =>{
      var action ={
        type:"REMOVE_PRODUCT",
        productId:productId
      };
      this.props.dispatch(action);
  }
  editProduct = (productId, event)=>{
      var newName = event.target.value;
      var action ={
          type:"EDIT_PRODUCT",
          data:{
              productId: productId,
              productName: newName
          }
      };
      this.props.dispatch(action);
  }

  render(){
      const products = this.props.products;

       // Example product: { productId : 4 , productName :'Profit' }
       var trList =products.map((product,index) =>{
            return (<tr key={product.productId}>
                <td>{product.productId}</td>
                <td>
                    <input type="text" onChange={this.editProduct.bind(null,product.productId)} 
                        value={product.productName}    
                    />
                </td>
                <td>
                    <button onClick={this.removeProduct.bind(null,product.productId)}>
                        Remove
                    </button>
                </td>
            </tr>);
       });
       return (
           <div>
                <table border="1">
                    <thead>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Remove</th>
                    </thead>
                    <tbody>
                        {trList}
                    </tbody>
                </table>
                <br/>
                <button onClick={this.addProduct}>
                    Create
                </button>
           </div>
       );
  }
}
var nextProductId = 10;
 
// MAP STATE TO PROPS
// Probably the most important method of the demo which handles the React/Redux integration.
// When state changes, this method is called, which then you can use to customly
// map the state into props that your React component can use
// MAP: state.productList <==> props.products
const mapStateToProps = (state) => {
  return {
    products: state.productList
  }
}
 
// Example product: { productId : 4 , productName :'Profit' }
const getIndexByProductId = (products, productId)  => {
    for(var i = 0; i < products.length; i++) {
       var product = products[i];
       if(product.productId === productId) {
         return i;
       }
    }
    return -1;
};
 
 
 
// REDUCERS
// Reducers listen for actions that are dispatched and react depending on your logic
// All state in Redux is immutable(never changes) so we always have to return a new
// state object.
// We are going to copy the current state and return a new one based off the action creators above
const appReducer = (state = {productList: []}, action) => {
 
  // Clone Array.
  let products = state.productList.slice();
  // This is quite a common way of deciding which event to process
  // Note: ALL events will be coming through this reducer
  console.log('Actions', action); // Open your console to see what actions look like
 
  // Even better, install Redux DevTools and your mind will be blown
  switch (action.type) {
    case 'ADD_PRODUCT':
      nextProductId++;
      var product = {productId : nextProductId, productName: "" };
      products.push(product);
      break;
    case 'REMOVE_PRODUCT':
      var idx = getIndexByProductId(products, action.productId);
      if(idx != -1)  {
        products.splice(idx, 1); // Removes element at `idx`
      }
      break;
    case 'EDIT_PRODUCT':
      var idx = getIndexByProductId(products, action.data.productId);
      if(idx != -1)  {
          products[idx].productName = action.data.productName;
      }
      break;
  }
  // As above, we have to return a new state object each time (Redux store is immutable)
  // It makes sure we know our data can only be modified in one visible way
  // Also lets us time travel through our application state!
  const newState = {
    productList: products
  }
  console.log('Current State', newState);
  return newState;
}
 
// REDUX STORE
// Create store initializes our Redux store and only has to be called once
// The first argument is our `appReducer` defined above, it is almost like a listener
// The second is just our initial state which is just a Javascript object
// The third is usually where enhancers/middleware goes
// In this example it just loads Redux DevTools so everyone can play around
let store = Redux.createStore(appReducer, {
  productList: [
    { productId : 1 , productName :'React' },
    { productId : 2 , productName :'Redux' },
    { productId : 3 , productName :'Profit' }
  ]
}, window.devToolsExtension ? window.devToolsExtension() : undefined);
 
// We want to use Redux connect to attach our mapStateToProps to our ProductsPane (React Component)
const MyApp = ReactRedux.connect (
  mapStateToProps
)(ProductsPane);
 
// Render
ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <MyApp />
  </ReactRedux.Provider>,
  document.getElementById('app')
);
 
 
if (window.devToolsExtension) {
  window.devToolsExtension.open();
}