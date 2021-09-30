import { getCommerceApi } from '@framework/api'
import axios from 'axios'

export async function getAllPostsForHome(preview?: object) {
  try {
    const entries = await axios.get(`${process.env.API}home`)
    return entries.data
  } catch (error) {

  }
}

export async function getAllBrand(preview?: object) {
  const entries = await axios.get(`${process.env.API}brand/list`)
  return entries.data
}
export async function getAllProducts(preview?: object) {
  const entries = await axios.get(`${process.env.API}allProducts`)
  return entries.data
}

export async function getProduct(slug?: string) {
  const entries = await axios.get(`${process.env.API}product/${slug}`)
  return entries.data
}

export default getCommerceApi()
