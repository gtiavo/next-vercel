import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';



export default function ContactPage() {
  return (
   <MainLayout>
       <h2>Contact Page</h2>

<h1 className='title'>
  {/* Ir a <a href="/">Home</a> */}
  Ir a <Link href="/">Home</Link>
  <br/>
  Ir a <Link href="/about">About</Link>
</h1>

<p className='description'>
  Get started by editing{' '}
  <code className='code'>pages/contact.js</code>
</p>
   </MainLayout>

  )
}
