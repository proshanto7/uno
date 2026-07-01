import Banner from '@/components/layout/home/Banner'
import Blog from '@/components/layout/home/blog/Blog'
import Category from '@/components/layout/home/category/Category'
import Content from '@/components/layout/home/content/Content'
// import Discount from '@/components/layout/home/discount/Discount'
import FeaturedProducts from '@/components/layout/home/product/FeaturedProducts'
// import Topselling from '@/components/layout/home/topSelling/Topselling'
import Whatsapp from '@/components/layout/home/whatsapp/Whatsapp'
import React from 'react'

function page() {
  return (
    <main>
      <Banner/>
      <Content/>
      <FeaturedProducts/>
      <Category/>
      {/* <Topselling/>
      <Discount/> */}
      <Blog/>
      <Whatsapp/>
      
    </main>
  )
}

export default page