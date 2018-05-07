<template>
	<div>
		<div :item="item">
			<router-link to="/">
				<h3>{{item.name}}</h3>
			</router-link>
		</div>
		<ul>
			<li v-for="chapter in chapterMangas" :chapterMangas="chapterMangas">
				<div v-for="page in chapter.img_chapter">
					<img :src="page.url" alt="" />	
				</div>
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
			chapterMangas(){
				const paramId = parseInt(this.$route.params['id'])
				const paramLatestChapter = parseInt(this.$route.params['chapter'])
				return this.$store.getters.getPageById(paramId,paramLatestChapter)
			}
		}
	}
</script>