import type { Meta, StoryObj } from "@storybook/react"
import { createColumnHelper } from "@tanstack/react-table"
import { DataTable } from "./data-table"

const meta: Meta<typeof DataTable> = {
  component: DataTable,
  title: "Ui/DataTable",
  tags: ["autodocs"],
  argTypes: {
    data: {
      description: "The data to display in the table.",
      control: { type: "object" },
    },
    columns: {
      description: "The column definitions for the table.",
      control: { type: "object" },
    },
    isSortable: {
      description: "Enable sorting for the table.",
      control: { type: "boolean" },
      defaultValue: true,
    },
    enablePagination: {
      description: "Enable pagination for the table.",
      control: { type: "boolean" },
      defaultValue: true,
    },
    getRowCanExpand: {
      description: "Function to determine if a row can be expanded.",
    },
    renderSubComponent: {
      description: "Function to render the content of an expanded row.",
    },
    tableId: {
      description: "Unique ID for the table state persistence.",
      control: { type: "text" },
    },
  },
}

export default meta
type Story = StoryObj<typeof DataTable>

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor("firstName", {
    cell: (info) => info.getValue(),
    header: "First Name",
  }),
  columnHelper.accessor("lastName", {
    cell: (info) => info.getValue(),
    header: "Last Name",
  }),
  columnHelper.accessor("age", {
    header: "Age",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("visits", {
    header: "Visits",
  }),
  columnHelper.accessor("status", {
    header: "Status",
  }),
  columnHelper.accessor("progress", {
    header: "Profile Progress",
  }),
]

const data: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
]

export const Default: Story = {
  args: {
    tableId: "test-table",
    data,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: columns as unknown as any,
    getRowCanExpand: () => false,
    isSortable: true,
    enablePagination: true,
  },
}

export const Expandable: Story = {
  args: {
    tableId: "expandable-table",
    data,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: columns as unknown as any,
    enablePagination: true,
    getRowCanExpand: () => true,
    isSortable: true,
    renderSubComponent: () => <div>expended</div>,
  },
}
