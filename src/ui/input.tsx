import {
  useEffect,
  useState,
  ChangeEvent,
  InputHTMLAttributes,
  forwardRef,
} from "react";
import { css, keyframes } from "@emotion/css";
import { Typography } from "./typography";

export type InputStatus = "default" | "error" | "success";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id?: string;
  className?: string;
  label?: string;
  showLabel?: boolean;
  shake?: boolean;
  status?: InputStatus;
  helperText?: string;
}

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

const inputWrapperStyle = (shake: boolean) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${shake &&
  css`
    animation: ${shakeAnimation} 0.3s ease-in-out;
  `}
`;

const inputLabelStyle = css`
  position: absolute;
  top: -10px;
  left: 16px;
  margin-bottom: 4px;
  font-size: 14px;
  padding-inline: 5px;
  background-color: var(--bg-color);
  color: #a2acb0;
`;

const inputBaseStyle = css`
  height: 48px;
  border: 1.8px solid rgba(255, 255, 255, 0.2);
  padding: 8px 12px;
  border-radius: 14px;
  font-size: 16px;
  background-color: inherit;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  ::placeholder {
    color: #464646;
  }
  &:focus {
    border-color: #fff;
  }
`;

const inputDefaultStyle = css`
  border-color: #2f2f2f;
`;

const inputErrorStyle = css`
  border-color: red;
`;

const inputSuccessStyle = css`
  border-color: green;
`;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      value,
      placeholder = "",
      name,
      id,
      className = "",
      label,
      showLabel = true,
      status = "default",
      shake = true,
      helperText,
      onChange,
      ...rest
    }: InputProps,
    ref
  ) => {
    const [isShake, setIsShake] = useState(false);

    useEffect(() => {
      if (status === "error" && shake) {
        setIsShake(true);
        const timeout = setTimeout(() => setIsShake(false), 300);
        return () => clearTimeout(timeout);
      } else {
        setIsShake(false);
      }
    }, [status, shake]);

    const getInputStyle = () => {
      if (status === "error") return `${inputBaseStyle} ${inputErrorStyle}`;
      if (status === "success") return `${inputBaseStyle} ${inputSuccessStyle}`;
      return `${inputBaseStyle} ${inputDefaultStyle}`;
    };

    return (
      <div className={`${inputWrapperStyle(isShake)} ${className}`}>
        {showLabel && label && (
          <label htmlFor={id} className={inputLabelStyle}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          id={id}
          className={getInputStyle()}
          {...rest}
        />

        {status === "error" && helperText && (
          <Typography
            size={12}
            color="red"
            className={css({
              marginTop: 5,
              paddingLeft: 5,
            })}
          >
            {helperText}
          </Typography>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
