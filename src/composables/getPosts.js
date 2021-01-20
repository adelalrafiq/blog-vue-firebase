import {ref} from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {

  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      //const res = await projectFirestore.collection('posts').get()
      // console.log(res.docs)
      const res = await projectFirestore.collection('posts')
        //.orderBy('title', 'desc')
        .orderBy('createdAt', 'desc')  
        .get()

      posts.value = res.docs.map(doc => {
        // console.log(doc.data())
        return { ...doc.data(), id: doc.id }
      })
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { posts, error, load }
}

export default getPosts



/* const getPosts = ()=>{
  const posts = ref([])
  const error = ref(null) 
  
  //async and await
  const load = async()=>{        
    try{
      // simulate delay
      await new Promise(resolve => {
        setTimeout(resolve, 2000)
      })

      let data = await fetch('http://localhost:3000/posts')
      //console.log(data)
      if(!data.ok){
      throw Error('No data available!')
      }
      posts.value = await data.json()
    }
    catch(err){
      error.value = err.message
      console.log(err.message)
    }      
  }
  return {posts, error, load}
}

export default getPosts */