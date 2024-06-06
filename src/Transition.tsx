import { motion } from "framer-motion";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <div className="fixed w-full h-full flex flex-col z-[1000] inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="flex-1 flex w-full" key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                className="flex-1 bg-[#79837a] origin-top relative -m-[0.25px] "
                key={blockIndex}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: Math.random() * 0.5,
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="fixed w-full h-full flex flex-col z-[1000] inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div className="flex-1 flex w-full" key={rowIndex}>
            {Array.from({ length: 11 }).map((_, blockIndex) => (
              <motion.div
                className="flex-1 bg-[#79837a] origin-bottom relative -m-[0.25px] "
                key={blockIndex}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: Math.random() * 0.5,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
