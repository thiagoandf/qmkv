import clsx from 'clsx'
import { qmkToReadableKeycodeMapping } from 'qmkv/app/const/qmkToReadable'
import { type Key } from 'qmkv/types/key'

type Props = {
  singleKey: Key
  keyValue: string | undefined
}

export default function Key({ singleKey, keyValue }: Props) {
  let content = null
  let size = 'w-24 h-24'

  if (!singleKey.blank) {
    content = keyValue
  }

  switch (singleKey.type) {
    case '1.5u':
      size = 'w-36 h-24'
      break
    case '2u':
      size = 'w-48 h-24'
      break
    case '2.25u':
      size = 'w-56 h-24'
      break
    case '2.75u':
      size = 'w-64 h-24'
      break
    case '3u':
      size = 'w-72 h-24'
      break
    default:
      break
  }

  if (content && qmkToReadableKeycodeMapping[content]) {
    content = qmkToReadableKeycodeMapping[content]
  }

  return (
    <button
      disabled={singleKey.blank}
      className={clsx(
        'flex items-center justify-center rounded-lg border',
        singleKey.blank ? 'border-transparent' : 'border-white',
        size,
      )}
    >
      {content}
    </button>
  )
}
