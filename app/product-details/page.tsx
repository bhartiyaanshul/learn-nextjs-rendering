import { Product } from "@/components/product";
import { Review } from "@/components/review";
import { Suspense } from "react";

export default function ProductDetailsPage() {
    return (
        <div>
            <h1>Product Details Page</h1>
            <Suspense fallback={<div>Loading...</div>} >
                <Product />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>} >
                <Review />
            </Suspense>
        </div>
    )
}