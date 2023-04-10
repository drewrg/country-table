import React, { useMemo } from 'react'
import { useTable, Column, useSortBy } from 'react-table'
import { Country, TableProps } from './types'
import './index.scss'

const Table = (props: TableProps) => {
  const { data } = props

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

  const tableInstance = useTable({ columns, data }, useSortBy)
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
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
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
