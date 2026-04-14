import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-pink-300 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-5">
          <img src="/favicon.svg" className="h-10" />

          <button onClick={() => setOpen(true)} className="flex flex-col gap-1">
            <span className="w-7 h-[2px] bg-white"></span>
            <span className="w-7 h-[2px] bg-white"></span>
            <span className="w-7 h-[2px] bg-white"></span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 bg-pink-300 z-50 flex flex-col items-center justify-center text-4xl gap-10">
          <button
            className="absolute top-8 right-8 text-3xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <a href="#hero" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#program" onClick={() => setOpen(false)}>
            Program
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            O meni
          </a>
        </div>
      )}
    </>
  );
}
