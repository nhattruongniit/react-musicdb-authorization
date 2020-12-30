import React, { useState } from 'react';

// material core
import Switch from '@material-ui/core/Switch';

function SwitchBase() {
  const [state, setState] = useState({
    checkedB: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Switch
      checked={state.checkedB}
      onChange={handleChange}
      color="primary"
      name="checkedB"
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />
  );
}

export default SwitchBase;
