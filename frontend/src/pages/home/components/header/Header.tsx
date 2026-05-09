import { Box, Stack } from "@mui/material";
import { Award, Coins, Shovel, Zap } from "lucide-react";
import { GlassCard } from "src/components/glass-card";
import { ProgressBar } from "src/components/progress-bar";

export function Header() {
  return (
    <Box sx={{ margin: "20px auto" }}>
      <Stack sx={{ flexDirection: "row", justifyContent: "space-between", gap: 10 }}>
        <GlassCard Icon={Zap} title="ENERGIA" subtitle="8/10" extraSubtitle="+1 em 2:10" />
        <GlassCard Icon={Coins} title="GAME COIN" subtitle={"1.571.652,00"} />
        <GlassCard Icon={Shovel} title="LEVEL" subtitle={"Pá de Ferro"} extraSubtitle={<ProgressBar value={60} />} />
        <GlassCard Icon={Award} title="RANKING" subtitle={"#1.254"} />
      </Stack>
    </Box>
  );
}
