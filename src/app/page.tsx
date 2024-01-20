import Keyboard from 'qmkv/app/components/keyboard'
import { lilly58 } from 'qmkv/layouts/lilly58'

export default function HomePage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center text-white'>
      <div className='container flex flex-col items-center justify-center'>
        <Keyboard layout={lilly58} />
      </div>
    </main>
  )
}
