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
      id: 'invest-lab',
      title: 'Invest Lab',
      description: 'Investment calculator with real market data for S&P 500, NASDAQ, Bitcoin, Gold and more.',
      longDescription:
        '投资实验室：使用真实市场数据计算资产收益率，支持 TWR (Time-Weighted Return)、定投模拟与历史回测。目前支持 S&P 500、NASDAQ 100、黄金、比特币等资产。',
      tech: ['React', 'TypeScript', 'Vite'],
      demoUrl: '/games/invest-lab/',
      isGame: false
    },
    {
      id: 'azul-mobile',
      title: 'Azul Mobile',
      description: 'Mobile-first web app version of Azul board game with responsive design.',
      longDescription:
        'Azul 花砖物语移动端网页版：响应式设计优化，支持手机浏览器游玩。继承桌面版所有功能，适配小屏幕操作体验。',
      tech: ['React', 'TypeScript', 'Tailwind'],
      demoUrl: '/games/azul-mobile/',
      isGame: false
    }
  ];
}
