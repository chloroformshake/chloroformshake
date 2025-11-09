"use client"

import { useEffect, useState } from "react"

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isJerking, setIsJerking] = useState(false)
  const [toggleCount, setToggleCount] = useState(0)
  const [showWarning, setShowWarning] = useState(false)
  const [isScaryMode, setIsScaryMode] = useState(false)

  const cfs_images = [
    "cfs-logos/1.webp",
    "cfs-logos/2.webp",
    "cfs-logos/1.webp",
    "cfs-logos/2.webp",
    "cfs-logos/1.webp",
    "cfs-logos/2.webp",
    "cfs-logos/1.webp",
    "cfs-logos/2.webp",
    "cfs-logos/3.webp",
    "cfs-logos/4.webp",
    "cfs-logos/4.webp",
    "cfs-logos/4.webp",
    "cfs-logos/5.webp",
    "cfs-logos/6.webp",
    "cfs-logos/6.webp",
    "cfs-logos/6.webp",
    "cfs-logos/6.webp",
  ];

  const click_pick = [
    "hero-banner/bannerhero1.webp",
    "hero-banner/bannerhero2.webp",
    "hero-banner/bannerhero3.webp",
    "hero-banner/bannerhero4.webp",
    "hero-banner/bannerhero5.webp",
    "hero-banner/cfs-hero.webp",
  ];

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
    size: Math.random() * 30 + 100,
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

        const randomImage = cfs_images[Math.floor(Math.random() * cfs_images.length)];


        return (
          <div
            key={symbol.id}
            className={`symbol ${randomAnimation} ${isJerking ? "jerk-all" : ""}`}
            style={{
              position: "absolute",
              left: `${symbol.x}%`,
              top: `${symbol.y}%`,
              width: `${symbol.size}px`,
              height: `${symbol.size}px`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              animationDelay: `${symbol.delay}s`,
              backgroundImage: `url(${randomImage})`,
            }}
          />
        )
      })}

      <div
        className={`relative z-10 w-full min-h-screen flex flex-col items-center justify-start pt-6 sm:pt-0 px-4 sm:px-6 lg:px-8 ${isJerking ? "jerk-all" : ""}`}
      >
        <h1
          className={`text-4xl sm:text-5xl md:text-7xl lg:text-[196px] mb-8 sm:mb-12 drop-shadow-lg transition-colors duration-500 ${isJerking ? "jerk-all" : ""} text-center`}
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
          className="relative w-full max-w-2xl sm:max-w-4xl lg:max-w-6xl h-auto sm:h-96 md:h-500px lg:h-600px mb-8 aspect-square sm:aspect-auto"
          style={{ position: "relative" }}
        >
          {click_pick.map((image, index) => (
            <div
              key={index}
              className="rounded-lg shadow-2xl transition-all duration-500"
              style={{
                position: "absolute",
                width: "clamp(120px, 15vw, 224px)",
                height: "clamp(120px, 15vw, 192px)",
                backgroundImage: `url(${image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                animation: "bounce3d 2.5s ease-in-out infinite",
                animationDelay: `${index * 0.2}s`,
              }}
            />
          ))}
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
