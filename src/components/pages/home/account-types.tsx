import AccountCarousel from "@/components/molecules/account-carousel";
import { Button } from "@/components/ui/button";
import { TSearchParams } from "@/lib/type";
import { BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const AccountTypes = ({searchParams}: {searchParams: TSearchParams}) => {
  return (
    <div className="">
      <div className="container section grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10">
        <AccountCarousel searchParams={searchParams}/>
        <div className="flex flex-col justify-center gap-10">
          <h2 className="text-right md:text-right">
            Choose the&nbsp;
            <span className="text-secondary h2-span">
              best
              <br /> account type
            </span>
            &nbsp; for you
          </h2>

          <div className="flex flex-col items-end justify-center gap-[20px]">
            <div className="flex items-center justify-center gap-3 px-3 py-2 rounded-[10px] border font-medium bg-white">
              <BadgeCheck className="w-5 h-5 stroke-secondary" />
              &nbsp;
              <span>Individual accounts</span>
            </div>

            <div className="flex items-center justify-center gap-3 px-3 py-2 rounded-[10px] border font-medium bg-white">
              <BadgeCheck className="w-5 h-5 stroke-secondary" />
              &nbsp;
              <span>Islamic accounts</span>
            </div>

            <div className="flex items-center justify-center gap-3 px-3 py-2 rounded-[10px] border font-medium bg-white">
              <BadgeCheck className="w-5 h-5 stroke-secondary" />
              &nbsp;
              <span>Institutional/Corporate Accounts</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-[20px]">
            <Button>Open Demo Account</Button>
            <Button variant="secondary">Open Real Acccount</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTypes;
