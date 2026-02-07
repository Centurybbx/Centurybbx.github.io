/* ===========================================
   GameEmbed - React Component for Game Iframe
   ===========================================

   Purpose:
   - Isolates iframe styling to prevent layout conflicts
   - Provides clean embed container for React games
   - Responsive aspect ratio handling

   Usage:
   <GameEmbed client:visible gameId="snake" src="/games/snake/index.html" title="Snake Game" />

   Props:
   - gameId: Unique identifier for the game
   - src: Path to the game HTML file (in /public/games/)
   - title: Accessibility label for the iframe

   Future enhancements:
   - Add loading state/spinner
   - Add fullscreen toggle
   - Add game controls (pause, restart)
   - Handle iframe communication (score, game state)
*/

import { useEffect, useRef, useState } from 'react';

export default function GameEmbed({ gameId, src, title }) {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let isUnmounted = false;
    const markLoaded = () => {
      if (!isUnmounted) setIsLoading(false);
    };

    const checkAlreadyLoaded = () => {
      try {
        const readyState = iframe.contentDocument?.readyState;
        if (readyState === 'interactive' || readyState === 'complete') {
          markLoaded();
          return true;
        }
      } catch {
        // Cross-origin frame: rely on load event/fallback timer.
      }
      return false;
    };

    iframe.addEventListener('load', markLoaded);

    // If iframe finished loading before hydration, onLoad is missed.
    checkAlreadyLoaded();

    const fallback = window.setTimeout(() => {
      if (!checkAlreadyLoaded()) {
        // Avoid indefinite overlay if load event was missed.
        markLoaded();
      }
    }, 3000);

    return () => {
      isUnmounted = true;
      window.clearTimeout(fallback);
      iframe.removeEventListener('load', markLoaded);
    };
  }, [src]);

  return (
    <div className="game-embed-container">
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        className="game-iframe"
        onLoad={() => setIsLoading(false)}
        allow="accelerometer; gyroscope; autoplay; fullscreen"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      />
      {isLoading && (
        <div className="game-loading">
          <span>Loading {title}...</span>
        </div>
      )}
      <style>{`
        .game-embed-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #1a1a1a;
          border-radius: 8px;
          overflow: hidden;
        }

        .game-iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        .game-loading {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1a1a1a;
          color: #888;
          font-family: var(--font-mono);
        }
      `}</style>
    </div>
  );
}
