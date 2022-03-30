import { FaCode } from 'react-icons/fa';
import { AiOutlineCode } from 'react-icons/ai';


const category = {
    BASIC: 'Basic',
    MID: '+Intermediate',
    PRO: 'Pro',
}


export const EXPERIENCE_CAT = [
    {
      title: 'Front-End Development',
      icon: <FaCode />,
      items: [
        {
          name: 'HTML',
          category: category.PRO
        },
        {
          name: 'CSS',
          category: category.MID
        },
        {
          name: 'Material Design',
          category: category.MID
        },
        {
            name: 'Boostrap',
            category: category.MID
          },
        {
          name: 'Angular 2+',
          category: category.PRO
        },
        {
          name: 'React JS',
          category: category.MID
        },
        {
          name: 'Javascript',
          category: category.MID
        },
        {
          name: 'Typescript',
          category: category.MID
        },
        
      ]
    },
    {
      title: 'Back-End Development',
      icon: <AiOutlineCode />,
      items: [
        {
          name: 'Java',
          category: category.MID
        },
        {
          name: 'C#',
          category: category.MID
        },
        {
          name: 'Spring Boot',
          category: category.MID
        },
        {
            name: 'DotNet Core',
            category: category.MID
          },
        {
          name: 'NodeJS',
          category: category.BASIC
        },
        {
          name: 'Nest JS',
          category: category.BASIC
        },        
      ]
    },
  
] 