/** product: calculate the product of an array of numbers. */
function product(nums, i = 0) {
  if (i === nums.length) {
    return 1;
  } else {
    return nums[i] * product(nums, i + 1);
  }
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  if (words.length === 0) {
    return 0;
  } else if (words.length === 1) {
    return words[0].length;
  }

  let wordLen = longest(words.slice(1));
  if (words[0].length >= wordLen) {
    return words[0].length;
  } else {
    return wordLen;
  }
}

/** everyOther: return a string with every other letter. */
function everyOther(str) {
  if (str.length === 0) {
    return "";
  }

  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val, idx = 0) {
  if (arr.length === 0) {
    return -1;
  }

  if (arr[0] === val) { 
    return idx;
  } else {
    return findIndex(arr.slice(1), val, idx + 1);
  }
}

/** revString: return a copy of a string, but in reverse. */
function revString(str) {
  if (str.length === 0) {
    return "";
  }

  return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */
// doesn't work for nested objects
function gatherStrings(obj) {
  function explore(values, idx = 0, strings = []) {
    if (idx === values.length) {
      return strings;
    } else if (typeof values[idx] === 'string') {
      strings.push(values[idx]); 
      return explore(values, idx + 1, strings);
    } else {
      return explore(values, idx + 1, strings);
    }
  }
  return explore(Object.values(obj));
}

/** binarySearch: given a sorted array of numbers, and a value, return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val) {
  function helper(left, right) {
    if (left > right) {
      return -1;
    }
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      return helper(mid + 1, right);
    } else {
      return helper(left, mid - 1);
    }
  }
  return helper(0, arr.length - 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
