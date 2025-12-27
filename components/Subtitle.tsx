import { FaSquare } from "react-icons/fa6";

const Subtitle = ({ children }: { children: string }) => {
  return (
    <h3 className="flex items-center gap-2 uppercase font-bold text-sm mb-3">
      <FaSquare className="text-rose-600" /> {children}
    </h3>
  );
};

export default Subtitle;
