import { useEffect } from "react";
import Router from "next/router";

export default () => {
  useEffect(() => {
    Router.push("https://github.com/linefusion/pages");
  });
  return null;
};
