import React, { useMemo } from 'react'
import { useTable, Column } from 'react-table'
import { Country, Language, TableProps } from './types'
import './index.scss'

const FlagImage = ({ value }: { value: string }) => value
const Table = (props: TableProps) => {
  const { data } = props

  const columns: Column<Country>[] = useMemo(
    () =>
      [
        {
          Header: 'Flag',
          accessor: 'flag',
          Cell: FlagImage,
        },
        {
          Header: 'Country Name',
          accessor: 'name',
          Cell: ({ value: name }: { value: any }) => name.official,
        },
        {
          Header: 'Capital Name',
          accessor: (country: Country) => country.capital,
        },
        {
          Header: 'Region',
          accessor: (country: Country) => country.region,
        },
        {
          Header: 'Sub-region',
          accessor: (country: Country) => country.subregion,
        },
        {
          Header: 'Language',
          accessor: (country: Country) => country.languages,
          Cell: ({ value: languages }: { value: Language }) => {
            return Object.values(languages).join(', ')
          },
        },
        {
          Header: 'Currency with symbol',
          accessor: (country: Country) => country.currencies,
          Cell: ({ value }: { value: any }) => {
            const currencies = Object.values(value)
            return currencies
              .map((currency: any) => {
                return `${currency.name} (${currency.symbol})`
              })
              .join(',')
          },
        },
        {
          Header: 'Independent (Yes/No)',
          accessor: (country: Country) => country.independent,
          Cell: ({ value }: { value: any }) => (value ? 'Yes' : 'No'),
        },
        {
          Header: 'Area (sq/km)',
          accessor: (country: Country) => country.area,
        },
      ] as Column<Country>[],
    [],
  )

  const tableInstance = useTable({ columns, data })
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
    // apply the table props
    <table {...getTableProps()}>
      <thead>
        {
          // Loop over the header rows
          headerGroups.map((headerGroup) => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((column) => (
                  // Apply the header cell props
                  <th {...column.getHeaderProps()}>
                    {
                      // Render the header
                      column.render('Header')
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows
          rows.map((row) => {
            // Prepare the row for display
            prepareRow(row)
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell) => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {
                          // Render the cell contents
                          cell.render('Cell')
                        }
                      </td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table
