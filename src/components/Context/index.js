import { createContext, Component } from "react";
import Web3 from "web3";
import { abi as crankCoinABI } from "../../contracts/CrankCoin.json";
import { getNormalTransactions } from "../Helper";

const web3Context = createContext();

class Web3Provider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            loading: true,
            web3: null,
            user: null,
            contract: null,
            crankCoinTokenAddress: null,
            userTransactionList: null
        }
    }

    async componentDidMount() {
        await this.connectDapp();
    }

    // loadWeb3
    loadWeb3 = async () => {
        try {
            const crankCoinTokenAddress = "0x327e4D69870794d3a75D2F5961d667EA8F5112A3";

            const ethereum = window.ethereum;
            await ethereum.enable();
            
            // Get Network / chainId
            const _chainId = await ethereum.request({ method: 'eth_chainId' });
            if(parseInt(_chainId, 16) !== 42) return alert("Connect wallet to a Kovan network");

            const _accounts = await ethereum.request({ method: 'eth_accounts' });
            const web3 = new Web3(ethereum);
            const user = web3.utils.toChecksumAddress(_accounts[0]);
            ethereum.autoRefreshOnNetworkChange = false;

            this.setState({
                web3,
                user,
                crankCoinTokenAddress
            })
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    }

    // load blockchain data
    loadBlockchainData = async ({ web3, crankCoinTokenAddress, user } = this.state) => {
        try {
            if(!web3) return;
            let contract = new web3.eth.Contract(crankCoinABI, crankCoinTokenAddress);
            contract = { ...contract.methods };
            const userTransactionList = await getNormalTransactions(web3, user);
            
            this.setState({
                loading: false,
                contract,
                userTransactionList
            })
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    }

    connectDapp = async () => {
        await this.loadWeb3();
        await this.loadBlockchainData();
    }

    balanceOf = async ({ loading, contract, user } = this.state) => {
        if(loading) return;
        return await contract.balanceOf(user).call();
    }

    fromWei = (_amount, _unit, { loading, web3 } = this.state) => {
        if(loading) return;
        return web3.utils.fromWei(_amount.toString(), _unit);
    }

    toWei = (_amount, _unit, { loading, web3 } = this.state) => {
        if(loading) return;
        return web3.utils.toWei(_amount.toString(), _unit);
    }

    locks = async ({ loading, contract, user } = this.state) => {
        if(loading) return;
        return await contract.locks(user).call();
    }

    checkRewards = async ({ loading, contract, user } = this.state) => {
        if(loading) return;
        return await contract.checkRewards(user).call();
    }

    unlock = async ({ loading, contract, web3, user } = this.state) => {
        try {
            if(loading) return;
            const gasPrice = await web3.eth.getGasPrice();
            return await contract.unlock().send({
                from: user,
                gasPrice,
                gas: '50000'
            });
        } catch (error) {
            return error.message;
        }
    }

    lockToken = async (_amount, { loading, contract, user, crankCoinTokenAddress } = this.state) => {
        try {
            if(loading) return;
            const _amountToWei = this.toWei(_amount, 'ether');
            return await contract.lock(_amountToWei).send({
                from: user
            });
        } catch (error) {
            return error.message;
        }
    }

    render() {

        return (
            <web3Context.Provider value= {{
                ...this.state,
                connectDapp: this.connectDapp,
                fromWei: this.fromWei,
                toWei: this.toWei,
                balanceOf: this.balanceOf,
                checkRewards: this.checkRewards,
                locks: this.locks,
                unlock: this.unlock,
                lockToken: this.lockToken
            }}>
                {this.props.children}
            </web3Context.Provider >
        )
    }
}

export { web3Context, Web3Provider }