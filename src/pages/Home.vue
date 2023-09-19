<template>
	<Header />
    <main class="main">
		<section class="c_section banner">
			<div class="c_inner c_flex_wrap">
				<div class="txtBox"> 
					<p class="subtit">UI/UX Designer</p>
					<p class="bigfont">HyunJung So</p>
					<p class="dsc">Hello! I'm HYUNJUNG SO, a UI/UX designer who crafts emotions.I create more than just visually pleasing interfaces. I design experiences that consider user expectations, behaviors, and emotions. Like an architect, I ensure that my UX designs seamlessly blend with users and their surroundings.Remember, with me, every click can be a journey of delight!</p>
					<button type="button" class="btn-primary">RESUME</button>
				</div>
				<div class="imgBox">
					<img src="@/assets/images/home/banner_hj.png" alt="me" />
				</div>
			</div>
		</section>
		<section class="c_section case_studies bg_dark">
			<div class="c_inner"> 
				<h2 class="contsTit01">CASE STUDIES</h2>
				<div class="projectWrap c_flex_wrap"> 
					<div class="txtWrap"> 
						<h3 class="project">Project01</h3>
						<p class="dsc">Time Management</p>
						<h4 class="projectName">HARUT</h4>
						<p class="kind">Application</p>
						<router-link to="/Harut" class="c_more_btn c_flex_wrap">more<span class="icon_morebtn_arrow"></span></router-link>
					</div>
					<router-link to="/Harut" class="thumbnailWrap">
						<img src="@/assets/images/home/harut.png" alt="project01_harut screenshot" />
					</router-link>
				</div>
			</div>
		</section>
		<section class="c_section case_studies">
			<div class="c_inner"> 
				<div class="projectWrap c_flex_wrap"> 
					<div class="txtWrap"> 
						<h3 class="project">Project02</h3>
						<p class="dsc">Payment System</p>
						<h4 class="projectName">T-ON PAY</h4>
						<p class="kind">Responsive Web</p>
						<router-link to="" class="c_more_btn c_flex_wrap">more<span class="icon_morebtn_arrow"></span></router-link>
					</div>
					<router-link to="/TonPay" class="thumbnailWrap">
						<img src="@/assets/images/home/tonpay.png" alt="tonpay" />
					</router-link>
				</div>
			</div>
		</section>
		<section class="c_section case_studies bg_dark">
			<div class="c_inner"> 
				<div class="projectWrap c_flex_wrap"> 
					<div class="txtWrap"> 
						<h3 class="project">Project03</h3>
						<p class="dsc">Exhibition</p>
						<h4 class="projectName">NUOVO SEOUL</h4>
						<p class="kind">Resonsive Web</p>
						<router-link to="" class="c_more_btn c_flex_wrap">more<span class="icon_morebtn_arrow"></span></router-link>
					</div>
					<router-link to="/NuovoSeoul" class="thumbnailWrap">
						<img src="@/assets/images/home/nuovoseoul.png" alt="nuovo seoul" />
					</router-link>
				</div>
			</div>
		</section>
		<section class="c_section contact">
			<div class="c_inner"> 
				<h2 class="contsTit01">CONTACT</h2>
				<div class="contactWrap c_flex_wrap"> 
					<a href="tel:+821071376536" to="" class="c_flex_wrap">
						<div class="icon_wrap"><span class="icon_call"></span></div>
						<span class="txt">+82)10-7137-6536</span>
					</a>
					<a href="mailto: shj4691@gmail.com" class="c_flex_wrap">
						<div class="icon_wrap"><span class="icon_mail"></span></div>
						<span class="txt">shj4691@gmail.com</span>
					</a>
					<a href="http://linkedin.com/in/hyunjungso" target="_blank" class="c_flex_wrap">
						<div class="icon_wrap"><span class="icon_linkedin"></span></div>
						<span class="txt">http://linkedin.com/in/hyunjungso</span>
					</a>
				</div>
			</div>
		</section>
    </main>
	<Footer />
</template>
 
<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<style></style>