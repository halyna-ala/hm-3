import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContainer } from './App.styled';
// import { Notify } from "../../components/ImageGallery/ImageGallery.styled";
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Button from 'components/Button';
import Modal from 'components/Modal';
// import ImageErrorView from 'components/ImageErrorView';
import Loader from 'components/Loader';
import imagesAPI from '../../services/images-api';
import { animateScroll } from 'react-scroll';

export class App extends Component {
	state = {
		images: [],
		id: null,
		searchQuery: '',
		page: 1,
		isLoading: false,
		loadMore: false,
		showModal: false,
		isEmpty: false,
		error: null,
		per_page: 12,
	
	};
	// openModal = e => {
	// 	this.setState (state => ({
	// 		showModal: !state.showModal
	// 	}) )
	// // showModal }) => ({
	// // 		showModal: !showModal,
	// // 		// id: e.currentTarget.dataset.id,
	// // 	})
	// };
	

	componentDidUpdate(_, prevState) {
		const { searchQuery, page, } = this.state;
		if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
			this.getPhotos(searchQuery, page);
		}
	}

	getPhotos = async (query, page) => {
    if (!query) 
	return;
    this.setState({ isLoading: true });
    try {
      const {
        hits,
				totalHits,
      } = await imagesAPI(query, page);
      console.log(hits, totalHits);
      if (hits.length === 0) {
        this.setState({ isEmpty: true });
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        loadMore: this.state.page < Math.ceil(totalHits / this.state.per_page),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

	handleFormSubmit = searchQuery => {
		this.setState({
			searchQuery: searchQuery,
			page: 1,
			loadMore: false,
			images: [],
			isEmpty: false,
		});
	};

	loadMore = () => {
		this.setState(prevState => ({ 
			page: prevState.page + 1 
		}));
		this.scrollOnMoreButton();
	};

	scrollOnMoreButton = () => {
		animateScroll.scrollToBottom({
		  duration: 1000,
		  delay: 10,
		  smooth: 'linear',
		});
	  };

	// openModal = e => {
	// 	console.log();
	// 	const idCurrentImg = Number(e.target.id);
	// 	const pageForModal = this.state.pictures
	// 	  .flatMap(e => e)
	// 	  .find(page => idCurrentImg === (page.id));
	// 	this.setState({ largeImageURL: pageForModal.largeImageURL });
	//   };

	openModal = largeImageURL => {
		console.log(largeImageURL);
		this.setState({
		  showModal: true,
		  largeImageURL: largeImageURL,
		});
	  };

	// findImage = () => {
	// 	const { images, id } = this.props;
	// 	if (id) {
	// 		return images.find(image => image.id === id);
	// 	}
	// };

	closeModal = () => {
		this.setState({
			showModal: false,
		});
	};

	render() {
		const { images, isLoading, loadMore, page, showModal, largeImageURL } =
		this.state;
		return (
			<AppContainer>
				<Searchbar onSubmit={this.handleFormSubmit} />
				<ToastContainer position="top-center" autoClose={3000} />
				
				{isLoading ? ( <Loader />) : (<ImageGallery
					openModal={this.openModal}
					images={images}
					
				/>)}
				{/* {isEmpty && <ImageErrorView
					message={`Немає картинки з ім'ям '${this.state.searchQuery}'`}
				/>}
				{searchQuery ? <ImageGallery
					openModal={this.openModal}
					images={images}
					
				/> : <Notify >Введіть слово в пошуковий рядочок</Notify>} */}
				
				{loadMore && <Button onloadMore={this.onloadMore} page={page} />}
				
				{showModal && (
					<Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
				)}
			</AppContainer>
		);
	}
}
