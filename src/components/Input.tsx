import { forwardRef, ForwardedRef } from "react";

type InputProps = {
  label: string;
  textarea?: boolean;
  type?: string;
};

const Input = forwardRef(
  (
    { label, textarea, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const classes =
      "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

    return (
      <p className="flex flex-col gap-1 my-4">
        {/* Menambahkan elemen label */}
        <label
          className="text-sm font-bold uppercase text-stone-500"
          htmlFor={label}
        >
          {label}
        </label>
        {textarea ? (
          <textarea
            ref={ref as ForwardedRef<HTMLTextAreaElement>}
            className={classes}
            {...props}
          />
        ) : (
          <input
            ref={ref as ForwardedRef<HTMLInputElement>}
            className={classes}
            {...props}
          />
        )}
      </p>
    );
  }
);

export default Input;
