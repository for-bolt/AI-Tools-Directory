// Sample tools data for each subcategory
const toolsData = {
  'ai-productivity-tools': {
    'e-mail': [
      {
        name: 'EmailAI',
        description: 'Smart email composition and management',
        category: 'E-mail',
        pricing: 'Freemium',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
        rating: 4.5
      },
      {
        name: 'InboxMaster',
        description: 'AI-powered email organization',
        category: 'E-mail',
        pricing: 'Paid',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
        rating: 4.3
      }
    ],
    'education-studies': [
      {
        name: 'StudyAI',
        description: 'AI-powered study assistant',
        category: 'Education',
        pricing: 'Freemium',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
        rating: 4.7
      },
      {
        name: 'LearningBot',
        description: 'Personalized learning companion',
        category: 'Education',
        pricing: 'Free',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
        rating: 4.4
      }
    ]
  },
  'ai-assistants': {
    'legal-assistants': [
      {
        name: 'LegalAI',
        description: 'AI-powered legal research assistant',
        category: 'Legal',
        pricing: 'Paid',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73',
        rating: 4.6
      }
    ],
    'chatbots': [
      {
        name: 'ChatMaster',
        description: 'Advanced conversational AI',
        category: 'ChatBots',
        pricing: 'Freemium',
        image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a',
        rating: 4.8
      }
    ]
  }
};

export function getCategoryTools(category, subcategory) {
  const categoryKey = category.toLowerCase();
  const subcategoryKey = subcategory.toLowerCase();
  
  return toolsData[categoryKey]?.[subcategoryKey] || [];
}

export function getAllCategoryTools(category) {
  const categoryKey = category.toLowerCase();
  const categoryTools = toolsData[categoryKey];
  
  if (!categoryTools) return [];
  
  return Object.values(categoryTools).flat();
}