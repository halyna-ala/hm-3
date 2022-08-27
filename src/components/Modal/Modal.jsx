import { Overlay, ModalStyle } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { PropTypes } from 'prop-types'; 

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ largeImageURL, onClose }) => {
	useEffect(() => {
	  window.addEventListener('keydown', handleKeyDown);
  
	  return () => {
		window.removeEventListener('keydown', handleKeyDown);
	  };
	});
  
	const handleKeyDown = e => {
	  console.log(e.code);
	  if (e.code === 'Escape') {
		onClose();
	  }
	};
  
	const handleBackDropClick = e => {
	  if (e.currentTarget === e.target) {
		onClose();
	  }
	};
  
		return createPortal(
			<Overlay onClick={handleBackDropClick}>
				<ModalStyle>
					<img
						src={largeImageURL} alt=""
					/>
				</ModalStyle>
			</Overlay>,
			modalRoot
		);
	};


Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	largeImageURL: PropTypes.string.isRequired,
};

export default Modal;
