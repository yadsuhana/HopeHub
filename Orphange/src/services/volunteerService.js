const API_URL = 'http://localhost:5000/api';

export const registerVolunteer = async (volunteerData) => {
    try {
        const response = await fetch(`${API_URL}/volunteer/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(volunteerData),
        });
        
        if (!response.ok) {
            throw new Error('Registration failed');
        }
        
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getVolunteers = async () => {
    try {
        const response = await fetch(`${API_URL}/volunteers`);
        if (!response.ok) {
            throw new Error('Failed to fetch volunteers');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const updateVolunteerStatus = async (volunteerId, status) => {
    try {
        const response = await fetch(`${API_URL}/volunteer/${volunteerId}/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status }),
        });
        
        if (!response.ok) {
            throw new Error('Failed to update status');
        }
        
        return await response.json();
    } catch (error) {
        throw error;
    }
}; 