function complexHashCode(str) {
  let hash = 0x811c9dc5;

  for (var i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
    hash = (hash ^ (hash >>> 13)) >>> 0;
    hash = (hash + (hash << 5)) >>> 0;
    hash = (hash ^ (hash >>> 17)) >>> 0;
    hash = (hash + (hash << 3)) >>> 0;
    hash = (hash ^ (hash >>> 11)) >>> 0;
  }
  return hash;
}

function intToHex(num) {
  var hex = num.toString(16);
  return hex.padStart(8, '0'); // Ensure it's at least 8 characters long
}

function generateDeterministicHash(key, salt) {
  // Concatenate the key and master key
  const input = key + salt;
  // Hash the concatenated string
  const hash = complexHashCode(input);
  // Convert the hash to a hex string
  const hexHash = intToHex(hash);
  // Manipulate the hash to meet deterministicHash complexity requirements
  // Ensure it includes at least one uppercase letter, one lowercase letter, and one digit
  let deterministicHash = hexHash.slice(0, 12);

  deterministicHash += String.fromCharCode(33 + (hash % 15)); // Add a special character from '!' to '/'
  deterministicHash += String.fromCharCode(65 + (hash % 26)); // Add an uppercase letter
  deterministicHash += String.fromCharCode(97 + (hash % 26)); // Add a lowercase letter
  deterministicHash += String.fromCharCode(48 + (hash % 10)); // Add a digit

  return deterministicHash;
}

module.exports = { generateDeterministicHash }
