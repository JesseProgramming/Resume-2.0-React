import React from 'react'
import { useEffect } from 'react';

export default function ScriptHooks({ url }){
    useEffect(() => {
      const head = document.querySelector("head");
      const script = document.createElement("script");
  
      script.setAttribute("src", url);
      head.appendChild(script);
  
      return () => {
        head.removeChild(script);
      };
    }, [url]);
  };