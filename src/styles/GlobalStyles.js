import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --color-white: rgb(255,255,255);
        --color-black: rgb(12,12,12);
        &, &.light-mode {
            --color-grey-0: rgb(255,255,255);
            --color-grey-50: #f5f7f8;
            --color-grey-100: rgb(153,153,153);
            --color-grey-200: rgb(119,119,119);
            --color-grey-300: rgb(85,85,85);
            --color-grey-500: rgb(51,51,51);
            --color-grey-600: rgb(40,40,40);
            --color-grey-700: rgb(29,29,29);

            --shadow-sm: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
            --shadow-md: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;;
            --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
            --color-grey-0-transparent: rgba(0,0,0,0.1);

            --color-accent-50: #E4E4FF;
            --color-accent-100: #E0E0FF;
            --color-accent-200: #C7C7FE;
            --color-accent-500: #6363F1;
            --color-accent-600: #4F4FE5;
            --color-accent-700: #4343CA;
            --color-accent-900: #32329A;

            font-family: 'Poppins', sans-serif;
        }

        &.dark-mode {
            --color-grey-700: rgb(255, 255, 255);
            --color-grey-600: rgb(156,163,175);
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

        &.accent-purple {    
         --color-accent-50: #E4E4FF;
         --color-accent-100: #E0E0FF;
         --color-accent-200: #C7C7FE;
         --color-accent-500: #6363F1;
         --color-accent-600: #4F4FE5;
         --color-accent-700: #4343CA;
         --color-accent-900: #32329A;
        }
        &.accent-red {
         --color-accent-50: #FFE4EA;
        --color-accent-100: #FFDFE0;
        --color-accent-200: #FFC7D2;
        --color-accent-500: #F16377;
        --color-accent-600: #E54F61;
        --color-accent-700: #CA434E;
        --color-accent-900: #7E2E3C;
        }
        &.accent-blue {
        --color-accent-50: #E0EDFF;
         --color-accent-100: #E4F4FF;
          --color-accent-200: #C7D3FE;
          --color-accent-500: #6383F1;
          --color-accent-600: #4F6EE5;
          --color-accent-700: #4364CA;
          --color-accent-900: #2E4781;
        }
        &.accent-orange {
        --color-accent-50: #fff4e0;
        --color-accent-100: #ffdaab;
        --color-accent-200: #ffc275;
        --color-accent-500: #ff9f00;
        --color-accent-600: #ff8c00;
        --color-accent-700: #ff7a00;
        --color-accent-900: #ff5d00;
        }

        &.accent-green {
        --color-accent-50: #e0f8e0;
        --color-accent-100: #c3f0c2;
        --color-accent-200: #9be09a;
        --color-accent-500: #4caf50;
        --color-accent-600: #43a047;
        --color-accent-700: #388e3d;
        --color-accent-900: #276e2d;
        }

        &.font-poppins {
            font-family: 'Poppins', sans-serif;
        }
        &.font-montserrat {
            font-family: 'Montserrat', sans-serif;
        }
        &.font-mukta {
            font-family: 'Mukta', sans-serif;
        }

        --color-accent-opacity: rgba(199, 210, 254, 0.3);
        --color-online: #4caf50;
        --color-low-100: #e5fada;
        --color-low-700: #69b04b;
        --color-normal-100: #fff1eb;
        --color-normal-700:	#ff6927;
        --color-high-100: #ffeaea;
        --color-high-700: #fd5151;

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
        --color-todo-100: #cbdff7;
        --color-todo-700: #5b9cea;

        --color-development-700: #4b8bd2;
        --color-design-700: #f94141;
        --color-ecommerce-700: #509b9a;
        --color-entertainment-700:#e50058;
        --color-socialmedia-700:#219e7f;
        --color-marketing-700:#d07d4c;
        --color-research-700:#0079ad;
        --color-education-700:#ffcc00;
        --color-healthcare-700:#a080d4;
        --color-finance-700:#33cc99;

        --color-project-100: var(--color-accent-50);
        --color-project-700: var(--color-accent-500);

        --color-accent-purple-preview-500: #6363F1;
        --color-accent-purple-preview-700: #4343CA;
        --color-accent-blue-preview-500: #6383F1;
        --color-accent-blue-preview-700: #4364CA;
        --color-accent-red-preview-500: #F16377;
        --color-accent-red-preview-700: #CA434E;
        --color-accent-orange-preview-500: #ff9f00;
        --color-accent-orange-preview-700: #ff7a00;
        --color-accent-green-preview-500: #4caf50;
        --color-accent-green-preview-700: #388e3d;

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

    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;
