def selectionSort(lst):
    for i in range(len(lst)):
        minindex = i
        for j in range(i+1, len(lst)):
            if (lst[j] < lst[minindex]):
                minindex = j
        lst[i], lst[minindex] = lst[minindex], lst[i]
    print(lst)
    return lst

selectionSort([1,4,2,3,6,3])