export const openWhatsAppWindow = () => {
    const destinationNumber = '933374956';
    const message = 'Hola Ayoria! quisiera hablar contigo, gracias.';
    let urlWhatsApp = `https://wa.me/${destinationNumber}`;
    if (message) {
        urlWhatsApp += `?text=${encodeURIComponent(message)}`;
    }
    window.open(urlWhatsApp, '_blank');
};


export const downloadCV = () => {
    const link = document.createElement('a');
    link.href = './docs/CV-Ayoria Chagua.docx';
    link.download = 'CV-Ayoria Chagua.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}