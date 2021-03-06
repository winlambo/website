import { createGlobalStyle } from "styled-components";
// eslint-disable-next-line import/no-unresolved

const GlobalStyle = createGlobalStyle` 
* {
	margin: 0;
	padding: 0;
	text-decoration: none;
	list-style: none;
	font-family: "Gilroy", sans-serif;
	font-weight: 600;
  }
  
  @font-face {
	font-family: "Amazing Slab";
	src: url("../fonts/Amazing-Slab-Regular.ttf") format("truetype");
  }
  
  @font-face {
	font-family: "Amazing Slab Bold";
	src: url("../fonts/Amazing-Slab-Bold.ttf") format("truetype");
  }
  @font-face {
	font-family: "Macchina";
	src: url("../fonts/LaMacchinaRegular.ttf") format("truetype");
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
  #sound {
  }
  .volbtn {
	position: absolute;
	right: -5%;
	font-size: 22px;
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
  html {
	scroll-behavior: smooth;
  }
  img {
	display: block;
  }
  
  body {
	font-size: 14px;
	font-weight: normal;
	font-family: "Amazing Slab";
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
	padding-left: 18px;
  }
  
  @media (min-width: 992px) {
	/*.product-wrapper>.row>.col-md-3:nth-child(4n+1){
		clear: left;
	  }*/
  }
  
  h1 {
	font-family: "Amazing Slab Bold";
	font-weight: 800 !important;
	margin-bottom: 30px;
  }
  
  ul {
	list-style: none;
  }
  
  nav img {
	height: 40px;
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
	cursor: pointer;
  
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
	color: #fff;
  }
  
  .btn-white:focus,
  .btn-white:hover {
	color: #000;
  }
  
  .btn-white {
	background: #fff;
	color: #000;
	margin-right: 12px;
	font-weight: 700;
  }
  
  .btn-black {
	background: #000;
	color: #fff;
	margin-right: 12px;
	i {
	  color: #fff;
	}
  }
  .btn-transparent {
	background: transparent;
	color: #000;
	transistion: none;
	transform: scale(1) !important;
	cursor: auto !important;
	padding: 6px;
	margin: 0;
	padding-bottom: 0;
	align-items: flex-start;
  }
  .btn-transparent:hover {
	transform: scale(1);
  }
  .bg-white {
	color: #000;
	padding: 10vh 0;
  }
  
  .bg-black {
	background-color: #000;
	color: #fff;
	padding: 20vh 0;
  }
  
  .btn-outer {
	margin: 20px 0;
	display: flex;
	flex-flow: wrap;
	div {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}
  }
  .btn-auto {
	width: auto;
	min-width: 45px;
	padding: 10px 7px;
	i {
	  font-size: 16px;
	}
	img {
	  height: 20px;
	}
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
	  position: relative;
	  height: 30px;
	  width: auto;
	  left: 0;
	  transform: translate(0);
	}
  
	.nav-left {
	  // width: 100%;
	  justify-content: flex-end;
	}
  }
  
  .nav-main {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 16px 0;
	position: relative;
  }
  
  .logo {
	//height: 40px;
	// font-family: 'Macchina';
	// font-size:46px;
	// position:relative;
	// line-height: 1;
	// img{
	// 	position:absolute;
	// 	height: 15px;
	// 	top: 9px;
	// 	left:0;
	// }
	position: absolute;
	left: 50%;
	transform: translateX(-55px);
	width: 100px;
	top: 0;
	img {
	  width: 100%;
	  height: auto;
	}
  }
  
  .meta {
	height: 20px;
	display: inline;
	margin-right: 6px;
  }
  .navcontainer {
	width: 85vw;
	margin: auto;
  }
  .nav-right {
	width: calc(50% - 100px);
	display: flex;
	justify-content: space-between;
	.valouter {
	  display: flex;
	  flex-direction: row;
	  font-weight: 600;
	  &:nth-child(2) {
		margin: 0 20px;
	  }
	  div {
		font-weight: 600;
	  }
	  span {
		padding: 0 0px 0 6px;
	  }
	}
  }
  .arrowanimated {
	display: flex;
	color: #fff;
	align-items: flex-end;
	position: absolute;
  
	top: 50px;
	right: -25px;
	img {
	  width: 20px;
	  height: auto;
	  margin-right: 10px;
	}
	.text {
	  font-family: "Architects Daughter", cursive;
	  font-size: 15px;
	  line-height: 20px;
	}
  }
  
  .nav-left {
	width: 40%;
	display: flex;
	justify-content: space-between;
	align-items: center;
  }
  .nav-right {
	display: flex;
	justify-content: space-between;
	width: calc(50% - 100px);
	.valouter {
	  display: flex;
	  flex-direction: column;
	  &:nth-child(2) {
		margin: 0 20px;
	  }
	}
	div {
	  font-weight: 700;
	}
  }
  .coloredvalouter{
	  z-index:2
  }
  
  .ticketrotatorouter {
	display: flex;
	margin: 0 6px;
	width: 240px;
	overflow: hidden;
  }
  .ticketrotator {
	display: flex;
	position: relative;
	transition: all 0.5s ease;
  }
  .ticketblkbx {
	min-width: 110px;
	max-width: 110px;
	background: #000;
	color: #fff;
	padding: 4px 10px;
	margin: 0 5px;
	text-align: center;
	font-size: 13px;
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
	  cursor: pointer;
	  color: #000;
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
	  position: relative;
	  .arrow {
		right: -6.5px;
		width: 40px;
		height: 40px;
		position: absolute;
		&:before {
		  position: absolute;
		  content: "";
		  width: 0;
		  height: 0;
		  left: 0;
		  border-top: 20px solid transparent;
		  border-bottom: 20px solid transparent;
  
		  border-right: 20px solid black;
		}
		&:after {
		  position: absolute;
		  content: "";
		  width: 0;
		  height: 0;
		  right: 0px;
		  border-top: 20px solid transparent;
		  border-bottom: 20px solid transparent;
  
		  border-left: 20px solid #9cb2a8;
		}
		top: 50%;
		transform: translate(50%, -50%);
	  }
	}
	.info {
	  color: #030303;
	  font-weight: 300;
	}
    .info-contract-address {
        color: rgb(255,51,118);
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
	background: url(../images/bggradient.png) center center repeat;
	background-size: cover;
	position: absolute;
	min-height: 100vh;
	height: 100%;
	width: 50vw;
	right: 0;
	img {
	  width: 90%;
	  display: block;
	  margin: auto;
	}
	.carousel-inner {
	  display: flex;
	  align-items: center;
	}
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
	  &.green {
		background: #9dea09;
	  }
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
  
  /* volume section */
  .chad-bg {
	background: url(/images/chadr.png) 102% bottom no-repeat,
	  url(/images/chadl.png) 0% bottom no-repeat;
	background-size: auto 400px, auto 400px;
	position: relative;
	padding: 5vh 0 20vh;
	&:before {
	  position: absolute;
	  content: "";
	  background: #000;
	  height: 100%;
	  width: 100%;
	  top: 0;
	  z-index: -1;
	}
	.chadheading {
	  font-size: 40px;
	  line-height: 38px;
	  font-weight: 700;
	  display: flex;
	  text-align: right;
	  margin-bottom: 60px;
	  .chadheadingoter {
		margin: auto;
	  }
	  .chadchadbg {
		color: #444444;
		display: flex;
		justify-content: flex-end;
		font-weight: 700;
		span {
		  margin-left: 10px;
		  position: relative;
		  top: -4px;
		  font-weight: 700;
		}
		&.chadbottom {
		  position: relative;
		  right: -30px;
		}
	  }
	}
	.chadcols {
	  padding: 0 20px 100px;
	  div {
		color: #feffff;
		font-weight: 300;
	  }
	  h1 {
		font-size: 28px;
	  }
	}
  
	.chadcol1 {
	  background: url(/images/col1.png);
	  background-size: 75%;
	  background-repeat: no-repeat;
	  background-position: center bottom;
	}
	.chadcol2 {
	  background: url(/images/col2.png);
	  background-size: 75%;
	  background-repeat: no-repeat;
	  background-position: center bottom;
	}
	.chadcol3 {
	  background: url(/images/col3.png);
	  background-size: 75%;
	  background-repeat: no-repeat;
	  background-position: center bottom;
	}
  }
  
  /* draw section */
  .lamb-draw {
	padding-bottom: 0;
	.spinwallet {
	  margin-bottom: 50px;
	  .ticketouter {
		display: flex;
		justify-content: center;
	  }
	  .ticketblkbx {
		background: #fff !important;
		color: #000 !important;
	  }
	  .ticket-bx-outer {
		i {
		  color: #fff;
		}
	  }
	}
	.header {
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  margin-bottom: 20px;
	  .btn-main {
		margin-right: 20px;
		margin-bottom: 0;
	  }
	  h1 {
		margin: 0;
		position: absolute;
		display: flex;
		left: 50%;
		transform: translateX(-50%);
	  }
	  .lg1 {
		display: flex;
		align-items: center;
	  }
	  .wlogo {
		height: 80px;
		margin-right: 30px;
	  }
	  .date {
		h3 {
		  margin-bottom: 3px;
		  font-size: 20px;
		}
		font-weight: 300;
		// margin-left:auto;
	  }
	}
	.wallet {
	  display: flex;
	  justify-content: flex-end;
	  background: #141515;
	  width: fit-content;
	  margin-left: auto;
	  padding: 0 6px;
	  .wallet-inner {
		margin-top: 0px;
		display: flex;
		text-align: right;
		align-items: center;
		h5 {
		  font-weight: 300;
		  margin-bottom: 0;
		  font-size: 16px;
		}
		img {
		  height: 30px;
		  margin-left: 10px;
		}
		.btn-black {
		  min-width: unset;
		  padding: 8px 15px;
		}
		.btn-transparent {
		  text-align: right;
		  color: #fff;
		  padding: 0;
		  margin: 4px 0;
		}
	  }
	}
	.info {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  text-align: center;
	  .btn-main {
		margin: 16px 0;
	  }
	  .asterisk {
		margin: 0 5%;
		max-width: 700px;
	  }
	  .asterisk {
		font-size: 13px;
	  }
	}
  }
  .luckybx {
	display: flex;
	justify-content: center;
	margin-bottom: 30px !important;
	.lckybxinnr {
	  //  padding: 40px 20px;
	  background: #fff;
	  color: #000;
	  margin: 0 6px;
	  font-size: 30px;
	  font-weight: 600;
	  height: 120px;
	  overflow: hidden;
	  // animation:uprotate 2s linear;
	  // animation
	}
	.lckybxnum {
	  width: 80px;
	  position: relative;
	  transition: all 2s ease;
	  top: 0px;
	  div {
		width: 100%;
		height: 120px;
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	  }
	}
	margin: 30px 0 20px;
	@keyframes uprotate {
	  10%,
	  90% {
		transform: translate3d(0, 0px, 0);
	  }
  
	  20%,
	  80% {
		transform: translate3d(0, -100px, 0);
	  }
  
	  30%,
	  50%,
	  70% {
		transform: translate3d(0, 100px, 0);
	  }
  
	  40%,
	  60% {
		transform: translate3d(0, 0px, 0);
	  }
	}
  }
  
  .daily-draw {
	color: #000;
	position: relative;
	.container {
	  position: relative;
	  @media screen and (max-width: 992px) {
		max-width: unset;                                                                     
	  }
	}
	.ReactModal__Overlay {
		position: absolute !important;
	}
	.lossmodal{
		color:#fff
	}
	.coloredinfo{
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		.coloredval{
			text-align:center;
			width:100% !important;
			font-size:20px !important;
			text-transform:uppercase
		}
		.coloredbg{
			width:100%;
		}
	}
	.header {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  margin-bottom: 20px;
	  position: relative;
	  .btn-main {
		margin-right: 20px;
		margin-bottom: 0;
	  }
	  h1 {
		margin: 0;
		// position:absolute;
		// left:50%;
		// transform:translateX(-50%);
	  }
	  .lg1 {
		display: flex;
		
	  }
	  .wlogo {
		height: 50px;
		margin-right: 14px;
		display: block;
	  }
	  .date {
		position: absolute;
		right: 0;
  
		h3 {
		  margin-bottom: 3px;
		  font-size: 20px;
		}
		font-weight: 300;
		// margin-left:auto;
	  }
	}
  
	.wintickets {
	  display: flex;
	  justify-content: space-between;
	  flex-direction: column;
	  .luckybx{
		&.green {
			.lckybxinnr  {
			  background: #9dea09;
			}
		  }
	  }
	  .lckybxinnr {
		background: #000;
		color: #fff;
		height: 40px;
		.lckybxnum {
		  width: 24px;
		  font-size: 12px;
		  div {
			height: 40px;
		  }
		}
	  }
  
	  .rankheader {
		display: flex;
		justify-content: space-between;
		.wincol {
		  width: 100%;
		}
		.header {
		  margin-bottom: 0;
		}
	  }
	  .colheader {
		display: flex;
		justify-content: space-between;
		.wincol {
		  width: 100%;
		}
	  }
  
	  .wincol {
		margin: 0 20px;
		.col-md-4 {
		  // opacity:0;
		  transition: all 1s linear;
		}
		.winningname {
		  margin-top: 5px;
		  text-align: left;
		  width: 100%;
		  padding: 0 15px;
		  font-weight: 300;
		  display: flex;
		  align-items: center;
		  justify-content: space-between;
		  .coloredval {
			font-size: 16px;
			margin-bottom: 0px;
			height: 25px;
			display: flex;
			align-items: center;
			justify-content: center;
		  }
		}
		&.green {
			background: #9dea09;
		  }
		.winningnamebxouter {
		  width: 30%;
		}
		.coloredval {
		  font-size: 24px;
		  background: linear-gradient(to right, #976717, #e5d575, #936517);
		  background-position: bottom;
		  -webkit-background-clip: text;
		  color: transparent;
		  position: relative;
		  margin-bottom: -14px;
		  letter-spacing: 2px;
		  width: min-content;
		  .coloredbg {
			color: #2b2e37;
			position: absolute;
			top: 50%;
			z-index: -1;
			text-shadow: 2px 0 0 #2b2e37, -2px 0 0 #2b2e37, 0 2px 0 #2b2e37,
			  0 -2px 0 #2b2e37, 1px 1px 0 #2b2e37, -1px -1px 0 #2b2e37,
			  1px -1px 0 #2b2e37, -1px 1px 0 #2b2e37, 1px 1px 5px #2b2e37;
			left: 50%;
			transform: translate(-50%, -50%);
		  }
		}
	  }
	  .header {
		// flex-direction:column;
		flex-flow: wrap;
	  }
	  .headerinr {
		background: #000;
		color: #fff;
		text-align: center;
		padding: 10px 8px;
		margin-bottom: 14px;
		width: 100%;
  
		.rank {
		  width: 24px;
		  height: 24px;
		  border-radius: 50%;
		  color: #fff;
		  position: absolute;
		  left: 0;
		  top: 20px;
		  transform: translate(-50%, -50%);
		  display: flex;
		  align-items: center;
		  justify-content: center;
		  font-size: 12px;
		}
		&.green {
			background: #9dea09;
		  }
	  }
	  .spinouter {
		display: flex;
		margin: 0 10px;
		justify-content: center;
		
	  }
	  .spin {
		background: #000;
		color: #fff;
		padding: 8px;
		margin: 5px 2px;
		width: 28px;
		height: 42px;
		display: flex;
		justify-content: center;
		align-items: center;
		@media screen and (max-width: 1400px) {
		  font-size: 12px;
		  width: 24px;
		}
		@media screen and (max-width: 1000px) {
		  font-size: 12px;
		  width: 18px;
		  height: 38px;
		}
		@media screen and (max-width: 800px) {
		  font-size: 15px;
		  width: 28px;
		  height: 44px;
		}
	  }
	  @media screen and (max-width: 800px) {
		.rankheader,
		.colheader {
		  flex-direction: column;
		  text-align: center;
		}
		.rankheader {
		  .wincol {
			width: auto;
		  }
		}
	  }
	  @media screen and (max-width: 500px) {
		.wincol {
		  margin: 0;
		}
	  }
	}
  
	.luckyholderouter {
	  margin-bottom: 20px;
	  h3 {
		font-size: 18px;
		text-align: center;
		text-transform: uppercase;
		font-weight: 600;
		margin-bottom: 14px;
		margin-top: 20px;
	  }
	}
	.luckyholder {
	  display: flex;
	  justify-content: space-between;
	  margin: 0 20px;
	  position: Relative;
	  .luckyholderbx {
		width: 100%;
		margin: 0 10px;
		border: 3px solid;
		border-image-slice: 1;
		border-width: 4px;
		border-image-source: linear-gradient(
		  45deg,
		  #ac8833,
		  #e6d574,
		  #ac8833,
		  #e6d574,
		  #ac8833,
		  #e6d574
		);
		background: #000;
		display: flex;
		justify-content: space-between;
		color: #fff;
		min-width: 200px;
		padding: 6px 8px;
		letter-spacing: 3px;
		.coloredval {
		  // font-size: 24px;
		  background: linear-gradient(to right, #976717, #e5d575, #936517);
		  background-position: bottom;
		  -webkit-background-clip: text;
		  color: transparent;
		  position: relative;
		  margin-bottom: -14px;
		  letter-spacing: 2px;
		  text-shadow: 1px 1px 1px #e4d272, 3px 3px 5px #e4d272;
		}
		@media screen and (max-width: 992px) {
		  min-width: unset;
		}
		&.green {
			background: #9dea09;
			color:#000;
			.coloredval{
				background:transparent;
				color:#000;
				text-shadow:none
			}
		  }
	  }
	  &:after {
		position: absolute;
		content: "";
		top: 50%;
		left: 50%;
		height: 3px;
		background: linear-gradient(
		  45deg,
		  #ac8833,
		  #e6d574,
		  #ac8833,
		  #e6d574,
		  #ac8833,
		  #e6d574,
		  #ac8833,
		  #e6d574,
		  #ac8833,
		  #e6d574,
		  #ac8833,
		  #e6d574
		);
		width: 90%;
		transform: translate(-50%, -50%);
		z-index: -1;
	  }
	  @media screen and (max-width: 800px) {
		flex-direction: column;
		.luckyholderbx {
		  margin: 6px 0;
		}
		&:after {
		  width: 3px;
		  height: 90%;
		}
	  }
	}
	.drawcar {
	  width: 80%;
	  display: block;
	  margin: auto;
	  transform: translateY(100px);
	}
	.ticketholder {
	  margin: 20px auto 40px;
	  max-width: 900px;
	  .ticketheader {
		display: flex;
		justify-content: space-between;
		align-items: center;
		h4 {
		  margin: 0;
		  font-size: 20px;
		  font-weight: 600;
		}
	  }
	  .wallet {
		display: flex;
		justify-content: flex-end;
		background: transparent;
		width: fit-content;
		margin-left: auto;
		padding: 0 6px;
		.wallet-inner {
		  margin-top: 0px;
		  display: flex;
		  text-align: right;
		  align-items: center;
		  h5 {
			font-weight: 300;
			margin-bottom: 0;
			font-size: 16px;
		  }
		  img {
			height: 30px;
			margin-left: 10px;
		  }
		  .btn-black {
			min-width: unset;
			padding: 8px 15px;
			color: #fff;
		  }
		  .btn-transparent {
			text-align: right;
			color: #000;
			padding: 0;
			margin: 4px 0;
		  }
		}
	  }
	  .ticketheaderticket {
		display: flex;
		justify-content: center;
		margin: 20px 0;
	  }
	}
  }
  
  .ReactModal__Overlay {
	background-color: rgba(0, 0, 0, 0.95) !important;
	z-index: 10;
  }
  .ReactModal__Content {
	border: 6px solid #fff !important;
	overflow: visible !important;
  }
  .lossmodal {
	text-align: center;
	.btn-main {
	  width: fit-content;
	}
	.infoouter {
	  font-size: 16px;
	}
  }
  .winmodal {
	.infoouter {
	  font-size: 16px;
	}
	text-align: center;
	.btn-main {
	  width: fit-content;
	}
	.modallambo {
	  width: 80%;
	  display: block;
	  margin: auto;
	  transform: translateY(80px);
	}
  }
  .moneybg {
	position: absolute;
	max-width: 700px;
	width: 40vw;
	height: auto;
	top: 50%;
	left: 50%;
	z-index: -1;
	transform: translate(-50%, -50%);
  }
  
  // cookie
  .cookie {
	position: fixed;
	bottom: 0;
	width: 100%;
	left: 0;
	right: 0;
	z-index: 100;
	background-color: rgb(255, 51, 118);
	border-top: 1.5px solid #fff;
	padding: 20px 80px;
	display: flex;
	align-items: center;
	transistion: all 0.5s ease;
	button {
	  border: none;
	  outline: none;
	  padding: 6px 50px;
	  margin-left: 30px;
	}
  }
  
  @media (min-width: 1260px) and (max-width: 1400px) {
	.navcontainer {
	  width: 90vw;
	  margin: auto;
	  .volbtn {
		right: -40px;
	  }
	}
	.luckybx {
	  .lckybxinnr {
		font-size: 14px !important;
		margin: 0 3px !important;
		//padding: 28px 16px !important;
	  }
	}
  }
  
  @media (min-width: 1024px) and (max-width: 1260px) {
	.navcontainer {
	  width: 90vw;
	  margin: auto;
	  .volbtn {
		right: -20px;
	  }
	}
	.nav-left {
	  flex-direction: column;
	}
	.nav-right .valouter {
	  flex-direction: column;
	}
	.arrowanimated {
	  top: 75px;
	  right: 80px;
	}
	.lamb-draw {
	  .header h1 {
		position: relative;
		transform: translateX(0);
		left: 0;
	  }
	  .drawcar {
		width: 100%;
		margin: 30px auto;
	  }
	}
	.luckybx {
	  .lckybxinnr {
		font-size: 14px !important;
		margin: 0 3px !important;
		//padding: 18px 12px !important;
	  }
	}
  }
  
  @media (min-width: 862px) and (max-width: 1024px) {
	.navcontainer {
	  width: 90vw;
	  margin: auto;
	  .volbtn {
		right: -20px;
	  }
	}
	.nav-left {
	  flex-direction: column;
	}
	.nav-right .valouter {
	  flex-direction: column;
	}
	.arrowanimated {
	  top: 82px;
	  right: 80px;
	}
	.lamb-draw {
	  .header {
		flex-direction: column;
		text-align: center;
		h1 {
		  position: relative;
		  transform: translateX(0);
		  left: 0;
		  margin: 20px 0 10px;
		}
	  }
	  .drawcar {
		width: 100%;
		margin: 30px auto;
	  }
	}
	.luckybx {
	  .lckybxinnr {
		font-size: 14px !important;
		margin: 0 3px !important;
		// padding: 16px 12px !important;
	  }
	}
	.cookie {
	  flex-direction: column;
	  align-items: center;
	  button {
		margin-left: 0;
		margin-top: 16px;
		max-width: 200px;
		padding: 8px 36px;
	  }
	}
  }
  
  @media (min-width: 576px) and (max-width: 862px) {
	.arrowanimated {
	  top: 190px;
	  right: 0.5%;
	  img {
		transform: rotate(-20deg);
	  }
	}
	.logo {
	  position: relative;
	  order: 1;
	  transform: translateX(-50vw);
	  left: 50vw;
	  margin-bottom: 20px;
	}
	.nav-right {
	  order: 2;
	  width: 100%;
	  max-width: 600px;
	  margin-bottom: 10px;
	  .valouter {
		flex-direction: row;
	  }
	}
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
	  background: url(../images/lambo.png) center center no-repeat,
		url(../images/bggradient.png) center center no-repeat;
	  background-size: 80%, 100% 100%;
	  .container {
		.col-md-6 {
		  width: 100%;
		  max-width: unset;
		  flex: unset;
		}
	  }
  
	  .row {
		padding-top: 220px;
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
		flex-direction: row;
		order: 3;
		justify-content: center;
  
		.ticket-bx {
		  margin: 20px 0;
		  font-size: 12px;
		}
	  }
	}
  
	.chad-bg {
	  padding-bottom: 100px;
	  background-size: auto 220px, auto 220px;
	  .container {
		.col-md-4 {
		  width: 100%;
		  max-width: unset;
		  flex: unset;
		}
	  }
	  .chadcols {
		background-size: 200px;
		padding-bottom: 80px;
		margin-bottom: 50px;
	  }
	  .chadheading {
		font-size: 29px;
		line-height: 30px;
	  }
	  .chadcols h1 {
		font-size: 20px !important;
		margin-bottom: 14px;
	  }
	}
	.footer-nav {
	  .nav-main {
		flex-direction: column-reverse;
		.logo {
		  margin-top: 20px;
		  margin-bottom: 0;
		}
	  }
	}
	.lamb-draw {
	  .header {
		flex-direction: column;
		text-align: center;
		h1 {
		  position: relative;
		  transform: translateX(0);
		  left: 0;
		  margin: 20px 0 10px;
		}
	  }
	  .drawcar {
		width: 100%;
		margin: 30px auto;
	  }
	  .luckybx {
		.lckybxnum {
		  width: 50px !important;
		}
		.lckybxinnr {
		  font-size: 14px !important;
		  margin: 0 3px !important;
		  // padding: 8px 4px !important;
		}
	  }
	}
	.cookie {
	  flex-direction: column;
	  align-items: center;
	  button {
		margin-left: 0;
		margin-top: 16px;
		max-width: 200px;
		padding: 8px 36px;
	  }
	}
  }
  
  @media (min-width: 448px) and (max-width: 576px) {
	.arrowanimated {
	  top: 240px;
	  right: 0.5%;
	  img {
		transform: rotate(-20deg);
	  }
	}
	.logo {
	  position: relative;
	  order: 1;
	  transform: translateX(-50vw);
	  left: 50vw;
	  margin-bottom: 20px;
	}
	.nav-right {
	  order: 2;
	  width: 100%;
	  max-width: 600px;
	  margin-bottom: 10px;
	  .valouter {
		flex-direction: row;
		font-size: 10px;
	  }
	}
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
	  background: url(../images/lambo.png) center center no-repeat,
		url(../images/bggradient.png) center center no-repeat;
	  background-size: 80%, 100% 100%;
  
	  .row {
		padding-top: 280px;
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
		order: 3;
  
		.ticket-bx {
		  margin: 20px 0;
		  font-size: 12px;
		}
	  }
	}
	.chad-bg {
	  padding-bottom: 100px;
	  background-size: auto 220px, auto 220px;
	  .chadcols {
		background-size: 200px;
		padding-bottom: 80px;
		margin-bottom: 50px;
	  }
	  .chadheading {
		font-size: 29px;
		line-height: 30px;
	  }
	  .chadcols h1 {
		font-size: 20px !important;
		margin-bottom: 14px;
	  }
	}
	.footer-nav {
	  .nav-main {
		flex-direction: column-reverse;
		.logo {
		  margin-top: 20px;
		  margin-bottom: 0;
		}
	  }
	}
	.lamb-draw {
	  .header {
		flex-direction: column;
		text-align: center;
		h1 {
		  position: relative;
		  transform: translateX(0);
		  left: 0;
		  margin: 20px 0 10px;
		}
	  }
	  .drawcar {
		  width: 100%;
		margin: 30px auto;
	  }
	  .luckybx {
		.lckybxnum {
		  width: 38px !important;
		}
		.lckybxinnr {
		  font-size: 14px !important;
		  margin: 0 3px !important;
		  // padding: 8px 4px !important;
		}
	  }
	}
	.cookie {
	  flex-direction: column;
	  align-items: center;
	  button {
		margin-left: 0;
		margin-top: 16px;
		max-width: 200px;
		padding: 8px 36px;
	  }
	}
  }
  
  @media (max-width: 447px) {
	.arrowanimated {
	  top: 290px;
	  right: 0.5%;
	  img {
		transform: rotate(-20deg) translateY(10px);
		width: 16px;
	  }
	}
	.logo {
	  position: relative;
	  order: 1;
	  transform: translateX(-50vw);
	  left: 50vw;
	  margin-bottom: 20px;
	}
	.nav-right {
	  order: 2;
	  width: 100%;
	  max-width: 600px;
	  margin-bottom: 10px;
	  flex-direction: column;
	  align-items: center;
	  .valouter {
		flex-direction: row;
	  }
	}
	.volbtn {
	  right: -6px;
	}
	h1 {
	  font-size: 36px !important;
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
	  background: url(../images/lambo.png) center center no-repeat,
		url(../images/bggradient.png) center center no-repeat;
	  background-size: 80%, 100% 100%;
  
	  .row {
		padding-top: 350px;
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
		order: 3;
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
	.chad-bg {
	  padding-bottom: 100px;
	  background-size: auto 220px, auto 220px;
	  .chadcols {
		background-size: 60%;
		padding-bottom: 40px;
		margin-bottom: 50px;
	  }
	  .chadheading {
		font-size: 29px;
		line-height: 30px;
	  }
	  .chadcols h1 {
		font-size: 20px !important;
		margin-bottom: 14px;
	  }
	}
	.footer-nav {
	  .nav-main {
		flex-direction: column-reverse;
		.logo {
		  margin-top: 20px;
		  margin-bottom: 0;
		}
	  }
	}
	.lamb-draw {
	  .header {
		flex-direction: column;
		text-align: center;
		h1 {
		  position: relative;
		  transform: translateX(0);
		  left: 0;
		  margin: 20px 0 10px;
		}
	  }
	  .drawcar {
		  width: 100%;
		margin: 30px auto;
	  }
	  .luckybx {
		.lckybxnum {
		  width: 28px !important;
		}
		.lckybxinnr {
		  font-size: 14px !important;
		  margin: 0 3px !important;
		  // padding: 8px 4px !important;
		}
	  }
	  .wallet-inner {
		font-size: 11px;
	  }
	}
	.ReactModal__Content {
	  width: min-content !important;
	}
	.cookie {
	  flex-direction: column;
	  align-items: center;
	  button {
		margin-left: 0;
		margin-top: 16px;
		max-width: 200px;
		padding: 8px 60px;
	  }
	}
  }
  
  .wallet-wrapper {
	padding: 10px 0;
    background-color: #80808069;
    margin: 20px 10px;
    min-width: 250px;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    border-radius: 4px;
    padding: 10px 20px 10px 10px;
    align-items: center;

	&:hover {
		transform: scale(1.06);
		transition: transform 500ms ease-in-out 25ms;
	}

	.wallet-logo {
		padding: 10px;
		img {
			height: 40px;
			display: flex;
		}
	}
	.wallet-name {
		font-size: 20px;
	}
	.wallet-modal {
		h4 {
			font-size: 20px;
			font-weight: bold;
		}
	}
  }
  .afterlog {
	  .account-info {
		  cursor: pointer;
		  padding: 0 10px;
		  border-radius: 3px;
		  background: #000;
		  color: #fff;
		  .chance {
			  color: rgb(26, 163, 81);
		  }
	  }
  } 
  .account-logout {
	display: flex;
    flex-direction: column;
	div {
		margin-top: 15px;
	}
	a {
		border: 2px solid #fff;
		border-radius: 10px;
		height: 35px;
	}
  }
  .info-section {
	display: flex;
    flex-direction: column;
	h3 {
		margin-top: 15px;
	}
	a {
		border: 2px solid #fff;
		border-radius: 10px;
		height: 35px;
	} 
  }
`;
export default GlobalStyle;
