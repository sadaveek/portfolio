import { useState, useEffect, useRef, useCallback } from "react";
import { Typewriter } from "react-simple-typewriter";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState(["Welcome to My Website. Type 'help' for a list of commands."]);
  const [showTerminal, setShowTerminal] = useState(false);
  const terminalRef = useRef(null);

  const [commands] = useState({
    help: "Available commands: help, clear, about, hello",
    clear: () => setHistory([]),
    about: "This is a custom React terminal!",
    hello: "What's up!",
  });

  const handleInput = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    let response = commands[input] || `Command not found: ${input}`;
    if (typeof response === "function") {
      response();
    } else {
      setHistory([...history, `> ${input}`, response]);
    }

    setInput("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTerminal(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={terminalRef} className="absolute bg-black text-white p-10 h-[1100px] w-[1840px] overflow-hidden">
      {!showTerminal && (
        <div className = "text-9xl h-screen flex items-center justify-center">
          <Typewriter words={["Hey, I'm Satvik.", ""]} cursor="|" autoStart={false} typeSpeed={70} deleteSpeed={40} delaySpeed={4000} />
        </div>
      )}
      {showTerminal && (
        <>
          {history.map((line, index) => (
            <div className = "text-6xl font-terminal" key={index}>{line}</div>
          ))}
          <form onSubmit={handleSubmit} className="flex">
            <span className="text-6xl text-white"> $ </span>
            <input
              type="text"
              value={input}
              onChange={handleInput}
              className="font-terminal bg-transparent border-none outline-none text-6xl text-blue-400 ml-1 w-full "
              autoFocus
            />
          </form>
        </>
      )}
    </div>
  );
};

export default Terminal;