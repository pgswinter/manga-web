<template>
	<div>
		<h3>Hello, There is Home</h3>
		<ul>
			<li v-for="item in items">
				<router-link :to="'details/'+item.id+'/'+item.latest_chapter">
					<h3>{{item.name}}</h3>
					<img :src="item.cover_url" alt="" />	
				</router-link>
			</li>	
		</ul>	
	</div>
</template>

<script>
	export default {
		name: "Home",
		created(){
			if(this.items.length === 0){
				this.$store.dispatch('allItems')
			}
		},
		computed:{
			items(){
				return this.$store.getters.allItems
			}
		}
	}
</script>