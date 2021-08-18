import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import commerce, { getAllBrand } from '@lib/api/commerce'

export async function getSearchStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }
  const pagesPromise = commerce.getAllPages({ config, preview })
  const siteInfoPromise = commerce.getSiteInfo({ config, preview })
  const { pages } = await pagesPromise
  const brands = await getAllBrand()

  return {
    props: {
      pages,
      brands: brands.data,
    },
    revalidate: 200,
  }
}

export type SearchPropsType = InferGetStaticPropsType<
  typeof getSearchStaticProps
>
