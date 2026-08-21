"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 3500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-hidden
          "
          style={{
            background:
              "linear-gradient(135deg, #10213A 0%, #1C355D 40%, #7E899A 72%, #E8EBEF 100%)",
          }}
        >
          {/* =================================================
              SOL ÜST LACİVERT IŞIK
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.82,
            }}
            animate={{
              opacity: [0, 0.34, 0.16],
              scale: [0.82, 1.18, 1],
            }}
            transition={{
              duration: 2.8,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[-8%]
              top-[-12%]
              h-[460px]
              w-[460px]
              rounded-full
              bg-[#4B83CC]/30
              blur-[120px]
            "
          />

          {/* =================================================
              SAĞ ALT GÜMÜŞ IŞIK
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: [0, 0.4, 0.2],
              scale: [0.8, 1.2, 1],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-[-20%]
              right-[-10%]
              h-[560px]
              w-[560px]
              rounded-full
              bg-white/30
              blur-[135px]
            "
          />

          {/* =================================================
              HAFİF METALİK IŞIK ÇİZGİSİ
          ================================================= */}

          <motion.div
            initial={{
              x: "-140%",
              opacity: 0,
            }}
            animate={{
              x: "140%",
              opacity: [0, 0.18, 0],
            }}
            transition={{
              duration: 2.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              pointer-events-none
              absolute
              top-0
              h-full
              w-[28%]
              skew-x-[-18deg]
              bg-gradient-to-r
              from-transparent
              via-white/25
              to-transparent
              blur-2xl
            "
          />

          {/* =================================================
              ANA İÇERİK
          ================================================= */}

          <div
            className="
              relative
              z-10
              flex
              w-full
              max-w-xl
              flex-col
              items-center
              px-6
              text-center
            "
          >
            {/* ROLE */}

            <motion.span
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.85,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.38em]
                text-white/65
                sm:text-xs
              "
            >
              Software Developer & Project Manager
            </motion.span>

            {/* NAME */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 28,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.05,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                heading-font
                mt-6
                text-4xl
                font-semibold
                tracking-tight
                text-white
                sm:text-5xl
                md:text-6xl
              "
            >
              Selçuk Koyuncu
            </motion.h1>

            {/* SILVER LINE */}

            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: 80,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-6
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#D7D9DD]
                to-transparent
              "
            />

            {/* SUB TEXT */}

            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.85,
                delay: 1.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-5
                text-[11px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-white/50
                sm:text-xs
              "
            >
              Strategy • Development • Delivery
            </motion.p>

            {/* =================================================
                LOADING BAR
            ================================================= */}

            <div
              className="
                mt-11
                h-[2px]
                w-56
                overflow-hidden
                rounded-full
                bg-white/10
              "
            >
              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "0%",
                }}
                transition={{
                  duration: 2.6,
                  delay: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  h-full
                  w-full
                  bg-gradient-to-r
                  from-[#5C7FAE]
                  via-[#D8DCE2]
                  to-white
                "
              />
            </div>

            {/* =================================================
                PULSE DOT
            ================================================= */}

            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.9, 1.15, 0.9],
              }}
              transition={{
                duration: 1.6,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                mt-6
                h-1.5
                w-1.5
                rounded-full
                bg-white/80
              "
            />
          </div>

          {/* =================================================
              PREMIUM BORDER
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.985,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.35,
            }}
            className="
              pointer-events-none
              absolute
              inset-4
              rounded-[22px]
              border
              border-white/10
              sm:inset-6
            "
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}