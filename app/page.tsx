export default function Home() {
  const tools = [
    "Merge PDF",
    "Split PDF",
    "Compress PDF",
    "Word to PDF",
    "Image to PDF",
    "Scan to PDF",
    "Edit PDF",
    "Sign PDF"
  ];

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        PDFUniverse
      </h1>

      <p style={{ marginBottom: "30px" }}>
        All PDF tools in one place
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px"
        }}
      >
        {tools.map((tool) => (
          <div
            key={tool}
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              textAlign: "center",
              background: "#fafafa"
            }}
          >
            {tool}
          </div>
        ))}
      </div>
    </main>
  );
}