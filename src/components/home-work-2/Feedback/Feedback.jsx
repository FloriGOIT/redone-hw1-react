import { useState } from "react";
import style from "./feedback.module.scss";
import PropTypes from "prop-types";


 
function Feedback() {
   const [bad, setBad] = useState(0);
   const [good, setGood] = useState(0);
   const [neutral, setNeutral] = useState(0);
   let total = good + bad + neutral;
   let percentage = (good / total * 100).toFixed(2);

   const handleGood = () => { setGood(prev => prev + 1) }
   const handleBad = () => { setBad(prev => prev + 1) }
   const handleNeutral = () => { setNeutral(prev => prev + 1) }
     

   return (<section className={style.feedback}>
      <h3>Please leave feedback</h3>
      <OptionsFeedback handleGood={handleGood} handleBad={handleBad} handleNeutral={handleNeutral} />
      <div>
         <h4>Statistics</h4>
         <Stats bad={bad} good={good} neutral={neutral} total={total} percentage={percentage} />
      </div>

   </section>)
}

const OptionsFeedback = ({handleGood, handleBad, handleNeutral}) => {
   return (<div className={style.options}>
      <button type="button" onClick={handleGood}>Good</button>
      <button type="button" onClick={handleBad}>Bad</button>
      <button type="button"onClick={handleNeutral}>Neutral</button>
   </div>
      )
}

const Stats = ({ bad, good, neutral, total,percentage }) => {
   return (<div className={style.stats}>
      <span>Good: { good}</span>
      <span>Bad: {bad }</span>
      <span>Neutral: { neutral}</span>
      <span>Total: {total}</span>
      {total > 0? <span style={{fontSize:20, fontWeight:600}}>Positive feedback: {percentage} %</span> : null}
   </div>)
}

export default Feedback