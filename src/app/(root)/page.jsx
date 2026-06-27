import Banner from '@/components/layout/home/Banner'
import Category from '@/components/layout/home/category/Category'
import Content from '@/components/layout/home/content/Content'
import Discount from '@/components/layout/home/discount/Discount'
import FeaturedProducts from '@/components/layout/home/product/FeaturedProducts'
import Topselling from '@/components/layout/home/topSelling/Topselling'
import React from 'react'

function page() {
  return (
    <main className='mb-20'>
      <Banner/>
      <Content/>
      <FeaturedProducts/>
      <Category/>
      <Topselling/>
      <Discount/>
      
    </main>
  )
}

export default page