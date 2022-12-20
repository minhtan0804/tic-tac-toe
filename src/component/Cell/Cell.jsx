import { Wrapper } from "./cellStyle";

const Cell = ({ value, onClick, className }) => {
    // if (value !== null) {
    //     console.log(1515);
    // }

    return (
        <Wrapper
            onClick={onClick}
            className={className}
            color={className}
        >
            {value}
        </Wrapper>
    );
}

export default Cell;