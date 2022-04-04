
import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';



export default function HomePage() {
  return (
   <MainLayout>
      <h2>Home Page</h2>


<h1 className='title'>
  {/* Ir a <a href="/about">About</a> */}
 Ir a <Link href="/about">About</Link>
 <br/>
  Ir a <Link href="/contact">Contact</Link>
</h1>

<p className='description'>
  Get started by editing{' '}
  <code className='code'>pages/index.js</code>
</p>

   </MainLayout>
  )
}
