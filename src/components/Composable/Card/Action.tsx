import { ReactNode } from "react";
import { useProductCardContext } from "./CardContext";
import { Product } from "../../../schema";

type ActionProps = {
  children: ReactNode;
  cb: (product: Product) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Action({ children, cb, ...rest }: ActionProps) {
  const { product } = useProductCardContext();

  const handleClick = () => {
    cb(product);
  }

  return (
    <button {...rest} onClick={handleClick} type="button" className="bg-blue-700 my-8 mx-4 border-none rounded-lg py-4 px-6 text-lg font-semibold text-white hover:bg-blue-500 transition-colors shadow-gray-500 shadow-sm">
      {children}
    </button>
  );
}