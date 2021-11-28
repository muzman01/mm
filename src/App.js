import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const steem = require('steem');

function App() {
 
  const [data, setData] = useState(null);

  function getData(val){
   setData(val.target.value)
  }
  const ACCOUNT_NAME = data
        const WALLET_FILTER = 'transfer'
        steem.api.getAccountHistory(ACCOUNT_NAME, -1, 50, (err, result) => {
          let transfers = result.filter( tx => tx[1].op[0] === WALLET_FILTER )
          displayTransactions(transfers)
        });
        function displayTransactions(transactions){
          transactions.forEach((tx) => {
            let transfer = tx[1].op[1]
         
            console.log(transfer.from);
            console.log(transfer.to);
            console.log(transfer.amount);
            console.log(transfer.memo);
           
          });
        }
  return (
    <div className="App">
     <input type="text"
        onChange={getData}
     />
     
    </div>
  );
}

export default App;
