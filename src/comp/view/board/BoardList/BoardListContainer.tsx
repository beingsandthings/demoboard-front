import {observer, useLocalObservable} from "mobx-react";
import {AgGridReact} from "ag-grid-react";
import {Fragment, useEffect, useState} from "react";
import Board from "../../../api/api-model/Board";
import {getBoardList} from "../../../api/util/AxiosApi";
import {GridApi} from "ag-grid-community";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import BoardStateKeeper from "../../../state/BoardStateKeeper";

const BoardListContainer = observer (
    () => {

        // const [rowData, setRowData] = useState<Board[]>([]);
        // const [gridApi, setGridApi] = useState(new GridApi());

        const boardStateKeeper = useLocalObservable(() => BoardStateKeeper.instance);

        boardStateKeeper.findBoard();

        const { boardList } = boardStateKeeper;


        // const onGridReady = (params: any) => {
        //     setGridApi(params.api);
        //     console.log(params.api)
        // };

        // useEffect(() => {
        //     // init();
        //     boardStateKeeper.findBoard().then(res => console.log("Res", res));
        //     console.log("boardList", boardList);
        // }, [])
        //
        // const init = () => {
        //     getBoardList().then(r => {
        //         setRowData(r);
        //         console.log("r : ", r);
        //     });
        // };

        const columnDefs = [
            { headerName: '', field: 'index', cellRenderer: (params: { rowIndex: number; }) => <>{params.rowIndex + 1}</>, flex:1},
            { headerName: 'title', field: 'title', flex:2},
            { headerName: 'writer', field: 'userId', flex:2},
        ];

    return (
        <Fragment>
            <div>Board</div>
            <div className="ag-theme-alpine" style={{height:500, width:600}}>
                <AgGridReact
                    rowData={boardList}
                    columnDefs={columnDefs}
                />
            </div>
        </Fragment>
    );
});
export default BoardListContainer;