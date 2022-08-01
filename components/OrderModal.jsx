import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import toast, {Toaster} from "react-hot-toast"
import {useStore} from "../store/store";
import { createOrder } from "../lib/orderHandler";
import css from "../styles/OrderModal.module.css";

export default function OrderModal({opened, setOpened, PaymentMethod}) {
    const theme = useMantineTheme();
    const [FormData, setFormData] = useState({})

    const handleInput = (e)=> {
        setFormData({...FormData, [e.target.name]: e.target.value})
    }

    const resetCart = useStore((state)=>state.resetCart)

    const total = typeof window !== 'undefined' && localStorage.getItem('total')

    const handleSubmit = async (e)=> {
        e.preventDefault();
        const id = await createOrder({...FormData, total, PaymentMethod})
        toast.success("Order Placed");
        resetCart();
        {
            typeof window !== 'undefined' && localStorage.setItem('order', id)
        }

    }
    return(
        <Modal
        overLayColor = {theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overLayOpacity = {0.55}
        overLayBlur = {3}
        opened = {opened}
        onClose = {()=>setOpened(null)}
        >
            {/* Modal Content */}
            <form onSubmit={handleSubmit} className={css.formContainer}>
                <input onChange={handleInput} type="text" name = 'name' required placeholder="Name" />
                <input onChange={handleInput} type="text" name = 'phone' required placeholder="Phone Number" />
                <textarea onChange={handleInput} name="address" rows={3} placeholder='Address'></textarea>

                <span>
                    You will pay <span>$ {total}</span> on delivery
                </span>

                <button type="submit" className="btn">Place Order</button>
            </form>
            <Toaster/>
        </Modal>
    )
        
};
