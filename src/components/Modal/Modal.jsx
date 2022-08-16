import { Overlay, ModalStyle } from './Modal.styled';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import { PropTypes } from 'prop-types'; 

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
				window.removeEventListener('keydown', this.handleKeyDown);
	}

	handleKeyDown = e => {
		if (e.code === 'Escape') {
			this.props.onClose();
		}
	};

	// findImage = () => {
	// 	const { images, id } = this.props;
	// 	if (id) {
	// 		return images.find(image => image.id === id);
	// 	}
	// };

	handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
	this.props.onClose();
}
	}

	render() {
		// const findedImage = this.findImage();
		return createPortal(
			<Overlay onClick={this.handleBackdropClick}>
				<ModalStyle>
					<img
						src={this.props.largeImageURL} alt=""
					/>
				</ModalStyle>
			</Overlay>,
			modalRoot
		);
	}
}

Modal.propTypes = {
	largeImageURL: PropTypes.string.isRequired,
};

export default Modal;
