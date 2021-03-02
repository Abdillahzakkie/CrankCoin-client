import { useContext, useState, useEffect } from "react";
import dayjs from "dayjs";
import { web3Context } from "../../Context";
import { DashboadContainer } from "./dashboard.styled";
import { ErrorBoundary } from "../../ErrorBoundary";


export const Dashboard = () => {
    const context = useContext(web3Context);
    const [userBalance, setUserBalance] = useState(0);
    const [getLock, setLock] = useState(null);
    const [getClaimableRewards, setClaimableRewards] = useState(0);

    const { loading, balanceOf, fromWei, locks, checkRewards } = context;
    useEffect(() => {
        if(loading) return;
        (async () => {
            const _userBalance = await (await balanceOf());
            const _locks = await locks();
            const _claimRewards = await checkRewards();

            setUserBalance(() => fromWei(_userBalance, "ether"));
            setLock(() => _locks);
            setClaimableRewards(() => fromWei(_claimRewards, "ether"));
        })()
    }, [context, setUserBalance, loading, balanceOf, fromWei, setLock, locks, setClaimableRewards, checkRewards]);
    
    let _stakedAmount = 0;
    let _unlockTime;
    const now = Date.now();

    if(getLock) {
        _stakedAmount = Number(getLock.amount);
        _unlockTime = getLock.unlockTime;
    }


    return (
        <DashboadContainer className="center">
            <div className="center account-details">
                <h1>Account Details</h1>
            </div>

            <div className="center card-container">
                <div className="center card">
                    <h2>Current Balance:</h2>
                    <div />
                    <h5>{Number(userBalance).toFixed(2)} CKN</h5>
                </div>
                <div className="center card">
                    <h2>Staked Balance:</h2>
                    <div />
                    <h5>{Number(_stakedAmount).toFixed(2)} CKN</h5>
                </div>
                <div className="center card">
                    <h2>Unlock Time:</h2>
                    <div />
                    <h5>
                        {
                            Number(_unlockTime) > now 
                                ? dayjs.unix(_unlockTime)
                                : Number(_unlockTime) > 0 
                                    ? "Fund has been unlocked"
                                    : "No active stake"

                        }
                    </h5>
                </div>
                <div className="center card">
                    <h2>Claimable Balance:</h2>
                    <div />
                    <h5>{Number(getClaimableRewards).toFixed(2)} CKN</h5>
                </div>
                <div className="center card">
                    <h2>Maximum Cap:</h2>
                    <div />
                    <h5>0.00 CKN</h5>
                </div>
                <div className="center card">
                    <h2>Total Rewards:</h2>
                    <div />
                    <h5>0.00 CKN</h5>
                </div>
            </div>
        </DashboadContainer>
    )
}

export default ErrorBoundary(Dashboard);
