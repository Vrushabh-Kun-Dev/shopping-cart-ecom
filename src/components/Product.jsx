import {items} from "./Data"

const Product = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            {
                items.map((product)=>{
                    return(
                        <>
                        
                        </>
                    )
                })
            }
          </div>
        </div>
      </>
    );
}

export default Product;