type tOptionVariant = {
  name: string,
  color: string,
  imageName: string
}

const optionVariants: tOptionVariant[] = [
  {
    name: 'paper',
    color: '#4865f4',
    imageName: 'icon-paper.svg'
  },
  {
    name: 'scissors',
    color: '#ec9e0e',
    imageName: 'icon-scissors.svg'
  },
  {
    name: 'rock',
    color: '#dc2e4e',
    imageName: 'icon-rock.svg'
  }
];

export {tOptionVariant, optionVariants};