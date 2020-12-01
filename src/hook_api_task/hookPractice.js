import React, { useState, useEffect } from 'react';

const Hookpractice = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    function handleScroll() {
      if (
        Math.ceil(window.innerHeight + document.documentElement.scrollTop) !==
        document.documentElement.offsetHeight
      )
        return;
      setPage(page + 1);
      console.log('adi gyu')
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`,
        {
          method: 'GET',
        }
      )
        .then((res) => res.json())
        .then((response) => {
          setData([...data, ...response]);
        })
        .catch((error) => console.log(error));
  }, [page]);


  return (
    <>
      <div className="text-center">
        <h1 className="mb-3"> Page : {page}</h1>
        {data.map((item, index) => (
          <div>
            {item.id} - <img className="ml-2 mb-3" width="200" height="200" src={item.url} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Hookpractice;
