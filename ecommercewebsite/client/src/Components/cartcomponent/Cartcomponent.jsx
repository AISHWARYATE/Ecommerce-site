import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Cartcomponent() {
  
  const [cartdata,setcartdata]= useState({
    cardusername:"",
    cardnum:"",
    date:"",
    cvv:""
  })
  
  const [cartview,setcartview] = useState([])
  let totalPrice = 0;

  // const token=localStorage.getItem('token')
  useEffect(()=>{
    axios.get(`http://localhost:2000/cart/view-cart`).then((response)=>{ 
    console.log("response==",response)
    const data=response
    console.log("data==",data)
    setcartview(response.data.data)
    }).catch((error)=>{
     console.log(error);
    })
  },[])


  

  const [formErrors,setFormErrors] =useState({})
  
  const [isSubmit,setisSubmit] =useState({})
 
  const change = (e)=>{
    const {name,value} = e.target
    setcartdata({...cartdata,[name]:value})
  }

  const validate = (value) =>{
  var error ={}
  console.log("error",error);
  if(!value.cardusername){
      error.cardusername ="enter card users name"
  }
  if(!value.cardnum){
     error.cardnum = "enter the card number"
  }
  if(!value.date){
    error.date = "select expire date "
  }
  if(!value.cvv){
    error.cvv = "enter the card number"
  }
  return error
  }

  const deleteproduct=(id)=>{
    axios.get(`http://localhost:2000/cart/cart-product-delete/${id}`).then((response)=>{
         window.location.reload()
         }).catch((error)=>{
          console.log(error);
         })
    }
  const sub = (e)=>{
    e.preventDefault()
    console.log("cartdata==>",cartdata)
    setFormErrors(validate(cartdata))
    setisSubmit(true)
    if(Object.keys(formErrors).length ===0 && isSubmit){
     console.log("errorlength",formErrors);
    }
  }

  return (
    <>
      <section class="h-100 h-custom" style={{backgroundColor: "#eee"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card">
          <div class="card-body p-4">
            <div class="row">
              <div class="col-lg-7">
                <h5 class="mb-3"><a href="/eletronics" class="text-body"><i
                      class="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                <hr/>
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p class="mb-1">Shopping cart</p>
                    <p class="mb-0">You have 6 items in your cart</p>
                  </div>
                  <div>
                    <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!"
                        class="text-body">price <i class="fas fa-angle-down mt-1"></i></a></p>
                  </div>
                </div>
                {cartview.map((data)=>(
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <img src={`upload/${data.pimage}`}
                            class="img-fluid rounded-3" alt="Shopping item" style={{width: "65px"}}/>
                        </div>
                        <div class="ms-3">
                          <h5>{data.pname}</h5>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        {/* <div style={{width: "50px"}}>
                          <h5 class="fw-normal mb-0">Quantity</h5>
                        </div> */}
                        <div style={{width: "80px"}}>
                          <h5 class="mb-0">Price ${data.price}</h5>
                        </div>
                        {/* totalPrice += data.price; */}
                        {/* <a href="#!" style={{color:" #cecece"}}><i class="fas fa-trash-alt"></i></a> */}
                       <button type="button" onClick={()=>{deleteproduct(data._id)}} class="btn btn-danger">Remove</button><br></br>
                      </div>
                    </div>
                  </div>
                </div>
                )
                )}           
              </div>
              {/* <p>Total Price: ${totalPrice}</p> */}

              <div class="col-lg-5">
                <div class="card bg-primary text-white rounded-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                      <h5 class="mb-0">Card details</h5>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                        class="img-fluid rounded-3" style={{width: "45px"}} alt="Avatar"/>
                    </div>
                    <p class="small mb-2">Card type</p>
                    <a href="#!" type="submit" class="text-white"><i
                        class="fab fa-cc-mastercard fa-2x me-2"></i></a>
                    <a href="#!" type="submit" class="text-white"><i
                        class="fab fa-cc-visa fa-2x me-2"></i></a>
                    <a href="#!" type="submit" class="text-white"><i
                        class="fab fa-cc-amex fa-2x me-2"></i></a>
                    <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x"></i></a>
                    <form class="mt-4">
                      <div class="form-outline form-white mb-4">
                        <input type="text" id="typeName" name="cardusername" placeholder='card users name' onChange={change}
                        onClick={()=>{setFormErrors({...formErrors,cardusername:""})}} 
                        style={{borderColor:formErrors.cardusername? "red":""}} 
                        class="form-control form-control-lg" siez="17"/>
                        <label class="form-label" for="typeName">Cardholder's Name</label>
                      </div>

                      <div class="form-outline form-white mb-4">
                        <input type="text" id="typeText" placeholder='card number' name="cardnum" onChange={change} 
                        onClick={()=>{setFormErrors({...formErrors,cardnum:""})}} 
                        style={{borderColor:formErrors.cardnum? "red":""}}
                        class="form-control form-control-lg" siez="17"
                        minlength="19" maxlength="19" />
                        <label class="form-label" for="typeText">Card Number</label>
                      </div>

                      <div class="row mb-4">
                        <div class="col-md-6">
                          <div class="form-outline form-white">
                            <input type="text" id="typeExp" placeholder='expire date' name='date' onChange={change}
                            class="form-control form-control-lg"
                            onClick={()=>{setFormErrors({...formErrors,date:""})}} 
                            style={{borderColor:formErrors.date? "red":""}}
                               size="15"  minlength="15" maxlength="15" />
                            <label class="form-label" for="typeExp">Expiration</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-outline form-white">
                            <input type="password" id="typeText" placeholder='cvv' name="cvv" onChange={change} 
                            onClick={()=>{setFormErrors({...formErrors,cvv:""})}} 
                            style={{borderColor:formErrors.cvv? "red":""}}
                            class="form-control form-control-lg"
                               size="1" minlength="3" maxlength="3" />
                            <label class="form-label" for="typeText">Cvv</label>
                          </div>
                        </div>
                      </div>
                    </form>
                    <hr class="my-4"/>
                    {/* <div class="d-flex justify-content-between">
                      <p class="mb-2">Subtotal</p>
                      <p class="mb-2">$4798.00</p>
                    </div> */}

                    {/* <div class="d-flex justify-content-between">
                      <p class="mb-2">Shipping</p>
                      <p class="mb-2">$20.00</p>
                    </div> */}

                    <div class="d-flex justify-content-between mb-4">
                      <p class="mb-2">$4576</p>
                      <p class="mb-2">$4818.00</p>
                    </div>

                    <button type="button" onClick={sub} class="btn btn-info btn-block btn-lg">
                      <div class="d-flex justify-content-between">
                        <span>$4818.00</span>
                        <span>Checkout <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                      </div>
                    </button>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
