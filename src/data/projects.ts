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
      id: 'azul',
      title: 'Azul（花砖物语）',
      description: 'Draft tiles, build your wall, and outscore the AI — playable in your browser.',
      longDescription:
        '一个可在 Web 直接游玩的 Azul（花砖物语）对战小游戏：轮流从工坊/中心选择颜色，填充花纹行并在铺墙阶段计分。内置 AI 难度选择、回合日志与中英文切换。',
      tech: ['JavaScript', 'HTML', 'CSS'],
      demoUrl: '/games/azul/index.html',
      isGame: true
    }
  ];
}
