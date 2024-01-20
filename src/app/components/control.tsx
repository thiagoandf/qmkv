'use client'

import clsx from 'clsx'
import Keyboard from 'qmkv/app/components/keyboard'
import { lilly58 } from 'qmkv/layouts/lilly58/lilly58'
import { useCallback, useState } from 'react'

type Props = {
  data: {
    base: string[][]
    lower: string[][]
    raise: string[][]
  }
}

export default function Control({ data }: Props) {
  const [state, setState] = useState<'base' | 'lower' | 'raise'>('base')

  const handleStateChange = useCallback(
    (state: 'base' | 'lower' | 'raise') => () => {
      setState(state)
    },
    [],
  )

  const buttonClass = clsx(
    'flex h-24 w-24 items-center justify-center rounded-lg border px-4',
  )

  return (
    <>
      <div className='container flex flex-col items-center justify-center'>
        <Keyboard layout={lilly58} data={data[state]} />
      </div>
      <div className='container mt-16 flex flex-row items-center justify-center gap-4'>
        <button
          className={clsx(
            buttonClass,
            state === 'lower'
              ? 'border-white bg-gray-300 text-gray-900'
              : 'border-transparent bg-transparent text-white',
          )}
          onClick={handleStateChange('lower')}
        >
          ↓
        </button>
        <button
          className={clsx(
            buttonClass,
            state === 'base'
              ? 'border-white bg-gray-300 text-gray-900'
              : 'border-transparent bg-transparent text-white',
          )}
          onClick={handleStateChange('base')}
        >
          ◉
        </button>
        <button
          className={clsx(
            buttonClass,
            state === 'raise'
              ? 'border-white bg-gray-300 text-gray-900'
              : 'border-transparent bg-transparent text-white',
          )}
          onClick={handleStateChange('raise')}
        >
          ↑
        </button>
      </div>
    </>
  )
}
