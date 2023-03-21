import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import styles from '../styles/CartPage.module.css';
import { PaystackButton } from 'react-paystack';
import ButtonPrimary from '../components/misc/ButtonPrimary';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';


var formatter = new Intl.NumberFormat({
    style: 'currency',
    currency: 'NGN',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});



const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  //  console.log("Hellow World", getTotalPrice().toFixed(2));

  const publicKey = "pk_test_db1662f408804188217a4c99d28cd2d484611f93"
  const dressing = 250;
  const delivery = 300;
  const amount = getTotalPrice() + dressing + delivery + '00'
  const [email, setEmail] = useState("jaafar.nasir71@gmail.com")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  }

  // const [delivery, SetDelivery] = useState(false);
  // const [isShown, setIsShown] = useState(false);
 
  // if (delivery){
  //   useEffect(() => {
  //     setIsShown(true);
  //   }, []);
   
  // }

  return (
    <Layout>
    <div className="px-4 md:px-12 pt-28 mt-18 bg--500" >
        {cart.length === 0 ? (
    <div class={styles.outer}>
    <div class={styles.middle}>
      <div class={styles.inner}>
      <h1 class="mb-4">Your Cart is Empty!</h1>
      <ButtonPrimary>Start Shopping</ButtonPrimary>
      </div>
    </div>
  </div>
      
      ) : (
<div class="relative mx-auto w-full bg-green">

  <div class="grid min-h-screen grid-cols-10 bg-red-300">
    <div class="col-span-full py-6 px- sm:py-12 lg:col-span-6 lg:py-24">
      <div class="mx-auto w-full ">
        <h1 class="relative text-2xl font-medium text-gray-700 sm:text-3xl">Secure Checkout<span class="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span></h1>
        <form action="" class="mt-10 flex flex-col space-y-4 bg-blue-300">
          
        <div>
            <label for="email" class="text-xs font-semibold text-gray-600">Full Name</label>
            <input type="email" id="email" onChange={(e) => setName(e.target.value)} name="name" placeholder="Enter Full Name" class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
          <div class="relative"><label for="card-number" class="text-xs font-semibold text-gray-600">Mobile number</label>
          <input type="text" id="mobile-number"  onChange={(e) => setPhone(e.target.value)}  name="mobile-number" placeholder="0701-2674-XXXX" class="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /><img src="/images/uQUFIfCYVYcLK0qVJF5Yw.png" alt="" class="absolute bottom-3 right-3 max-h-4" /></div>
          <div>
            <label for="email" class="text-xs font-semibold text-gray-600">Email</label>
            <input type="email" id="email"  onChange={(e) => setEmail(e.target.value)}  name="email" placeholder="nasir@yahoo.com" class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
         
         
            {/* <div class="wrapper">
 <input type="radio" name="select" id="option-1" value="Delivery" onClick={() => SetDelivery(true)}/>
 <input type="radio" name="select" id="option-2" value="Pickup" onClick={() => SetDelivery(false)} />
   <label for="option-1" class="option option-1">
     <div class="dot"></div>
      <span>Pick Up</span>
      </label>
   <label for="option-2" class="option option-2">
     <div class="dot"></div>
      <span>Delivery</span>
   </label>
</div> */}

{/* {isShown && <p>Goto Polo </p>} */}
 {/* <div class="relative"><label for="card-number" class="text-xs font-semibold text-gray-600">Card number</label><input type="text" id="card-number" name="card-number" placeholder="1234-5678-XXXX-XXXX" class="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /><img src="/images/uQUFIfCYVYcLK0qVJF5Yw.png" alt="" class="absolute bottom-3 right-3 max-h-4" /></div> */}
          {/* <div>
            <p class="text-xs font-semibold text-gray-600">Expiration date</p>
            <div class="mr-6 flex flex-wrap">
              <div class="my-1">
                <label for="month" class="sr-only">Select expiration month</label
                ><select name="month" id="month" class="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                  <option value="">Month</option>
                  <option value="">Month</option>
                  <option value="">Month</option>
                  <option value="">Month</option>
                </select>
              </div>
              <div class="my-1 ml-3 mr-6">
                <label for="year" class="sr-only">Select expiration year</label
                ><select name="year" id="year" class="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                  <option value="">Year</option>
                </select>
              </div>
              <div class="relative my-1"><label for="security-code" class="sr-only">Security code</label><input type="text" id="security-code" name="security-code" placeholder="Security code" class="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
            </div>
          </div> */}
        </form>
                <p class="mt-10 text-center text-sm font-semibold text-gray-500">By placing this order you agree to the <a href="#" class="whitespace-nowrap text-teal-400 underline hover:text-teal-600">Terms and Conditions</a></p>
<button type="submit" class="mt-4 inline-flex w-full items-center justify-center rounded bg-green py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"> 
<PaystackButton className={styles.button} {...componentProps} />
</button>
      </div>
    </div>
    <div class="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
      <h2 class="sr-only">Order summary</h2>
      <div>
        {/* <img src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" class="absolute inset-0 h-full w-full object-cover" /> */}
        <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
      </div>
      <div class="relative">
        <ul class="space-y-5">
        {cart.map((item) => (
          <li class="flex justify-between">
            <div class="inline-flex">
              <img src={item.image} alt="" class="max-h-16" />
              <div class="ml-3">
                <p class="text-base font-semibold text-white">{item.product}</p>
                <p class="text-sm font-medium text-white text-opacity-80">Pdf, doc Kindle</p>
              </div>
            </div>
            <p class="text-sm font-semibold text-white">N {formatter.format(`${item.quantity * item.price.toFixed(2)}`)}</p>
            <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
                </div>
          </li>
        )) }
        </ul>
        <div class="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
        <div class="space-y-2">
          <p class="flex justify-between text-lg font-bold text-white"><span>Total  excluding service fee:</span><span>N {formatter.format(`${getTotalPrice().toFixed(2) - delivery - dressing}`)}</span></p>
          <p class="flex justify-between text-sm font-medium text-white"><span>Dressing: </span><span>N {formatter.format(`${dressing}`)}</span></p>
          <p class="flex justify-between text-sm font-medium text-white"><span>Delivery: </span><span>N {formatter.format(`${delivery}`)}</span></p>
          <p class="flex justify-between text-xl font-bold text-white"><span>Total Due Today:</span><span>N {formatter.format(`${getTotalPrice().toFixed(2)}`)}</span></p>

        </div>
      </div>
      <div class="relative mt-10 text-white">
        <h3 class="mb-5 text-lg font-bold">Support Line</h3>
        <p class="text-sm font-semibold">+2348064266739 <span class="font-light"></span></p>
        <p class="mt-1 text-sm font-semibold">info@fastfarms.com.ng <span class="font-light">(Email)</span></p>
        <p class="mt-2 text-xs font-medium">Call us now for payment related issues</p>
      </div>
      <div class="relative mt-10 flex">
        <p class="flex flex-col"><span class="text-sm font-bold text-white">Money Back Guarantee</span><span class="text-xs font-medium text-white">within 30 days of purchase</span></p>
      </div>
    </div>
  </div>
     
</div>
 )}
    {/* {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
        <div classNameName={styles.itemOne}>

      
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item) => (
            <div className={styles.body}>
              <div className={styles.image}>
                <Image src={item.image} height="90" width="65" />
              </div>
              <p>{item.product}</p>
              <p>N {item.price}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>N {formatter.format(`${item.quantity * item.price.toFixed(2)}`)}</p>
            </div>
          ))}
          <h2>Grand Total: N {formatter.format(`${getTotalPrice().toFixed(2)}`)}</h2>

          <div className="checkout-form">
          <form>
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>
          <PaystackButton {...componentProps} />
        </div>
        </div>
        <div className="itemTwo">Sum</div>
        </>
      )} */}
      
    </div>
    </Layout>
  );
};

export default CartPage;