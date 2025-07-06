"use client";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-60 text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* ロゴ */}
        <div className="font-bold text-lg">
          <span className="text-sm block">WEB engineer</span>
          <span className="text-xl block">Kazuma</span>
        </div>

        {/* ナビゲーション＋ハンバーガー */}
        <div className="md:flex md:items-center">
          {/* ハンバーガーボタン（モバイル用） */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>

          {/* ナビゲーション */}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-black bg-opacity-90 text-center 
              md:static md:block md:bg-transparent md:text-left`}
          >
            <ul className="flex flex-col space-y-4 p-4 md:flex-row md:space-y-0 md:space-x-6 md:p-0">
              <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
              <li><a href="#works" onClick={() => setIsOpen(false)}>Work</a></li>
              <li><a href="#blogList" onClick={() => setIsOpen(false)}>Blog</a></li>
              <li><a href="#" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
