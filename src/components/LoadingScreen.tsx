import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
      aria-label="Loading screen"
    >
      <div className="flex flex-col items-center gap-6 px-6 text-center">
        <div className="relative flex h-40 w-40 items-center justify-center">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-primary/30"
              initial={{ width: 16, height: 16, opacity: 0.8 }}
              animate={{
                width: [16, 160],
                height: [16, 160],
                opacity: [0.6, 0],
                borderWidth: [2, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeOut",
              }}
            />
          ))}
          <div className="absolute h-16 w-16 rounded-full border-2 border-primary/60 bg-card/80 backdrop-blur-sm shadow-md flex items-center justify-center z-10">
            <span className="text-xl font-bold tracking-[0.3em] text-primary pl-[0.3em]">NS</span>
          </div>
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
