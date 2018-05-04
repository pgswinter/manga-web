<template>
	<div>
		<div :item="item">
			<h3>{{item.name}}</h3>
		</div>
		<ul>
			<li v-for="ip in page" :page="page">
				<img :src="ip.url" alt="" />
			</li>
		</ul>
		<!-- <ul>
			<li v-for="page in pages" :pages="pages">
				<img :src="page.url" alt="" />
			</li>
		</ul> -->
	</div>
</template>
<script>
	export default{
		name: 'Details',
		created () {
			if(!this.item.name){
				this.$store.dispatch('itemById',this.$route.params['id'])
			}
			if(!this.pages.length){
				this.$store.dispatch('allPages')
			}
			// console.log(this.$store)
		},
		computed:{
			item(){
				const paramId = parseInt(this.$route.params['id'])
				return this.$store.getters.getItemById(paramId)
			},
			pages(){
				return this.$store.getters.allPages
			},
			page(){
				const paramId = parseInt(this.$route.params['id'])
				return this.$store.getters.getPageById(paramId)
			}
		}
	}
</script>