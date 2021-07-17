import { useSelector } from 'react-redux';
import './Counter.scss';

export const Counter = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <div className="counter">{counter}</div>
  )
}