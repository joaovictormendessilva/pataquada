import { Box, Button } from "@mui/material";
import { useState } from "react";

export function DigButton() {
  const [digging, setDigging] = useState(false);

  async function handleDig() {
    if (digging) return;

    setDigging(true);

    await new Promise((resolve) => setTimeout(resolve, 1400));

    setDigging(false);
  }

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
      }}
    >
      <Box
        sx={{
          flex: 1,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          position: "relative",
        }}
      >
        {digging &&
          [...Array(14)].map((_, i) => {
            const randomX = (Math.random() - 0.5) * 160;

            const randomDelay = Math.random() * 0.5;

            const randomDuration = 0.8 + Math.random() * 0.7;

            const size = 8 + Math.random() * 10;

            return (
              <Box
                key={i}
                sx={{
                  "--x": `${randomX}px`,

                  position: "absolute",

                  width: size,
                  height: size,

                  borderRadius: "50%",

                  background: i % 3 === 0 ? "#ffcf4d" : i % 2 === 0 ? "#8a4b08" : "#5b2d0a",

                  left: "50%",
                  top: "50%",

                  opacity: 0,

                  pointerEvents: "none",

                  filter: "blur(1px)",

                  animation: `
                    particleRise
                    ${randomDuration}s
                    linear
                    ${randomDelay}s
                    infinite
                  `,
                }}
              />
            );
          })}

        <Button
          disabled={digging}
          onClick={handleDig}
          sx={{
            width: 300,
            height: 300,

            borderRadius: "50%",

            position: "relative",

            overflow: "hidden",

            fontSize: digging ? 42 : 54,
            fontWeight: 900,

            letterSpacing: "0.08em",

            color: "#fff3d1",

            background: `
              radial-gradient(
                circle at 50% 30%,
                #ffdb66 0%,
                #ffbb22 32%,
                #d67b00 68%,
                #7a3f00 100%
              )
            `,

            border: "12px solid #4a2506",

            boxShadow: digging
              ? `
                inset 0 6px 10px rgba(255,255,255,0.16),
                inset 0 -10px 16px rgba(0,0,0,0.45),

                0 2px 0 #2b1203,
                0 6px 14px rgba(0,0,0,0.45)
              `
              : `
                inset 0 10px 14px rgba(255,255,255,0.24),
                inset 0 -18px 24px rgba(0,0,0,0.45),

                0 10px 0 #2b1203,
                0 18px 28px rgba(0,0,0,0.55),

                0 0 0 10px rgba(255,180,50,0.08)
              `,

            textShadow: `
              0 3px 0 rgba(90,40,0,0.9),
              0 5px 10px rgba(0,0,0,0.45)
            `,

            transform: digging ? "translateY(10px) scale(0.97)" : "translateY(0px)",

            transition: `
              transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 220ms ease,
              font-size 160ms ease
            `,

            animation: digging ? "digShake 0.45s infinite" : "none",

            touchAction: "manipulation",

            "&:hover": {
              transform: digging ? "translateY(10px) scale(0.97)" : "translateY(2px) scale(1.01)",
            },

            "&::before": {
              content: '""',

              position: "absolute",

              inset: 14,

              borderRadius: "50%",

              border: "6px solid rgba(255,255,255,0.14)",

              boxShadow: `
                inset 0 2px 4px rgba(255,255,255,0.18),
                inset 0 -4px 6px rgba(0,0,0,0.22)
              `,

              pointerEvents: "none",
            },

            "&::after": {
              content: '""',

              position: "absolute",

              top: 24,
              left: 42,

              width: "42%",
              height: "18%",

              borderRadius: "50%",

              background: "rgba(255,255,255,0.16)",

              filter: "blur(8px)",

              transform: "rotate(-10deg)",

              pointerEvents: "none",
            },

            "@keyframes digShake": {
              "0%": {
                transform: "translateY(10px) rotate(0deg)",
              },

              "25%": {
                transform: "translateY(12px) rotate(-1deg)",
              },

              "50%": {
                transform: "translateY(10px) rotate(1deg)",
              },

              "75%": {
                transform: "translateY(12px) rotate(-1deg)",
              },

              "100%": {
                transform: "translateY(10px) rotate(0deg)",
              },
            },

            "@keyframes particleRise": {
              "0%": {
                opacity: 0,

                transform: "translate(-50%, 0px) scale(0.6)",
              },

              "15%": {
                opacity: 1,
              },

              "100%": {
                opacity: 0,

                transform: `
                  translate(
                    calc(-50% + var(--x)),
                    -140px
                  )
                  scale(1.5)
                `,
              },
            },
          }}
        >
          {digging ? "CAVANDO..." : "CAVAR"}
        </Button>
      </Box>
    </Box>
  );
}
