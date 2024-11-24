let array = [21, 4, 67, 90, -1, 55, 12]

function bubbleSortStrings(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n -1 ; j++) {

            if (arr[j] > arr[j + 1]) {

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    console.log(arr);
}

bubbleSortStrings(array);

