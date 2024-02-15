import { useContext } from 'react'

import TableContext from './TableContext'

const isNumber = x => typeof x === 'number'

const isString = x => typeof x === 'string'

const sum = nums => nums.reduce((a, b) => a + b, 0)

const avg = nums => sum(nums) / nums.length

export const calcGridTemplateColumns = columns => {
  const widths = columns.map(column => column.width)

  const avgNumericWidth = avg(widths.filter(isNumber))

  return columns
    .map(({ width }) => {
      if (isString(width)) {
        return width
      }
      if (isNumber(width)) {
        return width <= 1
          ? `${width}fr`
          : `minmax(${width}px, ${width / avgNumericWidth}fr)`
      }
      return '1fr'
    })
    .join(' ')
}

export const useTable = () => useContext(TableContext)
