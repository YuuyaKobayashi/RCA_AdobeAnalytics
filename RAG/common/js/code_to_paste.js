/* ------ PV ------- */

//get BasePageName
sc_BasePageName=s.getPageName();
sc_BasePageName=sc_BasePageName.toLowerCase();
scArrPageSection=sc_BasePageName.split(":");
sc_PageSectionLength=scArrPageSection.length;
if(sc_BasePageName=="rag:kensaku:kyujin"){
	if(s.getQueryParam("for1")){sc_BasePageName+=":for";}else if(s.getQueryParam("stk1")){sc_BasePageName+=":stk";}else if(s.getQueryParam("emp1")){sc_BasePageName+=":emp";}
}
//get pageName
if(!s.pageName&&!s.pageType){s.pageName=sc_BasePageName;}
if(s.pageName=="rag"){s.pageName="rag:top";}

//get Section
if(sc_PageSectionLength>1){sc_Section1=scArrPageSection[0]+":"+scArrPageSection[1];}else{sc_Section1=scArrPageSection[0];}
if(sc_PageSectionLength>2){sc_Section2=sc_Section1+":"+scArrPageSection[2];}else{sc_Section2=sc_Section1;}
if(sc_PageSectionLength>3){sc_Section3=sc_Section2+":"+scArrPageSection[3];}else{sc_Section3=sc_Section2;}
s.channel=sc_Section1;
s.prop12=sc_Section2;
s.prop13=sc_Section3;

//get device
s.prop14=isSmartphone2();
if(s.prop14=="android"||s.prop14=="iphone"){s.prop15="sp"}else{s.prop15="pc"}
if(s.pageName&&s.prop15)s.prop16="["+s.prop15+"]"+s.pageName;


//求人一覧_検索結果件数
/*****  一時保留
s.scBasePn=s.getPageName();
if(s.scBasePn.match(/^rag:kensaku/)){
	s.scArrPs = s.scBasePn.split(":");
	s.scPsLength = s.scArrPs.length;
	var ajaxF = false;
	if(s.scPsLength>2){
		switch(s.scArrPs[2]){
			case "syokusyu" : ajaxF = true; break;
			case "kinmuchi" : ajaxF = true; break;
			case "keyword" : ajaxF = true; break;
			case "gyokai" : ajaxF = true; break;
			case "shinchaku" : ajaxF = true; break;
			case "kyujinlist" : ajaxF = true; break;
		}
		if(s.scArrPs[2].match(/select/)){ajaxF = true;}

		if(ajaxF){
			var ajaxCount = function(callback)
			jQuery.ajax({
				type: "POST",
				url: "/kensaku/ajaxcount/",
				dataType:"json",
				data: {
					"jb_type_long_cd": "",
					"srch_ann_inc_cd": "",
					"keyword2": "",
					"indus_long_cd": "",
					"jb_type_exp_cd": "",
					"prf_cnd_cd": ""
				},
				//success : function(data){
				//	alert(data.count);
				////}
				////}).done(function(data){
				////	alert(data.count);
				////}).fail(function(data){
			});
		}
	}
}
****/

//prop51用名称をセット
//2013.07.26 prop51とevar51を同義
if(window.location.hostname.match(/cgi2/)){this.sc_fst_SumName = "";this.sc_SumName = "";			
}else{
	function setPageSummary(){
		var baseName = getSumName();
		if(baseName){this.sc_fst_SumName = baseName;this.sc_SumName = "";
		}else{this.sc_fst_SumName = "";this.sc_SumName = "";		
		}
	}
	var sumName = new setPageSummary();
	//AB TEST
	if(typeof(sc_abtest_cd) != "undefined"){s.eVar50 = sc_abtest_cd;}

	//2013.12.26 51から61に変更
	//if(typeof(sc_prop51) != "undefined"){s.prop51 = sc_prop51;}
	if(typeof(sumName.sc_SumName) != "undefined"){if(sumName.sc_SumName){s.prop61 = s.eVar61 = sumName.sc_SumName;}}
	if(typeof(sumName.sc_fst_SumName) != "undefined"){s.prop61 = s.eVar61 = sumName.sc_fst_SumName ;}
}

//EF改善ABテスト（2014.07.25更新）
if(typeof(sc_ef_rstep) != "undefined"){if(sc_ef_rstep){s.prop52 = s.eVar52 = sc_ef_rstep;}}
//グロナビ
if(s.getQueryParam('gnav')){s.prop57=s.getQueryParam('gnav');s.eVar57 = s.prop57;}
//ABテスト汎用1（職種別レジュメ）
if(typeof(sc_abtest_cd) != "undefined"){s.eVar54 = sc_abtest_cd;}
//職種別レジュメ簡易
if(typeof(ef_rtype_cd) != "undefined"){s.prop58 = s.eVar58 = ef_rtype_cd;}

//RAG計測案件 pagename更新
//転サ申込フォームのみ、各STEP毎の画面名で更新
	//s.pageName = sp_ef_pagename;
	//2014.03.19 pagename更新をeVar62へ変更
if(typeof(sp_ef_pagename) != "undefined"){(sp_ef_pagename != "")?s.eVar62 = s.prop62 = sp_ef_pagename:s.eVar62 = s.prop62 = s.pageName;
}else{s.eVar62 = s.prop62 = s.pageName;
}

//RAG計測案件 一時保存Cookie値
if(typeof(sp_ef_cookie) != "undefined"){s.prop55 = s.eVar55 = sp_ef_cookie;}
//メルマガ登録フォーム用
if(typeof(rag_form_type) != "undefined"){s.prop56 = s.eVar56 = rag_form_type;}
//top FS用（2015.01.27更新）
if(typeof(page_type_cd) != "undefined"){s.prop51 = s.eVar51 =  page_type_cd;}
//求人管理番号（2015.03.30更新）
s.prop26=s.eVar26=s.getQueryParam('kjno');

//求人票経由 エントリーフォーム
var prvPageName = s.getPreviousValue(s.pageName,"s_pv");
if(prvPageName){
	if(prvPageName.match(/^rag:kensaku:kyujin/) && prvPageName.match(/\.html/) && !s.getQueryParam("fr")){
		if(window.location.pathname.match(/entry\/ts\/prof1\.html/) || s.pageName.match(/rag:entry:ts:resumeerror.html/)){
			//求人票No
			var kjno = prvPageName.split(":")[3].split(".")[0];if(kjno){s.prop26 = kjno;s.eVar26 = "D=c26";}
		}
	}
}
//求人一覧検索条件
var sc_prop60 = "";
if(typeof(sc_jb_type_long_cd) != "undefined"){if(sc_jb_type_long_cd){s.prop63 = sc_jb_type_long_cd;sc_prop60 = "jb_type";}}
if(typeof(sc_wrk_plc_long_cd) != "undefined"){if(sc_wrk_plc_long_cd){s.prop64 = sc_wrk_plc_long_cd;(sc_prop60)?sc_prop60 = sc_prop60 + ":wrk_plc":sc_prop60 = "wrk_plc";}}
if(typeof(sc_indus_long_cd) != "undefined"){if(sc_indus_long_cd){s.prop65 = sc_indus_long_cd;(sc_prop60)?sc_prop60 = sc_prop60 + ":indus":sc_prop60 = "indus";}}
if(typeof(sc_jb_type_exp_cd) != "undefined"){if(sc_jb_type_exp_cd){s.prop66 = sc_jb_type_exp_cd;(sc_prop60)?sc_prop60 = sc_prop60 +":skill":sc_prop60 = "skill";}}
if(typeof(sc_prf_cnd_cd) != "undefined"){if(sc_prf_cnd_cd){s.prop67 = sc_prf_cnd_cd;(sc_prop60)?sc_prop60 = sc_prop60 +":prf":sc_prop60 ="prf";}}
if(typeof(sc_srch_ann_inc_cd) != "undefined"){if(sc_srch_ann_inc_cd){s.prop68 = sc_srch_ann_inc_cd;(sc_prop60)?sc_prop60 = sc_prop60 +":ann_inc":sc_prop60 = "ann_inc";}}
if(typeof(sc_srch_kwd) != "undefined"){if(sc_srch_kwd){s.prop69 = sc_srch_kwd;(sc_prop60)?sc_prop60 = sc_prop60 +":kwd":sc_prop60 = "kwd";}}
if(sc_prop60){s.prop60 = sc_prop60;}
//求人一覧FS 絞り込み条件
if(window.location.pathname.match(/\/kensaku\//) && !window.location.pathname.match(/\/kyujin\//)){(s.c_r("KYUJIN_SAVE"))?s.prop62 = s.prop62 + "_repeat":s.prop62 = s.prop62 + "_new"; s.eVar62 = "D=c62";}


var s_code=s.t();if(s_code)document.write(s_code);

/* ------ Custom Link ------- */
/** linkTrackVars Event*/
function setStl(){
	s.linkTrackVars = "prop10,prop12,prop13,prop14,prop15,prop16,prop23,prop46,prop55,prop61,prop62";
	s.linkTrackVars = s.linkTrackVars + "eVar10,eVar12,eVar13,eVar14,eVar15,eVar16,eVar23,eVar46,eVar55,eVar61,eVar62,visitorID,events";
}

//求人一覧FS モーダル用
function jobofferList_modal(lnkNm){setStl();s.tl(this,'o',lnkNm);}