async function fetchData() {
    const url = 'https://get-population.p.rapidapi.com/population';
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a0b3aca417mshc239992fc99a680p11b807jsn62e1a50fd2e1',//it's free, you can use it if you want ;)
            'X-RapidAPI-Host': 'get-population.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const result = await response.json();
        
        const divPop = document.getElementById('pop');
        if (divPop && result && result.readable_format) {
            divPop.textContent = result.readable_format;
        } else {
            console.error('elemento "pop" não encontrado.');
        }
    } catch (e) {
        console.error(e);
    }
}

setInterval(fetchData, 2000);
