// import React, { Suspense, lazy } from 'react';
// import styled from "styled-components";
//
//
// export default function LazyImage(props) {
//
//   const Image = styled.img`
//     display: block;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     width: 100%;
//     max-width: 400px;
//     max-height: 600px;
//     margin: 10px 0;
//     animation-duration: 1s;
//     animation-name: showPic;
//   `;
//
//   return (
//       <div>
//         {/*<Suspense fallback={<div>Загрузка...</div>}>*/}
//           <Image src={props.src} />
//         {/*</Suspense>*/}
//       </div>
//   );
// }