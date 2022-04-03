<template>
  <div style="margin-top : 70px">
      <h3>{{id}}</h3>
      <h3>{{title}}</h3>
      <h3>{{content}}</h3>
      <img :src="image" alt="">
  </div>
</template>

<script>
import adminApi from '../APIs/adminApi'
export default {
    name : 'airpodProdoctPage' ,
    props : ['id' , 'title' , 'content' , 'image'] ,
    data(){
        return {
            name : '' ,
            email : '' ,
            paddword : '' ,
        }
    } ,
    beforeMount(){
        const data = adminApi((isOk , data)=>{
            if(isOk===true){
                this.name = data.full_name;
                this.email = data.email;
                this.password = data.password;                

            }else{
                console.log(data);
            }
        })
    }
}
</script>

<style>

</style>