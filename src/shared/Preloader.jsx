// Preloader.jsx
import { useEffect, useState } from "react";

export default function Preloader({ duration = 500 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer); // cleanup on unmount
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="preload preload-container">
      <div
        className="preload-logo"
        style={{ backgroundImage: "url('/images/logo/144.png')" }}
      >
        <div className="spinner"></div>
      </div>
    </div>
  );
}