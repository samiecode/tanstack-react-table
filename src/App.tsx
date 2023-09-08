import { useMemo } from 'react';
import './App.css'
import BasicTable from './components/BasicTable';
import mData from "./MOCK_DATA.json";
import { DateTime } from "luxon";

function App() {

  const data = useMemo(() => mData, []);

  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "Name",
      columns: [
        {
          header: "First",
          accessorKey: "first_name",
          footer: "First name",
        },
        {
          header: "Last",
          accessorKey: "last_name",
          footer: "Last name",
        },
      ],
    },
    // {
    //     header: "Name",
    //     accessorFn: row => `${row.first_name} ${row.last_name}`
    // },
    // {
    // 	header: "First name",
    // 	accessorKey: "first_name",
    // 	footer: "First name",
    // },
    // {
    // 	header: "Last name",
    // 	accessorKey: "last_name",
    // 	footer: "Last name",
    // },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
      footer: "Gender",
    },
    {
      header: "Date of Birth",
      accessorKey: "dob",
      footer: "Date of Birth",
      cell: (info) =>
        DateTime.fromISO(info.getValue()).toLocaleString(
          DateTime.DATETIME_MED
        ),
    },
  ];

  return (
    <>
      <h1>React Table</h1>
      <BasicTable data={data} columns={columns} />
    </>
  )
}

export default App
