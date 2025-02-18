// Pick an element in the array and designate it as the "pivot". While there are quite a few options for choosing the pivot. We'll make things simple to start, and will choose the pivot as the first element. This is not an ideal choice, but it makes the algorithm easier to understand for now.

// Next, compare every other element in the array to the pivot.

// If it's less than the pivot value, move it to the left of the pivot.

// If it's greater, move it to the right.

// Once you have finished comparing, the pivot will be in the right place.

// Next, recursively call quicksort again with the left and right halves from the pivot until the array is sorted.
