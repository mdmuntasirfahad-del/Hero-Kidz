import { fontBangla } from '@/lib/fonts';
import { FaShoppingCart, FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 text-center px-4">

      <div className="relative flex items-center justify-center">
        <span className="absolute h-28 w-28 rounded-full bg-primary/10 animate-ping" />

        <FaShoppingCart className="text-6xl text-primary relative" />

        <FaSpinner className="absolute -bottom-1 -right-2 text-3xl text-secondary animate-spin" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Loading...</h2>

        <p className={`${fontBangla.className} text-2xl text-base-content/60`}>
          একটু অপেক্ষা করুন
        </p>
      </div>

      <progress className="progress progress-primary w-56" />

    </div>
  );
};

export default Loading;
