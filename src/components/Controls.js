import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions/counterActions';
import './Controls.scss';

export const Controls = () => {
  const [increaseValue, setIncreaseValue] = useState('');
  const [decreaseValue, setDecreaseValue] = useState('');

  const dispatch = useDispatch();

  const increaseHandler = useCallback(() => {
    dispatch(actions.increase());
  }, [dispatch]);

  const decreaseHandler = useCallback(() => {
    dispatch(actions.decrease());
  }, [dispatch]);

  const increaseByHandler = () => {
    dispatch(actions.increaseBy(+increaseValue));
  };

  const decreaseByHandler = useCallback(() => {
    dispatch(actions.decreaseBy(+decreaseValue));
  }, [decreaseValue, dispatch]);

  const inHandler = useCallback((event) => {
    setIncreaseValue(event.target.value)
  }, []);

  const decHandler = useCallback((event) => {
    setDecreaseValue(event.target.value)
  }, []);

  return (
    <div className="controls-wrapper">
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>Decrease</button>
      <div>
        <button onClick={increaseByHandler}>Increase By</button>
        <input onChange={inHandler} value={increaseValue} type="text" />
      </div>
      <div>
        <button onClick={decreaseByHandler}>Decrease By</button>
        <input onChange={decHandler} value={decreaseValue} type="text" />
      </div>
    </div>
  )
}