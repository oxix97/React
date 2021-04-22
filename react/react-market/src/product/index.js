import {useParams} from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from "react";

function ProductPage() {
    const {id} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://a25c0af4-74d9-4935-b479-c512eabf252a.mock.pstmn.io/products/${id}`)
            .then(function (result) {
                const products = result.data.products;
                setProducts(products);
            })
            .catch(function (error) {
                console.error("error : ", error);
            });
            console.log(products.data);
        return <h1>제품 페이지{id}</h1>
    }, []);
}

export default ProductPage