interface iOptionVariant {
    color: string,
    imageName: string
}

const paper: iOptionVariant = {color: '#4865f4', imageName: 'icon-paper.svg'},
    scissors: iOptionVariant = {color: '#ec9e0e', imageName: 'icon-scissors.svg'},
    rock: iOptionVariant = {color: '#dc2e4e', imageName: 'icon-rock.svg'};

export {paper, scissors, rock};