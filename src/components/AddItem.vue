<template>
  <div>
      <form>
            <div class="input-group">
                <input type="text"  v-model="itemName" placeholder="Enter todo Items...">
                <button class="btn btn-lg btn-success" @click="newItem">Add</button>
            </div>
        </form>
  </div>
</template>

<script>
export default {
    name: 'AddItem',
    data(){
        return{
            itemName: '',
            id:4
        }
    },
    methods: {
        newItem(e){
            e.preventDefault();
            this.id++;
            const newItems ={
                id: (this.id+3),
                title: this.itemName,
                completed:false
            }
            this.$emit('add',newItems);
            this.itemName = '';
        }
    }
}
</script>

<style scoped>
    input{
        width:60%;
        padding:10px;
    }
    input,button{
        margin-bottom:10px;
    }
</style>