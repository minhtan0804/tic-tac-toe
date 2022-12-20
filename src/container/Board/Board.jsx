import Cell from "../../component/Cell/Cell";
import { Wrapper } from "./boardStyle";

const Board = (props) => {
    return (
        <Wrapper>
            {props.cells.map((element, indexI) => {
                return (
                    <div key={indexI}>
                        {element.map((subElement, indexJ) => {
                            let item = props.cells[indexI][indexJ];
                            return (<Cell
                                key={indexI + indexJ}
                                value={item}
                                onClick={() => props.onClick(indexI, indexJ)}
                                className={item === 'X' ? 'is-X' : item === 'O' ? 'is-O' : ''}
                            >
                            </Cell>
                            )
                        })}


                    </div>
                )
            })}
        </Wrapper >
    );
}

export default Board;