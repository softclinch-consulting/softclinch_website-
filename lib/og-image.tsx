import { ImageResponse } from "next/og";

export function generateOgImage({
  title,
  subtitle = "SoftClinch · Enterprise Consulting & Engineering",
}: {
  title: string;
  subtitle?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0B2545 0%, #061527 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#A23B2A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            S
          </div>
          <span style={{ fontSize: "36px", fontWeight: "bold", color: "white" }}>
            Soft<span style={{ color: "#A23B2A" }}>Clinch</span>
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "54px",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              maxWidth: "920px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#94A3B8",
              maxWidth: "800px",
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "32px",
          }}
        >
          <div style={{ color: "#38BDF8", fontSize: "20px", fontWeight: 600 }}>
            softclinch.com
          </div>
          <div style={{ color: "#94A3B8", fontSize: "18px" }}>
            Chennai · Across India
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
