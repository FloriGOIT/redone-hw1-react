import React from 'react';
import style from './feedback.module.scss';

   class Feedback extends React.Component {
      state = { good: 0, bad: 0, neutral: 0 };
      handleFeedback = (type) => { this.setState(prev => ({ [type]: prev[type] + 1 }));  console.log(this.state)}
   
      render() {
         const options = Object.keys(this.state);
         let total = this.state.good+this.state.bad+this.state.neutral;
         let percentage = ((this.state.good / total)*100).toFixed(2)

      return (
         <div className={style.feedbackAll}>
         <div className={style.btnsFeedback}>
               {options.map((type,index) => {return <button type="button" onClick={()=>this.handleFeedback(type)} key={index}>{type}</button>})}
            </div>
            <div className={style.statsFeedback}>
               {options.map(optType => { return <span key={optType}>{optType.toUpperCase()}: {this.state[optType]}</span> })}
               <span key="total">Total:{total}</span>
               {total>0 ? <span key="percentage">Positive percentage:{percentage} </span>: null}
         </div>
         </div>
      );
   }
   }

export default Feedback;
