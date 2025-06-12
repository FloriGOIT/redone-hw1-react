import style from './imgGallery.module.scss';
import axios from 'axios';
import React from 'react';
import ContentLoader from "react-content-loader";

//<Searchbar>, <ImgGallery>, <ImageGalleryItem>, <Loader>, <Button> и <Modal>

const fetchImgs = async query => {

  
  const apiB = axios.create({
    baseURL: `https://pixabay.com/api/?key=42799638-b50871d8c9a958480a9d6ba7c&image_type=photo&orientation=horizontal&per_page=9&page=5`,
  });
  const imagesInfo = await apiB.get(`&q=${query}`);
  return imagesInfo.data.hits;
};

class ImgGallery extends React.Component {
  state = { imagesArr: [], error2: null, isLoading2: false, query: '' };
  handleQueryChange = (input) => { this.setState({ query: input }); console.log("input", input); console.log("state", this.state.query) }
  
  async componentDidUpdate(prevProps, prevState) {
    if(prevState.query !== this.state.query){
    this.setState({ isLoading2: true });
    try {
      const data = await fetchImgs(`&q=${this.state.query}`);
      this.setState({ imagesArr: data });
    } catch (error) {
      this.setState({ error2: error });
    } finally {
      this.setState({ isLoading2: false });
    }}
  }

  render() {
    //console.log('imagesArr', this.state.imagesArr);
    return (
      <section className={style.imgGalleryAll}>
                
        <Search handleQueryChange={this.handleQueryChange} />
        <ImageGalleryItem data={this.state.imagesArr} />
        {this.state.isLoading2 && <Loader/>}

      </section>
    );
  }
}
export default ImgGallery;

class ImageGalleryItem extends React.Component {
  render() {
    const { data } = this.props;
    //console.log('data', data);
    return (
      <ul className={style.imgGalleryList}>
        {data.map(({ id, tags, webformatURL }) => {
          return (
            <li key={id}>
              <img src={webformatURL} alt={tags} />
            </li>
          );
        })}
      </ul>
    );
  }
}

class Search extends React.Component {
  handleInputChange = e => { e.preventDefault(); let input = e.target.elements.inputSch.value;  this.props.handleQueryChange(input)}
  render() {
   
    return (
      <form className={style.searchImg} onSubmit={this.handleInputChange}>
        <button>🍳</button>
        <input type="text" name="inputSch" placeholder='Seatch a noun.....' />
      </form>
    );
  }
}




const MyLoader = () => (
  <ContentLoader
    height={140}
    speed={2}
    backgroundColor={'rgba(0, 0, 0, 0.26)'}
    foregroundColor={'rgb(21, 119, 51, 0.80)'}
    viewBox="0 0 380 70"
  >
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="10" height="10" />
    <rect x="20" y="0" rx="5" ry="5" width="10" height="10" />
    <rect x="40" y="0" rx="5" ry="5" width="10" height="10" />
    <rect x="60" y="0" rx="5" ry="5" width="10" height="10" />
    
  </ContentLoader>
)

class Loader extends React.Component{

  render() {
    return <MyLoader/>
  }
}