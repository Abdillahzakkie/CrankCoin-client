require('dotenv/config');

const etherscanApiKey = process.env.etherscanApiKey;

const toFixed = _amount => Number(_amount).toFixed(2);

const toWei = (web3, _amount, _unit) => web3.utils.toWei(_amount.toString(), _unit);

const fromWei = (web3, _amount, _unit) => web3.utils.fromWei(_amount.toString(), _unit);

const formatNumber = _amount => new Intl.NumberFormat('en', { maximumSignificantDigits: 3 }).format(Number(_amount));

const walletShortner = (_data, _start, _end) => {
    let result = '';
    for(let i = _start;  i < _end; i++) result = [...result, _data[i]];
    return result.join('');
}

const balanceOf = async (_token, _account) => {
    return await _token.methods.balanceOf(_account).call();
}

const getCurrentPrice= async (token) => {
    try {
        const result = await (await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=USD`)).json();
        return result[token].usd;
    } catch (error) {
        return error;
    }
}

const gasOracle = async () => {
    try {
        const _data = await (await fetch(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${etherscanApiKey}`)).json();
        return _data.result;
    } catch (error) {
        return error;
    }
}

const getNormalTransactions = async (web3, _user) => {
    try {
        const _etherPrice = await getCurrentPrice('ethereum');
        // const _startBlock = "12005372";
        const _startBlock = "0";

        const _latestBlock = await web3.eth.getBlockNumber();
        const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${_user}&startblock=${_startBlock}&endblock=${_latestBlock}&sort=desc&apikey=${etherscanApiKey}`
        let result = await (await fetch(url)).json();
        result = result.result;

        let nonce = result.length;
        result = result.map(item => {
            const {
                hash,
                blockNumber,
                from,
                to,
                gasPrice,
                gasUsed,
                timeStamp,
                value
            } = item;
            
            let ethGasUsed = fromWei(web3, (gasPrice * gasUsed).toString(), 'ether');
            ethGasUsed = toFixed(ethGasUsed * _etherPrice);
            const _cashbackPercent = 5;
            const cashBackEarned = (ethGasUsed * _cashbackPercent) / 100;

            const _isUser = web3.utils.toChecksumAddress(from) === web3.utils.toChecksumAddress(_user);

            const data = { 
                hash, 
                blockNumber, 
                from, 
                to, 
                gasPrice, 
                gasUsed, 
                timeStamp, 
                value, 
                nonce, 
                ethGasUsed, 
                cashBackEarned: _isUser ? cashBackEarned : "0",
                cashbackPercent: _isUser ? _cashbackPercent : "0"
            };
            nonce--;
            return data;
        })
        return result;
    } catch (error) {
        return error.message;
    }
}

const shortener = (_data, isHash) => {
    const tempItems = _data.split('');
    let result = [];

    if(isHash) {
        for(let i = 60;  i < tempItems.length; i++) result = [...result, tempItems[i]];
        return result.join('');
    }
    for(let i = 37;  i < tempItems.length; i++) result = [...result, tempItems[i]];
    return result.join('');
}

export { 
    toFixed, 
    fromWei,
    toWei,
    formatNumber,
    walletShortner,
    getCurrentPrice,
    balanceOf,
    gasOracle,
    getNormalTransactions,
    shortener
}