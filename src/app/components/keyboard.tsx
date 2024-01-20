import Key from 'qmkv/app/components/key'
import { type Layout } from 'qmkv/types/key'

type Props = {
  layout: Layout
  data: string[][]
}

export default function Keyboard({ layout, data }: Props) {
  return (
    <div className='flex w-full flex-col justify-center gap-1'>
      {layout.map((row, i) => {
        let keyTracker = -1
        return (
          <div key={i} className='flex w-full flex-row justify-center gap-1'>
            {row.map((key, j) => {
              if (!key.blank) {
                keyTracker++
              }
              return (
                <Key key={j} singleKey={key} keyValue={data[i]?.[keyTracker]} />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
