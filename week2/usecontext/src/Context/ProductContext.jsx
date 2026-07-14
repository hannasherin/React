import { createContext } from "react";

export const ProductContext=createContext()

function ProductProvider({children}){
    const Product=[
        {
          productName : "Smart Watch",
          description :  "A modern smartwatch with fitness tracking and notifications.",
          price: 1999
        },
        {
          productName:"Classy Watch",
          description :  "A modern smartwatch with fitness tracking and notifications.",
          price: 1999
        },
        {
          productName:"Luxury Watch",
          description :  "A modern smartwatch with fitness tracking and notifications.",
          price: 1999  
        }
    ]
    return(
        <>
        <ProductContext.Provider>

        </ProductContext.Provider>
        
        </>
    )
}
export default ProductProvider