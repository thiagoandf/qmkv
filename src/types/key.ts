export type Key = {
  type: '1u' | '1.5u' | '2u' | '2.25u' | '2.75u' | '3u'
  blank?: boolean
}

export type Row = Key[]
export type Layout = Row[]
