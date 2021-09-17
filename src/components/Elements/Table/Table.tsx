import React, { Fragment } from 'react'
import { classNames } from '../../helpers/methods'

const sampleData = [
  {
    key: 'jane.cooper@example.com',
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'jane.cooper@example.com',
  },
  // More people...
]

const sampleColumns: TableColumnData[] = [
  {
    key: 'name',
    label: 'Name',
    value: ['name'],
    render: (value) => (
      <Table.Cell className="font-medium text-gray-900" value={value} />
    ),
  },
  {
    key: 'title',
    label: 'Title',
    value: ['title'],
    render: (value) => <Table.Cell className="text-gray-500" value={value} />,
  },
  {
    key: 'email',
    label: 'Email',
    value: ['name'],
    render: (value) => <Table.Cell className="text-gray-500" value={value} />,
  },
  {
    key: 'role',
    label: 'Role',
    value: ['name'],
    render: (value) => <Table.Cell className="text-gray-500" value={value} />,
  },
  {
    key: 'action',
    label: 'Action',
    labelHidden: true,
    render: (_, item) => (
      <Table.Cell className="text-right font-medium">
        <a href="#" className="text-primary-600 hover:text-primary-900">
          Edit
        </a>
      </Table.Cell>
    ),
  },
]

export type TableColumnData = {
  key: string
  label: string
  render: (value: any, item: any) => JSX.Element | null
  labelHidden?: boolean
  value?: string[]
}

export type TableProps = {
  data?: any[]
  columns?: TableColumnData[]
}

export type TableColumnProps = {
  label: string
  labelHidden?: boolean
}

const TableColumn: React.FC<TableColumnProps> = ({ label, labelHidden }) => (
  <th
    scope="col"
    className={
      labelHidden
        ? 'relative px-6 py-3'
        : 'px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider'
    }
  >
    {labelHidden ? <span className="sr-only">{label}</span> : label}
  </th>
)

const TableCell: React.FC<any> = ({
  className = 'text-gray-500',
  value,
  children,
}) => (
  <td className={classNames('px-6 py-4 whitespace-nowrap text-sm', className)}>
    {children ?? value}
  </td>
)

const TableComponent: React.FC<TableProps> = ({
  data = sampleData,
  columns = sampleColumns,
}) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-primary-50">
                <tr>
                  {columns.map((column) => (
                    <TableColumn
                      key={column.key}
                      label={column.label}
                      labelHidden={column.labelHidden}
                    />
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, itemIndex) => (
                  <tr key={item.key}>
                    {columns.map((column, columIndex) => (
                      <Fragment key={`cell-${itemIndex}-${columIndex}`}>
                        {column.render(
                          getNestedValueFromItem(item, column.value),
                          item,
                        )}
                      </Fragment>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Table = Object.assign(TableComponent, {
  Cell: TableCell,
})

export default Table

function getNestedValueFromItem(item: object, value?: string[]) {
  let nestedValue: any = item
  value?.forEach((key) => {
    nestedValue = nestedValue[key]
  })
  return nestedValue
}
