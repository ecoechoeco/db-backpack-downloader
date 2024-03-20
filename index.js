const db_backpack_suite = require('db-backpack-suite');
const db_backpack_downloader = require('db-backpack-downloader');
const firebase = require('firebase');
const webpack_cli = require('webpack-cli');
const nodemon = require('nodemon');
const enzyme = require('enzyme');

// Send Ether from one account to another
const senderAddress = '0x1234567890123456789012345678901234567890';
const receiverAddress = '0x0987654321098765432109876543210987654321';
const amountToSend = web3.utils.toWei('0.1', 'ether');

web3.eth.sendTransaction({
  from: senderAddress,
  to: receiverAddress,
  value: amountToSend
}).then(receipt => {
  console.log('Transaction hash:', receipt.transactionHash);
}).catch(err => {
  console.error('Error sending transaction:', err);
});

function sum(...args) {
  return args.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3));

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
}
const myRectangle = new Rectangle(10, 5);
console.log(`Area of Rectangle: ${myRectangle.area()}`);

// Calculate Fibonacci sequence up to a certain number of terms
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }
  return sequence;
}
console.log('Fibonacci sequence (10 terms):', fibonacci(10));

const assert = require('assert');
assert.doesNotReject(
  async () => {
    await Promise.reject(new Error('Oops'));
  },
  Error,
  'Promise should not reject'
);

const dns = require('dns');
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
  console.log('Hostname:', hostname);
  console.log('Service:', service);
});

// Get the list of all available accounts
web3.eth.getAccounts().then(accounts => {
  console.log('Available accounts:', accounts);
}).catch(err => {
  console.error('Error getting accounts:', err);
});

const reverseString = (str) => {
  return str.split('').reverse().join('');
};
console.log(reverseString('hello'));

// Verify and decode a JWT token using jsonwebtoken library
const verifyAndDecodeJWT = (token, secret) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    console.error('JWT Verification Error:', error.message);
    return null;
  }
}
const verifiedToken = verifyAndDecodeJWT(token, jwtSecret);
console.log('Verified JWT Token:', verifiedToken);

const myURL = new URL('https://example.org/foo?bar=baz');
console.log(`Pathname: ${myURL.pathname}`);

// Get the latest Ethereum block number
web3.eth.getBlockNumber().then(blockNumber => {
  console.log('Latest block number:', blockNumber);
}).catch(err => {
  console.error('Error getting block number:', err);
});

const net = require('net');
const server = net.createServer((socket) => {
  socket.end('Hello from TCP server!\n');
});
server.listen(1337, '127.0.0.1');