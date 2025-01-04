import Link from "next/link";

type ButtonProps = {
  label: string;
  url: string;
};

const SecoundaryBtn = ({ label, url }: ButtonProps) => {

  return (
    <Link className="w-full md:w-auto" href={url} aria-label={label}>
      <button
        type="button"
        className="inline-flex min-h-12 w-full md:w-auto items-center justify-center rounded-[0.25rem] 
        border border-black/10 bg-white px-[calc(1.5rem-1px)] py-[calc(0.875rem-1px)] 
        font-sans text-base font-semibold leading-tight text-black/85 
        shadow-[0_1px_3px_0_rgba(0,0,0,0.02)] 
        transition-all duration-250 touch-manipulation select-none
        hover:border-black/15 hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.1)] 
        hover:text-black/65 hover:-translate-y-px
        active:bg-[#F0F0F1] active:border-black/15 
        active:shadow-[0_2px_4px_0_rgba(0,0,0,0.06)] 
        active:text-black/65 active:translate-y-0"
      >
        {label}
      </button>
    </Link>
  );
};

export default SecoundaryBtn;
