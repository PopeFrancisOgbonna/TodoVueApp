<template>
  <div class="body">
      <AddItem  v-on:add="add"/>
      <Todo v-bind:item='item' @del='del' :key="item.id" v-for="item in todos"/>
  </div>
</template>

<script>
import Todo from './Todo.vue';
import AddItem from'./AddItem.vue';
export default {
    name: 'Todo-Body',
    components: {
        Todo,
        AddItem
    },
    data(){
        return{
            todos: [{
                id:1,
                title: 'Cooking',
                completed:false
            },
            {
                id:2,
                title: 'Gaming',
                completed:false
            },
            {
                id:3,
                title: 'Codding',
                completed:false
            },
            {
                id:4,
                title: 'Reading',
                completed:false
            }
            ]
        }
    },
    methods: {
        del(id){
            this.todos = this.todos.filter(item =>item.id !==id);
        },
        add(newItems){
            this.todos =[...this.todos,newItems];
        }
    }
}
</script>

<style scoped>
    .body{
        padding:10px;
        margin: 5px auto;
        width:65%;
    }
</style>