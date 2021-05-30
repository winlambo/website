import {createGlobalStyle} from 'styled-components'
// eslint-disable-next-line import/no-unresolved

const GlobalStyle=createGlobalStyle` * {
	margin: 0;
	padding: 0;
	text-decoration: none;
	list-style: none;
	font-family: 'Gilroy', sans-serif;
	font-weight: 600;

}

@font-face {
	font-family: 'Amazing Slab';
	src: url('../fonts/Amazing-Slab-Regular.ttf') format('truetype');
}

@font-face {
	font-family: 'Amazing Slab Bold';
	src: url('../fonts/Amazing-Slab-Bold.ttf') format('truetype');
}
@font-face {
	font-family: 'Macchina';
	src: url('../fonts/LaMacchinaRegular.ttf') format('truetype');
}



/* Scroll Bar Css Starts */
::-webkit-scrollbar {
	width: 8px;
}

::-webkit-scrollbar-track {
	background-color: #ffffff;
	-webkit-box-shadow: inset 1px 1px 1px 1px rgba(0, 0, 0, 0.15);
	box-shadow: inset 1px 1px 1px 1px rgba(0, 0, 0, 0.15);
}

::-webkit-scrollbar-thumb {
	border-radius: 0;
	background: #292929;
	border: 2px solid #ffffff;
	width: 8px;
}

::-webkit-scrollbar-thumb:active {
	border-radius: 0px;
	background: #616161;
}

/* Scroll Bar Css Ends */

/* sound button pause */
#sound{

}
.volmute{
	position:fixed;
	right:10px;
	bottom:10px;
	width:50px;
	height:50px;
	border-radius:50%;
	display:flex;
	justify-content:center;
	align-items:center;
	background:black;
	border:1px solid #fff;
	cursor:pointer;
	i{
		font-size:20px;
		color:#fff;
		position:absolute;
	}
}
.fa-volume-mute{
	z-index:50
}
/*Comman Css*/
a:hover,
a:focus,
a:active {
	text-decoration: none;
}

ol,
ul {
	margin: 0;
	padding: 0;
}
html{
	scroll-behavior: smooth;
}
img {
	display: block;
}

body {
	font-size: 14px;
	font-weight: normal;
	font-family: 'Amazing Slab';
	color: #fff;
	text-decoration: none;
	scroll-behavior: smooth;
	background-repeat: no-repeat;
	background-size: cover;
}

p {
	font-size: 18px;
	font-weight: normal;
	color: #535b65;
	line-height: 34px;
}

.form-control {
	color: #fff;
	padding-left: 18px
}

@media(min-width:992px) {
	/*.product-wrapper>.row>.col-md-3:nth-child(4n+1){
	  clear: left;
	}*/
}

h1 {
	font-family: 'Amazing Slab Bold';
	font-weight: 800 !important;
	margin-bottom: 30px;
}

ul {
	list-style: none;
}



nav img {
	height: 40px
}

section {
	padding: 50px 0;
}

.btn-main {
	font-size: 13px;
	font-weight: 500;
	color: #000;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 34px;
	border-radius: 2px;
	text-align: center;
	position: relative;
	border: none;
	background-color: #fff;
	-webkit-transition: all 0.4s ease;
	-o-transition: all 0.4s ease;
	transition: all 0.4s ease;
	background: #000;
	font-weight: 600;
	z-index: 10;
	min-width: 140px;
	margin-bottom: 10px;

	i {
		font-size: 20px;
		margin: 0 6px;
	}

	.fa-mouse-pointer {
		font-size: 14px;
		margin: 6px 6px 0;
	}
}

.btn-main:focus,
.btn-main:hover {
	outline: none;
	border: none;
	transform: scale(1.06);
}

.btn-medium {
	font-size: 13px;
	font-weight: 500;
	color: #000;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px 10px;
	border-radius: 2px;
	text-align: center;
	position: relative;
	border: none;
	background-color: #fff;
	-webkit-transition: all 0.4s ease;
	-o-transition: all 0.4s ease;
	transition: all 0.4s ease;
	background: #0dd5f7;
	font-weight: 600;
	z-index: 10;
	min-width: 110px;
	margin-bottom: 0px;

	i {
		font-size: 20px;
		margin: 0 6px;
	}

	.fa-mouse-pointer {
		font-size: 14px;
		margin: 6px 6px 0;
	}
}

.btn-medium:focus,
.btn-medium:hover {
	outline: none;
	border: none;
	transform: scale(1.06);
}



.btn-black:focus,
.btn-black:hover {
	color:#fff;
}

.btn-white:focus,
.btn-white:hover {
	color:#000
}

.btn-white {
	background: #fff;
	color: #000;
	margin-right: 12px;
}

.btn-black {
	background: #000;
	color: #fff;
	margin-right: 12px;
	i{
		color:#fff
	}
}
.btn-transparent{
	background:transparent;
	color:#000;
	transistion:none;
	transform:scale(1) !important;
	cursor:auto !important;
	padding:6px;
	margin:0;
}
.btn-transparent:hover{
	transform:scale(1)
}
.bg-white {
	color: #000;
	padding: 10vh 0;
}

.bg-black {
	background: #000;
	color: #fff;
	padding: 20vh 0;
}

.btn-outer {
	margin: 20px 0;
	display: flex;
	flex-flow: wrap;
}

nav {
	position: absolute;
	width: 100%;
	z-index: 10;
	top: 0;
	right: 0;
	left: 0;
}

.footer-nav {
	position: relative;
	color: #000;
	padding: 10px 0;

	.logo {
		height: 30px;
		width: auto;
	}

	.nav-left {
		width: 100%;
		justify-content: flex-end;
	}
}

.nav-main {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px 0;


}

.logo {
	//height: 40px;
	font-family: 'Macchina';
	font-size:46px;
	position:relative;
	line-height: 1;
	img{
		position:absolute;
		height: 15px;
   		top: 9px;
		left:0;
	}
}

.meta {
	height: 20px;
	display: inline;
	margin-right: 6px;
}

.nav-left {
	width: 45%;
	display: flex;
	justify-content: flex-end;
	align-items: center
}

.ticketrotatorouter{
	display:flex;
	margin:0 6px;
	width:240px;
	overflow:hidden	
}
.ticketrotator{
	display:flex;
	position:relative;
	transition:all 0.5s ease;
}
.ticketblkbx{
	min-width:110px;
	max-width:110px;
	background: #000;
	color: #fff;
	padding: 4px 10px;
	margin: 0 5px;
	text-align:center;
	font-size:13px;
}
.ticket-bx {
	display: flex;
	align-items: center;	
}

.ticket-bx-outer {
	display: flex;
	align-items: center;
	padding: 0 10px;

	i {
		font-size: 20px;
		cursor:pointer;
	}
}

.main-wraper {
	padding: 0px 0;
	display: flex;
	align-items: center;

	.row {
		align-items: center;
		min-height: 100vh !important;

	}

	h1 {
		font-size: 50px;
		margin: 10px 0 30px;
	}
}

.blk-bx {
	background: #000;
	color: #fff;
	padding: 0 5px;
}

.maincol2 {
	display: flex;
	align-items: center;
	background: url(../images/lambo.png) center center no-repeat, url(../images/bggradient.png) center center repeat;
	background-size: 100%, cover;
	position: absolute;
	min-height: 100vh;
	height: 100%;
	width: 50vw;
	right: 0;
}

.excig {
	width: 100%;
	max-width: 400px;
	margin-left: auto;
}


.top-sec h1 {
	text-align: center;
}

.top-sec #val {
	text-decoration: underline;
}

.toptable {

	font-weight: 600;
	height: 500px;
	overflow-y: auto;
	overflow-x: hidden;
	padding-right: 25px;

	.row {
		display: flex;
		justify-content: space-between;
		//margin:6px 0;
		min-height: 28px;
		border-top: 2px solid #dfe5e5;
		padding: 16px 0;
	}

	.rowhead {
		border-top: 0;
	}
}

.toptable .cl1 {
	display: flex;
}

.sno {
	width: 60px;
	text-align: center;

	img {
		height: 20px;
		text-align: center;
		display: inline;
	}
}





@media(min-width:1024px) and (max-width:1200px) {
	.nav-left {
		width: 70%;
	}
}

@media(min-width:992px) and (max-width:1024px) {
	.nav-left {
		width: 70%;
	}
}

@media(min-width:768px) and (max-width:992px) {
	.nav-left {
		width: 66%;
	}
}

@media(min-width:576px) and (max-width:768px) {
	.maincol2 {
		width: 100vw;
	}

	.container {
		max-width: 500px;
	}

	.maincol2 {
		display: none;
	}

	.main-wraper {
		background: url(../images/lambo.png) center center no-repeat, url(../images/bggradient.png) center center no-repeat;
		background-size: 80%, 100% 100%;

		.row {
			padding-top: 180px;
		}
	}

	.exchangebx {
		padding-bottom: 10vh;

		.excig {
			margin-left: 0;
		}
	}

	.nav-main {
		flex-direction: column;

		.nav-left {
			width: 100%;
			flex-direction: column;

			.ticket-bx {
				margin: 20px 0;
				font-size: 12px;
			}
		}
	}
}

@media(min-width:448px) and (max-width:576px) {
	.maincol2 {
		width: 100vw;
	}

	.container {
		max-width: 400px;
	}

	.bg-black {
		padding: 60px 0;
	}

	.maincol2 {
		display: none;
	}

	.main-wraper {
		background: url(../images/lambo.png) center center no-repeat, url(../images/bggradient.png) center center no-repeat;
		background-size: 80%, 100% 100%;

		.row {
			padding-top: 190px;
		}
	}

	.exchangebx {
		padding-bottom: 10vh;

		.excig {
			margin-left: 0;
		}
	}

	.nav-main {
		flex-direction: column;

		.nav-left {
			width: 100%;
			flex-direction: column;

			.ticket-bx {
				margin: 20px 0;
				font-size: 12px;
			}
		}
	}
}


@media (max-width:447px) {
	h1 {
		font-size: 36px !important
	}

	.maincol2 {
		width: 100vw;
	}

	.container {
		max-width: unset;
		padding: 0 40px;
	}

	.bg-black {
		padding: 60px 0;
	}

	.maincol2 {
		display: none;
	}

	.main-wraper {
		background: url(../images/lambo.png) center center no-repeat, url(../images/bggradient.png) center center no-repeat;
		background-size: 80%, 100% 100%;

		.row {
			padding-top: 190px;
		}
	}

	.exchangebx {
		padding-bottom: 10vh;

		.excig {
			margin-left: 0;
		}
	}

	.nav-main {
		flex-direction: column;

		.nav-left {
			width: 100%;
			flex-direction: column;

			.ticket-bx {
				margin: 20px 0;
				font-size: 12px;
			}
		}
	}

	// .nav-left{display:none}
	.addrs {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 120px;
	}
}

` 
export default GlobalStyle