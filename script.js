
    (function() {
      // Dados de filmes reais (com URLs de imagens do TMDB) para parecer profissional
      // Utilizaremos pôsteres do TMDB (API pública, sem chave) – imagens reais de filmes/séries.
      const filmesPopulares = [
        { title: 'Oppenheimer', img: 'https://image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg', badge: 'TOP 10' },
        { title: 'Barbie', img: 'https://image.tmdb.org/t/p/w300/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg', badge: '' },
        { title: 'Guardiões da Galáxia Vol. 3', img: 'https://image.tmdb.org/t/p/w300/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg', badge: '' },
        { title: 'Missão: Impossível – Acerto de Contas', img: 'https://image.tmdb.org/t/p/w300/NNxYkU70HPurnNCSiCjYAmacwm.jpg', badge: '' },
        { title: 'John Wick 4', img: 'https://image.tmdb.org/t/p/w300/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg', badge: '' },
        { title: 'The Batman', img: 'https://image.tmdb.org/t/p/w300/74xTEgt7R36Fpooo50r9T25onhq.jpg', badge: '' },
        { title: 'Duna: Parte 2', img: 'https://image.tmdb.org/t/p/w300/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg', badge: 'NOVO' },
        { title: 'Top Gun: Maverick', img: 'https://image.tmdb.org/t/p/w300/62HCnUTziyWcpDaBO2i1DX17ljH.jpg', badge: '' },
        { title: 'Stranger Things', img: 'https://image.tmdb.org/t/p/w300/49WJfeN0moxb9IPfGn8AIqMGskD.jpg', badge: 'SÉRIE' },
        { title: 'The Crown', img: 'https://image.tmdb.org/t/p/w300/1M876KPjulVwppEpldhdc8V4o68.jpg', badge: '' },
      ];

      const filmesEmAlta = [
        { title: 'Round 6', img: 'https://image.tmdb.org/t/p/w300/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg', badge: 'TOP 10' },
        { title: 'Wandinha', img: 'https://image.tmdb.org/t/p/w300/9PFonBhy4cQy7Jz20NpMygczOkv.jpg', badge: '' },
        { title: 'The Last of Us', img: 'https://image.tmdb.org/t/p/w300/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg', badge: 'NOVO' },
        { title: 'Succession', img: 'https://image.tmdb.org/t/p/w300/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg', badge: '' },
        { title: 'The Bear', img: 'https://image.tmdb.org/t/p/w300/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg', badge: '' },
        { title: 'Wednesday', img: 'https://image.tmdb.org/t/p/w300/9PFonBhy4cQy7Jz20NpMygczOkv.jpg', badge: '' },
        { title: 'The Witcher', img: 'https://image.tmdb.org/t/p/w300/7vjaCdMw15FEbXyLcQ1vCw5VvXZ.jpg', badge: '' },
        { title: 'Black Mirror', img: 'https://image.tmdb.org/t/p/w300/7PRddO7z7mcPi21nZTCMGShA8Gm.jpg', badge: '' },
      ];

      const filmesMinhaLista = [
        { title: 'Interestelar', img: 'https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', badge: '' },
        { title: 'O Poderoso Chefão', img: 'https://image.tmdb.org/t/p/w300/3bhkrj58Vtu7enYsRolD1fZdja1.jpg', badge: '' },
        { title: 'Pulp Fiction', img: 'https://image.tmdb.org/t/p/w300/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg', badge: '' },
        { title: 'Clube da Luta', img: 'https://image.tmdb.org/t/p/w300/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg', badge: '' },
        { title: 'Forrest Gump', img: 'https://image.tmdb.org/t/p/w300/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg', badge: '' },
        { title: 'Matrix', img: 'https://image.tmdb.org/t/p/w300/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', badge: '' },
      ];

      // Função para criar pôsteres dinamicamente
      function renderizarPosters(lista, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = ''; // limpa

        lista.forEach(item => {
          const posterDiv = document.createElement('div');
          posterDiv.className = 'poster';

          const img = document.createElement('img');
          img.src = item.img;
          img.alt = item.title;
          img.loading = 'lazy'; // carregamento otimizado

          // Badge (se houver)
          if (item.badge) {
            const badgeSpan = document.createElement('span');
            badgeSpan.className = 'badge';
            badgeSpan.textContent = item.badge;
            posterDiv.appendChild(badgeSpan);
          }

          // Overlay com título (para aparecer no hover)
          const overlay = document.createElement('div');
          overlay.className = 'title-overlay';
          overlay.textContent = item.title;

          posterDiv.appendChild(img);
          posterDiv.appendChild(overlay);
          container.appendChild(posterDiv);
        });
      }

      // Renderiza as três fileiras
      renderizarPosters(filmesPopulares, 'row-populares');
      renderizarPosters(filmesEmAlta, 'row-emalta');
      renderizarPosters(filmesMinhaLista, 'row-list');

      // Efeito de scroll no header (mudar fundo)
      const header = document.getElementById('header');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });

      // Pequeno ajuste: evitar que o clique no botão "Assistir" recarregue a página
      document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', (e) => e.preventDefault());
      });

      // Simular interatividade nos pôsteres (console log)
      document.querySelectorAll('.poster').forEach(poster => {
        poster.addEventListener('click', () => {
          const title = poster.querySelector('.title-overlay')?.textContent || 'Filme';
          console.log(`Assistir: ${title}`);
        });
      });
    })();
  
