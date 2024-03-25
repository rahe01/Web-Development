import toast from "react-hot-toast";

export const getBlogs = () => {
  let blogs = [];
  const storedBlogs = localStorage.getItem("blogs");
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }
  return blogs;
};

// save

export const saveBlogs = (blogs) => {
  let blogss = getBlogs();
  const isExist = blogss.find((b) => b.id === blogss.id);
  if (isExist) {
    return toast.error("Blogs already exist");
  }
  blogss.push(blogs);
  localStorage.setItem("blogs", JSON.stringify(blogss));
  toast.success("Blogs updated successfully");
};

// delete

export const deleteBlogs = (id) => {
  let blogs = getBlogs();
  blogs = blogs.filter((b) => b.id!== id);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success("Blogs deleted successfully");
};
