import dynamic from 'next/dynamic'
import { container } from '../styles/styles.css'

const CountryForm = dynamic(() => import('@/components/CountryForm'), { ssr: false })

export default async function Home() {
  return (
    <main>
      <div className={container}>
        <h1>Create your travel plans. Select a country</h1>

        <CountryForm />
      </div>
    </main>
  )
}
