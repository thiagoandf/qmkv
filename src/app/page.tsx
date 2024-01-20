import Control from 'qmkv/app/components/control'

const data = await import('qmkv/layouts/lilly58/default.json')

export default function HomePage() {
  console.log(data.default)

  return (
    <main className='flex min-h-screen flex-col items-center justify-center text-white'>
      <Control data={data.default} />
    </main>
  )
}
