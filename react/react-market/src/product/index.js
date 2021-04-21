import {useParams} from 'react-router-dom';

function ProductPage() {
    const {id} = useParams();
    return <h1>제품 페이지{id}</h1>
}

export default ProductPage