import './main.css';
import { motion } from "framer-motion";

export default function App() {
  // Text to animate
  const welcomeText1 = "Welcome to".split(" ");
  const welcomeText2 = "Computer Networks".split(" ");
  const welcomeText3 = "Scroll down to discover".split(" ");

  return (
    <main className="main">
      <div className="mainDiv">
        {/* Animated "Welcome to" */}
        <h1 className="bigTitle1">
          {welcomeText1.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.2, // Delay each word
              }}
              className="WelcomeTextjt"
            >
              {word}{" "}
            </motion.span>
          ))}
        </h1>

        {/* Animated "Computer Networks" */}
        <h1 className="bigTitle2">
          {welcomeText2.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.2 + 1, // Delay starts after the first line
              }}
              className="WelcomeTextjt"
            >
              {word}{" "}
            </motion.span>
          ))}
        </h1>

        {/* Static text and line */}
        <div className="research">
        {welcomeText3.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.2 + 3, // Delay each word
              }}
              className="WelcomeTextjt"
            >
              {word}{" "}
            </motion.span>
          ))}
        </div>
        <div className="line" />
      </div>
    </main>
  );
}
