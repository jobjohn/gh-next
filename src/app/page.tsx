"use client";

import { useState } from "react";
import { PostList } from "./components/PostList";
import { Writearea } from "./components/Writearea";

export default function Home() {
  const [postText, setPostText] = useState("");

  return (
    <main className="h-full bg-slate-100">
      <div className="flex w-full flex-col">
        <Writearea text={postText}></Writearea>
        <PostList postlist={["test", "fuga"]}></PostList>
      </div>
    </main>
  );
}
