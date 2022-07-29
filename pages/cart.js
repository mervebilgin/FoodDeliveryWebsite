import Layout from "../components/Layout";
import css from '../styles/Cart.module.css'
import Image from 'next/image'

export default function Cart() {
    const CartData = useStore((state)=>state.cart)

    return(
        <Layout>
           <div className={css.container}>
                <div className={css.details}>
                    <table className={css.table}>
                        <thead>
                            <th>Pizza</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </thead>

                        <tbody className={css.tbody}>
                            {CartData.pizzas.length > 0 &&
                            CartData.pizzas.map((pizza, i)=> {

                                const src = UrlFor(pizza.image).url()
                                
                                return(
                                <tr key={i}>
                                    <td>
                                        <Image 
                                        loader = {()=> src}
                                        className = {css.imageTd}
                                        alt = ""
                                        objectFit = "cover"
                                        width = {85}
                                        height = {85}
                                        />
                                    </td>

                                </tr>
                            )})
                            }

                        </tbody>

                    </table>
                
                </div>
                <div className={css.cart}>
                
                </div>
            
            </div> 

        </Layout>
    )
    
};
