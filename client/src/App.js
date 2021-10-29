import React, {useState } from 'react';
import './App.css';
import getWeb3 from './getWeb3';
import NFTCONTRACT from './artifacts/NFTCONTRACT.json';
const App = () => {
  const [web3,setweb3]=useState();
  const [account,setaccount]=useState();
  const [contract,setcontract]=useState();
  const [networkName,setnetworkName]=useState("Wallet not");
  const [Balance,setBalance]=useState();
  const [Screen,setScreen]=useState();
  const [OwnerAddress,setOwnerAddress]=useState();
  const [NewOwnerAddress,setNewOwnerAddress]=useState('j');
  const [OperatorAddress,setOperatorAddress]=useState('j');
  const [Approvedbool,setApprovedbool]=useState(false);
  const [TokenId,setTokenId]=useState();
  const [Toaddress,setToaddress]=useState('j');
  const [Fromaddress,setFromaddress]=useState('j');
  const [Amount,setAmount]=useState();
 const connect = async () => {
      const Web3 = await getWeb3();
      setweb3(Web3);
      const accounts = await Web3.eth.getAccounts();
      setaccount(accounts[0]);
      const balance = await Web3.eth.getBalance(accounts[0]);
      // console.log(balance);
      setBalance(balance);
       const networkId = await Web3.eth.net.getId();
       if(networkId===1){
        setnetworkName("Mainnet")
        alert("Connect to Rinkeby network otherwise it won't work")
      }else if(networkId===3){
        setnetworkName("Ropsten")
        alert("Connect to Rinkeby network otherwise it won't work")
      }else if(networkId===42){
        setnetworkName("Kovan")
        alert("Connect to Rinkeby network otherwise it won't work")
      }else if(networkId===4){
        setnetworkName("Rinkeby")
      }else if(networkId===5){
        setnetworkName("Goerli")
        alert("Connect to Rinkeby network otherwise it won't work")
      }else if(networkId===5777){
        setnetworkName("Ganache")
        alert("Connect to Rinkeby network otherwise it won't work")
      }else{
        setnetworkName("Undefined")
        alert("Connect to Rinkeby network otherwise it won't work")
      }
       const deployedNetwork = NFTCONTRACT.networks[networkId];
       const instance = new Web3.eth.Contract(
         NFTCONTRACT.abi,
         deployedNetwork && deployedNetwork.address);
         setcontract(instance);
 }
connect();
const owner=async ()=>{
  if(networkName!=="Rinkeby"){
    alert("Connect to Rinkeby network otherwise it won't work")
  }else{
    await contract.methods.owner().call((err,result)=>{setScreen(result)});
  }
}
const tokenURI=(event)=>{
  setTokenId(event.target.value);
}
const Tokenid=async ()=>{
if(networkName!=="Rinkeby"){
  alert("Connect to Rinkeby network otherwise it won't work")
}else{
  await contract.methods.uri(TokenId).call((err,result)=>{setScreen(result)});
}
}
const owneraddress=(event)=>{
    setOwnerAddress(event.target.value);
}
const balance=async ()=>{
  if(networkName!=="Rinkeby"){
    alert("Connect to Rinkeby network otherwise it won't work")
  }else if(OwnerAddress.length!==42){
    alert("Enter the correct Rinkeby account address to see the balance.copy the address from your wallet")
  }else{
    await contract.methods.balanceOf(OwnerAddress,TokenId).call((err,result)=>{setScreen(result)});
  }
}
const balanceBatch=async ()=>{
  if(networkName!=="Rinkeby"){
    alert("Connect to Rinkeby network otherwise it won't work")
  }else{
    await contract.methods.balanceOfBatch(OwnerAddress,TokenId).call((err,result)=>{setScreen(result)});
// alert(OwnerAddress);
// alert(TokenId);
  }
}
const ownerof=async ()=>{
  if(networkName!=="Rinkeby"){
    alert("Connect to Rinkeby network otherwise it won't work")
  }else if(TokenId>99){
    alert("Enter the correct token Id")
  }else{
    await contract.methods.ownerOf(TokenId).call((err,result)=>{setScreen(result)});

  }

}
const toaddress=(event)=>{
  setToaddress(event.target.value);
}
const operatoraddress=(event)=>{
  setOperatorAddress(event.target.value);
}
const isApprovedForAll= async()=>{
  if(networkName!=="Rinkeby"){
    alert("Connect to Rinkeby network otherwise it won't work")
  }else if(OwnerAddress.length!==42){
    alert("Enter the correct Rinkeby account address to see the allowance.copy the address from your wallet")
  }else if(Toaddress.length!==42){
    alert("Enter the correct Rinkeby account address to see the allowance.copy the address from your wallet")
  }else{
    await contract.methods.isApprovedForAll(OwnerAddress,Toaddress).call((err,result)=>{setScreen(result)});

  }
}
const amount=(event)=>{
  setAmount(event.target.value);
}
const mintTokens= async()=>{
  if(Amount<1){
    alert(` Negative amoun of tokekns can not be minted`)
  }else if(networkName!=="Rinkeby"){
    alert("Connect to Rinkeby network otherwise it won't work")
  }else{
    await contract.methods.mint(OwnerAddress,TokenId,Amount).send({from:account});
  }
}
const burn= async()=>{
  if(networkName!=="Rinkeby"){
    alert("Connect to Rinkeby network otherwise it won't work")
  }else{
    await contract.methods.burn(OwnerAddress,TokenId,Amount).send({from:account});

  }
}
const fromaddress=(event)=>{
  setFromaddress(event.target.value);
}
const safetransferfrom= async()=>{
  if(networkName!=="Rinkeby"){
    alert("Connect to Rinkeby network otherwise it won't work")
  }else if(Toaddress.length!==42){
    alert("Enter the correct to address to see the allowance.")
  }else if(Fromaddress.length!==42){
    alert("Enter the correct From address to see the allowance.")
  }else{
    await contract.methods.safeTransferFrom(Fromaddress,Toaddress,TokenId,Amount,"0x12").send({from:account});

  }
}
const approvedbool=(event)=>{
  setApprovedbool(event.target.value)
}
const setapprovalforall= async()=>{
  if(networkName!=="Rinkeby"){
    alert("Connect to Rinkeby network otherwise it won't work")
  }else if(OperatorAddress.length!==42){
    alert("Enter the correct to address to see the allowance.")
  }else{
    await contract.methods.setApprovalForAll(OperatorAddress,Approvedbool).send({from:account});
  }
}
const setnewowneraddress=(event)=>{
  setNewOwnerAddress(event.target.value);
}
const changeownership= async()=>{
  if(networkName!=="Rinkeby"){
    alert("Connect to Rinkeby network otherwise it won't work")
  }else if(NewOwnerAddress.length!==42){
    // alert(NewOwnerAddress.length)
    alert(`Address length is ${NewOwnerAddress.length}.It should be 42 character.Enter the correct address to change the Ownership.`)
  }else{
    await contract.methods.transferOwnership(NewOwnerAddress).send({from:account});
  }
}
const restart=()=>{
 window.location.reload(false);
}
  return (
    <>
  <div className="page">  
  <nav className="navbar">
  <div className="upper">
      <h4>{networkName} Connected</h4>
      <h4>Balance: {Balance} wei</h4>
      <button className="btn" onClick={restart}><h4>Connect to Wallet</h4></button></div>
  <div className="lower">Account:{account}</div>
  </nav>
  <div className="Main">
  <div className="section">
  <div className="screen">{Screen}</div>
      <button className="btn2" onClick={()=>owner()}> Owner</button>
      <input className="input" placeholder="Token Id" type="string" onChange={tokenURI}></input>
      <button className="btn2" onClick={()=>Tokenid()}>Token URI</button>
  <input className="input" placeholder="Account address" type="string" onChange={owneraddress}></input>
  <input className="input" placeholder="Token id" type="number" onChange={tokenURI}></input>
      <button className="btn2" onClick={()=>balance()}>Balance of</button>
      {/* <input className="input" placeholder="Account address" type="text" onChange={owneraddress}></input>
  <input className="input" placeholder="Token id" type="text" onChange={tokenURI}></input>
      <button className="btn2" onClick={()=>balanceBatch()}>Balance of batch</button> */}
  <input className="input" placeholder="Token id" type="number" onChange={tokenURI}></input>
      <button className="btn2" onClick={()=>ownerof()}>Owner of</button>
  <input className="input" placeholder="Owner address" type="string" onChange={owneraddress}></input>
  <input className="input" placeholder="Operater address" type="string" onChange={toaddress}></input>
      <button className="btn2" onClick={()=>isApprovedForAll()}>Is approved for all</button>
      <h1>Writing data</h1>
      <input className="input" placeholder="Owner address" type="string" onChange={owneraddress}></input>
  <input className="input" placeholder="Token id" type="number" onChange={tokenURI}></input>
  <input className="input" placeholder="Amount of tokens" type="number" onChange={amount}></input>
      <button className="btn2" onClick={()=>mintTokens()}>Mint new tokens</button>
  <input className="input" placeholder="Owner address" type="string" onChange={owneraddress}></input>
  <input className="input" placeholder="Token id" type="number" onChange={tokenURI}></input>
  <input className="input" placeholder="Amount of tokens" type="number" onChange={amount}></input>
      <button className="btn2" onClick={()=>burn()}>Burn my own tokens </button>
  <input className="input" placeholder="From address" type="string" onChange={fromaddress}></input>
  <input className="input" placeholder="To address" type="string" onChange={toaddress}></input>
  <input className="input" placeholder="Token id" type="number" onChange={tokenURI}></input>
  <input className="input" placeholder="Amount of tokens" type="number" onChange={amount}></input>
  <button className="btn2" onClick={()=>safetransferfrom()}>Safe transfer token from</button>
  <input className="input" placeholder="Operator address" type="string" onChange={operatoraddress}></input>
  <input className="input" placeholder="Approved true or false" type="bool" onChange={approvedbool}></input>
  <button className="btn2" onClick={()=>setapprovalforall()}>Set approval for all</button>
  <input className="input" placeholder="new Owner address" type="string" onChange={setnewowneraddress}></input>
  <button className="btn2" onClick={()=>changeownership()}>Change Ownership</button>
  </div>
      
  </div>
  </div>
    </>
  )
}
export default App;
