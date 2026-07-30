export function handleHead(caminho, titulo){
    const favicon = document.querySelector('link[rel="icon"]');
    const title = document.querySelector('head title');
    if(favicon && title){
        favicon.href = caminho;
        title.textContent = titulo;
    };
};
