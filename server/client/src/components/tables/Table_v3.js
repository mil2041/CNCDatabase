import React, { useState } from "react";
import { useTable, useSortBy, usePagination, useGlobalFilter } from "react-table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSVLink } from 'react-csv';
import { resetWarningCache } from "prop-types";

const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef
  
      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])
  
      return <input type="checkbox" ref={resolvedRef} {...rest} />
    }
)


const TableController = ({data}) => {

    const tableLength = data.length;

    const headers = [
        { label: 'PMID', key: 'pmid'},
        { label: 'Cancer Type', key: 'cancertype'},
        { label: 'Gene Name', key: 'gene'},
        { label: 'Element', key: 'element'},
        { label: 'Mutated Samples', key: 'mutatedsamplesize'},
        { label: 'Cohort Samples', key: 'cohortsize'},
        { label: 'Evidence Type', key: 'evidencetype'},
        { label: 'Evidence Method', key: 'evidencemethod'},
      ];



    return(
       <div className="d-flex justify-content-between"> 
                  <div className="p-2">
                    Returned {tableLength} entries
                  </div>
                  
                  <div className="p-2">  
                    <CSVLink
                      uFEFF={false}
                      data={data}
                      headers={headers} 
                      filename={"SearchResults.csv"}
                      className="btn btn-outline-primary btn-sm"
                      target="_blank"
                    >
                      Download CSV 

                    </CSVLink>
                  </div>  
               
       </div>
   );
}




export default function Table({ columns, data }) {

  const [filterInput, setFilterInput] = useState("");
  // Use the state and functions returned from useTable to build your UI

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    //rows,
    prepareRow,
    flatColumns,
    getToggleHideAllColumnsProps,
    setGlobalFilter,
    //setFilter,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },

  } = useTable(
    {
      columns,
      data
    },
    //useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setGlobalFilter(value);
    setFilterInput(value);
  };

  console.log("flatColumns",flatColumns)

  // Render the UI for your table
  return (
    <div>

       <TableController 
            data={data}
       /> 
       <div className="search">
         <span className="fa-icon"><FontAwesomeIcon icon="search" color="grey" size="1x"/></span>  
         <input
            type="text"
            className="react-table-input"
            value={filterInput}
            onChange={handleFilterChange}
            placeholder={"Search"}
         />
       </div> 

       <div className="d-flex flex-wrap">
         <div className="mr-3 my-3">
           <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} /> Toggle All
         </div>

         {flatColumns.map(column => (
           <div key={column.id} className="mr-3 my-3">
             <label>
               <input type="checkbox" {...column.getToggleHiddenProps()} />{' '}
              
               {column.id}
             </label>
           </div>
          ))}

        
      </div>


      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >  
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span className="ml-2">
                  
                    {column.isSorted
                      ? column.isSortedDesc
                        ? <FontAwesomeIcon icon="caret-down" color="black" size="1x"/>
                        : <FontAwesomeIcon icon="caret-up" color="black" size="1x"/>
                      : ""}
                  </span>
                  
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="react-table-pagination">
        <span>
          Showing { pageSize * pageIndex + 1 } to {pageSize * (pageIndex + 1)} of 58 entries
        </span> 

        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}

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
            className="react-table-input"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '50px' }}
          />
        </span>{' '}

        <span className="mr-2">Show</span>
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[5, 10, 20, 30, 40, 50].map(pageSize => (
             <option key={pageSize} value={pageSize}>
               {pageSize}
            </option> 
          ))}
        </select> <span>entries</span>
      </div>




    </div>
  );
}