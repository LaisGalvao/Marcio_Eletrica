webpackJsonp([1],{"/KV2":function(a,t){},"1aXn":function(a,t){},"3H2d":function(a,t){},"7mkY":function(a,t){},"9M+g":function(a,t){},A5KQ:function(a,t){},CrpB:function(a,t){},DD4n:function(a,t){},NHnr:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("7+uW"),i=e("Tqaz");e("qb6w"),e("9M+g");s.default.use(i.a),s.default.use(i.b);var o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("footer",{staticClass:"footer"},[t("div",{staticClass:"content has-text-centered"},[t("p",[this._v("\n      O site "),t("strong",[this._v("Galvão Elétrica")]),this._v(" foi desenvolvido por\n      "),t("a",{staticStyle:{color:"black"},attrs:{target:"_blank",href:"https://github.com/LaisGalvao"}},[this._v("Laís Galvão")]),this._v(". Siga a página no\n      "),t("a",{staticStyle:{color:"black"},attrs:{target:"_blank",href:"https://www.facebook.com/El%C3%A9trica-Predial-Residencial-Galv%C3%A3o-241037206588537/"}},[this._v("Facebook")]),this._v(".\n    ")])])])}]};var n={methods:{send:function(){window.open("https://api.whatsapp.com/send?phone=5511973183283&text=Ol%C3%A1%20meu%20nome%20%C3%A9")}}},r={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-navbar",{staticClass:"is-dark",scopedSlots:a._u([{key:"brand",fn:function(){return[e("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[e("img",{attrs:{src:"https://img.icons8.com/officel/16/000000/lightning-bolt.png",alt:"Galvão Elétrica Logo"}})])]},proxy:!0},{key:"start",fn:function(){return[e("b-navbar-item",{on:{click:function(t){return a.$router.push({path:"/"})}}},[a._v(" Home ")]),a._v(" "),e("b-navbar-dropdown",{attrs:{label:"Informações"}},[e("b-navbar-item",{on:{click:function(t){return a.send()}}},[a._v("\n        Fale comigo\n      ")])],1)]},proxy:!0}])})},staticRenderFns:[]};var c={name:"App",components:{Footer:e("VU/8")({},o,!1,function(a){e("ywhT")},null,null).exports,Header:e("VU/8")(n,r,!1,function(a){e("7mkY")},"data-v-aa4f7796",null).exports}},l={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{attrs:{id:"app"}},[t("Header"),this._v(" "),t("router-view"),this._v(" "),t("Footer")],1)},staticRenderFns:[]};var d=e("VU/8")(c,l,!1,function(a){e("CrpB")},null,null).exports,m={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"fadeIn"},[t("b-card",{staticClass:"image-card ",staticStyle:{"max-width":"20rem"},attrs:{title:this.title,"img-src":this.image,"img-alt":this.alt,"img-top":"",tag:"article"}},[t("b-card-text",[this._v("\n   "+this._s(this.desc)+"\n  ")])],1)],1)},staticRenderFns:[]};var u={name:"HelloWorld",data:function(){return{image_card_local:[{src:"https://drive.google.com/uc?export=view&id=1tJsJR-PJbp-2-46cnji_0cD7X7in76-f"},{src:"https://drive.google.com/uc?export=view&id=1XBOw1kS7Vy-n4kLclZBhV8B9w3X_sIva"},{src:"https://drive.google.com/uc?export=view&id=1TaVU1CNVAqP8jqN_a_szkd49GaCuAh5Q"},{src:"https://drive.google.com/uc?export=view&id=1wr7Kmkx55bhSQ1aN2oK5OzZ1IHv1lm8q"}],wind:window.innerWidth}},components:{Cards:e("VU/8")({props:["title","imageTitle","image","alt","card_class","desc"]},m,!1,function(a){e("S/Qs")},"data-v-25ab6168",null).exports},computed:{getCardLocais:function(){return this.$store.getters.cardsLocais}},methods:{scrollIntoPage:function(a){a=document.getElementById("paragraph-fadeIn").getBoundingClientRect().y-80,window.scrollTo(0,a)}}},v={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"flex-wrapper is-fullheight-100vh"},[e("div",{attrs:{id:"conteudo"}},[e("div",{staticClass:"fadeIn"},[e("Header"),a._v(" "),e("div",[e("div",{staticClass:"desce-jumbo",attrs:{id:"banner-fadeIn"}},[e("div",{staticClass:"jumbotron jumbotron-fluid has-text-dark fade-in"},[a._m(0),a._v(" "),e("p",{staticClass:"lead"},[a._v("Eletricista Residencial, Predial e Industrial")]),a._v(" "),e("p",{staticClass:"display-4"},[e("b-button",{attrs:{type:"is-warning",to:"/"},on:{click:a.scrollIntoPage}},[a._v("Mais informações")])],1)])]),a._v(" "),e("div",{staticClass:"container-fluid",attrs:{id:"paragraph-fadeIn"}},[e("h2",{staticClass:"is-size-1"},[a._v("\n            Serviço de qualidade há mais de 25 anos no mercado.\n          ")]),a._v(" "),e("b-icon",{staticClass:"h2",attrs:{icon:"tools"}}),a._v(" "),e("b-icon",{staticClass:"h2",attrs:{icon:"lightning"}}),a._v(" "),e("h1",{staticClass:"is-size-2"},[a._v("Realizamos serviços em:")]),a._v(" "),e("br"),e("br"),a._v(" "),e("div",{class:a.wind<=1024?"ml-3":"ml-6"},[e("div",{staticClass:"columns is-vcentered is-desktop is-full-mobile"},a._l(a.getCardLocais,function(a){return e("div",{key:a.title,staticClass:"column"},[e("Cards",{attrs:{image:a.imageSrc,title:a.title,desc:a.desc,imageTitle:a.imageTitle}})],1)}),0)]),a._v(" "),e("br"),a._v(" "),e("hr"),a._v(" "),e("h3",{staticClass:"is-size-3"},[a._v("Também apresentamos soluções em:")]),a._v(" "),e("div",[e("b-card",{staticClass:"cards-container cards-soluction card-img-soluction",attrs:{title:"Serviços de automação","img-src":a.image_card_local[0].src,"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[a._v("\n                Reduza custos, garanta a segurança, e traga melhor qualidade\n                na sua produção através da automação\n              ")]),a._v(" "),e("b-button",{attrs:{type:"is-warning"},on:{click:function(t){return a.$router.push("/servicos/automacao")}}},[a._v("Saiba mais")])],1),a._v(" "),e("b-card",{staticClass:"cards-container cards-soluction card-img-soluction",attrs:{title:"Execução de projetos elétricos","img-src":a.image_card_local[1].src,"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[a._v("\n                Um projeto elétrico bem articulado influencia positivamente em\n                todas as etapas de uma instalação elétrica\n              ")]),a._v(" "),e("b-button",{attrs:{type:"is-warning"},on:{click:function(t){return a.$router.push("/servicos/projetos-eletricos")}}},[a._v("Saiba mais")])],1),a._v(" "),e("b-card",{staticClass:"cards-container cards-soluction card-img-soluction",attrs:{title:"Projetos para padrão de entrada de energia","img-src":a.image_card_local[2].src,"img-alt":"Image","img-top":"",tag:"article"}},[e("b-card-text",[a._v("\n                Instalação do padrão de entrada, de acordo com as\n                concessionárias responsáveis pela distribuição de energia\n                elétrica da sua região\n              ")]),a._v(" "),e("b-button",{attrs:{type:"is-warning"},on:{click:function(t){return a.$router.push("/servicos/padrao-entrada")}}},[a._v("Saiba mais")])],1)],1),a._v(" "),e("div",{staticClass:"container"},[e("br"),e("br"),a._v(" "),e("h1",{staticClass:"is-size-4"},[a._v("\n              Precisando de ajuda em um momento de aperto? Veja sobre nosso\n              serviço de emergência:\n            ")]),a._v(" "),e("div",{staticClass:"row justify-content-md-center",staticStyle:{"margin-top":"5%","margin-bottom":"5%"}},[e("div",{staticClass:"card mb-3",staticStyle:{"max-width":"540px"}},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-md-4"},[e("img",{staticClass:"card-emergency card-img-emergency",attrs:{src:a.image_card_local[3].src,alt:"Atendimento de energência 24h"}})]),a._v(" "),e("div",{staticClass:"column is-full"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[a._v("\n                        Atendimento de energência 24h\n                      ")]),a._v(" "),e("p",{staticClass:"card-text"},[a._v("\n                        Atendimento de emergência 24 horas, perzando sua\n                        segurança e a qualidade dos nossos serviços\n                      ")]),a._v(" "),e("p",{staticClass:"card-text"},[e("b-button",{attrs:{type:"is-warning"},on:{click:function(t){return a.$router.push("/servicos/emergencia")}}},[a._v("Saiba mais\n                        ")])],1)])])])])])])],1)])],1)])])},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("h1",{staticClass:"display-3 has-text-dark fade-in"},[t("span",[t("img",{attrs:{src:"https://drive.google.com/uc?export=view&id=11ObbAD5AgCyJmL9oOvMxWI7uvleKo4vx",width:"95"}})]),this._v("\n              Galvão Elétrica\n            ")])}]};var p=e("VU/8")(u,v,!1,function(a){e("3H2d")},null,null).exports,g=e("//Fk"),h=e.n(g),_=e("mtWM"),f=e.n(_).a.create({baseURL:"https://marcio-eletrica-backend.herokuapp.com/api",headers:{Accept:"application/json","Content-Type":"application/json"}}),b={data:function(){return{obj:null,name:"",email:"",message:""}},methods:{sendMail:function(){f.post("/sendMail",{name:this.name,email:this.email,message:this.msg}).then(function(a){200===a.status&&console.log(a.data)},function(a){return h.a.reject(a)}),this.name="",this.email="",this.msg=""},hideModal:function(){this.$root.$emit("bv::hide::modal","modal-1","#btnShow")}}},C={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"text-center",staticStyle:{padding:"5%"}},[e("form",{on:{submit:function(t){return t.preventDefault(),a.sendMail(t)}}},[e("h1",[a._v("Preencha o formulário e entraremos em contato:")]),a._v(" "),e("label",[a._v("Nome")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"name"}],attrs:{type:"text",name:"name",placeholder:"Seu nome:"},domProps:{value:a.name},on:{input:function(t){t.target.composing||(a.name=t.target.value)}}}),a._v(" "),e("label",[a._v("Email")]),a._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.email,expression:"email"}],attrs:{type:"email",name:"email",placeholder:"Seu email:"},domProps:{value:a.email},on:{input:function(t){t.target.composing||(a.email=t.target.value)}}}),a._v(" "),e("label",[a._v("Mensagem")]),a._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:a.message,expression:"message"}],attrs:{name:"message",cols:"30",rows:"5",placeholder:"Deixe sua mensagem:"},domProps:{value:a.message},on:{input:function(t){t.target.composing||(a.message=t.target.value)}}}),a._v(" "),e("input",{attrs:{type:"submit",value:"Enviar"}})])])},staticRenderFns:[]};var x={components:{Contato:e("VU/8")(b,C,!1,function(a){e("1aXn")},null,null).exports},data:function(){return{modalShow:!1}}},w={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"btn-contato is-warning",attrs:{variant:"warning",id:"toggle-btn"},on:{click:function(t){a.modalShow=!a.modalShow}}},[a._v("Preencha o formulário, responderemos sua solicitação o mais rápido\n    possíve!")]),a._v(" "),e("b-modal",{ref:"my-modal",staticClass:"text-center",attrs:{id:"modal-1",size:"lg",centered:"","hide-footer":"",title:"Envie uma mensagem!"},model:{value:a.modalShow,callback:function(t){a.modalShow=t},expression:"modalShow"}},[e("Contato")],1)],1)},staticRenderFns:[]};var j=e("VU/8")(x,w,!1,function(a){e("DD4n")},"data-v-cdcf7790",null).exports,k={render:function(){var a=this.$createElement;return(this._self._c||a)("b-jumbotron",{class:this.img_class,attrs:{"text-variant":this.text_variant,header:this.title,lead:this.lead}})},staticRenderFns:[]},S=e("VU/8")({props:["text_variant","title","lead","img_class"]},k,!1,null,null,null).exports,y={components:{JumbotronBanner:S,ModalContato:j}},E={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",[t("div",{staticClass:"desce-jumbo"},[t("JumbotronBanner",{staticClass:"padrao-entrada",attrs:{title:"Projetos para padrão de entrada de energia",lead:"Porque fazer e qual a imprtância?","text-variant":"dark"}})],1),this._v(" "),t("div",{staticClass:"container"},[this._m(0),this._v(" "),t("div",{staticClass:"container"},[t("ModalContato")],1)])])},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"col-md-12"},[t("p",{staticClass:"paragraph"},[this._v("\n        Um projeto de padrão de entrada de energia tem como objetivo a\n        concessão de energia elétrica da concessionária para sua casa, de modo\n        a garantir a segurança e uma boa eficiência energética.\n      ")]),this._v(" "),t("p",{staticClass:"paragraph"},[this._v("\n        As informações técnicas para a montagem e instalação correta do padrão\n        de entrada da residência, serão disponibilizadas pelas concessionárias\n        responsáveis pela distribuição de energia elétrica da sua região,\n        cidade ou estado.\n      ")]),this._v(" "),t("p",{staticClass:"paragraph"},[this._v("\n        Elaboramos projetos e instalação com até 3 medidores de entrada, e\n        também executamos projetos já elaborados com mais de 3 medidores.\n      ")])])}]};var P=e("VU/8")(y,E,!1,function(a){e("upPa")},null,null).exports,A={components:{JumbotronBanner:S,ModalContato:j}},F={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",[t("div",{staticClass:"desce-jumbo"},[t("JumbotronBanner",{staticClass:"projeto-eletrico",attrs:{title:"Execução de projetos elétricos",lead:"Porque fazer e qual a importância?","text-variant":"dark"}})],1),this._v(" "),t("div",{staticClass:"container"},[t("p",{staticClass:"paragraph"},[this._v("\n        Um projeto elétrico tem como objetivo viabilizar a segurança da\n        instalação, e oferece melhor eficiência energética. Também evita\n        desperdício de materiais, e transtornos decorrentes de uma execução\n        não adequada ou uma instalação fora das normas.\n      ")]),this._v(" "),t("p",{staticClass:"paragraph"},[this._v("\n        Trabalhamos com execução de projetos elétricos já elaborados, entre em\n        contato para saber mais.\n      ")]),this._v(" "),t("div",{staticClass:"cotainer"},[t("ModalContato")],1)])])},staticRenderFns:[]};var R=e("VU/8")(A,F,!1,function(a){e("A5KQ")},null,null).exports,q={components:{JumbotronBanner:S,ModalContato:j}},$={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"desce-jumbo"},[e("JumbotronBanner",{staticClass:"automacao",attrs:{title:"Serviços de automação",lead:"Porque fazer e onde se aplica?","text-variant":"dark"}})],1),a._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"col-md-12"},[e("p",{staticClass:"paragraph"},[a._v("\n        A automação, através de meios tecnológicos, dispensa trabalhos\n        braçais, fazendo com que as atividades ganhem mais conforto, agilidade\n        e eficiência.\n      ")]),a._v(" "),e("p",{staticClass:"paragraph"},[a._v("\n        Soluções de automação elétrica podem ser aplicadas na indústria, em\n        casas, comércios, prédios, e até chácaras. Algumas aplicações comuns\n        em que se encaixam sistemas de automação elétrica são:\n      ")]),a._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-md-center"},[e("b-card",{staticClass:"cards-container cards-soluction card-img-soluction",attrs:{title:"Bombas de recalque","img-src":"https://drive.google.com/uc?export=view&id=12zfOOqC4mLnPOPm8dFV4Vz5NkkxyN1aR","img-alt":"Image","img-top":"",tag:"article"}}),a._v(" "),e("b-card",{staticClass:"cards-container cards-soluction card-img-soluction",attrs:{title:"Cisternas e poços","img-src":"https://drive.google.com/uc?export=view&id=1RFJt-7GxT6eSEMWbeu3biWe7Zr7D4_Jo","img-alt":"Image","img-top":"",tag:"article"}}),a._v(" "),e("b-card",{staticClass:"cards-container cards-soluction card-img-soluction",attrs:{title:"Alarme de incêndio","img-src":"https://drive.google.com/uc?export=view&id=1rzmzS-8qmKMyO1XNUmHmOJhiE26deX2e","img-alt":"Image","img-top":"",tag:"article"}}),a._v(" "),e("b-card",{staticClass:"cards-container cards-soluction card-img-soluction",attrs:{title:"Partida de motores","img-src":"https://drive.google.com/uc?export=view&id=1ffL-UJHfO-The-HQhs243tsKe_PUFuwB","img-alt":"Image","img-top":"",tag:"article"}})],1)]),a._v(" "),e("p",{staticClass:"paragraph text-center"},[a._v("\n        Trabalhamos com soluções de automação, entre em contato para saber\n        mais.\n      ")]),a._v(" "),e("div",{staticClass:"container"},[e("ModalContato")],1)])])])},staticRenderFns:[]};var z=e("VU/8")(q,$,!1,function(a){e("icFM")},"data-v-1f694eb8",null).exports,I={components:{JumbotronBanner:S,ModalContato:j}},M={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",[t("div",{staticClass:"desce-jumbo"},[t("JumbotronBanner",{staticClass:"emergencia",attrs:{title:"Atendimento de emergência",lead:"","text-variant":"dark"}})],1),this._v(" "),t("div",{staticClass:"container"},[t("div",{staticClass:"col-md-12"},[this._m(0),this._v(" "),t("p",{staticClass:"paragraph"},[this._v("\n      Trabalhamos com execução de projetos elétricos já elaborados, entre em\n      contato para saber mais.\n    ")]),this._v(" "),t("div",{staticClass:"container"},[t("ModalContato")],1)])])])},staticRenderFns:[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("p",{staticClass:"paragraph"},[a._v("\n      Atendemos emergências em caso de:\n      "),e("ul",[e("li",[a._v("Anomalias da rede elétrica")]),a._v(" "),e("li",[a._v("Queda total ou parcial de energia")]),a._v(" "),e("li",[a._v("Lâmpada piscando")]),a._v(" "),e("li",[a._v("Tomadas apresentando mau funcionamento")])])])}]};var T=e("VU/8")(I,M,!1,function(a){e("WjOg")},"data-v-f4247060",null).exports,U=e("/ocq");s.default.use(U.a);var V=[{path:"/",name:"HelloWorld",component:p},{path:"/servicos/padrao-entrada",name:"PadraoEntrada",component:P},{path:"/servicos/projetos-eletricos",name:"ProjetosEletricos",component:R},{path:"/servicos/automacao",name:"Automacao",component:z},{path:"/servicos/emergencia",name:"Emergencia",component:T}],B=new U.a({routes:V,mode:"history"}),N=e("NYxO");s.default.use(N.a);var J=new N.a.Store({state:{cardsLocais:[{title:"Residências",imageSrc:"https://drive.google.com/uc?export=view&id=1rl3RgWFu_VYUlNlj9Y2XYG3SCz0uDpt-",imageTitle:"residencia",desc:"Instalações elétricas de baixa tensão,\n        seguindo a norma NBR 5410 da ABNT, garantindo sua segurança"},{title:"Prédios",imageSrc:"https://drive.google.com/uc?export=view&id=19mSrBevky7pAqtFF2bqCgfNhlQ5j3kHC",imageTitle:"predio",desc:"Projetos feitos pensando em agregar segurança a\n        edifícios e prédios, visando o bem estar das pessoas. "},{title:"Comércios",imageSrc:"https://drive.google.com/uc?export=view&id=1H9XSbGNxIUGKlxeAP8wXlRm5r8ttWPwu",imageTitle:"comercio",desc:"Serviços feitos prezando a excelência visando\n        melhoria na qualidade e funcionalidade do seu comércio. "}]},getters:{cardsLocais:function(a){return a.cardsLocais}},actions:{},modules:{}}),H=e("k5jX");e("/KV2");s.default.use(H.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:B,store:J,components:{App:d},template:"<App/>"})},"S/Qs":function(a,t){},WjOg:function(a,t){},icFM:function(a,t){},qb6w:function(a,t){},upPa:function(a,t){},ywhT:function(a,t){}},["NHnr"]);
//# sourceMappingURL=app.ad5c962ebd341ddd14a0.js.map