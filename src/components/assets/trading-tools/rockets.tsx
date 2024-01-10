import { cn } from "@/lib/utils";

const Rockets = ({ className }: { className: string }) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, "")}
    >
      <path
        d="M27 65.5H24M24 65.5L18 71.5V80L25.5 72.5H31.25M24 65.5V64C23.6 63.2 23.1667 59.3333 23 57.5C22.4649 53.0411 23.3295 49.1548 24.6633 46M38 65.5L44 71V80.5L37 72.5H31.25M38 65.5H35.5M38 65.5V64C38.5 63.1667 39.1379 60.4836 39.5 56.5C39.8549 52.5956 38.887 49.0062 37.4906 46M24.6633 46C27.0687 40.3106 31 37 31 37C31 37 34.9529 40.5368 37.4906 46M24.6633 46H37.4906M31.25 72.5V64.7664"
        stroke="#091E3B"
        strokeWidth="3"
      />
      <path
        d="M60.4231 54.7241H56.6154M56.6154 54.7241L49 62.0345V72.3908L58.5192 63.2529H65.8173M56.6154 54.7241V52.8966C56.1077 51.9218 55.5577 47.2107 55.3462 44.977C54.667 39.5444 55.7644 34.8093 57.4573 30.9655M74.3846 54.7241L82 61.4253V73L73.1154 63.2529H65.8173M74.3846 54.7241H71.2115M74.3846 54.7241V52.8966C75.0192 51.8812 75.8288 48.6122 76.2885 43.7586C76.739 39.0015 75.5105 34.6282 73.7381 30.9655M57.4573 30.9655C60.5103 24.0336 65.5 20 65.5 20C65.5 20 70.5171 24.3092 73.7381 30.9655M57.4573 30.9655H73.7381M65.8173 63.2529V53.8303"
        stroke="#091E3B"
        strokeWidth="3"
      />
      <circle cx="31" cy="56" r="3.5" stroke="#091E3B" strokeWidth="3" />
      <circle cx="47" cy="15" r="3.5" stroke="#C1282D" strokeWidth="3" />
      <circle cx="66" cy="44" r="5.5" stroke="#091E3B" strokeWidth="3" />
      <path
        d="M20.5 88.5C21.1667 86.1667 23.6 81.4 28 81M28 81V76.5M28 81L31.5 85L34.5 81.5M34.5 81.5V76.5M34.5 81.5C36.5 81.1667 40.8 82.1 42 88.5"
        stroke="#C1282D"
        strokeWidth="3"
      />
      <path
        d="M49 89C50.0543 84.9167 53.9023 76.575 60.8605 75.875M60.8605 75.875V68M60.8605 75.875L66.3953 82.875L71.1395 76.75M71.1395 76.75V68M71.1395 76.75C74.3023 76.1667 81.1023 77.8 83 89"
        stroke="#C1282D"
        strokeWidth="3"
      />
      <path
        d="M56.1246 89C55.7912 87.6667 55.9246 84.6 59.1246 83"
        stroke="#091E3B"
        strokeWidth="3"
      />
      <path
        d="M75 88.5C75.3333 87.1667 75.2 84.2 72 83"
        stroke="#091E3B"
        strokeWidth="3"
      />
    </svg>
  );
};

export default Rockets;