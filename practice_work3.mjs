import { Matrix } from "ml-matrix";

// Завдання 1

const myMatrix = Matrix.randInt(3, 3, { min: 2, max: 100 });

// Завдання 2

const moveRight = (matrix, amountOfPosition) => {
  for (let i = 0; i < amountOfPosition; i++) {
    matrix.addColumn(0, Array(matrix.arows).fill(0));
    matrix.removeColumn(matrix.columns - 1);
  }
};


const moveTop = (matrix, amountOfPosition) => {
    for (let i = 0; i < amountOfPosition; i++) {
        matrix.addRow(Array(matrix.columns).fill(0));
        matrix.removeRow(0);
    }
};

console.log(myMatrix)
moveTop(myMatrix, 1)
console.log(myMatrix)

// Завдання 3

const getMatrixSummaryAfterThirdEl = (matrix) => {
    matrix.removeColumn(0);
    matrix.removeColumn(0);
    matrix.removeColumn(0);

};

// Завдання 4

const substractRowMeanFromElement = (matrix) => {
    for (let i = 0; i < matrix.rows; i++) {
        const row = matrix.getRow(i);
        const rowSum = row.reduce((acc, curr) => (acc += curr));
        const rowMean = row.map((value) => value - rowSum / row.length);

        matrix.setRow(i, rowMean);
    }
};

// Завдання 5

const excludeAllColAndRowWithMaxValue = (matrix) => {
    const initialMaxValue = matrix.max();
    return function f() {
        const maxValue = matrix.max();
        if (maxValue !== initialMaxValue) {
            return matrix;
        }

        excludeColAndRowWithMaxValue(matrix);
        return f(maxValue);
    };
};


// Завдання 6

const replaceColWithMaxValueOnColWithMinValue = (matrix) => {
    const [_, maxValueColIndex] = matrix.maxIndex();
    const [__, minValueColIndex] = matrix.minIndex();

    const matrixClone = matrix.clone();

    const maxValueCol = matrixClone.getColumn(maxValueColIndex);

    console.log(maxValueCol)

    const minValueCol = matrixClone.getColumn(minValueColIndex);

    console.log(minValueCol)


    matrix.setColumn(maxValueColIndex, minValueCol);
    matrix.setColumn(minValueColIndex, maxValueCol);
};


replaceColWithMaxValueOnColWithMinValue(myMatrix);


// Завдання 7

const excludeColAndRowWithMaxValue = (matrix) => {
  const [rowIndex, columnIndex] = matrix.maxIndex();

  matrix.removeColumn(columnIndex);
  matrix.removeRow(rowIndex);
};












