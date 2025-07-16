import {items} from "./Data"

const Product = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            {
                items.map((product)=>{
                    return (
                      <>
                        <div className="col-lg-4 my-3 text-center">
                          <div className="card" style={{ width: "18rem" }}>
                            <img
                              src={product.imgSrc}
                              className="card-img-top"
                              alt="Product Image"
                            />
                            <div className="card-body">
                              <h5 className="card-title">{product.title}</h5>
                              <p className="card-text">{product.description}</p>
                              <button className="btn btn-primary mx-3">{product.price}{" "}₹</button>
                              <button className="btn btn-warning">Add To Cart</button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                })
            }
          </div>
        </div>
      </>
    );
}

export default Product;