export const Writearea = () => {
  return (
    <div className="flex flex-col w-full p-2">
      <textarea
        name=""
        id=""
        className="resize-none rounded-md p-2"
        rows={10}
        placeholder="write here."
      ></textarea>
      <button className="rounded-md border-1 border-blue-300 border-solid">
        Post
      </button>
    </div>
  );
};
