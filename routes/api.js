// api.js
const BASE_URL = "/api";

export const fetchPosts = async (accessToken) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const createPost = async (accessToken, title, message) => {
  try {
    await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ title, message }),
    });
  } catch (error) {
    console.error("Error creating post:", error);
  }
};

export const deletePost = async (accessToken, postId) => {
  try {
    await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};
