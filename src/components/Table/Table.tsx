import React, { useContext, useEffect, useMemo, useState } from 'react'
import {
  useTable,
  Column,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from 'react-table'
import SearchContext from 'contexts/searchContext'
import { Modal } from 'components'
import { parseCountryData } from 'utils/countriesTable'
import { Country, TableProps } from './types'
import './styles.scss'

const Table: React.FC<TableProps> = ({ data }) => {
  const [searchValue] = useContext(SearchContext)
  const [countryData, setCountryData] = useState<any>()
  const [modalState, setModalState] = useState<boolean>(false)
  const [pageNumber, setPageNumber] = useState(0)

  const fetchCountryData = async (countryName: string) => {
    setModalState(true)
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`,
    )
    const data = await response.json()

    setCountryData(parseCountryData(data[0]))
  }

  const columns: Column<Country>[] = useMemo(
    () =>
      [
        {
          Header: 'Flag',
          accessor: 'flag',
        },
        {
          Header: 'Country Name',
          accessor: 'name.common',
        },
        {
          Header: 'Capital Name',
          accessor: 'capital[0]',
        },
        {
          Header: 'Region',
          accessor: 'region',
        },
        {
          Header: 'Sub-region',
          accessor: 'subregion',
        },
        {
          Header: 'Language',
          accessor: (row) => Object.values(row.languages).sort().join(', '),
        },
        {
          Header: 'Currency with symbol',
          accessor: (row) =>
            Object.values(row.currencies)
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((currency) => `${currency.name} (${currency.symbol})`)
              .join(', '),
        },
        {
          Header: 'Independent (Yes/No)',
          accessor: 'independent',
          sortType: (a, b) =>
            +a.original.independent > +b.original.independent ? 1 : -1,
          Cell: ({ value }) => (value ? 'Yes' : 'No'),
        },
        {
          Header: 'Area (sq/km)',
          accessor: 'area',
        },
      ] as Column<Country>[],
    [],
  )
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: pageNumber,
        pageSize: 10,
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = tableInstance

  useEffect(() => {
    setGlobalFilter(searchValue)
  }, [searchValue])

  return (
    <>
      <Modal data={countryData} modalState={[modalState, setModalState]} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                let sortIcon = ''
                if (column.isSorted) {
                  sortIcon = column.isSortedDesc ? ' 🔽' : ' 🔼'
                }
                return (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>{sortIcon}</span>
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <tr
                {...row.getRowProps()}
                onClick={() => fetchCountryData(row.original.name.common)}
              >
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button
          type="button"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {'<<'}
        </button>
        <button
          type="button"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {'<'}
        </button>
        <button
          type="button"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {'>'}
        </button>
        <button
          type="button"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </button>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            value={pageNumber}
            onChange={(e) => {
              setPageNumber(+e.target.value)
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                gotoPage(pageNumber < 1 ? 0 : pageNumber - 1)
              }
            }}
            style={{ width: '50px' }}
          />
        </span>
        <select
          id="page-size"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default Table
