import s from './ProductSidebar.module.css'
import { useAddItem } from '@framework/cart'
import { FC, useEffect, useState } from 'react'
import { ProductOptions } from '@components/product'
import type { Product } from '@commerce/types/product'
import { Button, Text, Rating, Collapse, useUI } from '@components/ui'
import {
  getProductVariant,
  selectDefaultOptionFromProduct,
  SelectedOptions,
} from '../helpers'

interface ProductSidebarProps {
  product: Product
  className?: string
}

const ProductSidebar: FC<ProductSidebarProps> = ({ product, className }) => {
  const addItem = useAddItem()
  const { openSidebar } = useUI()
  const [loading, setLoading] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})

  return (
    <div className={className}>
      <Text className="pb-4 break-words w-full max-w-xl" html={product.title} />
      {/* <div className="flex flex-row justify-between items-center">
        <Rating value={4} />
        <div className="text-accent-6 pr-1 font-medium text-sm">36 reviews</div>
      </div> */}

      <div className="mt-6">
        {/* <Collapse title="Care">
          This is a limited edition production run. Printing starts when the
          drop ends.
        </Collapse> */}
        <Collapse open title="Details">
          {product.description}
        </Collapse>
      </div>
    </div>
  )
}

export default ProductSidebar
