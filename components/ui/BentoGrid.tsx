import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { Globe } from "./GridGlobe";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "py-10 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}

    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id?: number,
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?:string;
  imgClassName?:string;
  titleClassName?:string;
  spareImg?:string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(233,143,2,1) 51%, rgba(0,212,255,1) 100%)',
      }}
    >
        <div className={`${id==6} && 'flex justify-center h-full`}>
            <div className="w-full h-full absolute">
                {img && (
                    <img
                    src={img}
                    alt={img}
                    className={cn(imgClassName,'object-cover,object-center')}
                    />
                )}
            </div>
            <div className={`absolute right-0 -bottom-0 ${id===5 &&'w-full opacity-80'}`}>
                {spareImg && (
                    <img
                    src={spareImg}
                    alt={spareImg}
                    className={'object-cover,object-center'}
                    />
                )}
            </div>
            {id==6 && (
                <BackgroundGradientAnimation>
                    <div className="absolute z-50 flex items-center justify-center text-white font-bold"></div>
                </BackgroundGradientAnimation>
            )}
            <div className={cn(
                titleClassName, 'group-hover/ bento: translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg'
            )}>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
            </div>
            
        </div>
    

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        
      </div>
    </div>
  );
};
