// 项目页的卡片数据。加项目就往数组里加一项，顺序就是显示顺序。
export interface Project {
	icon: string; // 一个 emoji
	title: string;
	desc: string;
	tags: string[];
	url: string; // 点卡片跳转的 GitHub 仓库
}

export const projects: Project[] = [
	{
		icon: '👕',
		title: '服装图像分类',
		desc: '用深度学习对服装图片进行分类的图像分类项目。',
		tags: ['Python', '图像分类'],
		url: 'https://github.com/handupp27/fashion-classification',
	},
	{
		icon: '🏆',
		title: 'Codeforces 题解',
		desc: '在 Codeforces 上刷题时写的 C++ 解法。',
		tags: ['C++', '算法'],
		url: 'https://github.com/handupp27/https-codeforces.com',
	},
	{
		icon: '🤖',
		title: 'LeRobot',
		desc: 'Fork 自 Hugging Face 的 LeRobot，端到端学习的机器人 AI 框架。',
		tags: ['Python', '机器人', 'Fork'],
		url: 'https://github.com/handupp27/lerobot',
	},
	{
		icon: '🌐',
		title: '个人网站',
		desc: '就是你正在看的这个网站，用 Astro 搭建，Sveltia CMS 管理内容。',
		tags: ['Astro'],
		url: 'https://github.com/handupp27/site',
	},
];
