let array = [5, 4, 3, 2, 1];
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j > 0; j--) {
            if(i<j){

                arr[j]=[arr[j-1]]

            }

        }

    }
    console.log(arr)
}

insertionSort(array)