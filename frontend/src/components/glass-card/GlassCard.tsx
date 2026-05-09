import { Box, Stack, Typography } from "@mui/material";
import { GlassCardProps } from "./GlassCard.types";

export function GlassCard({ Icon, title, subtitle, extraSubtitle }: GlassCardProps) {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        backgroundColor: "red",
        width: 250,
        height: 100,
        borderRadius: 1,
        paddingX: 2,
        background: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
        color: "white",
      }}
    >
      <Icon size={50} />

      <Box>
        <Typography sx={{ fontSize: 11, color: "grey", textTransform: "uppercase" }}>{title}</Typography>

        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 22,
            whiteSpace: "nowrap",
            maxWidth: 150,
          }}
        >
          {subtitle}
        </Typography>

        {typeof extraSubtitle === "string" ? (
          <Typography sx={{ fontSize: 12, color: "grey" }}>{extraSubtitle}</Typography>
        ) : (
          extraSubtitle
        )}
      </Box>
    </Stack>
  );
}
