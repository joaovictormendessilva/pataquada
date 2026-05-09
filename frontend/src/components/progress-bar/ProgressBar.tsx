import { Box, Typography } from "@mui/material";
import { ProgressBarProps } from "./ProgressBar.types";

export function ProgressBar({
  value,
  max = 100,
  height = 16,
  color = "#ff9903",
  backgroundColor = "rgba(255,255,255,0.08)",
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <Box
      sx={{
        width: "100%",
        height,
        backgroundColor,
        borderRadius: "3px",
        overflow: "hidden",
        position: "relative",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Fill */}
      <Box
        sx={{
          width: `${percentage}%`,
          height: "100%",
          borderRadius: "3px",
          backgroundColor: color,
          transition: "width 0.35s ease",
          boxShadow: `0 0 10px ${color}66`,
        }}
      />

      {/* Label */}
      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          color: "white",
          userSelect: "none",
          pointerEvents: "none",
          textShadow: "0 1px 3px rgba(0,0,0,0.7)",
        }}
      >
        {value} / {max}
      </Typography>
    </Box>
  );
}
