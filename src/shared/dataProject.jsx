import MuslimPergi from '../assets/Image/muslimPergi.svg';
import VictoriaBank from '../assets/Image/victoria-bank.svg';
import Qatros from '../assets/Image/qatros.svg'
import BtnProperty from '../assets/Image/btn-property.svg'

export const DataProject = [
  {
    id: 1,
    label: "Internet Banking Victoria",
    url: 'https://ibvimo.victoriabank.co.id/',
    image: <img src={VictoriaBank} className='w-120 h-120' alt="Victoria Bank" />,
    tags: [
      {
        id: 1,
        name: 'Front End'
      }, 

      {
        id: 2,
        name: 'Web Dev'
      }, 

      {
        id: 3,
        name: 'React JS',
      }, 

      {
        id: 4,
        name: 'Material UI',
      }, 
    ]
  }, 

  {
    id: 2,
    label: 'Qatros Landing Page',
    url: '',
    image: <img src={Qatros} className='w-90 h-90' alt="Victoria Bank" />,
    tags: [
      {
        id: 1,
        name: 'Front End'
      }, 

      {
        id: 2,
        name: 'Web Dev'
      }, 

      {
        id: 3,
        name: 'Vue JS',
      }, 

      {
        id: 4,
        name: 'Bootstrap',
      }, 
    ]
  }, 

  {
    id: 3,
    label: 'BTN Property',
    url: 'https://www.btnproperti.co.id/',
    image: <img src={BtnProperty} alt="Muslim Pergi" />,
    tags: [
      {
        id: 1,
        name: 'Front End'
      }, 

      {
        id: 2,
        name: 'Web Dev'
      }, 

      {
        id: 3,
        name: 'Next JS',
      }, 

      {
        id: 4,
        name: 'Bootstrap',
      }, 
    ]
  }, 

  {
    id: 4,
    label: 'Muslim Pergi',
    url: 'https://muslimpergi.com/',
    image: <img src={MuslimPergi} alt="Muslim Pergi" />,
    tags: [
      {
        id: 1,
        name: 'Front End'
      }, 

      {
        id: 2,
        name: 'Web Dev'
      }, 

      {
        id: 3,
        name: 'Vue JS',
      }, 

      {
        id: 3,
        name: 'Ruby On Rails',
      }, 

      {
        id: 4,
        name: 'Bootstrap',
      }, 
    ]
  }
]
