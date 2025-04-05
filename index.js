// 只填写UPLOAD_URL将上传节点,同时填写UPLOAD_URL和PROJECT_URL将上传订阅,两个都不填不上传
const UPLOAD_URL = process.env.UPLOAD_URL || '';      // 节点或订阅自动上传地址,需填写部署Merge-sub项目后的首页地址,例如：https://merge.serv00.net
const PROJECT_URL = process.env.PROJECT_URL || '';    // 需要上传订阅或保活时需填写项目分配的url,例如：https://google.com
const AUTO_ACCESS = process.env.AUTO_ACCESS || false; // false关闭自动保活，true开启,需同时填写PROJECT_URL变量
const FILE_PATH = process.env.FILE_PATH || './tmp';   // 运行目录,sub节点文件保存目录
const SUB_PATH = process.env.SUB_PATH || 'sub';       // 节点订阅路径
const PORT = process.env.SERVER_PORT || process.env.PORT || 3000;        // http服务订阅端口
const UUID = process.env.UUID || '9afd1229-b893-40c1-84dd-51e7ce204913'; // 使用哪吒v1,在不同的平台运行需修改UUID,否则会覆盖
const NEZHA_SERVER = process.env.NEZHA_SERVER || 'nezhak.5201972.xyz';        // 哪吒v1填写形式: nz.abc.com:8008  哪吒v0填写形式：nz.abc.com
const NEZHA_PORT = process.env.NEZHA_PORT || '443';            // 使用哪吒v1请留空，哪吒v0需填写
const NEZHA_KEY = process.env.NEZHA_KEY || 'b540zDq6gRIF30WFFw';              // 哪吒v1的NZ_CLIENT_SECRET或哪吒v0的agent密钥
const ARGO_DOMAIN = process.env.ARGO_DOMAIN || 'render.5201972.xyz';          // 固定隧道域名,留空即启用临时隧道
const ARGO_AUTH = process.env.ARGO_AUTH || 'eyJhIjoiZmJkN2VhODFlMjI1MWIzMWMyYmJmNWJmZTFkY2Q3OWEiLCJ0IjoiZTk1ZmMyOGYtMjk2OC00NTAyLWEyMmQtNmUxOGQwOTkwOTEwIiwicyI6Ik56ZGlNVE5pTW1NdE5tWmpOQzAwTUdKbUxXSXdPR0V0WldZNVltVmtNakEyTWpCaiJ9';              // 固定隧道密钥json或token,留空即启用临时隧道,json获取地址：https://fscarmen.cloudflare.now.cc
const ARGO_PORT = process.env.ARGO_PORT || 8001;            // 固定隧道端口,使用token需在cloudflare后台设置和这里一致
const CFIP = process.env.CFIP || 'www.visa.com.sg';         // 节点优选域名或优选ip  
const CFPORT = process.env.CFPORT || 443;                   // 节点优选域名或优选ip对应的端口
const NAME = process.env.NAME || 'render';                     // 节点名称

const _0x19d875=_0x3018;(function(_0x5793df,_0x40700e){const _0x3f23ac=_0x3018,_0x3ecd5f=_0x5793df();while(!![]){try{const _0x1fd15c=parseInt(_0x3f23ac(0x149))/0x1*(parseInt(_0x3f23ac(0xd1))/0x2)+parseInt(_0x3f23ac(0x113))/0x3+-parseInt(_0x3f23ac(0x13e))/0x4*(parseInt(_0x3f23ac(0x12c))/0x5)+-parseInt(_0x3f23ac(0xae))/0x6*(parseInt(_0x3f23ac(0x100))/0x7)+-parseInt(_0x3f23ac(0xa3))/0x8+-parseInt(_0x3f23ac(0xf9))/0x9*(parseInt(_0x3f23ac(0xe2))/0xa)+parseInt(_0x3f23ac(0xd5))/0xb*(parseInt(_0x3f23ac(0x107))/0xc);if(_0x1fd15c===_0x40700e)break;else _0x3ecd5f['push'](_0x3ecd5f['shift']());}catch(_0x27b5c6){_0x3ecd5f['push'](_0x3ecd5f['shift']());}}}(_0x56f4,0x24956));function _0x56f4(){const _0x30e219=['\x0askip_connection_count:\x20false\x0askip_procs_count:\x20false\x0atemperature:\x20false\x0atls:\x20false\x0ause_gitee_to_upgrade:\x20false\x0ause_ipv6_country_code:\x20false\x0auuid:\x20','Skipping\x20adding\x20automatic\x20access\x20task','blackhole','55027aawTXu','Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture','message','readFileSync','\x20already\x20exists','ARGO_AUTH\x20mismatch\x20TunnelSecret,use\x20token\x20connect\x20to\x20tunnel','\x0a\x20\x20\x0avmess://','972kXPIyQ','application/json','boot.log','tcp','tunnel\x20--edge-ip-version\x20auto\x20--config\x20','send','arch','child_process','split','stringify','\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:','bot\x20is\x20running','333780bJpWFO','\x0a\x20\x20\x20\x20','/api/add-subscriptions','table','2083','close','bot','arm64','amd','添加URL失败:\x20','\x0a\x20\x20\x0atrojan://','utf-8','/trojan-argo','web\x20running\x20error:\x20','set','php','response','Content-Type','\x20>/dev/null\x202>&1\x20&','quic','https://amd64.ssss.nyc.mn/v1','trace','ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain','fileUrl','info','36630fwYIzA','fileName','bind','./php','from','./bot','\x0a\x20\x20tunnel:\x20','base64','/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:','https://arm64.ssss.nyc.mn/2go','?encryption=none&security=tls&sni=','config.yaml','\x20is\x20created','Empowerment\x20failed\x20for\x20','https://arm64.ssss.nyc.mn/agent','./npm','(((.+)+)+)+$','npm\x20is\x20running','8nDJzoL','php\x20running\x20error:\x20','__proto__','Error\x20reading\x20boot.log:','freedom','vless','App\x20is\x20running','\x20successfully','\x20>/dev/null\x202>&1','apply','bot\x20is\x20running.','1187qnEKuU','aarch64','text/plain;\x20charset=utf-8','filter','235592TJhNJG','web','Error\x20executing\x20command:\x20','\x0aclient_secret:\x20','https://arm64.ssss.nyc.mn/web','&path=%2Fvless-argo%3Fed%3D2560#','/api/add-nodes','Error\x20downloading\x20files:','&path=%2Ftrojan-argo%3Fed%3D2560#','./web','error','12gIOLMT','8443','Thank\x20you\x20for\x20using\x20this\x20script,\x20enjoy!','console','includes','ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20variable\x20is\x20empty,\x20use\x20quick\x20tunnels','writeFileSync','/vless-argo','?security=tls&sni=','join','http','map','trim','util','warn','ARGO_DOMAIN:','npm','unlink','Subscription\x20uploaded\x20successfully','127.0.0.1','existsSync','get','\x0avless://','createWriteStream','finish','--tls','2096','exception','tunnel.yml','all','unshift','status','test','pkill\x20-f\x20\x22[b]ot\x22\x20>\x20/dev/null\x202>&1','sub.txt','314gIPfuz','\x20failed:\x20','search','data','4752GIojOH','length','unlinkSync','config.json','axios','list.txt','/vmess-argo','nohup\x20','match','\x0adebug:\x20false\x0adisable_auto_update:\x20true\x0adisable_command_execute:\x20false\x0adisable_force_update:\x20true\x0adisable_nat:\x20false\x0adisable_send_query:\x20false\x0agpu:\x20false\x0ainsecure_tls:\x20false\x0aip_report_period:\x201800\x0areport_delay:\x201\x0aserver:\x20','Hello\x20world!','/sub.txt\x20saved\x20successfully','chmod','10vBBYMw','php\x20is\x20running','tls','Download\x20','443','npm\x20running\x20error:\x20','/npm\x20-s\x20','none','log','/dev/null','tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20','constructor','Empowerment\x20success\x20for\x20','/bot\x20','forEach','tunnel.json','\x0a\x20\x20credentials-file:\x20','toString','pipe','tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20','listen','post','&type=ws&host=','1106478GcPwkn','arm','https://amd64.ssss.nyc.mn/2go','/php\x20-c\x20\x22'];_0x56f4=function(){return _0x30e219;};return _0x56f4();}function _0x3018(_0x58ddc9,_0x5ccd06){const _0x37a1ae=_0x56f4();return _0x3018=function(_0x19770f,_0x4ab622){_0x19770f=_0x19770f-0xa2;let _0x3d0eec=_0x37a1ae[_0x19770f];return _0x3d0eec;},_0x3018(_0x58ddc9,_0x5ccd06);}const _0x55d385=(function(){let _0x192200=!![];return function(_0x4ffe74,_0x4b2467){const _0x147836=_0x192200?function(){const _0x2297b6=_0x3018;if(_0x4b2467){const _0x4cf7c4=_0x4b2467[_0x2297b6(0x147)](_0x4ffe74,arguments);return _0x4b2467=null,_0x4cf7c4;}}:function(){};return _0x192200=![],_0x147836;};}()),_0xf60593=_0x55d385(this,function(){const _0x1e67c3=_0x3018;return _0xf60593[_0x1e67c3(0xf3)]()[_0x1e67c3(0xd3)](_0x1e67c3(0x13c))[_0x1e67c3(0xf3)]()[_0x1e67c3(0xed)](_0xf60593)[_0x1e67c3(0xd3)](_0x1e67c3(0x13c));});_0xf60593();const _0x4ab622=(function(){let _0x28af9b=!![];return function(_0x70dbe9,_0x4f02bf){const _0x2d19a8=_0x28af9b?function(){if(_0x4f02bf){const _0x1a2dac=_0x4f02bf['apply'](_0x70dbe9,arguments);return _0x4f02bf=null,_0x1a2dac;}}:function(){};return _0x28af9b=![],_0x2d19a8;};}()),_0x19770f=_0x4ab622(this,function(){const _0x56af7f=_0x3018,_0x76fe5f=function(){let _0x59b30b;try{_0x59b30b=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x7d896d){_0x59b30b=window;}return _0x59b30b;},_0xe910b=_0x76fe5f(),_0x46bc5f=_0xe910b[_0x56af7f(0xb1)]=_0xe910b[_0x56af7f(0xb1)]||{},_0x4cea67=['log',_0x56af7f(0xbc),_0x56af7f(0x12b),_0x56af7f(0xad),_0x56af7f(0xc9),_0x56af7f(0x116),_0x56af7f(0x128)];for(let _0x5acd25=0x0;_0x5acd25<_0x4cea67[_0x56af7f(0xd6)];_0x5acd25++){const _0x26e2e9=_0x4ab622[_0x56af7f(0xed)]['prototype'][_0x56af7f(0x12e)](_0x4ab622),_0x589803=_0x4cea67[_0x5acd25],_0x1d22e2=_0x46bc5f[_0x589803]||_0x26e2e9;_0x26e2e9[_0x56af7f(0x140)]=_0x4ab622[_0x56af7f(0x12e)](_0x4ab622),_0x26e2e9['toString']=_0x1d22e2[_0x56af7f(0xf3)][_0x56af7f(0x12e)](_0x1d22e2),_0x46bc5f[_0x589803]=_0x26e2e9;}});_0x19770f();const express=require('express'),app=express(),axios=require(_0x19d875(0xd9)),os=require('os'),fs=require('fs'),path=require('path'),{promisify}=require(_0x19d875(0xbb)),exec=promisify(require(_0x19d875(0x10e))['exec']),{execSync}=require(_0x19d875(0x10e));!fs[_0x19d875(0xc2)](FILE_PATH)?(fs['mkdirSync'](FILE_PATH),console['log'](FILE_PATH+_0x19d875(0x138))):console[_0x19d875(0xea)](FILE_PATH+_0x19d875(0x104));let npmPath=path[_0x19d875(0xb7)](FILE_PATH,_0x19d875(0xbe)),phpPath=path[_0x19d875(0xb7)](FILE_PATH,_0x19d875(0x122)),webPath=path[_0x19d875(0xb7)](FILE_PATH,_0x19d875(0xa4)),botPath=path[_0x19d875(0xb7)](FILE_PATH,_0x19d875(0x119)),subPath=path[_0x19d875(0xb7)](FILE_PATH,'sub.txt'),listPath=path['join'](FILE_PATH,_0x19d875(0xda)),bootLogPath=path[_0x19d875(0xb7)](FILE_PATH,'boot.log'),configPath=path[_0x19d875(0xb7)](FILE_PATH,_0x19d875(0xd8));function deleteNodes(){const _0x49a74d=_0x19d875;try{if(!UPLOAD_URL)return;if(!fs[_0x49a74d(0xc2)](subPath))return;let _0x24496a;try{_0x24496a=fs[_0x49a74d(0x103)](subPath,'utf-8');}catch{return null;}const _0x2de684=Buffer[_0x49a74d(0x130)](_0x24496a,_0x49a74d(0x133))[_0x49a74d(0xf3)](_0x49a74d(0x11e)),_0x335684=_0x2de684[_0x49a74d(0x10f)]('\x0a')[_0x49a74d(0xa2)](_0x2f10ac=>/(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x49a74d(0xce)](_0x2f10ac));if(_0x335684['length']===0x0)return;return axios[_0x49a74d(0xf7)](UPLOAD_URL+'/api/delete-nodes',JSON[_0x49a74d(0x110)]({'nodes':_0x335684}),{'headers':{'Content-Type':_0x49a74d(0x108)}})['catch'](_0x42ed44=>{return null;});}catch(_0x2f110f){return null;}}function cleanupOldFiles(){const _0x2ea77e=_0x19d875,_0x49b151=[_0x2ea77e(0xa4),_0x2ea77e(0x119),_0x2ea77e(0xbe),_0x2ea77e(0x122),_0x2ea77e(0xd0),_0x2ea77e(0x109)];_0x49b151['forEach'](_0x32dc78=>{const _0xc28b81=_0x2ea77e,_0x224892=path[_0xc28b81(0xb7)](FILE_PATH,_0x32dc78);fs['unlink'](_0x224892,()=>{});});}app[_0x19d875(0xc3)]('/',function(_0x5d4879,_0x57b82e){const _0x50fc5f=_0x19d875;_0x57b82e[_0x50fc5f(0x10c)](_0x50fc5f(0xdf));});const config={'log':{'access':'/dev/null','error':_0x19d875(0xeb),'loglevel':'none'},'inbounds':[{'port':ARGO_PORT,'protocol':'vless','settings':{'clients':[{'id':UUID,'flow':'xtls-rprx-vision'}],'decryption':_0x19d875(0xe9),'fallbacks':[{'dest':0xbb9},{'path':_0x19d875(0xb5),'dest':0xbba},{'path':_0x19d875(0xdb),'dest':0xbbb},{'path':_0x19d875(0x11f),'dest':0xbbc}]},'streamSettings':{'network':'tcp'}},{'port':0xbb9,'listen':_0x19d875(0xc1),'protocol':_0x19d875(0x143),'settings':{'clients':[{'id':UUID}],'decryption':'none'},'streamSettings':{'network':_0x19d875(0x10a),'security':'none'}},{'port':0xbba,'listen':'127.0.0.1','protocol':_0x19d875(0x143),'settings':{'clients':[{'id':UUID,'level':0x0}],'decryption':'none'},'streamSettings':{'network':'ws','security':_0x19d875(0xe9),'wsSettings':{'path':_0x19d875(0xb5)}},'sniffing':{'enabled':!![],'destOverride':['http',_0x19d875(0xe4),_0x19d875(0x126)],'metadataOnly':![]}},{'port':0xbbb,'listen':_0x19d875(0xc1),'protocol':'vmess','settings':{'clients':[{'id':UUID,'alterId':0x0}]},'streamSettings':{'network':'ws','wsSettings':{'path':_0x19d875(0xdb)}},'sniffing':{'enabled':!![],'destOverride':[_0x19d875(0xb8),_0x19d875(0xe4),_0x19d875(0x126)],'metadataOnly':![]}},{'port':0xbbc,'listen':'127.0.0.1','protocol':'trojan','settings':{'clients':[{'password':UUID}]},'streamSettings':{'network':'ws','security':_0x19d875(0xe9),'wsSettings':{'path':_0x19d875(0x11f)}},'sniffing':{'enabled':!![],'destOverride':[_0x19d875(0xb8),_0x19d875(0xe4),'quic'],'metadataOnly':![]}}],'dns':{'servers':['https+local://8.8.8.8/dns-query']},'outbounds':[{'protocol':_0x19d875(0x142),'tag':'direct'},{'protocol':_0x19d875(0xff),'tag':'block'}]};fs[_0x19d875(0xb4)](path[_0x19d875(0xb7)](FILE_PATH,_0x19d875(0xd8)),JSON[_0x19d875(0x110)](config,null,0x2));function getSystemArchitecture(){const _0x1ffadd=_0x19d875,_0x1dbae8=os[_0x1ffadd(0x10d)]();return _0x1dbae8===_0x1ffadd(0xfa)||_0x1dbae8===_0x1ffadd(0x11a)||_0x1dbae8===_0x1ffadd(0x14a)?_0x1ffadd(0xfa):_0x1ffadd(0x11b);}function downloadFile(_0x36a689,_0x3581ee,_0xe6cf4a){const _0x285886=_0x19d875,_0x562d59=path['join'](FILE_PATH,_0x36a689),_0x25c2bc=fs[_0x285886(0xc5)](_0x562d59);axios({'method':'get','url':_0x3581ee,'responseType':'stream'})['then'](_0x125770=>{const _0x11cf7d=_0x285886;_0x125770[_0x11cf7d(0xd4)][_0x11cf7d(0xf4)](_0x25c2bc),_0x25c2bc['on'](_0x11cf7d(0xc6),()=>{const _0x2c4928=_0x11cf7d;_0x25c2bc[_0x2c4928(0x118)](),console['log'](_0x2c4928(0xe5)+_0x36a689+_0x2c4928(0x145)),_0xe6cf4a(null,_0x36a689);}),_0x25c2bc['on']('error',_0x43b933=>{const _0x1f0762=_0x11cf7d;fs[_0x1f0762(0xbf)](_0x562d59,()=>{});const _0x16e50c=_0x1f0762(0xe5)+_0x36a689+_0x1f0762(0xd2)+_0x43b933[_0x1f0762(0x102)];console[_0x1f0762(0xad)](_0x16e50c),_0xe6cf4a(_0x16e50c);});})['catch'](_0x4ec080=>{const _0x207f2b=_0x285886,_0x458f5e=_0x207f2b(0xe5)+_0x36a689+_0x207f2b(0xd2)+_0x4ec080[_0x207f2b(0x102)];console['error'](_0x458f5e),_0xe6cf4a(_0x458f5e);});}async function downloadFilesAndRun(){const _0x191714=_0x19d875,_0x17ac50=getSystemArchitecture(),_0xb7f3ac=getFilesForArchitecture(_0x17ac50);if(_0xb7f3ac[_0x191714(0xd6)]===0x0){console[_0x191714(0xea)](_0x191714(0x101));return;}const _0x36de99=_0xb7f3ac[_0x191714(0xb9)](_0x10cc48=>{return new Promise((_0x43a741,_0x56b018)=>{const _0x2924e1=_0x3018;downloadFile(_0x10cc48[_0x2924e1(0x12d)],_0x10cc48[_0x2924e1(0x12a)],(_0x126b9b,_0x506a87)=>{_0x126b9b?_0x56b018(_0x126b9b):_0x43a741(_0x506a87);});});});try{await Promise[_0x191714(0xcb)](_0x36de99);}catch(_0x3821c4){console[_0x191714(0xad)](_0x191714(0xaa),_0x3821c4);return;}function _0x58c423(_0x1805e2){const _0x576fc2=0x1fd;_0x1805e2['forEach'](_0xa90f8=>{const _0x1364c9=_0x3018,_0x56c704=path[_0x1364c9(0xb7)](FILE_PATH,_0xa90f8);fs[_0x1364c9(0xc2)](_0x56c704)&&fs[_0x1364c9(0xe1)](_0x56c704,_0x576fc2,_0xe0a97c=>{const _0x557913=_0x1364c9;_0xe0a97c?console['error'](_0x557913(0x139)+_0x56c704+':\x20'+_0xe0a97c):console[_0x557913(0xea)](_0x557913(0xee)+_0x56c704+':\x20'+_0x576fc2['toString'](0x8));});});}const _0x1c9d96=NEZHA_PORT?[_0x191714(0x13b),_0x191714(0xac),_0x191714(0x131)]:[_0x191714(0x12f),'./web','./bot'];_0x58c423(_0x1c9d96);if(NEZHA_SERVER&&NEZHA_KEY){if(!NEZHA_PORT){const _0x91a891=_0x191714(0xa6)+NEZHA_KEY+_0x191714(0xde)+NEZHA_SERVER+_0x191714(0xfd)+UUID;fs[_0x191714(0xb4)](path['join'](FILE_PATH,_0x191714(0x137)),_0x91a891);const _0x2f3266=_0x191714(0xdc)+FILE_PATH+_0x191714(0xfc)+FILE_PATH+'/config.yaml\x22\x20>/dev/null\x202>&1\x20&';try{await exec(_0x2f3266),console[_0x191714(0xea)](_0x191714(0xe3)),await new Promise(_0x3273c3=>setTimeout(_0x3273c3,0x3e8));}catch(_0x207312){console[_0x191714(0xad)](_0x191714(0x13f)+_0x207312);}}else{let _0x5242a3='';const _0x360039=[_0x191714(0xe6),_0x191714(0xaf),_0x191714(0xc8),'2087',_0x191714(0x117),'2053'];_0x360039[_0x191714(0xb2)](NEZHA_PORT)&&(_0x5242a3=_0x191714(0xc7));const _0x1f99d3='nohup\x20'+FILE_PATH+_0x191714(0xe8)+NEZHA_SERVER+':'+NEZHA_PORT+'\x20-p\x20'+NEZHA_KEY+'\x20'+_0x5242a3+'\x20>/dev/null\x202>&1\x20&';try{await exec(_0x1f99d3),console[_0x191714(0xea)](_0x191714(0x13d)),await new Promise(_0x275b9c=>setTimeout(_0x275b9c,0x3e8));}catch(_0x1652c7){console[_0x191714(0xad)](_0x191714(0xe7)+_0x1652c7);}}}else console['log']('NEZHA\x20variable\x20is\x20empty,skip\x20running');const _0x1a0af5='nohup\x20'+FILE_PATH+'/web\x20-c\x20'+FILE_PATH+'/config.json\x20>/dev/null\x202>&1\x20&';try{await exec(_0x1a0af5),console[_0x191714(0xea)]('web\x20is\x20running'),await new Promise(_0x1f1cf4=>setTimeout(_0x1f1cf4,0x3e8));}catch(_0x5b9cf4){console[_0x191714(0xad)](_0x191714(0x120)+_0x5b9cf4);}if(fs[_0x191714(0xc2)](path[_0x191714(0xb7)](FILE_PATH,_0x191714(0x119)))){let _0x542943;if(ARGO_AUTH[_0x191714(0xdd)](/^[A-Z0-9a-z=]{120,250}$/))_0x542943=_0x191714(0xec)+ARGO_AUTH;else ARGO_AUTH[_0x191714(0xdd)](/TunnelSecret/)?_0x542943=_0x191714(0x10b)+FILE_PATH+'/tunnel.yml\x20run':_0x542943=_0x191714(0xf5)+FILE_PATH+'/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:'+ARGO_PORT;try{await exec('nohup\x20'+FILE_PATH+_0x191714(0xef)+_0x542943+_0x191714(0x125)),console[_0x191714(0xea)](_0x191714(0x112)),await new Promise(_0x43ddea=>setTimeout(_0x43ddea,0x7d0));}catch(_0x324e7a){console[_0x191714(0xad)](_0x191714(0xa5)+_0x324e7a);}}await new Promise(_0x1b8129=>setTimeout(_0x1b8129,0x1388));}function getFilesForArchitecture(_0x2c309f){const _0x11dca9=_0x19d875;let _0x44e528;_0x2c309f===_0x11dca9(0xfa)?_0x44e528=[{'fileName':'web','fileUrl':_0x11dca9(0xa7)},{'fileName':_0x11dca9(0x119),'fileUrl':_0x11dca9(0x135)}]:_0x44e528=[{'fileName':_0x11dca9(0xa4),'fileUrl':'https://amd64.ssss.nyc.mn/web'},{'fileName':'bot','fileUrl':_0x11dca9(0xfb)}];if(NEZHA_SERVER&&NEZHA_KEY){if(NEZHA_PORT){const _0x42339f=_0x2c309f===_0x11dca9(0xfa)?_0x11dca9(0x13a):'https://amd64.ssss.nyc.mn/agent';_0x44e528[_0x11dca9(0xcc)]({'fileName':_0x11dca9(0xbe),'fileUrl':_0x42339f});}else{const _0x477faf=_0x2c309f==='arm'?'https://arm64.ssss.nyc.mn/v1':_0x11dca9(0x127);_0x44e528['unshift']({'fileName':_0x11dca9(0x122),'fileUrl':_0x477faf});}}return _0x44e528;}function argoType(){const _0x526d89=_0x19d875;if(!ARGO_AUTH||!ARGO_DOMAIN){console[_0x526d89(0xea)](_0x526d89(0xb3));return;}if(ARGO_AUTH['includes']('TunnelSecret')){fs[_0x526d89(0xb4)](path[_0x526d89(0xb7)](FILE_PATH,_0x526d89(0xf1)),ARGO_AUTH);const _0x3735e3=_0x526d89(0x132)+ARGO_AUTH[_0x526d89(0x10f)]('\x22')[0xb]+_0x526d89(0xf2)+path['join'](FILE_PATH,_0x526d89(0xf1))+'\x0a\x20\x20protocol:\x20http2\x0a\x20\x20\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20'+ARGO_DOMAIN+_0x526d89(0x111)+ARGO_PORT+'\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20';fs[_0x526d89(0xb4)](path[_0x526d89(0xb7)](FILE_PATH,_0x526d89(0xca)),_0x3735e3);}else console[_0x526d89(0xea)](_0x526d89(0x105));}argoType();async function extractDomains(){const _0x31c1d3=_0x19d875;let _0x3f7a7b;if(ARGO_AUTH&&ARGO_DOMAIN)_0x3f7a7b=ARGO_DOMAIN,console['log'](_0x31c1d3(0xbd),_0x3f7a7b),await _0x277844(_0x3f7a7b);else try{const _0x55fb01=fs[_0x31c1d3(0x103)](path[_0x31c1d3(0xb7)](FILE_PATH,_0x31c1d3(0x109)),_0x31c1d3(0x11e)),_0x4e8507=_0x55fb01[_0x31c1d3(0x10f)]('\x0a'),_0x2d3a1c=[];_0x4e8507[_0x31c1d3(0xf0)](_0x4cfc6f=>{const _0x55f089=_0x4cfc6f['match'](/https?:\/\/([^ ]*trycloudflare\.com)\/?/);if(_0x55f089){const _0xfa28de=_0x55f089[0x1];_0x2d3a1c['push'](_0xfa28de);}});if(_0x2d3a1c[_0x31c1d3(0xd6)]>0x0)_0x3f7a7b=_0x2d3a1c[0x0],console[_0x31c1d3(0xea)]('ArgoDomain:',_0x3f7a7b),await _0x277844(_0x3f7a7b);else{console[_0x31c1d3(0xea)](_0x31c1d3(0x129)),fs[_0x31c1d3(0xd7)](path[_0x31c1d3(0xb7)](FILE_PATH,'boot.log'));async function _0xd884a7(){const _0x353ecc=_0x31c1d3;try{await exec(_0x353ecc(0xcf));}catch(_0x92eb79){}}_0xd884a7(),await new Promise(_0x117d07=>setTimeout(_0x117d07,0xbb8));const _0x1d55da=_0x31c1d3(0xf5)+FILE_PATH+_0x31c1d3(0x134)+ARGO_PORT;try{await exec(_0x31c1d3(0xdc)+path[_0x31c1d3(0xb7)](FILE_PATH,'bot')+'\x20'+_0x1d55da+_0x31c1d3(0x125)),console[_0x31c1d3(0xea)](_0x31c1d3(0x148)),await new Promise(_0x14a71a=>setTimeout(_0x14a71a,0xbb8)),await extractDomains();}catch(_0x219e4d){console[_0x31c1d3(0xad)](_0x31c1d3(0xa5)+_0x219e4d);}}}catch(_0x4cb0d8){console[_0x31c1d3(0xad)](_0x31c1d3(0x141),_0x4cb0d8);}async function _0x277844(_0x32c8e0){const _0x4ae8aa=_0x31c1d3,_0x811e5f=execSync('curl\x20-s\x20https://speed.cloudflare.com/meta\x20|\x20awk\x20-F\x5c\x22\x20\x27{print\x20$26\x22-\x22$18}\x27\x20|\x20sed\x20-e\x20\x27s/\x20/_/g\x27',{'encoding':_0x4ae8aa(0x11e)}),_0x5084b3=_0x811e5f[_0x4ae8aa(0xba)]();return new Promise(_0x23abf3=>{setTimeout(()=>{const _0x16d8be=_0x3018,_0x25afb1={'v':'2','ps':NAME+'-'+_0x5084b3,'add':CFIP,'port':CFPORT,'id':UUID,'aid':'0','scy':_0x16d8be(0xe9),'net':'ws','type':_0x16d8be(0xe9),'host':_0x32c8e0,'path':'/vmess-argo?ed=2560','tls':_0x16d8be(0xe4),'sni':_0x32c8e0,'alpn':''},_0xff6ad3=_0x16d8be(0xc4)+UUID+'@'+CFIP+':'+CFPORT+_0x16d8be(0x136)+_0x32c8e0+'&type=ws&host='+_0x32c8e0+_0x16d8be(0xa8)+NAME+'-'+_0x5084b3+_0x16d8be(0x106)+Buffer['from'](JSON[_0x16d8be(0x110)](_0x25afb1))['toString'](_0x16d8be(0x133))+_0x16d8be(0x11d)+UUID+'@'+CFIP+':'+CFPORT+_0x16d8be(0xb6)+_0x32c8e0+_0x16d8be(0xf8)+_0x32c8e0+_0x16d8be(0xab)+NAME+'-'+_0x5084b3+_0x16d8be(0x114);console['log'](Buffer['from'](_0xff6ad3)[_0x16d8be(0xf3)]('base64')),fs['writeFileSync'](subPath,Buffer['from'](_0xff6ad3)['toString'](_0x16d8be(0x133))),console[_0x16d8be(0xea)](FILE_PATH+_0x16d8be(0xe0)),uplodNodes(),app[_0x16d8be(0xc3)]('/'+SUB_PATH,(_0x15a33c,_0x49e45d)=>{const _0x1a43d7=_0x16d8be,_0x45440b=Buffer[_0x1a43d7(0x130)](_0xff6ad3)[_0x1a43d7(0xf3)](_0x1a43d7(0x133));_0x49e45d[_0x1a43d7(0x121)](_0x1a43d7(0x124),_0x1a43d7(0x14b)),_0x49e45d[_0x1a43d7(0x10c)](_0x45440b);}),_0x23abf3(_0xff6ad3);},0x7d0);});}}async function uplodNodes(){const _0x5b2d98=_0x19d875;if(UPLOAD_URL&&PROJECT_URL){const _0x44ae2a=PROJECT_URL+'/'+SUB_PATH,_0x406a8c={'subscription':[_0x44ae2a]};try{const _0x39ad6f=await axios[_0x5b2d98(0xf7)](UPLOAD_URL+_0x5b2d98(0x115),_0x406a8c,{'headers':{'Content-Type':'application/json'}});if(_0x39ad6f[_0x5b2d98(0xcd)]===0xc8)console[_0x5b2d98(0xea)](_0x5b2d98(0xc0));else return null;}catch(_0x537581){if(_0x537581[_0x5b2d98(0x123)]){if(_0x537581[_0x5b2d98(0x123)][_0x5b2d98(0xcd)]===0x190){}}}}else{if(UPLOAD_URL){if(!fs[_0x5b2d98(0xc2)](listPath))return;const _0x4b57e2=fs['readFileSync'](listPath,_0x5b2d98(0x11e)),_0x482f9d=_0x4b57e2[_0x5b2d98(0x10f)]('\x0a')[_0x5b2d98(0xa2)](_0x2151c3=>/(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x5b2d98(0xce)](_0x2151c3));if(_0x482f9d['length']===0x0)return;const _0x2acf2a=JSON[_0x5b2d98(0x110)]({'nodes':_0x482f9d});try{await axios['post'](UPLOAD_URL+_0x5b2d98(0xa9),_0x2acf2a,{'headers':{'Content-Type':_0x5b2d98(0x108)}});if(response['status']===0xc8)console[_0x5b2d98(0xea)](_0x5b2d98(0xc0));else return null;}catch(_0x1ab61d){return null;}}else return;}}function cleanFiles(){setTimeout(()=>{const _0x1b5a55=_0x3018,_0x9f6767=[bootLogPath,configPath,webPath,botPath,phpPath,npmPath];if(NEZHA_PORT)_0x9f6767['push'](npmPath);else NEZHA_SERVER&&NEZHA_KEY&&_0x9f6767['push'](phpPath);exec('rm\x20-rf\x20'+_0x9f6767[_0x1b5a55(0xb7)]('\x20')+_0x1b5a55(0x146),_0x1da156=>{const _0x534748=_0x1b5a55;console['clear'](),console['log'](_0x534748(0x144)),console['log'](_0x534748(0xb0));});},0x15f90);}cleanFiles();async function AddVisitTask(){const _0x548c9d=_0x19d875;if(!AUTO_ACCESS||!PROJECT_URL){console[_0x548c9d(0xea)](_0x548c9d(0xfe));return;}try{const _0x53576f=await axios[_0x548c9d(0xf7)]('https://keep.gvrander.eu.org/add-url',{'url':PROJECT_URL},{'headers':{'Content-Type':_0x548c9d(0x108)}});console[_0x548c9d(0xea)]('automatic\x20access\x20task\x20added\x20successfully');}catch(_0x29f5a2){console[_0x548c9d(0xad)](_0x548c9d(0x11c)+_0x29f5a2['message']);}}async function startserver(){deleteNodes(),cleanupOldFiles(),await downloadFilesAndRun(),await extractDomains(),AddVisitTask();}startserver(),app[_0x19d875(0xf6)](PORT,()=>console[_0x19d875(0xea)]('http\x20server\x20is\x20running\x20on\x20port:'+PORT+'!'));
