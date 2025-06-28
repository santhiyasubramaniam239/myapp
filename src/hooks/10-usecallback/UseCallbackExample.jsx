import { useCallback, useEffect, useState } from "react"

export default function UseCallbackExample(){
    const [productId, setProductId] = useState(1);
    const [price, setPrice] = useState(100);
    const [discountPrice, setDiscountPrice] = useState(100);
    const [note, setNote] = useState("");

    useEffect(()=>{
        const basePrices = {
            1:100,
            2:200,
            3:300
        }
        setPrice(basePrices[productId])
    },[productId])

    const calculateDiscount = useCallback(()=>{
        console.log('Calculating Discount...');
        let discount=0;
        if(productId===1){
            discount=0.1;
        }
        else  if(productId===2){
            discount=0.15;
        }else{
            discount=0.2;
        }

        setDiscountPrice(price-(price* discount));
    },[productId])
   useEffect(()=>{
     calculateDiscount();
   },[calculateDiscount])

    return <div>
        <h1> UseCallback Example</h1>
        <h2>Product ID:{productId}</h2>
        <h2>Original Price: ${price}</h2>
        <h2>Discounted Price: ${discountPrice}</h2>

        <div>
            <button onClick={()=> setProductId(1)}>Product 1</button>
            <button onClick={()=> setProductId(2)}>Product 2</button>
            <button onClick={()=>setProductId(3)}>Product 3</button>
        </div>

        <div style ={{marginTop:"1em"}}>
            <h4>Not (won't trigger discount calculation)</h4>
            <input
               type="text"
               value={note}
               onChange={(e) => setNote(e.target.value)}
               placeholder="Type your note here"/>
               <p>Current note:{note}</p>
        </div>
    </div>
}