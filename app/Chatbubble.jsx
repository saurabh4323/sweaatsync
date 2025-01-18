"use client";
import { useEffect } from "react";

const ChatbaseScript = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure it's only executed in the browser

      if (!window.chatbase || window.chatbase("getState") !== "initialized") {
        window.chatbase = (...args) => {
          // Use 'args' instead of 'arguments'
          if (!window.chatbase.q) {
            window.chatbase.q = [];
          }
          window.chatbase.q.push(args);
        };

        window.chatbase = new Proxy(window.chatbase, {
          get(target, prop) {
            if (prop === "q") {
              return target.q;
            }
            return (...args) => target(prop, ...args);
          },
        });

        const onLoad = function () {
          const script = document.createElement("script");
          script.src = "https://www.chatbase.co/embed.min.js";
          script.id = "PCg7cQNuVzddTR9_8QZCd";
          script.domain = "www.chatbase.co";
          document.body.appendChild(script);
        };

        if (document.readyState === "complete") {
          onLoad();
        } else {
          window.addEventListener("load", onLoad);
        }
      }
    }
  }, []);

  return null; // This component doesn't render anything visible
};

export default ChatbaseScript;
