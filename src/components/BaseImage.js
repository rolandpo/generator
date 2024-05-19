import React, { useRef, useEffect } from 'react';
import '../css/BaseImage.css';
import baseImage from '../images/base-image.png';
import persistentOverlay from '../images/persistent-overlay.png';
import backgroundOverlay from '../images/background-overlay.png';

const BaseImage = ({ holding, hat, background }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const baseImg = new Image();
    const overlayImg = new Image();
    const holdingImg = new Image();
    const hatImg = new Image();
    const backgroundImg = new Image();
    const backgroundOverlayImg = new Image();

    baseImg.src = baseImage;
    overlayImg.src = persistentOverlay;
    backgroundOverlayImg.src = backgroundOverlay;

    baseImg.onload = () => {
      context.drawImage(baseImg, 0, 0, canvas.width, canvas.height);
      if (background) {
        backgroundImg.src = background;
        backgroundImg.onload = () => {
          context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
          drawBackgroundOverlay();
        };
      } else {
        drawOtherImages();
      }
    };

    const drawBackgroundOverlay = () => {
      context.drawImage(backgroundOverlayImg, 0, 0, canvas.width, canvas.height);
      drawOtherImages();
    };

    const drawOtherImages = () => {
      if (hat) {
        hatImg.src = hat;
        hatImg.onload = () => {
          context.drawImage(hatImg, 0, 0, canvas.width, canvas.height);
          drawHoldingAndOverlay();
        };
      } else {
        drawHoldingAndOverlay();
      }
    };

    const drawHoldingAndOverlay = () => {
      if (holding) {
        holdingImg.src = holding;
        holdingImg.onload = () => {
          context.drawImage(holdingImg, 0, 0, canvas.width, canvas.height);
          drawOverlay();
        };
      } else {
        drawOverlay();
      }
    };

    const drawOverlay = () => {
      context.drawImage(overlayImg, 0, 0, canvas.width, canvas.height);
    };
  }, [holding, hat, background]);

  const saveImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'meme.png';
    link.click();
  };

  return (
    <div className="base-image-container">
      <canvas ref={canvasRef} width={500} height={500} className="base-image-canvas" />
      <button onClick={saveImage}>Save Image</button>
    </div>
  );
};

export default BaseImage;
