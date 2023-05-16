import * as x from "../commonjs";
import { Client } from "./client";

console.log("from server component in app dir", x);

export default function X() {
  return (
    <>
      <div>test</div>
      <Client />
    </>
  );
}
