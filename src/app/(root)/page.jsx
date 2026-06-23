import Banner from '@/components/layout/home/Banner'
import Content from '@/components/layout/home/content/Content'
import FeaturedProducts from '@/components/layout/home/product/FeaturedProducts'
import React from 'react'

function page() {
  return (
    <main className='mb-20'>
      <Banner/>
      <Content/>
      <FeaturedProducts/>
      
    </main>
  )
}

export default page