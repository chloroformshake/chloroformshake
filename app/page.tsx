"use client"

import { useEffect, useState, useRef } from "react"

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
  "hero-banner/banehero1.webp",
  "hero-banner/banehero2.webp",
  "hero-banner/banehero3.webp",
  "hero-banner/banehero4.webp",
  "hero-banner/banehero5.webp",
  "hero-banner/cfs-hero.webp",
]

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isJerking, setIsJerking] = useState(false)
  const [toggleCount, setToggleCount] = useState(0)
  const [isScaryMode, setIsScaryMode] = useState(false)
  const clickPickElementsRef = useRef<any[]>([])

  const generateClickPickElements = () => {
    if (clickPickElementsRef.current.length > 0) {
      return clickPickElementsRef.current
    }

    const elements = []
    const centerX = typeof window !== "undefined" ? window.innerWidth / 2 : 0
    const centerY = typeof window !== "undefined" ? window.innerHeight / 2 : 0
    const cardWidth = 224
    const cardHeight = 192
    const gridSize = 280

    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2
      const distance = 200
      const offsetX = Math.cos(angle) * distance
      const offsetY = Math.sin(angle) * distance

      elements.push({
        left: `calc(50% + ${offsetX}px - 112px)`,
        top: `calc(50% + ${offsetY}px - 96px)`,
        rotAxis: ["rotateX", "rotateY", "rotateZ"][i % 3],
        zIndex: 6 - i,
        delay: Math.random() * 2,
        entranceDelay: i * 0.5,
        animation: ["bounce3d", "spin360", "pulse-scale", "wiggle", "skew", "float"][i],
        image: click_pick[i],
      })
    }

    clickPickElementsRef.current = elements
    return elements
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeToggle = () => {
    if (isScaryMode) return

    const newToggleCount = toggleCount + 1
    setToggleCount(newToggleCount)
    setIsJerking(true)
    setTimeout(() => setIsJerking(false), 300)

    if (newToggleCount === 1) {
      setIsDark(true)
    } else if (newToggleCount === 2) {
      setIsDark(false)
    } else if (newToggleCount === 3) {
      setIsScaryMode(true)
    }
  }

  if (!mounted) return null

  const symbols = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 30 + 100,
    delay: Math.random() * 2,
    selectedImage: cfs_images[i % cfs_images.length],
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

  const clickPickElements = generateClickPickElements()

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

        @keyframes polka-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes slide-in-card {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
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
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          font-weight: 900;
          font-size: 0.8em;
          transition: color 0.5s ease;
        }

        .polka-dot {
          animation: polka-pulse 1.5s ease-in-out infinite;
          border-radius: 50%;
          margin: 2px;
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
      `}</style>

      {!isScaryMode && (
        <button onClick={handleThemeToggle} className={`toggle-btn ${isDark ? "toggle-btn-dark" : "toggle-btn-light"}`}>
          {isDark ? "☀️ BRIGHT" : "🌙 DARK"}
        </button>
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
              position: "absolute",
              left: `${symbol.x}%`,
              top: `${symbol.y}%`,
              width: `${symbol.size}px`,
              height: `${symbol.size}px`,
              animationDelay: `${symbol.delay}s`,
              color: themeColors.symbolColor,
              textShadow: `0 0 10px ${themeColors.symbolGlow}, 0 0 20px ${themeColors.symbolGlow}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={symbol.selectedImage || "/placeholder.svg"}
              alt="cfs logo"
              style={{
                borderRadius: "50%",
                opacity: 0.7,
                animation: isScaryMode
                  ? "pulse-scale-frozen 0.1s ease-out forwards"
                  : "polka-pulse 1.5s ease-in-out infinite",
              }}
            />
          </div>
        )
      })}

      <div
        className={`relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 ${isJerking ? "jerk-all" : ""}`}
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
          className="relative w-full max-w-2xl sm:max-w-4xl lg:max-w-6xl h-auto sm:h-96 md:h-500px lg:h-600px mb-8 aspect-square sm:aspect-auto flex items-center justify-center"
          style={{ position: "relative", perspective: "1000px" }}
        >
          {clickPickElements.map((element, index) => {
            const animationNameMap: { [key: string]: string } = {
              spin360: "spin360",
              bounce3d: "bounce3d",
              "pulse-scale": "pulse-scale",
              wiggle: "wiggle",
              skew: "skew",
              float: "float",
            }
            const animationName = animationNameMap[element.animation] || "spin360"

            return (
              <div
                key={index}
                className={`rounded-lg shadow-2xl transition-all duration-500 ${isScaryMode ? "animate-frozen" : ""} ${isJerking ? "jerk-all" : ""}`}
                style={{
                  position: "absolute",
                  width: "clamp(120px, 15vw, 224px)",
                  height: "clamp(120px, 15vw, 192px)",
                  left: element.left,
                  top: element.top,
                  zIndex: element.zIndex,
                  overflow: "hidden",
                  transformOrigin: "center",
                  animation: isScaryMode
                    ? `slide-in-card 0.6s ease-out ${element.entranceDelay}s forwards, pulse-scale-frozen 0.1s ease-out ${element.entranceDelay + 0.6}s forwards`
                    : `slide-in-card 0.6s ease-out ${element.entranceDelay}s forwards, ${animationName} 2s ease-in-out ${element.entranceDelay + 0.6}s infinite`,
                }}
              >
                <img
                  src={click_pick[index % click_pick.length] || "/placeholder.svg"}
                  alt={`Portfolio piece ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            )
          })}
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
