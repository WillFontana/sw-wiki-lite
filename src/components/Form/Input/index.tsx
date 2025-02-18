import { CSSProperties, ReactElement, forwardRef } from "react";
import {
  StyledInput,
  StyledInputAction,
  StyledInputError,
  StyledInputWrapper,
  StyledLabel,
} from "./styles";

interface IInputAction {
  position: "end" | "start";
  icon: ReactElement;
  action: () => void;
}

export interface IInputProps {
  value?: string;
  name?: string;
  label?: string;
  error?: string;
  required?: boolean;
  maxLength?: number;
  disabled?: boolean;
  placeholder?: string;
  style?: CSSProperties;
  action?: IInputAction;
  type?: HTMLInputElement["type"];
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      type,
      name,
      label,
      value,
      error,
      style,
      action,
      onBlur,
      onChange,
      required,
      disabled,
      maxLength,
      placeholder,
    },
    ref
  ) => {
    return (
      <StyledInputWrapper style={style}>
        {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
        <StyledInput
          ref={ref}
          type={type}
          name={name}
          value={value}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          placeholder={placeholder}
          $error={Boolean(error)}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error && <StyledInputError>{error}</StyledInputError>}
        {action && (
          <StyledInputAction
            $error={Boolean(error)}
            $position={action.position}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              action.action();
            }}
          >
            {action.icon}
          </StyledInputAction>
        )}
      </StyledInputWrapper>
    );
  }
);

export default Input;
