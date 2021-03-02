import { AboutBackground, AboutContainer } from "./about.styled";

const About = () => {
    return (
        <AboutContainer className='center about'>
            <AboutBackground className='center'>
                <div className='center'>
                    <h1>
                        We realised that there was a need for a protocol that intrinsically balanced sell 
                        pressure in a high volume uniswap game, 
                        while simultaneously rewarding hodlers. We leveraged this to create Aura.
                    </h1>
                </div>
            </AboutBackground>

            <div className='center wrapper'>
                <div className='center wrapper-fluid'>
                    <div className='center'>
                        <span>
                            Automation and Deflation
                        </span>
                        <h1>
                            The Burn and Buyback Mechanics
                        </h1>
                    </div>

                    <div className='center right'>
                        All tokens which are bought back are burnt forever.
                        <span>
                            We understand that people don’t want us interacting with a wallet which would hold the eth, 
                            and therefore, the entire code is automated.
                        </span>
                    </div>
                </div>

                <div className='center wrapper-fluid white'>
                    <div className='center'>
                        <span>
                            Redistribution
                        </span>
                        <h1>The Economics</h1>
                    </div>

                    <div className='center right'>
                        <p>
                            1)  2.5% of every sell transaction re-distributed to the holders.
                        </p>
                        <p>
                            2)  2.5% back to the contract itself. 
                                This eth accumulates over 30 minutes. 
                                At the end of 30 minutes, this eth is used to buyback the token. 
                                The tokens bought back are burnt forever.
                        </p>
                    </div>
                </div>

                <div className='center wrapper-fluid'>
                    <div className='center'>
                        Offsetting Sell Pressure
                        <h1>
                            The Buyback
                        </h1>
                    </div>

                    <div className='center right'>
                        <p>
                            Every 30 minutes, the buyback transaction is clubbed with the first transaction
                            at the end of the 30 minute period on uniswap. 
                            To reward the person that initiated this transaction, 
                            that particular buyer gets a 5% share of tokens in addition to his transaction.
                        </p>

                        <p>
                            There is no way to manually trigger the buyback. 
                            It is automatically clubbed with the first transaction
                             that occurs on uniswap at the end of every 30 minute cycle.
                        </p>
                    </div>
                </div>
            </div>
            
        </AboutContainer>
    )
}

export default About
