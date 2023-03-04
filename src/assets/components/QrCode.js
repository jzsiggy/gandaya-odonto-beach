import QRCode from "qrcode";
import { useEffect, useRef, useState } from "react";

const QrCode = (props) => {
  const canvasRef = useRef();

  useEffect(() => {
    QRCode.toCanvas(
      canvasRef.current,
      // QR code doesn't work with an empty string
      // so we are using a blank space as a fallback
      props.content || " ",
      (error) => error && console.error(error)
    );
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default QrCode