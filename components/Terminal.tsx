"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from "lucide-react";

interface CommandHistory {
  cmd: string;
  output: React.ReactNode;
}

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      cmd: "welcome",
      output: (
        <div className="space-y-1 text-white/80">
          <p className="text-[#22C55E] font-bold">
            Kataru Rahul Reddy — Developer Shell v2.4
          </p>
          <p className="text-white/60 text-xs">
            Type <span className="text-[#38bdf8] font-bold">&apos;help&apos;</span> to inspect available commands.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputVal.trim().toLowerCase();
    if (!trimmed) return;

    let response: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        response = (
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs font-mono">
            <div><span className="text-[#38bdf8]">about</span> — Bio &amp; role</div>
            <div><span className="text-[#38bdf8]">skills</span> — Tech stack matrix</div>
            <div><span className="text-[#38bdf8]">projects</span> — Featured works</div>
            <div><span className="text-[#38bdf8]">education</span> — University &amp; CGPA</div>
            <div><span className="text-[#38bdf8]">resume</span> — View full CV &amp; PDF</div>
            <div><span className="text-[#38bdf8]">contact</span> — Direct email &amp; phone</div>
            <div><span className="text-[#38bdf8]">curl /predict</span> — Churn API test</div>
            <div><span className="text-[#38bdf8]">clear</span> — Clear console</div>
            <div><span className="text-[#38bdf8]">exit</span> — Close terminal</div>
          </div>
        );
        break;

      case "about":
      case "bio":
        response = (
          <p className="text-xs text-white/80 leading-relaxed font-sans-clean">
            Computer Science undergraduate at NMIT Bengaluru with hands-on experience in Python, SQL, data analysis, database systems, and backend development. Focused on scalable data solutions and ML inference pipelines.
          </p>
        );
        break;

      case "skills":
        response = (
          <div className="space-y-1 text-xs">
            <p><span className="text-green-400 font-bold">Languages:</span> Python, Java, C, SQL</p>
            <p><span className="text-blue-400 font-bold">AI / ML:</span> Scikit-learn, Regression, Classification, Clustering, NLP, TF-IDF, YOLO, MediaPipe, OpenCV</p>
            <p><span className="text-purple-400 font-bold">Data:</span> Pandas, NumPy, Matplotlib, Seaborn, Power BI, EDA</p>
            <p><span className="text-amber-400 font-bold">Backend:</span> FastAPI, REST APIs, JWT Auth, Microservices</p>
            <p><span className="text-rose-400 font-bold">Databases:</span> MySQL, Relational Schema, Indexing</p>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="space-y-1.5 text-xs">
            <p>1. <a href="https://github.com/nmit-1NT23CS105/coustomer-chrun-prediction" target="_blank" rel="noreferrer" className="text-[#38bdf8] underline">Customer Churn Prediction</a> (FastAPI + ML, 83.2% recall)</p>
            <p>2. <a href="https://ai-document-intelligence-l4hg.onrender.com/" target="_blank" rel="noreferrer" className="text-[#38bdf8] underline">AI Document Intelligence</a> (FastAPI + Gemini RAG, 37 tests)</p>
            <p>3. <a href="https://github.com/nmit-1NT23CS082/AI-Dangerous-Driving-Detection" target="_blank" rel="noreferrer" className="text-[#38bdf8] underline">Dual-Stream Driver Safety</a> (YOLOv8 + MediaPipe, 4 risk tiers)</p>
          </div>
        );
        break;

      case "education":
        response = (
          <div className="text-xs space-y-1">
            <p>• <span className="font-bold text-white">NMIT Bengaluru</span> — B.E. CSE (2023–2027) | <span className="text-[#22C55E]">CGPA 8.55</span></p>
            <p>• <span className="font-bold text-white">Narayana Jr College</span> — Class 12th (2022–2023) | 94.8%</p>
            <p>• <span className="font-bold text-white">Viswabharati EMHS</span> — Class 10th (2020–2021) | 100%</p>
          </div>
        );
        break;

      case "resume":
      case "cv":
        response = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-[#22C55E] font-bold">KATARU RAHUL REDDY — RESUME SUMMARY</p>
            <p>• Education: NMIT Bengaluru B.E. CSE (CGPA 8.55)</p>
            <p>• Stack: Python, SQL, FastAPI, Scikit-learn, OpenCV, YOLOv8, MySQL</p>
            <p>• Projects: Customer Churn Platform (83.2% recall), AI Doc Intelligence (37 tests), Driver Safety Vision (30+ FPS)</p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="/resume" className="text-[#38bdf8] underline">Open Interactive Resume (/resume) ↗</a>
              <a href="https://drive.google.com/file/d/1qjs2OjaPOBqXzvPcmZdoJbPHgLXzPPoS/view?usp=sharing" target="_blank" rel="noreferrer" className="text-[#22C55E] underline">Download PDF (Google Drive) ↗</a>
            </div>
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="text-xs space-y-1">
            <p>Email: <a href="mailto:katarurahul1014@gmail.com" className="text-[#38bdf8] underline">katarurahul1014@gmail.com</a></p>
            <p>Phone: <span className="text-white">+91-7995263968</span></p>
            <p>GitHub: <a href="https://github.com/nmit-1NT23CS105" target="_blank" rel="noreferrer" className="text-[#38bdf8] underline">github.com/nmit-1NT23CS105</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/kataru-rahul-95a5173a8/" target="_blank" rel="noreferrer" className="text-[#38bdf8] underline">linkedin.com/in/kataru-rahul</a></p>
          </div>
        );
        break;

      case "curl /predict":
      case "curl":
        response = (
          <pre className="text-[11px] text-green-400 bg-black/80 p-2.5 rounded-lg overflow-x-auto">
{`HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "success",
  "prediction": "HIGH_CHURN_RISK",
  "probability": 0.8346,
  "recommended_action": "TRIGGER_RETENTION_DISCOUNT",
  "model_latency_ms": 14.2
}`}
          </pre>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
        setIsOpen(false);
        setInputVal("");
        return;

      default:
        response = (
          <p className="text-xs text-red-400 font-mono">
            zsh: command not found: {trimmed}. Type &apos;help&apos; for list.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { cmd: inputVal, output: response }]);
    setInputVal("");
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[80] flex items-center gap-2 bg-[#1a1a1a]/90 hover:bg-[#262626] border border-white/10 hover:border-white/20 text-white/90 px-3.5 py-2 rounded-full shadow-2xl backdrop-blur-xl transition-all hover:scale-105 active:scale-95 group text-xs font-mono"
        aria-label="Toggle developer terminal"
      >
        <TerminalIcon size={14} className="text-[#22C55E] group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline font-semibold">CLI Shell</span>
      </motion.button>

      {/* Terminal Window Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-20 right-4 sm:right-6 z-[85] w-[calc(100vw-32px)] sm:w-[460px] h-[340px] bg-[#0c0c0c]/95 border border-white/15 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            {/* Window Title Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10 select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block cursor-pointer" onClick={() => setIsOpen(false)} />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono text-white/50">rahul@nmit:~</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Close terminal"
              >
                <X size={14} />
              </button>
            </div>

            {/* Scrollable Command Output Body */}
            <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-3 no-scrollbar">
              {history.map((h, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-white/50">
                    <span className="text-[#22C55E]">➜</span>
                    <span className="text-[#38bdf8]">~</span>
                    <span className="text-white/90">{h.cmd}</span>
                  </div>
                  <div className="pl-4 text-white/80">{h.output}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Command Input Prompt */}
            <form
              onSubmit={handleCommand}
              className="flex items-center gap-2 px-4 py-2.5 bg-black/60 border-t border-white/10"
            >
              <span className="text-[#22C55E] text-xs font-mono font-bold">➜</span>
              <span className="text-[#38bdf8] text-xs font-mono">~</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help', 'resume', 'skills'..."
                className="flex-1 bg-transparent text-xs font-mono text-white placeholder-white/30 focus:outline-hidden"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
