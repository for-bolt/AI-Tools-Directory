export const latestTools = [
  { name: 'Claude 3', pricing: 'Paid', date: '2024-03-04' },
  { name: 'Gemini Advanced', pricing: 'Paid', date: '2024-02-28' },
  { name: 'Perplexity AI', pricing: 'Freemium', date: '2024-02-25' },
  { name: 'Anthropic API', pricing: 'Paid', date: '2024-02-20' },
  { name: 'Midjourney V6', pricing: 'Paid', date: '2024-02-15' }
];

export const topTools = [
  { name: 'ChatGPT', pricing: 'Freemium', rating: 4.9 },
  { name: 'DALL·E 3', pricing: 'Paid', rating: 4.8 },
  { name: 'GitHub Copilot', pricing: 'Paid', rating: 4.8 },
  { name: 'Midjourney', pricing: 'Paid', rating: 4.7 },
  { name: 'Claude', pricing: 'Freemium', rating: 4.7 }
];

export const selectedTools = [
  { name: 'Jasper', pricing: 'Paid' },
  { name: 'Runway', pricing: 'Paid' },
  { name: 'Synthesia', pricing: 'Paid' },
  { name: 'Notion AI', pricing: 'Paid' },
  { name: 'Grammarly AI', pricing: 'Freemium' }
];

export const freeTools = [
  { name: 'Codeium', pricing: 'Free' },
  { name: 'Stable Diffusion', pricing: 'Free' },
  { name: 'Hugging Face', pricing: 'Free' },
  { name: 'Auto-GPT', pricing: 'Free' },
  { name: 'OpenAssistant', pricing: 'Free' }
];

export const allTools = {
  'Text Generation': [
    { name: 'ChatGPT', pricing: 'Freemium', description: 'Advanced language model for natural conversations' },
    { name: 'Claude', pricing: 'Freemium', description: 'AI assistant for writing and analysis' },
    { name: 'Gemini Advanced', pricing: 'Paid', description: 'Google\'s multimodal AI model' },
    { name: 'Jasper', pricing: 'Paid', description: 'AI writing assistant for marketing content' },
    { name: 'Copy.ai', pricing: 'Freemium', description: 'AI copywriting tool for marketing' },
    { name: 'Writesonic', pricing: 'Paid', description: 'AI content writer for various formats' }
  ],
  'Image Generation': [
    { name: 'DALL·E 3', pricing: 'Paid', description: 'Create photorealistic images from text' },
    { name: 'Midjourney', pricing: 'Paid', description: 'AI art generator with unique style' },
    { name: 'Stable Diffusion', pricing: 'Free', description: 'Open-source image generation model' },
    { name: 'Leonardo.ai', pricing: 'Freemium', description: 'AI art creation platform' },
    { name: 'Canva AI', pricing: 'Paid', description: 'AI-powered design tool' },
    { name: 'Runway', pricing: 'Paid', description: 'AI creative suite for visual content' }
  ],
  'Code Assistant': [
    { name: 'GitHub Copilot', pricing: 'Paid', description: 'AI pair programmer' },
    { name: 'Codeium', pricing: 'Free', description: 'AI code completion tool' },
    { name: 'Amazon CodeWhisperer', pricing: 'Freemium', description: 'AI coding companion' },
    { name: 'Tabnine', pricing: 'Freemium', description: 'AI code assistant' }
  ]
};