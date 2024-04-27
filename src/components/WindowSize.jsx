import React from 'react';

export default function WindowSize() {
  const [windowSize, setWindowSize] = React.useState(getWindowSize());

  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (

    <div className="homework__window-size">
        <span className="homework__window-width">Ширина окна браузера: {windowSize.innerWidth}</span>
        <span className="homework__window-height">Длинна окна браузера: {windowSize.innerHeight}</span>
    </div>
    
  );
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}
