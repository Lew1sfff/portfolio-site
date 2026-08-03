export interface MediaItem {
  src: string;
  type: "image" | "video";
  alt: string;
  portrait?: boolean;
}

export type Category = "photography" | "design" | "social" | "portrait";

export interface Project {
  id: string;
  title: string;
  description: string;
  cover: string;
  tags: string[];
  category: Category;
  year: number;
  order: number;
  media: MediaItem[];
}

export const projects: Project[] = [
  {
    id: "menswear",
    title: "男装拍摄",
    description:
      "男装品牌商业摄影，涵盖产品特写、模特展示及场景搭配，突出面料质感与穿搭风格。",
    cover: "/images/projects/menswear/1000048998.jpg",
    tags: ["商业摄影", "男装"],
    category: "photography",
    year: 2025,
    order: 1,
    media: [
      { src: "/images/projects/menswear/1000048984.mp4", type: "video", alt: "男装视频 1" },
      { src: "/images/projects/menswear/1000048985.mp4", type: "video", alt: "男装视频 2" },
      { src: "/images/projects/menswear/1000048767(1).jpg", type: "image", alt: "男装展示 1" },
      { src: "/images/projects/menswear/1000048768.jpg", type: "image", alt: "男装展示 2" },
      { src: "/images/projects/menswear/1000048769.jpg", type: "image", alt: "男装展示 3" },
      { src: "/images/projects/menswear/1000048770.jpg", type: "image", alt: "男装展示 4" },
      { src: "/images/projects/menswear/1000048998.jpg", type: "image", alt: "男装展示 5" },
      { src: "/images/projects/menswear/1000049123.jpg", type: "image", alt: "男装展示 6" },
      { src: "/images/projects/menswear/1000049124.jpg", type: "image", alt: "男装展示 7" },
      { src: "/images/projects/menswear/1000049125.jpg", type: "image", alt: "男装展示 8" },
      { src: "/images/projects/menswear/1000049126.jpg", type: "image", alt: "男装展示 9" },
      { src: "/images/projects/menswear/122013.JPG", type: "image", alt: "男装展示 10" },
      { src: "/images/projects/menswear/122014.JPG", type: "image", alt: "男装展示 11" },
      { src: "/images/projects/menswear/122023.JPG", type: "image", alt: "男装展示 12" },
      { src: "/images/projects/menswear/122026.JPG", type: "image", alt: "男装展示 13" },
      { src: "/images/projects/menswear/122027.JPG", type: "image", alt: "男装展示 14" },
      { src: "/images/projects/menswear/122041.JPG", type: "image", alt: "男装展示 15" },
      { src: "/images/projects/menswear/122049.JPG", type: "image", alt: "男装展示 16" },
      { src: "/images/projects/menswear/122050.JPG", type: "image", alt: "男装展示 17" },
      { src: "/images/projects/menswear/122051.JPG", type: "image", alt: "男装展示 18" },
      { src: "/images/projects/menswear/122059.JPG", type: "image", alt: "男装展示 19" },
    ],
  },
  {
    id: "accessories",
    title: "饰品拍摄",
    description:
      "饰品商业摄影，通过精致的光影与构图展现产品细节与质感，涵盖项链、手链、耳环等品类。",
    cover: "/images/projects/accessories/cover.jpg",
    tags: ["商业摄影", "饰品"],
    category: "photography",
    year: 2025,
    order: 2,
    media: [
      { src: "/images/projects/accessories/1000048996.mp4", type: "video", alt: "饰品视频 1" },
      { src: "/images/projects/accessories/1000050102.mp4", type: "video", alt: "饰品视频 2" },
      { src: "/images/projects/accessories/122066.JPG", type: "image", alt: "饰品展示 1" },
      { src: "/images/projects/accessories/122068.JPG", type: "image", alt: "饰品展示 2" },
      { src: "/images/projects/accessories/122071.JPG", type: "image", alt: "饰品展示 3" },
      { src: "/images/projects/accessories/122072.JPG", type: "image", alt: "饰品展示 4" },
      { src: "/images/projects/accessories/122080.JPG", type: "image", alt: "饰品展示 5" },
      { src: "/images/projects/accessories/122083.JPG", type: "image", alt: "饰品展示 6" },
      { src: "/images/projects/accessories/122085.JPG", type: "image", alt: "饰品展示 7" },
      { src: "/images/projects/accessories/122088.JPG", type: "image", alt: "饰品展示 8" },
      { src: "/images/projects/accessories/1000050353.jpg", type: "image", alt: "饰品展示 9" },
      { src: "/images/projects/accessories/1000050354.jpg", type: "image", alt: "饰品展示 10" },
      { src: "/images/projects/accessories/1000050355.jpg", type: "image", alt: "饰品展示 11" },
      { src: "/images/projects/accessories/1000050356.jpg", type: "image", alt: "饰品展示 12" },
      { src: "/images/projects/accessories/1000050357.jpg", type: "image", alt: "饰品展示 13" },
      { src: "/images/projects/accessories/1000050358.jpg", type: "image", alt: "饰品展示 14" },
    ],
  },
  {
    id: "womens-shoes",
    title: "女鞋拍摄",
    description:
      "女鞋品牌商业拍摄项目，包含产品静物、上脚展示及动态视频，呈现鞋款的设计细节与穿着效果。",
    cover: "/images/projects/womens-shoes/DSC08874.jpg",
    tags: ["商业摄影", "女鞋", "产品拍摄"],
    category: "photography",
    year: 2025,
    order: 3,
    media: [
      { src: "/images/projects/womens-shoes/8月21日(1).mp4", type: "video", alt: "女鞋视频 1" },
      { src: "/images/projects/womens-shoes/8月13日 (1).mp4", type: "video", alt: "女鞋视频 2" },
      { src: "/images/projects/womens-shoes/8月16日 (1).mp4", type: "video", alt: "女鞋视频 3" },
      { src: "/images/projects/womens-shoes/8月17日 (2).mp4", type: "video", alt: "女鞋视频 4" },
      { src: "/images/projects/womens-shoes/8月20日 (1)(3).mp4", type: "video", alt: "女鞋视频 5" },
      { src: "/images/projects/womens-shoes/DSC08257.JPG", type: "image", alt: "女鞋拍摄 1" },
      { src: "/images/projects/womens-shoes/DSC08739.JPG", type: "image", alt: "女鞋拍摄 2", portrait: true },
      { src: "/images/projects/womens-shoes/DSC08820.jpg", type: "image", alt: "女鞋拍摄 3", portrait: true },
      { src: "/images/projects/womens-shoes/DSC08829.jpg", type: "image", alt: "女鞋拍摄 4" },
      { src: "/images/projects/womens-shoes/DSC08874.jpg", type: "image", alt: "女鞋拍摄 5" },
      { src: "/images/projects/womens-shoes/DSC08921_1.jpg", type: "image", alt: "女鞋拍摄 6" },
      { src: "/images/projects/womens-shoes/DSC08932_1.jpg", type: "image", alt: "女鞋拍摄 7" },
      { src: "/images/projects/womens-shoes/DSC08935.JPG", type: "image", alt: "女鞋拍摄 8" },
      { src: "/images/projects/womens-shoes/DSC09024.jpg", type: "image", alt: "女鞋拍摄 9" },
    ],
  },
  {
    id: "portrait",
    title: "肖像拍摄",
    description:
      "人像肖像摄影系列，注重光影氛围与人物情绪表达，涵盖个人形象照、艺术肖像及商业人像。",
    cover: "/images/projects/portrait/1784918740694.jpg",
    tags: ["肖像", "人像摄影", "个人形象"],
    category: "portrait",
    year: 2025,
    order: 4,
    media: [
      { src: "/images/projects/portrait/1000013123.jpg", type: "image", alt: "肖像 1" },
      { src: "/images/projects/portrait/1784918739821.jpg", type: "image", alt: "肖像 2" },
      { src: "/images/projects/portrait/1784918740694.jpg", type: "image", alt: "肖像 3" },
      { src: "/images/projects/portrait/1784918740907.jpg", type: "image", alt: "肖像 4" },
      { src: "/images/projects/portrait/1784918741743.jpg", type: "image", alt: "肖像 5" },
      { src: "/images/projects/portrait/1784918742042.jpg", type: "image", alt: "肖像 6" },
      { src: "/images/projects/portrait/1784918742213.jpg", type: "image", alt: "肖像 7" },
      { src: "/images/projects/portrait/1784918742515.jpg", type: "image", alt: "肖像 8" },
      { src: "/images/projects/portrait/1784918742943.jpg", type: "image", alt: "肖像 9" },
    ],
  },
  {
    id: "xiaohongshu-creative",
    title: "小红书创意素材",
    description:
      "为小红书平台定制的创意视觉素材，风格年轻化、高辨识度，适合社交媒体传播与品牌种草内容。",
    cover: "/images/projects/xiaohongshu-creative/1000049122.jpg",
    tags: ["社交媒体", "创意设计", "小红书"],
    category: "social",
    year: 2025,
    order: 5,
    media: [
      { src: "/images/projects/xiaohongshu-creative/1000049120.jpg", type: "image", alt: "小红书素材 1" },
      { src: "/images/projects/xiaohongshu-creative/1000049121.jpg", type: "image", alt: "小红书素材 2" },
      { src: "/images/projects/xiaohongshu-creative/1000049122.jpg", type: "image", alt: "小红书素材 3" },
      { src: "/images/projects/xiaohongshu-creative/1000049127.jpg", type: "image", alt: "小红书素材 4" },
      { src: "/images/projects/xiaohongshu-creative/1000049128.jpg", type: "image", alt: "小红书素材 5" },
      { src: "/images/projects/xiaohongshu-creative/Camera_1040g3k831vt4bon4jq9g5pvjc9ljib2i5sbjnm8.jpg", type: "image", alt: "小红书素材 6" },
      { src: "/images/projects/xiaohongshu-creative/gemini-3-pro-image-preview-2k_a_上下拓宽直到比例为9_19.5(2).png", type: "image", alt: "小红书素材 7" },
      { src: "/images/projects/xiaohongshu-creative/gemini-3-pro-image-preview-2k_a_上下拓宽直到比例为9_19.5.png", type: "image", alt: "小红书素材 8" },
      { src: "/images/projects/xiaohongshu-creative/美食穿搭1.png", type: "image", alt: "美食穿搭 1" },
      { src: "/images/projects/xiaohongshu-creative/美食穿搭2.png", type: "image", alt: "美食穿搭 2" },
      { src: "/images/projects/xiaohongshu-creative/美食穿搭7.png", type: "image", alt: "美食穿搭 3" },
    ],
  },
  {
    id: "mall-branding",
    title: "商场品宣设计",
    description:
      "商业综合体品牌宣传设计项目，包含灯箱广告、活动视觉及空间导视系统，兼顾品牌调性与商业转化。",
    cover: "/images/projects/mall-branding/乐清正大银泰-04.jpg",
    tags: ["品牌设计", "灯箱广告", "商业视觉"],
    category: "design",
    year: 2025,
    order: 6,
    media: [
      { src: "/images/projects/mall-branding/乐清正大银泰-04.jpg", type: "image", alt: "银泰项目 1" },
      { src: "/images/projects/mall-branding/乐清正大银泰_画板 1.jpg", type: "image", alt: "银泰项目 2" },
      { src: "/images/projects/mall-branding/江苏26SS灯箱-05.jpg", type: "image", alt: "灯箱设计 1" },
      { src: "/images/projects/mall-branding/江苏26SS灯箱-06.jpg", type: "image", alt: "灯箱设计 2" },
      { src: "/images/projects/mall-branding/资源 4.png", type: "image", alt: "品宣资源" },
    ],
  },
  {
    id: "food-beverage",
    title: "餐饮素材设计",
    description:
      "餐饮行业视觉素材设计，涵盖菜品拍摄、菜单设计及品牌视觉物料，突出食物质感与用餐氛围。",
    cover: "/images/projects/food-beverage/萬發發市井小火锅2.png",
    tags: ["餐饮", "美食摄影", "物料设计"],
    category: "design",
    year: 2025,
    order: 8,
    media: [
      { src: "/images/projects/food-beverage/清江三鲜面.png", type: "image", alt: "清江三鲜面" },
      { src: "/images/projects/food-beverage/萬發發市井小火锅2.png", type: "image", alt: "萬發發火锅 1" },
      { src: "/images/projects/food-beverage/萬蕟蕟市井小火锅3.jpg", type: "image", alt: "萬蕟蕟火锅" },
    ],
  },
  {
    id: "interior",
    title: "装饰素材设计",
    description:
      "室内装饰行业视觉素材，展示空间设计方案与装饰效果呈现。",
    cover: "/images/projects/interior/云信.jpg",
    tags: ["装饰设计", "空间视觉"],
    category: "design",
    year: 2025,
    order: 10,
    media: [
      { src: "/images/projects/interior/云信.jpg", type: "image", alt: "装修设计素材" },
    ],
  },
  {
    id: "beauty",
    title: "美业素材设计",
    description:
      "美业品牌视觉素材设计，包含产品海报、系列宣传图及社交媒体素材，强调产品质感与品牌美学。",
    cover: "/images/projects/beauty/查尔酮   80x200cm.jpg",
    tags: ["美业", "海报设计", "品牌视觉"],
    category: "design",
    year: 2025,
    order: 7,
    media: [
      { src: "/images/projects/beauty/查尔酮   80x200cm.jpg", type: "image", alt: "查尔酮海报" },
      { src: "/images/projects/beauty/白月光7   80x200cm.jpg", type: "image", alt: "白月光海报" },
      { src: "/images/projects/beauty/海报里面有六张60x40cm.png", type: "image", alt: "系列海报封面" },
      { src: "/images/projects/beauty/海报里面有六张2 60x40cm.png", type: "image", alt: "系列海报 2" },
      { src: "/images/projects/beauty/海报里面有六张3 60x40cm.png", type: "image", alt: "系列海报 3" },
      { src: "/images/projects/beauty/海报里面有六张4 60x40cm.png", type: "image", alt: "系列海报 4" },
      { src: "/images/projects/beauty/海报里面有六张5 60x40cm.png", type: "image", alt: "系列海报 5" },
      { src: "/images/projects/beauty/海报里面有六张6 60x40cm.png", type: "image", alt: "系列海报 6" },
    ],
  },
  {
    id: "education",
    title: "教培素材设计",
    description:
      "教育培训行业视觉素材，包含课程宣传图及品牌视觉设计。",
    cover: "/images/projects/education/微信图片_20240831095204.jpg",
    tags: ["教培", "宣传设计"],
    category: "design",
    year: 2024,
    order: 9,
    media: [
      { src: "/images/projects/education/微信图片_20240831095159.png", type: "image", alt: "教培素材 1" },
      { src: "/images/projects/education/微信图片_20240831095204.jpg", type: "image", alt: "教培素材 2" },
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getSortedProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}
