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
    				<li :class="{ active: activeMenu === 'hyeonjeongso' }">						
						<!-- Add a click event to scroll to the 'HyunJung So' section -->
						<!-- Replace 'hyunjung-so-section-id' with the actual ID of the HyunJung So section -->
            			<router-link to="/" @click.native.prevent="$emit('scroll-to', 'hyeonjeongso')">Hyeonjeong So</router-link>
					</li>
					<!-- Add a click event to scroll to the 'Case Studies' section -->
					<!-- Replace 'case-studies-section-id' with the actual ID of the Case Studies section -->
          			<li :class="{ active: activeMenu === 'case-studies' }"> 
            			<router-link to="/" @click.native.prevent="$emit('scroll-to', 'case-studies')">Case Studies</router-link> 
					</li>
					<!-- Add a click event to scroll to the 'Contact' section -->
					<!-- Replace 'contact-section-id' with the actual ID of the Contact section -->
						<li :class="{ active: activeMenu === 'contact' }"> 
						<router-link to="/" @click.native.prevent="$emit('scroll-to', 'contact')">Contact</router-link> 
					</li> 
				</ul>
			</div>
		</div>
	</header>
</template>
 
<script>

</script>

<style scoped src="@/assets/css/common/header.css">
</style>