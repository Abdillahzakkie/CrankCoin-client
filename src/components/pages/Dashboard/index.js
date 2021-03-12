import { useContext, useState, useEffect } from "react";
import dayjs from "dayjs";
import { web3Context } from "../../Context";
import { Navbar } from "../../Navbar";
import { DashboadContainer } from "./dashboard.styled";
import { ErrorBoundary } from "../../ErrorBoundary";
import TransactionList from "../../TransactionList";
import { toFixed } from "../../Helper";


export const Dashboard = () => {
    const context = useContext(web3Context);
    const [userBalance, setUserBalance] = useState(0);
    const [getClaimableRewards, setClaimableRewards] = useState(0);
    const [stakedAmount, setStakedAmount] = useState(0);
    const [unlockTime, setUnlockTime] = useState(0);
    const [totalUpcomingCashback, setTotalUpcomingCashback] = useState(0);

    const { loading, web3, user, balanceOf, fromWei, locks, checkRewards, userTransactionList } = context;
    useEffect(() => {
        if(loading) return;
        let isMounted = true;
        (async () => {
            const _userBalance = await (await balanceOf());
            const _locks = await locks();
            const _stakedAmount = fromWei(_locks.amount, 'ether');
            const _unlockTime = _locks.unlockTime;
            const _claimRewards = await checkRewards();
            const _totalUpcomingCashback = userTransactionList.reduce((prev, next) => {
                prev = Number(prev) + Number(next.cashBackEarned);
                return prev;
            }, 0);       

            setUserBalance(() => fromWei(_userBalance, "ether"));
            setStakedAmount(() => _stakedAmount);
            setUnlockTime(() => _unlockTime);
            setClaimableRewards(() => fromWei(_claimRewards, "ether"));
            setTotalUpcomingCashback(() => _totalUpcomingCashback);
            // eslint-disable-next-line
            return () => isMounted = false;
        })()
    }, [loading, web3, user, balanceOf, fromWei, locks, checkRewards, userTransactionList]);
    const now = Date.now();
    const _unlockDate = dayjs.unix(unlockTime).$d;
    console.log(_unlockDate);

    return (
        <>
            <Navbar />
            <DashboadContainer className="center">
                <div className="center account-details">
                    <h2>Account Details: </h2>
                </div>

                <div className="center card-container">
                    <div className="center card">
                        <h3>Current Balance:</h3>
                        <div />
                        <h5>{toFixed(userBalance)} CKN</h5>
                        <h5>0.00 USD</h5>
                    </div>

                    <div className="center card">
                        <h3>Claimable Balance:</h3>
                        <div />
                        <h5>{Number(getClaimableRewards).toFixed(2)} CKN</h5>
                        <h5>0.00 USD</h5>
                    </div>

                    <div className="center card">
                        <h3>Upcoming Cashback:</h3>
                        <div />
                        <h5>0.00 CKN</h5>
                        <h5>{toFixed(totalUpcomingCashback)} USD</h5>
                    </div>

                    <div className="center card">
                        <h3>Staked Balance:</h3>
                        <div />
                        <h5>{Number(stakedAmount).toFixed(2)} CKN</h5>
                        <h5>0.00 USD</h5>
                    </div>

                    <div className="center card">
                        <h3>Unlock Time:</h3>
                        <div />
                        <p>
                            {   _unlockDate.toString()
                                // dayjs.unix(unlockTime).$d
                                // Number(unlockTime) > now 
                                //     ? dayjs.unix(unlockTime)
                                //     : Number(unlockTime) > 0 
                                //         ? "Fund has been unlocked"
                                //         : "No active stake"

                            }
                        </p>
                        <p></p>
                    </div>

                    <div className="center card">
                        <h3>Total Earned:</h3>
                        <div />
                        <h5>0.00 CKN</h5>
                        <h5>0.00 USD</h5>
                    </div>
                </div>
                {
                    Number(window.innerWidth) <= 700
                        ? (
                            <div className="center" style={{margin: "0 auto 2rem", padding: "0 2rem"}}>
                                Please switch to a browser window with width greater than 700px for optimal performance
                            </div>
                        )
                        : <TransactionList userTransactionList={userTransactionList} />
                }
                
            </DashboadContainer>
        </>
    )
}

export default ErrorBoundary(Dashboard);
