import './table.css';

interface TableProps {
    title?: string,
    tableData?: string[][] | any[][],

}

export const Table = ({ }: TableProps) => {

    // const data = [
    //     ["Name", "Salary"],
    //     ["Mike", { v: 10000, f: "$10,000" }],
    //     ["Jim", { v: 8000, f: "$8,000" }],
    //     ["Alice", { v: 12500, f: "$12,500" }],
    //     ["Bob", { v: 7000, f: "$7,000" }],
    // ];

    // const INNERHEIGHT = 50; //pixels
    // const chartAreaHeight = (data.length - 1) * INNERHEIGHT;

    // const options = {
    //     title: "Company Performance",
    //     columns: "",
    //     data: data,
    //     curveType: "function",
    //     legend: { position: "bottom" },
    //     'chartArea': {
    //         'backgroundColor': {
    //             'fill': '#F4F4F4',
    //             'opacity': 100
    //         },
    //     },
    //     allowHtml: true,
    //     showRowNumber: false,
    //     cssClassNames: {
    //         tableCell: 'table-cell'
    //     },
    //     height: chartAreaHeight,
    // };

    return (
        <div className="table-wrapper">
            <table>

            </table>
        </div>
    );
}