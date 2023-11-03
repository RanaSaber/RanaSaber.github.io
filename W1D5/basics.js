function add(a, b) {
    return a+b;
}

function getMax(a, b, c) {
    let max = a;

    if (b > max)
        max = b;

    if (c > max)
        max = c;

    return max;
}

function multipleOfThree(arr) {
    let sum = 0;

    for(let n of arr) {
        if (n%3 == 0) {
            sum += n;
        }
    }

    return sum;
}

function isPalindrom(s) {
    let i = 0;
    let j = s.length -1;

    while (j >= i) {
        if (s.charAt(i) != s.charAt(j)) {
            return false;
        }

        i++;
        j--;
    }

    return true;
}

function isVowel(a) {
    if (['a', 'e', 'i', 'u', 'o'].includes(a)) {
        return true;
    }

    return false;
}

function getLongestWords(arr, i) {
    let result = [];

    for (let s of arr) {
        if (s.length > i) {
            result.push(s);
        }
    }

    return result;
}

function removeApple(arr) {
    let result = [];

    for(let s of arr) {
        if (s != "apple") {
            result.push(s);
        }
    }

    return result;
}

function replicateSlice(arr, start, end) {
    let result = [];

    for(let i=start; i<end; i++) {
        result.push(arr[i]);
    }

    return result;
}

function replicateSplice(arr, position, deleted, items) {
    let result = [];

    for (let i=0; i<position; i++) {
        result.push(arr[i]);
    }

    for (let item of items) {
        result.push(item);
    }

    for (let i=position+deleted; i<arr.length; i++) {
        result.push(arr[i]);
    }

    return result;
}

function replicateSplit(str, sep) {
    let result = [];
    let i = 0;
    let temp = "";

    for (let j=0; j< str.length; j++) {
        if (str[j] == sep) {
            while (i < j) {
                temp += str[i];
                i++
            }
            result.push(temp);
            temp = "";
            i++;
        }
    }

    if (i < str.length) {
        while (i < str.length) {
            temp += str[i];
            i++
        }
        result.push(temp);
    }

    return result;
}

// console.log(isPalindrom("asddsa"))
// console.log(isVowel('b'))
// console.log(getLongestWords(["asdf", "asdggg", "dadafaf", "df", "dadADd"], 5))
// console.log(removeApple(["apple", "fsffg", "fasfafa", "apple", "fsefsdg", "apple"]))
// console.log(replicateSlice(["aa", "bb", "cc", "dd", "ee"], 1, 4))
// console.log(replicateSplice(["aa", "bb", "cc", "dd", "ee"], 2, 2, ["add1", "add2", "add3"]))
// console.log(replicateSplit("aa,bb,ccccc,ddd,ddddd", ","))