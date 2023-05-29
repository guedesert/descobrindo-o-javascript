// Função swap
const swap = (array, pos1, pos2) => {
  ;[array[pos1], array[pos2]] = [array[pos2], array[pos1]]
}

// Função shuffle
const shuffle = (array, numSwaps) => {
  for (let i = 0; i < numSwaps; i++) {
    const pos1 = Math.floor(Math.random() * array.length)
    const pos2 = Math.floor(Math.random() * array.length)
    swap(array, pos1, pos2)
  }
}

// Função bubble_sort
const bubble_sort = (array) => {
  const length = array.length
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }
    }
  }
}

// Função selection_sort
const selection_sort = (array) => {
  const length = array.length
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    swap(array, i, minIndex)
  }
}

// Função quick_sort
const quick_sort = (array, start, end) => {
  if (start < end) {
    const pivotIndex = particionamento(array, start, end)
    quick_sort(array, start, pivotIndex - 1)
    quick_sort(array, pivotIndex + 1, end)
  }
}

// Função de apoio a quick_sort
const particionamento = (array, start, end) => {
  const pivot = array[end]
  let i = start - 1
  for (let j = start; j < end; j++) {
    if (array[j] < pivot) {
      i++
      swap(array, i, j)
    }
  }
  swap(array, i + 1, end)
  return i + 1
}
