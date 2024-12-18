import { Link } from "react-router-dom"

const Product=()=>{
    return(
        <>
        <Link to="createproduct">Create Product</Link>
        <Link to="getproduct">Get Product</Link>
        </>
    )
}
export default Product