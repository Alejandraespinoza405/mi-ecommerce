'use server';

import { axiosApiBack } from "./utils";


export const getProducts = async () => {
    try {
        const res = await axiosApiBack.get('/products');

        if(!res.data || !Array.isArray(res.data)){
        console.warn('Invalidad products data format', res.data);
        return [];
    } 
    return res.data;
}catch(error){
      if(error instanceof Error){
        console.warn("Error fetching products list", error?.message)
      }
      return [];
    }  
}
export const getProductById = async (id: string): Promise<IProduct | null> => {
    try {
        const res = await axiosApiBack.get('/products/' + id);

        if(!res.data){
        console.warn('Invalidad product data format', res.data);
        return null;
    } 
    return res.data;
}catch(error){
      if(error instanceof Error){
        console.warn("Error fetching product", error?.message)
      }
      return null;
    }  
}