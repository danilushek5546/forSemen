import { TextField } from '@mui/material';
import type { FC } from 'react';
import type { ChangeHandler, RefCallBack } from 'react-hook-form';

type PropType = {
  className: string;
  labelText: string;
  name: string;
  type: string;
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  inputRef?: RefCallBack;
};

const AuthInput: FC<PropType> = (
  {
    name,
    type,
    className,
    labelText,
    inputRef,
    onBlur,
    onChange,
  },
) => {
  return (
      <TextField
        id="outlined-basic"
        label={labelText}
        variant="outlined" 
        ref={inputRef}
        name={name}
        type={type}
        className={className}
        onChange={onChange}
        onBlur={onBlur}
        required
      />
  );
};

export default AuthInput;