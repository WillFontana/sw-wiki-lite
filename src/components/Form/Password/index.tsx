import { Eye, EyeClosed } from "phosphor-react";
import { forwardRef, useState } from "react";
import Input, { IInputProps } from "../Input";

const Password = forwardRef<
  HTMLInputElement,
  Omit<IInputProps, "type" | "action">
>(({ ...inputProps }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      {...inputProps}
      ref={ref}
      type={showPassword ? "text" : "password"}
      action={{
        position: "end",
        icon: showPassword ? <EyeClosed size={20} /> : <Eye size={20} />,
        action: () => setShowPassword((prev) => !prev),
      }}
    />
  );
});

export default Password;
