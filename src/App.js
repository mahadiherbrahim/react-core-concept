import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const persons = ['Sakib','Tamim','Afif','Arham','rakib']
  const product = [
    {name:'Web Development',price:'$300'},
    {name:'Web Design',price:'$200'},
    {name:'Digital Marketing',price:'$100'},
    {name:'Graphic Design',price:'$50'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>First React App Create By Ebrahim</p>
        <Count></Count>
        <Posts></Posts>
        <ul>
        {persons.map(person => <li>{person}</li>)}
        </ul>
        <Person name="Rakib" job="Programmer"></Person>
        <Person name="Abir" job="Business Man"></Person>
        {product.map(product => <Products product={product}></Products>)}
      </header>
    </div>
  );
}

function Person(props) {
  const person = {
    border: '2px solid cyan',
    width:'400px',
    padding: '10px',
    margin: '10px'
  }
  return (
    <div style={person}>
      <h3>Name : {props.name}</h3>
      <h4>Profession : {props.job}</h4>
    </div>
  )
}

function Products(props) {
  const products = {
    border: '1px solid gray',
    backgroundColor: 'gray',
    color: 'black',
    height: '220px',
    borderRadius: '10px',
    width: '300px',
    margin:'10px',
    padding: '5px',
    display:'float'
  }
  const {name,price} = props.product;
  return (
    <div style={products}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  ) 
}

function Count() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => { setCount(count+1) }}>Increased</button>
      <button onClick={() => { setCount(count-1) }}>Decreased</button>
    </div>
  )
}

function Posts() {
  const title = {
    color:'black',
    border: '1px solid white',
    padding: '5px',
    margin: '5px',
    textAlign: 'left'
  }
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[]);
  return (
    <div>
      <h3>Blog Heading</h3>
      {posts.map(post=> <h4 style={title}>{post.title}</h4>)}
    </div>
  )
}
export default App;
