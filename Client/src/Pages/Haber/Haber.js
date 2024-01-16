import React from 'react';
import useDataFetch from "../../hooks/useDataFetch";
import resim from '../../assets/haberLogo.png';

function Haber() {
  const { data } = useDataFetch('https://newsapi.org/v2/top-headlines?country=tr&apiKey=736ce726eca34cf399c5005a81efc770');

  const haberler = data.articles && Array.isArray(data.articles) ? data.articles : [];

  return (
    <div className='flex flex-wrap items-center justify-center'>
      {haberler.map((haber, index) => (
        <div className="max-w-md bg-white p-6 rounded-md shadow-md m-2 p-2" key={index}>
          <h2 className="text-2xl font-semibold mb-2">Kaynak: {haber.author}</h2>
          <img src={haber.urlToImage || resim} alt="Haber Resmi" className='w-full p-3 rounded-md' />
          <p className="text-gray-700 mb-4 mt-4">{haber.title}</p>
          <p className="text-gray-500">Tarih: {haber.publishedAt}</p>
         <a href={haber.url} style={{color:'blue'}}>Habere git</a>
        </div>
      ))}
    </div>
  );
}

export default Haber;
