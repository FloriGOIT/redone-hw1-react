import style from './imgGallery.module.scss';
import axios from 'axios';
import React from 'react';


//<Searchbar>, <ImgGallery>, <ImageGalleryItem>, <Loader>, <Button> и <Modal>

const fetchImgs = async query => {
        const apiB = axios.create({ baseURL: `https://pixabay.com/api/?key=42799638-b50871d8c9a958480a9d6ba7c&image_type=photo&orientation=horizontal&per_page=9&page=3` });
  const imagesInfo = await apiB.get(`&q=${query}`); 
  return imagesInfo.data.hits; 
};

class ImgGallery extends React.Component {
  state = { imagesArr: [], error2: null, isLoading2: false };

  async componentDidMount() {
    this.setState({ isLoading2: true });
    try {
            const data = await fetchImgs(`&q=dog`);
            this.setState({ imagesArr: data });
           
    } catch (error) {
      this.setState({ error2:error });
    } finally {
      this.setState({ isLoading2: false }); 
    }
  }
  
        render() {
                console.log("imagesArr",this.state.imagesArr)
    return (
      <section className={style.imgGalleryAll}>
                    <ImageGalleryItem data={this.state.imagesArr } />
      </section>
    );
  }
}
export default ImgGallery;

class ImageGalleryItem extends React.Component{

        render() {

                const { data } = this.props;
                console.log("data",data)
                return (<ul className={style.imgGalleryList}>
                        {data.map(({id, tags, webformatURL
                        }) => {
                                return <li key={ id}>
                                        <img src={webformatURL} alt={ tags} />
</li>})}
                </ul>)
        }
}
