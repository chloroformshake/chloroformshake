"use client"

import { useEffect, useState } from "react"

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isJerking, setIsJerking] = useState(false)
  const [toggleCount, setToggleCount] = useState(0)
  const [showWarning, setShowWarning] = useState(false)
  const [isScaryMode, setIsScaryMode] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeToggle = () => {
    if (isScaryMode) return

    if (toggleCount === 0) {
      setIsJerking(true)
      setTimeout(() => setIsJerking(false), 300)
      setIsDark(true)
      setToggleCount(1)
    } else if (toggleCount === 1) {
      setShowWarning(true)
    }
  }

  const handleWarningClick = () => {
    setIsScaryMode(true)
    setShowWarning(false)
    setIsJerking(true)
    setTimeout(() => setIsJerking(false), 300)
  }

  if (!mounted) return null

  const symbols = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 30 + 20,
    delay: Math.random() * 2,
  }))

  const themeColors = {
    bg: isScaryMode ? "#8b0000" : isDark ? "bg-black" : "bg-white",
    title: isScaryMode ? "#ff0000" : isDark ? "text-black" : "text-gray-900",
    author: isScaryMode ? "#cc0000" : isDark ? "text-red-500" : "text-red-600",
    authorSubtext: isScaryMode ? "#990000" : isDark ? "text-gray-400" : "text-gray-500",
    symbolColor: isScaryMode ? "#ff0000" : isDark ? "#22ff00" : "#ff006e",
    symbolGlow: isScaryMode ? "rgba(255, 0, 0, 0.8)" : isDark ? "rgba(34, 255, 0, 0.5)" : "rgba(255, 0, 110, 0.4)",
    footer: isScaryMode ? "#660000" : isDark ? "text-gray-400" : "text-gray-600",
  }

  return (
    <div
      className={`relative w-full min-h-screen overflow-hidden transition-colors duration-500`}
      style={{
        backgroundColor: isScaryMode ? "#8b0000" : isDark ? "#000" : "#fff",
      }}
    >
      <style>{`
        @keyframes spin360 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes bounce3d {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-30px) rotateX(180deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }

        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes pulse-scale-frozen {
          0% { transform: scale(1.1); }
          100% { transform: scale(1.1); }
        }

        @keyframes slide-in {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        @keyframes skew {
          0%, 100% { transform: skewX(0deg); }
          50% { transform: skewX(10deg); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0px); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        @keyframes jerk-jumpscare {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.08) rotate(-2deg); }
          100% { transform: scale(1) rotate(0deg); }
        }

        .animate-spin360 {
          animation: spin360 4s linear infinite;
        }

        .animate-bounce3d {
          animation: bounce3d 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 1.5s ease-in-out infinite;
        }

        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }

        .animate-skew {
          animation: skew 2.5s ease-in-out infinite;
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out infinite;
        }

        .animate-frozen {
          animation: pulse-scale-frozen 0.1s ease-out forwards;
        }

        .jerk-all {
          animation: jerk-jumpscare 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .symbol {
          position: absolute;
          font-weight: 900;
          font-size: 1.2em;
          text-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
          transition: color 0.5s ease;
        }

        .toggle-btn {
          position: fixed;
          top: 12px;
          right: 12px;
          z-index: 50;
          padding: 10px 16px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 12px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        @media (min-width: 768px) {
          .toggle-btn {
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            font-size: 14px;
          }
        }

        .toggle-btn:hover {
          transform: scale(1.05);
        }

        .toggle-btn:active {
          transform: scale(0.95);
        }

        .toggle-btn-dark {
          background: linear-gradient(135deg, #22ff00 0%, #00ff88 100%);
          color: #000;
        }

        .toggle-btn-light {
          background: linear-gradient(135deg, #ff006e 0%, #ff0055 100%);
          color: #fff;
        }

        .warning-box {
          position: fixed;
          top: 70px;
          right: 12px;
          background: rgba(255, 0, 0, 0.9);
          color: white;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          z-index: 51;
          max-width: 200px;
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
          animation: slide-in 0.3s ease-out;
          border: 2px solid #ff0000;
          text-align: center;
        }

        @media (min-width: 768px) {
          .warning-box {
            top: 80px;
            right: 20px;
            font-size: 13px;
            padding: 14px 18px;
            max-width: 220px;
          }
        }

        .warning-btn {
          background: #ffff00;
          color: #000;
          border: none;
          padding: 6px 12px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 11px;
          cursor: pointer;
          margin-top: 8px;
          transition: all 0.2s ease;
        }

        .warning-btn:hover {
          background: #ffffff;
          transform: scale(1.05);
        }
      `}</style>

      {!isScaryMode && (
        <button onClick={handleThemeToggle} className={`toggle-btn ${isDark ? "toggle-btn-dark" : "toggle-btn-light"}`}>
          {isDark ? "☀️ BRIGHT" : "🌙 DARK"}
        </button>
      )}

      {showWarning && (
        <div className="warning-box">
          <p>⚠️ AVOID CHANGING TO DARK MODE AGAIN</p>
          <button className="warning-btn" onClick={handleWarningClick}>
            I UNDERSTAND
          </button>
        </div>
      )}

      {symbols.map((symbol) => {
        const animations = isScaryMode
          ? ["animate-frozen"]
          : [
              "animate-spin360",
              "animate-bounce3d",
              "animate-float",
              "animate-wiggle",
              "animate-pulse-scale",
              "animate-skew",
              "animate-shake",
            ]
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)]

        return (
          <div
            key={symbol.id}
            className={`symbol ${randomAnimation} ${isJerking ? "jerk-all" : ""}`}
            style={{
              left: `${symbol.x}%`,
              top: `${symbol.y}%`,
              fontSize: `${symbol.size}px`,
              color: themeColors.symbolColor,
              textShadow: `0 0 10px ${themeColors.symbolColor}, 0 0 20px ${themeColors.symbolGlow}`,
              animationDelay: `${symbol.delay}s`,
              opacity: Math.random() * 0.6 + 0.4,
            }}
          >
            $f$
          </div>
        )
      })}

      <div
        className={`relative z-10 w-full min-h-screen flex flex-col items-center justify-start pt-6 sm:pt-8 px-4 sm:px-6 lg:px-8 ${isJerking ? "jerk-all" : ""}`}
      >
        <h1
          className={`text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-8 sm:mb-12 drop-shadow-lg transition-colors duration-500 ${isJerking ? "jerk-all" : ""} text-center`}
          style={{
            animation: "slide-in 1s ease-out",
            color: themeColors.title,
            textShadow: isScaryMode
              ? "4px 4px 0px rgba(0,0,0,0.8)"
              : isDark
                ? "4px 4px 0px rgba(255,255,255,0.1)"
                : "2px 2px 0px rgba(0,0,0,0.1)",
          }}
        >
          chloroformshake
        </h1>

        <div
          className={`mb-10 sm:mb-16 text-center transition-all duration-500 ${isJerking ? "jerk-all" : ""} ${isScaryMode ? "" : "animate-float"}`}
        >
          <h2
            className={`text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg transition-colors duration-500`}
            style={{ color: themeColors.author }}
          >
            siddharth kushwaha
          </h2>
          <p
            className={`text-lg sm:text-xl md:text-2xl opacity-50 transition-colors duration-500`}
            style={{ color: themeColors.authorSubtext }}
          >
            siddharth kushwaha
          </p>
        </div>

        <div
          className={`relative w-full max-w-2xl sm:max-w-4xl lg:max-w-6xl h-auto sm:h-96 md:h-500px lg:h-600px mb-8 aspect-square sm:aspect-auto ${isJerking ? "jerk-all" : ""}`}
        >
          <div
            className="rounded-lg shadow-2xl transition-all duration-500"
            style={{
              left: "5%",
              top: "0%",
              width: "clamp(120px, 15vw, 224px)",
              height: "clamp(120px, 15vw, 192px)",
              position: "absolute",
              background: isDark
                ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                : "linear-gradient(135deg, #a8dadc 0%, #c4b5fd 100%)",
              animation: "bounce3d 2.5s ease-in-out infinite",
              animationDelay: "0s",
            }}
          />

          <div
            className="rounded-lg shadow-2xl transition-all duration-500"
            style={{
              left: "30%",
              top: "-5%",
              width: "clamp(140px, 18vw, 256px)",
              height: "clamp(140px, 18vw, 224px)",
              position: "absolute",
              background: isDark
                ? "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
                : "linear-gradient(135deg, #faa5a5 0%, #f5a5a5 100%)",
              animation: "spin360 5s linear infinite",
              animationDelay: "0.2s",
              border: `3px solid ${isDark ? "#fff" : "#333"}`,
            }}
          />

          <div
            className="rounded-lg shadow-2xl transition-all duration-500"
            style={{
              right: "5%",
              top: "5%",
              width: "clamp(130px, 17vw, 240px)",
              height: "clamp(130px, 17vw, 208px)",
              position: "absolute",
              background: isDark
                ? "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
                : "linear-gradient(135deg, #a8d8ff 0%, #a8e6ff 100%)",
              animation: "pulse-scale 2s ease-in-out infinite",
              animationDelay: "0.4s",
            }}
          />

          <div
            className="rounded-lg shadow-2xl transition-all duration-500"
            style={{
              left: "0%",
              bottom: "5%",
              width: "clamp(110px, 14vw, 208px)",
              height: "clamp(130px, 17vw, 240px)",
              position: "absolute",
              background: isDark
                ? "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
                : "linear-gradient(135deg, #f5c5a8 0%, #fff5a8 100%)",
              animation: "wiggle 1.5s ease-in-out infinite",
              animationDelay: "0.6s",
            }}
          />

          <div
            className="rounded-lg shadow-2xl transition-all duration-500"
            style={{
              left: "35%",
              bottom: "0%",
              width: "clamp(140px, 18vw, 256px)",
              height: "clamp(120px, 15vw, 192px)",
              position: "absolute",
              background: isDark
                ? "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
                : "linear-gradient(135deg, #a8eda8 0%, #a8edc8 100%)",
              animation: "skew 2.5s ease-in-out infinite",
              animationDelay: "0.8s",
            }}
          />

          <div
            className="rounded-lg shadow-2xl transition-all duration-500"
            style={{
              right: "0%",
              bottom: "10%",
              width: "clamp(120px, 15vw, 224px)",
              height: "clamp(120px, 15vw, 224px)",
              position: "absolute",
              background: isDark
                ? "linear-gradient(135deg, #fa8b00 0%, #ffc107 100%)"
                : "linear-gradient(135deg, #ffd4a8 0%, #ffe8a8 100%)",
              animation: "float 4s ease-in-out infinite",
              animationDelay: "1s",
            }}
          />

          <div
            className="rounded-lg shadow-2xl transition-all duration-500"
            style={{
              left: "50%",
              top: "50%",
              width: "clamp(120px, 15vw, 192px)",
              height: "clamp(140px, 18vw, 224px)",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              background: isDark
                ? "linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)"
                : "linear-gradient(135deg, #f0a8ff 0%, #a8f0ff 100%)",
              animation: "bounce3d 3s ease-in-out infinite",
              animationDelay: "1.2s",
            }}
          />
        </div>

        <div
          className={`mt-10 sm:mt-16 text-center opacity-30 transition-colors duration-500 ${isJerking ? "jerk-all" : ""}`}
        >
          <p style={{ color: themeColors.footer }}>☞ theme toggle enabled ☜</p>
        </div>
      </div>
    </div>
  )
}
