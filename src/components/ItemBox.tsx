import React from 'react';

const ItemBox = ({title, descs, descStyle}:{title : string, descs : string[], descStyle ?: React.CSSProperties}) => {
  return (
    <div className="p-4 bg-dark-gray rounded text-base">
      <h3 className='mb-2'>{title}</h3>
      {descs.map((desc, idx)=>(
        <p key={idx} className="font-light text-sm" style={descStyle}>{desc}</p>
      ))}
    </div>
  );
};

export default ItemBox;