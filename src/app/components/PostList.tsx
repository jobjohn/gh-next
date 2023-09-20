export const PostList = (props: any) => {
  const postlist: string[] = props.postlist;

  return (
    <>
      <ol>
        {postlist.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ol>
    </>
  );
};
