function convertToSlug(text) {
    return text.toLowerCase()
               .replace(/[^\w ]+/g, '')
               .replace(/ +/g, '-');
  }

module.exports = convertToSlug