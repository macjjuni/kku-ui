import {useCallback, memo, useEffect, useState, CSSProperties} from 'react';


const darkClass = 'dark';
const texts = ['☀️', '🌙'];

const buttonStyle: CSSProperties = {
    fontSize: '36px',
    background: 'transparent',
    outline: 'none',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
}

const DarkModeButton = () => {

    const [buttonText, setButtonText] = useState(texts[1]);

    const onLightMode = useCallback((body: HTMLBodyElement | HTMLDivElement) => {
        setButtonText(texts[0]);
        body.classList.add(darkClass);
    }, []);
    const onDarkMode = useCallback((body: HTMLBodyElement | HTMLDivElement) => {
        setButtonText(texts[1]);
        body.classList.remove(darkClass);
    }, []);

    const onToggleDarkMode = useCallback(() => {
        const bodyElement = window.document.body as HTMLBodyElement;
        const storybookBody = window.document.querySelector('.sb-main-padded.sb-show-main') as HTMLDivElement;

        const isBodyContain = bodyElement.classList.contains(darkClass);
        const isSbBodyContain = storybookBody.classList.contains(darkClass);

        if (isBodyContain) { onDarkMode(bodyElement); }
        else { onLightMode(bodyElement); }


        if (isSbBodyContain) { onDarkMode(storybookBody); }
        else { onLightMode(storybookBody); }
    }, []);

    useEffect(() => {
        const bodyElement = window.document.body as HTMLBodyElement;
        const isBodyContain = bodyElement.classList.contains(darkClass);
        if (isBodyContain) {setButtonText(texts[0]);}
    }, []);

    return (
        <div style={{position: 'absolute', top: '24px', right: '24px'}}>
            <button type={'button'}
                    onClick={onToggleDarkMode}
                    style={buttonStyle}
            >
                {buttonText}
            </button>
        </div>
    );
};

export default memo(DarkModeButton);
