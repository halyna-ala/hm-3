// import "react-loader-spinner/dist/loader/LineWave";
import { Hearts } from 'react-loader-spinner'
import { LoaderStyled } from "./Loader.styled";

export default function Loader() {
	return (
		<LoaderStyled role='alert'>
			<Hearts strokeColor="#3f51b590"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true} />
			Завантажуємо...
		</LoaderStyled>
	)
}

