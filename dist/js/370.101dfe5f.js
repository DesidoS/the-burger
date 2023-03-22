"use strict";(self["webpackChunkthe_burger"]=self["webpackChunkthe_burger"]||[]).push([[370],{8533:function(t,e,r){r.d(e,{Z:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"star-rating"},[t._l(t.starLimit,(function(t){return e("span",{key:t,staticClass:"star star--outlined"})})),e("div",{staticClass:"star-rating__colored",style:t.ratingWidthStyle},t._l(t.starLimit,(function(t){return e("span",{key:t,staticClass:"star star--colored"})})),0)],2)},i=[],a={name:"star-rating",props:{rating:{type:Number,default:0},starLimit:{type:Number,default:5}},computed:{ratingWidth(){return 100*this.rating/this.starLimit},ratingWidthStyle(){return`width: ${this.ratingWidth}%`}}},n=a,o=r(1001),l=(0,o.Z)(n,s,i,!1,null,"1a8df13c",null),u=l.exports},2650:function(t,e,r){r.d(e,{Z:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-spacer"},[t._t("default")],2)},i=[],a={name:"SectionSpacer"},n=a,o=r(1001),l=(0,o.Z)(n,s,i,!1,null,"a635e22c",null),u=l.exports},7536:function(t,e,r){r.d(e,{Z:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("form",t._g({staticClass:"form"},t.$listeners),[t._t("default")],2)},i=[],a=(r(7658),{name:"AppForm",provide(){return{form:this}},data(){return{inputs:[]}},methods:{registerInput(t){this.inputs.push(t)},unRegisterInput(t){this.inputs.filter((e=>e!==t))},validate(){return this.inputs.reduce(((t,e)=>{const r=e.validate();return t&&r}),!0)},reset(){this.inputs.forEach((t=>t.reset()))}}}),n=a,o=r(1001),l=(0,o.Z)(n,s,i,!1,null,"30956ff0",null),u=l.exports},370:function(t,e,r){r.r(e),r.d(e,{default:function(){return it}});var s=function(){var t=this,e=t._self._c;return e("main",{staticClass:"burger-page"},[e("SectionWithHeaderSpacer",[e("Container",[t.burger?e("div",{staticClass:"burger-page__content"},[e("BurgerMainInfo",{attrs:{burger:t.burger}}),e("div",{staticClass:"burger-page__additional-info"},[e("AppСomment",{attrs:{reviews:t.reviewsList}}),e("Reviews",{attrs:{reviews:t.reviewsList}})],1)],1):t._e()])],1)],1)},i=[],a=r(5174),n=r(2650),o=function(){var t=this,e=t._self._c;return e("article",{staticClass:"burgers-main-info"},[e("Button",{staticClass:"burgers-main-info__back",attrs:{type:"button"},on:{click:t.onBack}},[t._v("⬅️")]),e("div",{staticClass:"burgers-main-info__heading"},[e("h1",{staticClass:"burgers-main-info__title"},[t._v(t._s(t.burger.title))])]),e("img",{staticClass:"burgers-main-info__photo",attrs:{src:t.burger.imgUrl,alt:""}}),e("p",{staticClass:"burgers-main-info__description"},[t._v(t._s(t.burger.descr))]),e("div",{staticClass:"burgers-main-info__btn"})],1)},l=[],u=(r(7658),r(6398)),c={name:"BurgerMainInfo",components:{Button:u.Z},props:{burger:{type:Object,required:!0}},data(){return{isLoading:!1}},methods:{onBack(){this.$router.push({name:"homepage"})}}},m=c,v=r(1001),d=(0,v.Z)(m,o,l,!1,null,"734ad118",null),g=d.exports,h=function(){var t=this,e=t._self._c;return e("section",{staticClass:"reviews"},[e("div",{staticClass:"reviews__heading"},[e("h2",{staticClass:"reviews__title"},[t._v("Overall rating")]),e("div",{staticClass:"reviews__rating"},[e("span",[t._v(t._s(t.amountOfReviews)+" review(s)")]),e("Rating",{attrs:{rating:t.totalRating}})],1)]),t._l(t.currentReviews,(function(t){return e("ReviewsItem",{key:t.id,attrs:{review:t}})})),e("button",{staticClass:"reviews__show-more",on:{click:t.toggleReviews}},[t._v(" "+t._s(t.buttonText)+" ")])],2)},p=[],_=function(){var t=this,e=t._self._c;return e("section",{staticClass:"reviews-item"},[e("ReviewsHeading",{attrs:{rating:t.review.rating,author:t.review.author}}),e("p",{staticClass:"reviews-item__content"},[t._v(t._s(t.review.content))])],1)},f=[],w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"reviews-heading"},[e("Avatar",{staticClass:"reviews-heading__avatar"}),e("div",{staticClass:"reviews-heading__content"},[e("span",{staticClass:"reviews-heading__author"},[t._v(t._s(t.author))]),e("Rating",{attrs:{rating:Number(t.rating.length)}})],1)],1)},C=[],b=r(8533),y=function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"17",cy:"17",r:"17",fill:"white"}}),e("circle",{attrs:{cx:"17",cy:"17",r:"16",fill:"white",stroke:"#FF662D","stroke-width":"2"}}),e("path",{attrs:{fill:"#FF662D","fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.8053 28.8444L4.83307 28.8028C7.04004 25.4919 10.7338 23.5156 14.712 23.5156H19.2878C23.2661 23.5156 26.9599 25.4919 29.1669 28.8028L29.1946 28.8445C32.1687 25.783 34 21.6054 34 17C34 7.61115 26.3889 0 17 0C7.61115 0 0 7.61115 0 17C0 21.6053 1.83124 25.783 4.8053 28.8444ZM16.9999 7C12.9288 7 9.61713 10.3117 9.61713 14.3828C9.61713 18.4539 12.9288 21.7656 16.9999 21.7656C21.071 21.7656 24.3828 18.4539 24.3828 14.3828C24.3828 10.3117 21.071 7 16.9999 7Z"}})])},Z=[],R={name:"ReviewsAvatar"},x=R,L=(0,v.Z)(x,y,Z,!1,null,null,null),S=L.exports,k={name:"ReviewsHeading",components:{Rating:b.Z,Avatar:S},props:{author:{type:String,required:!0},rating:{type:String,default:"0"}}},A=k,B=(0,v.Z)(A,w,C,!1,null,"5e50e860",null),I=B.exports,$={name:"ReviewsItem",components:{ReviewsHeading:I},props:{review:{type:Object,required:!0}}},D=$,q=(0,v.Z)(D,_,f,!1,null,"15912ec5",null),F=q.exports,H={name:"AppReviews",components:{ReviewsItem:F,Rating:b.Z},props:{reviews:{type:Array,required:!0}},data(){return{reviewsLimit:2}},computed:{totalRating(){const t=this.reviews.reduce(((t,e)=>t+e.rating.length),0);return t/this.reviews.length},amountOfReviews(){return this.reviews.length},currentReviews(){return this.reviews.slice(0,this.reviewsLimit)},buttonText(){return this.reviewsLimit===this.reviews.length?"Hide":"More..."}},methods:{toggleReviews(){this.reviewsLimit!==this.reviews.length?this.reviewsLimit=this.reviews.length:this.reviewsLimit=2}}},M=H,W=(0,v.Z)(M,h,p,!1,null,"4eaeedd6",null),N=W.exports,O=function(){var t=this,e=t._self._c;return e("section",{staticClass:"comment"},[e("div",{staticClass:"comment__heading"},[e("h2",{staticClass:"comment__title"},[t._v(t._s(t.name)+", please add your comment")])]),e("Form",{ref:"form",staticClass:"comment__form",on:{submit:t.handleSubmit}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.comment,expression:"formData.comment"}],staticClass:"comment__input",attrs:{placeholder:"Comment",name:"comment",required:"",pattern:"[A-Za-z]+"},domProps:{value:t.formData.comment},on:{input:function(e){e.target.composing||t.$set(t.formData,"comment",e.target.value)}}}),e("CustomSelect",{staticClass:"comment__select",attrs:{items:t.ratings,"aria-placeholder":"asdasd",required:""},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}}),e("Button",{staticClass:"comment__btn",attrs:{type:"submit",loading:t.loading}},[t._v(" Send ")])],1)],1)},P=[],j=r(7536),E=function(){var t=this,e=t._self._c;return e("select",t._g({staticClass:"custom-select"},t.listeners),t._l(t.formatedItems,(function(r){return e("option",{key:r.value,domProps:{value:r.value,selected:r.selected}},[t._v(" "+t._s(r.label)+" ")])})),0)},T=[],z={name:"CustomSelect",props:{items:{type:Array,required:!0}},computed:{listeners(){return{...this.$listeners,input:t=>this.$emit("input",t.target.value)}},formatedItems(){return this.items.map((t=>"object"===typeof t?t:{value:t,label:t}))}}},U=z,G=(0,v.Z)(U,E,T,!1,null,"cb4a603a",null),J=G.exports,K=r(408),Q={name:"App-Сomment",components:{CustomSelect:J,Form:j.Z,Button:u.Z},data(){return{loading:!1,name:localStorage.getItem("Name"),rating:"",formData:{comment:""}}},computed:{ratings(){return[{value:"",label:"Please choose your rate",selected:!0},"★","★★","★★★","★★★★","★★★★★"]}},methods:{...(0,K.nv)("comment",["comment"]),async handleSubmit(){const{form:t}=this.$refs,e={id:this.$route.params.id,data:{content:this.formData.comment,author:this.name,rating:this.rating}};try{this.loading=!0,await this.comment(e),t.reset()}catch(r){this.$notify({type:"error",title:"Error",text:r.message})}finally{this.loading=!1}}}},V=Q,X=(0,v.Z)(V,O,P,!1,null,"5780a1b9",null),Y=X.exports,tt=r(1703),et={name:"BurgerPage",components:{Container:a.Z,BurgerMainInfo:g,SectionWithHeaderSpacer:n.Z,Reviews:N,"AppСomment":Y},data(){return{burger:null,reviewsList:[]}},async created(){try{const{id:t}=this.$route.params,{data:e}=await(0,tt.C)(t);this.burger=e,this.reviewsList=e.comment}catch(t){console.error(t)}}},rt=et,st=(0,v.Z)(rt,s,i,!1,null,"890a2908",null),it=st.exports},1703:function(t,e,r){r.d(e,{C:function(){return a},v:function(){return i}});var s=r(5999);const i=()=>s.Z.get("/api/"),a=t=>s.Z.get(`/api/${t}`)}}]);
//# sourceMappingURL=370.101dfe5f.js.map