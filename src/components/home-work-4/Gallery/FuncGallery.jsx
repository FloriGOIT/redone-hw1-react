//section total:1.search, 2. galeria., 3. More. Aditional Loader; fetch
//states: inPending, error, arr gallery

import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './funcGallery.module.scss';

const apiC = axios.create({
  baseURL:
    'https://pixabay.com/api/?key=42799638-b50871d8c9a958480a9d6ba7c&image_type=photo&orientation=horizontal&per_page=9&page=1',
});
const fetchGalleryItems = async (query, nrPage) => {
  const isFetching = await apiC.get(`&q=${query}&page=${nrPage}`);
  return isFetching.data.hits;
};

export const FuncGallery = () => {
  const [arrImgs, setArrImgs] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [ifError, setIfError] = useState(null);
        const [isQuery, setIsQuery] = useState('');
        const [nrPage, setNrPage] = useState(1)

  useEffect(() => {
    const getImgs = async () => {
      setIsPending(true);
      try {
        const data = await fetchGalleryItems(isQuery, nrPage);
        setArrImgs(prevState => [...prevState, data]);
      } catch (error) {
        setIfError(error.message);
      } finally {
        setIsPending(false);
      }
    };
    if (isQuery) getImgs();
  }, [isQuery, nrPage]);

        const handleQuery = input => { setArrImgs([]); setNrPage(1); setIsQuery(input)};
        const handleMoreImgs = () => { setNrPage(prevState => prevState + 1);  console.log(nrPage)}

  console.log('arrImgs', arrImgs);
  console.log('isQuery', isQuery);

  return (
    <section className={style.galleryFAll}>
      <SearchingImg handleQuery={handleQuery} />
      <br />
      <br />
                  <DisplayImgs arrImgs={arrImgs}  />      <br />
                  <br />
                  <MoreImgs handleMoreImgs={handleMoreImgs}/>
    </section>
  );
};

const SearchingImg = props => {
  const { handleQuery } = props;
  const handleQueryComponent = e => {
    e.preventDefault();
    const valueInput = e.target.elements.inputSearch.value;
    console.log(valueInput);
    handleQuery(valueInput);
  };

  return (
    <form onSubmit={handleQueryComponent} className={style.searchingImg}>
      <button type="submit" style={{ fontSize: '28px' }}>
        👌
      </button>
      <input type="text" name="inputSearch" style={{ height: '32px' }} />
    </form>
  );
};

const DisplayImgs = ({ arrImgs }) => {
  return (
    <>
      <ul className={style.displayImgs}>
        {arrImgs.map(({ id, tags, webformatURL }) => {
          return (
            <li key={id} id={id}>
              <img
                srcSet={webformatURL}
                alt={tags}
                style={{ width: '400px', height: '400px', objectFit: 'cover' }}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

const MoreImgs = ({handleMoreImgs}) => {
  return <button type="burron" onClick={handleMoreImgs}>More images</button>;
};
