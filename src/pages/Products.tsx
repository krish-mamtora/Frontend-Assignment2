import { useEffect, useState } from 'react'
import '../App.css'
import { useForm } from 'react-hook-form'
import Navbar from '../components/Navbar'

const Containerstyle = {
  // border : "1px solid black",
  padding : "8px",
  margin:"8px",
  backgroundcolor : "lightblue",
  borderradius : "5px",
  width :"250px"
}
const cardstyle = {
  display: "flex" ,
  flexwrap : "wrap", 
  gap :"10px"
}
 const Renderdata =({data , cat})=>{
    if(Array.isArray(data)){
      const filteredData = cat?data.filter(
        item=> typeof(item)==="object" && item!==null && item.category ==cat
      ): data;
      return (
        <div style={Containerstyle}>
        {
          filteredData.map((item , index)=>(
            <div key={index} style={cardstyle} >
              <Renderdata data = {item } cat = {cat} />
            </div>
          ))
        }
        </div>
      )
    }
    if(typeof data ==="object" && data!==null ){
      return (
        <div style={cardstyle}>
          {
            Object.entries(data).map(([key , value] , index)=>(
              <div key={index} style={{marginBottom:"10px"}}>
                {
                 (
                  <><strong>{key}:</strong>
                 <Renderdata data={value } cat= { cat}/>
                 </>
                )}
              </div>
            ))
          }
        </div>
      )
    }
    return <span>{String(data)}</span>

  }

  


function Products(){  
  const [AllItems,setItem] = useState([]);
  const [Categories , setCategories] = useState([]);
  const [selectedCat , setSelectedCat] = useState(null);
  const [searchName , setSearchName]  = useState(null);

  useEffect(()=>{
  
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setItem(data.products));

      fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(category => setCategories(category));

  },[])

  function searchField(name){
    fetch(`https://dummyjson.com/products/search?q=${name}`)
    .then(res =>res.json())  
    .then(data => setItem(data.products));

    console.log(searchName);
    // console.log(name)
  }

  const filterData = (cat) =>{
    setSelectedCat(cat || null);
  }
  console.log(Categories);
  return (
    <>
    <Navbar></Navbar>
    
    <h3>Products</h3>
    <div>

      <h1 className="text-3xl font-bold underline">
      Hello
      </h1>
      
      {/* {Categories.map((cat , index)=>(
        <button key={index} onClick={()=> filterData(cat)}>{cat}</button>
      ))} */}

      {/* <button onClick={()=> setSelectedCat(null)}>ALL</button> */}


      <input type="text" placeholder='Enter Name' onChange={(e)=>searchField(e.target.value) }/>
      
      <select name="" id="" value={selectedCat || ""} onChange={(e)=> filterData(e.target.value)}>
      <option value="">All</option>


      {
        Categories.map((cat , index)=>(
          <option key={index} value={cat}>{cat}</option>
        ))
      }
      </select>
      
      <Renderdata data={AllItems } cat ={selectedCat}></Renderdata>
      
    </div>
    </>
  )
}

export default Products
