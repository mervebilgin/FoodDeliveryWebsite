import create from 'zustand'

export const useStore = create(
    (set) => ({

        //cart
        cart : {
            pizzas: []
        }, 

        // add Pİzza in cart
        addPizza: (data)=>
        set((state) => ({
            cart: {
                pizzas: [...state.cart.pizzas, data]
            }
        })),

        //Remove pizza
        removePizza : (index)=> 
        set((state)=> ({
            cart : {
                pizzas :  state.cart.pizzas.filter((_, i)=> i!=index)
            }

        })),

        resetCart: () =>
        set(()=> ({
            cart: {
                pizzas: []
            }
        }))

    })
)