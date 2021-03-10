import { ErrorBoundary } from "../ErrorBoundary";
import { TransactionListContainer } from "./transactionList.style";
import { shortener, toFixed } from "../Helper";
import Loading from "../Loading";

export const TransactionList = ({ userTransactionList }) => {
    let _buildTransaction = null;

    if(userTransactionList) {
        _buildTransaction = userTransactionList.map((item, index) => {
            const { nonce, from, to, hash, ethGasUsed, cashBackEarned } = item;

            const links = {
                _hash: `https://etherscan.io/tx/${hash}`,
                _from: `https://etherscan.io/address/${from}`,
                _to: `https://etherscan.io/address/${to}`
            }
            return (
                <section key={index} className="center container">
                    <div className="center">{nonce}</div>
                    <div className="center">
                        <a href={links._hash} rel="noreferrer" target="_blank">
                            0x...{shortener(hash, true)}
                        </a>
                    </div>
                    <div className="center">
                        <a href={links._from} rel="noreferrer" target="_blank">
                            0x...{shortener(from, false)}
                        </a>
                    </div>
                    <div className="center">
                        <a href={links._to} rel="noreferrer" target="_blank">
                            0x...{shortener(to, false)}
                        </a>
                    </div>
                    <div className="center">{toFixed(ethGasUsed)} USD</div>
                    <div className="center">3%</div>
                    <div className="center">{toFixed(cashBackEarned)} USD</div>
                </section>
            );
        })
    }


    return (
        <TransactionListContainer className="center">
            <section className="center container header">
                <div className="center">#</div>
                <div className="center">Hash</div>
                <div className="center">From</div>
                <div className="center">To</div>
                <div className="center">Txn Fee (USD)</div>
                <div className="center">Cashback percent</div>
                <div className="center">Cashback Earned</div>
            </section>
            {_buildTransaction ? _buildTransaction : <Loading />}
            {/* <section className="center container">
                Hello world
            </section>
            <section className="center container">
                Hello world
            </section> */}
        </TransactionListContainer>
    )
}

export default ErrorBoundary(TransactionList)
