import { motion } from "framer-motion";
import engineerLogo from "@/assets/engineer-logo.png";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
      aria-label="Loading screen"
    >
      <div className="flex flex-col items-center gap-6 px-6 text-center">
        <div className="relative flex h-28 w-28 items-center justify-center">
          <div className="animate-gear absolute h-28 w-28 rounded-full border-2 border-dashed border-primary/30" />
          <div className="animate-gear-reverse absolute h-20 w-20 rounded-full border border-primary/50" />
          <div className="absolute flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-border bg-card/90 p-1 shadow-sm backdrop-blur-sm">
            <img src={engineerLogo} alt="Nabin Sarkar logo" className="h-full w-full rounded-xl object-cover" />
          </div>
          <div className="h-3 w-3 rounded-full bg-primary animate-pulse-glow" />
        </div>

        <div className="space-y-2">
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Portfolio Loading
          </motion.p>
          <motion.h2
            className="text-2xl font-bold text-foreground md:text-3xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.45 }}
          >
            Nabin Sarkar
          </motion.h2>
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.26, duration: 0.45 }}
          >
            Mechanical design • CAD • analysis
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
