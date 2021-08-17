import { getCommerceApi } from '@framework/api'
import axios from 'axios'

export async function getAllPostsForHome(preview?: object) {
  const entries = await axios.get(`${process.env.API}home`)
  return entries.data
}

export default getCommerceApi()
