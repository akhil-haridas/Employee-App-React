import React from 'react'

const Head = ({title}) => {
  return (
    <>
      <div className="bg-blue-500 flex flex-col h-[69px] md:h-auto sm:gap-10 justify-start p-4 w-full">
        <p className="font-sans font-bold text-left text-2xl text-white-A700 w-auto">
          {title}
        </p>
      </div>
    </>
  );
}

export default Head