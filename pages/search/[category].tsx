import { getSearchStaticProps } from '@lib/search-props'
import type { GetStaticPathsResult, GetStaticPropsContext } from 'next'
import Search from '@components/search'

export async function getStaticProps(context: GetStaticPropsContext) {
  console.log(context);
  
  return getSearchStaticProps(context)
}


export function getStaticPaths(paths): GetStaticPathsResult {
  console.log(paths);
  
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export default Search
