import { ImageResponse } from "next/og";

export const alt = "Marcio Petigrosso, Desenvolvedor full stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "flex-start",
        background: "#0b0b0b",
        color: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
        height: "100%",
        justifyContent: "center",
        padding: "84px 96px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: "-2px",
          lineHeight: 1.02,
          textTransform: "uppercase",
        }}
      >
        <span>Marcio</span>
        <span>Petigrosso</span>
      </div>
      <div
        style={{
          color: "#a1a1a1",
          display: "flex",
          fontSize: 28,
          marginTop: 34,
        }}
      >
        Desenvolvedor full stack
      </div>
    </div>,
    size,
  );
}
