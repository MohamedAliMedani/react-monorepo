import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

export function NMonoRebo() {
  const nav = useNavigate();
  return (
    <Fragment>
      <div>
        <button onClick={() => nav('/app')}>Navigate to inventory</button>
      </div>
    </Fragment>
  );
}

export default NMonoRebo;
