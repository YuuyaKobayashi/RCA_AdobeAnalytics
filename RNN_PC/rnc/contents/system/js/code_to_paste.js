/** for PV*/
if(typeof(s.eVar45) != "undefined"){
	if(!s.eVar45.match(/^Movie/)){
		s.eVar45 = "";
	}
}

/*** Constructor   15/03/23 **/
function sc_cnst(){
	if(typeof(window.s) != "undefined"){
		//Profile 
		if(typeof(window.s.prop17) != "undefined"){
			/**OOPO reg/open**/
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

/**===== N�ꗗ��ʌn==============**/
if(typeof(s) != "undefined"){

	/**����N�ꗗ�̂�*****/
	if(s.pageName.match(/^n_ichiran/)){

		/** �����p�l��UI */
		/**
		if(!s.getCk('srchPnlAb')){
			s.setCk('srchPnlAb',Math.floor(Math.random()*10000000000000),365);
		}
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


		/***  N�ꗗUI ***/
		// 2015/05/11 Cut
		//if(scCnst.mid){
		//	(Number(scCnst.mid) % 2 == 0)?s.prop51 = "reco_area_ui_button_img":s.prop51 = "reco_area_ui_text";
		//}

	}


	/** ����N�ꗗ�A�L�[���[�hN�ꗗ **/
	if(s.pageName.match(/keyword_ichiran/) || s.pageName.match(/^n_ichiran/)){
		/*============== SearchCnd 15/02/15 Add*/
		if(typeof(jQuery) != "undefined"){
			var search_rtype = $("input[name='searchdiv']:checked").val();
			s.prop64 = search_rtype;
			var hits = $(".hit_number").eq(1).text();
			if(!hits){hits="0";}
			s.prop27 = hits;
			s.eVar44 = hits;
		}
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

if(s.pageName.match(/keyword_ichiran/)){
  var shokushu_cnt = $(".js-shokushuChecks").find("label").length;
  var shokushu_info = "";
  for(i=0; i<shokushu_cnt; i++){
    var tmp_cd = $(".js-shokushuChecks").find("input")[i].defaultValue;
    shokushu_info = shokushu_info + tmp_cd;
    if(i < shokushu_cnt - 1){
      shokushu_info = shokushu_info + ",";
    }
  }
  var kinmuchi_cnt = $(".js-kinmuchiChecks").find("label").length;
  var kinmuchi_info = "";
  for(i=0; i<kinmuchi_cnt; i++){
    var tmp_cd = $(".js-kinmuchiChecks").find("input")[i].defaultValue;
    kinmuchi_info = kinmuchi_info + tmp_cd;
    if(i < kinmuchi_cnt - 1){
      kinmuchi_info = kinmuchi_info + ",";
    }
  }
  var gyoshu_cnt = $(".js-gyoshuChecks").find("label").length;
  var gyoshu_info = "";
  for(i=0; i<gyoshu_cnt; i++){
    var tmp_cd = $(".js-gyoshuChecks").find("input")[i].defaultValue;
    gyoshu_info = gyoshu_info + tmp_cd;
    if(i < gyoshu_cnt - 1){
      gyoshu_info = gyoshu_info + ",";
    }
  }
  var tmp = shokushu_info + ":" + kinmuchi_info + ":" + gyoshu_info;
  s.eVar76 = tmp;
}

/* ���僌�W����  F/S Search 
	Default : Resume_Close
	App Resume Touched : s.getCk("AppResume")
*/
if(typeof(s.events) != "undefined"){
	if(s.events.match(/event4/)){
		var appRsmStatus = s.getCk("AppResume");
		(appRsmStatus)?s.prop58 = appRsmStatus:s.prop58 = "Resume_Open";
		s.prop58 = s.getCk("AppResume");
	}
}

/****  SiteCatalyst PageView Tracking Send *****/
var s_code=s.t();if(s_code)document.write(s_code)


/** for LINK */
function getS(){
	var s_account;
	//for SP-Device
	if((location.host=='next.rikunabi.com')){
		(isSmartphoneRLS())?s_account="rcrtrikunabinextspprd":s_account="rcrtrikunabinextprd";
	}else{
		(isSmartphoneRLS())?s_account="rcrtrikunabinextspdev":s_account="rcrtrikunabinextdev";
	}
	var s=s_gi(s_account);
	s.linkTrackVars	= "prop13,prop11,prop12";
	s.linkTrackVars	= s.linkTrackVars + ",eVar5,visitorID";
	s.prop13 = s.eVar5 = scCnst.mid;
	s.prop11 = scCnst.urlDirectory[0];
	s.prop12 = scCnst.urlDirectory[1];	
	return s;
}

function setStl(){
	s.linkTrackVars	= "prop13,prop11,prop12,prop46,prop47,prop60";
	s.linkTrackVars	= s.linkTrackVars + ",eVar5,eVar46,eVar47,eVar50,eVar60,visitorID,events";
}

/* ==============================���劮�����������X�g 14/9/8�ǉ� */
function kento_tsuika_cp_s01580() {
	setStl();s.tl(true,'o','kento_tsuika_cp_s01580');
}

function kento_tsuika_cp_s01590() {
	setStl();s.tl(true,'o','kento_tsuika_cp_s01590');
}

/* ============================== N�v�������؂�I�t�@�[ 14/10/6�ǉ� */
function expiredOfferClick(prjCd,msgId){
	setStl();s.tl(this,'o',prjCd + '_' + msgId + '_' + 'expiredOfferClick');
}

/* ============================== ����A���P�[�g 14/10/6�ǉ� */
function oubo_share_nyuryoku() {
	setStl();s.tl(true,'o','oubo_share_nyuryoku');
}

function oubo_share_kanryo() {
	setStl();s.tl(true,'o','oubo_share_kanryo');
}

/* ============================== �T�[�r�X�Љ�I�� 14/10/29�ǉ� */
if(window.location.pathname == "/rnc/docs/cp_s15600.jsp" || window.location.pathname == "/rnc/docs/cp_i15600.jsp" ){
	$("[name='scout_reg']").click(function(){
		var radioVal = "";
		if( $("input[name='reg_f']:checked").val() ){
			s.setCk("sc_gui1_Chk",$("input[name='reg_f']:checked").val(),1);
		}
	});
}

/* ============================== ����N�ꗗ �����ۑ��{�^���N���b�N 14/11/1�ǉ� */
if(typeof(jQuery)!="undefined"){
	$("#joken_hozon_box input").click(function() {
		setStl();s.tl(true,'o','ngen_joken_hozon');
	});
}
/* ============================== PC�T�C�g �`���[�g���A���v�� 14/11/1 �ǉ�*/
function sc_tutorial_track(lnkNm){				
	setStl();
	s.linkTrackVars = s.linkrackVars + ',prop16';
	s.prop16 = lnkNm;
	s.tl(this,'o', lnkNm);
}				

/* ============================== High-LowsPRJ N5+ 14/11/6�ǉ� */
function kento_tsuika_cp_s01800() {
	setStl();s.tl(true,'o','kento_tsuika_cp_s01800');
}

function kento_tsuika_cp_s01801() {
	setStl();s.tl(true,'o','kento_tsuika_cp_s01801');
}

function kento_tsuika_cp_s00700() {
	setStl();s.tl(true,'o','kento_tsuika_cp_s00700');
}

function kento_tsuika_cp_s00890() {
	setStl();s.tl(true,'o','kento_tsuika_cp_s00890');
}

function kento_tsuika_cp_s02040() {
	setStl();s.tl(true,'o','kento_tsuika_cp_s02040');
}

function kento_tsuika_cp_s02200() {
	setStl();s.tl(true,'o','kento_tsuika_cp_s02200');
}

function kento_tsuika_cp_s00650() {
	setStl();s.tl(true,'o','kento_tsuika_cp_s00650');
}

/* ============================== ATS�A�g PC�p 14/12/09�ǉ� */ 
function atsApp(cmpnyUrl){
	setStl();
	s.linkTrackVars = s.linkTrackVars + ',events';
	s.linkTrackEvents='event32';
	s.tl(this,'o','atsApp');
}


/* ============================== �p�l��F/S */ 
function sc_srcpanel_open(lnkNm){				
	setStl();
	s.linkTrackVars = s.linkTrackVars + ',prop28';
	s.prop28 = lnkNm;
	s.tl(this,'o', lnkNm);
}

/** ================= CR40�����N */
if(s.pageName.match(/^rnntop_/)){
	$("a[href *='/cr40/']").click(function(){
		setStl();s.tl(this,'o', "RNN_to_cr40");
	});
}

/* ============================== �ʐڊm�񋁐lFS 15/2/16�ǉ�  */ 
function menkaku_kibou_nyuryoku() {
	setStl();s.tl(true,'o','menkaku_kibou_nyuryoku');
}
function menkaku_kibou_kanryo() {
	setStl();s.tl(true,'o','menkaku_kibou_kanryo');
}

/*=============================== RNN Resume Download 15/02/18 Add*/
function rnn_rsm_easy_dl(docType){
	var q,lnkNm;
	setStl();
	q = s.getQueryParam('fr');
	(q)?lnkNm = docType + "_pdt":lnkNm = docType + "_rnn";
	(scCnst.poOpn=="1")?lnkNm = lnkNm + "_on":lnkNm = lnkNm + "_off";
	s.linkTrackVars = s.linkTrackVars + ',events';
	s.linkTrackEvents='event37';
	s.events='event37';
	s.tl(this,'o',lnkNm);

	s.linkTrackEvents='';
	s.events = "";
}


/*** ====  RNN_Movie */
function sc_rnnmovietrack(lnkNm,ytID){
	setStl();
	s.linkTrackVars = s.linkTrackVars + ',events';
	s.tl(this,'o', lnkNm);
	if(typeof(ytID) != "undefined"){
		if(ytID){
			switch(ytID){
				case "HgbBgx8Cho4":configYT(ytID,132,lnkNm);break;
				case "bGX0lSdLUlk":configYT(ytID,130,lnkNm);break;
				case "zKjVVar5gkY":configYT(ytID,141,lnkNm);break;
			}
		}
	}
}

/** ===RNN Movie(Youtube Config) 15/02/20*/
function configYT(vid,vlen,lnkTrack){

	var player,timer,videoID,maxTime;
	videoID=vid;
	maxTime=vlen;

	function fGetScript(){
		$.ajax({
			url:"https://www.youtube.com/player_api/",
			dataType:"script",
			success:function(data){
				//dbg("done");
			},
			error:function(xhr, status, thrown) {
				//dbg(xhr);
				fGetScript();
			}
		}); 
	}
	fGetScript();
	/* Youtube Player Ready */
	window.onYouTubeIframeAPIReady=function() {
		loadPlayer(videoID);
	}

	/* Youtube Player Start */
	function loadPlayer(videoID) {
		//dbg("loadPlayer("+videoID+")");
		if(!player){
			player = new YT.Player(
				'player',{
					width: '854',
					height: '480',
					videoId: videoID,
					events: { 
						"onReady": onPlayerReady,
						"onStateChange": onPlayerStateChange
					},
					playerVars: {
						"autoplay":1,
						"rel":0,
						"showinfo":1,
						"controls":1
					}
				}
			);
		}else{
			player.loadVideoById(videoID);
		}
	}
	function onPlayerReady(event){
		player.playVideo();
		timer = setInterval(autoYtTrack,1000);
	}
	var autoYtTrack = function(){
		var curtime=player.getCurrentTime();
		$("#status").html(curtime);
		if(curtime != 0){
		var rate = Math.floor(curtime/maxTime*100);
			switch(rate){
				case 10 : ytSend(getStatus(1));break;
				case 20 : ytSend(getStatus(1));break;
				case 30 : ytSend(getStatus(1));break;
				case 40 : ytSend(getStatus(1));break;
				case 50 : ytSend(getStatus(1));break;
				case 60 : ytSend(getStatus(1));break;
				case 70 : ytSend(getStatus(1));break;
				case 80 : ytSend(getStatus(1));break;
				case 90 : ytSend(getStatus(1));break;
			}
		}
	}

	function getStatus(st){
	/** Player StatusTracking*/
		if(st == 3){
			return "Movie_Track_Complete";
		}else{
			var curtime=player.getCurrentTime();
			if(curtime == 0){
				return "Movie_Start"
			}else{
				var rate = curtime/maxTime;
				if(rate > 0 && rate <= 0.1){return "Movie_Track_Under10";
				}else if(rate > 0.1 && rate <= 0.2){return "Movie_Track_10";
				}else if(rate > 0.2 && rate <= 0.3){return "Movie_Track_20";
				}else if(rate > 0.3 && rate <= 0.4){return "Movie_Track_30";
				}else if(rate > 0.4 && rate <= 0.5){return "Movie_Track_40";
				}else if(rate > 0.5 && rate <= 0.6){return "Movie_Track_50";
				}else if(rate > 0.6 && rate <= 0.7){return "Movie_Track_60";
				}else if(rate > 0.7 && rate <= 0.8){return "Movie_Track_70";
				}else if(rate > 0.8 && rate <= 0.9){return "Movie_Track_80";
				}else if(rate > 0.9 && rate < 1.0){return "Movie_Track_90";
				}else{return "";
				}
			}
		}
	}

	function onPlayerStateChange(event) {
		/* �v���[���[�̃X�e�[�^�X���ύX�����x�ɔ��� */
		/* �����l, �萔 */

		/* �萔 */
		switch(event.data){
			/* 0 (�Đ��I���i���Ō�܂ōĐ������j) */
			case YT.PlayerState.ENDED:ytSend(getStatus(3));break;

			/* 1 (�Đ���) */
			case YT.PlayerState.PLAYING:ytSend(getStatus(1));break;

			/* 2 (�ꎞ��~���ꂽ) */
			case YT.PlayerState.PAUSED:
				//ytSend(getStatus(2));
				break;
			/* 3 (�o�b�t�@�����O��) */
			case YT.PlayerState.BUFFERING:break;

			/* 5 (���o�����ꂽ) */
			case YT.PlayerState.CUED:break;

			/* -1 (���X�^�[�g�A���̓���ɐ؂�ւ������Ȃ�) */
			case -1:
			//player.playVideo(); /* �Đ��J�n */
			break;
		}
	}
}

function ytSend(status){
	setStl();
	s.linkTrackVars = s.linkTrackVars + ',events,eVar45';
	s.linkTrackEvents='event40';
	if(status){(status.match(/Start/))?s.events="event40":s.events="";}
	s.eVar45 = status;
	s.tl(true,'o',status);
}

/* =  ����t�H�[�� ���僌�W�����J�@= */
if(window.location.pathname.match(/cp_s01410/)){
	//Deafult Set
	var attrRsm = $("div#js-resume").children("div").eq(0).attr("class");
	if(attrRsm){
		if(attrRsm.match(/nowOpen/)){s.setCk("AppResume","Resume_Open",1);	
		}else{s.setCk("AppResume","Resume_Close",1);	
		}
	}else{s.setCk("AppResume","No_AppResume_Add",1);
	}
	s.setCk("AppResume","Resume_Open",1);
	$("div#js-resume").children("div").eq(0).click(function(){
		if($(this).attr("class").match(/nowOpen/)){
			//Close
			s.setCk("AppResume","Resume_Close",1);
		}else{
			//Open
			s.setCk("AppResume","Resume_Open",1);
		}
		s.tl(true,"o","AppResume_OpenStatus_" + s.getCk("AppResume"));
	});
}


/*=============================�@���W�����o�^��� �VSTEP3*/
/** PO�o�^event��Pv�v���ɕύX */
function sc_rsm_ui_po(){
	setStl();
	/**
	s.linkTrackVars = "events";
	s.linkTrackEvents = "event11";
	s.events = "event11";
	s.tl(true,'o','nextpf_po_pc');
	**/
}

/* ============================== �T�[�r�X�I��1�@�V*/
function sc_rsm_ui_gui_set(){
	var radioVal = "";
	if( $("input[name='reg_f']:checked").val() == "1"){
		setStl();
		s.linkTrackEvents = "event34";
		s.events = "event34";
		s.tl(true,'o','nextpf_gui_pc');
	}else{
		setStl();
		s.tl(true,'o','nextpf_no_gui_pc');		
	}
}

/* ============================== �T�[�r�X�I��2�@�V*/
function s_rsm_ui_gui_reg(){
	setStl();
	s.tl(true,'o','nextpf_bizIQ_Page');
}

/* ============================== PC�V�K����������l�{��FS 15/6/23�ǉ�  */
function sc_rnnrecommendtrack(lnkNm){				
	setStl();s.tl(this,'o', lnkNm);
}

//Good Point Set
if(window.location.pathname.match(/cp_s01410/)){
	$("#gp_on").click(function(){
		s.setCk("gp_diag_rslt_at_set","1",1);
		s.setCk("gp_diag_rslt_at_set_rqmt",s.eVar26,1);
	});
	$("#gp_off").click(function(){
		s.setCk("gp_diag_rslt_at_set","0",1);
		s.setCk("gp_diag_rslt_at_set_rqmt",s.eVar26,1);
	});
}

/* ============================== �V�K����������l�{�� 15/6/25�ǉ�  */
function sc_rnnrecommendtrack(lnkNm){				
	setStl();s.tl(this,'o', lnkNm);
}

/* ============================== �J�X�^�������N�ėp 15/6/25�ǉ�  */
function sc_customlink_common(lnkNm){				
	setStl();s.tl(this,'o', lnkNm);
}
