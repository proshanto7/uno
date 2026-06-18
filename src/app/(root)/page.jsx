import Banner from '@/components/layout/home/Banner'
import Content from '@/components/layout/home/content/Content'
import React from 'react'

function page() {
  return (
    <main className='mb-20'>
      <Banner/>
      <Content/>
    </main>
  )
}

export default page