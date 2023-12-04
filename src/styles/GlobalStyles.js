import { createGlobalStyle } from "styled-components";

// --color-accent-50: #e0f8e0;
// --color-accent-100: #c3f0c2;
// --color-accent-200: #9be09a;
// --color-accent-500: #4caf50;
// --color-accent-600: #43a047;
// --color-accent-700: #388e3d;
// --color-accent-800: #2e7d33;
// --color-accent-900: #276e2d;

// --color-accent-50: #E4F7FF;
// --color-accent-100: #E0EEFF;
// --color-accent-200: #C7D8FE;
// --color-accent-500: #63A6F1;
// --color-accent-600: #4F8FE5;
// --color-accent-700: #4382CA;
// --color-accent-800: #326060;
// --color-accent-900: #2E5657;

// --color-accent-50: #E4E4FF;
// --color-accent-100: #E0E0FF;
// --color-accent-200: #C7C7FE;
// --color-accent-500: #6363F1;
// --color-accent-600: #4F4FE5;
// --color-accent-700: #4343CA;
// --color-accent-800: #32329A;
// --color-accent-900: #2E2E81;

// --color-accent-50: #fff9e0;
// --color-accent-100: #ffefb2;
// --color-accent-200: #ffe581;
// --color-accent-500: #ffd600;
// --color-accent-600: #ffc300;
// --color-accent-700: #ffb100;
// --color-accent-800: #ffa000;
// --color-accent-900: #ff8e00;

// --color-accent-50: #E4F4FF;
// --color-accent-100: #E0EDFF;
// --color-accent-200: #C7D3FE;
// --color-accent-500: #6383F1;
// --color-accent-600: #4F6EE5;
// --color-accent-700: #4364CA;
// --color-accent-800: #324B9A;
// --color-accent-900: #2E4781;

// --color-accent-50: #FFE4EA;
// --color-accent-100: #FFDFE0;
// --color-accent-200: #FFC7D2;
// --color-accent-500: #F16377;
// --color-accent-600: #E54F61;
// --color-accent-700: #CA434E;
// --color-accent-800: #9A3240;
// --color-accent-900: #7E2E3C;

// --color-accent-50: #FFE4F4;
// --color-accent-100: #FFDFEE;
// --color-accent-200: #FFC7D2;
// --color-accent-500: #F163A6;
// --color-accent-600: #E54F94;
// --color-accent-700: #CA4382;
// --color-accent-800: #9A3267;
// --color-accent-900: #7E2E5D;

// --color-accent-50: #F5F5F5;
// --color-accent-100: #E0E0E0;
// --color-accent-200: #B3B3B3;
// --color-accent-500: #333333;
// --color-accent-600: #222222;
// --color-accent-700: #111111;
// --color-accent-800: #000000;
// --color-accent-900: #000000;

const GlobalStyles = createGlobalStyle`
    :root {
        /* --color-accent-50: #F5F5F5;
        --color-accent-100: #E0E0E0;
        --color-accent-200: #B3B3B3;
        --color-accent-500: #333333;
        --color-accent-600: #222222;
        --color-accent-700: #111111;
        --color-accent-800: #000000;
        --color-accent-900: #000000; */


            /* --color-accent-50: #E1BEE7;
    --color-accent-100: #CE93D8;
    --color-accent-200: #BA68C8;
    --color-accent-300: #AB47BC;
    --color-accent-400: #9C27B0;
    --color-accent-500: #8E24AA;
    --color-accent-600: #7B1FA2;
    --color-accent-700: #6A1B9A; */

        /* --color-accent-50: #EDE7F6;
        --color-accent-100: #D1C4E9;
        --color-accent-200: #B39DDB;
        --color-accent-300: #9575CD;
        --color-accent-400: #7E57C2;
        --color-accent-500: #673AB7;
        --color-accent-600: #5E35B1;
        --color-accent-700: #512DA8; */

        --color-white: rgb(255,255,255);
        --color-black: rgb(12,12,12);
        &, &.light-mode {
            --color-grey-0: rgb(255,255,255);
            --color-grey-50: #f5f7f8;
            --color-grey-100: rgb(153,153,153);
            --color-grey-200: rgb(119,119,119);
            --color-grey-300: rgb(85,85,85);
            --color-grey-500: rgb(51,51,51);
            --color-grey-700: rgb(29,29,29);

            --shadow-sm: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
            --shadow-md: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;;
            --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
            --color-grey-0-transparent: rgba(0,0,0,0.1);
        }

        &.dark-mode {
            --color-grey-700: rgb(255, 255, 255);
            --color-grey-500: rgb(167,167,167);
            --color-grey-300: rgb(102, 102, 102);
            --color-grey-200: rgb(79, 79, 79);
            --color-grey-100: rgb(56, 56, 56);
            --color-grey-50: rgb(36, 36, 36);
            --color-grey-0: rgb(20, 20, 20);

            --shadow-sm: rgba(255, 255, 255, 0.05) 0px 0px 0px 1px;
            --shadow-md: rgba(255, 255, 255, 0.05) 0px 6px 24px 0px, rgba(255, 255, 255, 0.08) 0px 0px 0px 1px;;
            --shadow-lg: 0 2.4rem 3.2rem rgba(255, 255, 255, 0.4);
            --color-grey-0-transparent: rgba(255,255,255,0.1);
        }


         --color-accent-50: #E4E4FF;
         --color-accent-100: #E0E0FF;
         --color-accent-200: #C7C7FE;
         --color-accent-500: #6363F1;
         --color-accent-600: #4F4FE5;
         --color-accent-700: #4343CA;
         --color-accent-800: #32329A;
         --color-accent-900: #2E2E81;

        --color-accent-opacity: rgba(199, 210, 254, 0.3);


        

        --color-online: #4caf50;
        --color-solo-100: #b7e4c7;
        --color-solo-700: #2d6a4f;
        --color-team-100: #ccc8f9;
        --color-team-700: #867bef;
        --color-low-100: #e5fada;
        --color-low-700: #69b04b;
        --color-normal-100: #fff1eb;
        --color-normal-700:	#ff6927;
        --color-high-100: #ffeaea;
        --color-high-700: #fd5151;

        /* Project statuses */
        --color-active-100: #d9eef7;
        --color-active-700: #009cdf;
        --color-tbd-100: #ffeccf;
        --color-tbd-700: #e88e5a ;
        --color-finished-100: #e8faf5;
        --color-finished-700: #27b28f;
        --color-paused-100: #ffcdde;
        --color-paused-700: #f1004e;
        --color-testing-100: #d4f0ef;
        --color-testing-700: #5db6b5;
        --color-canceled-100: #ffeaea;
        --color-canceled-700: #fd5151;

        --border-radius-rounded: 50%;
        --border-radius-sm: 0.4rem;
        --border-radius-md: 0.6rem;
        --border-radius-lg: 1.2rem;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: background-color 0.3s ease, border 0.3s ease;
    }
    body {
        font-family: 'Poppins', sans-serif;
    }


    a {
        text-decoration: none;
    }

`;

export default GlobalStyles;
