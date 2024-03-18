import { forwardRef } from "react";
import "../styles/formInput.styles.scss";

const FormInput = forwardRef(({ handleChange, ...otherProps }, ref) => {
  return (
    <div className="group">
      <input
        {...otherProps}
        ref={ref}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
});

export default FormInput;
