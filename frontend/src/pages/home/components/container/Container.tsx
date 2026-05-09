import { Box } from "@mui/material";
import { ContainerProps } from "./Container.types";

export function Container({ children }: ContainerProps) {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",

        background: `
          radial-gradient(circle at center, rgba(255,140,0,0.22) 0%, transparent 22%),
          radial-gradient(circle at center, rgba(255,180,0,0.08) 0%, transparent 42%),
          linear-gradient(
            180deg,
            #2a1607 0%,
            #1a0d04 35%,
            #120802 65%,
            #090401 100%
          )
        `,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,

          background: `
            radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.82) 100%)
          `,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 340,
          zIndex: 0,
          pointerEvents: "none",

          borderRadius: "50%",

          background: `
            radial-gradient(circle,
              rgba(255,160,0,0.22) 0%,
              rgba(255,120,0,0.08) 40%,
              transparent 75%
            )
          `,

          filter: "blur(35px)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",

          width: 650,
          height: 650,
          borderRadius: "50%",

          background: `
            radial-gradient(circle,
              rgba(255,170,0,0.35) 0%,
              rgba(255,140,0,0.12) 40%,
              transparent 75%
            )
          `,

          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {[...Array(60)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",

              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,

              borderRadius: "50%",

              background: i % 2 === 0 ? "rgba(255,200,80,0.9)" : "rgba(255,140,0,0.7)",

              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,

              boxShadow: "0 0 8px rgba(255,180,0,0.8)",

              animation: `floatParticle ${Math.random() * 8 + 6}s linear infinite`,

              opacity: 0,
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </Box>

      <style>
        {`
          @keyframes floatParticle {
            0% {
              transform: translateY(0px);
              opacity: 0;
            }

            10% {
              opacity: 1;
            }

            100% {
              transform: translateY(-220px);
              opacity: 0;
            }
          }
        `}
      </style>
    </Box>
  );
}
