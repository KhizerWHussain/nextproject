import { addPost, deletePost } from "@/lib/actions";

const TestPage = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="description" name="description" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>Add</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="postId" name="postId" />
        <button>Delete Post</button>
      </form>
    </div>
  );
};

export default TestPage;
