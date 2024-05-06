function toUpperCase(text) {
    return text.toUpperCase();
}

// Function to convert text to lowercase
function toLowerCase(text) {
    return text.toLowerCase();
}

// Function to convert text to title case
function toTitleCase(text) {
    return text.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

// Function to reverse a string
function reverseString(text) {
    return text.split('').reverse().join('');
}

module.exports = {
    toUpperCase,
    toLowerCase,
    toTitleCase,
    reverseString
};