
class Board {

    id: string;
    userId: string;
    title: string;
    content: string;
    password: string;
    date: string;
    hit: string;

    constructor(id: string, userId: string, title: string, content: string, password: string, date: string, hit: string) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.content = content;
        this.password = password;
        this.date = date;
        this.hit = hit;
    }

}
export default Board;