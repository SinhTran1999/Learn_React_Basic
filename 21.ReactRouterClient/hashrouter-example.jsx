// import {BrowserRouter,NavLink} from 'react-router-dom';
// const { HashRouter, NavLink, Route } = ReactRouterDOM;

//Component
class ProductShortInfo extends React.Component{
    render(){
        return(
            <div className="product">
                <h3>Samsung Galaxy S9</h3>
                <p>Price: $900</p>
            </div>
        );
    }
}
//Component
class ProductFeature extends React.Component{
    render(){
        return <h3>Some features of Samsung Galaxy S9!</h3>;
    }
}
//Component
class ProductImages extends React.Component{
    render(){
        return <h3>Some Images of Samsung Galaxy S9!</h3>
    }
}
//Component
class ProductComments extends React.Component{
    render(){
        return <h3>Some Customer Comments</h3>;
    }
}

//Component
class Product extends React.Component{
    render(){
        return(
            <ReactRouterDOM.HashRouter>
                <div>
                    <ProductShortInfo/>
                    <div className="product-nav">
                        <ReactRouterDOM.NavLink exact to ="/" activeClassName ="selected">
                            Feature
                        </ReactRouterDOM.NavLink>

                        <ReactRouterDOM.NavLink exact to ="/images" activeClassName ="selected">
                            Images
                        </ReactRouterDOM.NavLink>

                        <ReactRouterDOM.NavLink  to ="/comments" activeClassName ="selected">
                            Comments
                        </ReactRouterDOM.NavLink>
                    </div>
                    <div className ="route-place">
                        <ReactRouterDOM.Route exact path="/" component={ProductFeature}/>
                        <ReactRouterDOM.Route exact path="/images" component={ProductImages}/>
                        <ReactRouterDOM.Route  path="/comments" component={ProductComments}/>
                    </div>
                </div>
            </ReactRouterDOM.HashRouter>
        );
    }
}
//Component
class App extends React.Component{
    render(){
        return <Product/>;
    }
}
//Render
ReactDOM.render(<App/>, document.querySelector("#app"));