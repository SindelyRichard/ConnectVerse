export const apiRequest = async (type, data) => {
    try {
        const response = await fetch('http://localhost/api/ForumApi.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ type, ...data })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}

export const checkSession = async () => {
    try {
        const response = await fetch('http://localhost/src/login/CheckSession.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}
