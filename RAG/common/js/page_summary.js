//ページサマリ名称を設定

function getSumName(){
	var p0,p1, p2, p3, p4, f1, f2, f3, f4;
	//pagename相当の値が来ている場合
	if(typeof(sp_ef_pagename) != "undefined"){
		p0 = sp_ef_pagename;
		p1 = p0.split(":")[1];
		p2 = p0.split(":")[2];
		p3 = p0.split(":")[3];
		p4 = p0.split(":")[4];		
	}else{
		p0 = location.pathname;
		p1 = p0.split("/")[1];
		p2 = p0.split("/")[2];
		p3 = p0.split("/")[3];
		p4 = p0.split("/")[4];
	}

	//第一階層
	if(p1){
		switch(p1){
		//有料系全て
			case "info" :
				return "lp";
		//検索系＆求人詳細
			case "kensaku":
				f1 = "kensaku";
				break;
		//EF入力
			case "entry":
				f1 = "entry";
				break;
		//ガイド系
			case "guide":
				f1="guide";
				break;
				//return "guide";
		//サービス系
			case "service":
				f1 = "service";
				break;
				//return "service";
		//はじめて
			case "hajimete":
				return "hajimete";
		//イベント系
			case "event":
				return "event";
		//転職系
		//2013.12.16 Modified
			//MRメディカル転職
			case "medical":
				//return "sub_change";
				return "ch_medical";
			//IT Webエンジニア転職
			case "engineer":
				//return "sub_change";
				return "ch_engineer";
			//次世代LDMGR転職
			case "kanbu":
				//return "sub_change";
				return "ch_kanbu";
			//第二新卒転職
			case "nisotsu":
				//return "sub_change";
				return "ch_nisotsu";
			//外資グローバル転職
			case "global":
				//return "sub_change";
				return "ch_global";
			//UIターン転職
			case "uiturn":
				//return "sub_change";
				return "ch_uiturn";
			//上記以外のページ
			default :
				return "";
		//お問い合わせ
			case "otoiawase":
				f1 = "otoiawase";
				break;
		//2013.07.26 Add
		//キーワード検索一覧
			case "keywords":
				return "kwd_kensaku";
		//レジュメナビ
			case "resumenavi":
				return "resumenavi";
		//職歴書サンプル
			case "sample":
				f1 = "sample";
				break;
		//卒業年早見表
			case "attention":
				return "ef_attention";
		//ダウンロード
			case "download":
				return "download";
		//2013.12.16 Add
		//スマホページ	
			case "smp":
				f1 = "smp";
				break;
		//メルマガ
			case "mailmaga":
				return "mailmaga";
		//用語
			case "glossary":
				return "glossary";
		//MAP
			case "map":
				return "map";
		//コンタクト
			case "contact":
				return "contact";
		//エラー
			case "error":
				f1 == "error";
				break;
		}
	}else{
		//RAGトップ
		return "top";
	}

	//第二階層
	if(p2){
		//第一階層が「検索」
		if(f1 == "kensaku"){
			switch(p2){
				//職種検索
				case "syokusyu":
					return "kensaku";
				//業界検索
				case "gyoukai":
					return "kensaku";
				//勤務地検索
				case "kinmuchi":
					return "kensaku";
				//企業名検索
				case "kyujin":
					f2 = "kyujin";
					break;
				//キーワード検索
				case "keyword":
					return "kensaku";
				//2013.12.16 Add
				//新着
				case "shinchaku":
					return "shinchaku";
				//その他
				default:
					return "";
			}
		}
		//第一階層が「EF」
		if(f1 == "entry"){
			switch(p2){
				//PC用
				case "ts":
					f2 = "ts";
					break;
				//2013.12.16 Add
				//SP用
				case "tssmp":
					f2 = "tssmp";
					break;
				//SP用仮保存
				case "tssmprsv":
					f2 = "tssmprsv";
					break;
				//その他
				default:
					return "";
			}
		}
		//第一階層が[サービス紹介]
		if(f1 == "service"){
			return "service";
		}
		//第一階層が[転職成功ガイド]
		if(f1 == "guide"){
			return "guide";
		}
		//第一階層が[お問い合わせ]
		if(f1 == "otoiawase"){
			return "otoiawase";
		}
		//2013.07.26 Add
		//第一階層が[職歴書サンプル]
		if(f1 == "sample"){
			switch(p2){
				//経歴書
				case "keirekisho":
					return "ef_sample";
			}
		}

		//2013.12.16 Add
		//第一階層が[smp]
		if(f1 == "smp"){
			switch(p2){
				//サービス
				case "service":
					f2 = "service";
					break;
				//初めて
				case "hajimete":
					return "smp_hajimete";
				//お問い合わせ
				case "otoiawase":
					return "smp_otoiawase";
			}
		}

		//第一階層が[error]
		if(f1 == "smp"){
			//タイムアウト
			if(p2.match(/session_timeout.html/)){
				return "error_session_timeout";				
			}
		}

	}else{
	//第二階層無しの場合
		//検索一覧グロナビ
		if(f1 == "kensaku"){
			return "gnav_kensaku";
			//return "kensaku";
		}
		//サービス紹介グロナビ
		if(f1 == "service"){
			return "gnav_service";
		}
		//転職成功ガイドグロナビ
		if(f1 == "guide"){
			return "gnav_guide";
		}
		//お問い合わせ
		if(f1 == "otoiawase"){
			return "gnav_otoiawase";
		}
		//2013.12.16 Add
		//スマホページ
		if(f1 == "smp"){
			return "smp_top";
		}
		//SP用エントリー
		if(f1 == "tssmp"){
			return "smp_ef_input";
		}

	}

	//第三階層
	if(p3){
		//第一階層が[検索]
		if(f1 == "kensaku"){
			//第二階層が[求人]
			if(f2 == "kyujin"){

				//一覧のindexを辿る
				if(p3.match(/index\.html/)){
					return "kensaku";
				//index.html以外のhtmlファイル 求人詳細
				}else if(p3.match(/\.html/)){
					return "kyujin";
				}else{
				//検索一覧ページ
					return "kensaku";
				}
			}
		}
		//第一階層が「EF」
		if(f1 == "entry"){
			//第二階層が[PC用]
			if(f2 == "ts"){
				//step1
				if(p3.match(/index.html/)){
					return "ef_input";
				}
				//2013.07.26 Add
				//ef修正
				if(p3.match(/modify.html/)){
					return "ef_modify";
				}
				//プロフィール入力
				if(p3.match(/profile.html/)){
					return "ef_profile";
				}
				//EF確認
				if(p3.match(/confirm.html/)){
					return "ef_confirm";
				}
				//EF完了
				if(p3.match(/complete.html/)){
					return "ef_complete";
				}
			}

			//2013.12.16 Add
			//第二階層が[SP用エントリー]
			if(f2 == "tssmp"){

				//step1
				if(p3.match(/index.html/)){
					return "smp_ef_input";
				}
				//ef修正
				if(p3.match(/modify.html/)){
					return "smp_ef_modify";
				}
				//プロフィール入力
				if(p3.match(/profile.html/)){
					return "smp_ef_profile";
				}
				//EF確認
				if(p3.match(/confirm.html/)){
					return "smp_ef_confirm";
				}
				//EF完了
				if(p3.match(/complete.html/)){
					return "smp_ef_complete";
				}

			}

			//2013.12.16 Add
			//第二階層が[SP用仮保存]
			if(f2 == "tssmprsv"){

				if(p3.match(/error/)){
					return "smp_ef_rsv_input_err";
				}
				if(p3.match(/login_error/)){
					return "smp_ef_rsv_login_err";
				}
				if(p3.match(/login/)){
					if(p4){
						if(p4.match(/error/)){
							return "smp_ef_rsv_login_err";
						}else{
							return "smp_ef_rsv_login";
						}
					}else{
						return "smp_ef_rsv_login";
					}
				}

				if(p3.match(/step2_1/)){
					if(p4){
						if(p4.match(/error/)){
							return "smp_ef_rsv_profile1_err";
						}else{
							return "smp_ef_rsv_profile1";
						}
					}else{
						return "smp_ef_rsv_profile1";
					}
				}
				if(p3.match(/step2_2/)){
					if(p4){
						if(p4.match(/error/)){
							return "smp_ef_rsv_profile2_err";
						}else{
							return "smp_ef_rsv_profile2";
						}
					}else{
						return "smp_ef_rsv_profile2";
					}
				}
				if(p3.match(/step2_3/)){
					if(p4){
						if(p4.match(/error/)){
							return "smp_ef_rsv_profile3_err";
						}else{
							return "smp_ef_rsv_profile3";
						}
					}else{
						return "smp_ef_rsv_profile3";
					}
				}
				if(p3.match(/confirm/)){
					return "smp_ef_rsv_confirm";
				}
				if(p3.match(/modify/)){
					return "smp_ef_rsv_modify";
				}
				if(p3.match(/complete/)){
					return "smp_ef_rsv_complete";
				}
			}

		}

		//第一階層が「smp」
		if(f1 == "smp"){
			//第二階層が[サービス]
			if(f2 == "service"){
				if(p3.match(/chigai/)){
					return "smp_service_chigai";
				}
				if(p3.match(/index/)){
					return "smp_service";
				}
			}
		}

	}else{

	//第三階層無しの場合
		//第一階層が[検索]
		if(f1 == "kensaku"){
			//第二階層が[求人]
			if(f2 == "kyujin"){
				return "kensaku";
			}
		}

		//第一階層が[EF]
		if(f1 == "entry"){
			//第二階層が[PC用]
			if(f2 == "ts"){
				return "ef_input";
			}
			//第二階層が[SP用エントリー]
			if(f2 == "tssmp"){
				return "smp_ef_input";
			}

		}
	}
}

//var prop51Name, eVar51Name, eVar52Name;



	

//eVar51の値をセット
// 2013.07.26 除外
//if(prop51Name == "kensaku")
//		(function(){
//			document.write('<script type="text/javascript">sc_eVar51="'+ prop51Name +'"</script>');
//		})();


//eVar52の値をセット（2014.07.25除外）
//if(prop51Name == "kyujin")
//		(function(){
//			document.write('<script type="text/javascript">sc_eVar52="'+ prop51Name +'"</script>');
//		})();

