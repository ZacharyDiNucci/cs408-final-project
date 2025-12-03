// API Base URL - REPLACE WITH YOUR ACTUAL API URL
const API_BASE_URL = "https://yj5wc1aycd.execute-api.us-east-2.amazonaws.com";

// ============================================
// FACTION API FUNCTIONS
// ============================================

async function getAllFactions() {
    try {
        const response = await fetch(`${API_BASE_URL}/factions`);
        if (!response.ok) throw new Error('Failed to fetch factions');
        return await response.json();
    } catch (error) {
        console.error('Error fetching factions:', error);
        throw error;
    }
}

async function getFactionById(factionId) {
    try {
        const response = await fetch(`${API_BASE_URL}/factions/${factionId}`);
        if (!response.ok) throw new Error('Failed to fetch faction');
        return await response.json();
    } catch (error) {
        console.error('Error fetching faction:', error);
        throw error;
    }
}

async function createFaction(factionData) {
    try {
        console.log('Sending faction data:', factionData); // Add this line
        const response = await fetch(`${API_BASE_URL}/factions`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(factionData)
        });
        
        const responseData = await response.json(); // Add this line
        console.log('Response data:', responseData); // Add this line
        
        if (!response.ok) {
            throw new Error(responseData.error || 'Failed to create faction');
        }
        return responseData;
    } catch (error) {
        console.error('Error creating faction:', error);
        throw error;
    }
}

async function updateFaction(factionId, factionData) {
    try {
        const response = await fetch(`${API_BASE_URL}/factions`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                faction_id: factionId,
                ...factionData
            })
        });
        if (!response.ok) throw new Error('Failed to update faction');
        return await response.json();
    } catch (error) {
        console.error('Error updating faction:', error);
        throw error;
    }
}

async function deleteFaction(factionId) {
    try {
        console.log('Deleting faction:', factionId); // Add this
        const response = await fetch(`${API_BASE_URL}/factions/${factionId}`, {
            method: 'DELETE'
        });
        const responseData = await response.json(); // Add this
        console.log('Delete response:', responseData); // Add this
        
        if (!response.ok) throw new Error(responseData.error || 'Failed to delete faction');
        return responseData;
    } catch (error) {
        console.error('Error deleting faction:', error);
        throw error;
    }
}

// ============================================
// DETACHMENT API FUNCTIONS
// ============================================

async function getAllDetachments(factionId = null) {
    try {
        let url = `${API_BASE_URL}/detachments`;
        if (factionId) {
            url += `?faction_id=${factionId}`;
        }
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch detachments');
        return await response.json();
    } catch (error) {
        console.error('Error fetching detachments:', error);
        throw error;
    }
}

async function getDetachmentById(detachmentId) {
    try {
        const response = await fetch(`${API_BASE_URL}/detachments/${detachmentId}`);
        if (!response.ok) throw new Error('Failed to fetch detachment');
        return await response.json();
    } catch (error) {
        console.error('Error fetching detachment:', error);
        throw error;
    }
}

async function createDetachment(detachmentData) {
    try {
        const response = await fetch(`${API_BASE_URL}/detachments`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(detachmentData)
        });
        if (!response.ok) throw new Error('Failed to create detachment');
        return await response.json();
    } catch (error) {
        console.error('Error creating detachment:', error);
        throw error;
    }
}

async function deleteDetachment(detachmentId) {
    try {
        const response = await fetch(`${API_BASE_URL}/detachments/${detachmentId}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete detachment');
        return await response.json();
    } catch (error) {
        console.error('Error deleting detachment:', error);
        throw error;
    }
}

function displayError(message, elementId = null) {
    console.error(message);
    if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = `<div class="alert alert-warning">${message}</div>`;
        }
    }
    alert(message);
}

function displaySuccess(message, elementId = null) {
    console.log(message);
    if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = `<div class="alert alert-success">${message}</div>`;
        }
    }
}

// Helper to parse comma-separated tags into array
function parseTags(tagString) {
    if (!tagString) return [];
    return tagString.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
}

// Helper to format tags array into comma-separated string
function formatTags(tagsArray) {
    if (!tagsArray || tagsArray.length === 0) return '';
    return tagsArray.join(', ');
}