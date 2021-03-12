import { useContext, useState } from "react";
import { FarmCardContainer } from "./farmCard.style";
import { web3Context } from "../../../Context";
import logo from "../../../../assets/moon/puppy.png";

export const FarmCard = () => {
    const [lockAmount, setLockAmount] = useState(0);
    const { lockToken } = useContext(web3Context);

    return (
        <FarmCardContainer className="center">
            <div className="center card">
                <div className="center logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="center width-100">
                    <h2>Lock CKN Token</h2>
                </div>
                <div className="center width-100">
                    <input type="text" value={lockAmount} placeholder="0.00" onChange={e => setLockAmount(e.target.value)} />
                </div>
                <div className="center width-100">
                    <button className="btn" onClick={() => lockToken(lockAmount)}>Lock</button>
                </div>
            </div>
        </FarmCardContainer>
    )
}

export default FarmCard
