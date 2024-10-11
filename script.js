function login(url) {
    const password = document.getElementById('password').value;
    if (password === '123') {
        document.getElementById('loading-message').style.display = 'block';
        setTimeout(() => {
            document.getElementById('login-iframe').src = url;
            document.getElementById('iframe-container').style.display = 'block';
            document.getElementById('loading-message').style.display = 'none';
        }, 1000);
    } else {
        alert('Senha incorreta. Tente novamente.');
    }
}

function stopScroll() {
    // Exibe a animação de carregamento
    const loadingAnimation = document.getElementById('loading-animation');
    if (loadingAnimation) {
        loadingAnimation.classList.remove('loading-hidden');
        loadingAnimation.classList.add('loading-visible');
    }

    // Aguarda a animação de carregamento terminar (por exemplo, 1 segundo)
    setTimeout(() => {
        if (loadingAnimation) {
            // Oculta a animação de carregamento
            loadingAnimation.classList.remove('loading-visible');
            loadingAnimation.classList.add('loading-hidden');
        }

        // Gera um valor percentual fixo acima de 90
        const assertividade = (90 + Math.random() * 10).toFixed(2) + '%'; // Valor entre 90% e 100%

        // Seleciona o menu contextOptions
        const contextOptions = document.getElementById('contextOptions');

        if (contextOptions) {
            // Remove qualquer assertividade anterior
            const existingAssertividade = contextOptions.querySelector('.assertividade');
            if (existingAssertividade) {
                contextOptions.removeChild(existingAssertividade);
            }

            // Cria um elemento para exibir a assertividade
            const assertividadeElement = document.createElement('div');
            assertividadeElement.textContent = `Assertividade: ${assertividade}`;
            assertividadeElement.className = 'assertividade';
            assertividadeElement.style.fontSize = '18px';
            assertividadeElement.style.marginBottom = '10px';
            assertividadeElement.style.color = 'green'; // Sempre verde porque assertividade é >= 90%

            // Adiciona a assertividade ao menu contextOptions
            contextOptions.appendChild(assertividadeElement);

            // Adiciona a imagem aos 5 primeiros itens do grid
            const gridItems = document.querySelectorAll('.grid-item');
            gridItems.forEach(item => item.innerHTML = ''); // Limpa o conteúdo atual
            const shuffledItems = Array.from(gridItems).sort(() => 0.5 - Math.random());
            const itemsToChange = shuffledItems.slice(0, 5);
            const imageUrl = 'https://jon.bet/static/media/diamond.eac6e969.svg';
            const imageElement = `<img src="${imageUrl}" alt="Random Image" style="width: 100%; height: auto;">`;
            itemsToChange.forEach(item => item.innerHTML += imageElement);
        }

        // Aguarda 5 segundos e então reverte as mudanças
        setTimeout(() => {
            if (contextOptions) {
                // Remove assertividade
                const assertividadeElement = contextOptions.querySelector('.assertividade');
                if (assertividadeElement) {
                    contextOptions.removeChild(assertividadeElement);
                }

                // Remove as imagens dos itens do grid
                const gridItems = document.querySelectorAll('.grid-item');
                gridItems.forEach(item => item.innerHTML = '');
            }
        }, 6000); // Tempo de espera para reverter as mudanças (5 segundos)
    }, 3000); // Tempo de espera para a animação de carregamento (1 segundo)
}



function toggleContextOptions() {
    var menu = document.getElementById('contextOptions');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}
var image1Url = 'https://i.ibb.co/mtkmH1g/Captura-de-tela-2024-07-24-181926.png';
var image2Url = 'https://i.ibb.co/PCB9HhV/Captura-de-tela-2024-07-24-181711.png';


function closeContextOptions() {
    const loadingAnimation = document.getElementById('loading-animation');
    const contextOptions = document.getElementById('contextOptions');

    if (loadingAnimation) {
        loadingAnimation.classList.remove('loading-hidden');
        loadingAnimation.classList.add('loading-visible');
    }

    setTimeout(() => {
        if (loadingAnimation) {
            loadingAnimation.classList.remove('loading-visible');
            loadingAnimation.classList.add('loading-hidden');
        }

        if (contextOptions) {

            const existingAssertividade = contextOptions.querySelector('.assertividade');
            const existingImage = contextOptions.querySelector('.random-image');

            if (existingAssertividade) contextOptions.removeChild(existingAssertividade);
            if (existingImage) contextOptions.removeChild(existingImage);

            // Gera um valor de assertividade entre 1,00% e 99,99%
            const assertividadeValue = (Math.random() * 99.99).toFixed(2);
            const assertividade = `${assertividadeValue}%`;

            // Cria e exibe a imagem
            const imageUrls = [
                'https://i.ibb.co/WfX0bJ4/Captura-de-tela-2024-09-01-013829.png',
                'https://i.ibb.co/RDS5bK3/Captura-de-tela-2024-09-01-014104.png',
                'https://i.ibb.co/X2KPtR9/Captura-de-tela-2024-09-01-013952.png'
            ];
            const imageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageElement.alt = 'Random Image';
            imageElement.style.width = '75px';
            imageElement.style.height = 'auto';
            imageElement.className = 'random-image';
            contextOptions.appendChild(imageElement);

            // Cria e exibe o valor de assertividade abaixo da imagem
            const assertividadeElement = document.createElement('div');
            assertividadeElement.textContent = `Assertividade: ${assertividade}`;
            assertividadeElement.className = 'assertividade';
            assertividadeElement.style.fontSize = '15px';
            assertividadeElement.style.marginTop = '4px'; // Para ficar abaixo da imagem

            // Define a cor da assertividade
            if (parseFloat(assertividadeValue) >= 90) {
                assertividadeElement.style.color = 'green'; // Verde para valores acima de 90%
            } else {
                assertividadeElement.style.color = 'red'; // Vermelho para valores abaixo de 90%
            }

            contextOptions.appendChild(assertividadeElement);

            // Remove a imagem e a assertividade após 5 segundos
            setTimeout(() => {
                if (contextOptions) {
                    const assertividadeElement = contextOptions.querySelector('.assertividade');
                    const randomImageElement = contextOptions.querySelector('.random-image');

                    if (assertividadeElement) contextOptions.removeChild(assertividadeElement);
                    if (randomImageElement) contextOptions.removeChild(randomImageElement);
                }
            }, 5000);
        }
    }, 6000);
}
