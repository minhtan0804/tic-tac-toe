export const calcWinner = (cells, indexI, indexJ) => {
    const value = cells[indexI][indexJ];
    const size = cells.length;
    // console.log(value);


    const topLeftToRightBottom = (cells, indexI, indexJ) => {
        let count = 1;
        let i = indexI, j = indexJ;

        while(i > 0 && j > 0 && i >= indexI - 3 && cells[--i][--j] === value) count++;
        
        i = indexI; j = indexJ;
        while(i < size - 1 && j < size && j <= indexJ + 3 && cells[++i][++j] === value) count++;
        // console.log(`Test 1: ${count}`);
        return count >= 5;
    }
    
    const topRightToLeftBottom = (cells, indexI, indexJ) => {
        let count = 1;
        let i = indexI, j = indexJ;
        while (i < size - 1 && j > 0 && i <= indexI + 3 && cells[++i][--j] === value) count++;
        
        i = indexI; j = indexJ;
        while (i > 0 && j < size && i <= indexI - 3 && cells[--i][++j] === value) count++;
        
        // console.log(`Test 2: ${count}`);
        return count >= 5;
    }
    
    const vertical = (cells, indexI, indexJ) => {
        let count = 1;
        let i = indexI, j = indexJ;
        while (j > 0 && j >= indexJ - 3 && cells[i][--j] === value) count++;
        
        i = indexI; j = indexJ;
        while (j < size && j <= indexJ + 3 && cells[i][++j] === value) count++;
        
        // console.log(`Test 3: ${count}`);
        return count >= 5;
    }
    
    const horizontal = (cells, indexI, indexJ) => {
        let count = 1;
        let i = indexI, j = indexJ;
        while (i > 0 && i >= indexI - 3 && cells[--i][j] === value) count++;
        
        i = indexI; j = indexJ;
        while (i < size - 1 && i <= indexI + 3 && cells[++i][j] === value) count++;
        
        // console.log(`Test 4: ${count}`);
        return count >= 5;
    }

    return topLeftToRightBottom(cells, indexI, indexJ) || topRightToLeftBottom(cells, indexI, indexJ) || vertical(cells, indexI, indexJ) || horizontal(cells, indexI, indexJ);
}
