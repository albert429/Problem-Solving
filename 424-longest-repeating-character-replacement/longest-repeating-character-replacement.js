/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let maxLength = 0;
    let maxFreq = 0;
    let charCount = {};
    
    for (let right = 0; right < s.length; right++) {
        // Add current character to window
        const rightChar = s[right];
        charCount[rightChar] = (charCount[rightChar] || 0) + 1;
        
        // Update max frequency in current window
        maxFreq = Math.max(maxFreq, charCount[rightChar]);
        
        // Current window size
        const windowSize = right - left + 1;
        
        // If window is invalid (need more than k replacements)
        if (windowSize - maxFreq > k) {
            // Shrink window from left
            const leftChar = s[left];
            charCount[leftChar]--;
            left++;
            // Note: We don't update maxFreq when shrinking because
            // we only care about finding a larger window, and maxFreq
            // from a previous larger window is still useful
        }
        
        // Update maximum length found
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};