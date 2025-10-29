/**
 * AI Service for handling Groq API calls
 */

import { AI_CONFIG, GROQ_CONFIG } from './ai-config.js';

export const sendMessageToAI = async (message, previousMessages = []) => {
  try {
    // Format messages cho API
    const formattedMessages = previousMessages
      .filter(msg => msg.role === 'user' || msg.role === 'assistant')
      .slice(-10) // Giữ 10 messages gần nhất để tiết kiệm tokens
      .map(msg => ({
        role: msg.role,
        content: msg.content
      }));

    const messages = [
      { role: 'system', content: AI_CONFIG.systemPrompt },
      ...formattedMessages,
      { role: 'user', content: message }
    ];

    // Gọi Groq API
    const response = await fetch(GROQ_CONFIG.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_CONFIG.apiKey}`
      },
      body: JSON.stringify({
        model: GROQ_CONFIG.defaultModel,
        temperature: GROQ_CONFIG.temperature,
        max_tokens: GROQ_CONFIG.maxTokens,
        messages: messages,
        stream: false
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Groq API error:', response.status, errorData);
      
      if (response.status === 401) {
        return 'Lỗi xác thực API. Vui lòng kiểm tra API key.';
      } else if (response.status === 429) {
        return 'Đã vượt quá giới hạn request. Vui lòng thử lại sau ít phút.';
      } else {
        return 'Đã có lỗi xảy ra với dịch vụ AI. Vui lòng thử lại sau.';
      }
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content;
    
    if (!aiResponse) {
      console.error('No content in AI response:', data);
      return 'Xin lỗi, tôi không thể tạo phản hồi cho câu hỏi này. Vui lòng thử lại.';
    }

    return aiResponse;

  } catch (error) {
    console.error("Error in sendMessageToAI:", error);
    
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      return 'Lỗi kết nối mạng. Vui lòng kiểm tra internet và thử lại.';
    }
    
    return 'Đã có lỗi không mong muốn. Vui lòng thử lại sau.';
  }
};

// Function để kiểm tra API key có hoạt động không
export const testGroqConnection = async () => {
  try {
    const testMessage = 'Xin chào';
    const response = await sendMessageToAI(testMessage);
    return !response.includes('Lỗi') && !response.includes('lỗi');
  } catch (error) {
    console.error('Test connection failed:', error);
    return false;
  }
};