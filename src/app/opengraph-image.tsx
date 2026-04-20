import { ImageResponse } from "next/og";

export const alt = "Understanding Thai Culture, a book by Fabian Arndt";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(900px 500px at 80% 10%, #f5c65a 0%, transparent 55%), radial-gradient(700px 500px at 10% 100%, #f0b8a5 0%, transparent 55%), linear-gradient(180deg, #3d6950 0%, #2a4e3a 100%)",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            color: "#f5c65a",
            fontSize: 16,
            letterSpacing: 8,
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          <span>UNDERSTANDING THAI CULTURE · VOL I</span>
          <span>A BOOK BY FABIAN ARNDT</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 116,
              lineHeight: 0.95,
              letterSpacing: -4,
              color: "#faf3e4",
              fontWeight: 500,
            }}
          >
            Understanding
          </div>
          <div
            style={{
              fontSize: 116,
              lineHeight: 0.95,
              letterSpacing: -4,
              color: "#f5c65a",
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            Thai Culture.
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 26,
              fontStyle: "italic",
              color: "#faf3e4",
              opacity: 0.9,
              maxWidth: 820,
            }}
          >
            Thailand is the country in Southeast Asia that was never colonized. This single fact
            shapes everything that follows.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#f5c65a",
            fontSize: 14,
            letterSpacing: 6,
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          <span>11 CHAPTERS · ~70,000 WORDS · EPUB + PDF</span>
          <span>VOLUME I · UTC</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
