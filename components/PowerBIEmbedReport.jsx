"use client";
import { useEffect, useState } from "react";
import { PowerBIEmbed } from "powerbi-client-react";

const PowerBIEmbedReport = () => {
  const [embedConfig, setEmbedConfig] = useState(null);

  useEffect(() => {
    // Check that the embed token is valid
    const embedToken = "<YOUR_EMBED_TOKEN>"; // Replace with your actual token

    if (!embedToken) {
      console.error("Embed token is required.");
      return;
    }

    const config = {
      type: "report", // Type of embed (report, dashboard, etc.)
      tokenType: "Embed", // Token type, 'Embed' for public
      accessToken: embedToken, // Embed token for authentication
      embedUrl:
        "https://app.powerbi.com/reportEmbed?reportId=cd12bd2b-e4f3-4d0c-b4ef-b0fb2fe8e17c&autoAuth=true&ctid=2c5bdaf4-8ff2-4bd9-bd54-7c50ab219590", // URL copied from Power BI Service
      id: "cd12bd2b-e4f3-4d0c-b4ef-b0fb2fe8e17c", // Report ID (should match the one from your URL)
      permissions: 1, // Read permission
      settings: {
        filterPaneEnabled: true,
        navContentPaneEnabled: true,
      },
    };
    setEmbedConfig(config);
  }, []);

  return (
    <div style={{ marginTop: "10%" }}>
      <h2>Weight Change over a Month</h2>
      <div
        className="gho"
        style={{
          display: "flex",
          justifyContent: "center",
          height: "60vh",
          overflow: "hidden",
        }}
      >
        {embedConfig ? (
          <iframe
            title="weightdata"
            width="740"
            height="541.25"
            src="https://app.powerbi.com/reportEmbed?reportId=cd12bd2b-e4f3-4d0c-b4ef-b0fb2fe8e17c&autoAuth=true&ctid=2c5bdaf4-8ff2-4bd9-bd54-7c50ab219590"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
        ) : (
          <p>Loading the report...</p>
        )}
      </div>
    </div>
  );
};

export default PowerBIEmbedReport;
