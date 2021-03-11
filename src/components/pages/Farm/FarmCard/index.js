import { FarmCardContainer } from "./farmCard.style";
import logo from "../../../../assets/moon/puppy.png";

export const FarmCard = () => {
    return (
        <FarmCardContainer className="center">
            <div className="center card">
                <div className="center logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="center width-100">
                    <h2>Approve CKN Token</h2>
                </div>
                <div className="center width-100">
                    <input type="text" placeholder="0.00" />
                </div>
                <div className="center width-100">
                    <button className="btn">Approve</button>
                </div>
            </div>
            
            <div className="center card">
                <div className="center logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="center width-100">
                    <h2>Lock CKN Token</h2>
                </div>
                <div className="center width-100">
                    <input type="text" placeholder="0.00" />
                </div>
                <div className="center width-100">
                    <button className="btn">Lock</button>
                </div>
            </div>
        </FarmCardContainer>
    )
}

export default FarmCard
