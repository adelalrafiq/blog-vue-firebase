import {ref} from 'vue'
import { projectFirestore } from '../firebase/config'

const getPost = (id) => {

  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      let res = await projectFirestore.collection('posts').doc(id).get()
      // console.log(res)
      // console.log(res.data)

      if (!res.exists) {
        throw Error('That post does not exist')
      }
      post.value = { ...res.data(), id: res.id }
      console.log(post.value)
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { post, error, load } 
}

export default getPost



/* const getPost = (id)=>{
  const post = ref(null)
  const error = ref(null) 
  
  //async and await
  const load = async()=>{        
    try{
      // simulate delay
      await new Promise(resolve => {
        setTimeout(resolve, 2000)
      })
      let data = await fetch('http://localhost:3000/posts/' + id)
      //console.log(data)
      if(!data.ok){
      throw Error('This post does not exist')
      }
      post.value = await data.json()
    }
    catch(err){
      error.value = err.message
      console.log(err.message)
    }      
  }
  return {post, error, load}
}

export default getPost */