import { useMemo } from 'react'

type UsePaginationProps = {
  totalCount: number
  pageSize: number
  siblingCount?: number
  currentPage: number
  /** Máximo de números de página visíveis (ex.: 3 => [1, ..., 5, ..., 10]) */
  maxVisiblePages?: number
}

const DOTS = '...'

const range = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
  maxVisiblePages = 3
}: UsePaginationProps) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)
    if (totalPageCount <= 0) return []
    if (totalPageCount <= maxVisiblePages) {
      return range(1, totalPageCount)
    }

    const first = 1
    const last = totalPageCount

    // No máximo 3 números por vez: primeiro, atual (ou vizinho), último
    if (currentPage === first) {
      if (last <= 3) return range(1, last)
      return [first, first + 1, DOTS, last]
    }
    if (currentPage === last) {
      if (last <= 3) return range(1, last)
      return [first, DOTS, last - 1, last]
    }
    return [first, DOTS, currentPage, DOTS, last]
  }, [totalCount, pageSize, currentPage, maxVisiblePages])

  return paginationRange
}