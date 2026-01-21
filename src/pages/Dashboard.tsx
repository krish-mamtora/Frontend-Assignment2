import { useEffect, useState } from 'react'
import '../App.css'
import '../index.css'
import Navbar from '../components/Navbar'
import { set, useForm } from 'react-hook-form'

function Dashboard() {

  const {register  , handleSubmit , formState : {error}} = useForm();
  const [items , setItems] = useState([]);
  const [totalstock , setTotalStock] = useState(0);

  useEffect(()=>{
    const dispItems:string = JSON.parse(localStorage.getItem('items'))||[];
    setItems(dispItems);
    console.log(dispItems);
  },[]);

  const onSubmit = (data:Object) =>{
    addItem(data);
  }

  const addItem = (data:Object) =>{

    let olditems = JSON.parse(localStorage.getItem('items'))||[]; 

    const newItem ={
      ProductName: data.ProductName,
      Price : data.Price,
      Category : data.Category,
      Stock : data.Stock,
    };
    setTotalStock(Number(totalstock)+Number(data.Stock));
    const updated = [...olditems , newItem];
    localStorage.setItem('items' , JSON.stringify(updated));
    setItems(updated);
  
  }

   const deleteItem = (index) =>{
        console.log(index);
         let allitems = JSON.parse(localStorage.getItem('items'))||[]; 
         allitems.splice(index , 1);
          localStorage.setItem('items' , JSON.stringify(allitems));
           setItems(allitems);
    }
    

  return (
    <>
    <Navbar></Navbar>
    <div>
      <div >
        <h4>Dashboard</h4>
        <a href="/R">Router</a>
        <div >
           <h5>Items</h5>
           <div style={{display:"grid" , gap :"2px"}}>
           <ul>
            <h4>Product Name  | Category | Price | Stock</h4>
            { items.map((item , index) => (
                <li key={index} style={{border : "1px solid black" ,gap:"1px"}}>
                  {item.ProductName} - {item.Category} - {item.Price} - {item.Stock}
                  {item.Price<=100 && <p>Affordable</p>}
                  {item.Price>100 && item.Price<1000 && <p>Medium Range</p>}
                  {item.Price>=1000 && <p>Costly {item.Category}</p>}

                  {item.Stock<=5 && <p>Limited Quantity</p>}
                
                  <button onClick={() => deleteItem(index)}>Delete</button>
                </li>

             ))}
           </ul>
              <h5>Total : {items.length} Unique Items</h5>
              {totalstock >0 && <p>Total stock {totalstock}</p>}

           </div>
        </div>
        <div>
          <h5>Form</h5>
          <div style={{border:"1px solid black", backgroundColor:"lightblue"}}>
            <form  onSubmit={handleSubmit(onSubmit)}>
              <br />
                <span>Product Name : </span>
                <input {...register("ProductName" , {required : true})} placeholder='Product Name' /> <br />
                <span>Category : </span>
                <select{...register("Category" , {required : true})}>
                  <option value="">Select Category</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Electronic">Electronic</option>
                  <option value="Home">Home</option>
                  <option value="Grocery">Grocery</option>
                </select><br />
                <span>Price : </span>
                <input {...register("Price" , {required : true})} type='number' placeholder='Price'/> <br />
                <span>Stock : </span>
                <input  {...register("Stock" , {required: true})}type="number" placeholder='Stock' /> <br />
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  type='submit'>Add Item</button>
            </form>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Dashboard
