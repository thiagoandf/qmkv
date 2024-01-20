import Key from 'qmkv/app/components/key'
import { type Layout } from 'qmkv/types/key'

type Props = {
  layout: Layout
}

export default function Keyboard({ layout }: Props) {
  return (
    <div className='flex w-full flex-col justify-center gap-1'>
      {layout.map((row, i) => (
        <div key={i} className='flex w-full flex-row justify-center gap-1'>
          {row.map((key, j) => (
            <Key key={j} singleKey={key} />
          ))}
        </div>
      ))}
    </div>
  )
}
