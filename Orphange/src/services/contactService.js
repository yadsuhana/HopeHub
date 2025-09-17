const API_URL = 'http://localhost:5000/api';

export const sendMessage = async (messageData) => {
    try {
        const response = await fetch(`${API_URL}/contact/message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to send message');
        }

        return await response.json();
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

export const getContactMessages = async () => {
    try {
        const response = await fetch(`${API_URL}/contact/messages`);
        if (!response.ok) {
            throw new Error('Failed to fetch contact messages');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching contact messages:', error);
        throw error;
    }
}; 