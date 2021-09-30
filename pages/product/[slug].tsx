import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import { useRouter } from 'next/router'
import commerce, {getProduct,getAllProducts} from '@lib/api/commerce'
import { Layout } from '@components/common'
import { ProductView } from '@components/product'



export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const {data} = await getProduct(params!.slug)
const {product,
    relatedProducts } = data



  if (!product) {
    throw new Error(`Product with slug '${params!.slug}' not found`)
  }

  return {
    props: {
      product,
      relatedProducts
    },
    revalidate: 200,
  }
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const { data } = await getAllProducts()
  return {
    paths: data.map((product: any) => `/product/${product.slug}`),
    fallback: 'blocking',
  }
}

export default function Slug({
  product,
  relatedProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  return router.isFallback ? (
    <h1>Loading...</h1>
  ) : (
    <ProductView product={product} relatedProducts={relatedProducts} />
  )
}

Slug.Layout = Layout
