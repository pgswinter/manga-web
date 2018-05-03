<template>
	<div>
		<div :item="item">
			<h3>{{item.name}}</h3>
		</div>
		<ul>
			<li v-for="page in pages">
				<img :src="page.url" alt="" />
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name: 'Details',
		created () {
			if(!this.item.name){
				this.$store.dispatch('itemById',this.$route.params['id'])
			}
			if(!this.page.url){
				this.$store.dispatch('pagesByIdItem',this.$route.params['id'])
			}
		},
		computed:{
			item(){
				const paramId = parseInt(this.$route.params['id'])
				return this.$store.getters.getItemById(paramId)
			},
			page(){

				const paramId = parseInt(this.$route.params['id'])
				return this.$store.getters.getPageById(paramId)	
			}
		}
	}
</script>