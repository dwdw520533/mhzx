/* 全局统计变量 */
var _wmrid;
var _gaq = _gaq || [];  //谷歌
var _hmt = _hmt || [];  //百度
var _mtxq = _mtxq || [];  //完美
var _smq = _smq || [];  //SiteMaster
var _CWiQ = _CWiQ || []; //
(function () {
    var u = document.location;
    if (/^file:/.test(u) || u.hostname.indexOf('localhost') > -1 || /\d+\.\d+\.\d+\.\d+/.test(u.hostname) || /test\.sys\.wanmei\.com/.test(u.hostname)) {//本地地址或IP地址
        return;
    }
    var g = {};
    g.href = g._href = u.href;
    g.pathname = g._pathname = u.pathname;
    g.protocol = ('https:' == u.protocol) ? 'https://' : 'http://';
    (function () {
        var extArr = ['.com.cn', '.com', '.cn', '.net', '.tv', '.org', '.cc', '.info', '.in.th'];
        var len = extArr.length;
        var ext, res;
        for (var i = 0; i < len; i++) {
            if (u.hostname.indexOf(extArr[i]) !== -1) {
                ext = extArr[i];
                res = u.hostname.replace(ext, '');
                break;
            }
        }
        var _domain = res.substring(res.lastIndexOf('.') + 1) + ext
        g._domain = _domain;
        g.domain = '.' + _domain;
        g.hostname = g._hostname = u.hostname == _domain ? 'www.' + _domain : u.hostname;
    })();
    /* 专题wa统计处理函数 */
    var formatUrl_wanmei_event = function () {
        var reg = '^http://(.*?)' + g.domain + '/(.*?)/';
        reg = new RegExp(reg);
        var p = g.href.replace('mslr/index.html', 'ms/index.html').match(reg);
        var _href = g.href.replace(reg, 'http://$2' + g.domain + '/$1/');
        var _hostname = (p[2] == 'wanmei' || p[2] == 'dota2' ? 'www' : p[2]) + g.domain;
        var _pathname = g.pathname.replace(/\/.*?\//, '/' + p[1] + '/');
        return {
            _href: _href,
            _hostname: _hostname,
            _pathname: _pathname
        }
    };
    /* 全局配置文件 注意上下级顺序 */
    var analyticsConfig = [
		{
		    r: '*',
		    wa: {
		        domainName: g.domain,
		        customVar: [['_trackPageview']]
		    },
		    ga: {
		        customVar: function () {
		            _gaq.push(['_setDomainName', g.domain])
		            _gaq.push(['_setAllowAnchor', true]);
		            _gaq.push(['_addOrganic', 'so', 'q']);
		            _gaq.push(['_addOrganic', 'baidu', 'word']);
		            _gaq.push(['_addOrganic', 'soso', 'w']);
		            _gaq.push(['_addOrganic', 'yodao', 'q']);
		            _gaq.push(['_addOrganic', 'sogou', 'query']);
		            _gaq.push(['_addOrganic', 'gougou', 'search']);
		            if (g.hostname != 'cs.wanmei.com') {
		                var d = g._domain.split('.');
		                _gaq.push(['_addIgnoredRef', g._domain]);
		            }
		            if (g.pathname.indexOf('error') >= 0 && document.referrer) {
		                _gaq.push(['_trackEvent', '404', document.referrer]);
		            }
		            _gaq.push(['_trackPageview']);
		        },
		        beforeLoad: function () {
		            var srcPage = getDomain(document.referrer).replace(/\./g, '-');
		            if (srcPage == '') {
		                srcPage = 'notget';
		            }
		            var parameter = get_parameter('dida');
		            if (parameter && /^x/.test(parameter)) {
		                window.location.hash = 'utm_source=' + srcPage + '&utm_medium=ad' + '&utm_campaign=' + parameter;
		            }
		        }
		    },
		    sm: {
		        customVar: function () {
		            _smq.push(['_setDirectoryIndex', '']);
		            _smq.push(['_setClickTimeOut', 200]);
		            _smq.push(['pageview']);
		        }
		    },
		    miaozhen: {
		        customVar: function () {
		        }
		    }
		},
		{
		    r: '(zxsj|w).wanmei.com',
		    newga: { siteId: 'UA-52120841-15' },
			wmrid: 'RP77760929',
		    h: { siteId: '2d67c764d18c59ec875ae8750379ead6' }
		},
		{
		    r: 'www.wanmei.com',
		    h: { siteId: 'ced744dfae7a0fe07aadbd98133e242b' }
		},
		{
		    r: 'passport.wanmei.com',
		    h: { siteId: '2451e91cabdc44e0611c28a8ee93af90' }
		},
		{
		    r: 'pay.wanmei.com',
		    h: { siteId: '4389c553609aacc5ded73fe148a82e8b' }
		},
		{
		    r: 'pay.wanmei.com/e/dota2/',
		    ga: false
		},
		{
		    r: 'cpay.wanmei.com',
		    h: { siteId: 'e74c01b7cd83f4762bb10c1eb3c08e9e' }
		},
		{
		    r: '(zhuxian|zhuxian2).wanmei.com',
		    ga: { siteId: 'UA-33602282-1' },
			newga: {siteId:'UA-52120841-1'},
		    wmrid: 'RP74569347',
		    h: { siteId: '882c9327d5c903b937fc2cd1def59080' }
		},
		{
		    r: 'w2i.wanmei.com',
		    ga: { siteId: 'UA-37136860-1' },
			newga: {siteId:'UA-52120841-2'},
		    wmrid: 'RP75591501',
		    h: { siteId: '01bd6a5a533824752397036fe5595d07' }
		},
		{
		    r: 'wulin2.wanmei.com',
		    h: { siteId: 'aab66f9083b0326fef2d34ba60d42670' },
		    ga: { siteId: 'UA-37455417-1' },
			newga: {siteId:'UA-52289206-7'},
		    wmrid: 'RP32196602'
		},
		{
		    r: '(mhzx2|xmhzx|mhzx).wanmei.com',
		    //sm: { siteId: '24FF9659' },
		    ga: { siteId: 'UA-37456371-1' },
			newga: {siteId:'UA-52120841-8'},
		    miaozhen: { siteId: '45364' },
		    wmrid: 'RP84591218',
		    h: { siteId: '53255cf4bd34dd85678a015e1f9eedbf' }
		},
		{
		    r: 'shenmo.wanmei.com',
		    ga: { siteId: 'UA-37455927-1' },
			newga: {siteId:'UA-52120841-4'},
		    miaozhen: { siteId: '45365' },
		    wmrid: 'RP94237145',
		    h: { siteId: 'f7e9306a4c12f492674dc7214ee67945' }
		},
		{
		    r: 'xa.wanmei.com',
		    h: { siteId: 'f294ee00163d5224901273d4de286262' },
		    ga: { siteId: 'UA-37449295-1' },
			newga: {siteId:'UA-52120841-10'},
		    wmrid: 'RP51714680'
		},
		{
		    r: 'seiya.wanmei.com',
		    h: { siteId: '0aaceecf316ceb51a43b380de4ee6e36' },
		    ga: { siteId: 'UA-37469501-1' },
			newga: {siteId:'UA-52120841-9'},
		    wmrid: 'RP69225691'
		},
		{
		    r: 'sdxl.wanmei.com',
		    //sm: { siteId: '84A2E45E' },
		    ga: { siteId: 'UA-37457809-1' },
			newga: {siteId:'UA-52120841-3'},
		    wmrid: 'RP56028681',
		    h: { siteId: '9c520816533cec665d942fdfcf8891b8' }
		},
		{
		    r: 'sd.wanmei.com',
		    h: { siteId: 'f83f308f79f401708b4eed62d960e926' },
		    ga: { siteId: 'UA-40875069-1' },
			newga: {siteId:'UA-52120841-12'},
		    wmrid: 'RP06627742',
		    h: { siteId: '2f46b16c5c697a24d3d634ddbdacd420' }
		},
		{
		    r: 'sgcq.wanmei.com',
		    //sm: { siteId: 'D8CA2654' },
		    ga: { siteId: 'UA-37453083-1' },
		    wmrid: 'RP87945669',
		    h: { siteId: '12691b7d4a20e35bfd4bba9979fcba9c' },
			newga: {siteId:"UA-52120841-5"}
		},
		
		{
		    r: '(nw|wdzy).wanmei.com',
		    ga: { siteId: 'UA-37441077-1' },
			newga: {siteId:'UA-52289206-5'},
		    wmrid: 'RP17310732',
		    h: { siteId: '9633e231af1adad6e2d3e09d670b0a7b' }
		},
		{
		    r: 'xljz.wanmei.com',
		    ga: { siteId: 'UA-37442089-1' },
			newga: {siteId:'UA-52289206-6'},
		    wmrid: 'RP21485908'
		},
		{
		    r: 'rwpd.wanmei.com',
		    ga: { siteId: 'UA-37450630-1' },
			newga: {siteId:'UA-52289206-3'},
		    wmrid: 'RP47825737',
		    h: { siteId: '02d093fdc3439d71345e5d7a713d9c88' }
		},
		{
		    r: 'yt.wanmei.com',
		    ga: { siteId: 'UA-37444280-1' },
			newga: {siteId:'UA-52289206-1'},
		    wmrid: 'RP18084176'
		},
		{
		    r: 'xlzj.wanmei.com',
		    ga: { siteId: 'UA-37447362-1' },
			newga: {siteId:'UA-52289206-4'},
		    wmrid: 'RP54764503'
		},
		{
		    r: '(sg|chibi).wanmei.com',
		    ga: { siteId: 'UA-37458406-1' },
			newga: {siteId:'UA-52120841-7'},
		    wmrid: 'RP60043954',
		    h: { siteId: 'ff059e25d7590459c5ed750b5167042b' }
		},
		{
		    r: 'kdxy.wanmei.com',
		    ga: { siteId: 'UA-37464125-1' },
			newga: {siteId:'UA-52289206-2'},
		    wmrid: 'RP95020600'
		},
		{
		    r: 'world2.wanmei.com',
		    ga: { siteId: 'UA-37457385-1' },
			newga: {siteId:'UA-52289206-8'},
		    wmrid: 'RP52060072',
		    h: { siteId: 'aef03204fbb4773b15365f8b22bfb288' }
		},
		{
		    r: 'sgsj.wanmei.com',
		    ga: { siteId: 'UA-37462233-1' },
			newga: {siteId:'UA-52120841-6'},
		    wmrid: 'RP35968753',
		    h: { siteId: 'e1bbf830daec5f7b1ae3d1af5024385d' }
		},
		{
		    r: '(cs|vip).wanmei.com',
		    ga: { siteId: 'UA-37455462-1' },
			newga: {siteId:'UA-52289206-9'}
		},
		{
		    r: 'hr.wanmei.com',
		    ga: { siteId: 'UA-37455462-2' }
		},
		{
		    r: 'sw.wanmei.com',
		    ga: { siteId: 'UA-40333031-1' },
			newga: {siteId:'UA-52120841-11'},
		    wmrid: 'RP05186867',
		    h: { siteId: '86cc9c3f618d2ef92be896c2115887e9' }
		},
		{
		    r: 'ts.wanmei.com',
			newga: {siteId:'UA-52028519-2'},
		    wmrid: 'RP76949206'
		},
		{
			r: 'xbox.wanmei.com',
			h: {siteId: '8d4be99a4944100892dee81c71cf01c7'}
		},
		{
			r: 'sgcqjd.wanmei.com',
			h: {siteId: '729e8d69f6bc684bed04f9113eb48d88'}
		},
		{
			r: 'hex.wanmei.com',
			wmrid: 'RP28097540',
			h: {siteId: 'cd50def46ddb63d213147d1986da02b4'}
		},
		{
			r: 'store.wanmei.com',
			h: {siteId: '75c81ab081a0336322fd7b033d82ad48'}
		},
		{
			r: '/i.wanmei.com',
			h: {siteId: 'abd911987d468d4394a17911c7d0d47f'}
		},
        {
			r: '/zx.wanmei.com',
			h: {siteId: 'ae97b400f1f05b27de22fe147269a33a'}
		},
		{
			r: 'panzar.wanmei.com',
			h: {siteId: '85f836c243bc7553e3babef3af44da60'}
		},
		/*
		{
			r: 'play.wanmei.com',
			h: {siteId: '807169bce2677a3694dd9223e4cb9ff5'}
		},
		*/
		{
			r: 'pgp.wanmei.com',
			wmrid: 'RP76902891',
			h: {siteId: '84d6f11d57b204c972c7166da291e5ef'}
		},
		{
			r: '/t.wanmei.com',
			h: {siteId: '882b79919b91109217f3b6b4c5186826'}
		},
		{
		    r: 'dota2.com.cn',
		    ga: { siteId: 'UA-37455460-1' },
			newga: {siteId: 'UA-52291309-1'},
		    h: { siteId: '4ff9dc38bbcfc8d79bb8cd61d9972c32' },
			wmrid: 'RP96736316'
		},
		{
		    r: 'dota2.com.cn/(client|launcher)/',
		    h: false
		},
		{
		    r: 'zsg.173.com',
		    h: { siteId: '2857b60b9a762f1691884f30b93cbd60' },
		    ga: { siteId: 'UA-37439981-1' },
			newga: {siteId:'UA-52291005-4'}
		},
		{
		    r: 'ms.173.com',
		    //sm: { siteId: '89FF04E9' },
		    h: { siteId: '5c9f2f47bf709a51861464ceb09f35c7' },
		    ga: { siteId: 'UA-37455662-1' },
			newga: {siteId:'UA-52291005-3'}
		},
		{
		    r: 'chuhan.173.com',
		    h: { siteId: 'a7c5f1be98f9252043c4fa62d3afaf14' },
		    ga: { siteId: 'UA-37456017-1' },
			newga: {siteId:'UA-52291005-2'}
		},
		{
		    r: 'king.173.com',
		    h: { siteId: '3ddcc67d3c0381b0c7630ccd14f30da6' }
		},
		{
		    r: 'www.173.com',
		    h: { siteId: '891e751773c207cf69ec4ee77c4072b8' },
		    ga: { siteId: 'UA-37907260-2' }
		},
		{
		    r: '(t|touch).173.com',
		    h: { siteId: '29375a76b4006806be39ebf81fe7498b' },
		    ga: { siteId: 'UA-39447761-1' },
			newga: {siteId:'UA-52291005-1'}
		},
		{
		    r: 'yt.173.com',
		    h: { siteId: '9763ff80a679049214ba1d97222de8e0' },
		    ga: { siteId: 'UA-37444280-2' },
			newga: {siteId:'UA-52291005-5'}
		},
		{
		    r: 'sdxl.173.com',
		    h: { siteId: 'f35f12563544cc9764e906951de93b05' }
		},
		{
		    r: 'war.173.com',
		    h: { siteId: '7e9e370cd106d1df2dc4489f66909398' }
		},
        {
            r: 'inf.173.com',
            h: { siteId: '479eefa48e813cf41347ccc530864253' },
			newga: {siteId:'UA-52291005-6'}
        },
		{
            r: 'wz.173.com',
			h: {siteId:  '1b7a61b6b14c4f5ac4e56dba2ddc5b4d'},
			newga: {siteId:'UA-55967177-1'}
        },
		{
		    r: 'chcard',
		    h: { siteId: 'c30fdcabcb4c6994b99049cb88421f28' }
		},
		{
		    r: 'sdyx.wanmei.com',
		    h: { siteId: 'c60df0a263f0537c14631210b8bea0c9' }
		},
		{
			r: 'ytxmz.wanmei.com',
			wmrid: 'RP36800591',
			h:{ siteId: '000260d4fc76a57c80a83e1009271e69'}	
		},
		{
			r: 'am.wanmei.com',
			wmrid: 'RP89965465',
			h:{ siteId: '40a7f46d6ae4080d3e57ecf0dab6cbe4'}	
		},
		{
			r: 'zzbq.wanmei.com',
			wmrid: 'RP76902891',
			h:{ siteId: 'f2e1405e26817cbccdb18959bb6533f0'}	
		},
		{
			r: 'uw.wanmei.com',
			h:{ siteId: '5c968246a28cfb921a5b6cd48740c348'}	
		},
		{
			r: 'cs.wanmei.com',
			h:{ siteId: 'd8bd7212ab82b89c74fef33ea18a2bf6'}	
		},
		{
			r: 'weixin.cs.wanmei.com',
			h: {siteId: 'f8538c7760ad0b4dc845716570cead50'}
		},
        {
			r: 'shushan.wanmei.com',
			h:{ siteId: '501cd1c53396e4d23838de3dd668ada6'}	
		},
		{
			r: 'hytj.wanmei.com',
			h:{ siteId: 'fdac6f740feaedcf93f98e3a42b5ebbb'}	
		},
		{
			r: 'csgo.wanmei.com',
			h:{ siteId: '7bee53880f2af7fc22a9bb871dcc7cb4'}	
		},
		//EVENT
		{
		    r: '*.dota2.com.cn/event*/',
		    wa: {
		        customVar: function () {
		            _mtxq.push(['_setHostName', g._hostname]);
		            _mtxq.push(['_trackPageview', g._pathname]);
		        }
		    }
		},
		{
		    r: '*.wanmei.com/event*/',
		    wa: {
		        customVar: function () {
		            _mtxq.push(['_setHostName', g._hostname]);
		            _mtxq.push(['_trackPageview', g._pathname]);
		        }
		    }
		},
		{
		    r: '*.173.com/event*/',
		    wa: {
		        customVar: function () {
		            _mtxq.push(['_setHostName', g._hostname]);
		            _mtxq.push(['_trackPageview', g._pathname]);
		        }
		    },
			h: {siteId:'9805233d663897efcc0ea32311838192'}
		},
        {
            r: 'event51.wanmei.com/(zhuxian|zhuxian2)/',
            h: { siteId: '24192124664d2b46342a22a98e5debc8' }
        },
        {
            r: 'event50.wanmei.com/(zhuxian|zhuxian2)/',
            h: { siteId: '957265b09accd689d4f9dc9639e864ed' }
        },
        {
            r: '*.wanmei.com/event50/',
            h: { siteId: 'dfc89a89afdfb7c70b681b7bf1c1ef5d' }
        },
        {
            r: '*.wanmei.com/event51/',
            h: { siteId: 'd42a52c1e19b80542922db8c8ab5ef2d' }
        },
        {
            r: '*.wanmei.com/eventie/',
            h: { siteId: 'ac8a74c79a6d558447abb76a730d6133' }
        },
        {
            r: '*.wanmei.com/event/',
            h: { siteId: '69fae2e80f54618b006b557e1d2b3159' }
        },
		{
            r: '/t.wanmei.com/event/',
            h: { siteId: '882b79919b91109217f3b6b4c5186826' }
        },
        {
            r: '*.wanmei.com/event20/',
            h: { siteId: '7665ba3a4f978677241c4eac2725ce1e' }
        },
        {
            r: '*.wanmei.com/event21/',
            h: { siteId: 'ba4c2b16935bb0a270939b4f51e0d38d' }
        },
		{
		    r: '*.173.com/event*/',
		    wa: {
		        customVar: function () {
		            _mtxq.push(['_setHostName', g._hostname]);
		            _mtxq.push(['_trackPageview', g._pathname]);
		        }
		    }
		},
		//BBS
		{
		    r: 'bbs.*.wanmei.com',
		    h: false
		},
		{
		    r: 'bbs.wanmei.com',
		    h: { siteId: 'abeeb946b7f5f1a44bae8f6291d794e0' }
		},
		{
		    r: 'zhuxian.bbs.wanmei.com',
		    h: { siteId: 'adf70c7654cf66cb8833381a9a6010ff' }
		},
		{
		    r: 'seiya.bbs.wanmei.com',
		    h: { siteId: '81d805e6e76c69aa270040bca82fc4c6' }
		},
		{
		    r: 'xa.bbs.wanmei.com',
		    h: { siteId: '44ebed2a194186d87a5e67252b92bc1a' }
		},
		{
		    r: 'shenmo.bbs.wanmei.com',
		    h: { siteId: '6d34bbc9b6e7dc25717de27d46c05664' }
		},
		{
		    r: 'sgcq.bbs.wanmei.com',
		    h: { siteId: '89efef9c355e79b901298257c7aaca7b' }
		},
		{
		    r: 'rwpd.bbs.wanmei.com',
		    h: { siteId: 'c65d7916ffb3b8d8208325ffdc9a30ad' }
		},
		{
		    r: 'mhzx2.bbs.wanmei.com',
		    h: { siteId: '53b8249bdfd3e7fd21eb9953c7afd38f' }
		},
        {
		    r: 'zx.bbs.wanmei.com',
		    h: { siteId: '7f2764e91a22da116c00e55f5871f4e3' }
		},
		{
		    r: 'wulin2.bbs.wanmei.com',
		    h: { siteId: 'd71c37f8208ec0e03648c84de62238ff' }
		},
		{
		    r: 'w2i.bbs.wanmei.com',
		    h: { siteId: '6bdd79c1dc5a72c454121bfdba58a082' }
		},
		{
		    r: 'sgsj.bbs.wanmei.com',
		    h: { siteId: '02b430c02f5544574babff450c15eee0' }
		},
		{
		    r: 'kdxy.bbs.wanmei.com',
		    h: { siteId: '6bc32ee2743a5c509ef146fe2921611b' }
		},
		{
		    r: 'sg.bbs.wanmei.com',
		    h: { siteId: 'b0f62e6ad9c14f049e7148b48eaeee45' }
		},
		{
		    r: 'world2.bbs.wanmei.com',
		    h: { siteId: 'ce75a27058c3c97ec8949a53e3f5c66c' }
		},
		{
		    r: 'sd.bbs.wanmei.com',
		    h: { siteId: '241ed6fc335b3051a65365e3a5e86ee5' }
		},
		
		{
		    r: 'nw.bbs.wanmei.com',
		    h: { siteId: '8a3778713d269744f24065de07eb8267' }
		},
		{
		    r: 'sdxl.bbs.wanmei.com',
		    h: { siteId: '347e23ef3fd33c13cbd6954411ca863e' }
		},
		{
		    r: 'bbs.173.com',
		    h: { siteId: '909d73a30b681855aad3930e89292512' }
		},
		{
		    r: 'hex.bbs.wanmei.com',
		    h: { siteId: '5f6bfe654ab0280635749bbe1d480ab5' }
		},
		{
		    r: 'sd.bbs.wanmei.com',
		    h: { siteId: '32725825d012c88d87b13a122c11d55c' }
		},
		{
		    r: 'sdyx.bbs.wanmei.com',
		    h: { siteId: '3ae9ca91860e3f804744ace6e297e9c9' }
		},
		{
		    r: 'ytxmz.bbs.wanmei.com',
		    h: { siteId: 'ff169d5707bd5e71dfbab67e305edf77' }
		},
		{
		    r: 'w.bbs.wanmei.com',
		    h: { siteId: '20b3ac21f99af4cdcb8a52117b087c34' }
		},
		{
		    r: 'zxsj.bbs.wanmei.com',
		    h: { siteId: '0b6c54678de9653d4ce8e5a9776c21ad' }
		},
        {
		    r: 'pgp.bbs.wanmei.com',
		    h: { siteId: '1dd88513e76a3aca621d28126d54ffd7' }
		},
        {
		    r: 'shushan.bbs.wanmei.com',
		    h: { siteId: 'd2909fbad9805e256a7ea2598fcffd52' }
		},
		{
			r: "playradio.cn",
			h: {siteId: "c424a7a54a58ddd70f33033478d2535b"}
		},
		{
			r: "jobs.wanmei.com",
			h: {siteId: "fdae4dac4f3769381c52da9650661f28"}
		},	
		{
			r: "event.laohu.com",
			h: {siteId: "b8b8f151a2b38a6e5e23723be02f287a"}
		},	
		{	
			r: "/arrival/",
			h: false
		},
		{	
			r: "/launcher/",
			h: false
		},
		{	
			r: "csgo.com.cn",
			h: {siteId:'46be175a5f482efa91259d6615336579'}
		},
		{	
			r: "hot.wanmei.com",
			h: {siteId:'729df1065e61a93fec160ae2bd1f5817'}
		},
		{	
			r: "zx.laohu.com",
			h: {siteId:'cb91a3b35af6745e7a9427c53d1abb76'}
		}
    ];
    var URL_formater = {
        'event*.wanmei.com': formatUrl_wanmei_event,
        'event*.173.com': formatUrl_wanmei_event,
				'event*.dota2.com.cn': formatUrl_wanmei_event
    };
    var extend = function () {
        var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options;
        if (target.constructor == Boolean) { deep = target; target = arguments[1] || {}; i = 2; }
        if (typeof target != "object" && typeof target != "function") { target = {} };
        if (length == i) { target = this; --i; }
        for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (var name in options) {
                    var src = target[name], copy = options[name];
                    if (target === copy) { continue; }
                    if (deep && copy && typeof copy == "object" && !copy.nodeType) {
                        target[name] = extend(deep, src || (copy.length != null ? [] : {}), copy);
                    } else if (copy !== undefined) { target[name] = copy; }
                }
            }
        }
        return target;
    };
    /* 判断数组 */
    var isArray = function (obj) {
        return Object.prototype.toString.apply(obj) === '[object Array]' ? true : false;
    };
    /* 加载JS */
    var loadJS = function (url, callback) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = url;
        s.onload = s.onreadystatechange = function () {
            if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
                s.onload = s.onreadystatechange = null;
                if (callback) callback();
                s.parentNode.removeChild(s);
            }
        };
        var doc = document.getElementsByTagName('head')[0];
        doc.appendChild(s);
    };
    /* 正则转换 */
    var evalRegexp = function (str) {
        var reg_str = str.replace(/\*/g, '.*?');
        var reg = new RegExp(reg_str);
        return reg;
    };
    /* 转换地址 */
    var transformURL = function () {
        for (var k in URL_formater) {
            if (evalRegexp(k).test(g.hostname)) {
                return URL_formater[k]();
            }
        }
        return null;
    };
    /* 过滤无用配置 */
    var filterOptions = function () {
        extend(g, transformURL());
        var len = analyticsConfig.length;
        var res = [];
        for (var i = 0; i < len; i++) {
            if (evalRegexp(analyticsConfig[i]['r']).test(g._href)) {
                res.push(analyticsConfig[i]);
            }
        }
        return res;
    };
    /* 合并配置 */
    var getOptions = function () {
        var optionsArr = filterOptions();
        var len = optionsArr.length;
        var res = {};
        for (var i = 0; i < len; i++) {
            res = extend(true, res, optionsArr[i]);
        }
        return res;
    };
    /* URL辅助方法*/
    function get_parameter(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&#]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results == null)
            return "";
        else
            return results[1];
    }

    function getDomain(thestring) {
        var urlpattern = new RegExp("(http|ftp|https)://(.*?)/.*$");
        var parsedurl = thestring.match(urlpattern);
        if (parsedurl == null)
            return "";
        else
            return parsedurl[2];
    }
    /* 统计函数 */
    var h = function (options) {
        if (options.siteId) {
            var src = g.protocol + 'hm.baidu.com/h.js?' + options.siteId;
            setTimeout(function () { loadJS(src) }, 10);
        }
    };
    var ga = function (options) {
		/*
        if (options.siteId) {
            options.beforeLoad && options.beforeLoad();
            _gaq.push(['_setAccount', options.siteId]);
            if (typeof options.customVar == 'function') {
                options.customVar();
            } else if (isArray(options.customVar)) {
                for (var i = 0; i < options.customVar.length; i++) {
                    _gaq.push(options.customVar[i]);
                }
            }
            var src = g.protocol + 'stats.g.doubleclick.net/dc.js';
            setTimeout(function () { loadJS(src) }, 10);
        }
		*/
    };
	var newga = function(options){
		/*
		if(options.siteId){
			 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','GA');
			GA('create', options.siteId, 'auto');
			GA('require', 'displayfeatures');
			GA('require', 'linkid', 'linkid.js');
			GA('send', 'pageview');

		}
		*/
	}
    var wa = function (options) {
        _mtxq.push(['_setDomainName', options.domainName]);
        if (typeof options.customVar == 'function') {
            options.customVar();
        } else if (isArray(options.customVar)) {
            for (var i = 0; i < options.customVar.length; i++) {
                _mtxq.push(options.customVar[i]);
            }
        }
        var src = '../www.wanmei.com/wa.js';
        if (g.domain == '.4games.com') src = '../www.4games.com/wa.js';
        setTimeout(function () { loadJS(src) }, 10);
    };
    var sm = function (options) {
        if (options.siteId) {
            _smq.push(['_setAccount', options.siteId, new Date()]);
            if (typeof options.customVar == 'function') {
                options.customVar();
            } else if (isArray(options.customVar)) {
                for (var i = 0; i < options.customVar.length; i++) {
                    _smq.push(options.customVar[i]);
                }
            }
            var src = '../cdnmaster.com/sitemaster/sm.js';
            setTimeout(function () { loadJS(src) }, 10);
        }
    };
    var adm = function (options) {
        var src = '../e.admaster.com.cn/sod/admBcnActwm2.html';
        loadJS(src, function () {
            var cmpnId = options;
            var actInfo = (new Date()).getTime();
            var weight = 1;
            var tagStr = "";
            admBcnActGen(cmpnId, actInfo, weight, tagStr);
        });
    };
    var miaozhen = function (options) {
        if (options.siteId) {
            var c = document.createElement('script');
            c.type = 'text/javascript';
            c.async = true;
            c.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'sitemonitor.cn.miaozhen.com/boot/' + options.siteId;
            var h = document.getElementsByTagName('script')[0];
            h.parentNode.insertBefore(c, h);
        }
    }
	
	var tagmanager = function (options){
		(function(a, b, c, d, e, f) {
			a[d] = a[d] || [];
			var g = a[e] = a[e] || {};
			a.tagmangerGlobalObject = e, g[f] = {dlName: d};
			var h = b.getElementsByTagName(c)[0], i = b.createElement(c);
			i.async = !0, i.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://cdn') + '.tagmanager.cn/boot/' + f + '.js', h.parentNode.insertBefore(i, h)
		})(window, document, 'script', 'TGDataLayer', 'tagmanager', options.siteId);
	}
	
    var factory = function (options) {
        if (options.h) h(options.h);
        if (options.ga) ga(options.ga);
        if (options.wa) wa(options.wa);
        if (options.sm) sm(options.sm);
        if (options.adm) adm(options.adm);
        if (options.miaozhen) miaozhen(options.miaozhen);
		if (options.tm) tagmanager(options.tm);
        if (options.wmrid) _wmrid = options.wmrid;
		if (options.newga) newga(options.newga);
    };

    window.compositeStat = function (options) {
        options = extend(getOptions(), options);
        factory(options);
    }
    window.singleStat = function (str) {
        var id = typeof str == 'string' ? 'wm_analytics_' + str : 'wm_analytics_';
        var serverid = "http://cookie.bi.wanmei.com/servlet/wanmei.html";
        var serverid2 = "http://cookie.bi.wanmei.com/servlet/huodongcount.html";
        var addr = encodeURIComponent(htmlencode(window.location.href)) + '&referer=' + encodeURIComponent(document.referrer);
        if (typeof str == 'string') { addr += '&bihuodongid=' + encodeURIComponent(str); }
        addr = '<iframe id="' + id + '" src="' + serverid + '?addr=' + addr + '" scrolling="no"  frameborder="0" style="height:0px;wideht:0px;margin:0px; padding:0px;" ></iframe>';
        var bidiv = document.createElement('div');
        bidiv.style.display = 'none';
        bidiv.innerHTML = addr;
        document.body.appendChild(bidiv);
    }

    function htmlencode(str) {
        var s = "";
        if (str.length == 0) return "";
        s = str.replace(/&/g, "&gt;");
        s = s.replace(/</g, "&lt;");
        s = s.replace(/>/g, "&gt;");
        s = s.replace(/    /g, "&nbsp;");
        s = s.replace(/\'/g, "'");
        s = s.replace(/\"/g, "&quot;");
        s = s.replace(/\n/g, "<br>");
        return s;

    }
    //init
    function newFn(str) {
        var _var;
        try {
            _var = new Function('', 'return' + str)();
        } catch (e) {
            _var = str;
        }
        return _var;
    }

    compositeStat();
    var elems = document.getElementsByTagName('*');
    for (var i = 0; i < elems.length; i++) {
        if (/((.+)( +)|\b)wm-public(( +)(.+)|\b)/.test(elems[i].className.replace(/(^\s*)|(\s*$)/g, ""))) {
            /*if (elems[i].getAttribute('analytics')) {
                var obj = newFn(elems[i].getAttribute('analytics'));
                if (obj.single) {
                    if (isArray(obj.single)) {
                        for (var i = 0; i < obj.single.length; i++) {
                            singleStat(obj.single[i]);
                        }
                    } else {
                        singleStat(obj.single);
                    }
                }
                break;
            }*/
            if (elems[i].getAttribute('wmrid')) {
                _wmrid = elems[i].getAttribute('wmrid');
            }
        }
    }

    if (_wmrid) {
        var D = new Date();
        D.setTime(D.getTime() + 10800000);
        document.cookie = "WMRID=" + _wmrid + ";path=/;domain=.wanmei.com;expires=" + D.toGMTString();
    }

})();

var trackEvent = function (k, v) {
    try {
        _mtxq.push(["_trackActionEvent", k, v]);
    } catch (e) { }
}