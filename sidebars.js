// @ts-check

/**
 * 企业级 IT 文档结构
 * 后续新增文档，只需在对应分类下增加文件名即可
 */

const sidebars = {
  tutorialSidebar: [
    'intro',

    {
      type: 'category',
      label: '📘 IT日常故障处理',
      collapsed: false,
      items: [
        'it-daily-troubleshooting',
      ],
    },

    {
      type: 'category',
      label: '🌐 网络架构与接入',
      collapsed: true,
      items: [
        // 未来可加：
        // 'network-architecture',
        // 'vpn-access',
      ],
    },

    {
      type: 'category',
      label: '🔐 账号与权限管理',
      collapsed: true,
      items: [
        // 'account-management',
        // 'mfa-policy',
      ],
    },

    {
      type: 'category',
      label: '☁ 云资源管理',
      collapsed: true,
      items: [
        // 'aws-production',
        // 'cloud-backup-policy',
      ],
    },

    {
      type: 'category',
      label: '🖥 IT资产与设备管理',
      collapsed: true,
      items: [
        // 'asset-management',
      ],
    },

    {
      type: 'category',
      label: '🚨 应急与安全响应',
      collapsed: true,
      items: [
        // 'incident-response',
      ],
    },
  ],
};

export default sidebars;
