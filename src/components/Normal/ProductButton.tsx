import { ReactNode } from "react";

export function Button({ children, cb }: { children: ReactNode, cb: () => void  }) {

  const handleClick = () => {
    cb();
  };

  return (
    <div id='action' className='w-full pb-8 px-4'>
      <button type="button" onClick={handleClick} className="bg-blue-700 w-full border-none rounded-lg py-4 px-6 text-lg font-semibold text-white hover:bg-blue-500 transition-colors shadow-gray-500 shadow-sm">
        {children}
      </button>
    </div>
  );
}