import react from "react";
import { useParams } from "react-router-dom";
import { updateProduct } from "../apiAdapter";

const EditProduct = (props) => {
const {productId} = useParams();
const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [img, setImg] = useState("");


const handleEdit =  async (e) => {
    e.preventDefault();
    const editedProduct = await updateProduct(routineId, name, price, img_url);
    console.log(editedProduct)
};

return (
    <div>
        <form onSubmit={handleEdit}>
        <label className="productLabel"> Product Name: </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="productLabel"> Product Price</label>
        <input
          type="text"
          required
          value={price}
          onChange={(e) => setGoal(e.target.value)}
        ></input>
        <label htmlFor="img_url"> Product Image </label>
        <input
          type="text"
          name="img"
          value={img} // does value needs to be something else?
          onChange={(e) => setImg(e.target.value)}
        />
        <button>Edit Routine</button>
        </form>
    </div>
)

}

export default EditProduct;