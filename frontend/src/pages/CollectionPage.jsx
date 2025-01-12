import { useContext } from "react";
import { CreateContextApi } from "../context/MyContextApi";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const CollectionPage = () => {
    const context = useContext(CreateContextApi);
    const { products, loading } = context;
    let { id } = useParams();
    id = decodeURIComponent(id);
    console.log(id.replaceAll(' ', '-'), "id")
    const collectionProducts = products.filter((product) => product.category.name.replaceAll(' ', '-') === id.replaceAll(' ', '-'));
    if (loading) { 
        return <Spinner />
    }
    return (
        <div className="product-listing-wrap mx-container collection-page">
            <div className="product-listing-container">
                <h2 className="heading">{id}</h2>
                <div className="product-listing">
                    {collectionProducts.map((product) => {
                        return (

                            <Product key={product.id} post={product} />

                        )

                    })
                    }
                </div>
            </div>
        </div>
    );

}

export default CollectionPage;