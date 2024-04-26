function longestSubstring(s) {
    let maxLength = 0;
    let charSet = new Set();
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        while (charSet.has(currentChar)) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(currentChar);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

module.exports = { longestSubstring };
