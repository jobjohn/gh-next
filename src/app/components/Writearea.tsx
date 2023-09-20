export const Writearea = (text: any) => {
  return (
    <div className="flex flex-col w-full p-2 ">
      <textarea
        name={text}
        id=""
        className="resize-none rounded-md p-2"
        rows={1}
        placeholder="write here."
      ></textarea>
      <div className="flex justify-end">
        <button className="w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Post
        </button>
      </div>
    </div>
  );
};
