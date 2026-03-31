import { products } from "@/app/products-data";
import { NextRequest } from "next/server";

type Params = {
    id:string
}

export async function GET(request : NextRequest,{params} : {params:Promise<Params>} ){
    const {id} =  await params;
    const product = products.find((p)=> p.id === id);
    if(!product){
        return new Response(JSON.stringify({message : "Product not found"}) ,{
            status : 404
        })
    }
    return new Response(JSON.stringify(product) ,{
        status: 200,
        headers : {
            'Content-Type' : 'application/json'
        }

    });
}