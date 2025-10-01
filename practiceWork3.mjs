// Увага! Щоб перевірити роботу коду, Вам необхідно розкоментовувати код запуску кожного завдання окремо, інакше він не буде працювати
import { Matrix } from "ml-matrix";

// Створення матриці

const myMatrix = Matrix.randInt(4, 4, { min: 2, max: 100 });
console.log(myMatrix);
// Завдання 1

const moveRight = (matrix, amountOfPosition) => {
  for (let i = 0; i < amountOfPosition; i++) {
    matrix.addColumn(0, Array(matrix.rows).fill(0));
    matrix.removeColumn(matrix.columns - 1);
  }
};

// moveRight(myMatrix, 2);
// console.log(myMatrix);

const moveTop = (matrix, amountOfPosition) => {
  for (let i = 0; i < amountOfPosition; i++) {
    matrix.addRow(Array(matrix.columns).fill(0));
    matrix.removeRow(0);
  }
};

// moveTop(myMatrix, 2);
// console.log(myMatrix);

// Завдання 2

const getMatrixSummaryAfterThirdEl = (matrix) => {
  matrix.removeColumn(0);
  matrix.removeColumn(0);
  matrix.removeColumn(0);

  console.log("Summ = ", matrix.sum());
};

// getMatrixSummaryAfterThirdEl(myMatrix);



// Завдання 3

const substractRowMeanFromElement = (matrix) => {
  for (let i = 0; i < matrix.rows; i++) {
    const row = matrix.getRow(i);
    const rowSum = row.reduce((acc, curr) => (acc += curr));
    const rowMean = row.map((value) => value - rowSum / row.length);

    matrix.setRow(i, rowMean);
  }
};

// substractRowMeanFromElement(myMatrix);
// console.log(myMatrix);


// Завдання 4

const excludeAllColAndRowWithMaxValue = (matrix) => {
    const initialMaxValue = matrix.max();

    function f() {
        if (matrix.rows === 0 || matrix.columns === 0) {
            return matrix;
        }

        const maxValue = matrix.max();
        if (maxValue !== initialMaxValue) {
            return matrix;
        }

        // --- Ось фікс: maxIndex() повертає масив [row, column]
        const [row, column] = matrix.maxIndex();
        matrix.removeRow(row);
        matrix.removeColumn(column);

        return f();
    }

    return f();
};

// excludeAllColAndRowWithMaxValue(myMatrix);
// console.log(myMatrix.toString());



// Завдання 5

const replaceColWithMaxValueOnColWithMinValue = (matrix) => {
    const [_, maxValueColIndex] = matrix.maxIndex();
    const [__, minValueColIndex] = matrix.minIndex();

    const matrixClone = matrix.clone();

    const maxValueCol = matrixClone.getColumn(maxValueColIndex);
    const minValueCol = matrixClone.getColumn(minValueColIndex);

    matrix.setColumn(maxValueColIndex, minValueCol);
    matrix.setColumn(minValueColIndex, maxValueCol);
};

// replaceColWithMaxValueOnColWithMinValue(myMatrix);
// console.log(myMatrix);

// Завдання 6

const excludeColAndRowWithMaxValue = (matrix) => {
  const [rowIndex, columnIndex] = matrix.maxIndex();

  matrix.removeColumn(columnIndex);
  matrix.removeRow(rowIndex);
};

// excludeColAndRowWithMaxValue(myMatrix);
// console.log(myMatrix);

