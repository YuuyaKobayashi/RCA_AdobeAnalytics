/**====ローカル
掲載日表示：暫定対応
=*/
if(typeof(s) != "undefined"){
	var nList = false;
	var disp_id = window.location.pathname.split("/")[3];

	function getNList(dispId){
		switch(dispId){
			case "cf_s00693.jsp":
				return true;
			case "cf_s00615.jsp":
				return true;
			default :
				return false;
		}
	}

	//N一覧
	if(typeof(s.events) != "undefined"){
		if(s.events.indexOf("event1") >= 0){
			nList = true;
		}else{
			nList = getNList(disp_id);
		}
	}

	if(nList){

		var a = "";
		var rqmtList = "";
		var dispId = ""
		var bp = ""

		//Get DOM list
		if(window.location.pathname.match(/cf_s00700/)){	
			rqmtList = $("div#box_bosyu.content").children("div[id*='rqmt']");
			dispId = "cf_s00700";
		}else if(window.location.pathname.match(/cf_s00890/)){
			rqmtList = $("div#box_naiyo.content").children("div[id*='rqmt']");	
			dispId = "typeN";
		}else{
			rqmtList = $("div[id*='rqmt']");	
			dispId = "typeN";
		}

		if(rqmtList.length > 0){
			setTimeout(function(){
				for(i=0; i<rqmtList.length; i++){
					//Get Date BaseText
					if(dispId == "cf_s00700"){
						a = $(rqmtList[i]).children("p.date").text();
					}else if(dispId == "typeN"){
						a = $(rqmtList[i]).children("div.wrap").children("p.date").text();
					}

					//Day set
					if(a.match(/火/)){
						ss ="水曜日掲載開始";
						bp = "";
					}else if(a.match(/木/)){
						ss ="金曜日掲載開始";
						bp = ' background-position: 0 100%';
					}else{
						ss="";
						bp = "";
					}

					//text set
					if(dispId == "cf_s00700"){
						$(rqmtList[i]).children("div.job_head").children("a").append('<span style="position: absolute; bottom: 6px; right: 10px; width: 79px; height:12px; background: url(/rnc/contents/pub/sp/inc_n_ichiran/img/n15_ico_n_upday.png) 0 0; overflow: hidden; text-indent: -9999%;'+ bp +'">' + ss + '</span>');
					}else if(dispId == "typeN"){
						$(rqmtList[i]).children("ul.serch_corp").children("li").append('<span style="margin-left: 2px; position: relative; display: inline-block; width: 79px; height: 12px; background: url(/rnc/contents/pub/sp/inc_n_ichiran/img/n15_ico_n_upday.png) 0 0; overflow: hidden; text-indent: -9999%;'+ bp +'">' + ss + '</span>');
					}
				}	
			},1000);
		}
	}
}



/* *=================================== PV ======================================== **/
function sc_cnst(){
	if(typeof(window.s) != "undefined"){
		if(typeof(window.s.prop17) != "undefined"){
			//OOPO reg/open
			var stsArr = window.s.prop17.split(":");
			(stsArr[0])?this.ooReg = stsArr[0]:this.ooReg = "";
			(stsArr[1])?this.ooOpn = stsArr[1]:this.ooOpn = "";
			(stsArr[2])?this.poReg = stsArr[2]:this.poReg = "";
			(stsArr[3])?this.poOpn = stsArr[3]:this.poOpn = "";
		}else{
			this.ooReg = this.ooOpn = this.poReg = this.poOpn = "";			
		}
	} 
}
var scCnst = new sc_cnst();


/*** SP TOP導線 計測　GetParam**/
//if(window.location.pathname.match(/cf_s00010/)){
	if(s.getQueryParam('toplead') && scCnst.mid != "-"){
		s.prop34 = s.getQueryParam('toplead');
	}
//}

/**===== N一覧画面系==============**/
if(typeof(s) != "undefined"){

	/**共通N一覧のみ*****/
	if(s.pageName.match(/cf_s00700/)){

		/** 検索パネルUI */
		if(!s.getCk('srchPnlAb')){
			s.setCk('srchPnlAb',Math.floor(Math.random()*10000000000000),365);
		}
		/***
		if (s.getCk('srchPnlAb')) {
			var pCkNum = s.getCk('srchPnlAb');
			if(pCkNum % 2 == 0) {
				s.eVar58 = "srcpanel_test";
				$('#header_notice_950_01_login').hide();
				$('.option_search').insertBefore('.js-condition_detail').css('padding-top','10px');
				$('.option_search p').css({'height':'14px', 'margin-bottom':'-24px'});
				$('.option_search a').css('font-size','10px');
				$('.searchbox_area').css({'padding-top':'24px', 'padding-bottom':'0'});
				$('.js-condition_detail ul').css('padding-top', '29px');
			} else {
				s.eVar58 = "srcpanel_original";
			}
		}
		***/
		s.eVar58 = "srcpanel_test";
		$('#header_notice_950_01_login').hide();
		$('.option_search').insertBefore('.js-condition_detail').css('padding-top','10px');
		$('.option_search p').css({'height':'14px', 'margin-bottom':'-24px'});
		$('.option_search a').css('font-size','10px');
		$('.searchbox_area').css({'padding-top':'24px', 'padding-bottom':'0'});
		$('.js-condition_detail ul').css('padding-top', '29px');

		/***  N一覧UI ***/
		//2015/05/11 Cut
		//if(scCnst.mid){
		//	(Number(scCnst.mid) % 2 == 0)?s.prop51 = "reco_area_ui_button_img":s.prop51 = "reco_area_ui_text";
		//}
	}

	/** 共通N一覧、キーワードN一覧 **/
	if(window.location.pathname.match(/cf_s00890/) || window.location.pathname.match(/cf_s00700/)){
		/*============== SearchCnd 15/02/15 Add*/
		var hits="";
		if($(".search_count").find('span').length > 0){
			hits = $(".search_count").children('span').eq(0).text();
			if(!hits){hits = "0";}
			s.prop27 = hits;
			s.eVar44 = hits;
		};
	}
}

// keyword-suggest
d=new Date();
var qass = document.createElement('script');
qass.type = 'text/javascript';
qass.charset = 'utf-8';
qass.async = true;
qass.src = '//suggest.rnn.qass.jp/js/rnn/qass.js?' + d.getDate();
if(window.location.hostname == "rtph.rnn.x.recruit.co.jp"){
	qass.src = '//rnn.qass.jp/js/rnn/qass.js?' + d.getDate();
}
var qs = document.getElementsByTagName('script')[0];
qs.parentNode.insertBefore(qass, qs);

/****  SiteCatalyst PageView Tracking Send *****/
var s_code=s.t();if(s_code)document.write(s_code)



/** ================================== LINK ======================================== **/
/****
function getS(){
	var s=s_gi('rcrtrikunabinextspdev');
	if(location.host=='next.rikunabi.com'){
		var s=s_gi('rcrtrikunabinextspprd');
	}
	s.linkTrackVars	= "prop13,prop11,prop12";
	s.linkTrackVars	= s.linkTrackVars + ",eVar5,visitorID";
	s.linkTrackVars	= s.linkTrackVars + ",visitorID";
	s.prop13 = s.eVar5 = scCnst.mid;
	s.visitorID = scCnst.scVid;
	return s;
}
****/

function setStl(){
	s.linkTrackVars	= "prop13,prop11,prop12,prop46,prop47,prop60";
	s.linkTrackVars	= s.linkTrackVars + ",eVar5,eVar46,eVar47,eVar50,eVar60,visitorID,events";
}


/* ==============================応募完了検討中リスト 14/9/8追加 */
function kento_tsuika_cf_s01580() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s01580');
}

function kento_tsuika_cf_s01590() {
	setStl(); s.tl(true,'o','kento_tsuika_cf_s01590');
}

/* ============================== Nプロ期限切れオファー用 14/10/6追加 */
function expiredOfferClick(prjCd,msgId){
	setStl();s.tl(this,'o',prjCd + '_' + msgId + '_' + 'expiredOfferClick');
}

/* ============================== 応募アンケート 14/10/6追加 */
function oubo_share_nyuryoku() {
	setStl();s.tl(true,'o','oubo_share_nyuryoku');
}

function oubo_share_kanryo() {
	setStl();s.tl(true,'o','oubo_share_kanryo');
}

/* ============================== 検討中リストまとめて応募 14/10/20追加 */
if(typeof(jQuery) !="undefined"){
	$('#matomete_button').click(function(){
		setStl();
		var ck_n = $('.kentochu_ngen input:checked').length;
		var ck_ng = $('.kentochu_ngen.end input:checked').length;
		var lnkNm = "";
		if (ck_ng) {linkNm = 'matome_oubo_ng';
		} else if (10 < ck_n) {linkNm = 'matome_oubo_over';
		} else if (ck_n == 0) {linkNm = 'matome_oubo';
		} else if (ck_n == 1) {linkNm = 'matome_oubo1';
		} else if (ck_n == 2) {linkNm = 'matome_oubo2';
		} else if (ck_n == 3) {linkNm = 'matome_oubo3';
		} else if (ck_n == 4) {linkNm = 'matome_oubo4';
		} else if (ck_n == 5) {linkNm = 'matome_oubo5';
		} else if (ck_n == 6) {linkNm = 'matome_oubo6';
		} else if (ck_n == 7) {linkNm = 'matome_oubo7';
		} else if (ck_n == 8) {linkNm = 'matome_oubo8';
		} else if (ck_n == 9) {linkNm = 'matome_oubo9';
		} else if (ck_n == 10) {linkNm = 'matome_oubo10';
		} else {linkNm = 'matome_oubo99';
		}
		if(linkNm){s.tl(true,'o',linkNm); return false;}else{return true;}
	});
	$('#matomete_sakujo01').click(function() {setStl(); s.tl(true,'o','matomete_sakujo');});
	$('#matomete_sakujo02').click(function() {setStl(); s.tl(true,'o','matomete_sakujo_end');});
}

/* ============================== High-LowsPRJ N5+ 14/11/10追加 */
function kento_tsuika_cf_s01800() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s01800');
}

function kento_tsuika_cf_s00700() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s00700');
}

function kento_tsuika_cf_s00890() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s00890');
}

function kento_tsuika_cf_s02040() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s02040');
}

function kento_tsuika_cf_s02200() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s02200');
}

function kento_tsuika_cf_s00340() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s00340');
}

function kento_tsuika_cf_s00460() {
	setStl(); s.tl(true,'o','kento_tsuika_cf_s00460');
}

function kento_tsuika_cf_s00480() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s00480');
}

function kento_tsuika_cf_s00610() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s00610');
}

function kento_tsuika_cf_s00615() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s00615');
}

function kento_tsuika_cf_s00670() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s00670');
}

function kento_tsuika_cf_s00680() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s00680');
}

function kento_tsuika_cf_s00690() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s00690');
}

function kento_tsuika_cf_s00691() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s00691');
}

function kento_tsuika_cf_s00692() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s00692');
}

/* ============================== レコメンドUI改善横展開（SP） 14/12/01 */
function kento_tsuika_cf_s00700_reco() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s00700_reco');
}

function kento_tsuika_cf_s00890_reco() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s00890_reco');
}

function kento_tsuika_cf_s02040_reco() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s02040_reco');
}

function kento_tsuika_cf_s02200_reco() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s02200_reco');
}

function kento_tsuika_cf_s01580_reco() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s01580_reco');
}

function kento_tsuika_cf_s01590_reco() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s01590_reco');
}

function kento_tsuika_cf_s06030_reco() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s06030_reco');
}

function kento_tsuika_cf_s06020_reco() {
	setStl();s.tl(true,'o','kento_tsuika_cf_s06020_reco');
}

/* ============================== レジュメ登録 SP転サ申込み選択 14/12/01追加 */
if(window.location.pathname == "/rnc/docs/cf_s15690.jsp" || window.location.pathname == "/rnc/docs/cf_i15690.jsp" ){
	$("[name='scout_reg']").click(function(){
		var radioVal = "";
		if( $("input[name='reg_f']:checked").val() ){
			document.cookie = 'sc_gui_1st' +'=' + $("input[name='reg_f']:checked").val() + ';expires=' + 1;
		}
	});
}

/* ============================== SPサイトチュートリアル 14/12/01追加 */
function sc_sitetour_track(lnkNm){				
	setStl();
	s.linkTrackVars = s.linkTrackVars + ',prop16';
	s.prop16 = lnkNm;
	s.tl(true,'o', lnkNm);
	//s.setCk('st_track',lnkNm,1)
	document.cookie = 'st_track' +'=' + lnkNm + ';expires=' + 1;
}

/* ============================== ATS連携 SP用 14/12/09追加 */ 
function atsApp(cmpnyUrl){
	setStl();
	s.linkTrackVars = s.linkTrackVars + ',events';
	s.linkTrackEvents='event18';
	s.events='event18';
	s.tl(this,'o','atsApp');
}



/* ============================== アプリ導線追加 14/12/03追加 15/02/23更新 */
function sp_app_install() {
	setStl();s.tl(true,'o','sp_app_install');
}
function sp_app_close() {
	setStl();s.tl(true,'o','sp_app_close');
}
function sp_app_open() {
	setStl();s.tl(true,'o','sp_app_open');
}


/* ============================== 面接確約求人FS 15/2/16追加  */ 
function menkaku_kibou_nyuryoku() {
	setStl();s.tl(true,'o','menkaku_kibou_nyuryoku');
}
function menkaku_kibou_kanryo() {
	setStl();s.tl(true,'o','menkaku_kibou_kanryo');
}


/* ============================== SP新規会員向け求人閲覧FS 15/2/12追加  */
function sc_rnnrecommendtrack(lnkNm){				
	setStl();s.tl(this,'o', lnkNm);
}


/* =========== SP TOP導線 計測　Modal Window  ==========  */
if(typeof(jQuery()) != "undefined"){
	if(window.location.pathname.match(/cf_s00010/) && typeof(s.prop51) != "undefined" && typeof(s.prop13) != "undefined"){
		if(s.prop51 == "logintop_test_201504" && s.prop13 != "-"){

			//Custom Link Object
			var sndNm;

			//sc_function
			function sndTopUi(lnkNm,lnkObj){
				setStl();
				s.linkTrackVars = s.linkTrackVars +',prop34';
				s.prop34 = lnkNm;
				(lnkObj)?s.tl(lnkObj,'o',lnkNm):s.tl(true,'o',lnkNm);
			}

			//local_constructor
			function scTopUiSetCnst(){
				//F
				this.scoutModalF="";
				//DOM Object
				this.oshiraseAnime,this.scout_open,this.scout_saikai,this.gronavi,this.tenshokushien,this.jbTypeSearch,this.wrkPlcSearch,this.honjitsu_shuryo,this.recommend_scout,this.recommend_joboffer,this.tenshokushien_hozon;
				//String
				this.oshiraseAttr,this.innTxt_inf,this.innTxt_gnav,this.innTxt_jb,this.innTxt_wplc,this.innTxt_last = "";

			}
			var scTopUiCnst = new scTopUiSetCnst();

			//info icon
			scTopUiCnst.oshiraseAttr = $("div#userarea").children().eq(0).attr("id");
			switch(scTopUiCnst.oshiraseAttr){
				case "top_oshirase_icon_on" : scTopUiCnst.oshiraseAnime = $("#oshirase_on");break;
				case "top_oshirase_icon_on2" : scTopUiCnst.oshiraseAnime = $("#oshirase_on");break;
				case "top_oshirase_icon_off" : scTopUiCnst.oshiraseAnime = $("#oshirase_off");break;
			}
			scTopUiCnst.oshiraseAnime.click(function(){sndTopUi("mdl1_info",this);});

			//info list
			$("body").on("click","div.ui-domwindowdialog div.sp_modal div#oshirase_inner.menuarea.modscrollarea.ui-flickable div.ui-flickable-container div.ui-flickable-wrapper div.ui-flickable-content ul li a",function(){
				scTopUiCnst.innTxt_info = $(this).find("span.iconlinkR").text();
				if(scTopUiCnst.innTxt_info){
					if(scTopUiCnst.innTxt_info.match(/有効期限/)){ sndNm = "mdl1_info_offer";
					}else if(scTopUiCnst.innTxt_info.match(/下書き保存中/)){ sndNm = "mdl1_info_shitagaki";
					}else if(scTopUiCnst.innTxt_info.match(/検討中リスト/)){ sndNm = "mdl1_info_kento";
					}
					//s.tl
					if(sndNm){sndTopUi(sndNm,this);}
				}
			});

			//top_scout_elements
			scTopUiCnst.scout_open = $("div#top_scout_toroku a#scout_toroku_open");
			scTopUiCnst.scout_saikai = $("div#top_scout_saikai a");

			scTopUiCnst.scout_open.click(function(){
				scTopUiCnst.scoutModalF = "scoutReg";
				sndTopUi("mdl2_scout",null);
			});

			scTopUiCnst.scout_saikai.click(function(){
				scTopUiCnst.scoutModalF = "scoutReg";
				sndTopUi("mdl2_scout_continue",this);
			});
			

			//grobal navi
			if(scCnst.mid != "-"){
				scTopUiCnst.gronavi = $("div#slide_switch");
				scTopUiCnst.gronavi.click(function(){sndTopUi("mdl1_gnav",null);});	
				$("body").on("click","div#slide_menu.ui-flickable div.ui-flickable-container div.ui-flickable-wrapper div.ui-flickable-content div.menuarea ul li a",function(){
					scTopUiCnst.innTxt_gnav = $(this).text();
					if(scTopUiCnst.innTxt_gnav){
						if(scTopUiCnst.innTxt_gnav.match(/ホーム/)){ sndNm = "mdl1_gnav_home";
						}else if(scTopUiCnst.innTxt_gnav.match(/マイページ/)){ sndNm = "mdl1_gnav_mypage";
						}else if(scTopUiCnst.innTxt_gnav.match(/受信メッセージ/)){ sndNm = "mdl1_gnav_jushin";
						}else if(scTopUiCnst.innTxt_gnav.match(/検討中リスト/)){ sndNm = "mdl1_gnav_kento";
						}else if(scTopUiCnst.innTxt_gnav.match(/求人情報を探す/)){ sndNm = "mdl1_gnav_kyujin";
						}else if(scTopUiCnst.innTxt_gnav.match(/あなたへのおすすめ情報/)){ sndNm = "mdl1_gnav_osusume";
						}else if(scTopUiCnst.innTxt_gnav.match(/スカウトを待つ/)){ sndNm = "mdl1_gnav_scout";
						}else if(scTopUiCnst.innTxt_gnav.match(/転職支援サービス/)){ sndNm = "mdl1_gnav_tensa";
						}
						//s.tl
						if(sndNm){sndTopUi(sndNm,this);}
						return true;
					}
				});
				$("body").on("click","div#slide_menu.ui-flickable div.ui-flickable-container div.ui-flickable-wrapper div.ui-flickable-content p.logout_link a",function(){
					sndTopUi("mdl1_gnav_logout",this);
				});
				$("body").on("click","div#slide_menu.ui-flickable div.ui-flickable-container div.ui-flickable-wrapper div.ui-flickable-content div.btnarea ul li",function(){
					scTopUiCnst.innTxt_gnav = $(this).find("a").text();
					if(scTopUiCnst.innTxt_gnav){
						//if(scTopUiCnst.innTxt_gnav.match(/ログイン/)){ sndNm = "mdl1_gnav_login";
						//}else if(scTopUiCnst.innTxt_gnav.match(/会員登録/)){ sndNm = "mdl1_gnav_kaiintouroku";
						//}
						if(scTopUiCnst.innTxt_gnav.match(/会員登録/)){ sndNm = "mdl1_gnav_kaiintouroku";}

						//s.tl
						if(sndNm){sndTopUi(sndNm,this);}
					}
				});
			}

			//top_navi_entry
			//scTopUiCnst.tenshokushien = $("a#tenshokushien_open.ui-domwindowdialog_open");
			//scTopUiCnst.tenshokushien.click(function(){sndTopUi("mdl2_tensa",this);});
			$("body").on("click","div#top div#top_tenshokushien a",function(){
				sndTopUi("mdl2_tensa",this);
			});

			$("body").on("click","div.ui-domwindowdialog div.sp_modal div#top_tenshokushien_hukidashi.modscrollarea.ui-flickable div.ui-flickable-container div.ui-flickable-wrapper div.ui-flickable-content p.btnarea a",function(){
				sndTopUi("mdl2_tensa_detail",this);
			});

			//middle_search_jb_type
			scTopUiCnst.jbTypeSearch = $("a#shokushu_kensaku");
			scTopUiCnst.jbTypeSearch.click(function(){sndTopUi("mdl1_syokusyu",null);});

			$("body").on("click","div.ui-domwindowdialog div.sp_modal div#shokushu_kensaku_inner.menuarea.modscrollarea.ui-flickable div.ui-flickable-container div.ui-flickable-wrapper div.ui-flickable-content ul.link.halfwide.fs14 li",function(){
				scTopUiCnst.innTxt_jb = $(this).find("a").text();
				if(scTopUiCnst.innTxt_jb){
					if(scTopUiCnst.innTxt_jb.match(/営業、事務、企画系/)){ sndNm = "mdl1_syokusyu_eigyo";
					}else if(scTopUiCnst.innTxt_jb.match(/サービス、販売、運輸系/)){ sndNm = "mdl1_syokusyu_service";
					}else if(scTopUiCnst.innTxt_jb.match(/コンサル、金融、不動産/)){ sndNm = "mdl1_syokusyu_senmon";
					}else if(scTopUiCnst.innTxt_jb.match(/ITエンジニア/)){ sndNm = "mdl1_syokusyu_tech_soft";
					}else if(scTopUiCnst.innTxt_jb.match(/電気、電子、機械/)){ sndNm = "mdl1_syokusyu_tech_denki";
					}else if(scTopUiCnst.innTxt_jb.match(/素材、食品、医薬品/)){ sndNm = "mdl1_syokusyu_tech_sozai";
					}else if(scTopUiCnst.innTxt_jb.match(/建築、土木/)){ sndNm = "mdl1_syokusyu_tech_doboku";
					}else if(scTopUiCnst.innTxt_jb.match(/クリエイティブ/)){ sndNm = "mdl1_syokusyu_creative";
					}else if(scTopUiCnst.innTxt_jb.match(/講師、公務員/)){ sndNm = "mdl1_syokusyu_sonota";
					}
					//s.tl
					if(sndNm){sndTopUi(sndNm,this);}
				}
			});

			//middle_search_wrk_plc
			scTopUiCnst.wrkPlcSearch = $("a#kinmuchi_kensaku");
			scTopUiCnst.wrkPlcSearch.click(function(){sndTopUi("mdl1_kinmuchi",true);});
			$("body").on("click","div.ui-domwindowdialog div.sp_modal div#kinmuchi_kensaku_inner.menuarea.modscrollarea.ui-flickable div.ui-flickable-container div.ui-flickable-wrapper div.ui-flickable-content ul.link.wide.fs14.half li",function(){
				scTopUiCnst.innTxt_wplc = $(this).find("a").text();
				if(scTopUiCnst.innTxt_wplc){
					if(scTopUiCnst.innTxt_wplc.match(/北海道/)){ sndNm = "mdl1_kinmuchi_hokkaido";
					}else if(scTopUiCnst.innTxt_wplc.match(/東北/)){ sndNm = "mdl1_kinmuchi_tohoku";
					}else if(scTopUiCnst.innTxt_wplc.match(/関東/)){ sndNm = "mdl1_kinmuchi_kanto";
					}else if(scTopUiCnst.innTxt_wplc.match(/東海/)){ sndNm = "mdl1_kinmuchi_tokai";
					}else if(scTopUiCnst.innTxt_wplc.match(/関西/)){ sndNm = "mdl1_kinmuchi_kansai";
					}else if(scTopUiCnst.innTxt_wplc.match(/北信越/)){ sndNm = "mdl1_kinmuchi_hokushinetu";
					}else if(scTopUiCnst.innTxt_wplc.match(/中国/)){ sndNm = "mdl1_kinmuchi_chugokushikoku";
					}else if(scTopUiCnst.innTxt_wplc.match(/九州/)){ sndNm = "mdl1_kinmuchi_kyushuokinawa";
					}else if(scTopUiCnst.innTxt_wplc.match(/海外/)){ sndNm = "mdl1_kinmuchi_kaigai";
					}
					//s.tl
					if(sndNm){sndTopUi(sndNm,this);}
				}
			});

			//middle_recommend_space
			scTopUiCnst.honjitsu_shuryo = $("a#honjitsu_shuryo_open");
			scTopUiCnst.honjitsu_shuryo.click(function(){
				sndTopUi("mdl1_shimekirikyujin",null);
			})

			//Honjitsu_Syuryo
			$("body").on("click","div.ui-domwindowdialog div.sp_modal div#honjitsu_shuryo_inner.menuarea.modscrollarea.ui-flickable div.ui-flickable-container div.ui-flickable-wrapper div.ui-flickable-content ul.link.wide.fs14 li",function(){

				scTopUiCnst.innTxt_last = $(this).find("a").text();
				if(scTopUiCnst.innTxt_last){
					if(scTopUiCnst.innTxt_last.match(/営業、事務、企画系/)){ sndNm = "mdl1_shimekirikyujin_eigyo";
					}else if(scTopUiCnst.innTxt_last.match(/サービス、販売、運輸系/)){ sndNm = "mdl1_shimekirikyujin_service";
					}else if(scTopUiCnst.innTxt_last.match(/コンサル、金融、不動産/)){ sndNm = "mdl1_shimekirikyujin_senmon";
					}else if(scTopUiCnst.innTxt_last.match(/ITエンジニア/)){ sndNm = "mdl1_shimekirikyujin_tech_soft";
					}else if(scTopUiCnst.innTxt_last.match(/電気、電子、機械/)){ sndNm = "mdl1_shimekirikyujin_tech_denki";
					}else if(scTopUiCnst.innTxt_last.match(/素材、食品、医薬品/)){ sndNm = "mdl1_shimekirikyujin_tech_sozai";
					}else if(scTopUiCnstinnTxt_last.match(/建築、土木/)){sndNm = "mdl1_shimekirikyujin_tech_doboku";
					}else if(scTopUiCnst.innTxt_last.match(/クリエイティブ/)){ sndNm = "mdl1_shimekirikyujin_creative";
					}else if(scTopUiCnst.innTxt_last.match(/講師、公務員/)){ sndNm = "mdl1_shimekirikyujin_sonota";
					}
					//s.tl
					if(sndNm){sndTopUi(sndNm,this);}					
				}
			});

			//Scout Modal
			scTopUiCnst.recommend_scout = $("a#recommend_offer_open");
			scTopUiCnst.recommend_joboffer = $("a#recommend_kyujin_open");
			if(scCnst.poReg != "1"){

				scTopUiCnst.recommend_scout.click(function(){
					sndTopUi("mdl1_osusumeoffer",null);
					sndTopUi("mdl1_osusumeoffer_scout_loading",null);
					scTopUiCnst.scoutModalF = "recommendOffer";
				});
				scTopUiCnst.recommend_joboffer.click(function(){
					sndTopUi("mdl1_osusumekyujin",null);
					sndTopUi("mdl1_osusumekyujin_scout_loading",null);
					scTopUiCnst.scoutModalF = "recommendJoboffer";
				});

			}else{

				scTopUiCnst.recommend_scout.click(function(){sndTopUi("mdl1_osusumeoffer",null);});
				scTopUiCnst.recommend_joboffer.click(function(){sndTopUi("mdl1_osusumekyujin",null);});

				$("body").on("click","div.ui-domwindowdialog div.sp_modal div#recommend_offer_inner.menuarea.modscrollarea.ui-flickable div.ui-flickable-container div.ui-flickable-wrapper div.ui-flickable-content ul.link.fs14 li#top_recommend_offer_shikou a",function(){
					sndTopUi("mdl1_osusumeoffer_shikou",this);
				});
				$("body").on("click","div.ui-domwindowdialog div.sp_modal div#recommend_offer_inner.menuarea.modscrollarea.ui-flickable div.ui-flickable-container div.ui-flickable-wrapper div.ui-flickable-content ul.link.fs14 li#top_recommend_offer_star a",function(){
					sndTopUi("mdl1_osusumeoffer_star",this);
				});
				$("body").on("click","div.ui-domwindowdialog div.sp_modal div#recommend_offer_inner.menuarea.modscrollarea.ui-flickable div.ui-flickable-container div.ui-flickable-wrapper div.ui-flickable-content ul.link.fs14 li#top_recommend_offer_popular a",function(){
					sndTopUi("mdl1_osusumeoffer_hoka",this);
				});
				$("body").on("click","div.ui-domwindowdialog div.sp_modal div#recommend_offer_inner.menuarea.modscrollarea.ui-flickable div.ui-flickable-container div.ui-flickable-wrapper div.ui-flickable-content ul.link.fs14 li#top_recommend_offer_saikin a",function(){
					sndTopUi("mdl1_osusumeoffer_saikin",this);
				});
				$("body").on("click","div.ui-domwindowdialog div.sp_modal div#recommend_kyujin_inner.menuarea.modscrollarea.ui-flickable div.ui-flickable-container div.ui-flickable-wrapper div.ui-flickable-content ul.link.fs14 li#top_recommend_kyujin_shikou a",function(){
					sndTopUi("mdl1_osusumekyujin_shikou",this);
				});
				$("body").on("click","div.ui-domwindowdialog div.sp_modal div#recommend_kyujin_inner.menuarea.modscrollarea.ui-flickable div.ui-flickable-container div.ui-flickable-wrapper div.ui-flickable-content ul.link.fs14 li#top_recommend_kyujin_saiyorei a",function(){
					sndTopUi("mdl1_osusumekyujin_nitahito",this);
				});
				$("body").on("click","div.ui-domwindowdialog div.sp_modal div#recommend_kyujin_inner.menuarea.modscrollarea.ui-flickable div.ui-flickable-container div.ui-flickable-wrapper div.ui-flickable-content ul.link.fs14 li#top_recommend_kyujin_sokuoubo a",function(){
					sndTopUi("mdl1_osusumekyujin_suguoubo",this);
				});
				$("body").on("click","div.ui-domwindowdialog div.sp_modal div#recommend_kyujin_inner.menuarea.modscrollarea.ui-flickable div.ui-flickable-container div.ui-flickable-wrapper div.ui-flickable-content ul.link.fs14 li#top_recommend_kyujin_keiken a",function(){
					sndTopUi("mdl1_osusumekyujin_keiken",this);
				});
			}

			$("body").on("click","div.ui-domwindowdialog div.sp_modal div#top_recommend_scout.modscrollarea.ui-flickable div.ui-flickable-container div.ui-flickable-wrapper div.ui-flickable-content p.btnarea a",function(){
				switch (scTopUiCnst.scoutModalF){
					case "recommendOffer" : sndTopUi("mdl1_osusumeoffer_scout_toroku",this);break;
					case "recommendJoboffer" : sndTopUi("mdl1_osusumekyujin_scout_toroku",this);break;
					case "scoutReg" : sndTopUi("mdl2_scout_toroku",this);break;
				}
			});
			$("body").on("click","div.ui-domwindowdialog div.sp_modal div#top_recommend_scout.modscrollarea.ui-flickable div.ui-flickable-container div.ui-flickable-wrapper div.ui-flickable-content p.linkarea a",function(){
				switch (scTopUiCnst.scoutModalF){
					case "recommendOffer" : sndTopUi("mdl1_osusumeoffer_scout_about",this);break;
					case "recommendJoboffer" : sndTopUi("mdl1_osusumekyujin_scout_about",this);break;
					case "scoutReg" : sndTopUi("mdl2_scout_about",this);break;
				}
			});
		}
	}
}


/* ======= RNN レジュメ導線改善_SP =*/
if(typeof(s) != "undefined"){
	if(s.getCk("nextpf_gui_sp_tl") && s.getCk("nextpf_gui_sp_tl") == 1){
	//GUI_ON
		setStl();
		s.tl(this,'o','nextpf_gui_sp');	
		s.setCk("nextpf_gui_sp_tl",0,1);
	}else if(s.getCk("nextpf_no_gui_sp") && s.getCk("nextpf_no_gui_sp") == 1){
	//GUI_OFF
		setStl();
		s.tl(this,'o','nextpf_no_gui_sp');
		s.setCk("nextpf_no_gui_sp",0,1);
	}
}

if(window.location.pathname.match(/cf_s15140/)){
	$("form#formSctReg").submit(function(){
		if($("#reg_f:checked").val()){
			/***
			setStl();
			s.linkTrackVars = s.linkTrackVars + ",events";
			s.linkTrackEvents = "event34";
			s.events = "event34";
			s.tl(this,'o','nextpf_gui_sp');	
			**/
			s.setCk("nextpf_gui_sp",1,1);
			s.setCk("nextpf_gui_sp_tl",1,1);
			s.setCk("nextpf_no_gui_sp",0,1);
			setTimeout(function(){
				return true;
			},1000);		
		}else{
			/***
			setStl();
			s.tl(this,'o','nextpf_no_gui_sp');
			**/
			s.setCk("nextpf_gui_sp",0,1);
			s.setCk("nextpf_no_gui_sp",1,1);
			setTimeout(function(){
				return true;
			},1000);	
		}
	});
}

//レジュメ2nd
if(window.location.pathname.match(/cf_s05285/)){
	var data = new Object;
	$.ajax({
		type: 'GET',
		url: '/rnc/docs/cp_iGetRsm.jsp',
		dataType: 'json',
	    success: function(data){
			scCnst.poOpn = data.PO_koukai;
	    },
	    error:function(){
	    	scCnst.poOpn = ""
	    }
	});

	$("body").on("click","div.userdata_publish.fixed.js-floatingWindow a",function(){
		s.linkTrackVars = s.linkTrackVars + ',events';
		s.linkTrackEvents='event37';
		s.events='event37';
		var linkNm = "dl_syokumu";
		(s.getCk("dl_rsm_pdt"))?linkNm = linkNm + "_pdt":linkNm = linkNm + "_rnn";
		linkNm = linkNm + "_spdirect";
		(scCnst.poOpn == "1")?linkNm = linkNm + "_on":linkNm = linkNm + "_off";
		s.tl(true,'o',linkNm);
	});
}


//Good Point Set
if(window.location.pathname.match(/cf_s01410/)){
	$("#gp_on").click(function(){
		s.setCk("gp_diag_rslt_at_set","1",1);
		s.setCk("gp_diag_rslt_at_set_rqmt",s.eVar26,1);
	});
	$("#gp_off").click(function(){
		s.setCk("gp_diag_rslt_at_set","0",1);
		s.setCk("gp_diag_rslt_at_set_rqmt",s.eVar26,1);
	});
}
