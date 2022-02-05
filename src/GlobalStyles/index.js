import { createGlobalStyle } from 'styled-components';


export const GLobalStyled = createGlobalStyle`

    *,:before,:after{
        margin: 0;
        padding: 0;
        border:none;
        outlien:none;

        list-style:none;
        text-decoration:none;

        box-sizing: border-box;
    }

    :root{
        ${'' /* ========== COLOR ==================== */}
        --bg-color-primary:#531C99;
        --bg-color-gradient: linear-gradient(182.04deg, rgba(96, 24, 188, 0) -4.7%, rgba(120, 54, 204, 0.65) 98.28%);
        --bg-color-neutro-dark:#131419;
        --bg-color-neutro-dark-complement:#1C1C24;
        --bg-color-neutro-light:#F3F4F9;
        
        ${'' /* ================= FONTS ===================== */}
        --font-title:'Inter', sans-serif;
        --font-body:'Inter', sans-serif;

    }

    body{
        font-family:var(--font-body);
        background-color:var(--bg-color-neutro-dark);
    }

`