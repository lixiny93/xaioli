console.log('https://github.com/nctqaq/web_voice_player');
var voiceDirectory = './audio/cxk/';
var list = ['鸡', '你', '太', '美', '', '唱', '跳', 'rap', '篮球', '', '段落一', '段落二', '', '鸡你太美', '鸡你太美2', '', '鸡你实在是太美', '', '第一次', '呀变成这', '样的我', '', '不管我怎么去否认', '迎面走来的你让我如此蠢蠢欲动', '这种感觉我从未有Cause_I_got_a_crush_on_you_who_you', '你是我的，我是，你的，谁', '再多一眼看一眼就会爆炸', '再近一点靠近点快被融化', '想要把你占为己有BabyBae', '不管走到哪里都会想起的人是你YouYou', '我应该拿你怎样', '啊！', '所有人都在看着你', '我的心总是不安', '我现在已病入膏肓', '诶~呦', '难道', '真的', '因你而疯狂吗', '我本来不是这种人', '因你变成奇怪的人', '你干嘛哈哈哟'];
function createButton(voiceDirectory, name, filenameExtension) {
    if (name == '') {
        document.body.append(document.createElement('br'));
        console.log('Load:empty arr');
    }
    else {
        element = document.createElement('input');
        element.type = 'button';
        element.value = name;
        element.addEventListener('click', out, false);
        container = document.getElementsByTagName('body')[0];
        container.appendChild(element);
        function out() {
            new Audio(voiceDirectory + name + filenameExtension).play();
            console.log('PlaySoundFileName:' + voiceDirectory + name + filenameExtension);
        }
        console.log('Load:' + voiceDirectory + name + filenameExtension);
    }

}
for (var i = 0; i < list.length; i++) {
    createButton('./audio/cxk/', list[i], '.wav');
}
