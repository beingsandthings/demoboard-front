import Board from "../api/api-model/Board";
import {getBoardList} from "../api/util/AxiosApi";
import {runInAction} from "mobx";

class BoardStateKeeper {
    private static _instance: BoardStateKeeper;

    board: Board | null = null;
    boardList: Board[] | null = null;

    static get instance() {
        if (!BoardStateKeeper._instance) {
            BoardStateKeeper._instance = new BoardStateKeeper();
        }
        return BoardStateKeeper._instance;
    }

    async findBoard(): Promise<Board[]> {
        const boards = await getBoardList();

        runInAction(() => this.boardList = boards)
        return boards;
    }

}
export default BoardStateKeeper;