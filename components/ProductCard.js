// import Image from 'next/image';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../redux/cart.slice';
// import styles from '../styles/ProductCard.module.css';

// const ProductCard = ({ product }) => {
//   const dispatch = useDispatch();

//   return (
//     <div className={styles.card}>
//       <Image src={product.image} height={300} width={220} />
//       <h4 className={styles.title}>{product.product}</h4>
//       <h5 className={styles.category}>{product.category}</h5>
//       <p>$ {product.price}</p>
//       <button
//         onClick={() => dispatch(addToCart(product))}
//         className={styles.button}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;
import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product}) => {

    var formatter = new Intl.NumberFormat({
        style: 'currency',
        currency: 'NGN',
    
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    
    const dispatch = useDispatch();
  return (
    <div className="max-w-xs rounded overflow-hidden">
      <img className="w-full h-78 object-cover" src={product.image} alt={product.product} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.product}</div>
        <div className="text-gray-700 text-base">N {formatter.format(`${ product.price}`)} / Kg</div>
        <button
         onClick={() => dispatch(addToCart(product))}
         className={styles.button}
       >
         Add to Cart
       </button>
       
      </div>
    </div>
);
};

export default ProductCard;




