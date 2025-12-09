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
        const response = await fetch(`${API_BASE_URL}/factions`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(factionData)
        });
        if (!response.ok) throw new Error('Failed to create faction');
        return await response.json();
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
        const response = await fetch(`${API_BASE_URL}/factions/${factionId}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete faction');
        return await response.json();
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

// ============================================
// UNIT API FUNCTIONS
// ============================================

async function getAllUnits(factionId = null) {
    try {
        let url = `${API_BASE_URL}/units`;
        if (factionId) {
            url += `?faction_id=${factionId}`;
        }
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch units');
        return await response.json();
    } catch (error) {
        console.error('Error fetching units:', error);
        throw error;
    }
}

async function getUnitById(unitId) {
    try {
        const response = await fetch(`${API_BASE_URL}/units/${unitId}`);
        if (!response.ok) throw new Error('Failed to fetch unit');
        return await response.json();
    } catch (error) {
        console.error('Error fetching unit:', error);
        throw error;
    }
}

async function createUnit(unitData) {
    try {
        const response = await fetch(`${API_BASE_URL}/units`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(unitData)
        });
        if (!response.ok) throw new Error('Failed to create unit');
        return await response.json();
    } catch (error) {
        console.error('Error creating unit:', error);
        throw error;
    }
}

async function updateUnit(unitId, unitData) {
    try {
        const response = await fetch(`${API_BASE_URL}/units`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                unit_id: unitId,
                ...unitData
            })
        });
        if (!response.ok) throw new Error('Failed to update unit');
        return await response.json();
    } catch (error) {
        console.error('Error updating unit:', error);
        throw error;
    }
}

async function deleteUnit(unitId) {
    try {
        const response = await fetch(`${API_BASE_URL}/units/${unitId}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete unit');
        return await response.json();
    } catch (error) {
        console.error('Error deleting unit:', error);
        throw error;
    }
}

// ============================================
// ARMY LIST API FUNCTIONS
// ============================================

async function getAllLists() {
    try {
        const response = await fetch(`${API_BASE_URL}/lists`);
        if (!response.ok) throw new Error('Failed to fetch lists');
        return await response.json();
    } catch (error) {
        console.error('Error fetching lists:', error);
        throw error;
    }
}

async function getListById(listId) {
    try {
        const response = await fetch(`${API_BASE_URL}/lists/${listId}`);
        if (!response.ok) throw new Error('Failed to fetch list');
        return await response.json();
    } catch (error) {
        console.error('Error fetching list:', error);
        throw error;
    }
}

async function createList(listData) {
    try {
        const response = await fetch(`${API_BASE_URL}/lists`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(listData)
        });
        if (!response.ok) throw new Error('Failed to create list');
        return await response.json();
    } catch (error) {
        console.error('Error creating list:', error);
        throw error;
    }
}

async function updateList(listId, listData) {
    try {
        const response = await fetch(`${API_BASE_URL}/lists`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                list_id: listId,
                ...listData
            })
        });
        if (!response.ok) throw new Error('Failed to update list');
        return await response.json();
    } catch (error) {
        console.error('Error updating list:', error);
        throw error;
    }
}

async function deleteList(listId) {
    try {
        const response = await fetch(`${API_BASE_URL}/lists/${listId}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete list');
        return await response.json();
    } catch (error) {
        console.error('Error deleting list:', error);
        throw error;
    }
}

// ============================================
// LIST UNITS API FUNCTIONS
// ============================================

async function getListUnits(listId = null) {
    try {
        let url = `${API_BASE_URL}/list-units`;
        if (listId) {
            url += `?list_id=${listId}`;
        }
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch list units');
        return await response.json();
    } catch (error) {
        console.error('Error fetching list units:', error);
        throw error;
    }
}

async function getListUnitById(listUnitId) {
    try {
        const response = await fetch(`${API_BASE_URL}/list-units/${listUnitId}`);
        if (!response.ok) throw new Error('Failed to fetch list unit');
        return await response.json();
    } catch (error) {
        console.error('Error fetching list unit:', error);
        throw error;
    }
}

async function addUnitToList(listUnitData) {
    try {
        const response = await fetch(`${API_BASE_URL}/list-units`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(listUnitData)
        });
        if (!response.ok) throw new Error('Failed to add unit to list');
        return await response.json();
    } catch (error) {
        console.error('Error adding unit to list:', error);
        throw error;
    }
}

async function removeUnitFromList(listUnitId) {
    try {
        const response = await fetch(`${API_BASE_URL}/list-units/${listUnitId}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to remove unit from list');
        return await response.json();
    } catch (error) {
        console.error('Error removing unit from list:', error);
        throw error;
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

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
