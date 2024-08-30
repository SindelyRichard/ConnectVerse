export const apiRequest = async (type, data) => {
    try {
        const response = await fetch('http://localhost/api/ForumApi.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
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
};

export const checkSession = async () => {
    try {
        const response = await fetch('http://localhost/api/CheckSession.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        });
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const result = await response.json();
        return {
            loggedIn: result.loggedIn,
            username: result.username
        };
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
};
export const logoutApi = async () => {
    try {
        const response = await fetch('http://localhost/src/login/Logout.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
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


};

export const getPosts = async (page=1,limit=30) => {
    try {
        const response = await fetch(`http://localhost/api/PostApi.php?page=${page}&limit=${limit}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
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
};
