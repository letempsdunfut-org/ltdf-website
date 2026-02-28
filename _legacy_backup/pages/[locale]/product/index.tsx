import {getStaticPaths, makeStaticProps} from '../../../lib/getStatic'
import React from "react";
import ProductPage from "../../../components/page/ProductPage";

const getStaticProps = makeStaticProps(['product', 'common']);
export {getStaticPaths, getStaticProps};

export default function Product() {
    return (
        <ProductPage/>
    )
}

