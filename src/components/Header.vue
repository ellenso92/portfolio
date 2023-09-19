<template>
	<header @mouseover="onMouseSubmenu" @mouseout="onMouseOutSubmenu">
		<div class="c_inner c_flex_wrap">
			<h1 class="logo">
				<router-link to="/">
					<img src="@/assets/images/common/logo.svg" alt="HyunjungSo" class="image-contain img" />
				</router-link>
			</h1>
			<div class="gnb">
				<ul class="c_flex_wrap">
					<li class="on">
						<router-link to="/" class="">HyunJung So</router-link>
					</li>
					<li>
						<router-link to="/" >Case Studies</router-link>
					</li>
					<li>
						<router-link to="/" >Contact</router-link>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>
 
<script setup></script>

<style scoped src="@/assets/css/common/header.css">
</style>