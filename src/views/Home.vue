<template>
  <div class="home">    
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
    
    
   <!--  
    <h1>les 1</h1> 
    <p ref="p">My name is {{name}} and my age {{age}}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name">
    -->

    <!--
    <h1>les 2</h1>
    <h2>refs</h2>
    <p>{{adelOne.name}} - {{adelOne.age}}</p>
    <button @click="updateAdelOne">Update Adel One</button>

    <h2>reactive</h2>
    <p>{{adelTwo.name}} - {{adelTwo.age}} - {{nameTwo}}</p>
    <button @click="updateAdelTwo">update Adel Two</button>

    <h2>refs</h2>
    <p>{{nameOne}}</p>

    <h2>reactive</h2>
      <p>{{nameTwo}}</p> -->

      <!-- 
      <h1>les 3</h1>
      <h2>computed</h2>
      <input type="text" v-model="search">
      <p>Search term: {{search}}</p>
      <div v-for="name in matchingNames" :key="name">        
        <p>{{name}}</p>        
      </div>
      <button @click="handleClick">Stop watching</button>
      -->

    <!-- 
    <h1>les 4</h1>
    <PostList v-if="showPosts" :posts="posts"/> 
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
     -->

      

  </div>
  
</template>

<script>
import PostList from '../components/PostList.vue'
import { computed, reactive, ref, watch, watchEffect } from 'vue'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'
export default {  
  name: 'Home',
  components: { PostList, Spinner, TagCloud },
  setup(){
    //les 6
    const {posts, error, load} = getPosts()
    load()
    return {posts, error}

    /*
     //, watch, watchEffectles 5
    const posts = ref([])
    const error = ref(null) 
    
    //async and await
    const load = async()=>{
      try{
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
    load()
    return {posts, error}
    */

    /* 
    //les 4
    const posts = ref([
      {title:'Welcome to the blog',body:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo obcaecati laborum fuga mollitia ratione iure consequatur distinctio laboriosam debitis nostrum, recusandae doloremque, accusantium totam, qui quia a assumenda. Nostrum, natus!',id:1},
      {title:'Top 5 css tips',body:'lorem ipsum',id:2}
    ])

    const showPosts = ref(true)

    return {posts, showPosts}
    */

    /*
    //les 3

    const search = ref('')
    const names = ref(['Adel','Saleh','Ahmed','Al-Rafiq','Ali','Mohammed','Walid','Yahya'])

    const stopWatch = watch(search, () =>{
      console.log('watch function run')
    })
    const stopEffect = watchEffect(()=>{
      console.log('watchEffect funtion run', search.value)
    })
    const matchingNames = computed(()=>{
      return names.value.filter(name => name.includes(search.value))
    })

    const handleClick = () =>{
      stopWatch()
      stopEffect()
    }
    return {names, search,matchingNames,handleClick}
     */

    /*
    //les 2
    const adelOne = ref({name:'Adel', age: 41})
    const adelTwo = reactive({name: 'Saleh', age: 65})
    const nameOne = ref('Ahmed')
    const nameTwo = reactive('Al-Rafiq')

    const updateAdelOne = () =>{
      adelOne.value.age = 30
    }
    const updateAdelTwo =()=>{
      adelTwo.age = 60
      nameTwo = ref('Hoethifah')
    }
    return {adelOne, updateAdelOne, adelTwo, updateAdelTwo, nameOne, nameTwo}
    */
    
    /*
    //les 1
    console.log(this) //undifined

    const p = ref(null)
    console.log(p, p.value);

    let name = ref("Adel")
    let age = ref(41)

    const handleClick = ()=>{
      name.value = 'Ali'
      age.value = 35 */
      /* console.log(p, p.value);
      p.value.classList.add('test')
      p.value.textContent = 'Hello Ali' 
    }
    return {name, age, handleClick, p}*/

    
  
  }
  
  
}
</script>
<style>
 .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>
