import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayke Brito',
      role: 'CEO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-06-01 12:40:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/felipetassis.png',
      name: 'Felipe Tassis',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Opa, Fala Comigo 👋' },
      { type: 'paragraph', content: 'Esse é o meu primeiro projeto em Node/React. é um projeto que eu fiz acompanhando o curso da Rocketseat. O nome do projeto é RocketSeat-Project 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-06-05 17:50:00')
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}