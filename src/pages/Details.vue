<template>
	<div>
		<div :item="item"
		>
			<router-link to="/">
				<h3>{{item.name}}</h3>
			</router-link>
			<router-link 
				:to=
				"{
					name:'Details',
					params:{
						id:item.id,
						chapter:parseInt(this.$route.params['chapter'])-1
					}
				}"
			>Previous</router-link>
			<router-link 
				:to=
				"{
					name:'Details',
					params:{id:item.id,
					chapter:parseInt(this.$route.params['chapter'])+1
					}
				}"
			>Next</router-link>
		</div>
		<div>
			<button @click="myToggle">Select your chapter</button>
			<ul :class="{active:isActive}" style="display:none">
				<li v-for="chapter in allChapter" :allChapter="allChapter">
					<router-link :to=
						"{ 
							name: 'Details',
							params: { 
								id: chapter.idItem,
								chapter: chapter.id 
							}
						}"
					>
						Chapter {{chapter.nameChapter}}	
					</router-link>
				</li>
			</ul>
		</div>
		<ul>
			<li v-for="singleChapter in chapterMangas" :chapterMangas="chapterMangas">
				<div v-for="page in singleChapter.img_chapter">
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
		data(){
			return{
				isActive: false	
			}
		},
		computed:{
			item(){
				const paramId = parseInt(this.$route.params['id'])
				return this.$store.getters.getItemById(paramId)
			},
			pages(){
				return this.$store.getters.allPages
			},
			allChapter(){
				const paramId = parseInt(this.$route.params['id'])
				return this.$store.getters.getPagesByChapter(paramId)
			},
			chapterMangas(){
				const paramId = parseInt(this.$route.params['id'])
				const paramLatestChapter = parseInt(this.$route.params['chapter'])
				return this.$store.getters.getPageById(paramId,paramLatestChapter)
			}
		},
		methods:{
			myToggle(){
				this.isActive = !this.isActive
			}
		}
	}
</script>
<style>
	.active{
		display: block !important;
	}
</style>