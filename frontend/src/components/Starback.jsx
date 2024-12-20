import { useEffect, useRef } from 'react';
import Starback from 'starback'; 

const StarbackCanvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    if (canvasRef.current) {
      const starback = new Starback(canvasRef.current, {
        type: 'dot',
        quantity: 80,
        direction: 0,
        backgroundColor: ['#000000', '#000000'],
        randomOpacity: true,
      });

    }
  }, []);

  return <canvas ref={canvasRef} id="canvas" style={{ width: '100%', height: '100%', zIndex: 0, position: 'absolute' }}/>;
};

export default StarbackCanvas;
