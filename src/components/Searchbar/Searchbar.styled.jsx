import styled from 'styled-components';

export const SearchbarStyle = styled.header`
top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`


export const InputWrap = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 3px;
  top: 7px;
`;

export const SearchFormInput = styled.input`
  height: 15px;
  width: 15px;
  background-color: #fff;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  color: #fff;
  outline: none;
  padding: 5px;
  position: relative;
  `;


// /*
//  * Стили компонента Searchbar
//  */
// .Searchbar {
//   top: 0;
//   left: 0;
//   position: sticky;
//   z-index: 1100;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 64px;
//   padding-right: 24px;
//   padding-left: 24px;
//   padding-top: 12px;
//   padding-bottom: 12px;
//   color: #fff;
//   background-color: #3f51b5;
//   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//     0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
// }
