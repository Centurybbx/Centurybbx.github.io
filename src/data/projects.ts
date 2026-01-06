/* ===========================================
   Projects Data
   ===========================================

   Centralized project data for the portfolio.
   Add or modify projects here - they automatically appear on the site.

   Fields:
   - id: Unique identifier (used for anchor links)
   - title: Project name
   - description: Short summary (for cards)
   - longDescription: Detailed description (for project page)
   - tech: Array of tech stack items
   - demoUrl: URL to playable demo or live site
   - isGame: Set true if this is a game (enables iframe embedding)

   Future enhancements:
   - Add source code link (repoUrl)
   - Add screenshots/images array
   - Add featured: boolean for homepage spotlight
   - Add status: 'live' | 'wip' | 'archived'
*/

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  demoUrl: string;
  isGame: boolean;
}

export async function getProjects(): Promise<Project[]> {
  // In the future, this could fetch from an external source
  // or read from a CMS/API
  return [
    {
      id: 'snake-game',
      title: 'Snake Game',
      description: 'Classic Snake game built with React. Eat food, grow longer, avoid walls.',
      longDescription: 'A modern take on the classic Snake game. Built with React and Canvas API for smooth 60fps gameplay. Features keyboard controls, score tracking, and responsive design.',
      tech: ['React', 'Canvas API', 'TypeScript'],
      demoUrl: '/games/snake-game/index.html',
      isGame: true
    },
    {
      id: 'memory-match',
      title: 'Memory Match',
      description: 'Test your memory with this card matching game. Find all pairs to win.',
      longDescription: 'A fun memory card game where players flip cards to find matching pairs. Built with React, featuring animations, move counter, and multiple difficulty levels.',
      tech: ['React', 'CSS Animations', 'JavaScript'],
      demoUrl: '/games/memory-match/index.html',
      isGame: true
    },
    {
      id: 'tetris-clone',
      title: 'Tetris Clone',
      description: 'The classic block-stacking puzzle game. Clear lines to score points.',
      longDescription: 'A faithful recreation of the classic Tetris experience. Features all the familiar pieces, scoring system, and increasing difficulty as you progress.',
      tech: ['React', 'Canvas API', 'Game Logic'],
      demoUrl: '/games/tetris-clone/index.html',
      isGame: true
    }
  ];
}
