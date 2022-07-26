// import "react-loader-spinner/dist/loader/LineWave";
import { Hearts } from 'react-loader-spinner'
import { LoaderStyled } from "./Loader.styled";

export default function Loader() {
	return (
		<LoaderStyled role='alert'>
			<Hearts color="#0000" height={80} width={100} />
			Завантажуємо...
		</LoaderStyled>
	)
}

