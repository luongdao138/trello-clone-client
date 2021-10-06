import { useEffect, useRef, useState } from 'react';
import { Wrapper } from './ImageSelector.styles';
import { MdClose, MdSearch } from 'react-icons/md';
import { convertImages, getNewImages, searchImages } from './unsplashAPI';
import InfiniteScroll from 'react-infinite-scroll-component';
import useEventListener from '../../hooks/useEventListener';

export interface Image {
  id: string;
  url: {
    small: string;
    full: string;
  };
}
interface Props {
  style?: any;
  open: boolean;
  onClose: () => void;
  setCover: React.Dispatch<React.SetStateAction<string | null>>;
  closeClickOutSide: boolean;
}

interface Pagination {
  page: number;
  per_page: number;
  total_results: number;
}

const ImageSelector = ({
  style,
  open,
  onClose,
  setCover,
  closeClickOutSide,
}: Props) => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const ref = useRef<HTMLDivElement | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    per_page: 20,
    total_results: -1,
  });

  useEventListener('mousedown', window, (e: any) => {
    if (!ref.current?.contains(e.target) && closeClickOutSide) {
      onClose();
    }
  });

  const handleClose = () => {
    onClose();
  };

  const handleSearchImages = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query || !query.length) return;
    setSearchTerm(query);
    searchImages(query, 1, pagination.per_page).then((data) => {
      console.log(data);

      setPagination({ ...pagination, page: 1, total_results: data.total });
      setImages(convertImages(data.results));
    });
  };

  const fetchMoreImages = () => {
    console.log('Fetch more');

    if (pagination.total_results === -1) {
      getNewImages(pagination.page + 1, pagination.per_page).then((data) => {
        // const newImages = ;
        setImages([...images, ...convertImages(data)]);
        setPagination((x) => ({ ...x, page: x.page + 1 }));
      });
    } else {
      searchImages(searchTerm, pagination.page + 1, pagination.per_page).then(
        (data) => {
          const newImages = [...images, ...convertImages(data.results)];
          setImages(newImages);
          setPagination((x) => ({
            ...x,
            page: x.page + 1,
            total_results: data.total,
          }));
        }
      );
    }
  };

  useEffect(() => {
    getNewImages(pagination.page, pagination.per_page)
      .then((data) => {
        const newImages: Image[] = convertImages(data);
        setImages(newImages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return open ? (
    <Wrapper ref={ref} style={style}>
      <button className='close' onClick={handleClose}>
        <MdClose />
      </button>
      <p className='title'>Photo Search</p>
      <p className='sub-title'>Search Unsplash for photos</p>
      <div className='title-form'>
        <form onSubmit={handleSearchImages}>
          <input
            placeholder='Keywords...'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button type='submit'>
            <MdSearch />
          </button>
        </form>
      </div>
      {images.length > 0 ? (
        <div id='scrollableDiv' className='image-wrapper'>
          <InfiniteScroll
            dataLength={images.length}
            hasMore={
              pagination.total_results === -1
                ? true
                : images.length < pagination.total_results
            }
            next={fetchMoreImages}
            loader={<h4>Loading...</h4>}
            scrollableTarget='scrollableDiv'
          >
            {images.map((i, index) => (
              <img
                key={i.id + index}
                src={i.url.small}
                onClick={() => {
                  setCover(i.url.full);
                }}
              />
            ))}
          </InfiniteScroll>
        </div>
      ) : (
        <p className='message'>No images found!</p>
      )}
    </Wrapper>
  ) : null;
};

export default ImageSelector;
