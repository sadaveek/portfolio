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
    help: "Available commands: help, clear, about, resume, contact, cd [section]",
    clear: () => setHistory([]),
    about: "My name is Satvik Malneedi, and I am a passionate learner, developer, and engineer. I am currently a student at Georgia Tech, studying Computer Engineering. Take a look through my website to learn more about my projects and skills!",
    resume: () => window.open(Resume),
    contact: `📧 Email: samalneedi@gmail.com\n🔗 LinkedIn: https://www.linkedin.com/in/satvikmalneedi/ \n 🐱 GitHub: github.com/sadaveek`,
    cd: (section) => {
      if (!section) {
        setHistory((prev) => [...prev, `> cd`, "Please specify a section name."]);
        return;
      }
      const capitalized = section.charAt(0).toUpperCase() + section.slice(1).toLowerCase();
      const el = document.getElementById(capitalized);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setHistory((prev) => [...prev, `> cd ${section}`, `Navigating to ${capitalized}...`]);
      } else {
        setHistory((prev) => [...prev, `> cd ${section}`, `Section not found: ${section}`]);
      }
    }
  });

  const handleInput = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
  
    const [cmd, ...args] = input.trim().split(" ");
    const command = commands[cmd];
  
    if (typeof command === "function") {
      command(...args);
    } else if (typeof command === "string") {
      setHistory((prevHistory) => [...prevHistory, `> ${input}`, command]);
    } else {
      setHistory((prevHistory) => [...prevHistory, `> ${input}`, `Command not found: ${input}`]);
    }
  
    setInput("");
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTerminal(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div ref={terminalRef} className="absolute bg-black text-white p-10 h-[1100px] w-[1840px] overflow-y-auto">
      {!showTerminal && (
        <div className="text-9xl h-screen flex items-center justify-center font-light" style={{ textShadow: "0 0 5px #fff" }}>
          <Typewriter words={["Hey, I'm Satvik.", ""]} cursor="|" autoStart={false} typeSpeed={70} deleteSpeed={40} delaySpeed={2000} />
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