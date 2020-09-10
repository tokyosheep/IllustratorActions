# IllustratorActions

Illustrator上のscriptでactionを生成して実行する流れをオブジェクト、メソッド化して簡素化。
コンストラクトオブジェクトにアクションの種類とオプションを渡してlaunchActionメソッドでアクションを実行。
現在対応しているアクションは
リサイズ
回転
移動
反転
塗りつぶしの色変更
線の色変更

具体的には
var fill = new CreateAction(filloutActionRGB,{red:20,green:100,blue:220});
とインスタンスを生成、後は
fill.launchAction();
でアクション実行
