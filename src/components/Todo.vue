<template>
  <div class="conta">
        
        <div >
            
            <p class="lead" :class="{'is-Completed':item.completed}">
                <input type="checkbox" @change="markcomplete">
                {{item.title}}
                <button class="btn-del" @click="del" >X</button>
            </p>
            
        </div>
  </div>
</template>

<script>
export default {
    name: 'Todo',
    components: {
    },
    props:['item'],
    methods: {
        
        markcomplete(){
            this.item.completed = !this.item.completed
        },
        del(e){
            e.preventDefault();
            this.$emit('del',this.item.id);
        }
    }
}
</script>

<style scoped>
    .container{
        margin:10px;
    }
    .btn-del{
        float: right;
        border-radius: 50%;
        background: red;
        color: wheat;
        border-style: none;
    }
    .is-Completed{
        text-decoration: line-through;
    }
</style>