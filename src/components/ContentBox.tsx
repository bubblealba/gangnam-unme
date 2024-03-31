import React from 'react';

const ContentBox = ({title, subTitle, items}:{title:string, subTitle?:string, items : {title: string, content:string}[]}) => {
  return (
    <div className="p-4 bg-dark-gray rounded text-base">
      <h4 className='mb-2 font-bold'>{title}{subTitle&&(<>&nbsp;<span className='text-canary-yellow'>{subTitle}</span></>)}</h4>
      {items.map((item,idx)=>(
        <p key={idx} className="font-light text-sm mb-2">
          <span className='border-2 border-white border-solid text-white p-1 font-bold rounded text-xs'>{item.title}</span>
          &nbsp;
          <span>{item.content}</span>
        </p>
      ))}
    </div>
  );
};

export default ContentBox;