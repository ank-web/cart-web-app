import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    }
  }
  componentDidMount () {
    firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          console.log(doc.data())
        })
        const products  = snapshot.docs.map((doc)=>{
          const data = doc.data()
          data['id'] = doc.id
          return data
        })

        this.setState({
          products:products,
          loading:false
        })

      })
      
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state
    const index = products.indexOf(product)
    const docRef = firebase.firestore().collection('products').doc(products[index].id)
    docRef.update({
      qty: products[index].qty + 1
     })
     .then(() => {
       console.log('Document update successfully')
     })
     .catch((error)=>{
       console.log('Error',error)
     })
  }
  handleDecreaseQuantity = (product) => {
    const { products } = this.state
    const index = products.indexOf(product)
    if (products[index].qty === 0) {
      return
    }
    const docRef = firebase.firestore().collection('products').doc(products[index].id)
    docRef.update({
      qty: products[index].qty - 1
     })
     .then(() => {
       console.log('Document decreased successfully')
     })
     .catch((error)=>{
       console.log('Error',error)
     })
    
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state
    const docRef = firebase.firestore().collection('products').doc(id)
    docRef.delete()
    .then(() => {
      console.log('Document deleted successfully')
    })
    .catch((error)=>{
      console.log('Error',error)
    })

  }
  getCartCount = () =>{
    const {products} = this.state
    let count = 0
    products.forEach(product => {
      count  += product.qty
      
    });
    return count;
  }
  getTotalPrice = () => {
    const {products} = this.state
    let cartTotal = 0
    products.map((product) => {
      cartTotal += product.qty * product.price
    })
    return cartTotal
  }
  render() {
    const {products, loading} =this.state
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}

        />
        {loading && <h1>Loading Products....</h1>};
        <div style={{padding:10, fontSize: 20}}> Total Price: {this.getTotalPrice()} </div>
      
      </div>
    );
  }
}

export default App;
