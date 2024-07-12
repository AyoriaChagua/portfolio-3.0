export const background_dark = "#101028"
export const background_light = "#fff"


export const primary_text = "#4E60FE"
export const secondary_text = "#BCB6E1"
export const tertiary_text = "#7E7DAD"

export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};