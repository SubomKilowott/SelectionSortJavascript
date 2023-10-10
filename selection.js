function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}

function sortArray() {
    const inputValues = document.getElementById("input_values").value;
    const valuesArray = inputValues.split(",").map(value => parseFloat(value.trim()));

    const sortedArray = selectionSort(valuesArray);

    document.getElementById("result").textContent = "Sorted Array: " + sortedArray.join(", ");
}
