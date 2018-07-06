const fibonaci = (value) => {
    const arr = []
    arr.push(1)
    arr.push(1)


    for(let i =  1; i < value - 1; i++)
        arr.push(arr[i] + arr[i -1])

    return arr
}

export default fibonaci