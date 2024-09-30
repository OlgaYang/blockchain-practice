# blockchain-practice

## setup env
```
npm i ethers
npm i dotdev
```

## interact with chain (use node.js)
```
node app.js
```
- Case 1: Get balance 
- Case 2: Get latestBlock
- Case 3: Send transaction

## interact with contract (2 ways)

### Run on browser( connect with MetaMask)
Run server 
```
npx http-server
```
- Enter this url (http://192.168.1.103:8080/web/interactWithContract.html)
- click button "Send NFT" => console will error because no more NFT balance
- click button "check Balance" => console will show '1n'

### Run to Node.js (use private key)
```
node node .\interactContract.js
```
