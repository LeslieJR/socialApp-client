const HOSTNAME = "http://localhost:4000";

//USER
export const signUp = async (avatar, email, password, password2) => {
  //create a form
  const formData = new FormData();
  formData.enctype = "multipart/form-data";
  formData.append("avatar", avatar);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("password2", password2);
  const res = await fetch(`${HOSTNAME}/api/user/sign-up`, {
    method: "POST",
    body: formData
  });
  return res.json();
};
export const signIn = async (email, password) => {
  const body = {
    email,
    password
  };
  const res = await fetch(`${HOSTNAME}/api/user/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return res.json();
};

//POST
export const createPost = async (image, title, description, token) => {
  //create a form
  const formData = new FormData();
  formData.enctype = "multipart/form-data";
  formData.append("image", image);
  formData.append("title", title);
  formData.append("description", description);

  const res = await fetch(`${HOSTNAME}/api/post/upload`, {
    method: "POST",
    headers: {
      token
    },
    body: formData
  });
  return res.json();
};

export const recentPosts = async () => {
  const res = await fetch(`${HOSTNAME}/api/post/recent-uploads`);
  return res.json();
};

export const popularPosts = async () => {
  const res = await fetch(`${HOSTNAME}/api/post/most-popular`);
  return res.json();
};
export const getStatistics = async () => {
  const res = await fetch(`${HOSTNAME}/api/post/stats`);
  return res.json();
};
export const getDetails = async (post_id, token) => {
  const res = await fetch(`${HOSTNAME}/api/post/details/${post_id}`, {
    headers: {
      "Content-Type": "application/json",
      //typeof token : Object
      ...(token ? { token } : {})
    }
  });
  return res.json();
};

export const getViews = async post_id => {
  const body = {
    post_id
  };

  const res = await fetch(`${HOSTNAME}/api/post/view`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return res.json();
};

export const giveLike = async post_id => {
  const body = {
    post_id
  };
  const res = await fetch(`${HOSTNAME}/api/post/like`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return res.json();
};
export const deletePost = async post_id => {
  const body = {
    post_id
  };
  const res = await fetch(`${HOSTNAME}/api/post/remove-post`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return res.json();
};

//COMMENT
export const createComment = async (post_id, title, comment, token) => {
  const body = {
    post_id,
    title,
    comment
  };

  const res =await fetch(`${HOSTNAME}/api/comment/new-comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token
    },
    body: JSON.stringify(body)
  });

  return res.json();
};

export const allComments = async post_id => {
  const res = await fetch(`${HOSTNAME}/api/post/details/${post_id}`);
  return res.json();
};

export const latestComments = async () => {
  const res = await fetch(`${HOSTNAME}/api/comment/latest-comments`);
  return res.json();
};
