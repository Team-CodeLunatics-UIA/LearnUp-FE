import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

// REACT ICONS
import { BiSortUp } from "react-icons/bi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";
import { BsSortDownAlt, BsSortDown } from "react-icons/bs";

// REACT TABLE
import MOCK_DATA from "../../../Utils/MOCK_DATA.json";
import { useTable, useSortBy, useFilters, usePagination } from "react-table";
import { format } from "date-fns";

import styles from "../../../styles/Dashboard/reports.module.css";
import { ColumnFilter } from "./ColumnFilter";
import ReviewReports from "./ReviewReports";

const COLUMNS = [
  {
    Header: "S. No.",
    accessor: "id",
    width: 50,
    Filter: ColumnFilter,
    Cell: (row) => {
      return <div>{row.row.index + 1}</div>;
    },
  },
  {
    Header: "Report Number",
    accessor: "report_num",
    width: 250,
    Filter: ColumnFilter,
  },
  {
    Header: "Report Title",
    accessor: "title",
    width: 200,
    Filter: ColumnFilter,
  },
  {
    Header: "Date",
    accessor: "date",
    // Cell: ({ value }) => {
    //   return format(new Date(value), "dd/MM/yyyy");
    // },
    Filter: ColumnFilter,
  },
  {
    Header: "View",
    accessor: "view_report",
    name: "def",
    type: "button",
    Cell: () => "View",
    disableFilters: true,
  },
];

const Reports = () => {
  //to store the values once and for all
  const [toggleFilter, setToggleFilter] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const [viewReport, setViewReport] = useState(false);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <div className={styles.alertsContainer}>
      {viewReport && (
        <ReviewReports
          handleClose={() => {
            setViewReport(!viewReport);
          }}
        />
      )}
      <div className={styles.alertHeaderContainer}>
        <p>Staff Reports</p>

        <div className={styles.tableOperations + " " + styles.clrGrey}>
          <div className={styles.operation}>
            <BiSortUp />
            <p>Sort</p>
          </div>
          <div
            className={styles.operation}
            onClick={() => {
              setToggleFilter(!toggleFilter);
            }}
          >
            <FaFilter />
            <p>Filter</p>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table} {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className={styles.tableHeaderRow + " " + styles.clrGrey}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <BsSortDown />
                        ) : (
                          <BsSortDownAlt />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                    <div className={styles.filter}>
                      {toggleFilter && (column.canFilter ? column.render("Filter") : null)}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return cell?.column?.type === "button" ? (
                      <td className={styles.tableSingleCell} {...cell.getCellProps()}>
                        <button
                          onClick={() => {
                            //change it when get original json data from backend
                            // setEvent(cell.row.original);
                            if (cell?.column?.id === "view_report") {
                              setViewReport(!viewReport);
                            } else if (cell?.column?.id === "status") {
                              //   setReviewReport(!reviewReport);
                            }
                          }}
                          //   disabled={cell?.column?.id === "status" && isDisabled(cell.row.original)}
                          className={`
                            ${cell?.column?.id === "status" && styles.status} ${styles.button} 
                            `}
                        >
                          {cell.render("Cell")}
                        </button>
                      </td>
                    ) : (
                      <td className={styles.tableSingleCell} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.footer}>
        <div className={styles.rowsPerPage}>
          <p>Go to Page: </p>
          <input
            type="number"
            placeholder="Page Number"
            onChange={(e) => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(pageNumber);
              setPageIndex(
                e.target.value <= Math.ceil(data?.length / 10) ? e.target.value : pageIndex
              );
              //   setPageIndex(e.target.value <= Math.ceil(eventState?.length / 10) ? e.target.value : Math.ceil(eventState?.length / 10));
            }}
          />
        </div>
        <div className={styles.rowsPerPage}>
          <p>
            {" "}
            {/* Page: {pageIndex > 1 ? pageIndex : 1} of {Math.ceil(eventState?.length / 10)} */}
            Page: {pageIndex} of {Math.ceil(data?.length / 10)}
          </p>
          <button
            className={styles.backForth}
            onClick={() => {
              previousPage();
              setPageIndex(parseInt(pageIndex) - 1);
            }}
            disabled={!canPreviousPage}
          >
            <FiArrowLeft />
          </button>
          <button
            className={styles.backForth}
            onClick={() => {
              nextPage();
              setPageIndex(parseInt(pageIndex) + 1);
            }}
            disabled={!canNextPage}
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
