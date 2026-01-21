import { useEffect, useState } from 'react'
import '../App.css'
import { useForm } from 'react-hook-form'
import Navbar from '../components/Navbar'

 const Renderdata =({data})=>{
    // console.log(category)
    if(Array.isArray(data)){

      return (
        <ul>
        {
          data.map((item , index)=>(
            <li key={index} style={{display:"flex", backgroundColor:"lightblue"}}>
              <Renderdata data = {item}/>
            </li>
          ))
        }
        </ul>
      )
    }

    if(typeof data ==="object" && data!==null ){
      return (
        <ul>
          {
            Object.entries(data).map(([key , value] , index)=>(
              <li key={index}>
                {/* {key && key=="category" && localStorage.setItem('category',json.stringify(value))} */}
                <span style={{border:"1px solid black", textAlign:"left"}}>{key}:</span><Renderdata data={value}/>
              </li>
            ))
          }
        </ul>
      )

    }
    return <span>{String(data)}</span>

  }

  


function Products(){  
  const [AllItems,setItem] = useState([]);
  const [Categories , setCategories] = useState([]);

  useEffect(()=>{
  
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setItem(data.products));

      fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(category => setCategories(category));

  },[])

  // console.log(AllItems[0])
  // AllItems?.map((item,index)=>{
  //   console.log(item);
  // })

  console.log(Categories);
  return (
    <>
    <Navbar></Navbar>
    
    <h3>Products</h3>
    <div>

      <h1 className="text-3xl font-bold underline">
      Hello
      </h1>
      <select name="" id="">
      {Categories.map((cat , index)=>(
        <option value={cat}>{cat}</option>
      ))}
      </select>
      <Renderdata data={AllItems  }></Renderdata>
      
    </div>
    </>
  )
}

export default Products
