import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  description: string;
}

const Button: React.FC<ButtonProps> = ({ description, ...rest }) => {
  return (
    <button className="bg-gradient-to-r from-[#E052A0] to-[#F15C41] p-4 w-full mt-4 rounded-md uppercase text-sm font-bold hover:shadow-xl transition:shadow">
      {description}
    </button>
  );
};

export { Button };
