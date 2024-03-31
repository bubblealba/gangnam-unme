import * as React from "react"
import { HeadFC, PageProps } from "gatsby"

const NotFoundPage: React.FC<PageProps> = () => {

  React.useEffect(()=>{
    window.location.replace('/');
  },[])

  return <></>;
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
