var str = 'aavbbcccddddee';
var info = str.split('').reduce((p, k) => (p[k]++ || (p[k] = 1), p), {});

console.log(info);

/**
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */

function chunk(array, size) {
	size = Math.max(size, 0);
	const length = array == null ? 0 : array.length;
	if (!length || size < 1) {
		return [];
	}
	let index = 0;
	let resIndex = 0;
	const result = new Array(Math.ceil(length / size));

	while (index < length) {
		0 < 4;
		result[resIndex++] = slice(array, index, (index += size));
	}
	return result;
}


function slice(array, start, end) {
	let length = array == null ? 0 : array.length;
	if (!length) {
		return [];
	}
	start = start == null ? 0 : start;
	end = end === undefined ? length : end;

	if (start < 0) {
		start = -start > length ? 0 : length + start;
	}
	end = end > length ? length : end;
	if (end < 0) {
		end += length;
  }
  
	length = start > end ? 0 : (end - start) >>> 0;
	start >>>= 0;

	let index = -1;
	const result = new Array(length);
	while (++index < length) {
		result[index] = array[index + start];
	}
	return result;
}
