//COPIED from https://w3collective.com/react-stopwatch/
import { useEffect } from "react"

type StopwatchProps = {
  time: number,
  setTime: React.Dispatch<React.SetStateAction<number>>,
  running: boolean
}

const Stopwatch = (props:StopwatchProps):JSX.Element => {
    const {time, setTime, running} = props

    useEffect(() => {
        let interval:any;
        if (running) {
          interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
          }, 10);
        } else if (!running) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [running, setTime]);


    return(
        <div className="stopwatch">
          <span  className = "craft-text red">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span  className = "craft-text red">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span  className = "craft-text red">{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
    )
}

export default Stopwatch