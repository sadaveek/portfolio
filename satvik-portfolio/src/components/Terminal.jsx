import { useState, useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import Resume from "../assets/Resume - Satvik Malneedi.pdf";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState(["Welcome to My Website. Type 'help' for a list of commands."]);
  const [showTerminal, setShowTerminal] = useState(false);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const [commands] = useState({
    help: "Available commands: help, clear, about, resume",
    clear: () => setHistory([]),
    about: "My name is Satvik Malneedi, an I am a passionate learner, developer, and engineer. I am currently a student at Georgia Tech, studying Computer Engineering. Take a look through my website to learn more about my projects and skills!",
    resume: () => window.open(Resume),
  });

  const handleInput = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    let response = commands[input] || `Command not found: ${input}`;
    if (typeof response === "function") {
      response();
    } else {
      setHistory((prevHistory) => [...prevHistory, `> ${input}`, response]);
    }

    setInput("");

    setTimeout(() => inputRef.current?.focus(), 0);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTerminal(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const focusInterval = setInterval(() => {
      if (document.activeElement !== inputRef.current && showTerminal) {
        inputRef.current?.focus();
      }
    }, 100);

    return () => clearInterval(focusInterval);
  }, [showTerminal]);

  return (
    <div ref={terminalRef} className="absolute bg-black text-white p-10 h-[1100px] w-[1840px] overflow-y-auto">
      {!showTerminal && (
        <div className="text-9xl h-screen flex items-center justify-center font-light" style={{ textShadow: "0 0 5px #fff" }}>
          <Typewriter words={["Hey, I'm Satvik.", ""]} cursor="|" autoStart={false} typeSpeed={70} deleteSpeed={40} delaySpeed={4000} />
        </div>
      )}
      {showTerminal && (
        <>
          {history.map((line, index) => (
            <div className="text-6xl font-terminal" key={index}>
              {line}
            </div>
          ))}
          <form onSubmit={handleSubmit} className="flex">
            <span className="text-6xl text-white"> $ </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInput}
              className="font-terminal bg-transparent border-none outline-none text-6xl text-blue-400 ml-1 w-full"
              autoFocus
            />
          </form>
        </>
      )}
    </div>
  );
};

export default Terminal;