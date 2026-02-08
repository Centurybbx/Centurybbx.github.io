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

export default function GameEmbed({ gameId, src, title }) {
  return (
    <div className="game-embed-container">
      <iframe
        src={src}
        title={title}
        className="game-iframe"
        allow="accelerometer; gyroscope; autoplay; fullscreen"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      />
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
      `}</style>
    </div>
  );
}
