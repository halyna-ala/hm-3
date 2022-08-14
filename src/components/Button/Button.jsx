import { PropTypes } from 'prop-types';
import {ButtonStyle } from './Button.styled';


const Button = ({  onloadMore }) => (
	<ButtonStyle type="button" onClick={onloadMore} >
		 Завантажити ще...
	</ButtonStyle>
);

// Button.defaultProps = {
// 	onClick: () => null,
// 	children: null,
// }

Button.propType = {
	onloadMore: PropTypes.func,
	// children: PropTypes.node,

}

export default Button;

