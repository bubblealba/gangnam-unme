import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="NanumSquareB"
      rel="preload"
      href="/fonts/NanumSquareB.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="NanumSquareEB"
      rel="preload"
      href="/fonts/NanumSquareEB.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="NanumSquareL"
      rel="preload"
      href="/fonts/NanumSquareL.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="NanumSquareR"
      rel="preload"
      href="/fonts/NanumSquareR.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ])
}