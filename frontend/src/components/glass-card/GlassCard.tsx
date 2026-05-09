import { Box, Stack, Typography } from "@mui/material";
import { GlassCardProps } from "./GlassCard.types";

export function GlassCard({ icon, title, subtitle, extraSubtitle, variant = "default" }: GlassCardProps) {
  const isSpecial = variant === "special";

  return (
    <Stack
      sx={{
        position: "relative",
        overflow: "hidden",

        flexDirection: "row",
        alignItems: "center",

        width: 250,
        height: 100,

        px: 1,

        borderRadius: "22px",

        background: `
          linear-gradient(
            180deg,
            rgba(48,28,12,0.96) 0%,
            rgba(22,10,4,0.98) 100%
          )
        `,

        border: isSpecial ? "1px solid rgba(255,180,70,0.14)" : "1px solid rgba(255,255,255,0.05)",

        boxShadow: isSpecial
          ? `
              inset 0 1px 0 rgba(255,255,255,0.04),
              0 8px 24px rgba(0,0,0,0.42),
              0 0 18px rgba(255,140,0,0.08)
            `
          : `
              inset 0 1px 0 rgba(255,255,255,0.03),
              0 6px 18px rgba(0,0,0,0.36)
            `,
      }}
    >
      {/* textura */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,

          opacity: 0.05,

          backgroundImage: `
            radial-gradient(circle at 20% 30%, #fff 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, #fff 1px, transparent 1px)
          `,

          backgroundSize: "26px 26px",
        }}
      />

      {/* ÁREA ÍCONE */}
      <Box
        sx={{
          width: 96,
          minWidth: 96,

          position: "relative",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          overflow: "visible",
        }}
      >
        {/* glow */}
        <Box
          sx={{
            position: "absolute",

            width: isSpecial ? 58 : 46,
            height: isSpecial ? 58 : 46,

            borderRadius: "50%",

            background: isSpecial ? "rgba(255,170,40,0.14)" : "rgba(255,170,40,0.06)",

            filter: `blur(${isSpecial ? 18 : 14}px)`,
          }}
        />

        {/* círculo */}
        <Box
          sx={{
            position: "relative",

            width: 70,
            height: 70,

            borderRadius: "50%",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            background: isSpecial
              ? `
                linear-gradient(
                  180deg,
                  rgba(255,255,255,0.08),
                  rgba(255,255,255,0.03)
                )
              `
              : `
                linear-gradient(
                  180deg,
                  rgba(255,255,255,0.04),
                  rgba(255,255,255,0.02)
                )
              `,

            border: "1px solid rgba(255,255,255,0.06)",

            boxShadow: `
              inset 0 1px 0 rgba(255,255,255,0.08),
              0 4px 12px rgba(0,0,0,0.35)
            `,
          }}
        >
          {icon}
        </Box>
      </Box>

      {/* TEXTO */}
      <Box
        sx={{
          flex: 1,

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          minWidth: 0,

          pr: 1,
        }}
      >
        {/* LABEL */}
        <Typography
          sx={{
            fontSize: 10,
            fontWeight: 800,

            letterSpacing: "0.14em",

            textTransform: "uppercase",

            color: "rgba(255,220,170,0.45)",

            mb: 0.5,
          }}
        >
          {title}
        </Typography>

        {/* VALOR */}
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 900,

            lineHeight: 1,

            color: "#FFF4E3",

            textShadow: "0 2px 4px rgba(0,0,0,0.5)",

            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",

            maxWidth: 120,
          }}
        >
          {subtitle}
        </Typography>

        {/* EXTRA */}
        {typeof extraSubtitle === "string" ? (
          <Typography
            sx={{
              mt: 0.7,

              fontSize: 12,
              fontWeight: 700,

              color: "rgba(255,220,180,0.7)",
            }}
          >
            {extraSubtitle}
          </Typography>
        ) : (
          <Box sx={{ mt: 0.8 }}>{extraSubtitle}</Box>
        )}
      </Box>
    </Stack>
  );
}
