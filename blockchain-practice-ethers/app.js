const { ethers } = require("ethers");
require('dotenv').config();

const infuraUrl = 'https://sepolia.infura.io/v3/' + process.env.APIKey;
const provider = new ethers.JsonRpcProvider(infuraUrl);

(async () => {
    // Case 1: Get balance 
    const address = '0x8c7FCcC3a250dbc7dBD0c9DFB1edacc43D5B1ac8';
    getBalance(address);

    // Case 2: Get latestBlock
    //getLatestBlock();

    // Case 3: Send transaction
    // const toAddress = '0x80D7eBD09d72a3F8a259f7b42355878794461d5b';
    // const amountInEther = '0.001';
    // sendTransaction(toAddress, amountInEther);

})();


async function sendTransaction(toAddress, amountInEther) {
    try {

        const signer = new ethers.Wallet(process.env.PrivateKey, provider);

        const tx = await signer.sendTransaction({
            to: toAddress,
            value: ethers.parseUnits(amountInEther, 'ether'),
        });

        console.log(tx)
        console.log(`Transaction Hash: ${tx.hash}`);

        const receipt = await tx.wait();
        console.log(`Transaction mined in block ${receipt.blockNumber}`);
        console.log(receipt)
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
}

async function getLatestBlock() {
    try {
        // way 1 - get latest driectly
        // const block = await provider.getBlock('latest');

        // way 2 - get latest block number first then get block
        const latestNumber = await provider.getBlockNumber();
        const block = await provider.getBlock(latestNumber);
        console.log(block);

    } catch (error) {
        console.error('Error fetching latest block:', error);
    }
}

async function getBalance(address) {
    try {
        console.log(`Address: ${address}`);
        const balance = await provider.getBalance(address);
        console.log(`Wei Balance: ${balance}`)
        const formattedBalance = ethers.formatEther(balance)
        console.log(`ETH Balance: ${formattedBalance} ETH`);
    } catch (error) {
        console.error('Error fetching balance:', error);
    }
}
