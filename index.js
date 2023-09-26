async function fetchData() {
    const url = 'https://get-population.p.rapidapi.com/population';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a0b3aca417mshc239992fc99a680p11b807jsn62e1a50fd2e1',
            'X-RapidAPI-Host': 'get-population.p.rapidapi.com'
        }
    }

    try {
        const response = await fetch(url, options);
        const result = await response.text();

        // Seleciona a div com o id "pop"
        const divPop = document.getElementById('pop');

        // Atualiza o conteúdo da div com os dados recebidos
        const resultDict = JSON.parse(result)
        divPop.textContent = resultDict.readable_format;
    } catch (error) {
        console.error(error);
    }
}

setInterval(fetchData, 2000)
