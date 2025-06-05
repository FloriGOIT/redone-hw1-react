import React from "react";

class Test extends React.Component{ 
        constructor(props) { 
                super(props);
                this.state = {
                        eyes: "brown",
                        hair: "long",
                        nuance: "natural",
                        born: 1904
                };
                this.changeYear=this.changeYear.bind(this)
        }
        //changeYear = () => this.setState({ born: 1989 })
        
        changeYear(){this.setState({ born: 1989 })}

        render() {
                const { eyes, hair, nuance, born } = this.state;
                return <p>I am Florentina. Beautiful me, Intelligent me, blessed me. I have {eyes} eyes, {hair} {nuance} hair and i am born in <button onClick={this.changeYear}>{born}</button>.</p>
        }


}


export default Test