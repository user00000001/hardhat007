import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <div className=" mt-2 flex space-x-5 justify-evenly">
      <Link className=" bg-gray-300 px-3 rounded-md" href={"/examples/modal-hooks"}>Modal Hooks</Link>
      <Link className=" bg-gray-300 px-3 rounded-md" href={"/examples/custom-connectbutton"}>Custom ConnectButton</Link>
      <Link className=" bg-gray-300 px-3 rounded-md" href={"/examples/send-transaction"}>Send Transaction</Link>
      <Link className=" bg-gray-300 px-3 rounded-md" href={"/examples/this-is-md"}>MD</Link>
      <Link className=" bg-gray-300 px-3 rounded-md" href={"/examples/this-is-mdx"}>MDX</Link>
      <Link className=" bg-gray-300 px-3 rounded-md" href={"/examples/fetch-queries"}>FetchQueries</Link>
      <Link className=" bg-gray-300 px-3 rounded-md" href={"/examples/test-page"}>Test Page</Link>
    </div>
  );
}

export default Nav;
