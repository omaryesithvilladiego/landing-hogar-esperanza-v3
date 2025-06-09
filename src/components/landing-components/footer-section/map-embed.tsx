import React from "react";
import styles from "./styles/styles.module.css";

interface GoogleMapEmbedProps {
  mapUrl: string;
  onLoad?: () => void;
}

const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({ mapUrl, onLoad }) => {
  return (
    <div className={styles.mapContainer}>
      <iframe
        src={mapUrl}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={onLoad}
        title="Google Maps Embed"
      />
    </div>
  );
};

export default GoogleMapEmbed;
