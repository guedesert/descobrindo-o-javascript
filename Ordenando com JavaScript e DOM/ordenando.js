// Função para trocar os valores de duas posições em um vetor
function swap(array, pos1, pos2) {
  ;[array[pos1], array[pos2]] = [array[pos2], array[pos1]]
}

// Função para embaralhar os elementos de um vetor
function shuffle(array, swaps) {
  const len = array.length
  for (let i = 0; i < swaps; i++) {
    const pos1 = Math.floor(Math.random() * len)
    const pos2 = Math.floor(Math.random() * len)
    swap(array, pos1, pos2)
  }
}

// Função de ordenação Bubble Sort
function bubble_sort(array) {
  const len = array.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
      }
    }
  }
}

// Função de ordenação Selection Sort
function selection_sort(array) {
  const len = array.length
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      swap(array, i, minIndex)
    }
  }
}

// Função de ordenação Quick Sort
function quick_sort(array, start, end) {
  if (start < end) {
    const pivotIndex = partition(array, start, end)
    quick_sort(array, start, pivotIndex - 1)
    quick_sort(array, pivotIndex + 1, end)
  }
}

// Função de particionamento para Quick Sort
function partition(array, start, end) {
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